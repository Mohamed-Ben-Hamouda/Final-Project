const express = require("express");
const app = express();
const mongoose = require("mongoose");

// init middleware
app.use(express.json());

// Connect DB

const db =
  "mongodb+srv://MBHPROJECT:MBHPROJECT@mabase-pej1z.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(
  db,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) throw err;
    console.log("Database connected!!...");
  }
);

// Define Routes
app.use("/api/personel", require("./routes/personel"));
app.use("/api/patient", require("./routes/patient"));
app.use("/api/soin", require("./routes/soin"));
app.use("/api/covidTest", require("./routes/covidTest"));

app.listen(4070, () => console.log("Server démmarrer sur le port 4070..."));
