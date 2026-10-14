const express = require("express")
const app = express() 
//Create server
app.use(express.json())


const notes = []
// ..........................post Api..................//
app.post("/notes",(req,res)=>{
    notes.push(req.body)
    res.status(201).json({
        message:"notes created successfully"
    })
})

// ....................GETAPI...........................//
app.get("/notes",(req,res)=>{
    res.status(200).json({
        message:"notes fetched successfully",
        notes:notes
    })
})
// ......................DELETE API
app.delete("/notes/:index",(req,res)=>{
    const index = req.params.index
    delete notes[index]
    res.status(200).json({
        message:"note deleted successfully"
    })
})
// ..............update api.............
app.put("/notes/:index",(req,res)=>{
    const index = req.params.index
    const description = req.body.description
    notes[index].description = description
    res.status(200).json({
        message: "note updated successfully"
    })
})

module.exports = app