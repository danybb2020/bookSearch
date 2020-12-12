const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const dbuser = process.env.DBUSER || 'test';
const dbpass = process.env.DBPASS || 'testpass';
const dburl = "mongodb://" + dbuser+':'+dbpass+'@cluster0.mng2m.mongodb.net/googleBookSearch';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(routes) 

mongoose.connect(
  process.env.MONGODB_URI || dburl,
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);


app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
