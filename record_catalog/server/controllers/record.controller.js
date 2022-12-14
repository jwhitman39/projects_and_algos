// imports the Record model
const { updateOne } = require('../models/record.model');
const Record = require('../models/record.model');
// exports all the following functions
const sort = {releaseYear: 1}
module.exports= {
    getAllRecords: (req, res) =>{
        Record.find()
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
            res.status(400).json(err)
        })
    },
    getAllChills: (req, res) =>{
        Record.find({"tag1" : "Chill"}, {"tag2" : "Chill"})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
            res.status(400).json(err)
        })
    },
    getAllUpbeats: (req, res) =>{
        Record.find({"tag1" : "Upbeat"}, {"tag2" : "Upbeat"})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
            res.status(400).json(err)
        })
    },
    getAllRockOuts: (req, res) =>{
        Record.find({"tag1" : "Rock Out"}, {"tag2" : "Rock Out"})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
            res.status(400).json(err)
        })
    },
    getAllMovieTimes: (req, res) =>{
        Record.find({"tag1" : "Movie Time!"}, {"tag2" : "Movie Time!"})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
            res.status(400).json(err)
        })
    },
    getAllReleaseYears: (req, res) =>{
        Record.find()
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
            res.status(400).json(err)
        })
    },
    getAllArtists: (req, res) =>{
        Record.find({"artist" : req.params.artist})
        .then((result)=>{
            res.json(result)
            // res.sort({ artist: "asc" })
        })
        .catch((err)=> {
            console.log(err)
            res.status(400).json(err)
        })
    },
    getOneRecord: (req, res) =>{
        Record.findById(req.params.id)
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
            res.status(400).json(err)
        })
    },
    getOneArtist: (req, res) =>{
        Record.find({"artist" : req.params.artist})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
            res.status(400).json(err)
        })
    },
    getOneGenre: (req, res) =>{
        Record.find({"genre" : req.params.genre})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
            res.status(400).json(err)
        })
    },
    getOneYear: (req, res) =>{
        Record.find({"releaseYear" : req.params.releaseYear})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
            res.status(400).json(err)
        })
    },
    getOneRating: (req, res) =>{
        Record.find({"rating" : req.params.rating})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
            res.status(400).json(err)
        })
    },
    getOneTag: (req, res) =>{
        Record.find({"tag1" : req.params.tag1})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
            res.status(400).json(err)
        })
    },
    addRecord: (req, res) =>{
        Record.create(req.body)
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
            res.status(400).json(err)
        })
    },
    updateRecord: (req, res) =>{
        console.log('++++++', req.body)
        Record.updateOne(
            {_id: req.params.id}, 
            req.body, 
            {new: true, runValidators: true})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
            res.status(400).json(err)
        })
    },
    playRecord: (req, res) =>{
        console.log('++++++', req.body)
        Record.findOneAndUpdate(
            {_id: req.params.id},
            req.body, 
            {new: true})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
            res.status(400).json(err)
        })
    },
    changePosition: (req, res) =>{
        console.log('++++++', req.body)
        Record.findOneAndUpdate(
            {_id: req.params.id},
            req.body, 
            {new: true})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
            res.status(400).json(err)
        })
    },
    deleteRecord: (req, res) =>{
        Record.deleteOne({_id:req.params.id})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
            res.status(400).json(err)
        })
    },

    // countAllGenres: (req, res) =>{
    //     Record.find({"genre" : req.params.genre})
    //     .then((result)=>{
    //         res.json(result)
    //         Record.frequency
    //     })}
}