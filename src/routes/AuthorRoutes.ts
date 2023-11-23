import express from "express"
import AuthorController from "../controllers/AuthorController"

const routes = express.Router()

routes.get("/author", AuthorController.getAuthors)
routes.get("/author/:id", AuthorController.getAuthorById)
routes.post("/author", AuthorController.createAuthor)
routes.put("/author/:id", AuthorController.updateAuthor)
routes.delete("/author/:id", AuthorController.deleteAuthor)

export default routes