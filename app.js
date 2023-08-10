const express = require('express');
const app = express();
const PORT = 4242;

// To be added logger
app.get('/', (req, res) => {
   console.log("route");
   res.send('Route');
});

// To be added logger
app.listen(PORT, () => {
   // console.log("Hello world 4242");
   // console.log(`${PORT} port listen`);
});