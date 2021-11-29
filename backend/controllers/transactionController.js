const catchAsync = require('../utils/catchAsync');
const Transaction = require('../models/Transaction');

exports.getAllTransactions = catchAsync(async (req, res, next) => {
  const transactions = await Transaction.find();

  res.status(200).json({
    status: 'success',
    data: {
      transactions,
    },
  });
});

exports.getTransaction = catchAsync(async (req, res, next) => {
  const transaction = await Transaction.findById(req.params.id);

  if (!transaction) {
    return next(
      new AppError(
        'No transaction with this transaction ID exist in the database',
        404
      )
    );
  }

  res.status(200).json({
    status: 'success',
    data: {
      transaction,
    },
  });
});

exports.createTransaction = catchAsync(async (req, res, next) => {
  let { coinSymbol, coinType, amount, user } = req.body;
  if (!user) user = req.user.id;

  const transactionDetails = {
    coinSymbol,
    coinType,
    amount,
    user,
  };

  console.log(transactionDetails);

  const transaction = await Transaction.create(transactionDetails);

  if (!transaction) {
    return next(new AppError('One of the required input is missing', 400));
  }

  res.status(201).json({
    status: 'success',
    data: {
      transaction,
    },
  });
});
