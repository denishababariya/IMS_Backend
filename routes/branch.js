var express = require('express');
var router = express.Router();
var branch = require('../controller/branch')
var auth = require('../middleware/auth')



router.post('/add_branch',auth.check_token,branch.add_branch);
router.post('/update_branch/:id',auth.check_token,branch.branch_update)
router.get('/update_branch/:id',auth.check_token,branch.branch_update)
router.get('/delete_branch/:id',auth.check_token,branch.branch_delete)
router.get('/search_branch',auth.check_token,branch.search_branch)
router.get('/view_branch',auth.check_token,branch.branch_view)



module.exports = router;