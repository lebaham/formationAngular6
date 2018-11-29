import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-prenom',
  templateUrl: './prenom.component.html',
  styleUrls: ['./prenom.component.css']
})
export class PrenomComponent implements OnInit, OnDestroy {
  @Input() listPrenom: string[];
  currentAdIndex = -1;
  interval: any;
  adItem: string;

  constructor() { }

  ngOnInit() {
    this.loadPrenoms();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadPrenoms() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.listPrenom.length;
    this.adItem = this.listPrenom[this.currentAdIndex];
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadPrenoms();
    }, 3000);
  }

}
