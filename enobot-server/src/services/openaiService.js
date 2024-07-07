import axios from 'axios';

export const getPrediction = async (type, variety, region) => {
  const prompt = `
    Predict the flavor profile of a ${type} wine made from ${variety.join(', ')} grapes in the ${region} region.
    The answer should be brief and contain information about aroma, palate, tannins, body, acidity, and an overall brief summary.
    Politely decline if the question is not about wine.
  `;

  console.log('Constructed prompt:', prompt);

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a virtual wine expert. Your name is EnoBot, you will provide a typical wine taste profile based on the country, grapes, years in barrels, region, vineyard, wine type, and vintage.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 200,
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error fetching prediction:', error.response ? error.response.data : error.message);
    throw new Error('Failed to get prediction');
  }
};
