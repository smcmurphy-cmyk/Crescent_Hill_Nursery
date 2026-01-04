
import { GoogleGenAI } from "@google/genai";

// Fixed: Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generatePlantAdvice = async (userQuery: string, chatHistory: {role: string, parts: {text: string}[]}[] = []): Promise<string> => {
  if (!process.env.API_KEY) {
    return "I'm sorry, my connection to the nursery database (API Key) is missing. Please check the configuration.";
  }

  try {
    // Fixed: Always use ai.models.generateContent directly to query GenAI. 
    // Updated to 'gemini-3-flash-preview' for basic text tasks.
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...chatHistory,
        { role: 'user', parts: [{ text: userQuery }] }
      ],
      config: {
        systemInstruction: `You are 'Sage', the expert horticulturist and master gardener at Crescent Hill Nursery. 
      Your tone is warm, earthy, knowledgeable, and helpful.
      
      About Crescent Hill Nursery:
      - We specialize in native plants, sustainable gardening, and heirloom varieties.
      - We offer landscaping design and delivery services.
      - We are located in the beautiful rolling hills, open 7 days a week.

      Your Goal:
      - Help customers choose plants based on their conditions (sun, soil, water).
      - Diagnose basic plant problems based on descriptions.
      - Promote sustainable and organic gardening practices.
      - Keep answers concise (under 150 words) unless asked for a detailed guide.
      - If asked about inventory, assume we have common native species in stock but advise calling for specifics.
      `,
      },
    });

    // Fixed: The GenerateContentResponse object features a text property (not a method).
    return response.text || "I'm sorry, I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble digging up that information right now. Please try again in a moment.";
  }
};
