// imports the Record model
const Record = require('../models/record.model');
// exports all the following functions
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
    deleteRecord: (req, res) =>{
        Record.deleteOne({_id:req.params.id})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
            res.status(400).json(err)
        })
    }
}