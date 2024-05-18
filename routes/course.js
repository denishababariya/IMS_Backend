var express = require('express');
var router = express.Router();
var course = require('../controller/course')
var auth = require('../middleware/auth')



router.post('/add_course',auth.check_token,course.add_course);
router.post('/update_course/:id',auth.check_token,course.course_update)
router.get('/update_course/:id',auth.check_token,course.course_update)
router.get('/delete_course/:id',auth.check_token,course.course_delete)
router.get('/search_course',auth.check_token,course.search_course)
router.get('/view_course',auth.check_token,course.course_view)


module.exports = router;