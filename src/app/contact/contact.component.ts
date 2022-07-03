import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  name = 'Naam';
  function = 'Functie';
  phoneNumber = 'Telnr.';
  coreBoard = 'Kernbestuur';
  email = 'bierkultuur@vub.be';
  contactDescription =
    'Het kernbestuur van Bierkultuur is bereikbaar op ' +
    this.email +
    ' of via de onderstaande contactgegevens. ';

  constructor() {}

  ngOnInit(): void {}
}
