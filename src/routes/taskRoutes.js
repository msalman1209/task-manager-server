// server/src/routes/taskRoutes.js
const express = require('express');
const { protect } = require('../middlewares/authMiddleware.js');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController.js');
const { uploadToPinata } = require('../controllers/pinataImageUrl.js');

const router = express.Router();

router.use(protect); // Protect all task routes

router.route('/')
  .get(getTasks)
  .post(createTask);

  router.route('/:')

router.route('/:id')
  .put(updateTask)
  .delete(deleteTask);
 router.route('/UpdateProfile/:id').put(uploadToPinata)
  

module.exports = router;