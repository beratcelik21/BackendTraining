"use strict";
const { default: mongoose } = require("mongoose");
/*-------------------------------------- *
            BLOG API MODELS
/*-------------------------------------- */
//!1
const Mongoose = require("mongoose");
//!2
/*-------------------------------------- */
const blogPostSchema = new mongoose.Schema(
  {
    //   _id:
    //  categoryId:

    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      trim: true,
      required: true,
    },
    // createdAt,
    // updatedAt
  },
  {
    collection: "BlogPost",
    timestamps: true,
  }
)
//? mongoose.model("model ismi", "hangi sema")
const BlogPostModel= mongoose.model("BlogPOst",blogPostSchema)
// module.exports={
//     BlogPost: BlogPostModel,
// }
module.exports={
    BlogPost: mongoose.model("BlogPOst",blogPostSchema),
}

// const nameSchema= new mongoose.Schema({fields},{tablo adı})
/*-------------------------------------- *

const nameSchema = new mongoose.Schema(
  {
    // _id: //?auto created and incrment
    // fieldName:Type//? kısa versiyon
    // fieldName: String,
    // fieldName2:BigInt,
    fieldName: {
      type: String,
      default: null,
      trim: true,
      uniqe: true, //? Benzersiz (kayıt) field
      select: false, //? Model cagırıldıgında gelsin mi?
      index: false, //? Aramalarda erisimi hızlandırır
      reqired: true, //? Veri girisi gerekli mi?
      reqired: [true, "error message"], //? gerekli mi degil mi , hata mesajı
      enum: [[1,2,3], "error message"], //? Belirli bir patterne gore veri girisi
      validate:[function(data){ return true},"error message"], //?  Veriyi fonksiyon ile dogrulama
      get: function(data){return data},  //? Veriyi cagırırken calısacak fonksiyon
      set: function(data){return data},  //? Veriyi kaydederken calısacak fonksiyon

    },
  },
  {
    collection: "collectionName",//? Tablo ismi
    timestamps: true   //? Createdate updateDate
  }
);
/*-------------------------------------- */
