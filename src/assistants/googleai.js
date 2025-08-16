import { GoogleGenAI } from "@google/genai";

const googleai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GOOGLE_AI_API_KEY
});

export class Assistant {
    constructor(model = 'gemini-2.5-flash') {
        this.model = model;
    }

    async chat(content) {
        try {
        const response = await googleai.models.generateContent({
            model: this.model,
            contents: content,
        });

        console.log("Raw response:", response);

        if(typeof response.text === "function") {
            return response.text();
        }

        const fallback = response.candidates?.[0]?.content?.parts?.[0]?.text;

        return fallback || "No response from model";
    } catch (error) {
        console.error("Gemini API error:", error);
        return "Error:" + error.message;
    }
}
}