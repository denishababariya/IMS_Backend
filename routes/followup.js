var express = require('express');
var router = express.Router();
var followup = require('../controller/followup')
var auth = require('../middleware/auth')


router.post('/add_followup',auth.check_token,followup.add_followup);
router.post('/update_followup/:id',auth.check_token,followup.followup_update)
router.get('/update_followup/:id',auth.check_token,followup.followup_update)
router.get('/delete_followup/:id',auth.check_token,followup.followup_delete)
router.get('/search_followup',auth.check_token,followup.search_followup)
router.get('/view_followup',auth.check_token,followup.followup_view)


module.exports = router;