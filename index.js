const express = require("express");
const timeStampRouter = require("./router/timeStamp");

const app = express();

app.use(express.json())

app.use('/timeStamp', timeStampRouter)

app.listen(3000);