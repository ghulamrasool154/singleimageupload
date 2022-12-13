const mongoose = require("mongoose");
// singlefileupload

mongoose.connect("mongodb://localhost:27017/", () => {
  console.log("databse connect successfully 👌");
});
// 