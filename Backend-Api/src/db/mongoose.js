const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {console.log("Database connected!")})
.catch(error=> {console.log("failed to connect")})

mongoose.connection.on("error", err => {
    console.log(`DB connection error: ${err.message}`);
})