import { Injectable } from '@nestjs/common';

export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
}

@Injectable()
export class BooksService {
  private books: Book[] = [
        { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937 },
        { id: 2, title: '1984', author: 'George Orwell', year: 1949 },
        { id: 3, title: 'Harry Potter', author: 'J.K. Rowling', year: 1997 },
        { id: 4, title: 'The Alchemist', author: 'Paulo Coelho', year: 1988 },
      ];
    
      getBooks(): Book[] {
        return this.books;
      }

      getBookById(id: number): Book | undefined {
        return this.books.find(book => book.id === id);
      }

      getBooksByAuthor(author: string): Book[] {
        return this.books.filter(book => book.author === author);
      }
}
