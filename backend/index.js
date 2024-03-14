const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/note');
const userRoutes = require('./routes/user');

const app = express();
const port = process.env.PORT || 8000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://kazinezamul3:IkVk6JEiFyhbdYvC@cluster0.ueeeeyb.mongodb.net/NoteApp')
.then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
})

// Middleware
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/notes', noteRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});