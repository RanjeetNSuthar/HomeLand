const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const listings_model = require('./models/listings');
const { urlencoded } = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '\assets')));


// Connecting  MongoDB
mongoose.connect('mongodb://localhost:27017/HomeLand', {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
});

// Database connection error handling
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error: "))
db.once("open", () => {
    console.log("Database Connected");
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/HomeLand', async (req, res) => {
    res.render('index')
})

app.get('/HomeLand/newListing', async (req, res) => {
    res.render('property_listing')
})

app.post('/HomeLand/newListing', (req, res) => {
    console.log(req.body);
    res.send("posted")
})

app.listen(3000, () => {
    console.log("Server up and listening")
})