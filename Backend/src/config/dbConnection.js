const mongoose = require("mongoose");
require("dotenv").config();
// class DBservice {
//   async Connection() {
//     return await mongoose.connect(
//       `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_USER_PASS}@cluster0.tav8esc.mongodb.net/`
//     );
//   }
// }

// const DB = new DBservice().Connection();
// DB.then((d) => {
//   console.log("DB Connected Successfully!! ");
// }).catch((err) => {
//   console.log(err.message);
// });

// module.exports = { DB };


mongoose
    .connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_USER_PASS}@cluster0.tav8esc.mongodb.net/`
    )
    .then(() => {
      console.log("DB connection established");
    })
    .catch((err) => {
      console.log(err);
    });

exports.mongoose = mongoose