import { Component, OnInit } from '@angular/core';
import { AdItem } from './ad-items';
import { AdService } from './ad.service';
import { of, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ads: AdItem[];
  prenoms: String[];
  nombre: any;

  constructor(private adService: AdService) { }

  ngOnInit() {
    this.ads = this.adService.getAds();
    this.prenoms = this.adService.getPrenom();
  }

  // tslint:disable-next-line:member-ordering
  nums = of(1, 2, 3, 4, 5);
  // tslint:disable-next-line:member-ordering
  squareOddVals = pipe(
    filter((n: number) => n % 2 !== 0),
    map(n => n * n)
  );
}
