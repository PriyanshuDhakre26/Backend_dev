const express = require('express');
const router = express.Router();


let authors = [
  { id: 1, name: "George Orwell", bio: "English novelist", birthYear: 1903 },
  { id: 2, name: "J.K. Rowling", bio: "British author", birthYear: 1965 }
];


router.post('/', (req, res) => {
  const newAuthor = { id: authors.length + 1, ...req.body };
  authors.push(newAuthor);
  res.status(201).json(newAuthor);
});

router.get('/', (req, res) => {
  res.json(authors);
});

router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = authors.findIndex(a => a.id === id);
  if (index === -1) return res.status(404).json({ error: 'Author not found' });

  authors[index] = { ...authors[index], ...req.body };
  res.json(authors[index]);
});

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  authors = authors.filter(a => a.id !== id);
  res.json({ message: 'Author deleted' });
});

module.exports = router;
