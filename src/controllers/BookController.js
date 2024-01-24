import { successMessages } from "../helpers/successMessages.js";
import book from "../models/Book.js";

class BookController {

  static async getBooks(req, res, next) {
    try {
      const booksList = await book.find({}).populate("author").exec();
      res.status(200).json(booksList);
    } catch (err) {
      next(err);
    }
  }

  static async getBookById(req, res, next) {
    try {
      const id = req.params.id;
      const bookFind = await book.findById(id);
      res.status(200).json(bookFind);
    } catch (err) {
      next(err);
    }
  }

  static async addBook(req, res, next) {
    try {
      await book.create(req.body);
      res.status(201).send(successMessages.CREATE_BOOK);
    } catch (err) {
      next(err);
    }
  }

  static async updateBook(req, res, next) {
    try {
      const id = req.params.id;
      await book.findByIdAndUpdate(id, req.body);
      res.status(200).send(successMessages.UPDATE_BOOK);
    } catch (err) {
      next(err);
    }
  }

  static async deleteBook(req, res, next) {
    try {
      const id = req.params.id;
      await book.findByIdAndDelete(id);
      res.status(200).send(successMessages.DELETE_BOOK);
    } catch (err) {
      next(err);
    }
  }

  static async getBookperPublishingCompany(req, res, next) {
    const search = req.query.publishing_company;
    try {
      const bookPerPublishingCompany = await book.find({  publishing_company: search });
      res.status(200).json(bookPerPublishingCompany);
    } catch (err) {
      next(err);
    }
  }
}

export default BookController;