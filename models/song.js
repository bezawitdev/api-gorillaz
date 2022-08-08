const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Song = new Schema(
    {
        title:{type:String,required:true},
        description:{type:String,required:true},
        length:{type:String,required:true},
        lyrics:{type:String,required:false},
        artist:{type:String,required:true},
        
       
        album:{type:Schema.Types.ObjectId,ref:'albums'}
    },
    {timestamps:true},
)

module.exports = mongoose.model('songs',Song)
