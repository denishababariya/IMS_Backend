const role = require("../model/role");
const storage = require("node-persist");
storage.init(/* options ... */);

exports.add_role = async (req, res) => {
  var role = await branch.find({ rolename: req.body.rolename });
  if (role.length == 0) {
    var data = await role.create(req.body);

    res.status(200).json({
      data,
      status: "role-inserted......!",
    });
  } else {
    res.status(404).json({
      status: "already inserted!",
    });
  }
};

exports.role_update = async (req, res) => {
  var role = await branch.find({ rolename: req.body.rolename });
  if (role.length == 0) {
    var id = req.params.id;
    var data = await role.findByIdAndUpdate(id, req.body);

    res.status(200).json({
      data,
      status: "data-updated.....!",
    });
  } else {
    res.status(404).json({
      status: "already inserted!",
    });
  }
};
exports.role_update = async (req, res) => {
  var id = req.params.id;
  var data = await role.findById(id, req.body);

  res.status(200).json({
    data,
    status: "data-updated.....!",
  });
};
exports.role_delete = async (req, res) => {
  var id = req.params.id;
  var data = await role.findByIdAndDelete(id, req.body);
  res.status(200).json({
    status: "data-deleted.....!",
  });
};
exports.role_view = async (req, res) => {
  var data = await role.find();
  res.status(200).json({
    data,
    status: "data-viewed......!",
  });
};
exports.search_role = async (req, res) => {
  var query = req.query;
  var data = await role.find(query);
  res.status(200).json({
    data,
    status: "data-searched.....!",
  });
};
