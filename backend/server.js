const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, world! Server is running.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
