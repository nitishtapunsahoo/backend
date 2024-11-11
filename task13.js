const express = require('express');
const app = express();
const PORT = 3000;

let books = [
    { isbn: '12345', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', review: '' },
    { isbn: '67890', title: 'Moby Dick', author: 'Herman Melville', review: '' },
    { isbn: '11223', title: '1984', author: 'George Orwell', review: '' }
];

app.get('/books/title/:title', async (req, res) => {
    const { title } = req.params;
    try {
        const filteredBooks = books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
        if (filteredBooks.length > 0) {
            res.json(filteredBooks);
        } else {
            res.status(404).send('No books found with this title');
        }
    } catch (error) {
        res.status(500).send('Error fetching books by title');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
