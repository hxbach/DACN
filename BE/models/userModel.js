const mongoose = require('mongoose')

const useSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: Number,
        default: 0
    },
    cart: {
        type: String,
        default: 0
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Users', useSchema)