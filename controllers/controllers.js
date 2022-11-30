const express = require("express")
const route = express.Router()
const Log = require("../models/logs")

route.get("/", (req, res) => {
    Log.find({}, (error, allLogs) => {
        if (!error) {
            res.status(200).render("Index", {
                logs: allLogs
            })
        } else {
            res.status(400).send(error)
        }
    })
})

route.get("/new", (req, res) => {
    res.render("New")
})

route.delete("/:id", (req, res) => {
    Log.findByIdAndDelete(req.params.id, (error, data) => {
        res.redirect("/logs")
    })
})

route.put("/:id", (req, res) => {
    req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false
    Log.findByIdAndUpdate(req.params.id, req.body, (error, updatedLog) => {
        if (!error) {
            res.status(200).redirect(`/logs/${req.params.id}`)
        } else {
            res.status(400).send(error)
        }
    })
})

route.post("/", (req, res) => {
    req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false

    Log.create(req.body, (error, createdLog) => {
        if (!error) {
            res.status(200).redirect(`/logs/${createdLog._id.valueOf()}`)
        } else {
            res.status(400).send(error)
        }
    })
})

route.get("/:id/edit", (req, res) => {
    Log.findById(req.params.id, (error, foundLog) => {
        if (!error) {
            res.status(200).render("Edit", { log: foundLog })
        } else {
            res.status(400).send({ msg: error.message })
        }
    })
})

route.get("/:id", (req, res) => {
    Log.findById(req.params.id, (error, foundLog) => {
        if (!error) {
            res.status(200).render("Show", {
                log: foundLog
            })
        } else {
            res.status(400).send(error)
        }
    })
})


module.exports = route