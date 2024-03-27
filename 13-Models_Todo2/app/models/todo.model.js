"use strict";

/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

// MODELS:
const { Sequelize, Datatypes, DataTypes } = require("sequelize");
// sequlize istant olustur:
// const sequelize = new Sequelize("sqlite:./db.sqlite3");


//! POSTGRESQL CONNECTION:
//? npm install --save pg pg-hstore TERMİNALDE
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
const sequelize = new Sequelize('postgres://userBerat:Semraafra@localhost:5432/testBerat')

//define methodu sequelize modeli olusturur.
//Her bir model, veri tabanında bir taboya denk gelir.
//sequelize.define("tableName", {modelDetails })

const Todo = sequelize.define("todos", {
  // ilk sutun olarak id sutunu sequelize tarafından otamatik yonetilir.
  //   anyField: {
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
    // type: DataTypes.TINYINT,
    type: DataTypes.INTEGER,
    
    allowNull: false,
    defaultValue: 0,
  },
  isDone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },

  //? Not need define createdAt & updatedAt fields.
  //? id ve createdAt ve updatedAt tanımlamaya gerek yoktur. Sequelize otomatik oluşturur/yönetir.
});
// Syncronization:
// Model bilgilerini db'ye uygula:
//sequelize.sync(); // CREATE TABLE //? ilk defa kurma
//sequelize.sync({ force: true }); // DROP TABLE & CREATE TABLE//? Yeniden kurma icindeki bilgileri siler
//sequelize.sync({ alter: true }); // TO BACKUP & DROP TABLE & CREATE TABLE & FROM BACKUP//? Yeniden kurma icindeki bilgileri silmeden kurar

// Connect to db:
sequelize
  .authenticate()
  .then(() => console.log("* DB Connected *"))
  .catch(() => console.log("* DB Not Connected *"));


/* ------------------------------------------------------- */
//! Bu dosyaya tasınan Model in export edilmesi
module.exports = Todo