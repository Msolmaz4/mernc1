const express = require ('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

dotenv.config()


const app = express()
 app.use(cors())
 app.use(bodyParser.json({limit:'3omb',extended:true}))
 app.use(bodyParser.urlencoded({limit:'3omb',extended:true}))


const Port  = process.env.Port ;
app.listen(Port,()=>{
    console.log('server in runnig' ,Port)
})