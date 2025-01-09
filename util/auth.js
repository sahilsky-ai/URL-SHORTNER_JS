const jwt = require('jsonwebtoken');
const secret = "my$ecre#key";

function setUser(user) {
    // Convert user to a plain object, picking only the necessary fields
    const payload = {
        id: user._id.toString(), // Convert ObjectId to a string
        name: user.name,
        email: user.email,
    };

    console.log("Generating JWT for payload:", payload); // Debug log
    return jwt.sign(payload, secret); 
}

function getUser(token) {
    console.log("Received token for verification:", token); // Debugging
    if (!token) return null;

    try {
        return jwt.verify(token, secret);
    } catch (error) {
        console.error("JWT verification error:", error.message); // Log specific error
        return null;
    }
}

module.exports = {
    setUser,
    getUser
};
