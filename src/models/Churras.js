const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChurrasSchema = new Schema(
  {
    description: {
        type: String,
        index: true,
        required: true,
        },
    date: {
        type: String,
        required: true,
        },
    note: {
        type: String,
        },
    totalValue:{
        type: Number,
        default: 0
    },
    totalGuests:{
        type: Number,
        default: 0
    },
    guests: [{
        type: Schema.Types.ObjectId,
        ref: 'Guest'
    }]
  },
  { timestamps: true }
);

module.exports = exports = mongoose.model('Churras', ChurrasSchema, 'churras');