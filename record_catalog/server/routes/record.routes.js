// imports controller
const RecordController = require('../controllers/record.controller');
const Record = require('../models/record.model');
// exports the following routes for use elsewhere
module.exports = (app) => {
    // app.get('/api', RecordController.index);
    // get all Records
    app.get('/api/allRecords', RecordController.getAllRecords);
    // get all Records
    app.get('/api/allChills', RecordController.getAllChills);
    // get all Records
    app.get('/api/allUpbeats', RecordController.getAllUpbeats);
    // get all Records
    app.get('/api/allRockOuts', RecordController.getAllRockOuts);
    // get all Records
    app.get('/api/allMovieTimes', RecordController.getAllMovieTimes);
    // get all Release Years
    app.get('/api/allReleaseYears', RecordController.getAllRecords);
    // get all Artists
    app.get('/api/allArtists', RecordController.getAllRecords);
    // get all Genres
    app.get('/api/allGenres', RecordController.getAllRecords);
    // get all Ratings
    app.get('/api/allRatings', RecordController.getAllRecords);
    // get one Record
    app.get('/api/oneRecord/:id', RecordController.getOneRecord)
    // get one Artist
    app.get('/api/oneArtist/:artist', RecordController.getOneArtist)
    // get one Genre
    app.get('/api/oneGenre/:genre', RecordController.getOneGenre)
    // get one Release Year
    app.get('/api/oneYear/:releaseYear', RecordController.getOneYear)
    // get one Rating
    app.get('/api/oneRating/:rating', RecordController.getOneRating)
    // create Record
    app.post('/api/addRecord', RecordController.addRecord);
    // update Record
    app.put('/api/updateRecord/:id', RecordController.updateRecord);
    // play Record
    app.put('/api/playRecord/:id', RecordController.playRecord);
    // play Record
    app.put('/api/changePosition/:id', RecordController.changePosition);
    // delete Record
    app.delete('/api/deleteRecord/:id', RecordController.deleteRecord)
}