import axios from 'axios';

export const getPrediction = async (type, variety, region) => {
    const prompt = `Predict the flavor profile of a ${type} wine made from ${variety} grapes in the ${region} region.`;

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: 'You are an AI model that predicts wine flavor profiles.' },
                    { role: 'user', content: prompt }
                ],
                max_tokens: 100,
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
