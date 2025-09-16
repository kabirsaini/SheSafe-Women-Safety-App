const mongoose = require('mongoose');


const relativeSchema = new mongoose.Schema({
    name: {
        type: String,   // one name per relative
        required: true,
    },
    phone: {
        type: String,   // one phone per relative
        required: true,
    },
    email: {
        type: String,   // one email per relative
        required: true,
    }
});

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    relatives: [relativeSchema]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;