const express=require('express');
const { medicinepage, addMedicne } = require('../controllers/medicineController');
const router=express.Router();

router.get('/medicines/:id',medicinepage);
router.post('/medicines/add',addMedicne)

module.exports=router;