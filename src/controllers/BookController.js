import book from "../models/Book.js";

class BookController {

    static async getBooks(req, res) {
        try {
            const booksList = await book.find({}).populate("author").exec()
            res.status(200).json(booksList)
        } catch (err) {
            res.status(500).send(`Erro: não foi possível carregar os livros, ${err.message}`)
        }
    }

    static async getBookById(req, res) {
        try {
            const id = req.params.id
            const bookFind = await book.findById(id)
            res.status(200).json(bookFind)
        } catch (err) {
            res.status(500).send(`Erro: não foi possível carregar o livro, ${err.message}`)
        }
    }

    static async addBook(req, res) {
        try {
            await book.create(req.body)
            res.status(201).send("Novo livro cadastrado")
        } catch (err) {
            res.status(500).send(`Erro: não foi possível cadastrar o livro, ${err.message}`)
        }
    }

    static async updateBook(req, res) {
        try {
            const id = req.params.id
            await book.findByIdAndUpdate(id, req.body)
            res.status(200).send("Livro atualizado com sucesso")
        } catch (err) {
            res.status(500).send(`Erro: não foi possível atualizar o livro, ${err.message}`)
        }
    }

    static async deleteBook(req, res) {
        try {
            const id = req.params.id
            await book.findByIdAndDelete(id)
            res.status(200).send("Livro deletado com sucesso")
        } catch (err) {
            res.status(500).send(`Erro: não foi possível deletar o livro, ${err.message}`)
        }
    }

    static async getBookperPublishingCompany(req, res) {
        const search = req.query.publishing_company
        try {
            const bookPerPublishingCompany = await book.find({  publishing_company: search })
            res.status(200).json(bookPerPublishingCompany)
        } catch (err) {
            res.status(500).send(`Erro: não foi possível carregar o livro, ${err.message}`)
        }
    }
}

export default BookController