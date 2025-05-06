//fazer todas as configurações e configurar nosso express - no backend faz mais sentido a gente utilizar em formato de classe
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";

import routes from "./routes";

class App {
  //metodo construtor é chamado automaticamente quando essa classe é instanciada
  constructor() {
    this.server = express();

    //Configurações para conectar no nosso banco de dados:
    mongoose.connect(process.env.MONGODB_URI);

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
