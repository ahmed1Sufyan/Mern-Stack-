const express = require("express");
const { registerController } = require("../controllers/registerController");
const { loginController } = require("../controllers/loginController");
const authRoutes = express.Router();
const { upload } = require("../Middlewares/fileHandler");
const { JWTverify } = require("../service/JWTverify");


authRoutes.post("/register",upload.single("img"), registerController.register);
authRoutes.post("/login", loginController.login);
authRoutes.get("/logout",JWTverify,loginController.logout);
authRoutes.get("/profile",JWTverify,loginController.profile);

exports.authRoutes = authRoutes;
