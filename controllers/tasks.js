const task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    //#swagger.tags =["Tasks"]
    const tasks = await task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createTask = async (req, res) => {
  try {
    /* 	#swagger.tags = ['Tasks']
        #swagger.description = 'Endpoint to sign in a specific user' 
        #swagger.parameters["name", completed]= {
          in: "body",
          required: false,
          
          schema: { "$ref": "#/definitions/AddTask" },

        }
        */
    const tasks = await task.create(req.body);
    res.status(201).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getTask = async (req, res) => {
  try {
    /* 	#swagger.tags = ['Tasks']
        #swagger.description = 'Endpoint to sign in a specific user' */

    const { id: taskId } = req.params;
    const tasks = await task.findById({ _id: taskId });
    if (!tasks) {
      return res.status(404).json({ message: "No search match your id" });
    }
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    /* 	#swagger.tags = ['Tasks']
        #swagger.description = 'Endpoint to sign in a specific user' */

    const { id: taskId } = req.params;
    const tasks = await task.deleteOne({ _id: taskId });
    if (!tasks) {
      return res.status(404).json({ message: "No search match your id" });
    }
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: error });
  }
  res.json(req.body);
};

const editTasks = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    /* 	#swagger.tags = ['Tasks']
        #swagger.description = 'Endpoint to sign in a specific user' 
        #swagger.parameters["name", completed]= {
          in: "body",
          required: false,
          
          schema: { "$ref": "#/definitions/AddTask" },

        }
        */
    const tasks = await task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!tasks) {
      return res.status(404).json({ message: "No search match your id" });
    }
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  deleteTask,
  editTasks,
};
