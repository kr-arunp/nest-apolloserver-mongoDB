import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class BookInput {
  @Field()
  readonly title: string;
  @Field(() => String)
  readonly id: string;
  @Field()
  readonly authorId: string;
}
