const express = require("express");
const { JWTverify } = require("../service/JWTverify");
const { postController } = require("../controllers/postController");
const postRoutes = express.Router()

postRoutes.route("/createpost").post(JWTverify,postController.createpost);
postRoutes.route("/deletepost/:id").delete(JWTverify,postController.deletepost);
postRoutes.route("/updatepost/:id").put(JWTverify,postController.updatepost);
postRoutes.route("/getpost/:id").get(JWTverify,postController.getpost);
postRoutes.route("/").get(JWTverify,postController.getposts);

exports.postRoutes = postRoutes;
