const express = require('express');
const router = express.Router();
const validateYear = require('../middleware/validationYear');


let books = [
  { id: 1, title: "1984", author: "George Orwell", year: 1949 },
  { id: 2, title: "Harry Potter", author: "J.K. Rowling", year: 1997 },
  { id: 3, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
];


router.get('/', (req, res) => {
  const { author, year, page = 1, limit = 10 } = req.query;
  let filtered = books;

  if (author){ 
    filtered = filtered.filter(b => b.author.toLowerCase() === author.toLowerCase());
  }
  if (year) {
    filtered = filtered.filter(b => b.year === Number(year));
  }
  const start = (page - 1) * limit;
  const end = start + Number(limit);

  res.json({
    total: filtered.length,
    page: Number(page),
    limit: Number(limit),
    books: filtered.slice(start, end)
  });
});

router.post('/', validateYear, (req, res) => {
  const newBook = { id: books.length + 1, ...req.body };
  books.push(newBook);
  res.status(201).json(newBook);
});

router.get('/search', (req, res) => {
  const { title } = req.query;
  if (!title) return res.status(400).json({ error: 'Title query required' });

  const results = books.filter(b => b.title.toLowerCase().includes(title.toLowerCase()));
  res.json(results);
});

module.exports = router;
