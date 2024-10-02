const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  services: [{ type: String }],
  billHistory: [{ billId: String, amount: Number, status: String }],
});
module.exports = mongoose.model('User', userSchema);
