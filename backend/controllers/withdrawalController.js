const express = require('express');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Withdrawal = require('../models/Withdrawal');

exports.getAllWithdrawals = catchAsync(async (req, res) => {
  const withdrawals = await Withdrawal.find();

  res.status(200).json({
    status: 'success',
    length: withdrawals.length,
    data: {
      withdrawals,
    },
  });
});

exports.getWithdrawal = catchAsync(async (req, res, next) => {
  const withdrawal = await Withdrawal.findById(req.params.id);

  if (!withdrawal)
    return next(
      new AppError(
        'The form you are looking for does not exist on this server',
        404
      )
    );

  res.status(200).json({
    status: 'success',
    data: {
      withdrawal,
    },
  });
});

exports.createWithdrawal = catchAsync(async (req, res, next) => {
  const {
    email,
    username,
    transactionId,
    address,
    amount,
    coinType,
    coinSymbol,
  } = req.body;
  console.log(req.body);

  if (!email || !username || !transactionId || !address || !amount)
    return next(new AppError('Provide the necessary details', 400));
  const withdrawal = await Withdrawal.create({
    email,
    username,
    transactionId,
    address,
    amount,
    coinType,
    coinSymbol,
  });

  res.status(201).json({
    status: 'success',
    data: {
      withdrawal,
    },
  });
});

exports.updateWithdrawalStatusApproved = catchAsync(async (req, res, next) => {
  const withdrawal = await Withdrawal.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!withdrawal)
    return next(
      new AppError(
        'The form you are looking for does not exist on this server',
        404
      )
    );

  withdrawal.dateApproved = Date.now();
  await withdrawal.save();

  res.status(200).json({
    status: 'success',
    data: {
      withdrawal,
    },
  });
});
