const reference = require("../model/reference");
const storage = require("node-persist");
storage.init(/* options ... */);

exports.add_reference = async (req, res) => {
  var reference = await branch.find({ referencename: req.body.referencename });
  if (reference.length == 0) {
    var data = await reference.create(req.body);

    res.status(200).json({
      data,
      status: "reference-inserted......!",
    });
  } else{
    res.status(404).json({
      status: "already inserted!",
    });
  }
};

exports.reference_update = async (req, res) => {
  var reference = await branch.find({ referencename: req.body.referencename });
  if (reference.length == 0) {
    var id = req.params.id;
    var data = await reference.findByIdAndUpdate(id, req.body);

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

exports.reference_update = async (req, res) => {
    
    var id = req.params.id;
    var data = await reference.findById(id, req.body);

    res.status(200).json({
      data,
      status: "data-updated.....!",
    });
 
};
exports.reference_delete = async (req, res) => {
 
    var id = req.params.id;
    var data = await reference.findByIdAndDelete(id, req.body);
    res.status(200).json({
      status: "data-deleted.....!",
    });
 
};
exports.reference_view = async (req, res) => {
 
    var data = await reference.find();
    res.status(200).json({
      data,
      status: "data-viewed......!",
    });
 
};
exports.search_reference = async (req, res) => {
    var query = req.query;
    var data = await reference.find(query);
    res.status(200).json({
      data,
      status: "data-searched.....!",
    });
 
};
