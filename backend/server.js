const express = require("express");
const bodyParser = require("body-parser");
const db = require("./connect/db");

const path = require("path");
const cors = require("cors");

const { sequelize } = require("./models");

//databse syncing
sequelize
  .authenticate()
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
const seedsRouter = require("./api/seed");
const surveyRouter = require("./api/survey");
const roleRouter = require("./api/role");
const surveyTypeRouter = require("./api/surveyType");

//API routes
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/organization", orgRouter);
app.use("/api/survey", surveyRouter);
app.use("/api/seed", seedsRouter);
app.use("/api/role", roleRouter);
app.use("/api/surveyType", surveyTypeRouter);

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

const port = process.env.PORT || 5550;

app.listen(port, () => console.log(`server started on port ${port}`));
