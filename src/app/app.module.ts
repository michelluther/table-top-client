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
  MatSelectionList,
  MatRadioModule,
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
  MatIcon,
  MatGridList,
  MatDialogModule,
  MatDialogContent,
  MatDialog,
  MatSelectTrigger,
  MatSelectModule,
  MatGridTile,
  MatGridTileText,
  MatFormFieldModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatIconModule
} from '@angular/material';

import 'hammerjs';

import { HeroService } from './domain/hero.service';
import { TalentCard } from './talent-card/talent-card.component';
import { SpellCard } from './spell-card/spell-card.component';
import { AdminOverviewComponent } from './admin-overview/admin-overview.component';
import { FightSetupComponent } from './fight-setup/fight-setup.component';
import { FightDisplayComponent } from './fight-display/fight-display.component';
import { RemoteControlComponent } from './remote-control/remote-control.component';
import { RemoteControlReceiverComponent } from './remote-control-receiver/remote-control-receiver.component';
import { PlayerComponent } from './player/player.component';
import { MasterComponent } from './master/master.component';
import { ImagePopupComponent } from './image-popup/image-popup.component';
import { ChooseImageComponent } from './choose-image/choose-image.component';
import { LifeDisplayComponent } from './life-display/life-display.component';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { MagicDisplayComponent } from './magic-display/magic-display.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TalentSearchComponent } from './talent-search/talent-search.component';
import { MatchesSearchTerm, MatchesSearchTermChildren } from './talent-search/skill.pipe';
import { DetailNavigationComponent } from './detail-navigation/detail-navigation.component';

const routes: Routes = [
  // { path: '', redirectTo: 'player', pathMatch: 'full' },
  // { path: 'player/hero/:id', component: HeroDetailComponent },
  // { path: 'player', component: PlayerComponent, outlet: 'appRouter' },
  { path: '', redirectTo: 'player/heroes', pathMatch: 'full' },
  {
    path: 'master', component: AdminOverviewComponent,
    children: [
      { path: 'heroes', component: HeroesComponent },
      { path: 'hero/:id', component: HeroDetailComponent },
      { path: 'fight/start', component: FightSetupComponent }
    ]
  },
  {
    path: 'player', component: PlayerComponent,
    children: [
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'hero/:id',
        component: HeroDetailComponent
      }
    ]
  },
];


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    }),
    BrowserAnimationsModule,
    HttpModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    MatSelectModule,
    MatRippleModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [
    MatDialogModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroControls,
    HeroCard,
    Menu,
    TalentCard,
    SpellCard,
    AdminOverviewComponent,
    FightSetupComponent,
    FightDisplayComponent,
    // MatSidenavContainer,
    // MatSidenav,
    // MatSidenavContent,
    // MatButton,
    // MatIcon,
    RemoteControlComponent,
    RemoteControlReceiverComponent,
    PlayerComponent,
    MasterComponent,
    ImagePopupComponent,
    ChooseImageComponent,
    LifeDisplayComponent,
    ScrollSpyDirective,
    MagicDisplayComponent,
    TalentSearchComponent,
    MatchesSearchTerm,
    MatchesSearchTermChildren,
    DetailNavigationComponent
  ],
  bootstrap: [AppComponent],
  entryComponents: [ImagePopupComponent, ChooseImageComponent],
})
export class AppModule { }
