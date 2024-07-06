const mongoose = require('mongoose');

const StampSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    xPosition: {
      type: String,
      required: true,
    },
    yPosition: {
      type: String,
      required: true,
    },
  }, 
  { timestamps: true }
);

module.exports = mongoose.model('stamp', StampSchema);