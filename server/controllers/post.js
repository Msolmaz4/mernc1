
const PostSchema = require('../models/post.js')

const getPosts = async (req,res)=>{
    try {
        const getPosts = await PostSchema.find()
        res.status(200).json(getPosts)
        
    } catch (error) {
        res.status(500).json({msg:error.message})
        
    }

}
const createPost = async (req,res)=>{
    try {
        const newPosts = await PostSchema.create(req.body)
        res.status(201).json(newPosts)
        
    } catch (error) {
        res.status(500).json({msg:error.message})
        
    }

}
const updatePost = async (req,res)=>{
    try {
        const {id} = req.params
        const update = await PostSchema.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(update)
        
    } catch (error) {
        res.status(500).json({msg:error.message})
        
    }

}
const deletePost = async (req,res)=>{
    try {
        const {id} =req.params
        const getPosts = await PostSchema.findByIdAndRemove(id)
        res.status(200).json({msg:'silme okey'})
        
    } catch (error) {
        res.status(500).json({msg:error.message})
        
    }

}
module.exports = {
    getPosts, createPost,updatePost,deletePost
}