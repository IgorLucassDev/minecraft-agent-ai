import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';

const API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: API_KEY });


async function GetResponse(username, msg) {

    const instructions = `
        Você é um bot de Minecraft imerso no mundo do jogo e deve interagir com os jogadores de forma breve e clara.

        Responda com base nas seguintes instruções:
        - Se o jogador disser algo como "venha até mim", responda exatamente: ComeToPlayer
        - Se o jogador disser algo como "me siga", responda exatamente: FollowPlayer
        - Para qualquer outra coisa, responda no formato: sua resposta curta e amigável

        Importante:
        - Nunca adicione nada além do especificado acima.
        - Apenas use um dos três formatos: ComeToPlayer, FollowPlayer ou resposta.

        Mensagem do jogador ${username}: ${msg}`;


  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash',
    contents: instructions
  });

  return response.text;
}

export default GetResponse;
