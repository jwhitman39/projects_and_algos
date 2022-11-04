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
    getAllReleaseYears: (req, res) =>{
        Record.find({"releaseYear" : req.params.releaseYear})
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