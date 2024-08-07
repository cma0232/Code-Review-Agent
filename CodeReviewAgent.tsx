import axios from 'axios';

const openaiApiKey = 'API_KEY';

async function reviewCode(code: string): Promise<string> {
  const response = await axios.post(
    'https://api.openai.com/v1/engines/davinci-codex/completions',
    {
      prompt: `Review the following TypeScript code and provide feedback:\n\n${code}`,
      max_tokens: 200, // Adjust as needed
    },
    {
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data.choices[0].text.trim();
}

// Example usage
const sampleCode = `
function greet(name: string): string {
  return 'Hello, ' + name;
}

reviewCode(sampleCode).then((feedback) => {
  console.log('Code Review Feedback:', feedback);
});
