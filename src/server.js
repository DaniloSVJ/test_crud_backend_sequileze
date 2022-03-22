const express = require("express");
const routes = require("./routes")

require('./database')

const app = express();

app.use(express.json())
app.use(routes)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

