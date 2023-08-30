import express from 'express';
import routes from './routes/spotifyRoutes.js';

// Create an Express app
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.route(routes)

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
