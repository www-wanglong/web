const express = require('express')
const articleCtrl = require('../controller/article')
const auth = require('../middleware/auth')
const articleValidator = require('../validator/article')


const router = express.Router()

router.get('/', articleCtrl.showIndex)

router.get('/editor', auth, articleCtrl.showEditor)

router.get('/editor/:articleId', auth, articleCtrl.showEditor)

router.get('/article/:articleId', auth, articleCtrl.showArticle)

module.exports = router