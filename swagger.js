const swaggerAutogen = require("swagger-autogen");

const doc = {
  info: {
    version: "1.0.0",
    title: "Task manager api",
    description: "Simple Task manager with crud operations",
  },
  host: "localhost:4000",
  basePath: "/api/v1",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  //describe each section of the endpoints
  tags: [{ name: "Tasks", description: "Task manager endpoints" }],
  securityDefinitions: {
    Authorization: {
      type: "apikey",
      name: "Authorization",
      description: "value: Bearer",
      in: "header",
      scheme: "bearer",
    },
  },
  //define model and required field
  definitions: {
    Task: {
      $name: "Read a book",
      $completed: false,
      date: "Date type",
      createdAt: "Date type",
    },
    AddTask: {
      $name: "code",
      completed: false,
    },
    UpdateTask: {
      $name: "code",
      completed: false,
    },
    DeleteTask: {
      $id: "code",
    },
  },
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./routes/task.js"];

swaggerAutogen()(outputFile, endpointsFiles, doc);
