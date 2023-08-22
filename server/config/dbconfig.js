const mongoose = require("mongoose")
// const url=process.env.MONGODB_URL
const connectDB = async (url) => {
    mongoose.set('strictQuery', true);

    await mongoose.connect(url)
        .then(() => console.log("MongoDB connected"))
        .catch((err) => console.log(err))
}
module.exports=connectDB

