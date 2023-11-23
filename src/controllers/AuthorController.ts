import { Request, Response } from "express"
import { IAuthor } from "../interfaces/IAuthor"
import { author } from "../models/Author"

class AuthorController {
    static async getAuthors(req: Request, res: Response) {
        try {
            const authorsList: Array<IAuthor> = await author.find({})
            res.status(200).json(authorsList)
        } catch (err) {
            res.status(500).send(`Erro: Não foi possível carregar os autores, ${err.message}`)
        }
    }
    static async getAuthorById(req: Request, res: Response) {
        try {

        } catch (err) {
            res.status(500).send(`Erro: Não foi possível carregar o autor, ${err.message}`)
        }
    }
    static async createAuthor(req: Request, res: Response) {
        try {

        } catch (err) {
            res.status(500).send(`Erro: Não foi possível criar um autor, ${err.message}`)
        }
    }
    static async updateAuthor(req: Request, res: Response) {
        try {

        } catch (err) {
            res.status(500).send(`Erro: Não foi possível atualizar o autor, ${err.message}`)
        }
    }
    static async deleteAuthor(req: Request, res: Response) {
        try {

        } catch (err) {
            res.status(500).send(`Erro: Não foi possível deletar o autor, ${err.message}`)
        }
    }
}

export default AuthorController