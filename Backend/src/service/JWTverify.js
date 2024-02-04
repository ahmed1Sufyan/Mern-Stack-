const { userModel } = require("../model/UserModel/userModel");
const { customErrorHandler } = require("./customErrorHandler");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWTverify = async (req, res, next) => {

  console.log(req.cookies.accesstoken);

  if (!req.headers?.authorization && !req?.cookies?.accesstoken)
    return next(customErrorHandler.invalidcredentials("Unauthorized request"));

  const token = req?.headers?.authorization?.replace("Bearer ", "") || req?.cookies?.accesstoken;
  try {
    const data = jwt.verify(token, process.env.API_SECRET_KEY);
    const userfound = await userModel
      .findOne({ id: data._id })
      .select("-password -profile_imgURL");
    if (!userfound)
      next(customErrorHandler.unauthorized("Unauthorized request"));
    req.users = userfound;
  } catch (error) {
    return next(
      customErrorHandler.invalidToken("Invalid Access Token - Access denied")
    );
  }

  return next();
};

exports.JWTverify = JWTverify;
