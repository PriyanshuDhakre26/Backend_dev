import express from 'express'
const app=express();
const router=express.Router();
// English + Hindi comments
router.get('/users', (req, res) => {
  const name = req.query.name; // Query param: /users?name=JD
  const users = ['Jagdish', 'JD', 'Jags', 'Anita'];

  // Filter logic
  const filtered = name 
    ? users.filter(u => u.toLowerCase().includes(name.toLowerCase())) 
    : users;

  res.json(filtered); // Return filtered list
});
export default router;


