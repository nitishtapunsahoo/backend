const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.get('/books', async (req, res) => {
    try {
        const response = await axios.get('https://api.example.com/books');  // Example API
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching books');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
