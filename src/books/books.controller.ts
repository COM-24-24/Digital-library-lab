import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getBooks() {
    return this.booksService.getBooks();
  }

  @Get(':id')
  getBookById(@Param('id') id: string): any {
    return this.booksService.getBookById(+id);
  }

  @Get('author/:author')
  getBooksByAuthor(@Param('author') author: string): any[] {
    return this.booksService.getBooksByAuthor(author);
  }
}
