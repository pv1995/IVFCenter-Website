var mongoose = require('mongoose');
const validator = require('validator');

var Customer = mongoose.model('Customer', {
  full_name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  phone: {
    type: Number,
    default: null
  },
  message: {
    type: String,
    required: true
  }
});

module.exports = {Customer};
