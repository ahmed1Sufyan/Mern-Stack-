const { mongoose } = require("../../config/dbConnection");
const {Schema} = require("mongoose")
let Postschema = new mongoose.Schema(
  {
    user_id : {
        type : Schema.Types.ObjectId,
        ref : "userauths"
    },
    description : {
        type : "string",
        default : null,
    },
    image : {
        type : "string",
        default : null
    },
    isPublished : {
        type : Boolean,
        default: true
    }
  },
  { timestamps: true }
);

let postModel = mongoose.model("Post", Postschema);
exports.postModel = postModel;
