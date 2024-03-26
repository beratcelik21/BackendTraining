"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data:
app.use(express.json());

// catch async-errors:
require("express-async-errors");

// app.all("/", (req, res) => {
//   res.send("WELCOME TO TODO API");
// });
/* ------------------------------------------------------- */
// MODELS:
const { Sequelize, Datatypes, DataTypes } = require("sequelize");
// sequlize istant olustur:
const sequelize = new Sequelize("sqlite:./db.sqlite3");

//define methodu sequelize modeli olusturur.
//Her bir model, veri tabanında bir taboya denk gelir.
//sequelize.define("tableName", {modelDetails })

const Todo = sequelize.define("todos", {
  // ilk sutun olarak id sutunu sequelize tarafından otamatik yonetilir.
  //   id: {
  //     type: DataTypes.INTEGER,
  //     allowNull: false, //default: true
  //     unique: true, //default: false
  //     comment:"description",
  //     primaryKey: true,
  //     autoIncrement: true,
  //     field: "custom_name",
  //     defaultValue:"default",
  //   },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: DataTypes.TEXT,
  priority: {
    type: DataTypes.TINYINT,
    allowNull: false,
    default: 0,
  },
  isDone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    default: false,
  },

  //? Not need define createdAt & updatedAt fields.
  //? id ve createdAt ve updatedAt tanımlamaya gerek yoktur. Sequelize otomatik oluşturur/yönetir.
});
// Syncronization:
// Model bilgilerini db'ye uygula:
//sequelize.sync(); // CREATE TABLE
//sequelize.sync({ force: true }); // DROP TABLE & CREATE TABLE
//sequelize.sync({ alter: true }); // TO BACKUP & DROP TABLE & CREATE TABLE & FROM BACKUP

// Connect to db:
sequelize
  .authenticate()
  .then(() => console.log("* DB Connected *"))
  .catch(() => console.log("* DB Not Connected *"));

/* ------------------------------------------------------- */
//ROUTERS:
const router = express.Router();

// LIST TODOS:

router.get("/", async (req, res) => {
  //   const data = await Todo.findAll();
  const data = await Todo.findAndCountAll();

  res.status(200).send({
    error: false,
    result: data,
  });
});
//? CRUD Processes:

//   CREATE TODOS:
router.post("/", async (req, res) => {
  //   const receivedData = req.body;

  //   const data = await Todo.create({
  //     title: receivedData.title,
  //     description: receivedData.description,
  //     priority: receivedData.priority,
  //     isDone: receivedData.isDone,
  //    // newKey: "newValue", // Modelde tanımlanmadığı için bir işe yaramayacaktır.
  //   });
  const data = await Todo.create(req.body);
  res.status(201).send({
    error: false,
    result: data.dataValues,
  });
});
//Read Todo
router.get("/:id", async (req, res) => {
//   const data = await Todo.findOne({ where: { id: req.params.id } });
const data = await Todo.findByPk(req.params.id)
  res.status(200).send({
    error: false,
    result: data,
  });
});

app.use(router);
/* ------------------------------------------------------- */

const errorHandler = (err, req, res, next) => {
  const errorStatusCode = res.errorStatusCode ?? 500;
  console.log("errorHandler worked.");
  res.status(errorStatusCode).send({
    error: true, // special data
    message: err.message, // error string message
    cause: err.cause, // error option cause
    // stack: err.stack, // error details
  });
};
app.use(errorHandler);
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));