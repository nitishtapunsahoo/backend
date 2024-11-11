const express = require('express');
const app = express();
const PORT = 3000;

let books = [
    { isbn: '12345', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', review: '' },
    { isbn: '67890', title: 'Moby Dick', author: 'Herman Melville', review: '' },
    { isbn: '11223', title: '1984', author: 'George Orwell', review: '' }
];

app.get('/book/:isbn', (req, res) => {
    const { isbn } = req.params;
    const book = books.find(b => b.isbn === isbn);
    if (book) {
        res.json(book);
    } else {
        res.status(404).send('Book not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
