const express=require('express');
const { getAllBill, getBillById } = require('../controllers/billController');
const { isAuthenticated, authorizeRole } = require('../middlewares/auth');
const router=express.Router();


router.get('/all',isAuthenticated,authorizeRole("receptionist"), getAllBill);
router.get('/:id',isAuthenticated,authorizeRole("receptionist"),getBillById);
module.exports=router;