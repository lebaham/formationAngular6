import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  favoriteColorControl = new FormControl('');
  // tslint:disable-next-line:member-ordering
  favoriteColor = '';

}
