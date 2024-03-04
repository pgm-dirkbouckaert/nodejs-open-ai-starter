import openai from './config/openai.js';
import promptSync from 'prompt-sync';
const prompt = promptSync();

async function askQuestion() {
  const question = prompt('Wat is je vraag?: ');
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: question }],
    // model: 'gpt-3.5-turbo',
    model: 'gpt-4',
  });
  console.log(chatCompletion.choices[0].message.content);
}

askQuestion();
