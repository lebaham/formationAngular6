import { Component, OnInit } from '@angular/core';
import { AdItem } from './ad-items';
import { AdService } from './ad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ads: AdItem[];
  prenoms: String[];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
    this.prenoms = this.adService.getPrenom();
  }
}
