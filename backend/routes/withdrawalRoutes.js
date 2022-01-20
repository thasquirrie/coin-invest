const express = require('express');
const authController = require('../controllers/authController');
const withdrawalController = require('../controllers/withdrawalController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, withdrawalController.getAllWithdrawals)
  .post(authController.protect, withdrawalController.createWithdrawal);

router
  .route('/:id')
  .get(authController.protect, withdrawalController.getWithdrawal)
  .patch(
    authController.protect,
    withdrawalController.updateWithdrawalStatusApproved
  );

module.exports = router;
