const jwt = require("jsonwebtoken");
const { userModel } = require("../model/UserModel/userModel");
const { customErrorHandler } = require("../service/customErrorHandler");
const cookieParser = require('cookie-parser');
const bcrypt = require("bcrypt");
const { options } = require("joi");

const loginController = {
  async login(req, res, next) {
    // check whether this user email is exist or not
    const checkEmail = await userModel.findOne({ email: req.body.email });

    if (!checkEmail) {
      return next(customErrorHandler.Usernotfound("User not found"));
    }

    // Check valid password
    const isPasswordValid = bcrypt.compareSync(
      req.body.password,
      checkEmail.password
    );

    if (!isPasswordValid) {
      return next(customErrorHandler.invalidcredentials("Invald Credentials"));
    }

    var token = jwt.sign(
      {
        id: checkEmail._id,
        email: checkEmail.email,
        password: checkEmail.password,
      },
      process.env.API_SECRET_KEY,
      {
        expiresIn: '1h',
      }
    );


    const options = {
      httpOnly : true,
      secure : false
    }
      
    return res.cookie("accesstoken",token,options).json({
      user: {
        id: checkEmail._id,
        email: checkEmail.email,
        password: checkEmail.password,
      }
    });
  },
  logout(req,res,next){
    res.clearCookie('accesstoken').json({
      msg: "Logout successful"
    })
  },
  profile : (req,res,next) =>{
    res.json({
      msg: `Welcome ${req.users.username}`,
      user : req.users
    })
  }
};

exports.loginController = loginController;
