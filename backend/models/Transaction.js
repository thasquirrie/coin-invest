const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const transactionSchema = mongoose.Schema({
  coinType: {
    type: String,
    enum: ['Tron', 'Doge', 'Algo'],
    required: [true, 'A transaction must have a coin type'],
  },
  coinSymbol: {
    type: String,
    enum: ['TRX', 'DOGE', 'ALGO'],
  },
  amount: {
    type: Number,
    required: [true, 'A transaction amount is required!'],
  },
  address: {
    type: String,
    required: [true, 'A transaction wallet address is required'],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  transactionStatus: {
    type: String,
    enum: ['failed', 'pending', 'success'],
    default: 'pending',
  },
});

transactionSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'username',
  });

  next();
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
