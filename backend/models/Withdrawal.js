const mongoose = require('mongoose');

const withdrawalSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'A withdrawal form needs the email Address of the user'],
    },
    username: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
      unique: true,
    },
    amount: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'success', 'failed'],
      default: 'pending',
    },
    coinType: String,
    coinSymbol: String,
    dateCreated: {
      type: Date,
      default: Date.now,
    },
    approvedDate: Date,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// withdrawalSchema.virtuals('accumulatedEarnings');

const Withdrawal = mongoose.model('Withdrawal', withdrawalSchema);
module.exports = Withdrawal;
