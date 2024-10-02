const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  billId: { type: String, required: true, unique: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  status: { type: String, required: true, enum: ['Paid', 'Unpaid'] },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Bill', billSchema);
