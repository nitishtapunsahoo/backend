const express = require('express');
const app = express();
const PORT = 3000;

let books = [
    { isbn: '12345', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', review: '' },
    { isbn: '67890', title: 'Moby Dick', author: 'Herman Melville', review: '' },
    { isbn: '11223', title: '1984', author: 'George Orwell', review: '' }
];

app.get('/books/author/:author', async (req, res) => {
    const { author } = req.params;
    try {
        const filteredBooks = books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
        if (filteredBooks.length > 0) {
            res.json(filteredBooks);
        } else {
            res.status(404).send('No books found by this author');
        }
    } catch (error) {
        res.status(500).send('Error fetching books by author');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
