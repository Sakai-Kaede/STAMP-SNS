const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 1,
      max: 20,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 50,
    },
    profilePicture: {
      type: String,
      default: '',
    },
    // ログイン認証
    isAdmin: {
      type: Boolean,
      default: false,
    },
  }, 
  { timestamps: true }
);

module.exports = mongoose.model('user', UserSchema);