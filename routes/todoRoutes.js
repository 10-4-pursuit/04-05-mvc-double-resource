const express = require('express');
const {listToDos, createToDo, validateToDo, updateToDo, deleteToDo, showTodo} = require ('../controllers/todoController');
const router = express.Router();

router.use(express.json());


router.get('/',  listToDos );
router.get('/:id',  showTodo );
router.post('/', validateToDo, createToDo);
router.put('/:id', updateToDo, );


module.exports=router