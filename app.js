const express = require('express');
const connectDB = require('./db/connect')
const userRouter=require('./routes/userRouter')
const projectRouter=require('./routes/projectRouter')
const app = express();
const port = process.env.PORT|| 5000
require('dotenv').config();



const cors = require('cors');
app.use(cors())

app.use(express.json());

app.use('/api/v1/users',userRouter)

app.use('/api/v1/projects',projectRouter)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    }
    catch (error) {
        console.log(error)
    }
}

start();