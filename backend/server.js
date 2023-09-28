const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser")
const recordRoutes = require('./routes/registeruser.js');
require('dotenv').config();
const corsOptions = {
  origin: 'http://localhost:5173', 
  credentials: true, 
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', function (req, res, next) {
    res.send("Server is working successfully");
});
app.get('/register',(req,res)=>{
  res.send('this is the register page')
})
app.use("/", recordRoutes);
app.listen(3000, () => {
    console.log('Connected to PORT 3000...');
});
