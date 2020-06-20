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
app.use("/api/chefService", require("./routes/chefService"));
app.use("/api/patient", require("./routes/patient"));
app.use("/api/soin", require("./routes/soin"));
app.use("/api/authChef", require("./routes/authChef"));
app.use("/api/authInfermier", require("./routes/authInfermier"));
app.use("/api/authMedecin", require("./routes/authMedecin"));
app.use("/api/covidTest", require("./routes/covidTest"));
app.use("/api/suivie", require("./routes/suivie"));
app.use("/api/medecin", require("./routes/medecin"));
app.use("/api/infermier", require("./routes/infermier"));
app.use("/api/prescription", require("./routes/prescription"));

app.listen(4070, () => console.log("Server démmarrer sur le port 4070..."));
