

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMENI);
const chatHistory = []; 

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { prompt } = req.body;


    chatHistory.push(`User: ${prompt}`);

    
    const prePrompt = "Act as a conversational AI health assistant. Ask users about their symptoms using short, engaging questions (20-50 words). Gather information about their condition, including pain location, duration, and impact on daily life. Conclude by suggesting potential issues and simple remedies based on their responses. Make sure to record previous chats and give results based on previous chats. Ask maximum 6 questions and then give conclusion like what sort of steps to be taken to easily help. do not bold or highlight any texts in prompt you provide , avoid using * ";

   
    const fullPrompt = `${prePrompt}\n${chatHistory.join('\n')}`;

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(fullPrompt);
      const responseText = result.response.text();

      
      chatHistory.push(`${responseText}`);

      res.status(200).json({ text: responseText });
    } catch (error) {
      console.error("Error generating content:", error);
      res.status(500).json({ error: "Failed to generate content" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
