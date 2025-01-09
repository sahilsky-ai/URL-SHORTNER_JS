const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    originalUrl: {
        type: String,
        required: true
    },
    views:[{timestamp : {type: Number}}],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    required:false},
}, {timestamps: true}
);

const URL = mongoose.model('url', urlSchema);

module.exports = URL;
