import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './Router';

// Connect to MongoDB
mongoose.connect('mongodb://localhost/register',{ useMongoClient: true });

// Initialize http server
const app = express();

// Logger that outputs all requests into the console
app.use(morgan('combined'));

app.use(router);
// Launch the server on port 3000
const server = app.listen(3000, '192.168.122.1', () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
