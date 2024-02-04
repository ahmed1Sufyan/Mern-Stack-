const { mongoose } = require("../../config/dbConnection");
const {Schema} = require("mongoose")
let Likeschema = new mongoose.Schema(
  {
    user_id : {
        type : Schema.Types.ObjectId,
        ref : "userauths"
    },
    description : {
        type : "string"
    },
    image : {
        type : "string"
    },
    isPublished : {
        type : Boolean,
        default: true
    }
  },
  { timestamps: true }
);

let LikeModel = mongoose.model("Like", Likeschema);
exports.LikeModel = LikeModel;
