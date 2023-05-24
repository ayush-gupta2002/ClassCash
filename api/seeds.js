import Batch from "./models/batch.js";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });

const batches = [
  "EE-A",
  "EE-B",
  "CO-A",
  "CO-B",
  "SE-A",
  "SE-B",
  "AE-A",
  "AE-B",
  "MC-A",
  "MC-B",
  "EC-A",
  "EC-B",
  "IT-A",
  "IT-B",
  "CE-A",
  "CE-B",
];

function seedBatches() {
  batches.map(async (b) => {
    const newBatch = new Batch();
    newBatch.name = b;
    newBatch.year = 2021;
    try {
      const res = await newBatch.save();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  });
}

seedBatches();
