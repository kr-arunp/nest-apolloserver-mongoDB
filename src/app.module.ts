import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { BooksModule } from './books/books.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    BooksModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      sortSchema: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/admin'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
