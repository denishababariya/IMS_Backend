var express = require('express');
var router = express.Router();
var reference = require('../controller/reference')
var auth = require('../middleware/auth')


router.post('/add_reference',auth.check_token,reference.add_reference);
router.post('/update_reference/:id',auth.check_token,reference.reference_update)
router.get('/update_reference/:id',auth.check_token,reference.reference_update)
router.get('/delete_reference/:id',auth.check_token,reference.reference_delete)
router.get('/search_reference',auth.check_token,reference.search_reference)
router.get('/view_reference',auth.check_token,reference.reference_view)



module.exports = router;