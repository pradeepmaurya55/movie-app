const express = require("express");
const cors = require("cors");

const moviesRouter = require("./routes/MovieRoute");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("api/v1", moviesRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
