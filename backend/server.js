import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import postRouters from './routes/post.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(postRouters);

async function main() {
  await mongoose.connect("mongodb://jaykantyadavcse:LinkedInNetwork@ac-bcfdl72-shard-00-00.ptljnjj.mongodb.net:27017,ac-bcfdl72-shard-00-01.ptljnjj.mongodb.net:27017,ac-bcfdl72-shard-00-02.ptljnjj.mongodb.net:27017/?ssl=true&replicaSet=atlas-98l7f0-shard-0&authSource=admin&appName=LinkedInNetwork");
}

app.listen(8080, () => {
    console.log("app listen on 8080");
})