const mongoose= require('mongoose')

//trim sagdan soldan bosluklari alir
const PostSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
        trim:true
        
    },
    date:{
        type:Date,
        default:new Date()
    }

})

module.exports =mongoose.model('post',PostSchema)
//sonra kontroller gdip cagrilrir