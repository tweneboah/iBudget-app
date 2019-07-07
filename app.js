const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');


mongoose.connect('mongodb://localhost/Budget-App', {
 useNewUrlParser: true,
 useCreateIndex: true
})
.then(() => console.log("DB Connected successfully"));

//MIDDLEWARE
app.use(express.json({ extended: false }));



//SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`The server has started on port ${PORT}`)
})