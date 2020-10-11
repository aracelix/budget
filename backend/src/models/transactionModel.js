import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TransactionSchema = new Schema({
  payee: {
    type: String
  },
  category: {
    type: String
  },
  amount: {
    type: Number
  },
  memo: {
    type: String
  },
  isCleared: {
    type: Boolean
  },
  transaction_date: {
    type: Date
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});