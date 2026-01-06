require("dotenv").config();
const express = require("express");
const { connectMongoDb } = require("./connection");
const userRouter = require("./routes/user");

const app = express();
const PORT = process.env.PORT || 3000;

connectMongoDb(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error", err));

app.use(express.json());
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
