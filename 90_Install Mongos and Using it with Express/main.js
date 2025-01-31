import mongoose from "mongoose"
import express from "express"
import { Todo } from "./models/Todo.js"

let conn = await mongoose.connect("mongodb://localhost:27017/todo")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({title: 1, desc:"Description of Todo", isDone:"false", days: Math.floor(Math.random()*45 +5*Math.random())})

    todo.save()
  res.send('Hello World!')
})

app.get('/a', async(req, res) => {
    let todo = await Todo.findOne({})
    console.log(todo)
    res.json({title: todo.title, desc: todo.desc, isDone: todo.isDone})
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})