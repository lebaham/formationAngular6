import { Component, OnInit } from '@angular/core';
import { BookService } from '../book/book.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  @HostBinding('@roundAntiClockTrigger') roundAntiClockTrigger = 'in';
  book = new Book();
  constructor(private bookService: BookService, private router: Router) {
  }
  add() {
    this.bookService.addBook(this.book).then(
	 () => 	this.router.navigate([{ outlets: { bookPopup: null }}])
    );
  } 

}
