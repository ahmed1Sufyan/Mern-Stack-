const { mongoose } = require("../../config/dbConnection");
const {Schema} = require("mongoose")
let commentschema = new mongoose.Schema(
  {
    commentBy : {
        type : Schema.Types.ObjectId,
        ref : "userauths"
    },
    commentTo : {
        type : Schema.Types.ObjectId,
        ref : "userauths"
    },
    comment : {
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
