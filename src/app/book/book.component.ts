import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  animations: [ 
    ON_OFF_ANIMATION
] ,
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Promise<Book[]>
  constructor(private bookService: BookService, private router: Router) {
  }
  ngOnInit() {
     this.books = this.bookService.getBooks();
  }
  edit(book: Book) {
     this.bookService.resetBookState(book).then( () =>
	    this.router.navigate([{ outlets: { bookPopup: [ 'update-book', book.id ] }}])
     );
  }

}
