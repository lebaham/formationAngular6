import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke/joke.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';
import { PrenomComponent } from './prenom/prenom.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AppRoutingModule } from './app-routing.module';
import { BookService } from './book/book.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective,
    PrenomComponent,
    BookComponent,
    BookDetailComponent,
    BookUpdateComponent,
    AddbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AdService, BookService],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
