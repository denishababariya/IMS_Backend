const branch = require("../model/branch");
const storage = require("node-persist");
storage.init(/* options ... */);

exports.add_branch = async (req, res) => {
  var branchname = await branch.find({ branchname: req.body.branchname });
  if (branchname.length == 0) {
    var data = await branch.create(req.body);

    res.status(200).json({
      data,
      status: "branch-inserted......!",
    });
  }else{
    res.status(404).json({
      status: "already inserted!",
    });
  }
};

exports.branch_update = async (req, res) => {
  var branchname = await branch.find({ branchname: req.body.branchname });
  if (branchname.length == 0) {
    var id = req.params.id;
    var data = await branch.findByIdAndUpdate(id, req.body);

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

exports.branch_update = async (req, res) => {
  var id = req.params.id;
  var data = await branch.findById(id, req.body);

  res.status(200).json({
    data,
    status: "data-updated.....!",
  });
};
exports.branch_delete = async (req, res) => {
  var id = req.params.id;
  var data = await branch.findByIdAndDelete(id, req.body);
  res.status(200).json({
    status: "data-deleted.....!",
  });
};
exports.branch_view = async (req, res) => {
  var data = await branch.find();
  res.status(200).json({
    data,
    status: "data-viewed......!",
  });
};
exports.search_branch = async (req, res) => {
  var search = req.query;
  var data = await branch.find(search);
  res.status(200).json({
    data,
    status: "data-searched.....!",
  });
};
