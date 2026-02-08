
import express from 'express'
const app=express();
const router=express.Router();
// Middleware: logs request duration
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} took ${duration}ms`);
  });
  next();
});

