import express, { Application, Request, Response } from "express"
import books from "./BookRoutes.js"


const routes = (app: Application) => {
    app.route("/").get((req: Request, res: Response) => res.status(200).send("Curso de Node.js"))
    
    app.use(express.json(), books)
}

export default routes