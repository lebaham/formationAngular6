import { Component, OnInit } from '@angular/core';
import { BookService } from '../book/book.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  book: Book;
  constructor(private bookService: BookService,
           private router: Router,
           private route: ActivatedRoute) {
  }
  ngOnInit() {
       this.route.params
        .switchMap((params: Params) => this.bookService.getBook(+params['book-id']))
        .subscribe(book => this.book = book);
  }
  update() {
     this.router.navigate([{ outlets: { bookPopup: null }}]);
  }

}
