const mongoose = require("mongoose")

const connectDB= async()=>{
  try {
    await mongoose.connect("mongodb+srv://itvinatt:1007mccl@cluster0.yyn9vwv.mongodb.net/?retryWrites=true&w=majority")
    console.log("Connect DB successful")
  } catch (error) {
    console.log("Lỗi kết nối db: "+ error.message)
  }
}

module.exports= connectDB