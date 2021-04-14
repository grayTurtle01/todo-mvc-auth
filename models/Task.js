mongoose = require('mongoose')

taskSquema = mongoose.Schema({
  todo: {
    type:String,
    require: true
  },
  completed: {
    type: Boolean,
    require: true
  },
  googleId :{
    type: 'String'
  }  
})

collection_name = "todos"
Model = mongoose.model(collection_name, taskSquema)

module.exports = Model
