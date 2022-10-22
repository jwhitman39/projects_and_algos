// imports controller
const RecordController = require('../controllers/record.controller');
// exports the following routes for use elsewhere
module.exports = (app) => {
    // app.get('/api', RecordController.index);
    // get all Records
    app.get('/api/allRecords', RecordController.getAllRecords);
    // get all Release Years
    app.get('/api/allReleaseYears', RecordController.getAllRecords);
    // get all Artists
    app.get('/api/allArtists', RecordController.getAllRecords);
    // get all Artists
    app.get('/api/allGenres', RecordController.getAllRecords);
    // get one Record
    app.get('/api/oneRecord/:id', RecordController.getOneRecord)
    // get one Artist
    app.get('/api/oneArtist/:artist', RecordController.getOneArtist)
    // get one Genre
    app.get('/api/oneGenre/:genre', RecordController.getOneGenre)
    // get one Release Year
    app.get('/api/oneYear/:releaseYear', RecordController.getOneYear)
    // create Record
    app.post('/api/addRecord', RecordController.addRecord);
    // update Record
    app.put('/api/updateRecord/:id', RecordController.updateRecord);
    // delete Record
    app.delete('/api/deleteRecord/:id', RecordController.deleteRecord)
}