  var inquiry = require('../model/inquiry')

  const storage = require("node-persist");
  storage.init(/* options ... */);
  var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'cdmidenishababariya320@gmail.com',
      pass: 'urvg jgam aytq iujj'
    }
  });
  function  randomotp() {
    return Math.floor(100000 + Math.random() * 900000); 
   }
  exports.add_inq = async (req,res) => {
    
    const otp =  randomotp();

    var mailOptions = {
      from: 'cdmidenishababariya320@gmail.com',
      to: req.body.email,
      subject: 'Sending Email using Node.js',
      text: 'That was easy! '+otp
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    await storage.setItem('otp', otp);
    
          var data = await inquiry.create(req.body);
          res.status(200).json({
              data,
              status: "data inserted...."
            });

            await storage.setItem('id', data._id.toString());


    
  }
  exports.verify_otp = async (req, res) => {
    const { otp } = req.body;

    var id = await storage.getItem('id');
     const storedOTP = await storage.getItem('otp');
  
     if (storedOTP && storedOTP === otp) {
       
         const updatedInquiry = await inquiry.findByIdAndUpdate(id ,{verified : true});
  
              
              await storage.clear();
  
              res.status(200).json({
                  status: "Inquiry Verified",
                  data: updatedInquiry
              });
     } else {
         res.status(400).json({ 
          status: 'Invalid OTP. Inquiry creation failed.'
        });
      };
  
};
  exports.inquiry_update = async (req, res) => {
    
        var id = req.params.id;
        var data = await inquiry.findByIdAndUpdate(id, req.body);
    
        res.status(200).json({
          data,
          status: "data-updated.....!",
        });
    
    };
    
  exports.inquiry_update = async (req, res) => {
      var id = req.params.id;
      var data = await inquiry.findById(id, req.body);

      res.status(200).json({
        data,
        status: "data-updated.....!",
      });
  
  };
    exports.inquiry_delete = async (req, res) => {
  
        var id = req.params.id;
        var data = await inquiry.findByIdAndDelete(id, req.body);
        res.status(200).json({
          status: "data-deleted.....!",
        });
    
    };
    exports.inquiry_view = async (req, res) => {
    
        var data = await inquiry.find().populate('branch_id').populate('ref_id').populate('inq_by').populate('status').populate('course_id');
        res.status(200).json({
          data,
          status: "data-viewed......!",
        });
    
    };
    exports.search_inquiry = async (req, res) => {
    
        var query = req.query;
        var data = await inquiry.find(query);
        res.status(200).json({
          data,
          status: "data-searched.....!",
        });
      
    };
    