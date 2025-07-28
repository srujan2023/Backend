const express = require('express')
const app = express();
const connectDB = require('./config/db')
const dotenv = require('dotenv')
dotenv.config();


const PORT = process.env.PORT;

connectDB()

app.use(express.json())

app.get('/',(req,res) =>{
    res.json({Message:"Server is running"})
})

app.use('/api/blog/articles',require('./routes/articleRoutes'))

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
})