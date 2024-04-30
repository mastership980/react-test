const express = require('express')
const { ObjectId } = require('mongodb')
const { getDb } = require('../../db')

const router = express.Router()

router.get("/festivals", (req, res) => {
    const db = getDb()
    let festivals = []

    db.collection("festival")
        .find()
        .forEach(festival => festivals.push(festival))
        .then(() => {
            res.status(200).json(festivals)
        })
        .catch(() => {
            res.status(500).json({error: "Could not fetch documents"})
        })
})

router.post("/addFestival", (req, res) => {
    const db = getDb()
    const newFestival = req.body

    db.collection("festival")
        .insertOne(newFestival)
        .then(result => {
            console.log("Az adatok sikeresen feltöltésre kerültek az adatbázisba")
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({error: "Could not create new document"})
        })
})

router.delete("/deleteFestival", (req, res) => {
    const db = getDb()

    if (!ObjectId.isValid(req.query.id)) {
        res.status(500).json({error: "Not a valid document id"})
    }

    db.collection("festival")
        .deleteOne({_id: new ObjectId(req.query.id)})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({error: "Could not fetch the document"})
        })
})

module.exports = router