import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  homepageTitle = 'Bierkultuur';
  homepageTitleDescription = 'Promoot de goede smaak sinds 2005!';
  extraTitleDescription = 'Bier & kaas, Dag van het Bier, Bierkaffee\'s, Cantussen, Proeverijen, Brouwerijbezoeken en meer!'
  homepageIntro = 'Iemand nodig?';
  presidentText = 'teef'

  constructor() {}

  ngOnInit(): void {}
}
