module.exports = async (req, res) => {
    const { q } = req.query;
    if (!q) {
        return res.status(400).json({ success: false, error: "Missing query parameter 'q'" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ success: false, error: "GEMINI_API_KEY tidak dikonfigurasi di Vercel." });
    }

    const systemInstruction = `
Anda adalah pakar bahasa Arab dan penyusun Kamus Al-Munawwir Arab-Indonesia.
Tugas Anda adalah menganalisis kata bahasa Arab yang diberikan.

PENTING:
Jika kata tersebut adalah KATA KERJA (Fi'il), berikan tabel Tashrif Isthilahi dan Lughowi.
Jika kata tersebut adalah KATA BENDA (Isim Jamid, Isim Alam, dll seperti kursi, buku), KOSONGKAN nilai isthilahi menjadi null dan lughowi menjadi array kosong []. Jangan paksa mentashrif kata benda baku!

Format JSON harus sama persis dengan struktur berikut:
{
  "arabicRoot": "Kata asli/akar kata",                  
  "transliteration": "Cara baca",            
  "rootLetters": "Huruf - akar",             
  "wazanType": "Jenis Wazan (Isi '-' jika bukan fi'il)",        
  "wazanPattern": "Pola Wazan (Isi '-' jika bukan fi'il)",    
  "wazanBab": "Bab Wazan (Isi '-' jika bukan fi'il)",          
  "briefDefinition": "Definisi singkat",    
  "definitions": [                        
    {
      "number": 1,
      "type": "Jenis kata (Isim/Fi'il)",
      "expression": "Contoh kalimat",
      "translation": "Terjemahan kalimat"
    }
  ],
  "isthilahi": {
    "madhi": "", "mudhori": "", "mashdar": "", "fail": "", "maful": "", "amr": "", "nahi": "", "makan": "", "alat": ""
  },
  "lughowi": [
    { "pronounName": "\\u0647\\u064f\\u0648\\u064e", "pronounIndo": "Dia (Lk. Tunggal)", "madhiConjugation": "", "mudhoriConjugation": "" },
    { "pronounName": "\\u0647\\u064f\\u0645\\u064e\\u0627", "pronounIndo": "Mereka berdua (Lk)", "madhiConjugation": "", "mudhoriConjugation": "" },
    { "pronounName": "\\u0647\\u064f\\u0645\\u0652", "pronounIndo": "Mereka (Lk. Jamak)", "madhiConjugation": "", "mudhoriConjugation": "" },
    { "pronounName": "\\u0647\\u0650\\u064a\\u064e", "pronounIndo": "Dia (Pr. Tunggal)", "madhiConjugation": "", "mudhoriConjugation": "" },
    { "pronounName": "\\u0647\\u064f\\u0645\\u064e\\u0627", "pronounIndo": "Mereka berdua (Pr)", "madhiConjugation": "", "mudhoriConjugation": "" },
    { "pronounName": "\\u0647\\u064f\\u0646\\u0651\\u064e", "pronounIndo": "Mereka (Pr. Jamak)", "madhiConjugation": "", "mudhoriConjugation": "" },
    { "pronounName": "\\u0623\\u064e\\u0646\\u0652\\u062a\\u064e", "pronounIndo": "Kamu (Lk. Tunggal)", "madhiConjugation": "", "mudhoriConjugation": "" },
    { "pronounName": "\\u0623\\u064e\\u0646\\u0652\\u062a\\u064f\\u0645\\u064e\\u0627", "pronounIndo": "Kamu berdua (Lk)", "madhiConjugation": "", "mudhoriConjugation": "" },
    { "pronounName": "\\u0623\\u064e\\u0646\\u0652\\u062a\\u064f\\u0645\\u0652", "pronounIndo": "Kalian (Lk. Jamak)", "madhiConjugation": "", "mudhoriConjugation": "" },
    { "pronounName": "\\u0623\\u064e\\u0646\\u0652\\u062a\\u0650", "pronounIndo": "Kamu (Pr. Tunggal)", "madhiConjugation": "", "mudhoriConjugation": "" },
    { "pronounName": "\\u0623\\u064e\\u0646\\u0652\\u062a\\u064f\\u0645\\u064e\\u0627", "pronounIndo": "Kamu berdua (Pr)", "madhiConjugation": "", "mudhoriConjugation": "" },
    { "pronounName": "\\u0623\\u064e\\u0646\\u0652\\u062a\\u064f\\u0646\\u0651\\u064e", "pronounIndo": "Kalian (Pr. Jamak)", "madhiConjugation": "", "mudhoriConjugation": "" },
    { "pronounName": "\\u0623\\u064e\\u0646\\u064e\\u0627", "pronounIndo": "Saya", "madhiConjugation": "", "mudhoriConjugation": "" },
    { "pronounName": "\\u0646\\u064e\\u062d\\u0652\\u0646\\u064f", "pronounIndo": "Kami/Kita", "madhiConjugation": "", "mudhoriConjugation": "" }
  ]
}`;

    const prompt = `Tolong analisis kata bahasa Arab berikut: '${q}' dan berikan hasil analisis lengkapnya sesuai skema JSON. Pastikan format output hanya JSON valid tanpa markdown tambahan.`;

    const payload = {
        contents: [{ parts: [{ text: prompt }] }],
        systemInstruction: { parts: [{ text: systemInstruction }] },
        generationConfig: {
            responseMimeType: "application/json",
            temperature: 0.1
        }
    };

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errText = await response.text();
            return res.status(500).json({ success: false, error: `Gemini API Error (${response.status}): ${errText || response.statusText}` });
        }

        const data = await response.json();
        const textResponse = data.candidates[0].content.parts[0].text;
        
        try {
            const wordData = JSON.parse(textResponse.trim());
            return res.status(200).json({ success: true, word: wordData });
        } catch (parseErr) {
            return res.status(500).json({ success: false, error: "Gagal memparsing JSON dari Gemini AI." });
        }
    } catch (error) {
        return res.status(500).json({ success: false, error: "Internal Server Error: " + error.message });
    }
};
