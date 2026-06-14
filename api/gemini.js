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
Tugas Anda adalah menganalisis kata bahasa Arab atau akar kata yang diberikan, lalu menerjemahkannya dan menyusun Tashrif (morfologi) lengkapnya dalam format JSON yang tepat.
Format JSON harus sama persis dengan struktur berikut dan tidak mengandung karakter markdown di luar blok json:
{
  "arabicRoot": "جَلَسَ",                  
  "transliteration": "Jalasa",            
  "rootLetters": "ج - ل - s",             
  "wazanType": "ثُلَاثِيٌّ مُجَرَّدٌ",        
  "wazanPattern": "فَعَلَ - يَفْعِلُ",    
  "wazanBab": "صَحِيْحٌ سَالِمٌ",          
  "briefDefinition": "Duduk, menetap",    
  "definitions": [                        
    {
      "number": 1,
      "type": "فِعْلٌ ثُلَاثِيٌّ مُجَرَّدٌ",
      "expression": "جَلَسَ عَلَى الْكُرْسِيِّ",
      "translation": "Duduk di atas kursi"
    }
  ],
  "isthilahi": {                          
    "madhi": "جَلَسَ",
    "mudhori": "يَجْلِسُ",
    "mashdar": "جُلُوسًا",
    "fail": "جَالِسٌ",
    "maful": "مَجْلُوسٌ",
    "amr": "اِجْلِسْ",
    "nahi": "لَا تَجْلِسْ",
    "makan": "مَجْلِسٌ",
    "zaman": "مَجْلِسٌ",
    "alat": "مِجْلَسٌ"
  },
  "lughowi": [                            
    { "pronounName": "هُوَ", "pronounIndo": "Dia (Lk. Tunggal)", "madhiConjugation": "جَلَسَ", "mudhoriConjugation": "يَجْلِسُ" },
    { "pronounName": "هُمَا", "pronounIndo": "Mereka Berdua (Lk)", "madhiConjugation": "جَلَسَا", "mudhoriConjugation": "يَجْلِسَانِ" }
  ]
}`;

    const prompt = `Tolong analisis kata bahasa Arab berikut: '${q}' dan berikan hasil analisis lengkapnya sesuai skema JSON.`;

    const payload = {
        contents: [{ parts: [{ text: prompt }] }],
        systemInstruction: { parts: [{ text: systemInstruction }] },
        generationConfig: {
            responseMimeType: "application/json",
            temperature: 0.1
        }
    };

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            return res.status(500).json({ success: false, error: `Gemini API Error: ${response.statusText}` });
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
