const mongoose = require('mongoose');
const connectDB = async() => {
    try {
        //mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
            //In the video walkthoriug, the below code is used, but mongoose 6 update automatically behaves as below and so the code is not required
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true
        })
        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}
module.exports = connectDB