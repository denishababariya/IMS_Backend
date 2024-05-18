var express = require('express');
var router = express.Router();
var auth = require('../middleware/auth')
var admin = require('../controller/admin')
var multer = require('multer')

var storage = multer.diskStorage({
  destination : function(req,file,cb){
      cb(null,'public/images')
  },
  filename : function(req,file,cb){
      cb(null,file.originalname)
  }
})
  
var upload = multer({storage:storage})

/* GET home page. */

router.get('/',auth.check_token,admin.admin_view)
router.post('/add_admin',auth.check_token,upload.single('image'),admin.admin_insert);
router.post('/update_admin/:id',auth.check_token,admin.admin_update)
router.get('/update_admin/:id',auth.check_token,admin.admin_update)
router.get('/delete_admin/:id',auth.check_token,admin.admin_delete)
router.get('/search_admin',auth.check_token,admin.search_admin)
router.get('/view_admin',auth.check_token,auth.check_token,admin.admin_view)
router.post('/admin_login',admin.admin_login);
router.get('/admin_logout',admin.admin_logout);

module.exports = router;
