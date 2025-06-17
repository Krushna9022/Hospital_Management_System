const express=require('express');
const { addNurse, getaddNursePage, viewNurse, deleteNurse, getNurseUpdatePage, updateNurse } = require('../controllers/nurseController');
const { isAuthenticated, authorizeRole } = require('../middlewares/auth');

const router=express.Router();

router.get('/addnurse',isAuthenticated,authorizeRole("receptionist"), getaddNursePage)
router.post('/addnurse',isAuthenticated,authorizeRole("receptionist"),addNurse);
router.get('/viewnurse',isAuthenticated,authorizeRole("receptionist"),viewNurse)
router.get('/delete/:id',isAuthenticated,authorizeRole("receptionist"),deleteNurse)
router.get('/nurseupdate/:id',isAuthenticated,authorizeRole("receptionist"),getNurseUpdatePage);
router.post('/updatenurse',updateNurse)

module.exports=router;