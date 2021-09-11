const express = require("express");
const swaggerUI = require("swagger-ui-express");
require("dotenv").config();
// const YAML = require("yamljs");

const Tasks = require("./routes/task");
const connect_db = require("./db/connect");

const app = express();
// const swaggerJsDocs = YAML.load("./views/api.yaml");
const PORT = 4000;
const url_string = process.env.MONGO_DB_CONNECTION_STRING;
const swaggerFile = require("./swagger_output.json");

//middleware
app.use(express.json());
app.use("/api/v1", Tasks);
app.use(express.static("./public"));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.get("/home", (req, res) => {
  res.send("welcome Task manager");
});

const start = async () => {
  try {
    await connect_db(url_string)
      .then(() => console.log("db connected successfully...."))
      .catch((err) => console.log(err));
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}...`);
    });
  } catch (error) {
    console.log(err);
  }
};

start();
