const express = require('express');
const Food = require('./db/schemas/Food.js')
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser")
const recordRoutes = require('./routes/registeruser.js');
const Order = require('./db/schemas/Orders.js');
const Booking = require('./db/schemas/Booking.js');
require('dotenv').config();

const corsOptions = {
  origin: 'https://dailycious-app.vercel.app/',
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
app.get('/getmenubyid/:id', async (req, res) => {
  const foodId = req.params.id;
  try {
    const menuData = await Food.findOne({ foodId });
    if (menuData) {
      res.json(menuData);
      console.log(menuData);
    } else {
      console.log('Food not found');
      res.status(404).json({ error: 'Food not found' });
    }
  } catch (err) {
    console.error('Error fetching menu data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/orderfood', async (req, res) => {
  const { food_id, username, paymentmode, quantity, totalamount, address } = req.body;
  const order = new Order({
    food_id,
    username,
    paymentmode,
    quantity,
    totalamount,
    address
  });
  try {
    const newOrder = await order.save();
    res.json(newOrder);
  } catch (err) {
    console.error('Error placing order:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
})

app.get('/booking', async (req, res) => {
  try {
    const bookingData = await Booking.find({}, { _id: 0, __v: 0 });
    res.json(bookingData);
  } catch (err) {
    console.error('Error fetching booking data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
})

app.post('/booking', async (req, res) => {
  const { username, Day, Timeslot, Datetime, Status } = req.body;
  const booking = new Booking({
    username,
    Day,
    Timeslot,
    Datetime,
    Status
  });

  await booking.save()
    .then(() => {
      res.status(200).json({ message: "Booking Successful" });
    })
    .catch((err) => {
      console.error('Error placing order:', err);
      res.status(500).json({ message: "Timeslot is already booked" });
    });
})
app.get('/', (req, res) => {
  res.send('Server Running!')
})
app.use("/", recordRoutes);

export default app;

