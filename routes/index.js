let {getList,detailList,addUser,delUser,changeUser,addRecord} =require('../TestInterface')
var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/getList',getList)
router.get('/detailList',detailList)
router.get('/addUser',addUser)
router.get('/delUser',delUser)
router.get('/changeUser',changeUser)
router.get('/addRecord',addRecord)
module.exports = router;
