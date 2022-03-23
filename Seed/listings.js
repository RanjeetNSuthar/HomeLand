const mongoose = require('mongoose');
const listings_model = require('../models/listings');

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

const seedDB = async () => {
    const entry = new listings_model({ listing_type: "Sale", property_type: "Appartment", bhk: "2BHK", bathrooms: "1", balcony: "1", furnish_type: "Fully Furnished", parkings: '2', cost_or_rent: 233444, maintenance_charges: 3434, carpet_area: 323, Address: { state: "Maharashtra", city: "Mumbai", locality_road: "MG Road", building_society_project: "Lodha", flat_no: 3, floor_no: 4, } })
    await entry.save();
}

seedDB().then(() => {
    mongoose.connection.close();
})