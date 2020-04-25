const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Feel free to change port
const port = 8000;

// Express middleware
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://127.0.0.1:27017/', {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

db = mongoose.connection;

const Entry = mongoose.model('Entry', {
  state: String,
  days: Number
})

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/entries', (req, res) =>{
  // TODO: Retreive visualisations
  Entry.find()
  .then(entries => {
    console.log(entries);
    res.send(entries);
  });
})


app.get('/save', (req, res) =>{
  // TODO: save visualisations
  const entry = new Entry(req.body);
  entry.save()
  .then(entry => res.send(`Saved ${entry} to database`));
})

app.listen(port, () => console.log(`App running on port ${port}`));