import db from '../database.js';

export const saveMessage = async (messageData) => {
  const { name, email, message } = messageData;
  const query = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
  const values = [name, email, message];

  try {
    const [result] = await db.query(query, values);
    return result;
  } catch (error) {
    throw new Error('Failed to save message');
  }
};
