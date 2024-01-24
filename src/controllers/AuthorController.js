import { author } from "../models/Author.js";

class AuthorController {
  static async getAuthors(req, res) {
    try {
      const authorsList = await author.find({});
      res.status(200).json(authorsList);
    } catch (err) {
      res.status(500).send(`Erro: Não foi possível carregar os autores, ${err.message}`);
    }
  }
  static async getAuthorById(req, res) {
    try {
      const id = req.params.id;
      const authorFind = await author.findById(id);
      res.status(200).json(authorFind);
    } catch (err) {
      res.status(500).send(`Erro: Não foi possível carregar o autor, ${err.message}`);
    }
  }
  static async createAuthor(req, res) {
    try {
      await author.create(req.body);
      res.status(201).send("Autor cadastrado com sucesso");
    } catch (err) {
      res.status(500).send(`Erro: Não foi possível criar um autor, ${err.message}`);
    }
  }
  static async updateAuthor(req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).send("Livro atualizado com sucesso");
    } catch (err) {
      res.status(500).send(`Erro: Não foi possível atualizar o autor, ${err.message}`);
    }
  }
  static async deleteAuthor(req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndDelete(id);
      res.status(200).send("Autor deletado com sucesso");
    } catch (err) {
      res.status(500).send(`Erro: Não foi possível deletar o autor, ${err.message}`);
    }
  }
}

export default AuthorController;