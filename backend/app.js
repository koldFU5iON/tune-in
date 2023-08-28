import express from 'express';

// Create an Express app
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
