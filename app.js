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

app.get("/", (req, res) => res.send("Hello World!"));



app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

// app.get("/api/search", async (req, res) => {
//   try {
//     const searchString = `q=${req.query.q}`;

//     const response = await fetch(`https://www.goodreads.com/search/index.xml?key=${process.env.WEATHER_API_KEY}&${searchString}`);
//     const xml = await response.text();

//     const json = convert.xml2json(xml, { compact: true, spaces: 2 });

//     const results = JSON.parse(json).GoodreadsResponse.search.results;

//     return res.json({
//       success: true,
//       results
//     })
//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: err.message,
//     })
//   }
// })
