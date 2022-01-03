const express = require('express');
const app = express();
const port = process.env.PORT || 6069;
require('dotenv').config();
require('./config/db')

//Adding Route controllers and handlers.
const user = require('./Routes/Users')


// Igniting Server
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})

//Using middlewares
app.use('/', user)

