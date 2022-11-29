require("dotenv").config()
const express = require("express")
const app = express()
const port = 3000
const reactViews = require("express-react-views")
const mongoose = require("mongoose")
const Log = require("./models/logs")
const methodOverride = require("method-override")
const controller = require("./controllers/controllers")

const mongoURI = process.env.MONGO_URI
const database = mongoose.connection

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

database.on("error", (error) => console.log(error.message + "Error."))
database.on("open", () => console.log("Connected"))
database.on("close", () => console.log("Disconnected"))


app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())

app.use(express.urlencoded({extended:false}))
app.use(methodOverride("_method"))

app.use("/logs",controller)

app.listen(port, () => {
    console.log(`Listening on Port: ${port}`)
})