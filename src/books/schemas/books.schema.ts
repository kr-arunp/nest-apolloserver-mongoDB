import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type BookDocument = HydratedDocument<Book>;
@Schema({ collection: 'BooksData' })
export class Book {
  @Prop()
  id: string;
  @Prop()
  title: string;
  @Prop()
  authorId: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
