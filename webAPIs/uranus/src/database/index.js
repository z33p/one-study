const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
const Notebook = require("../models/Notebook");
const VirtualPaper = require("../models/VirtualPaper");
const Board = require("../models/Board");
const Task = require("../models/Task");

const connection = new Sequelize(dbConfig);

User.init(connection);
Notebook.init(connection);
VirtualPaper.init(connection);
Board.init(connection);
Task.init(connection);

User.associate(connection.models);
Notebook.associate(connection.models);
VirtualPaper.associate(connection.models);
Board.associate(connection.models);
Task.associate(connection.models);

module.exports = connection;
