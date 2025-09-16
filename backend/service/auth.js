require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

const setUser = (user) => {
    return jwt.sign({
        id: user._id,
        username: user.username
    }, secret, {
        expiresIn: '1h',
    });
};

function getUser(token) {
    try {
        return jwt.verify(token, secret);
    } catch (err) {
        return null;
    } // we verify the token with the secret key by the user
}

module.exports = { setUser, getUser };