const { v2 } = require("cloudinary");
const fs = require("fs");
require("dotenv").config();
v2.config({
  cloud_name: process.env.CLOUDIARY_CLOUD_NAME,
  api_key: process.env.CLOUDIARY_API_KEY,
  api_secret: process.env.CLOUDIARY_API_SECRET,
});

const upload = async (path) => {
 return await v2.uploader.upload(path, function (error, result) {
    if (result)
      fs.unlink(path, (err) => {
        if (err) next(err);
        else {
          console.log("file deleted successfully from your server");
        }
      });
  });

};
exports.upload = upload;
