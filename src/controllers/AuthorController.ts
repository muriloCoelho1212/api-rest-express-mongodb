import { Request, Response } from "express"
import { IAuthor } from "../interfaces/IAuthor"
import { author } from "../models/Author"


class AuthorController {
    static async getAuthors(req: Request, res: Response) {
        try {
            const authorsList: Array<IAuthor> = await author.find({})
            res.status(200).json(authorsList)
        } catch (err) {
            res.status(500).send(`Erro: Não foi possível carregar os autores, ${err.body}`)
        }
    }
}

export default AuthorController