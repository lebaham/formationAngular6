import { Component, OnInit } from '@angular/core';
import { BookService } from '../book/book.service';
import { Book } from '../model/book';
import { Router, ActivatedRoute} from '@angular/router';

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
      const params = +this.route.params['book-id'];
      this.bookService.getBook(params).then(book => this.book = book);
  }
  update() {
     this.router.navigate([{ outlets: { bookPopup: null }}]);
  }

}
