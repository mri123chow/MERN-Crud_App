const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required:true,
        type: String
    }
})

dataSchema.statics.usedEmail = async function(email){
    if(!email) throw new Error("Invalid email")
  try{
    const People =  await this.findOne({email})
    if(People) return false
    return true
  }
  catch(error){
    console.log(error)
    return false

  }
}

module.exports = mongoose.model('People', dataSchema)