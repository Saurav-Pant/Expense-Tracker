require("dotenv").config();
const app = require("./index");
const db = require("./utils/db");

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}...`);
});
