import openai from './config/openai.js';

async function getPoem() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Maak een kort rijmend gedicht.' }],
    model: 'gpt-3.5-turbo',
  });
  console.log(chatCompletion.choices[0].message.content);
}

getPoem();
