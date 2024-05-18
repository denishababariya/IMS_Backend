const followup = require("../model/followup");
const storage = require("node-persist");
storage.init(/* options ... */);

exports.add_followup = async (req, res) => {
 
  
    var data = await followup.create(req.body);

    res.status(200).json({
      data,
      status: "followup-inserted......!",
    });
 
};

exports.followup_update = async (req, res) => {
  
    var id = req.params.id;
    var data = await followup.findByIdAndUpdate(id, req.body);

    res.status(200).json({
      data,
      status: "data-updated.....!",
    });

};

exports.followup_update = async (req, res) => {
  
    var id = req.params.id;
    var data = await followup.findById(id, req.body);

    res.status(200).json({
      data,
      status: "data-updated.....!",
    });
  
};
exports.followup_delete = async (req, res) => {
  
    var id = req.params.id;
    var data = await followup.findByIdAndDelete(id, req.body);
    res.status(200).json({
      status: "data-deleted.....!",
    });
 
};
exports.followup_view = async (req, res) => {
  
    var data = await followup.find();
    res.status(200).json({
      data,
      status: "data-viewed......!",
    });
 
};
exports.search_followup = async (req, res) => {
 
    var query = req.query;
    var data = await followup.find(query);
    res.status(200).json({
      data,
      status: "data-searched.....!",
    });
 
};
