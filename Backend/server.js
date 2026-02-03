const express = require("express");
const todoRoute = require("./router/todoRouter");
const userRoute = require("./router/userRouter"); // ✅ fixed
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/todo", todoRoute);
app.use("/api/user",  userRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
