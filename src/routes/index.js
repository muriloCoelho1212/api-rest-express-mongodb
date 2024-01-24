import express from "express";
import authors from "./AuthorRoutes.js";
import books from "./BookRoutes.js";


const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));
    
  app.use(express.json(), books);
  app.use(express.json(), authors);
};

export default routes;