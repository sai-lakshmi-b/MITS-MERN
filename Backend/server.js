const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const todoRoute = require("./router/todoRouter");
const userRoute = require("./router/userRouter");
const cors = require("cors")
dotenv.config();

const app = express();
app.use(cors());
connectDB();

app.use(express.json());


app.use("/api/todos", todoRoute);
app.use("/api/users", userRoute);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
