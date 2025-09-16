require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const port =  3000;
const app = express();




//Connecting to Database
db();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// Routes
const userRoutes = require('./routes/user');

const mailRoutes= require('./routes/mail');

app.get('/', (req, res) => {
  console.log('Received a GET request on /');
  res.send('Hello World!');
});


app.use('/api/user', userRoutes);

app.use("/api/mail",mailRoutes);

app.listen(port , () =>{
  console.log(`Server is running on port ${port}`);
})

