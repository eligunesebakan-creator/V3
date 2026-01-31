
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the Imar Commercial AI Market Advisor. You are an expert in commercial real estate (CRE).
Your goal is to help users understand market trends, property management best practices, and investment strategies.
Be professional, authoritative, yet approachable. 
If asked about Imar Commercial, state that it is a premier commercial real estate firm focusing on excellence, integrity, and results.
Keep responses concise and formatted with markdown.
`;

export class GeminiService {
  private ai: GoogleGenAI;
  private chat: Chat | null = null;

  constructor() {
    // Fix: Initializing GoogleGenAI directly with process.env.API_KEY per guidelines
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async *sendMessageStream(message: string) {
    if (!this.chat) {
      this.chat = this.ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
    }

    const responseStream = await this.chat.sendMessageStream({ message });
    for await (const chunk of responseStream) {
      const c = chunk as GenerateContentResponse;
      // Fix: Use c.text property to extract content
      yield c.text;
    }
  }

  resetChat() {
    this.chat = null;
  }
}

export const geminiService = new GeminiService();