const express = require('express');
const app = express();
const PORT = 3000;

let books = [
    { isbn: '12345', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', review: 'Excellent book!' },
    { isbn: '67890', title: 'Moby Dick', author: 'Herman Melville', review: 'Great adventure' },
    { isbn: '11223', title: '1984', author: 'George Orwell', review: '' }
];

app.delete('/book/review/:isbn', (req, res) => {
    const { isbn } = req.params;
    let book = books.find(b => b.isbn === isbn);
    if (book) {
        book.review = ''; // Clear review
        res.send('Review deleted successfully');
    } else {
        res.status(404).send('Book not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
