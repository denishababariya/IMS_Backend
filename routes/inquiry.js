var express = require('express');
var router = express.Router();
var inquiry = require('../controller/inquiry')
var auth = require('../middleware/auth')


router.post('/add_inquiry',auth.check_token,inquiry.add_inq);
router.post('/verify_otp',auth.check_token,inquiry.verify_otp);
router.post('/update_inquiry/:id',auth.check_token,inquiry.inquiry_update)
router.get('/update_inquiry/:id',auth.check_token,inquiry.inquiry_update)
router.get('/delete_inquiry/:id',auth.check_token,inquiry.inquiry_delete)
router.get('/srch_inquiry',auth.check_token,inquiry.search_inquiry)
router.get('/view_inquiry',auth.check_token,inquiry.inquiry_view)


module.exports = router;