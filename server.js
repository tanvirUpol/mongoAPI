const express = require('express');
const app = express();
require('dotenv').config()


const PORT = process.env.PORT;
const dbConnection = require('./db');
const userRoutes = require('./routes/userRoutes');


app.use(express.json());

app.use('/', userRoutes);

dbConnection.connect().then(() => {

    app.listen(PORT, () => {
        console.log(`Server is running on PORT: ${PORT}`);
      });

}).catch(err => {
    console.log(err);
});
