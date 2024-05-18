var express = require('express');
var router = express.Router();
var status = require('../controller/status')
var auth = require('../middleware/auth')

router.post('/add_status',auth.check_token,status.add_status);
router.post('/update_status/:id',auth.check_token,status.status_update)
router.get('/update_status/:id',auth.check_token,status.status_update)
router.get('/delete_status/:id',auth.check_token,status.status_delete)
router.get('/search_status',auth.check_token,status.search_status)
router.get('/view_status',auth.check_token,status.status_view)



module.exports = router;