module.exports = async (req, res) => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ success: false, error: "GEMINI_API_KEY tidak dikonfigurasi di Vercel." });
    }
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
        const data = await response.json();
        return res.status(200).json({ success: true, models: data });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};
