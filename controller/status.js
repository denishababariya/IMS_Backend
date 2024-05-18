const status = require("../model/status");
const storage = require("node-persist");
storage.init(/* options ... */);

exports.add_status = async (req, res) => {

    var data = await status.create(req.body);

    res.status(200).json({
      data,
      status: "role-inserted......!",
    });

};

exports.status_update = async (req, res) => {

    var id = req.params.id;
    var data = await status.findByIdAndUpdate(id, req.body);

    res.status(200).json({
      data,
      status: "data-updated.....!",
    });
  
};
exports.status_update = async (req, res) => {
  
    var id = req.params.id;
    var data = await status.findById(id, req.body);

    res.status(200).json({
      data,
      status: "data-updated.....!",
    });

};
exports.status_delete = async (req, res) => {

    var id = req.params.id;
    var data = await status.findByIdAndDelete(id, req.body);
    res.status(200).json({
      status: "data-deleted.....!",
    });

};
exports.status_view = async (req, res) => {
    var data = await status.find();
    res.status(200).json({
      data,
      status: "data-viewed......!",
    });
 
};
exports.search_status = async (req, res) => {
 
    var query = req.query;
    var data = await status.find(query);
    res.status(200).json({
      data,
      status: "data-searched.....!",
    });
 
};
