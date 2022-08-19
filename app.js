import 'dotenv/config';
import express from "express";

const app = express();
const PORT = process.env.pgport || 3000;

// test route
app.get("/", function (req, res) {
  res.json({
    success: true,
    message: "Test route up and running!",
  });
});

console.log(process.env.pgport);

app.use("/movies", moviesRouter);

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
