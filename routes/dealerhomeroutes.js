const express = require('express')
const router = express.Router();
const dealerlogin = require('../controller/dealerhome');

router.post('/plandetailsupload',dealerlogin.plandetailsupload);

router.post('/busdetailsupload',dealerlogin.busdetailsupload);

router.post('/dealerprofile',dealerlogin.dealerpic);

router.get('/dealerprofile',dealerlogin.profile)

router.get('/plandetail',dealerlogin.plandetail);

router.get('/busdetail',dealerlogin.busdetail);

router.post('/bus-img-details',dealerlogin.BusimageDetail);

router.post('/edit-businfo',dealerlogin.editBusInfo);

router.post('/save-edit',dealerlogin.updatebusinfo);

router.post('/buspic-delete',dealerlogin.busImageDelete);

router.post('/plandelete',dealerlogin.busPlanDelete);




module.exports=router;