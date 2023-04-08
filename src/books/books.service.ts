import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/books.schema';
import { BookType } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private BookModel: Model<Book>) {}
  async create(createBookDto: BookType): Promise<Book> {
    const createdBook = new this.BookModel(createBookDto);
    return createdBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.BookModel.find().exec();
  }
}
