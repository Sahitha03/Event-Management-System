const mongoose = require("mongoose");

const EventDetailsScehma = new mongoose.Schema(
  {
    theme: String,
    price: Number,
    availability:String ,
  },
  {
    collection: "Event",
  }
);

mongoose.model("Event", EventDetailsScehma);    