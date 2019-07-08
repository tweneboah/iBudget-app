const express = require('express');
const mongoose = require('mongoose');
const usersRoutes = require('./routes/api/users')
const app = express();
const cors = require('cors')


mongoose.connect('mongodb://localhost/iBudget', {
 useNewUrlParser: true,
 useCreateIndex: true
})
.then(() => console.log("DB Connected successfully"));

//MIDDLEWARE
app.use(express.json({ extended: false }));
app.use(cors())

//SERVING ROUTES
app.use('/api/users', usersRoutes)

//SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`The server has started on port ${PORT}`)
})