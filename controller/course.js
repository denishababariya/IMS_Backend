const course = require("../model/course");
const storage = require("node-persist");
storage.init(/* options ... */);

exports.add_course = async (req, res) => {
  var course = await course.find({ cotse: req.body.course });
  if (course.length == 0) {
    var data = await course.create(req.body);

    res.status(200).json({
      data,
      status: "course-inserted......!",
    });
  }else{
    res.status(404).json({
      status: "already inserted!",
    });
  }
};

exports.course_update = async (req, res) => {
  var course = await course.find({ cotse: req.body.course });
  if (course.length == 0) {
    var id = req.params.id;
    var data = await course.findByIdAndUpdate(id, req.body);

    res.status(200).json({
      data,
      status: "data-updated.....!",
    });
  }else{
    res.status(404).json({
      status: "already inserted!",
    });
  }
};

exports.course_update = async (req, res) => {
      var id = req.params.id;
    var data = await course.findById(id, req.body);

    res.status(200).json({
      data,
      status: "data-updated.....!",
    });
 
};
exports.course_delete = async (req, res) => {
  
    var id = req.params.id;
    var data = await course.findByIdAndDelete(id, req.body);
    res.status(200).json({
      status: "data-deleted.....!",
    });
  
};
exports.course_view = async (req, res) => {
  
    var data = await course.find();
    res.status(200).json({
      data,
      status: "data-viewed......!",
    });
  
};
exports.search_course = async (req, res) => {
  
    var query = req.query;
    var data = await course.find(query);
    res.status(200).json({
      data,
      status: "data-searched.....!",
    });
  
};
