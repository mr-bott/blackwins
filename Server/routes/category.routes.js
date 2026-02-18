const router=require('express').Router();
const{addCategory}=require('../controllers/category.controller')

router.post('/',addCategory);

module.exports=router;