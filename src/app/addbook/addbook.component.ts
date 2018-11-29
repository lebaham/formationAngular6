import { Component, OnInit, HostBinding } from '@angular/core';
import { BookService } from '../book/book.service';
import { Book } from '../model/book';
import { Router } from '@angular/router';
import { ROUND_ANTICLOCK_ANIMATION } from '../round-anticlock.animation';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styles: [ ':host { position: absolute; top: 20%; left: 5%; border: 3px solid black; }' ],
  animations: [
     ROUND_ANTICLOCK_ANIMATION
  ],
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  @HostBinding('@roundAntiClockTrigger') roundAntiClockTrigger = 'in';
  book = new Book();
  constructor(private bookService: BookService, private router: Router) {
  }
  add() {
    this.bookService.addBook(this.book).then(
      () => this.router.navigate([{ outlets: { bookPopup: null } }])
    );
  }

  ngOnInit() {
  }


}
