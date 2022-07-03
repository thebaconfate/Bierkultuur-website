import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss'],
})
export class NavigationbarComponent implements OnInit {
  homepage: string = 'Bierkultuur';
  aboutUs: string = 'Over ons';
  contact: string = 'Contact';
  board: string = 'Bestuur';
  calendar: string = 'Kalender';
  events: string = 'Events';

  constructor() {}

  ngOnInit(): void {}
}
