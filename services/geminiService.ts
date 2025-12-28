
import { GoogleGenAI, Type } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async generateBrandConcept(industry: string, vibe: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Generate a creative brand concept for a business in the ${industry} industry with a ${vibe} vibe. Include a potential name, a tagline, and three visual identity directions.`,
        config: {
          systemInstruction: "You are Nika, an expert senior brand strategist at a world-class creative agency. Your tone is sophisticated, bold, and visionary. Use Markdown for formatting.",
        }
      });
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm sorry, I couldn't generate a strategy right now. Please try again later.";
    }
  }

  async chatWithStrategist(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
    try {
      const chat = this.ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: "You are Nika, a brand strategist. You help users with creative ideas, design advice, and marketing strategies. Keep it professional yet inspiring.",
        }
      });
      
      const result = await chat.sendMessage({ message });
      return result.text;
    } catch (error) {
      console.error("Gemini Chat Error:", error);
      throw error;
    }
  }
}

export const gemini = new GeminiService();
