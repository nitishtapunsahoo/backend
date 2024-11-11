const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
    { isbn: '12345', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', review: '' },
    { isbn: '67890', title: 'Moby Dick', author: 'Herman Melville', review: '' },
    { isbn: '11223', title: '1984', author: 'George Orwell', review: '' }
];

app.put('/book/review/:isbn', async (req, res) => {
    const { isbn } = req.params;
    const { review } = req.body;
    let book = books.find(b => b.isbn === isbn);
    if (book) {
        book.review = review;
        res.send('Review updated successfully');
    } else {
        res.status(404).send('Book not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
