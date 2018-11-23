import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './herodetail/hero-detail.component';
import { HeroControls } from './hero-controls/hero-controls.component';
import { HeroCard } from './hero-card/hero-card.component';
import { Menu } from './menu/menu.component';

import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatInput,
  MatInputModule,
  MatOptgroup,
  MatOption,
  MatAutocomplete,
  MatFormFieldControl,
  MatCard,
  MatCardSubtitle,
  MatCardTitle,
  MatCardContent,
  MatFormField,
  MatButton,
  MatPseudoCheckbox,
  MatRipple,
  MatAutocompleteModule,
  MatSidenavModule,
  MatSidenavContainer,
  MatSidenav,
  MatSidenavContent,
  MatButtonModule,
  MatRippleModule,
  MatIcon
} from '@angular/material';

import 'hammerjs';

import { HeroService } from './domain/hero.service';
import { MatchesSearchTerm, MatchesSearchTermChildren } from './herodetail/skill.pipe';
import { TalentCard } from './talent-card/talent-card.component';
import { AdminOverviewComponent } from './admin-overview/admin-overview.component';
import { FightSetupComponent } from './fight-setup/fight-setup.component';
import { FightDisplayComponent } from './fight-display/fight-display.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'hero/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'master', component: AdminOverviewComponent }
];


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatRippleModule
  ],
  // exports: [
  // ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroControls,
    HeroCard,
    Menu,
    MatchesSearchTerm,
    MatchesSearchTermChildren,
    TalentCard,
    // MatAutocomplete,
    MatCard,
    MatCardSubtitle,
    MatCardTitle,
    MatCardContent,
    MatInput,
    MatFormField,
    AdminOverviewComponent,
    FightSetupComponent,
    FightDisplayComponent,
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent,
    MatButton,
    MatIcon
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
