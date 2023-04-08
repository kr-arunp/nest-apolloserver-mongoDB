import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class BookType {
  @Field(() => ID)
  id: string;

  @Field()
  readonly title: string;

  @Field()
  readonly authorId: string;
}
