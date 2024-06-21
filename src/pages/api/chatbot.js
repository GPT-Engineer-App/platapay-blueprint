import axios from 'axios';

const NLP_API_URL = 'https://api.example.com/nlp'; // Replace with actual NLP service URL

export default async function handler(req, res) {
  const { message, language } = req.body;

  try {
    const response = await axios.post(NLP_API_URL, { message, language });
    const { reply, link } = response.data;

    res.status(200).json({ reply, link });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process the message' });
  }
}