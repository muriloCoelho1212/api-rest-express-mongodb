import { errorMessages } from "../helpers/errorMessages.js";
import { successMessages } from "../helpers/successMessages.js";
import { author } from "../models/Author.js";

class AuthorController {
  static async getAuthors(req, res, next) {
    try {
      const authorsList = await author.find({});
      res.status(200).json(authorsList);
    } catch (err) {
      next(err);
    }
  }
  static async getAuthorById(req, res, next) {
    try {
      const id = req.params.id;
      const authorFind = await author.findById(id);
      if (!authorFind) { 
        res.status(404).send(errorMessages.ERROR_ID_NOT_FOUND);
      } else {
        res.status(200).json(authorFind);
      }
    } catch (err) {
      next(err);
    }
  }
  static async createAuthor(req, res, next) {
    try {
      await author.create(req.body);
      res.status(201).send(successMessages.CREATE_AUTHOR);
    } catch (err) {
      next(err);
    }
  }
  static async updateAuthor(req, res, next) {
    try {
      const id = req.params.id;
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).send(successMessages.UPDATE_AUTHOR);
    } catch (err) {
      next(err);
    }
  }
  static async deleteAuthor(req, res, next) {
    try {
      const id = req.params.id;
      await author.findByIdAndDelete(id);
      res.status(200).send(successMessages.DELETE_AUTHOR);
    } catch (err) {
      next(err);
    }
  }
}

export default AuthorController;