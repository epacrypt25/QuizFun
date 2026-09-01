const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizControllers');

router.get('/', quizController.getAllQuizzes);

module.exports = router;
