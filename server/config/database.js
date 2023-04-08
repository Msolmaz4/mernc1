const mongoose = require('mongoose')


const database = ()=>{
    try {
    mongoose.connect('mongodb://localhost:27017/mern1',
    {useNewUrlParser:true,
    useUnifiedTopology:true}
    ).then(()=>{
        console.log('mongo connect')
    }).catch((err)=>{

        console.log(err)
    })
        
    } catch (error) {
        console.log(error)
        
    }

}

module.exports =database