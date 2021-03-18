const express = require("express");
const bodyParser = require("body-parser");
const db = require("./connect/db");

const path = require("path");
const cors = require("cors");
const { error } = require("console");
const { sequelize } = require("./models");

//databse syncing

db.sync()
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => console.error("unable to connect db", err));

const app = express();

app.use(cors());
//public folder to show webpage running
app.use(express.static(path.join(__dirname, "public")));

//parse application/json form-urlencoded
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//router imports
const userRouter = require("./api/user");
const adminRouter = require("./api/admin");
const orgRouter = require("./api/organization");
//API routes
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/organization", orgRouter);

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

const port = process.env.PORT || 5550;

app.listen(port, () => console.log(`server started on port ${port}`));
