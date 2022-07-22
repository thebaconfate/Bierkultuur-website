import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BoardComponent } from './board/board.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationbarComponent } from './reusablecomps/navigationbar/navigationbar.component';
import { InstaComponent } from './reusablecomps/socialmedia/insta/insta.component';
import { FbComponent } from './reusablecomps/socialmedia/fb/fb.component';
import { SocialmediaComponent } from './reusablecomps/socialmedia/socialmedia.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BoardComponent,
    AboutusComponent,
    CalendarComponent,
    ContactComponent,
    EventsComponent,
    PageNotFoundComponent,
    NavigationbarComponent,
    InstaComponent,
    FbComponent,
    SocialmediaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
