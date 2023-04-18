const express = require ('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
//otomatik zaparasn databese js yazMAZ DIKKAT ......
const database = require('./config/database.js')
const authRouter = require('./routes/auth.js')
const postRouter = require('./routes/post.js')

dotenv.config()


const app = express()
 app.use(cors())
 app.use(bodyParser.json({limit:'30mb',extended:true}))
 app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
 app.use('/',authRouter)
 app.use('/',postRouter)
 database()

const Port  =  5000 ;
app.listen(Port,()=>{
    console.log('server in runnig' ,Port)
})