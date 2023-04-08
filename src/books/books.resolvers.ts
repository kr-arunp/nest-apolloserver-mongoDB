import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { BookType } from './dto/create-book.dto';
import { BookInput } from './book.input';

@Resolver()
export class BooksResolver {
  constructor(private readonly BooksService: BooksService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [BookType])
  async books() {
    return this.BooksService.findAll();
  }

  @Mutation(() => BookType)
  async createBook(@Args('input') input: BookInput) {
    return this.BooksService.create(input);
  }
}
