"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG API
------------------------------------------------------- */

const mongoose = require("mongoose");
// /*------------------------------------------------------- */
// //* Password Encryption:
// const crypto = require("node:crypto");

// const keyCode = process.env.SECRET_KEY || "write_random_chars_in_here";
// const loopCount = 10000;
// const charCount = 32;
// const encType = "sha512";

// const passwordEncrypt = function (password) {
//   return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString("hex");
// };

// /*------------------------------------------------------- */
const passwordEncrypt = require("../helpers/passwordEncypt")
// Schema:
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      //required: true,
      unique: true,
      // olmuyor  unique: [true, "Email must be required."],
      required: [true, "Email must be required."],
      //   validate: (email)=> {return true},
      //   validate: [
      //     (email) => {
      //       if (email.includes("@") && email.includes(".")) {
      //         return true;
      //       }
      //       return false;
      //     },
      //     "Email type is incorred.",
      //   ],
      validate: [
        (email) => email.includes("@") && email.includes("."),
        "Email type is incorrect",
      ],
    },

    password: {
      type: String,
      trim: true,
      required: true,
      // set: (password) => { return password + "123"},
      // set: (password) => { return password + "123"},
      // set: passwordEncrypt
      set: (password) => passwordEncrypt(password)
    },

    firstName: String,

    lastName: String,
  },
  {
    collection: "user",
    timestamps: true,
  }
);
/*------------------------------------------------------- */

// module.exports = {
//     User: mongoose.model('User', UserSchema)
// }

module.exports = mongoose.model("User", UserSchema);
