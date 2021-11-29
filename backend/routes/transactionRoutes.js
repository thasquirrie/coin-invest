const express = require('express');
const transactionController = require('../controllers/transactionController');
const authController = require('../controllers/authController');

const router = express.Router();

router
 .route('/')
 .get(
  authController.protect,
  authController.restrictTo('admin'),
  transactionController.getAllTransactions
 )
 .post(authController.protect, transactionController.createTransaction);

router
 .route('/:id')
 .get(authController.protect, transactionController.getTransaction);

module.exports = router;
