import express from 'express'
const app=express();
const router=express.Router();
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Contact form: ${name}, ${email}, ${message}`);
  res.send('Form submitted successfully!');
});

export default router;
