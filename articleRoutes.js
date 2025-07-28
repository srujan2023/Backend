const express = require('express')
const router = express.Router();
 const {ListArticles,ListSingleArticle,CreateArticle, UpdateArticle, DeleteArticle} = require('../controllers/articleControllers')

router.get('/',ListArticles)

 
router.get('/:articleId',ListSingleArticle)


 
router.post('/',CreateArticle)

 
router.put('/:articleId',UpdateArticle)

 
router.delete('/:articleId',DeleteArticle)

module.exports = router;