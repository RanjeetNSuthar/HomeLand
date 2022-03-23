const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingsSchema = new Schema({
    listing_type: {
        type: ["Sale", "Rent"],
        required: true
    },
    property_type: {
        type: ["Appartment", "Independent House", "Villa"],
        required: true
    },
    bhk: {
        type: String,
        required: true,
    },
    bathrooms: {
        type: String,
        required: true,
    },
    balcony: {
        type: String,
        required: true,
    },
    furnish_type: {
        type: ["Fully Furnished", "Semi Furnished", "Unfurnished"],
        required: true
    },
    parkings: {
        type: String,
        required: true,
    },
    cost_or_rent: {
        type: Number,
        required: true
    },
    maintenance_charges: {
        type: Number,
    },
    carpet_area: {
        type: Number,
        required: true
    },
    preferred_tenant_type: {
        type: ["Family", "Bachelors", "Company"],
    },
    Address: {
        state: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        locality_road: {
            type: String
        },
        building_society_project: {
            type: String
        },
        flat_no: {
            type: Number
        },
        floor_no: {
            type: Number
        },
        total_floors: {
            type: Number
        },
        plot_no: {
            type: Number
        }
    }


})

module.exports = mongoose.model('listings', listingsSchema);