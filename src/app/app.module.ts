import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSidenavModule, MdToolbarModule, MdCardModule, MdButtonModule, MdMenuModule, MdListModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './herodetail/hero-detail.component';
import { HeroControls } from './hero-controls/hero-controls.component';
import { HeroCard } from './hero-card/hero-card.component';
import { Menu } from './menu/menu.component';
import 'hammerjs';

import { HeroService } from './domain/hero.service';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'hero/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MdMenuModule,
    MdSidenavModule, 
    MdToolbarModule, 
    MdSidenavModule,
    MdCardModule,
    MdButtonModule,
    MdListModule,
    HttpModule,
  ],
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent, HeroControls, HeroCard, Menu],
  bootstrap: [AppComponent]
})
export class AppModule { }
