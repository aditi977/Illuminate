require("dotenv").config({});
const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const routesHandler = require('./routes');


app.use(cors({
  origin: '*',
  credentials: true,
}));

app.use(express.json());
// app.use(require("./routes/movies"));

// get driver connection
// const dbo = require("./db/conn");

// app.listen(port, () => {
//   // perform a database connection when server starts
//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);

//   });
//   console.log(`Server is running on port: ${port}`);
// });

app.use('/api/v1', routesHandler);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err)
    process.exit(1)
  }
  console.log(`Listening on port: ${PORT}`);
})


app.use((error, req, res, next) => {
  console.error(error);
  if (error.name === 'JsonWebTokenError') {
    res.status(401).json({
      error: 'Invalid token.',
    });
  } else {
    res.status(500).json({
      error: error.message || 'Something went wrong!',
    });
  }
});