import express from 'express'
const app=express();
const router=express.Router();
let posts = [
  { id: 1, title: 'First Post', content: 'Hello World!' }
];

// List posts
router.get('/blog', (req, res) => {
  res.render('blog-list', { posts });
});

// View single post
router.get('/blog/:id', (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  res.render('blog-view', { post });
});

// Create new post
router.post('/blog', (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);
  res.redirect('/blog');
});
export default router;
