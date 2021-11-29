const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const userSchema = mongoose.Schema({
 username: {
  type: String,
  required: [true, 'A user must have a username'],
 },
 //  lastName: {
 //   type: String,
 //   required: [true, 'A user must have a last name'],
 //  },
 email: {
  type: String,
  required: [true, 'A user must have an email'],
  unique: true,
  lowercase: true,
  validate: [validator.isEmail, 'Please provide a valid email'],
 },
 //  username: {
 //   type: String,
 //   required: [true, 'A user must have authentication'],
 //  },
 password: {
  type: String,
  required: [true, 'Password is needed for authentication'],
  minlength: 8,
 },
 confirmPassword: {
  type: String,
  validate: {
   validator: function (el) {
    return el === this.password;
   },
   message: 'Password does not match!',
  },
 },
 //  photo: {
 //   type: String,
 //   default: '/img/users/default.jpg',
 //  },
 //  aboutYou: {
 //   type: String,
 //   maxlength: 300,
 //  },
 role: {
  type: String,
  enum: ['user', 'admin'],
  default: 'user',
 },
 photo: {
  type: String,
  default: '/img/users/default.jpg',
 },
 country: String,
 dateCreated: {
  type: Date,
  default: Date.now,
 },
 passwordChangedAt: String,
});

userSchema.pre('save', async function (next) {
 if (!this.isModified('password')) return next();

 this.password = await bcrypt.hash(this.password, 12);

 this.confirmPassword = undefined;
 next();
});

userSchema.pre('save', async function (next) {
 if (!this.isModified('password') || this.isNew) return next();

 this.passwordChangedAt = Date.now() - 2000;

 next();
});

userSchema.methods.comparePasswords = async function (
 candidatePassword,
 userPassword
) {
 return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = async function (JWTTimestamp) {
 if (this.passwordChangedAt) {
  const changedTime = this.passwordChangedAt.getTime() / 1000;

  return JWTTimestamp < changedTime;
 }

 return false;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
