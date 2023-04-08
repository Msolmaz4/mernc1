const mongoose = require('mongoose')
//BURADA IKI YOLV AR DB ADINI URL DEN SONRA HEMEN VERILEBILR iki cizgiyi unutma string VEYA ENV YAPABILIRIZ 

const database = ()=>{
    
    mongoose.connect(process.env.DB_URL,
    {
       // dbName:'mern1',
        useNewUrlParser:true,
    useUnifiedTopology:true}
    ).then(()=>{
        console.log('mongo connect')
    }).catch((err)=>{

        console.log(`db error ,${err}`)
    })
        
    

}

module.exports =database