// imports mongoose
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
// creates new schema
const RecordSchema = new mongoose.Schema({
    
    // creates object
    albumArt: {
        type: String,
        required: [true, "This field is required!"],
        // minLength: [2, "Must be at least 2 characters"],
        index: true
        // maxLength: [50, "Cannot be more than 50 characters"]
    },
    albumName: { 
        type: String,
        required: [true, "An album name is required!"],
        // minLength: [2, "Must be at least 3 characters"],
        maxLength: [100, "Cannot be more than 100 characters"],
        unique: [true, "Name must be unique!"]
    },
    artist: { 
        type: String,
        required: [true, "An artist is required!"],
        minLength: [3, "Must be at least 3 characters"],
        maxLength: [100, "Cannot be more than 100 characters"]
    },
    rating: {
        type: Number,
        enum: [
            1,
            2,
            3,
            4,
            5
        ],

        required: [true, "Rating is required!"],
    },
    genre: {
        type: String,
        enum: [
            'Rock',
            'Metal',
            'Disco',
            'Soundtrack',
            'Classical',
            'Hip-Hop',
            'Funk',
            'Electronic',
            'Alternative',
            'Ambient',
            'Easy-Listening',
            'Blues',
            'RnB',
            'Jazz',
            'Soul',
            'Pop',
            'Country'
        ],
        required: [true, "Genre is required!"],
    },
    releaseYear: {
        type: Number,
        required: [true, "Release year is required!"]
    },
    playCount:{
        type: Number,
        required: [true, "Play count is required!"],
    },
    position:{
        type: Number,
        required: [true, "A position is required!"]
    },
    tag1:{  
        type: String,
        enum: [
            'Chill',
            'Upbeat',
            'Rock Out',
            'Movie Time!'
        ],
        required: [true, "A tag is required!"]
    }
    // object gets id, created at, and updated at
}, {timestamps: true});

RecordSchema.plugin(uniqueValidator);

// Names the object
const Record = mongoose.model('Record', RecordSchema);
// exports the object
module.exports = Record;



        // // in case of options:
        // // enum : [

        // ]