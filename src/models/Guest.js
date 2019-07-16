const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GuestSchema = new Schema(
  {
    churras: {
        type: Schema.Types.ObjectId,
        ref: 'Churras',
        index: true
    },
    name: {
        type: String,
        required: true,
        index: true
    },
    value: {
        type: Number,
        required: true
    },
    drinkIncluded: {
        type: Boolean,
        default: false
    }
  },
  { timestamps: true }
);

module.exports = exports = mongoose.model('Guest', GuestSchema, 'guests');