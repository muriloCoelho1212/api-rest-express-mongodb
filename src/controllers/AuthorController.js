import { author } from "../models/Author"

class AuthorController {
    static async getAuthors(req, res) {
        try {
            const authorsList = await author.find({})
            res.status(200).json(authorsList)
        } catch (err) {
            res.status(500).send(`Erro: Não foi possível carregar os autores, ${err.message}`)
        }
    }
    static async getAuthorById(req, res) {
        try {

        } catch (err) {
            res.status(500).send(`Erro: Não foi possível carregar o autor, ${err.message}`)
        }
    }
    static async createAuthor(req, res) {
        try {

        } catch (err) {
            res.status(500).send(`Erro: Não foi possível criar um autor, ${err.message}`)
        }
    }
    static async updateAuthor(req, res) {
        try {

        } catch (err) {
            res.status(500).send(`Erro: Não foi possível atualizar o autor, ${err.message}`)
        }
    }
    static async deleteAuthor(req, res) {
        try {

        } catch (err) {
            res.status(500).send(`Erro: Não foi possível deletar o autor, ${err.message}`)
        }
    }
}

export default AuthorController