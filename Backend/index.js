const express = require('express')

require('dotenv').config()
var cors = require("cors");
const app = express()
const connectDB = require('./Connect')
const studentRoutes = require('./routes/StudentRoutes');
const { errorHandler } = require('./middleware/errorHandler');

app.use(express.json());
app.use(cors());

// app.get('/', (req, res)=>{
//     res.send("hello world")
// })


app.use("/api/auth", require("./routes/Auth"));
app.use('/api/student', studentRoutes);
app.use(errorHandler);


const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(process.env.PORT,()=>console.log("server started....."))
    }catch(err){
        console.log(err)
    }
}
start();