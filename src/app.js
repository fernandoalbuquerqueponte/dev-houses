import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
//importar o cors
import cors from "cors";

import path from "path";

import routes from "./routes";

class App {
  constructor() {
    this.server = express();

    mongoose.connect(process.env.MONGODB_URI);

    this.middlewares();
    this.routes();
  }

  middlewares() {
    //aplicar dentro do middleware sempre sendo o primeiro
    this.server.use(cors());

    this.server.use(
      "/files",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );

    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
