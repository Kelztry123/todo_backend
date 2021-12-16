const { response } = require('express');
const {Todo} = require('../models/todo');



const getAllTodos = (req, res) => {
    Todo.find()
     .then((response) => {
         res.send(response);
     })
    //res.send('Get all todos');
};

const getTodoById = (req, res) => {
    const id = req.params.id
    
    Todo.findById(id).then(response =>{
        res.send(response);
    }).catch(err =>{
        res.send('an error occured')
    })
    
};

const createTOdo = (req,res)=>{
    const todo = new Todo(req.body);

    todo.save().then(response => {
        res.send(response)
    }).catch(err => {
        res.send("an error occured");
    })
};

const deleteTodo = (req, res) => {
    const id = req.params.id;

    Todo.findByIdAndDelete(id)
    .then((response) => {
        res.send("Todo with specified ID deleted");
    })
    .catch((err) => {
        console.log(err);
        res.send("an error occured",err);
    });
};

const updateTodo = (req, res) => {
    const id = req.params.id;

    Todo.findByIdAndUpdate(id)
    .then((response) => {
        res.send("Todo with specified ID update");
    })
    .catch((err) => {
        console.log(err);
        res.send("an error occured",err);
    });
};

module.exports ={
    getAllTodos,
    getTodoById,
    createTOdo,
    deleteTodo,
    updateTodo,
}