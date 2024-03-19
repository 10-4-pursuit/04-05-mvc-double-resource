const express = require('express');
const {listUsers, showUser, validateUser, createUser, updateUser} = require ('../controllers/userController');
const router = express.Router();

router.use(express.json());

router.get('/', listUsers);
router.get('/:id',  showUser);
router.post('/', validateUser, createUser);
router.put('/:id', updateUser );

module.exports = router;