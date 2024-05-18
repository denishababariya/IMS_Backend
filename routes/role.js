var express = require('express');
var router = express.Router();
var role = require('../controller/role')
var auth = require('../middleware/auth')


router.post('/add_role',auth.check_token,role.add_role);
router.post('/update_role/:id',auth.check_token,role.role_update)
router.get('/update_role/:id',auth.check_token,role.role_update)
router.get('/delete_role/:id',auth.check_token,role.role_delete)
router.get('/search_role',auth.check_token,role.search_role)
router.get('/view_role',auth.check_token,role.role_view)



module.exports = router;