const { mongoose } = require("../../config/dbConnection");

let userschema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 30,
    },
    email: {
      type: String,
      required : true,
    },
    password: {
      type: String,
      required: true,
    },
    profile_imgURL : {
      type : String,
      default : "no profile picture has been provided"
    }
  },
  { timestamps: true }
);

let userModel = mongoose.model("UserAuth", userschema);
exports.userModel = userModel;
