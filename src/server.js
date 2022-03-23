const express = require("express");
const routes = require("./routes")
const cors = require('cors');


require('./database')

const app = express();
app.use(cors())
app.use(express.json())
app.use(routes)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

