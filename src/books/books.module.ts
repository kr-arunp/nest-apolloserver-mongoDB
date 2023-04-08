import { Module } from '@nestjs/common';
import { BooksResolver } from './books.resolvers';
import { Book, BookSchema } from './schemas/books.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksService } from './books.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  providers: [BooksResolver, BooksService],
})
export class BooksModule {}
