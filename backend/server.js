import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import postRouters from './routes/post.routes.js';
import userRouters from './routes/user.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(postRouters);
app.use(userRouters);

app.use(express.static("uploads"))

async function main() {
  try {
    await mongoose.connect(process.env.mongo_URL);

    console.log("DB Connected");

    app.listen(8080, () => {
      console.log("Server running on 8080");
    });

  } catch (err) {
    console.log(err);
  }
}

main();