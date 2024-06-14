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
    coverPicture: {
      type: String,
      default: '',
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    // ログイン認証
    isAdmin: {
      type: Boolean,
      default: false,
    },
    // ユーザの説明欄
    desc: {
      type: String,
      max: 50,
    },
  }, 
  { timestamps: true }
);

module.exports = mongoose.model('user', UserSchema);