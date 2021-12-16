const express = require('express');
const {getAllTodos, getTodoById, createTOdo, deleteTodo, updateTodo} = require('../controllers/todoControllers');

const router = express.Router();

router.get('/getAllTodos', getAllTodos);
router.get("/getTodoById/:id", getTodoById);
router.post('/createTodo', createTOdo);
router.delete('/deleteTodo/:id', deleteTodo);
router.put('/updateTodo/:id', updateTod);

module.exports = router;