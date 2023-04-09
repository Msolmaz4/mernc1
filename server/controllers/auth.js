const AuthSchema = require('../models/auth.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


const register = async(req,res)=>{
    try {
         //bunlar front tarafinfadn geliyor req body 
        const {username,password,email} = req.body

        //sonra kontroller yapariz email olup olmadigini

        const user = await AuthSchema.findOne(email)
        if(user){
            return res.status(500).json({msg:'boyle bir kullanici yaten var'})
        }
        if(password.length < 6){
            return res.status(500).json({msg:'sifre 6 karakterden eksik'})
        }
        //bundan sonra passwordu saglamlastiriz

        const passwordHash = await bcrypt.hash(password,12)

        //email olup oladigini kontrol ederiz alltaki foksiyonu internet aldim kolay olsun diye 
        //email bu foksiyona gondeririz

        if(ValidateEmail(email)){
            return res.status(500).json({msg:'Bu email formatinda degil'})}

     // simdi yeni bir neww User
     const newUser =await AuthSchema.create({username,email,password:passwordHash})

     //sonra token olusturuz
     const token = jwt.sign({id:newUser._id},'SECRET KEY',{expiresIn: '1h'})
     
     res.status(210).json({
        status:'okey',
        newUser,
        token
     })
        
    } catch (error) {
        res.status(500).json({msg:error.message})
        
    }
}



const login = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

//email olup olmadigini kontrol ederiz

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}


module.exports={register,login}