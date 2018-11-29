import { Component, OnInit, HostBinding } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../book/book.service';
import { FLY_IN_OUT_ANIMATION } from '../fly-in-out.animation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styles: [ ':host { position: absolute; top: 20%; left: 5%; border: 3px solid black; }' ],
  animations: [
    FLY_IN_OUT_ANIMATION
  ],
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @HostBinding('@flyInOutTrigger') flyInOutTrigger = 'in';
  books: Promise<Book[]>;
  constructor(private bookService: BookService, private router: Router) {
  }
  ngOnInit() {
     this.books = this.bookService.getBooks();
  }
  close() {
     this.router.navigate([{ outlets: { bookList: null }}]);
  }

}
