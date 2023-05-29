import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  MatAutocompleteModule, MatButton, MatButtonToggle, MatButtonToggleGroup, MatCardModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule
} from '@angular/material/';
import {
  MatDialogModule, MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import 'hammerjs';
import { ToastrModule } from 'ngx-toastr';
import { environment } from '../environments/environment';
import { AdminOverviewComponent } from './admin-overview/admin-overview.component';
import { AppComponent } from './app.component';
import { AttributesDisplayComponent } from './attributes-display/attributes-display.component';
import { BasicDataDisplayComponent } from './basic-data-display/basic-data-display.component';
import { ChooseImageComponent } from './choose-image/choose-image.component';
import { CombatDataDisplayComponent } from './combat-data-display/combat-data-display.component';
import { ConfirmDeletionComponent } from './confirm-deletion/confirm-deletion.component';
import { ConfirmationSheetComponent } from './confirmation-sheet/confirmation-sheet.component';
import { DetailNavigationComponent } from './detail-navigation/detail-navigation.component';
import { EditAttributeComponent } from './edit-attribute/edit-attribute.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { EditMoneyComponent } from './edit-money/edit-money.component';
import { EditTalentComponent } from './edit-talent/edit-talent.component';
import { ExperienceAdditionComponent } from './experience-addition/experience-addition.component';
import { ExperienceDisplayComponent } from './experience-display/experience-display.component';
import { FightDisplayComponent } from './fight-display/fight-display.component';
import { FightSetupComponent } from './fight-setup/fight-setup.component';
import { HeroCard } from './hero-card/hero-card.component';
import { HeroControls } from './hero-controls/hero-controls.component';
import { HeroDetailComponent } from './herodetail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ImagePopupComponent } from './image-popup/image-popup.component';
import { InventoryDisplayComponent } from './inventory-display/inventory-display.component';
import { LifeDisplayComponent } from './life-display/life-display.component';
import { MagicDisplayComponent } from './magic-display/magic-display.component';
import { MasterComponent } from './master/master.component';
import { Menu } from './menu/menu.component';
import { PlayerComponent } from './player/player.component';
import { RemoteControlReceiverComponent } from './remote-control-receiver/remote-control-receiver.component';
import { RemoteControlComponent } from './remote-control/remote-control.component';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { SpellCard } from './spell-card/spell-card.component';
import { SpellSearchComponent } from './spell-search/spell-search.component';
import { MatchesSpellSearchTerm, MatchesSpellSearchTermChildren } from './spell-search/spell.pipe';
import { TalentCard } from './talent-card/talent-card.component';
import { MatchesTalentSearchTerm, MatchesTalentSearchTermChildren } from './talent-search/skill.pipe';
import { TalentSearchComponent } from './talent-search/talent-search.component';
import { AdventureDisplayComponent } from './adventure-display/adventure-display.component';
import { CombatantComponent } from './combatant/combatant.component';






const routes: Routes = [
  // { path: '', redirectTo: 'player', pathMatch: 'full' },
  // { path: 'player/hero/:id', component: HeroDetailComponent },
  // { path: 'player', component: PlayerComponent, outlet: 'appRouter' },
  { path: '', redirectTo: 'player/heroes', pathMatch: 'full' },
  {
    path: 'master', component: AdminOverviewComponent,
    children: [
      { path: 'adventure', component: HeroesComponent },
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
      },
      {
        path: 'hero/:id/editStuff',
        component: EditDialogComponent
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
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    HttpModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    MatSelectModule,
    MatRippleModule,
    MatDialogModule,
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
    MatButton,
    MatButtonToggleGroup,
    MatButtonToggle,
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
    MatchesTalentSearchTerm,
    MatchesTalentSearchTermChildren,
    MatchesSpellSearchTerm,
    MatchesSpellSearchTermChildren,
    DetailNavigationComponent,
    AttributesDisplayComponent,
    BasicDataDisplayComponent,
    CombatDataDisplayComponent,
    InventoryDisplayComponent,
    EditDialogComponent,
    EditAttributeComponent,
    ExperienceDisplayComponent,
    SpellSearchComponent,
    EditTalentComponent,
    ConfirmationSheetComponent,
    ConfirmDeletionComponent,
    ExperienceAdditionComponent,
    EditMoneyComponent,
    AdventureDisplayComponent,
    CombatantComponent
  ],
  bootstrap: [AppComponent],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  },
  { provide: MAT_DIALOG_DATA, useValue: {} }],
  entryComponents: [ImagePopupComponent, ChooseImageComponent, EditDialogComponent, ConfirmDeletionComponent, ExperienceAdditionComponent, EditMoneyComponent],
})
export class AppModule { }
