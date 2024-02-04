const express = require("express");
const app = express();
require("dotenv").config();
const { authRoutes } = require("./Routes/authRoutes");
const {errorHandler} = require("./Middlewares/errorHandler");
const bodyParser = require('body-parser');
const { validator } = require("./Middlewares/validators");
const { postRoutes } = require("./Routes/postRoutes");
const cookieParser = require("cookie-parser");
const cors = require('cors');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:5173', // specify the allowed origin(s)
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // specify allowed HTTP methods
  credentials: true, // allow cookies and HTTP authentication to be sent
};

// Enable CORS for all routes with specified options
app.use(cors(corsOptions));

app.use(cookieParser())
app.use(express.json())
app.use("/api",authRoutes)
app.use("/api",postRoutes)


app.use(errorHandler)

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log("listening on port " + port);
});
