const express = require("express");
const database = require("./database/sqlite");
const cors = require("cors");

const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

database();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
