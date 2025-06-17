const express=require('express');
const { addNurse, getaddNursePage, viewNurse, deleteNurse, getNurseUpdatePage, updateNurse } = require('../controllers/nurseController');

const router=express.Router();

router.get('/addnurse',getaddNursePage)
router.post('/addnurse',addNurse);
router.get('/viewnurse',viewNurse)
router.get('/delete/:id',deleteNurse)
router.get('/nurseupdate/:id',getNurseUpdatePage);
router.post('/updatenurse',updateNurse)

module.exports=router;