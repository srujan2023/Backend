const ArticleModel = require('../models/articleModel')


const ListArticles = async(req,res)=>{
  try {
    const articles = await ArticleModel.find({});
      res.json({articles})
  } catch (error) {
    return console.log(error);
    
  }
}

const ListSingleArticle = async(req,res)=>{
    try {
    const article = await ArticleModel.findById(req.params.articleId);
      res.json({article})
  } catch (error) {
    return console.log(error);
    
  }
}

const CreateArticle = async(req,res)=>{
   try {
    const article = await ArticleModel.create(req.body)
     res.json({article})
   } catch (error) {
    console.log(error);
   }
}

const UpdateArticle = async(req,res)=>{
  try {
    const article = await ArticleModel.findByIdAndUpdate(req.params.articleId,req.body,{new:true})
      res.json({article})
  } catch (error) {
    return console.log(error);
    
  }
}

const DeleteArticle = async(req,res)=>{
    try {
        const article = await ArticleModel.findByIdAndDelete(req.params.articleId)
        res.json({article})
    } catch (error) {
        return console.log(error);
        
    }
}

module.exports = {ListArticles,ListSingleArticle,CreateArticle,UpdateArticle,DeleteArticle}