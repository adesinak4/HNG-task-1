const express = require('express');
const Route = require('./routes/route');
const app = express();
require("dotenv").config();

app.use('/api', Route);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
