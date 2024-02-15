const express = require('express');
const Food = require('./db/schemas/Food.js')
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
app.get('/register', (req, res) => {
  res.send('this is the register page')
})
app.get('/getmenu', async (req, res) => {
  try {
    const menuData = await Food.find({}, { _id: 0, __v: 0 });
    res.json(menuData);
  } catch (err) {
    console.error('Error fetching menu data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.use("/", recordRoutes);
app.listen(3000, () => {
  console.log('Connected to PORT 3000...');
});
