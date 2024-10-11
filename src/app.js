const express = require('express');
const app = express();
const port = process.env.PORT || 8000
require("../src/db/conn")
const router = require('./routers/routers');
app.use(express.json());
app.use(router);

app.listen(port , () => {
    console.log(`connection is live on ${port}`);
})