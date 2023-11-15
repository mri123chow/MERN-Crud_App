const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  question: {
    required: true,
    type: String
  },
  option1: {
    required: true,
    type: String
  },
  option2: {
    required: true,
    type: String
  },
  option3: {
    required: true,
    type: String
  },
  option4: {
    required: true,
    type: String
  },
  answer: {
    required: true,
    type: String
  }
})

module.exports = mongoose.model('Question', dataSchema)