const admin = require("../model/admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const storage = require("node-persist");
storage.init(/* options ... */);


exports.admin_insert = async (req, res) => {
  var b_pass = await bcrypt.hash(req.body.password, 10);
  req.body.password = b_pass;
  req.body.image = req.file.originalname;

  var data = await admin.create(req.body);

  res.status(200).json({
    data,
    status: "data-inserted.....!c",
  });
};

exports.admin_update = async (req, res) => {
 
    var id = req.params.id;
    var b_pass = await bcrypt.hash(req.body.password, 10);
    req.body.password = b_pass;
    var data = await admin.findByIdAndUpdate(id, req.body);

    res.status(200).json({
      data,
      status: "data-updated.....!",
    });
 
};

exports.admin_delete = async (req, res) => {
 
    var id = req.params.id;
    var data = await admin.findByIdAndDelete(id, req.body);
    res.status(200).json({
      status: "data-deleted.....!",
    });
  
};

exports.admin_view = async (req, res) => {
 
    var data = await admin.find().populate("role").populate("branch_id");
    res.status(200).json({
      data,
      status: "data-viewed......!",
    });
 
};

exports.search_admin = async (req, res) => {
 
    var search = req.query;
    console.log(search);
    var search = await admin.find(search);
    res.status(200).json({
      status: "data",
      search
    });
 
};

exports.admin_login = async (req, res) => {
    var status = await storage.getItem("admin-login");

  if (status == undefined) {
    // var name = await admin.find({ name: req.body.name });
    var email = await admin.find({"email":req.body.email});

    if (email.length == 1) {
      bcrypt.compare(
        req.body.password,
        email[0].password,
        async function (err, result) {
          if (result == true) {
            await storage.setItem('admin-login',email[0].id);
            const token = jwt.sign({ adminId: admin._id }, 'IMS', { expiresIn: '1h' });
            res.status(200).json({
              status: "login success",
              token
            });
          } else {
            res.status(200).json({
              status: "Check Your Email and Password(1)",
            });
          }
        }
      );
    } else {
      res.status(200).json({
        status: "Check Your Email and Password(2)",
      });
    }
  } else {
    res.status(200).json({
      status: "admin is already login",
    });
  }

};

exports.admin_logout = async (req, res) => {
  try {
    await storage.removeItem("admin-login");
    res.status(200).json({ status: "User is logged out" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "Internal server error" });
  }
};
