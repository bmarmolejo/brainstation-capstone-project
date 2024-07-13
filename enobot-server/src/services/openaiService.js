import axios from 'axios';

export const getPrediction = async (type, variety, region) => {
  const prompt = `
    Please predict the flavor profile of a ${type || 'wine'}${variety?.length ? ' made from ' + variety.join(', ') + ' grapes' : ''}${region ? ' in the ' + region + ' region' : ''}.
    
    The tone is casual and friendly but polite. Please start with an overall brief summary of the wine.
    Based on the input selections of the user, start with a phrase like "Nice choice!", "That sounds awesome!" or similar phrases.
    If the input selections are uncommon, start the response with "Uncommon choice!" or "That's interesting!".

    If the information provided includes uncommon grapes for the specified region, or if the user selects a type of wine that is not typically made from the selected grape, mention that the wine is uncommon and if it exists, it is probably because it is experimental or boutique. Provide a brief explanation why it is uncommon.
    If the wine is uncommon, do not provide a tasting profile or summary followed by details on 🧐 Visual, 👃 Nose and 👄 Palate.

    If the selections are typical, provide a summary followed by details on three points:

    🧐 Visual:
    👃 Nose:
    👄 Palate:

    End the response with: "Do you want to explore a new tasting profile? Hit the red button below." or similar phrases.
  `;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a virtual wine expert. Your name is EnoBot.' },
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

    const prediction = response.data.choices[0].message.content.trim();

    const wineRecommendationPrompt = `
      Based on the type, variety, and region provided, recommend a wine. ${type || ''} ${variety.join(', ')} ${region}.
    `;

    const foodRecommendationPrompt = `
      Based on the type, variety, and region provided, recommend food pairings. ${type || ''} ${variety.join(', ')} ${region}.
    `;

    const [wineRecommendationResponse, foodRecommendationResponse] = await Promise.all([
      axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a virtual wine expert. Your name is EnoBot, you will recommend a wine based on the type, variety, and/or region.' },
            { role: 'user', content: wineRecommendationPrompt }
          ],
          max_tokens: 200,
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      ),
      axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a virtual wine expert. Your name is EnoBot, you will recommend food pairings based on the type, variety, and/or region.' },
            { role: 'user', content: foodRecommendationPrompt }
          ],
          max_tokens: 200,
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      )
    ]);

    const wineRecommendation = wineRecommendationResponse.data.choices[0].message.content.trim();
    const foodRecommendation = foodRecommendationResponse.data.choices[0].message.content.trim();

    return {
      profile: prediction,
      wineRecommendation,
      foodRecommendation
    };
  } catch (error) {
    console.error('Error fetching prediction:', error.response ? error.response.data : error.message);
    throw new Error('Failed to get prediction');
  }
};
