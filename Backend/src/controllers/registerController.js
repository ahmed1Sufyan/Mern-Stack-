const { response } = require("express");
const { userModel } = require("../model/UserModel/userModel");
const { customErrorHandler } = require("../service/customErrorHandler");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const fs = require("fs");
const { v2, upload } = require("../service/cloudinary");
// const fs = require("fs");
const { dirname } = require("path");
const { log } = require("console");
require("dotenv").config();

const registerController = {
  async register(req, res, next) {
    const { username="SUFYAN", email, password } = req.body;
    console.log(req.body);
    const exists = await userModel.findOne({ email: email });
    console.log(exists);

    if (exists)
    {
       fs.unlinkSync(req?.file?.path)
       return next(customErrorHandler.alreadyexist("Email already exists"));
    }

    // check user data validations using "JOI" library we can also use express-Validator

    // REGEX custom Message dekhna h
    const validations = Joi.object({
      username: Joi.string()
        .min(6)
        .max(30)
        .pattern(new RegExp(/^[a-zA-Z\-]+$/))
        .messages({
          "string.base": `username must be a string`,
          "string.empty": `username cannot be an empty field`,
          "string.min": `username should have a minimum length of 6`,
        })
        .required(),
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        })
        .messages({
          "string.empty": `email cannot be an empty field`,
          "string.email": `user should have valid email`,
        })
        .required(),
      password: Joi.string()
        .pattern(
          new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
        )
        .min(8)
        .messages({
          "string.empty": `password cannot be an empty field`,
          "string.min": `password should have a minimum length of 8`,
        })
        .required(),
      confirm_password: Joi.ref("password"),
    });

    const { error } = validations.validate(req.body);

    if (error) return next(error);

    // Encrypt Password to save in db
    const saltRounds = 10;
    const passwordhash = await bcrypt.hash(password, saltRounds);

    // cloudinary service
    let imgurl;
    if (req?.file?.path) {
      try {
        imgurl = await upload(req.file.path)
      } catch (error) {
        next(error)
      }
    }

    // save data in db

    const data = new userModel({
      username: username,
      email: email,
      password: passwordhash,
      ...(imgurl && { profile_imgURL: imgurl?.secure_url }),
    });
    console.log("yahan tk agya hn");
    data
      .save()
      .then(() => {
        return res.status(201).send({
          msg: "Data saved",
        });
      })
      .catch((err) => {
        return next(customErrorHandler.DatanotSaved(err));
      });
  },
};

exports.registerController = registerController;
