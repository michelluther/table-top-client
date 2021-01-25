(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-overview/admin-overview.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin-overview/admin-overview.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navButton {\r\n    width:100%;text-align:left\r\n}\r\n\r\n.navIcon {\r\n    font-size: 20px\r\n\r\n}"

/***/ }),

/***/ "./src/app/admin-overview/admin-overview.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin-overview/admin-overview.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<remote-control #remoteControlMaster></remote-control>\r\n<mat-sidenav-container class=\"example-container\">\r\n  <mat-sidenav mode=\"side\" style=\"width:200px\" opened>\r\n    <button mat-button class=\"navButton\" (click)=\"remoteControlMaster.sendImage('')\">\r\n      <mat-icon class=\"navIcon\">burst_mode</mat-icon>\r\n      Send Image to Clients\r\n    </button>\r\n    <button mat-button class=\"navButton\" (click)=\"startFight()\">\r\n      <mat-icon class=\"navIcon\">whatshot</mat-icon>Start Fight!\r\n    </button>\r\n    <button mat-button class=\"navButton\">\r\n      <mat-icon class=\"navIcon\">library_music</mat-icon>Music and Sounds\r\n    </button>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/admin-overview/admin-overview.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin-overview/admin-overview.component.ts ***!
  \************************************************************/
/*! exports provided: AdminOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOverviewComponent", function() { return AdminOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_adventure_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../domain/adventure.service */ "./src/app/domain/adventure.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminOverviewComponent = /** @class */ (function () {
    function AdminOverviewComponent(adventureService, router) {
        var _this = this;
        this.adventureService = adventureService;
        this.router = router;
        this.adventureService.getAdventures().then(function (adventures) {
            _this.adventures = adventures;
            console.log(_this.adventures);
        });
    }
    AdminOverviewComponent.prototype.ngOnInit = function () {
    };
    AdminOverviewComponent.prototype.sendImage = function () {
    };
    AdminOverviewComponent.prototype.startFight = function () {
        this.router.navigate(['master/fight/start']);
    };
    AdminOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-overview',
            template: __webpack_require__(/*! ./admin-overview.component.html */ "./src/app/admin-overview/admin-overview.component.html"),
            styles: [__webpack_require__(/*! ./admin-overview.component.css */ "./src/app/admin-overview/admin-overview.component.css")],
            providers: [_domain_adventure_service__WEBPACK_IMPORTED_MODULE_1__["AdventureService"]]
        }),
        __metadata("design:paramtypes", [_domain_adventure_service__WEBPACK_IMPORTED_MODULE_1__["AdventureService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminOverviewComponent);
    return AdminOverviewComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "md-sidenav-container {\r\n\theight: 100%;\r\n}\r\n\r\nmd-sidenav .mat-sidenav.mat-sidenav-push {\r\n\tbackground-color: #666;\r\n}\r\n\r\n.pageContainer {\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;/*\r\n\talign-items: center;*/\r\n}\r\n\r\n/*#menu {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: center;\r\n\tpadding: 20px;\r\n\tcolor: #fff;\r\n}*/\r\n\r\n.wrapper {\r\n\theight: 100%;\r\n}\r\n\r\nmd-toolbar {\r\n\tbox-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\r\n\tcolor: #666;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: center;\r\n\tbackground-color: #23051C;\r\n}\r\n\r\n.toolbarCenter {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n}\r\n\r\n.logo {\r\n\twidth: 40px;\r\n}\r\n\r\nh1 {\r\n\tcolor: #999;\r\n\tfont-size: 1rem;\r\n\tmargin: 5px;\r\n}\r\n\r\n#appMenuButton {\r\n\tposition: fixed;\r\n\ttop:20px;\r\n\tleft:calc(50%);\r\n\tmargin-left: -10px;\r\n\tbackground-color: #ccc;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-content container\">\r\n  <div class=\"wrapper\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domain/hero.service */ "./src/app/domain/hero.service.ts");
/* harmony import */ var _hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero-controls/hero-life.service */ "./src/app/hero-controls/hero-life.service.ts");
/* harmony import */ var _domain_skills_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domain/skills.service */ "./src/app/domain/skills.service.ts");
/* harmony import */ var _domain_spells_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domain/spells.service */ "./src/app/domain/spells.service.ts");
/* harmony import */ var _remote_control_receiver_remote_control_receiver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./remote-control-receiver/remote-control-receiver.service */ "./src/app/remote-control-receiver/remote-control-receiver.service.ts");
/* harmony import */ var _remote_control_remote_control_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./remote-control/remote-control.service */ "./src/app/remote-control/remote-control.service.ts");
/* harmony import */ var _domain_attribute_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./domain/attribute.service */ "./src/app/domain/attribute.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = /** @class */ (function () {
    function AppComponent(heroService, attributeService) {
        this.heroService = heroService;
        this.attributeService = attributeService;
        this.title = 'Tour of Heroes';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_domain_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"], _domain_attribute_service__WEBPACK_IMPORTED_MODULE_7__["AttributeService"], _hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_2__["HeroLifeService"], _domain_skills_service__WEBPACK_IMPORTED_MODULE_3__["SkillService"], _domain_spells_service__WEBPACK_IMPORTED_MODULE_4__["SpellService"], _remote_control_receiver_remote_control_receiver_service__WEBPACK_IMPORTED_MODULE_5__["RemoteControlReceiverService"], _remote_control_remote_control_service__WEBPACK_IMPORTED_MODULE_6__["RemoteControlService"]]
        }),
        __metadata("design:paramtypes", [_domain_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"], _domain_attribute_service__WEBPACK_IMPORTED_MODULE_7__["AttributeService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./heroes/heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _herodetail_hero_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./herodetail/hero-detail.component */ "./src/app/herodetail/hero-detail.component.ts");
/* harmony import */ var _hero_controls_hero_controls_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hero-controls/hero-controls.component */ "./src/app/hero-controls/hero-controls.component.ts");
/* harmony import */ var _hero_card_hero_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hero-card/hero-card.component */ "./src/app/hero-card/hero-card.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _talent_card_talent_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./talent-card/talent-card.component */ "./src/app/talent-card/talent-card.component.ts");
/* harmony import */ var _spell_card_spell_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./spell-card/spell-card.component */ "./src/app/spell-card/spell-card.component.ts");
/* harmony import */ var _admin_overview_admin_overview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin-overview/admin-overview.component */ "./src/app/admin-overview/admin-overview.component.ts");
/* harmony import */ var _fight_setup_fight_setup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fight-setup/fight-setup.component */ "./src/app/fight-setup/fight-setup.component.ts");
/* harmony import */ var _fight_display_fight_display_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fight-display/fight-display.component */ "./src/app/fight-display/fight-display.component.ts");
/* harmony import */ var _remote_control_remote_control_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./remote-control/remote-control.component */ "./src/app/remote-control/remote-control.component.ts");
/* harmony import */ var _remote_control_receiver_remote_control_receiver_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./remote-control-receiver/remote-control-receiver.component */ "./src/app/remote-control-receiver/remote-control-receiver.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _master_master_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./master/master.component */ "./src/app/master/master.component.ts");
/* harmony import */ var _image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./image-popup/image-popup.component */ "./src/app/image-popup/image-popup.component.ts");
/* harmony import */ var _choose_image_choose_image_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./choose-image/choose-image.component */ "./src/app/choose-image/choose-image.component.ts");
/* harmony import */ var _life_display_life_display_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./life-display/life-display.component */ "./src/app/life-display/life-display.component.ts");
/* harmony import */ var _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./scroll-spy.directive */ "./src/app/scroll-spy.directive.ts");
/* harmony import */ var _magic_display_magic_display_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./magic-display/magic-display.component */ "./src/app/magic-display/magic-display.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _talent_search_talent_search_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./talent-search/talent-search.component */ "./src/app/talent-search/talent-search.component.ts");
/* harmony import */ var _talent_search_skill_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./talent-search/skill.pipe */ "./src/app/talent-search/skill.pipe.ts");
/* harmony import */ var _detail_navigation_detail_navigation_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./detail-navigation/detail-navigation.component */ "./src/app/detail-navigation/detail-navigation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var routes = [
    // { path: '', redirectTo: 'player', pathMatch: 'full' },
    // { path: 'player/hero/:id', component: HeroDetailComponent },
    // { path: 'player', component: PlayerComponent, outlet: 'appRouter' },
    { path: '', redirectTo: 'player/heroes', pathMatch: 'full' },
    {
        path: 'master', component: _admin_overview_admin_overview_component__WEBPACK_IMPORTED_MODULE_16__["AdminOverviewComponent"],
        children: [
            { path: 'heroes', component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_6__["HeroesComponent"] },
            { path: 'hero/:id', component: _herodetail_hero_detail_component__WEBPACK_IMPORTED_MODULE_7__["HeroDetailComponent"] },
            { path: 'fight/start', component: _fight_setup_fight_setup_component__WEBPACK_IMPORTED_MODULE_17__["FightSetupComponent"] }
        ]
    },
    {
        path: 'player', component: _player_player_component__WEBPACK_IMPORTED_MODULE_21__["PlayerComponent"],
        children: [
            {
                path: 'heroes',
                component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_6__["HeroesComponent"]
            },
            {
                path: 'hero/:id',
                component: _herodetail_hero_detail_component__WEBPACK_IMPORTED_MODULE_7__["HeroDetailComponent"]
            }
        ]
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    scrollPositionRestoration: 'top'
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_28__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_29__["environment"].production })
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_6__["HeroesComponent"],
                _herodetail_hero_detail_component__WEBPACK_IMPORTED_MODULE_7__["HeroDetailComponent"],
                _hero_controls_hero_controls_component__WEBPACK_IMPORTED_MODULE_8__["HeroControls"],
                _hero_card_hero_card_component__WEBPACK_IMPORTED_MODULE_9__["HeroCard"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["Menu"],
                _talent_card_talent_card_component__WEBPACK_IMPORTED_MODULE_14__["TalentCard"],
                _spell_card_spell_card_component__WEBPACK_IMPORTED_MODULE_15__["SpellCard"],
                _admin_overview_admin_overview_component__WEBPACK_IMPORTED_MODULE_16__["AdminOverviewComponent"],
                _fight_setup_fight_setup_component__WEBPACK_IMPORTED_MODULE_17__["FightSetupComponent"],
                _fight_display_fight_display_component__WEBPACK_IMPORTED_MODULE_18__["FightDisplayComponent"],
                // MatSidenavContainer,
                // MatSidenav,
                // MatSidenavContent,
                // MatButton,
                // MatIcon,
                _remote_control_remote_control_component__WEBPACK_IMPORTED_MODULE_19__["RemoteControlComponent"],
                _remote_control_receiver_remote_control_receiver_component__WEBPACK_IMPORTED_MODULE_20__["RemoteControlReceiverComponent"],
                _player_player_component__WEBPACK_IMPORTED_MODULE_21__["PlayerComponent"],
                _master_master_component__WEBPACK_IMPORTED_MODULE_22__["MasterComponent"],
                _image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_23__["ImagePopupComponent"],
                _choose_image_choose_image_component__WEBPACK_IMPORTED_MODULE_24__["ChooseImageComponent"],
                _life_display_life_display_component__WEBPACK_IMPORTED_MODULE_25__["LifeDisplayComponent"],
                _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_26__["ScrollSpyDirective"],
                _magic_display_magic_display_component__WEBPACK_IMPORTED_MODULE_27__["MagicDisplayComponent"],
                _talent_search_talent_search_component__WEBPACK_IMPORTED_MODULE_30__["TalentSearchComponent"],
                _talent_search_skill_pipe__WEBPACK_IMPORTED_MODULE_31__["MatchesSearchTerm"],
                _talent_search_skill_pipe__WEBPACK_IMPORTED_MODULE_31__["MatchesSearchTermChildren"],
                _detail_navigation_detail_navigation_component__WEBPACK_IMPORTED_MODULE_32__["DetailNavigationComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            entryComponents: [_image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_23__["ImagePopupComponent"], _choose_image_choose_image_component__WEBPACK_IMPORTED_MODULE_24__["ChooseImageComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/choose-image/choose-image.component.css":
/*!*********************************************************!*\
  !*** ./src/app/choose-image/choose-image.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#imageSelector {\r\n    min-width: 200px;\r\n}"

/***/ }),

/***/ "./src/app/choose-image/choose-image.component.html":
/*!**********************************************************!*\
  !*** ./src/app/choose-image/choose-image.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-select placeholder=\"Image\" #imageSelector>\r\n  <mat-option *ngFor=\"let image of images\" [value]=\"image\">\r\n    {{image.caption}}\r\n  </mat-option>\r\n</mat-select>\r\n<button mat-button class=\"navButton\" (click)=\"sendImage(imageSelector.value)\">Send</button>"

/***/ }),

/***/ "./src/app/choose-image/choose-image.component.ts":
/*!********************************************************!*\
  !*** ./src/app/choose-image/choose-image.component.ts ***!
  \********************************************************/
/*! exports provided: ImagePopupData, ChooseImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePopupData", function() { return ImagePopupData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseImageComponent", function() { return ChooseImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _domain_adventure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../domain/adventure.service */ "./src/app/domain/adventure.service.ts");
/* harmony import */ var _remote_control_remote_control_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../remote-control/remote-control.service */ "./src/app/remote-control/remote-control.service.ts");
/* harmony import */ var _domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../domain/remoteControlOperation */ "./src/app/domain/remoteControlOperation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ImagePopupData = /** @class */ (function () {
    function ImagePopupData(image, imageList) {
        this.image = image;
        this.imageList = imageList;
    }
    return ImagePopupData;
}());

var ChooseImageComponent = /** @class */ (function () {
    function ChooseImageComponent(adventureService, remoteControlService, dialogRef, data) {
        this.adventureService = adventureService;
        this.remoteControlService = remoteControlService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.images = [];
        this.baseUrl = 'http://' + window.location.hostname + ':8000';
    }
    ChooseImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adventureService.getAdventures().then(function (adventures) {
            _this.adventures = adventures;
            _this.adventures.forEach(function (adventure) {
                _this.images = _this.images.concat(adventure.images);
            });
        });
    };
    ChooseImageComponent.prototype.sendImage = function (image) {
        this.remoteControlService.sendRemoteControlInstruction(_domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_4__["OperationFactory"].createOperation(_domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_4__["operationTypes"].openImage, 'all', [image.url, image.caption]));
    };
    ChooseImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-choose-image',
            template: __webpack_require__(/*! ./choose-image.component.html */ "./src/app/choose-image/choose-image.component.html"),
            styles: [__webpack_require__(/*! ./choose-image.component.css */ "./src/app/choose-image/choose-image.component.css")],
            providers: [_domain_adventure_service__WEBPACK_IMPORTED_MODULE_2__["AdventureService"], _remote_control_remote_control_service__WEBPACK_IMPORTED_MODULE_3__["RemoteControlService"]]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_domain_adventure_service__WEBPACK_IMPORTED_MODULE_2__["AdventureService"],
            _remote_control_remote_control_service__WEBPACK_IMPORTED_MODULE_3__["RemoteControlService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            ImagePopupData])
    ], ChooseImageComponent);
    return ChooseImageComponent;
}());



/***/ }),

/***/ "./src/app/detail-navigation/detail-navigation.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/detail-navigation/detail-navigation.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detailNavigation {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: fixed;\r\n    flex-direction: column;\r\n    z-index: 1000;\r\n    width: 100%;\r\n    /*  \r\n    transition: height 10s ease-out;\r\n    */\r\n}\r\n.menuContainer {\r\n    margin: 0;\r\n    padding: 0 0 10px 0;\r\n    box-shadow: 0px 2px 5px rgba(70, 70, 70, 0.5);\r\n    border-bottom-right-radius: 4px;\r\n    border-bottom-left-radius: 4px;\r\n    border: 1px solid #eee;\r\n    background-color: snow;\r\n    width: 600px\r\n}\r\nh4 {\r\n    color: snow;\r\n    padding: 15px 10px 5px 10px;\r\n    margin:0;\r\n    background-color: rgb(139, 50, 50);\r\n}\r\n.menuItems {\r\n\r\n}\r\n.menuItem {\r\n    border-bottom: 1px solid #eee;\r\n    cursor: pointer;\r\n    margin:0;\r\n    padding: 10px;\r\n}\r\n.viewToggle {\r\n    box-shadow: 0px 2px 5px rgba(70, 70, 70, 0.5);\r\n    background-color: #fff;\r\n    border-bottom-right-radius: 4px;\r\n    border-bottom-left-radius: 4px;\r\n    border: 1px solid #eee;\r\n    width: 40px;\r\n    height: 30px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.menuToggleIcon {\r\n    transition: -webkit-transform 0.5s ease-in-out;\r\n    transition: transform 0.5s ease-in-out;\r\n    transition: transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out;\r\n}\r\n.menuToggleIcon.menuShown {\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg);\r\n}"

/***/ }),

/***/ "./src/app/detail-navigation/detail-navigation.component.html":
/*!********************************************************************!*\
  !*** ./src/app/detail-navigation/detail-navigation.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detailNavigation\">\r\n  \r\n\r\n  <div class=\"menuContainer\" >\r\n    <div class=\"menuItems\" *ngIf=\"menuVisible === true\">\r\n      <div class=\"menuItem\" (click)=\"navTo(menuItem.target)\" *ngFor=\"let menuItem of menu; index as i; keyvalue\">\r\n        {{menuItem.title}}\r\n      </div>\r\n      <h4>Talente</h4>\r\n      <div class=\"menuItem\" *ngFor=\"let skillGroup of hero.skillGroups; index as i; keyvalue\" (click)=\"navToSkillGroup(skillGroup)\">\r\n        {{skillGroup.getSkillGroup().name}}\r\n      </div>\r\n      <h4 *ngIf=\"hero.knowsMagic\">Zauber</h4>\r\n      <div class=\"menuItem\" *ngFor=\"let spellGroup of hero.spellGroups; index as i; keyvalue\" (click)=\"navToSpellGroup(spellGroup)\">\r\n        {{spellGroup.getSpellGroup().name}}\r\n      </div>\r\n    </div>\r\n    \r\n  </div>\r\n  <div class=\"viewToggle\" (click)=\"toggleVisible()\">\r\n    <i [ngClass]=\"{menuToggleIcon: true, fa:true, 'fa-chevron-down': true, 'menuShown': menuVisible}\"></i>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/detail-navigation/detail-navigation.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/detail-navigation/detail-navigation.component.ts ***!
  \******************************************************************/
/*! exports provided: DetailNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailNavigationComponent", function() { return DetailNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_domain_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/domain/hero */ "./src/app/domain/hero.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuItem = /** @class */ (function () {
    function MenuItem(config) {
        this.title = config.title;
        this.target = config.target;
    }
    return MenuItem;
}());
var DetailNavigationComponent = /** @class */ (function () {
    function DetailNavigationComponent(elRef) {
        this.elRef = elRef;
        this.elRef = elRef;
    }
    DetailNavigationComponent.prototype.ngOnInit = function () {
        this.updateNavigation();
    };
    DetailNavigationComponent.prototype.updateNavigation = function () {
        var menu = [
            new MenuItem({ title: 'Allgemein', target: 'Allgemein' }),
        ];
        if (this.hero)
            this.hero.skillGroups.forEach(function (skillGroup) {
                menu.push(new MenuItem({ title: skillGroup.getSkillGroup().name }));
            });
        this.menu = menu;
    };
    DetailNavigationComponent.prototype.toggleVisible = function () {
        this.menuVisible = !this.menuVisible;
    };
    DetailNavigationComponent.prototype.navTo = function (target) {
        var menuTarget = this.elRef.nativeElement.parentElement.getElementsByClassName('menuItem')[target];
        menuTarget.scrollIntoView();
    };
    DetailNavigationComponent.prototype.navToSkillGroup = function (target) {
        var menuTarget = this.elRef.nativeElement.parentElement.getElementsByClassName('menuItem')[target.skillGroup.name];
        menuTarget.scrollIntoView();
    };
    DetailNavigationComponent.prototype.navToSpellGroup = function (target) {
        var menuTarget = this.elRef.nativeElement.parentElement.getElementsByClassName('menuItem')[target.spellGroup.name];
        menuTarget.scrollIntoView();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", app_domain_hero__WEBPACK_IMPORTED_MODULE_1__["Hero"])
    ], DetailNavigationComponent.prototype, "hero", void 0);
    DetailNavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'detail-navigation',
            template: __webpack_require__(/*! ./detail-navigation.component.html */ "./src/app/detail-navigation/detail-navigation.component.html"),
            styles: [__webpack_require__(/*! ./detail-navigation.component.css */ "./src/app/detail-navigation/detail-navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DetailNavigationComponent);
    return DetailNavigationComponent;
}());



/***/ }),

/***/ "./src/app/domain/actualAttribute.ts":
/*!*******************************************!*\
  !*** ./src/app/domain/actualAttribute.ts ***!
  \*******************************************/
/*! exports provided: ActualAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualAttribute", function() { return ActualAttribute; });
var ActualAttribute = /** @class */ (function () {
    function ActualAttribute(actualValue, attribute) {
        this.valueNumber = actualValue;
        this.attribute = attribute;
    }
    Object.defineProperty(ActualAttribute.prototype, "value", {
        get: function () {
            return this.valueNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActualAttribute.prototype, "name", {
        get: function () {
            return this.attribute.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActualAttribute.prototype, "short", {
        get: function () {
            return this.attribute.short;
        },
        enumerable: true,
        configurable: true
    });
    return ActualAttribute;
}());



/***/ }),

/***/ "./src/app/domain/actualSkill.ts":
/*!***************************************!*\
  !*** ./src/app/domain/actualSkill.ts ***!
  \***************************************/
/*! exports provided: ActualSkill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualSkill", function() { return ActualSkill; });
var ActualSkill = /** @class */ (function () {
    function ActualSkill(actualSkill, hero, skill, skillGroup) {
        this.skill = skill;
        this.skillGroup = skillGroup;
        this.value = actualSkill ? actualSkill['value'] : -7;
        this.isAssignedToHero = actualSkill ? true : false;
        this.hero = hero;
    }
    ActualSkill.prototype.getSkill = function () {
        return this.skill;
    };
    ;
    ActualSkill.prototype.getAttack = function () {
        return this.hero.getAttackOfWeaponSkill(this.skill);
    };
    ;
    ActualSkill.prototype.getParade = function () {
        return this.hero.getParadeOfWeaponSkill(this.skill);
    };
    ;
    ActualSkill.prototype.getSkillGroup = function () {
        return this.skillGroup;
    };
    Object.defineProperty(ActualSkill.prototype, "dice1Value", {
        get: function () {
            return this.hero.getAttribute(this.getSkill().dice1.id).value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActualSkill.prototype, "dice2Value", {
        get: function () {
            return this.hero.getAttribute(this.getSkill().dice2.id).value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActualSkill.prototype, "dice3Value", {
        get: function () {
            return this.hero.getAttribute(this.getSkill().dice3.id).value;
        },
        enumerable: true,
        configurable: true
    });
    return ActualSkill;
}());



/***/ }),

/***/ "./src/app/domain/actualSkillGroup.ts":
/*!********************************************!*\
  !*** ./src/app/domain/actualSkillGroup.ts ***!
  \********************************************/
/*! exports provided: ActualSkillGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualSkillGroup", function() { return ActualSkillGroup; });
var ActualSkillGroup = /** @class */ (function () {
    function ActualSkillGroup(skillGroup, skills) {
        this.skillGroup = skillGroup;
        this.skills = skills;
    }
    ActualSkillGroup.prototype.getSkillGroup = function () {
        return this.skillGroup;
    };
    ActualSkillGroup.prototype.getSkills = function () {
        return this.skills;
    };
    return ActualSkillGroup;
}());



/***/ }),

/***/ "./src/app/domain/actualSpell.ts":
/*!***************************************!*\
  !*** ./src/app/domain/actualSpell.ts ***!
  \***************************************/
/*! exports provided: ActualSpell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualSpell", function() { return ActualSpell; });
var ActualSpell = /** @class */ (function () {
    function ActualSpell(actualSpell, hero, spell, spellGroup) {
        this.spell = spell;
        this.spellGroup = spellGroup;
        this.value = actualSpell ? actualSpell['value'] : -7;
        this.isAssignedToHero = actualSpell ? true : false;
        this.hero = hero;
    }
    ActualSpell.prototype.getSpell = function () {
        return this.spell;
    };
    ;
    ActualSpell.prototype.getSpellGroup = function () {
        return this.spellGroup;
    };
    Object.defineProperty(ActualSpell.prototype, "dice1Value", {
        get: function () {
            return this.hero.getAttribute(this.getSpell().dice1).value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActualSpell.prototype, "dice2Value", {
        get: function () {
            return this.hero.getAttribute(this.getSpell().dice2).value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActualSpell.prototype, "dice3Value", {
        get: function () {
            return this.hero.getAttribute(this.getSpell().dice3).value;
        },
        enumerable: true,
        configurable: true
    });
    return ActualSpell;
}());



/***/ }),

/***/ "./src/app/domain/actualSpellGroup.ts":
/*!********************************************!*\
  !*** ./src/app/domain/actualSpellGroup.ts ***!
  \********************************************/
/*! exports provided: ActualSpellGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualSpellGroup", function() { return ActualSpellGroup; });
var ActualSpellGroup = /** @class */ (function () {
    function ActualSpellGroup(spellGroup, spells) {
        this.spellGroup = spellGroup;
        this.spells = spells;
    }
    ActualSpellGroup.prototype.getSpellGroup = function () {
        return this.spellGroup;
    };
    ActualSpellGroup.prototype.setSpells = function (spells) {
        this.spells = spells;
    };
    ActualSpellGroup.prototype.getSpells = function () {
        return this.spells;
    };
    return ActualSpellGroup;
}());



/***/ }),

/***/ "./src/app/domain/adventure.service.ts":
/*!*********************************************!*\
  !*** ./src/app/domain/adventure.service.ts ***!
  \*********************************************/
/*! exports provided: AdventureService, Adventure, Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdventureService", function() { return AdventureService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adventure", function() { return Adventure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdventureService = /** @class */ (function () {
    function AdventureService(http) {
        this.http = http;
        this.adventuresUrl = 'http://' + window.location.hostname + ':8000/adventures/';
    }
    AdventureService.prototype.getAdventures = function () {
        var _this = this;
        return this.http.get(this.adventuresUrl)
            .toPromise()
            .then(function (response) {
            return _this.extractData(response);
        });
    };
    AdventureService.prototype.extractData = function (res) {
        var body = res.json();
        var adventures = [];
        body.forEach(function (adventure) {
            var newAdventure = new Adventure();
            newAdventure.setData(adventure);
            adventures.push(newAdventure);
        }.bind(this));
        return adventures;
    };
    AdventureService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof _angular_http__WEBPACK_IMPORTED_MODULE_1__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errMsg);
    };
    AdventureService.prototype.getAdventure = function (id) {
        return this.getAdventures()
            .then(function (adventures) {
            return adventures.find(function (adventure) { return adventure.id === id; });
        });
    };
    AdventureService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AdventureService);
    return AdventureService;
}());

var Adventure = /** @class */ (function () {
    function Adventure() {
        this.images = [];
    }
    Adventure.prototype.setData = function (dataObject) {
        var _this = this;
        this.id = dataObject.id;
        this.name = dataObject.name;
        dataObject.images.forEach(function (image) {
            var imageObject = new Image(image.url, image.caption);
            _this.images.push(imageObject);
        });
    };
    return Adventure;
}());

var Image = /** @class */ (function () {
    function Image(url, caption) {
        this.url = url;
        this.caption = caption;
    }
    return Image;
}());



/***/ }),

/***/ "./src/app/domain/attribute.service.ts":
/*!*********************************************!*\
  !*** ./src/app/domain/attribute.service.ts ***!
  \*********************************************/
/*! exports provided: AttributeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeService", function() { return AttributeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _attribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attribute */ "./src/app/domain/attribute.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AttributeService = /** @class */ (function () {
    function AttributeService() {
        this.attributesConfigured = new Map([
            ['KK', new _attribute__WEBPACK_IMPORTED_MODULE_1__["Attribute"]('KK', 'Körperkraft')],
            ['KO', new _attribute__WEBPACK_IMPORTED_MODULE_1__["Attribute"]('KO', 'Konstitution')],
            ['KL', new _attribute__WEBPACK_IMPORTED_MODULE_1__["Attribute"]('KL', 'Klugheit')],
            ['CH', new _attribute__WEBPACK_IMPORTED_MODULE_1__["Attribute"]('CH', 'Charisma')],
            ['FF', new _attribute__WEBPACK_IMPORTED_MODULE_1__["Attribute"]('FF', 'Fingerfertigkeit')],
            ['GE', new _attribute__WEBPACK_IMPORTED_MODULE_1__["Attribute"]('GE', 'Gewandheit')],
            ['MU', new _attribute__WEBPACK_IMPORTED_MODULE_1__["Attribute"]('MU', 'Mut')],
            ['IN', new _attribute__WEBPACK_IMPORTED_MODULE_1__["Attribute"]('IN', 'Intuition')]
        ]);
    }
    Object.defineProperty(AttributeService.prototype, "attributes", {
        get: function () {
            return this.attributesConfigured;
        },
        enumerable: true,
        configurable: true
    });
    AttributeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AttributeService);
    return AttributeService;
}());



/***/ }),

/***/ "./src/app/domain/attribute.ts":
/*!*************************************!*\
  !*** ./src/app/domain/attribute.ts ***!
  \*************************************/
/*! exports provided: Attribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attribute", function() { return Attribute; });
var Attribute = /** @class */ (function () {
    function Attribute(attributeId, attributeName) {
        this.attributeName = attributeName;
        this.attributeId = attributeId;
    }
    Object.defineProperty(Attribute.prototype, "name", {
        get: function () {
            return this.attributeName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attribute.prototype, "short", {
        get: function () {
            return this.attributeId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attribute.prototype, "id", {
        get: function () {
            return this.attributeId;
        },
        enumerable: true,
        configurable: true
    });
    return Attribute;
}());



/***/ }),

/***/ "./src/app/domain/hero.service.ts":
/*!****************************************!*\
  !*** ./src/app/domain/hero.service.ts ***!
  \****************************************/
/*! exports provided: HeroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroService", function() { return HeroService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero */ "./src/app/domain/hero.ts");
/* harmony import */ var _attribute_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attribute.service */ "./src/app/domain/attribute.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _skills_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./skills.service */ "./src/app/domain/skills.service.ts");
/* harmony import */ var _spells_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./spells.service */ "./src/app/domain/spells.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HeroService = /** @class */ (function () {
    function HeroService(http, skillService, spellService, attributeService) {
        this.http = http;
        this.skillService = skillService;
        this.spellService = spellService;
        this.attributeService = attributeService;
        this.heroesUrl = 'http://' + window.location.hostname + ':8000/characters/';
    }
    HeroService.prototype.getHeroes = function () {
        var _this = this;
        if (this.heroes) {
            return new Promise(function (resolve, reject) {
                resolve(_this.heroes);
            });
        }
        else {
            return this.http.get(this.heroesUrl)
                .toPromise()
                .then(function (response) {
                _this.heroes = _this.extractData(response);
                return _this.heroes;
            });
        }
    };
    HeroService.prototype.extractData = function (res) {
        var body = res.json();
        var heroes = [];
        body.forEach(function (hero) {
            var newHero = new _hero__WEBPACK_IMPORTED_MODULE_1__["Hero"](this.skillService, this.spellService, this.attributeService).setData(hero);
            heroes.push(newHero);
        }.bind(this));
        return heroes;
    };
    HeroService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof _angular_http__WEBPACK_IMPORTED_MODULE_3__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(errMsg);
    };
    HeroService.prototype.getHero = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) { return _this.getHeroes()
            .then(function (heroes) {
            return resolve(heroes.find(function (hero) { return hero.id === id; }));
        }); });
    };
    Object.defineProperty(HeroService.prototype, "attributes", {
        get: function () {
            return this.attributesConfigured;
        },
        enumerable: true,
        configurable: true
    });
    HeroService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _skills_service__WEBPACK_IMPORTED_MODULE_8__["SkillService"], _spells_service__WEBPACK_IMPORTED_MODULE_9__["SpellService"], _attribute_service__WEBPACK_IMPORTED_MODULE_2__["AttributeService"]])
    ], HeroService);
    return HeroService;
}());



/***/ }),

/***/ "./src/app/domain/hero.ts":
/*!********************************!*\
  !*** ./src/app/domain/hero.ts ***!
  \********************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actualSkill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actualSkill */ "./src/app/domain/actualSkill.ts");
/* harmony import */ var _actualSkillGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actualSkillGroup */ "./src/app/domain/actualSkillGroup.ts");
/* harmony import */ var _actualSpell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actualSpell */ "./src/app/domain/actualSpell.ts");
/* harmony import */ var _actualSpellGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actualSpellGroup */ "./src/app/domain/actualSpellGroup.ts");
/* harmony import */ var _actualAttribute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actualAttribute */ "./src/app/domain/actualAttribute.ts");
/* harmony import */ var _weapon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weapon */ "./src/app/domain/weapon.ts");
/* harmony import */ var _weaponSkillDistribution__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./weaponSkillDistribution */ "./src/app/domain/weaponSkillDistribution.ts");








var Hero = /** @class */ (function () {
    function Hero(skillService, spellService, attributeService) {
        this.skillService = skillService;
        this.spellService = spellService;
        this.attributeService = attributeService;
        this.skillService = skillService;
        this.weapons = [];
    }
    ;
    Hero.prototype.setData = function (dataObject) {
        this.attack_basis = dataObject['attack_basis'];
        this.parade_basis = dataObject['parade_basis'];
        this.fernkampf_basis = dataObject['fernkampf_basis'];
        this.life_lost = dataObject['life_lost'];
        this.avatar_small = dataObject['avatar_small'];
        this.culture = dataObject['culture'];
        this.experience = dataObject['experience'];
        this.experience_used = dataObject['experience_used'];
        this.gender = dataObject['gender'];
        this.hero_type = dataObject['hero_type'];
        this.id = dataObject['id'];
        this.ini_basis = dataObject['ini_basis'];
        this.knowsMagic = dataObject['knows_magic'];
        this.attributes = [
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_5__["ActualAttribute"](dataObject['MU'], this.attributeService.attributes.get('MU')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_5__["ActualAttribute"](dataObject['CH'], this.attributeService.attributes.get('CH')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_5__["ActualAttribute"](dataObject['GE'], this.attributeService.attributes.get('GE')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_5__["ActualAttribute"](dataObject['IN'], this.attributeService.attributes.get('IN')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_5__["ActualAttribute"](dataObject['KK'], this.attributeService.attributes.get('KK')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_5__["ActualAttribute"](dataObject['KL'], this.attributeService.attributes.get('KL')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_5__["ActualAttribute"](dataObject['FF'], this.attributeService.attributes.get('FF')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_5__["ActualAttribute"](dataObject['KO'], this.attributeService.attributes.get('KO'))
        ];
        this.life = dataObject['life'];
        this.magicEnergy = dataObject['magic_energy'];
        this.magicEnergy_lost = dataObject['magic_energy_lost'];
        this.magieresistenz = dataObject['magieresistenz'];
        this.name = dataObject['name'];
        this.race = dataObject['race'];
        this.size = dataObject['size'];
        this.social_rank = dataObject['social_rank'];
        this.weapons = [];
        this.weaponSkillDistributions = dataObject['weaponSkillDistributions'].map(function (weaponSkillDistribution) {
            return new _weaponSkillDistribution__WEBPACK_IMPORTED_MODULE_7__["WeaponSkillDistribution"](weaponSkillDistribution.skill, weaponSkillDistribution.attack, weaponSkillDistribution.parade);
        });
        this.structureSkills(dataObject['skills'], dataObject['weaponSkillDistributions'], dataObject['weapons']);
        if (this.knowsMagic) {
            this.structureSpells(dataObject['spells']);
        }
        return this;
    };
    Hero.prototype.structureSkills = function (actualSkillsOfHero, weaponSkillDistributions, weapons) {
        var _this = this;
        var skillsPromise = Promise.all([
            this.skillService.getSkillGroups(),
            this.skillService.getSkills()
        ]).then(function (skillGroupsAndSkills) {
            _this.skillGroups = new Array();
            var skillGroups = skillGroupsAndSkills[0];
            var allSkills = skillGroupsAndSkills[1];
            _this.skills = [];
            allSkills.forEach(function (skill) {
                var actualSkill = lodash__WEBPACK_IMPORTED_MODULE_0__["find"](actualSkillsOfHero, function (actualSkillData) { return skill.id === actualSkillData['id']; }); // can be undefined, the hero does not have the skill
                var skillSkillGroup = lodash__WEBPACK_IMPORTED_MODULE_0__["find"](skillGroups, function (skillGroup) { return skill.skillGroupId == skillGroup.id; });
                _this.skills.push(new _actualSkill__WEBPACK_IMPORTED_MODULE_1__["ActualSkill"](actualSkill, _this, skill, skillSkillGroup));
            });
            // skills.forEach(actualSkill => {
            //   let generalSkill = _.find(allSkills, finder => { return finder.id === actualSkill['id'] })
            //   let skillSkillGroup = _.find(skillGroups, skillGroup => { return generalSkill.skillGroupId == skillGroup.id });
            //   this.skills.push(new ActualSkill(actualSkill, this, generalSkill, skillSkillGroup));
            // })
            skillGroups.forEach(function (skillGroup) {
                var skills = lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](_this.skills, function (actualSkill) {
                    return actualSkill.getSkill().skillGroupId == skillGroup.id;
                });
                _this.skillGroups.push(new _actualSkillGroup__WEBPACK_IMPORTED_MODULE_2__["ActualSkillGroup"](skillGroup, skills));
            });
            weapons.forEach(function (weapon) {
                _this.weapons.push(new _weapon__WEBPACK_IMPORTED_MODULE_6__["Weapon"](weapon['name'], weapon['tp_dice'], weapon['tp_add_points'], lodash__WEBPACK_IMPORTED_MODULE_0__["find"](allSkills, function (skill) {
                    return skill.id === weapon['skill'];
                })));
            });
            _this.currentWeapon = _this.weapons[0];
        });
    };
    Hero.prototype.structureSpells = function (actualSpellsOfHero) {
        var _this = this;
        var spellsPromise = Promise.all([
            this.spellService.getSpells(),
            this.spellService.getSpellGroups()
        ]).then(function (spellsAndSpellGroups) {
            _this.spellGroups = new Array();
            _this.spells = new Array();
            var allSpells = spellsAndSpellGroups[0];
            var spellGroups = spellsAndSpellGroups[1];
            spellGroups.forEach(function (spellGroup) {
                _this.spellGroups.push(new _actualSpellGroup__WEBPACK_IMPORTED_MODULE_4__["ActualSpellGroup"](spellGroup, []));
            });
            allSpells.forEach(function (spell) {
                var actualSpellDataObject = actualSpellsOfHero.find(function (actualSpellData) {
                    return spell.id === actualSpellData['id'];
                });
                var spellGroupOfSpell = _this.spellGroups.find(function (spellGroup) {
                    return spellGroup.getSpellGroup().id === spell.spellGroupId;
                });
                var actualSpell = new _actualSpell__WEBPACK_IMPORTED_MODULE_3__["ActualSpell"](actualSpellDataObject, _this, spell, spellGroupOfSpell.getSpellGroup());
                _this.spells.push(actualSpell);
                spellGroupOfSpell.getSpells().push(actualSpell);
            });
            // allSpells.forEach(spell => {
            //   let actualSpell = new ActualSpell(spells.find(actualSpell => {
            //     return actualSpell['id'] === spell.id
            //   }), this, spell,);
            //   let spellGroupOfSkill = this.spellGroups.find((spellGroup => {
            //     return spellGroup.getSpellGroup().id === spell.spellGroupId;
            //   })
            // })
        });
    };
    Hero.prototype._getDistributionOfSkill = function (weaponSkill) {
        return this.weaponSkillDistributions.find(function (distribution) {
            return distribution.skillId == weaponSkill.id;
        });
    };
    Hero.prototype.getAttribute = function (id) {
        return this.attributes.find(function (attribute) { return attribute.attribute.id === id; });
    };
    Object.defineProperty(Hero.prototype, "currentWeapon", {
        set: function (weapon) {
            this._currentWeapon = weapon;
            var skillDistribution = this._getDistributionOfSkill(weapon.skill);
            this.currentAttack = skillDistribution ? this.attack_basis + skillDistribution.attack : this.attack_basis;
            this.currentParade = skillDistribution ? this.parade_basis + skillDistribution.parade : this.parade_basis;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "currentWeaponDamageText", {
        get: function () {
            return this._currentWeapon ? this._currentWeapon.damageText : '0';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "currentLife", {
        get: function () {
            return this.life - this.life_lost;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "currentMagicEnergy", {
        get: function () {
            return this.magicEnergy - this.magicEnergy_lost;
        },
        enumerable: true,
        configurable: true
    });
    Hero.prototype.getAttackOfWeaponSkill = function (weaponSkill) {
        var skillDistribution = this._getDistributionOfSkill(weaponSkill);
        return skillDistribution ? this.attack_basis + skillDistribution.attack : this.attack_basis;
    };
    Hero.prototype.getParadeOfWeaponSkill = function (weaponSkill) {
        var skillDistribution = this._getDistributionOfSkill(weaponSkill);
        return skillDistribution ? this.parade_basis + skillDistribution.attack : this.parade_basis;
    };
    return Hero;
}());



/***/ }),

/***/ "./src/app/domain/remoteControlOperation.ts":
/*!**************************************************!*\
  !*** ./src/app/domain/remoteControlOperation.ts ***!
  \**************************************************/
/*! exports provided: RemoteControlOperation, OperationFactory, operationTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteControlOperation", function() { return RemoteControlOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationFactory", function() { return OperationFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operationTypes", function() { return operationTypes; });
var RemoteControlOperation = /** @class */ (function () {
    function RemoteControlOperation(type, target, parameters) {
        this.type = type;
        this.target = target;
        this.params = parameters;
    }
    RemoteControlOperation.prototype.getType = function () {
        return this.type;
    };
    RemoteControlOperation.prototype.getTarget = function () {
        return this.target;
    };
    RemoteControlOperation.prototype.getParameters = function () {
        return this.params;
    };
    RemoteControlOperation.prototype.toJSON = function () {
        return JSON.stringify({
            type: this.type,
            target: this.target,
            params: this.params
        });
    };
    return RemoteControlOperation;
}());

var OperationFactory = /** @class */ (function () {
    function OperationFactory() {
    }
    OperationFactory.createOperation = function (type, target, parameters) {
        return new RemoteControlOperation(type, target, parameters);
    };
    OperationFactory.createOperationFromJSON = function (jsonstring) {
        var parsedObject = JSON.parse(jsonstring);
        return new RemoteControlOperation(parsedObject.type, parsedObject.target, parsedObject.params);
    };
    return OperationFactory;
}());

var operationTypes = {
    openImage: 'openImage',
    closeImage: 'closeImage'
};


/***/ }),

/***/ "./src/app/domain/skill.ts":
/*!*********************************!*\
  !*** ./src/app/domain/skill.ts ***!
  \*********************************/
/*! exports provided: Skill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skill", function() { return Skill; });
var Skill = /** @class */ (function () {
    function Skill(dataObject, attributeService) {
        this.attributeService = attributeService;
        this.skillGroupId = dataObject['type'];
        this.id = dataObject['id'];
        this.name = dataObject['name'];
        this.be = dataObject['behinderung'];
        if (dataObject['dice1']) {
            this.dice1 = this.attributeService.attributes.get(dataObject['dice1'].id);
            this.dice2 = this.attributeService.attributes.get(dataObject['dice2'].id);
            this.dice3 = this.attributeService.attributes.get(dataObject['dice3'].id);
        }
    }
    return Skill;
}());



/***/ }),

/***/ "./src/app/domain/skillgroup.ts":
/*!**************************************!*\
  !*** ./src/app/domain/skillgroup.ts ***!
  \**************************************/
/*! exports provided: SkillGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillGroup", function() { return SkillGroup; });
var SkillGroup = /** @class */ (function () {
    function SkillGroup(dataObject, chRef) {
        this.chRef = chRef;
        this.name = dataObject['name'];
        this.id = dataObject['id'];
        if (this.id == 1 || this.id == 8) {
            this.hasThreeDices = false;
        }
        else {
            this.hasThreeDices = true;
        }
        if (this.id == 1) {
            this.hasAttackParade = true;
        }
        else {
            this.hasAttackParade = false;
        }
        if (this.id == 8) {
            this.isLongRangeWeaponSkill = true;
        }
        else {
            this.isLongRangeWeaponSkill = false;
        }
    }
    SkillGroup.prototype.setSkills = function (skills) {
        this.skills = skills;
    };
    SkillGroup.prototype.getSkills = function () {
        return this.skills;
    };
    SkillGroup.prototype.getSkillsPromise = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve([{ value: 1 }, { value: 2 }]); }, 1000);
        });
        ;
    };
    return SkillGroup;
}());



/***/ }),

/***/ "./src/app/domain/skills.service.ts":
/*!******************************************!*\
  !*** ./src/app/domain/skills.service.ts ***!
  \******************************************/
/*! exports provided: SkillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillService", function() { return SkillService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _skill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skill */ "./src/app/domain/skill.ts");
/* harmony import */ var _skillgroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skillgroup */ "./src/app/domain/skillgroup.ts");
/* harmony import */ var _attribute_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attribute.service */ "./src/app/domain/attribute.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SkillService = /** @class */ (function () {
    function SkillService(http, chRef, attributeService) {
        this.http = http;
        this.chRef = chRef;
        this.attributeService = attributeService;
        this.skillsUrl = 'http://' + window.location.hostname + ':8000/skills/';
        this.skillTypesUrl = 'http://' + window.location.hostname + ':8000/skillTypes/';
    }
    SkillService.prototype.getSkills = function () {
        var _this = this;
        if (!this.skillsPromise) {
            this.skillsPromise = this.http.get(this.skillsUrl)
                .toPromise()
                .then(function (response) {
                return _this.extractSkills(response);
            });
        }
        return this.skillsPromise;
    };
    SkillService.prototype.getSkillGroups = function () {
        var _this = this;
        if (!this.skillGroupsPromise) {
            this.skillGroupsPromise = this.http.get(this.skillTypesUrl)
                .toPromise()
                .then(function (response) {
                _this.skillGroups = _this.extractSkillTypes(response);
                return _this.skillGroups;
            });
        }
        return this.skillGroupsPromise;
    };
    SkillService.prototype.extractSkills = function (res) {
        var _this = this;
        var skills = [];
        var body = res.json();
        body.forEach(function (skill) {
            skills.push(new _skill__WEBPACK_IMPORTED_MODULE_2__["Skill"](skill, _this.attributeService));
        });
        return skills;
    };
    SkillService.prototype.extractSkillTypes = function (res) {
        var _this = this;
        var skillTypes = [];
        var body = res.json();
        body.forEach(function (skillType) {
            skillTypes.push(new _skillgroup__WEBPACK_IMPORTED_MODULE_3__["SkillGroup"](skillType, _this.chRef));
        });
        return skillTypes;
    };
    SkillService.prototype.getSkill = function (id) {
        return this.getSkills()
            .then(function (skills) {
            return skills.find(function (skill) { return skill.id === id; });
        });
    };
    SkillService.prototype.getSkillGroup = function (id) {
        return this.getSkillGroups().then(function (skillGroups) {
            return skillGroups.find(function (skillGroup) { return skillGroup.id === id; });
        });
    };
    SkillService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _attribute_service__WEBPACK_IMPORTED_MODULE_4__["AttributeService"]])
    ], SkillService);
    return SkillService;
}());



/***/ }),

/***/ "./src/app/domain/spell.ts":
/*!*********************************!*\
  !*** ./src/app/domain/spell.ts ***!
  \*********************************/
/*! exports provided: Spell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spell", function() { return Spell; });
var Spell = /** @class */ (function () {
    function Spell(dataObject) {
        this.spellGroupId = dataObject['type'];
        this.id = dataObject['id'];
        this.name = dataObject['name'];
        // this.be = dataObject['behinderung'];
        this.dice1 = dataObject['dice1'];
        this.dice2 = dataObject['dice2'];
        this.dice3 = dataObject['dice3'];
        this.be = dataObject['be'];
    }
    return Spell;
}());



/***/ }),

/***/ "./src/app/domain/spellGroup.ts":
/*!**************************************!*\
  !*** ./src/app/domain/spellGroup.ts ***!
  \**************************************/
/*! exports provided: SpellGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpellGroup", function() { return SpellGroup; });
var SpellGroup = /** @class */ (function () {
    function SpellGroup(dataObject, chRef) {
        this.chRef = chRef;
        this.name = dataObject['name'];
        this.id = dataObject['id'];
    }
    SpellGroup.prototype.setSpells = function (skills) {
        this.spells = skills;
    };
    SpellGroup.prototype.getSpells = function () {
        return this.spells;
    };
    SpellGroup.prototype.getSpellsPromise = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve([{ value: 1 }, { value: 2 }]); }, 1000);
        });
        ;
    };
    return SpellGroup;
}());



/***/ }),

/***/ "./src/app/domain/spells.service.ts":
/*!******************************************!*\
  !*** ./src/app/domain/spells.service.ts ***!
  \******************************************/
/*! exports provided: SpellService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpellService", function() { return SpellService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _spell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spell */ "./src/app/domain/spell.ts");
/* harmony import */ var _spellGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spellGroup */ "./src/app/domain/spellGroup.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SpellService = /** @class */ (function () {
    function SpellService(http, chRef) {
        this.http = http;
        this.chRef = chRef;
        this.spellsUrl = 'http://' + window.location.hostname + ':8000/spells/';
        this.spellTypesUrl = 'http://' + window.location.hostname + ':8000/spellTypes/';
    }
    SpellService.prototype.getSpells = function () {
        var _this = this;
        if (!this.spellsPromise) {
            this.spellsPromise = this.http.get(this.spellsUrl)
                .toPromise()
                .then(function (response) {
                return _this.extractSpells(response);
            });
        }
        return this.spellsPromise;
    };
    SpellService.prototype.getSpellGroups = function () {
        var _this = this;
        if (!this.spellGroupsPromise) {
            this.spellGroupsPromise = this.http.get(this.spellTypesUrl)
                .toPromise()
                .then(function (response) {
                _this.spellGroups = _this.extractSpellTypes(response);
                return _this.spellGroups;
            });
        }
        return this.spellGroupsPromise;
    };
    SpellService.prototype.extractSpells = function (res) {
        var spells = [];
        var body = res.json();
        body.forEach(function (spell) {
            spells.push(new _spell__WEBPACK_IMPORTED_MODULE_2__["Spell"](spell));
        });
        return spells;
    };
    SpellService.prototype.extractSpellTypes = function (res) {
        var _this = this;
        var spellTypes = [];
        var body = res.json();
        body.forEach(function (spellType) {
            spellTypes.push(new _spellGroup__WEBPACK_IMPORTED_MODULE_3__["SpellGroup"](spellType, _this.chRef));
        });
        return spellTypes;
    };
    SpellService.prototype.getSpell = function (id) {
        return this.getSpells()
            .then(function (spells) {
            return spells.find(function (spell) { return spell.id === id; });
        });
    };
    SpellService.prototype.getSpellGroup = function (id) {
        return this.getSpellGroups().then(function (spellGroups) {
            return spellGroups.find(function (spellGroup) { return spellGroup.id === id; });
        });
    };
    SpellService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], SpellService);
    return SpellService;
}());



/***/ }),

/***/ "./src/app/domain/weapon.ts":
/*!**********************************!*\
  !*** ./src/app/domain/weapon.ts ***!
  \**********************************/
/*! exports provided: Weapon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weapon", function() { return Weapon; });
var Weapon = /** @class */ (function () {
    function Weapon(name, damageDice, damageAddPoints, skill) {
        if (skill === void 0) { skill = null; }
        this.name = name;
        this.damageDice = damageDice;
        this.damageAddPoints = damageAddPoints;
        this.skill = skill;
    }
    Object.defineProperty(Weapon.prototype, "damageText", {
        get: function () {
            return this.damageDice.toString() + 'W6+' + this.damageAddPoints.toString();
        },
        enumerable: true,
        configurable: true
    });
    return Weapon;
}());



/***/ }),

/***/ "./src/app/domain/weaponSkillDistribution.ts":
/*!***************************************************!*\
  !*** ./src/app/domain/weaponSkillDistribution.ts ***!
  \***************************************************/
/*! exports provided: WeaponSkillDistribution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponSkillDistribution", function() { return WeaponSkillDistribution; });
var WeaponSkillDistribution = /** @class */ (function () {
    function WeaponSkillDistribution(skillId, attack, parade) {
        this.skillId = skillId;
        this.attack = attack;
        this.parade = parade;
    }
    return WeaponSkillDistribution;
}());



/***/ }),

/***/ "./src/app/fight-display/fight-display.component.css":
/*!***********************************************************!*\
  !*** ./src/app/fight-display/fight-display.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fight-display/fight-display.component.html":
/*!************************************************************!*\
  !*** ./src/app/fight-display/fight-display.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  fight-display works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/fight-display/fight-display.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/fight-display/fight-display.component.ts ***!
  \**********************************************************/
/*! exports provided: FightDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FightDisplayComponent", function() { return FightDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FightDisplayComponent = /** @class */ (function () {
    function FightDisplayComponent() {
    }
    FightDisplayComponent.prototype.ngOnInit = function () {
    };
    FightDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fight-display',
            template: __webpack_require__(/*! ./fight-display.component.html */ "./src/app/fight-display/fight-display.component.html"),
            styles: [__webpack_require__(/*! ./fight-display.component.css */ "./src/app/fight-display/fight-display.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FightDisplayComponent);
    return FightDisplayComponent;
}());



/***/ }),

/***/ "./src/app/fight-setup/fight-setup.component.css":
/*!*******************************************************!*\
  !*** ./src/app/fight-setup/fight-setup.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fight-setup/fight-setup.component.html":
/*!********************************************************!*\
  !*** ./src/app/fight-setup/fight-setup.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  fight-setup works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/fight-setup/fight-setup.component.ts":
/*!******************************************************!*\
  !*** ./src/app/fight-setup/fight-setup.component.ts ***!
  \******************************************************/
/*! exports provided: FightSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FightSetupComponent", function() { return FightSetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FightSetupComponent = /** @class */ (function () {
    function FightSetupComponent() {
    }
    FightSetupComponent.prototype.ngOnInit = function () {
    };
    FightSetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fight-setup',
            template: __webpack_require__(/*! ./fight-setup.component.html */ "./src/app/fight-setup/fight-setup.component.html"),
            styles: [__webpack_require__(/*! ./fight-setup.component.css */ "./src/app/fight-setup/fight-setup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FightSetupComponent);
    return FightSetupComponent;
}());



/***/ }),

/***/ "./src/app/hero-card/hero-card.component.css":
/*!***************************************************!*\
  !*** ./src/app/hero-card/hero-card.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n\tpadding: 0;\r\n\tbackground-color: #f2f1ed;\r\n\tbox-shadow: 0 2px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0px 4px 20px 2px rgba(0,0,0,0.48) !important;\r\n}\r\nmat-card-content {\r\n\tdisplay: block;\r\n}\r\nmat-card-title {\r\n\tmargin-bottom: 0;\r\n}\r\n.cardContentContainer {\r\n\theight: 100px;\r\n\tposition: relative;\r\n\toverflow: visible;\r\n\tpadding: 0px;\r\n}\r\n.heroValues {\r\n\theight: 50px;\r\n}\r\n.heroAvatar {\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tright: 0;\r\n\theight: 190px;\r\n\tdisplay: block;\r\n}\r\n.heroAvatarImage {\r\n\t/*position: absolute;\r\n\tbottom: 0;\r\n\tright: 0;*/\r\n\t/*height: 180px;*/\r\n}\r\nul.weapons {\r\n\tlist-style-type: none;\r\n\tcolor: #4b4b4b;\r\n\t/* padding-left: 0; */\r\n\t/* border-bottom: 1px solid #ccc; */\r\n\tpadding: 0 0 5px 10px;\r\n}\r\ndiv.label {\r\n\twidth: 96px;\r\n\tfloat:left;\r\n}\r\n.headerContent {\r\n\tcursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/hero-card/hero-card.component.html":
/*!****************************************************!*\
  !*** ./src/app/hero-card/hero-card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"heroes-entry\">\r\n  <mat-card-content>\r\n    <div class=\"headerContainer\" (click)=\"gotoDetail()\">\r\n      <!--  -->\r\n      <div class=\"headerContent\">\r\n        <mat-card-title>{{hero.name}}</mat-card-title>\r\n        <mat-card-subtitle>{{hero.hero_type.name}}</mat-card-subtitle>\r\n      </div>\r\n    </div>\r\n    <div class=\"cardContentContainer\" (click)=\"gotoDetail()\">\r\n      <ul class=\"weapons\">\r\n        <li>\r\n          <div class=\"label\">Attacke:</div>{{hero.currentAttack}}\r\n        </li>\r\n        <li>\r\n          <div class=\"label\">Parade:</div>{{hero.currentParade}}\r\n        </li>\r\n        <li>\r\n          <div class=\"label\">Trefferpunkte:</div>{{hero.currentWeaponDamageText}}\r\n        </li>\r\n        <li>\r\n          <div class=\"label\">Rüstung:</div>3\r\n        </li>\r\n      </ul>\r\n      <div class=\"heroAvatar\" (click)=\"gotoDetail()\">\r\n        <img class=\"heroAvatarImage\" src=\"{{baseUrl}}{{hero.avatar_small}}\" height=\"100%\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"actionsContainer\">\r\n      <hero-controls [hero]=\"hero\">\r\n      </hero-controls>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/hero-card/hero-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/hero-card/hero-card.component.ts ***!
  \**************************************************/
/*! exports provided: HeroCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroCard", function() { return HeroCard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/hero.service */ "./src/app/domain/hero.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroCard = /** @class */ (function () {
    function HeroCard(heroService, router, route) {
        this.heroService = heroService;
        this.router = router;
        this.route = route;
        this.baseUrl = 'http://' + window.location.hostname + ':8000';
    }
    HeroCard.prototype.ngOnInit = function () {
    };
    Object.defineProperty(HeroCard.prototype, "hero", {
        get: function () {
            return this.heroProperty;
        },
        set: function (hero) {
            this.heroProperty = hero;
        },
        enumerable: true,
        configurable: true
    });
    HeroCard.prototype.onSelect = function (hero) {
        this.heroProperty = hero;
        this.gotoDetail();
    };
    HeroCard.prototype.gotoDetail = function () {
        this.router.navigate(['../hero', this.heroProperty.id], { relativeTo: this.route });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], HeroCard.prototype, "hero", null);
    HeroCard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hero-card',
            template: __webpack_require__(/*! ./hero-card.component.html */ "./src/app/hero-card/hero-card.component.html"),
            styles: [__webpack_require__(/*! ./hero-card.component.css */ "./src/app/hero-card/hero-card.component.css")],
        }),
        __metadata("design:paramtypes", [_domain_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HeroCard);
    return HeroCard;
}());



/***/ }),

/***/ "./src/app/hero-controls/hero-controls.component.css":
/*!***********************************************************!*\
  !*** ./src/app/hero-controls/hero-controls.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.buttons {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-between;\r\n\twidth: 100%;\r\n\theight: 50px;\r\n} \r\n\r\n.container {\r\n\twidth: 100%;\r\n\tposition: relative;\r\n\tborder-top: 1px solid #bbb;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n} \r\n\r\n.lifeChangerButton {\r\n\tbackground-color: #fff;\r\n\tflex: 1;\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n} \r\n\r\n.lifeChangerButton:not(:last-child) {\r\n\tborder-right: 1px solid #bbb;\r\n} \r\n\r\n.lifeChangerButton:first-child  {\r\n\tborder-bottom-left-radius: 2px;\r\n} \r\n\r\n.lifeChangerButton:last-child  {\r\n\tborder-bottom-right-radius: 2px;\r\n} \r\n\r\nlife-display, magic-display {\r\n\tposition: absolute;\r\n\t\r\n} \r\n\r\nlife-display {\r\n\ttop: -15px;\r\n\ttransition: all .3s ease-out;\r\n} \r\n\r\nmagic-display {\r\n\ttop: 5px;\r\n\ttransition: all .3s ease-out;\r\n} \r\n\r\nmagic-display.displayActive, life-display.displayActive {\r\n\tz-index: 60;\r\n} \r\n\r\nmagic-display.displayInactive, life-display.displayInactive {\r\n\tz-index: 30;\r\n\t-webkit-transform: scale(0.7);\r\n\t        transform: scale(0.7)\r\n} \r\n\r\n.displaysContainer {\r\n\twidth: 100%;\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items:center;\r\n}"

/***/ }),

/***/ "./src/app/hero-controls/hero-controls.component.html":
/*!************************************************************!*\
  !*** ./src/app/hero-controls/hero-controls.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n        <div class=\"displaysContainer\">\r\n                <life-display currentLife=\"{{hero.currentLife}}\" maxLife=\"{{hero.life}}\" (click)=\"focusLife()\" [ngClass]=\"lifeClass\">\r\n                </life-display>\r\n                <magic-display *ngIf=\"hero.knowsMagic\" currentMagicEnergy=\"{{hero.currentMagicEnergy}}\" maxMagicEnergy=\"{{hero.magicEnergy}}\" (click)=\"focusMagic()\"  [ngClass]=\"magicClass\">\r\n                </magic-display>\r\n        </div>\r\n        <div class=\"buttons\">\r\n                <button mat-button  class=\"lifeChangerButton\" (click)=\"updateValue(-5)\">\r\n                        <i class=\"fa fa-angle-double-down\" aria-hidden=\"true\"></i>\r\n                </button>\r\n                <button mat-button class=\"lifeChangerButton\" (click)=\"updateValue(-1)\">\r\n                        <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\r\n                </button>\r\n                <button mat-button class=\"lifeChangerButton\" (click)=\"updateValue(1)\">\r\n                        <i class=\"fa fa-angle-up\" aria-hidden=\"true\"></i>\r\n                </button>\r\n                <button mat-button class=\"lifeChangerButton\" (click)=\"updateValue(5)\">\r\n                        <i class=\"fa fa-angle-double-up\" aria-hidden=\"true\"></i>\r\n                </button>\r\n        </div>\r\n</div>  \r\n\r\n"

/***/ }),

/***/ "./src/app/hero-controls/hero-controls.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/hero-controls/hero-controls.component.ts ***!
  \**********************************************************/
/*! exports provided: HeroControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroControls", function() { return HeroControls; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hero_life_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero-life.service */ "./src/app/hero-controls/hero-life.service.ts");
/* harmony import */ var app_life_display_life_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/life-display/life-display.component */ "./src/app/life-display/life-display.component.ts");
/* harmony import */ var app_magic_display_magic_display_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/magic-display/magic-display.component */ "./src/app/magic-display/magic-display.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeroControls = /** @class */ (function () {
    function HeroControls(websocketService) {
        this.service = websocketService;
        this._lifeClass = 'displayActive';
        this._magicClass = 'displayInactive';
    }
    Object.defineProperty(HeroControls.prototype, "hero", {
        get: function () {
            return this._hero;
        },
        set: function (hero) {
            this._hero = hero;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroControls.prototype, "life", {
        get: function () {
            return this.lifeDisplayNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroControls.prototype, "magicClass", {
        get: function () {
            return this._magicClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroControls.prototype, "lifeClass", {
        get: function () {
            return this._lifeClass;
        },
        enumerable: true,
        configurable: true
    });
    HeroControls.prototype.focusLife = function () {
        this._magicClass = 'displayInactive';
        this._lifeClass = 'displayActive';
    };
    HeroControls.prototype.focusMagic = function () {
        this._magicClass = 'displayActive';
        this._lifeClass = 'displayInactive';
    };
    HeroControls.prototype.updateValue = function (value) {
        if (this._magicClass === 'displayInactive') {
            this.lifeDisplay.rippleDisplay(value);
            this.service.sendUpate({
                heroId: this._hero.id,
                type: 'lifeUpdate',
                oldLive: this.hero.currentLife,
                value: value
            });
        }
        else {
            this.magicDisplay.rippleDisplay(value);
            this.service.sendUpate({
                heroId: this._hero.id,
                type: 'magicUpdate',
                oldLive: this.hero.currentLife,
                value: value
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(app_life_display_life_display_component__WEBPACK_IMPORTED_MODULE_2__["LifeDisplayComponent"]),
        __metadata("design:type", app_life_display_life_display_component__WEBPACK_IMPORTED_MODULE_2__["LifeDisplayComponent"])
    ], HeroControls.prototype, "lifeDisplay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(app_magic_display_magic_display_component__WEBPACK_IMPORTED_MODULE_3__["MagicDisplayComponent"]),
        __metadata("design:type", app_magic_display_magic_display_component__WEBPACK_IMPORTED_MODULE_3__["MagicDisplayComponent"])
    ], HeroControls.prototype, "magicDisplay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], HeroControls.prototype, "hero", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], HeroControls.prototype, "life", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], HeroControls.prototype, "magicClass", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], HeroControls.prototype, "lifeClass", null);
    HeroControls = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hero-controls',
            template: __webpack_require__(/*! ./hero-controls.component.html */ "./src/app/hero-controls/hero-controls.component.html"),
            styles: [__webpack_require__(/*! ./hero-controls.component.css */ "./src/app/hero-controls/hero-controls.component.css")]
        }),
        __metadata("design:paramtypes", [_hero_life_service__WEBPACK_IMPORTED_MODULE_1__["HeroLifeService"]])
    ], HeroControls);
    return HeroControls;
}());



/***/ }),

/***/ "./src/app/hero-controls/hero-life.service.ts":
/*!****************************************************!*\
  !*** ./src/app/hero-controls/hero-life.service.ts ***!
  \****************************************************/
/*! exports provided: HeroLifeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroLifeService", function() { return HeroLifeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _domain_hero_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../domain/hero.service */ "./src/app/domain/hero.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Rx } from 'rxjs';


var HeroLifeService = /** @class */ (function () {
    function HeroLifeService(http, heroService) {
        var _this = this;
        this.http = http;
        this.wsUrl = 'ws://' + window.location.hostname + ':8000/heroes';
        this.wsClientId = Math.random().toString(36).substring(7);
        this.heroService = heroService;
        this.socket = this.createWebsocket();
        this.lifeSubject = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.lifeSubject.subscribe(this.updateHeroLife.bind(this));
        this.socket.onmessage = (function (evt) { return _this.lifeSubject.next(evt); });
    }
    HeroLifeService.prototype.createWebsocket = function () {
        var ws = new WebSocket(this.wsUrl);
        return ws;
    };
    HeroLifeService.prototype.sendUpate = function (data) {
        this.socket.send(JSON.stringify(data));
    };
    HeroLifeService.prototype.updateHeroLife = function (message) {
        var messageData = JSON.parse(message.data);
        this.heroService.getHero(messageData.heroId).then(function (hero) {
            switch (messageData.type) {
                case 'lifeUpdate':
                    hero.life_lost = hero.life_lost - messageData.value;
                    break;
                case 'magicUpdate':
                    hero.magicEnergy_lost = hero.magicEnergy_lost - messageData.value;
                    break;
                default:
                    break;
            }
        });
    };
    HeroLifeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _domain_hero_service__WEBPACK_IMPORTED_MODULE_2__["HeroService"]])
    ], HeroLifeService);
    return HeroLifeService;
}());



/***/ }),

/***/ "./src/app/herodetail/hero-detail.component.css":
/*!******************************************************!*\
  !*** ./src/app/herodetail/hero-detail.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heroDetailHeader {\r\n  /*padding: 20px 20px 0 20px;*/\r\n  display: flex;\r\n}\r\n\r\n.page {\r\n  padding-top: 10px;\r\n  height: 100%;\r\n}\r\n\r\n.padded {\r\n  padding: 20px;\r\n}\r\n\r\n.skillEntry i {\r\n  margin-right: 5px;\r\n}\r\n\r\n#detailsNavigation {\r\n  display: flex;\r\n  justify-content: stretch;\r\n  justify-items: stretch;\r\n  margin-bottom: 10px;\r\n  margin-left: -5px;\r\n  position: fixed;\r\n  top:0;\r\n  width: calc(90% + 10px);\r\n  max-width: 1210px;\r\n  z-index: 50;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.characterDetailNavButton {\r\n  color: #fff;\r\n  font-size: 2rem;\r\n  flex:1;\r\n  \r\n  padding:5px;\r\n}\r\n\r\nlabel.long {\r\n  width: 150px;\r\n  display: none;\r\n}\r\n\r\nlabel.short {\r\n  width: 40px;\r\n}\r\n\r\n.pageContent {\r\n  padding-bottom: 40px;\r\n}\r\n\r\n#avatarContainer {\r\n  order: 1;\r\n  border-bottom: 1px solid #999;\r\n  background-color: #fff;\r\n}\r\n\r\n#propertiesContainer {\r\n  order: 2;\r\n}\r\n\r\n#attributesContainer {\r\n  order: 3;\r\n}\r\n\r\n.heroAvatarImage,\r\n.heroAvatar {\r\n  height: 150px;\r\n}\r\n\r\n.heroAvatar {\r\n  margin-top: -15px;\r\n}\r\n\r\n.actionsContainer {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  z-index: 1000;\r\n}\r\n\r\n.talente {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n.skillGroupEntries {\r\n  width: 100%;\r\n  /* display: flex;\r\n  flex-wrap: wrap; */\r\n}\r\n\r\n.talentSearchBox {\r\n  background-color: rgba(255, 255, 255, 1);\r\n  border-radius: 4px;\r\n  margin: -20px 0 10px 0;\r\n  padding: 10px;\r\n}\r\n\r\n.skillGroupTitle {\r\n  padding: 10px 0;\r\n}\r\n\r\n.skillEntry,\r\n.weaponEntry {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  flex-wrap: wrap;\r\n  font-size: 0.8rem;\r\n  align-items: center;\r\n  justify-content: stretch;\r\n}\r\n\r\ntalent-card {\r\n  flex: 1;\r\n}\r\n\r\n.skillContent,\r\n.weaponEntry {\r\n  margin: 1px;\r\n  /* border: 1px solid #ddd; */\r\n  background-color: #fff;\r\n  flex: 1;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  padding: 4px;\r\n  align-items: center;\r\n}\r\n\r\n.weaponEntry {\r\n  min-height: 30px;\r\n  padding-left: 10px;\r\n}\r\n\r\n.skillTitle {\r\n  width: 150px;\r\n  padding-left: 10px;\r\n  font-size: 0.9rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.skillBe {\r\n  width: 60px;\r\n}\r\n\r\n.skillValue {\r\n  width: 30px;\r\n  color: #AD2003;\r\n}\r\n\r\n.dices,\r\n.fightDices {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding: 0 10px;\r\n  align-items: center\r\n}\r\n\r\n.dice {\r\n  width: 30px;\r\n  text-align: center;\r\n}\r\n\r\n.fightDice {\r\n  width: 45px;\r\n}\r\n\r\n/** Search box **/\r\n\r\n::-webkit-input-placeholder {\r\n  text-align: center;\r\n}\r\n\r\n:-moz-placeholder {\r\n  /* Firefox 18- */\r\n  text-align: center;\r\n}\r\n\r\n::-moz-placeholder {\r\n  /* Firefox 19+ */\r\n  text-align: center;\r\n}\r\n\r\n:-ms-input-placeholder {\r\n  text-align: center;\r\n}\r\n\r\ninput.talentSearchInbox {\r\n  text-align: center;\r\n  height: 30px;\r\n  width: 100%;\r\n}\r\n\r\nform.search {\r\n  width: 100%;\r\n  max-width: 1200px;\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n}\r\n\r\n.mat-option.skillOption {\r\n  height: auto;\r\n  line-height: 12px;\r\n}\r\n\r\nmat-radio-button {\r\n  width: 100%;\r\n}\r\n\r\n.weaponChoiceLabel div {\r\n  float: left;\r\n  padding-right: 20px;\r\n}\r\n\r\n.weaponChoiceLabel :nth-child(1) {\r\n  width: 120px\r\n}\r\n\r\n@media (min-width: 48em) {\r\n  #avatarContainer {\r\n    order: 3;\r\n    background-color: transparent;\r\n    border-bottom: none;\r\n  }\r\n\r\n  #propertiesContainer {\r\n    order: 1;\r\n  }\r\n\r\n  #attributesContainer {\r\n    order: 2;\r\n  }\r\n\r\n  .heroAvatarImage,\r\n  .heroAvatar {\r\n    height: 300px;\r\n  }\r\n\r\n  label.long {\r\n    display: inline;\r\n  }\r\n\r\n  label.short {\r\n    display: none;\r\n  }\r\n\r\n  .skillEntry {\r\n    /* width: 50%; */\r\n    float: left;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/herodetail/hero-detail.component.html":
/*!*******************************************************!*\
  !*** ./src/app/herodetail/hero-detail.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<detail-navigation [hero]=\"hero\">\r\n\r\n</detail-navigation>\r\n<div class=\"page flex-col center\"> \r\n  <div class=\"pageContent\">\r\n    <!-- <div id=\"detailsNavigation\" *ngIf=\"hero\">\r\n      <button mat-button class=\"characterDetailNavButton navButtonIcon\" (click)=\"navToAnchor('#propertiesBox')\">\r\n        <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i>\r\n      </button>\r\n      <button mat-button class=\"characterDetailNavButton navButtonIcon\" (click)=\"navToAnchor('#propertiesContainer')\">\r\n        <i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i>\r\n      </button>\r\n      <button mat-button class=\"characterDetailNavButton navButtonIcon\" (click)=\"navToAnchor('#talentHeader')\">\r\n        <i class=\"fa fa-grav\" aria-hidden=\"true\"></i>\r\n      </button>\r\n      <button *ngIf=\"hero.knowsMagic\" mat-button class=\"characterDetailNavButton navButtonIcon\"\r\n        (click)=\"navToAnchor('#magicHeader')\">\r\n        <i class=\"fa fa-magic\" aria-hidden=\"true\"></i>\r\n      </button>\r\n    </div> -->\r\n    <!-- <talent-search>\r\n      \r\n    </talent-search> -->\r\n    <!--<form class=\"search\">\r\n           \r\n        <input class=\"talentSearchInbox text-center\" placeholder=\"Talentsuche\" [matAutocomplete]=\"auto\"\r\n          [formControl]=\"searchCtrl\" [value]=\"autoSearchTerm\">\r\n        <mat-autocomplete #auto=\"matAutocomplete\">\r\n          <mat-option *ngFor=\"let skill of filteredSkills | async\" [value]=\"autoSearchTerm\" class=\"skillOption\">\r\n            <div class=\"skillEntry\">\r\n              <talent-card [skill]=\"skill\"></talent-card>\r\n            </div>\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n      </form>\r\n      -->\r\n    <div *ngIf=\"hero\" scrollSpy [spiedTags]=\"['A']\" (sectionChange)=\"onSectionChange($event)\"\r\n      style=\"flex: 1; overflow-y: scroll;\">\r\n      <div class=\"headerContainer\">\r\n        <a class=\"menuItem\" name=\"Allgemein\"></a>\r\n        <!--  -->\r\n        <div class=\"headerContent\">\r\n          <h1>{{hero.name}}</h1>\r\n          <mat-card-subtitle>{{hero.hero_type.name}}</mat-card-subtitle>\r\n        </div>\r\n      </div>\r\n      <div class=\"flex-col\">\r\n        <div id=\"propertiesBox\" class=\"contentBox Grid Grid--cols-2\">\r\n          <div id=\"propertiesContainer\" class=\"container Grid-cell\">\r\n            <div class=\"padded\">\r\n              <!-- <h4>Eigenschaften</h4>\r\n              <div class=\"flex-row\">\r\n                <div class=\"label\">\r\n                  <label>id: </label>\r\n                </div>\r\n                <div class=\"value\">{{hero.id}}</div>\r\n              </div>\r\n              -->\r\n              <div class=\"flex-row\">\r\n                <div class=\"label\">\r\n                  <label>Größe: </label>\r\n                </div>\r\n                <div class=\"value\">{{hero.size}}</div>\r\n              </div>\r\n              <div class=\"flex-row\">\r\n                <div class=\"label\">\r\n                  <label>Rasse: </label>\r\n                </div>\r\n                <div class=\"value\">{{hero.race.name}}</div>\r\n              </div>\r\n              <div class=\"flex-row\">\r\n                <div class=\"label\">\r\n                  <label>Kultur: </label>\r\n                </div>\r\n                <div class=\"value\">{{hero.culture}}</div>\r\n              </div>\r\n              <div class=\"flex-row\">\r\n                <div class=\"label\">\r\n                  <label>Sozialrang: </label>\r\n                </div>\r\n                <div class=\"value\">{{hero.social_rank}}</div>\r\n              </div>\r\n              <div class=\"flex-row\">\r\n                <div class=\"label\">\r\n                  <label>Magieresistenz: </label>\r\n                </div>\r\n                <div class=\"value\">{{hero.magieresistenz}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <a id=\"attributesContainerAnchor\"></a>\r\n          <div id=\"attributesContainer\" class=\"container Grid-cell\">\r\n            <div class=\"padded\">\r\n              <div *ngFor=\"let attribute of hero.attributes; index as i; keyvalue\" class=\"flex-row\">\r\n                <div class=\"label\">\r\n                  <label>{{attribute.name}}</label>\r\n                </div>\r\n                <div class=\"value\">{{attribute.value}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div id=\"avatarContainer\" class=\"Grid-cell flex-col center\">\r\n            <div class=\"heroAvatar large flex-item\">\r\n              <img class=\"heroAvatarImage\" src=\"{{baseUrl}}{{hero.avatar_small}}\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"Grid Grid--full Grid-cell\">\r\n          <div class=\"actionsContainer Grid-cell\">\r\n            <hero-controls [hero]=\"hero\">\r\n            </hero-controls>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"contentBox flex-item\">\r\n        <a id=\"fightValueContainerAnchor\"></a>\r\n        <div class=\"kampfwerte padded flex-item flex-col\">\r\n          <h4>Kampfwerte</h4>\r\n          <div class=\"flex-row\">\r\n            <div class=\"flex-item\">\r\n              <h5>Basiswerte</h5>\r\n            </div>\r\n          </div>\r\n          <div class=\"flex-row\">\r\n            <div class=\"flex-item\">\r\n              <label class=\"long\">Attacke: </label>\r\n              <label class=\"short\">AT: </label>{{hero.attack_basis}}\r\n            </div>\r\n            <div class=\"flex-item\">\r\n              <label class=\"long\">Parade: </label>\r\n              <label class=\"short\">PA: </label>{{hero.parade_basis}}\r\n            </div>\r\n            <div class=\"flex-item\">\r\n              <label class=\"long\">Fernkampf: </label>\r\n              <label class=\"short\">FK: </label>{{hero.fernkampf_basis}}\r\n            </div>\r\n          </div>\r\n          <div class=\"flex-row\">\r\n            <div class=\"flex-item\">\r\n              <h5>Aktuelle Werte</h5>\r\n            </div>\r\n          </div>\r\n          <div class=\"kampfwerte\">\r\n\r\n            <div class=\"flex-row\">\r\n              <label>Attacke: </label>{{hero.currentAttack}}\r\n            </div>\r\n            <div class=\"flex-row\">\r\n              <label>Parade: </label>{{hero.currentParade}}\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"flex-row\">\r\n            <div class=\"flex-item\">\r\n              <h5>Waffe</h5>\r\n            </div>\r\n          </div>\r\n          <mat-radio-group *ngIf=\"hero.currentWeapon\" [value]=\"hero.currentWeapon.name\">\r\n            <div class=\"skillGroupEntries flex-row\" *ngFor=\"let weapon of hero.weapons\">\r\n              <mat-card class=\"weaponEntry flex-item\">\r\n                <mat-radio-button value=\"{{weapon.name}}\" (change)=\"updateCurrentWeapon(weapon)\">\r\n                  <div class=\"weaponChoiceLabel\">\r\n                    <div class=\"weaponName\">{{weapon.name}}</div>\r\n                    <div class=\"weaponDices\">{{weapon.damageDice}}W6+{{weapon.damageAddPoints}}</div>\r\n                  </div>\r\n                </mat-radio-button>\r\n              </mat-card>\r\n            </div>\r\n          </mat-radio-group>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"contentBox flex-item flex-row\">\r\n        <div class=\"talente padded\">\r\n          <a name=\"Talente\"></a>\r\n          <h4 id=\"talentHeader\">Talente</h4>\r\n\r\n          <!-- <input type=\"search\" [value]=\"talentSearchTerm\" (input)=\"talentSearchTerm  = $event.target.value\" /> -->\r\n          <!-- <div *ngFor=\"let skillGroup of hero.skillGroups | MatchesSearchTermChildren:talentSearchTerm\"> -->\r\n          <div *ngFor=\"let skillGroup of hero.skillGroups\">\r\n            <a class=\"menuItem\" name=\"{{skillGroup.skillGroup.name}}\"></a>\r\n            <div class=\"skillGroupTitle\">{{skillGroup.skillGroup.name}}</div>\r\n            <div class=\"skillGroupEntries\">\r\n              <!-- <div class=\"skillEntry\" *ngFor=\"let skill of skillGroup.skills\"> -->\r\n              <div class=\"skillEntry\" *ngFor=\"let skill of skillGroup.skills | MatchesSearchTerm:talentSearchTerm\">\r\n                <!-- <mat-grid-list [cols]=\"breakpoint\" rowHeight=\"80px\"> -->\r\n                <!-- <mat-grid-tile *ngFor=\"let skill of skillGroup.skills\" colspan=\"1\" rowspan=\"1\" > -->\r\n                  \r\n                <talent-card [skill]=\"skill\"></talent-card>\r\n                <!-- </mat-grid-tile> -->\r\n                <!-- </div> -->\r\n                <!-- </mat-grid-list> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"hero.knowsMagic\" class=\"contentBox flex-row\">\r\n        <div class=\"talente padded\">\r\n          <h4 id=\"magicHeader\">Zaubersprüche</h4>\r\n          <div *ngFor=\"let spellGroup of hero.spellGroups\">\r\n            <a class=\"menuItem\" name=\"{{spellGroup.spellGroup.name}}\"></a>\r\n            <div class=\"spellGroupTitle\">{{spellGroup.spellGroup.name}}</div>\r\n            <div class=\"spellGroupEntries\">\r\n              <div class=\"spellEntry\" *ngFor=\"let spell of spellGroup.spells\">\r\n                <!-- <div class=\"spellEntry\" *ngFor=\"let spell of spellGroup.spells | MatchesSearchTerm:talentSearchTerm\"> -->\r\n                <spell-card [spell]=\"spell\"></spell-card>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/herodetail/hero-detail.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/herodetail/hero-detail.component.ts ***!
  \*****************************************************/
/*! exports provided: HeroDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroDetailComponent", function() { return HeroDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _domain_hero_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/hero.service */ "./src/app/domain/hero.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HeroDetailComponent = /** @class */ (function () {
    function HeroDetailComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
        this.talentSearchTerm = '';
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.baseUrl = 'http://' + window.location.hostname + ':8000';
        var that = this;
        new Promise(function (resolve, reject) {
            var heroTimer = setInterval(function () {
                if (that.hero && that.hero.skills) {
                    console.log(that.hero.skills);
                    resolve(that.filteredSkills = that.searchCtrl.valueChanges
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (searchTerm) {
                        return searchTerm ? that.filterSkills(searchTerm) : that.hero.skills.slice();
                    })));
                    clearTimeout(heroTimer);
                }
            }, 100);
        });
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.heroService.getHero(+params['id']); })
            .subscribe(function (hero) {
            _this.hero = hero;
        });
        ;
        this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
    };
    HeroDetailComponent.prototype.filterSkills = function (name) {
        return this.hero.skills.filter(function (skill) {
            return skill.getSkill().name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
        });
    };
    HeroDetailComponent.prototype.updateCurrentWeapon = function (weapon) {
        this.hero.currentWeapon = weapon;
    };
    HeroDetailComponent.prototype.navToAnchor = function (anchor) {
    };
    HeroDetailComponent.prototype.onSectionChange = function (event) {
        console.log('hey');
    };
    HeroDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hero-details',
            template: __webpack_require__(/*! ./hero-detail.component.html */ "./src/app/herodetail/hero-detail.component.html"),
            styles: [__webpack_require__(/*! ./hero-detail.component.css */ "./src/app/herodetail/hero-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_domain_hero_service__WEBPACK_IMPORTED_MODULE_3__["HeroService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());



/***/ }),

/***/ "./src/app/heroes/heroes.component.css":
/*!*********************************************!*\
  !*** ./src/app/heroes/heroes.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.heroes-container {\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n\r\n.heroes-list {\r\n\tpadding: 0;\r\n\twidth: 100%;\r\n\tmax-width: 400px;\r\n}\r\n\r\nhero-card {\r\n\tmargin-bottom: 15px;\r\n\tdisplay: block;\r\n}"

/***/ }),

/***/ "./src/app/heroes/heroes.component.html":
/*!**********************************************!*\
  !*** ./src/app/heroes/heroes.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page heroes-container\">\r\n    <div>\r\n        \r\n    </div>\r\n    <div class=\"heroes-list\">\r\n        <hero-card *ngFor=\"let hero of heroes\" [class.selected]=\"hero === selectedHero\" [hero]=\"hero\">\r\n        </hero-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/heroes/heroes.component.ts":
/*!********************************************!*\
  !*** ./src/app/heroes/heroes.component.ts ***!
  \********************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/hero.service */ "./src/app/domain/hero.service.ts");
/* harmony import */ var _domain_skills_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/skills.service */ "./src/app/domain/skills.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeroesComponent = /** @class */ (function () {
    function HeroesComponent(heroService, skillService, router) {
        this.heroService = heroService;
        this.skillService = skillService;
        this.router = router;
        this.getHeroes();
        this.getSkills();
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.getSkills = function () {
        var _this = this;
        this.skillService.getSkills().then(function (skills) { return _this.skills = skills; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
        this.gotoDetail();
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/hero', this.selectedHero.id]);
    };
    HeroesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'heroes-list',
            template: __webpack_require__(/*! ./heroes.component.html */ "./src/app/heroes/heroes.component.html"),
            styles: [__webpack_require__(/*! ./heroes.component.css */ "./src/app/heroes/heroes.component.css")]
        }),
        __metadata("design:paramtypes", [_domain_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"],
            _domain_skills_service__WEBPACK_IMPORTED_MODULE_2__["SkillService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeroesComponent);
    return HeroesComponent;
}());



/***/ }),

/***/ "./src/app/image-popup/image-popup.component.css":
/*!*******************************************************!*\
  !*** ./src/app/image-popup/image-popup.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/image-popup/image-popup.component.html":
/*!********************************************************!*\
  !*** ./src/app/image-popup/image-popup.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n <img [src]=\"data.url\">\r\n</div>"

/***/ }),

/***/ "./src/app/image-popup/image-popup.component.ts":
/*!******************************************************!*\
  !*** ./src/app/image-popup/image-popup.component.ts ***!
  \******************************************************/
/*! exports provided: ImagePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePopupComponent", function() { return ImagePopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ImagePopupComponent = /** @class */ (function () {
    function ImagePopupComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ImagePopupComponent.prototype.ngOnInit = function () {
    };
    ImagePopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-popup',
            template: __webpack_require__(/*! ./image-popup.component.html */ "./src/app/image-popup/image-popup.component.html"),
            styles: [__webpack_require__(/*! ./image-popup.component.css */ "./src/app/image-popup/image-popup.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ImagePopupComponent);
    return ImagePopupComponent;
}());



/***/ }),

/***/ "./src/app/life-display/life-display.component.css":
/*!*********************************************************!*\
  !*** ./src/app/life-display/life-display.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainStatus {\t\r\n\t/* ; */\r\n\t/* top: -16px;\r\n\tleft: 50%;\r\n\tz-index: 30; */\r\n}\r\n\r\n.statusValueContainer {\r\n    height: 30px;\r\n    width: 120px;\r\n    display: flex;\r\n    justify-content: center;\r\n\tposition: relative;\r\n    /* left: -50%; */\r\n}\r\n\r\n.mainStatusValue {\r\n\theight: 30px;\r\n\twidth: 120px;\r\n\tborder-radius: 60px;\r\n\tborder: 1px solid #bbb;\r\n\tbackground-color: #fff;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tpadding: 2px 0 0 0;\r\n\tfont-size: 1.5rem;\r\n\tposition: relative;\r\n\t\r\n}\r\n\r\n.statusValueText {\r\n    z-index: 10;\r\n}\r\n\r\n.control-icon {\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tposition: absolute;\r\n    top: -25px;\r\n    left: 40px;\r\n\tz-index: 200;\r\n}"

/***/ }),

/***/ "./src/app/life-display/life-display.component.html":
/*!**********************************************************!*\
  !*** ./src/app/life-display/life-display.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainStatus\">\r\n  <img class=\"control-icon\" src=\"/assets/icons/heart.png\"/>\r\n  <div  class=\"mainStatusValue good\">\r\n    <div matRipple matRipple \r\n    matRippleColor=\"#ff0000\"\r\n    matRippleRadius=\"20\" \r\n    matRippleCentered=\"true\"\r\n    matRippleDisabled=\"true\"\r\n    class=\"statusValueContainer\">\r\n      <div class=\"statusValueText\">{{currentLife}}/{{maxLife}}</div>\r\n    </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/life-display/life-display.component.ts":
/*!********************************************************!*\
  !*** ./src/app/life-display/life-display.component.ts ***!
  \********************************************************/
/*! exports provided: LifeDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeDisplayComponent", function() { return LifeDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../hero-controls/hero-life.service */ "./src/app/hero-controls/hero-life.service.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var rippleColors = {
    good: '#C4F779',
    bad: '#E16772'
};
var LifeDisplayComponent = /** @class */ (function () {
    function LifeDisplayComponent(websocketService) {
        this.websocketService = websocketService;
    }
    LifeDisplayComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(LifeDisplayComponent.prototype, "currentLife", {
        get: function () {
            return this._currentLife;
        },
        set: function (currentLife) {
            this._currentLife = currentLife;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LifeDisplayComponent.prototype, "maxLife", {
        get: function () {
            return this._maxLife;
        },
        set: function (maxLife) {
            this._maxLife = maxLife;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LifeDisplayComponent.prototype, "life", {
        get: function () {
            return this.lifeDisplay;
        },
        enumerable: true,
        configurable: true
    });
    LifeDisplayComponent.prototype.rippleDisplay = function (valueUpdate) {
        var rippleColor = valueUpdate < 0 ? rippleColors.bad : rippleColors.good;
        this.ripple.launch({
            color: rippleColor
        });
    };
    // Test stuff
    LifeDisplayComponent.prototype.rippleText = function (text) {
        console.log(text);
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"]),
        __metadata("design:type", _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"])
    ], LifeDisplayComponent.prototype, "ripple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], LifeDisplayComponent.prototype, "currentLife", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], LifeDisplayComponent.prototype, "maxLife", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], LifeDisplayComponent.prototype, "life", null);
    LifeDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'life-display',
            template: __webpack_require__(/*! ./life-display.component.html */ "./src/app/life-display/life-display.component.html"),
            styles: [__webpack_require__(/*! ./life-display.component.css */ "./src/app/life-display/life-display.component.css")]
        }),
        __metadata("design:paramtypes", [_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_1__["HeroLifeService"]])
    ], LifeDisplayComponent);
    return LifeDisplayComponent;
}());



/***/ }),

/***/ "./src/app/magic-display/magic-display.component.css":
/*!***********************************************************!*\
  !*** ./src/app/magic-display/magic-display.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainStatus {\t\r\n\t/* ; */\r\n\t/* top: -16px;\r\n\tleft: 50%;\r\n\tz-index: 30; */\r\n}\r\n\r\n.statusValueContainer {\r\n    height: 30px;\r\n    width: 120px;\r\n    display: flex;\r\n    justify-content: center;\r\n\tposition: relative;\r\n    /* left: -50%; */\r\n}\r\n\r\n.mainStatusValue {\r\n\theight: 30px;\r\n\twidth: 120px;\r\n\tborder-radius: 60px;\r\n\tborder: 1px solid #bbb;\r\n\tbackground-color: #fff;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tpadding: 2px 0 0 0;\r\n\tfont-size: 1.5rem;\r\n\tposition: relative;\r\n}\r\n\r\n.statusValueText {\r\n    z-index: 10;\r\n}\r\n\r\n.control-icon {\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tposition: absolute;\r\n    top: 15px;\r\n    left: 40px;\r\n\tz-index: 200;\r\n}"

/***/ }),

/***/ "./src/app/magic-display/magic-display.component.html":
/*!************************************************************!*\
  !*** ./src/app/magic-display/magic-display.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainStatus\">\r\n    <img class=\"control-icon\" src=\"/assets/icons/upg_wand.png\"/>\r\n    <div  class=\"mainStatusValue good\">\r\n      <div matRipple matRipple \r\n      matRippleColor=\"#ff0000\"\r\n      matRippleRadius=\"20\" \r\n      matRippleCentered=\"true\"\r\n      matRippleDisabled=\"true\"\r\n      class=\"statusValueContainer\">\r\n        <div class=\"statusValueText\">{{currentMagicEnergy}}/{{maxMagicEnergy}}</div>\r\n      </div>\r\n  </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/magic-display/magic-display.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/magic-display/magic-display.component.ts ***!
  \**********************************************************/
/*! exports provided: MagicDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagicDisplayComponent", function() { return MagicDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../hero-controls/hero-life.service */ "./src/app/hero-controls/hero-life.service.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var rippleColors = {
    good: '#C4F779',
    bad: '#E16772'
};
var MagicDisplayComponent = /** @class */ (function () {
    function MagicDisplayComponent(websocketService) {
        this.websocketService = websocketService;
    }
    MagicDisplayComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(MagicDisplayComponent.prototype, "currentMagicEnergy", {
        get: function () {
            return this._currentMagicEnergy;
        },
        set: function (currentMagicEnergy) {
            this._currentMagicEnergy = currentMagicEnergy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagicDisplayComponent.prototype, "maxMagicEnergy", {
        get: function () {
            return this._maxMagicEnergy;
        },
        set: function (maxMagicEnergy) {
            this._maxMagicEnergy = maxMagicEnergy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagicDisplayComponent.prototype, "life", {
        get: function () {
            return this.magicDisplay;
        },
        enumerable: true,
        configurable: true
    });
    MagicDisplayComponent.prototype.rippleDisplay = function (valueUpdate) {
        var rippleColor = valueUpdate < 0 ? rippleColors.bad : rippleColors.good;
        this.ripple.launch({
            color: rippleColor
        });
    };
    // Test stuff
    MagicDisplayComponent.prototype.rippleText = function (text) {
        console.log(text);
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"]),
        __metadata("design:type", _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"])
    ], MagicDisplayComponent.prototype, "ripple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], MagicDisplayComponent.prototype, "currentMagicEnergy", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], MagicDisplayComponent.prototype, "maxMagicEnergy", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], MagicDisplayComponent.prototype, "life", null);
    MagicDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'magic-display',
            template: __webpack_require__(/*! ./magic-display.component.html */ "./src/app/magic-display/magic-display.component.html"),
            styles: [__webpack_require__(/*! ./magic-display.component.css */ "./src/app/magic-display/magic-display.component.css")]
        }),
        __metadata("design:paramtypes", [_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_1__["HeroLifeService"]])
    ], MagicDisplayComponent);
    return MagicDisplayComponent;
}());



/***/ }),

/***/ "./src/app/master/master.component.css":
/*!*********************************************!*\
  !*** ./src/app/master/master.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/master/master.component.html":
/*!**********************************************!*\
  !*** ./src/app/master/master.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  master works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/master/master.component.ts":
/*!********************************************!*\
  !*** ./src/app/master/master.component.ts ***!
  \********************************************/
/*! exports provided: MasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterComponent", function() { return MasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MasterComponent = /** @class */ (function () {
    function MasterComponent() {
    }
    MasterComponent.prototype.ngOnInit = function () {
    };
    MasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-master',
            template: __webpack_require__(/*! ./master.component.html */ "./src/app/master/master.component.html"),
            styles: [__webpack_require__(/*! ./master.component.css */ "./src/app/master/master.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MasterComponent);
    return MasterComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  padding: 50px 0;\r\n  position: fixed;\r\n  \r\n}\r\n\r\n#menuContainer {\r\n  display: none;\r\n}\r\n\r\n#menuContainer.open {\r\n\tdisplay: flex;\r\n}\r\n\r\n.mat-menu-content {\r\n  background-color: rgba(90, 90, 90, 0.5);\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"menuContainer\" [ngClass]=\"{'open': open === true }\">\r\n  <!-- <md-nav-list class=\"modal\">\r\n    <md-list-item (click)=\"gotoList()\">\r\n      <a mdLine>Zurück</a>\r\n    </md-list-item>\r\n    <md-list-item>Salt </md-list-item>\r\n    <md-list-item>Paprika </md-list-item>\r\n  </md-nav-list> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/***
 *
 *
 */
var Menu = /** @class */ (function () {
    function Menu(router) {
        this.router = router;
        this.baseUrl = 'http://' + window.location.hostname + ':8000';
    }
    Menu.prototype.ngOnInit = function () {
    };
    Menu.prototype.gotoList = function () {
        this.router.navigate(['/heroes']);
    };
    Menu.prototype.toggle = function () {
        this.open = !this.open;
    };
    Menu = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Menu);
    return Menu;
}());



/***/ }),

/***/ "./src/app/player/player.component.css":
/*!*********************************************!*\
  !*** ./src/app/player/player.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/player/player.component.html":
/*!**********************************************!*\
  !*** ./src/app/player/player.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<remote-control-receiver></remote-control-receiver>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/player/player.component.ts":
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlayerComponent = /** @class */ (function () {
    function PlayerComponent() {
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    PlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player',
            template: __webpack_require__(/*! ./player.component.html */ "./src/app/player/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.css */ "./src/app/player/player.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/remote-control-receiver/remote-control-receiver.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/remote-control-receiver/remote-control-receiver.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/remote-control-receiver/remote-control-receiver.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/remote-control-receiver/remote-control-receiver.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/remote-control-receiver/remote-control-receiver.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/remote-control-receiver/remote-control-receiver.component.ts ***!
  \******************************************************************************/
/*! exports provided: RemoteControlReceiverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteControlReceiverComponent", function() { return RemoteControlReceiverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _remote_control_receiver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remote-control-receiver.service */ "./src/app/remote-control-receiver/remote-control-receiver.service.ts");
/* harmony import */ var _domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../domain/remoteControlOperation */ "./src/app/domain/remoteControlOperation.ts");
/* harmony import */ var _image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../image-popup/image-popup.component */ "./src/app/image-popup/image-popup.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Lightbox } from 'ngx-lightbox';
var RemoteControlReceiverComponent = /** @class */ (function () {
    function RemoteControlReceiverComponent(websocketService, dialog) {
        var _this = this;
        this.dialog = dialog;
        this.operationsMap = new Map([
            [_domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_2__["operationTypes"].openImage, function (url) {
                    var dialogRef = _this.dialog.open(_image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_3__["ImagePopupComponent"], {
                        // width: '250px',
                        data: { url: _this.baseUrl + url }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        console.log('The dialog was closed');
                    });
                }
            ]
        ]);
        this.baseUrl = 'http://' + window.location.hostname + ':8000';
        this.service = websocketService;
        this.remoteControlReceiverSubject = websocketService.remoteControlReceiverSubject;
        this.remoteControlReceiverSubscription = websocketService.remoteControlReceiverSubject.subscribe(function (message) {
            var instruction = _domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_2__["OperationFactory"].createOperationFromJSON(message.data);
            var parameters = instruction.getParameters();
            _this.operationsMap.get(instruction.getType()).apply(_this, instruction.getParameters());
        });
    }
    RemoteControlReceiverComponent.prototype.ngOnInit = function () {
    };
    RemoteControlReceiverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'remote-control-receiver',
            template: __webpack_require__(/*! ./remote-control-receiver.component.html */ "./src/app/remote-control-receiver/remote-control-receiver.component.html"),
            styles: [__webpack_require__(/*! ./remote-control-receiver.component.css */ "./src/app/remote-control-receiver/remote-control-receiver.component.css")]
        }),
        __metadata("design:paramtypes", [_remote_control_receiver_service__WEBPACK_IMPORTED_MODULE_1__["RemoteControlReceiverService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], RemoteControlReceiverComponent);
    return RemoteControlReceiverComponent;
}());



/***/ }),

/***/ "./src/app/remote-control-receiver/remote-control-receiver.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/remote-control-receiver/remote-control-receiver.service.ts ***!
  \****************************************************************************/
/*! exports provided: RemoteControlReceiverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteControlReceiverService", function() { return RemoteControlReceiverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Rx } from 'rxjs';


var RemoteControlReceiverService = /** @class */ (function () {
    function RemoteControlReceiverService(http) {
        this.http = http;
        this.wsUrl = 'ws://' + window.location.hostname + ':8000/remoteControlReceiver';
        this.wsClientId = Math.random().toString(36).substring(7);
        this.socket = this.createWebsocket();
        var subject = this.remoteControlReceiverSubject = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.socket.onmessage = (function (evt) { return subject.next(evt); });
    }
    RemoteControlReceiverService.prototype.createWebsocket = function () {
        var ws = new WebSocket(this.wsUrl);
        return ws;
    };
    RemoteControlReceiverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], RemoteControlReceiverService);
    return RemoteControlReceiverService;
}());



/***/ }),

/***/ "./src/app/remote-control/remote-control.component.css":
/*!*************************************************************!*\
  !*** ./src/app/remote-control/remote-control.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/remote-control/remote-control.component.html":
/*!**************************************************************!*\
  !*** ./src/app/remote-control/remote-control.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/remote-control/remote-control.component.ts":
/*!************************************************************!*\
  !*** ./src/app/remote-control/remote-control.component.ts ***!
  \************************************************************/
/*! exports provided: RemoteControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteControlComponent", function() { return RemoteControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _remote_control_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remote-control.service */ "./src/app/remote-control/remote-control.service.ts");
/* harmony import */ var _domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../domain/remoteControlOperation */ "./src/app/domain/remoteControlOperation.ts");
/* harmony import */ var _choose_image_choose_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../choose-image/choose-image.component */ "./src/app/choose-image/choose-image.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RemoteControlComponent = /** @class */ (function () {
    function RemoteControlComponent(websocketService, dialog) {
        this.dialog = dialog;
        this.service = websocketService;
    }
    RemoteControlComponent.prototype.ngOnInit = function () {
    };
    RemoteControlComponent.prototype.sendRemoteControlOperation = function (type, target, parameters) {
        var operation = _domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_2__["OperationFactory"].createOperation(type, target, parameters);
        this.service.sendRemoteControlInstruction(operation);
    };
    RemoteControlComponent.prototype.sendImage = function (url) {
        var dialogRef = this.dialog.open(_choose_image_choose_image_component__WEBPACK_IMPORTED_MODULE_3__["ChooseImageComponent"], {
        // data: new ImagePopupData(null, [new Image('http://test.gif', 'the test')])
        // width: '250px',
        });
        // this.sendRemoteControlOperation('openImage', 'all', ['http://www.ulisses-spiele.de/media/images/produkt-produkt_das-schwarze-auge_dsa-logo_wandtattoo_3161_c.jpg'])
    };
    RemoteControlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'remote-control',
            template: __webpack_require__(/*! ./remote-control.component.html */ "./src/app/remote-control/remote-control.component.html"),
            styles: [__webpack_require__(/*! ./remote-control.component.css */ "./src/app/remote-control/remote-control.component.css")]
        }),
        __metadata("design:paramtypes", [_remote_control_service__WEBPACK_IMPORTED_MODULE_1__["RemoteControlService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], RemoteControlComponent);
    return RemoteControlComponent;
}());



/***/ }),

/***/ "./src/app/remote-control/remote-control.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/remote-control/remote-control.service.ts ***!
  \**********************************************************/
/*! exports provided: RemoteControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteControlService", function() { return RemoteControlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Rx } from 'rxjs';


var RemoteControlService = /** @class */ (function () {
    function RemoteControlService(http) {
        this.http = http;
        this.wsUrl = 'ws://' + window.location.hostname + ':8000/remoteControlSender';
        this.wsClientId = Math.random().toString(36).substring(7);
        this.socket = this.createWebsocket();
        var subject = this.remoteControlSubject = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.socket.onmessage = (function (evt) { return subject.next(evt); });
    }
    RemoteControlService.prototype.createWebsocket = function () {
        var ws = new WebSocket(this.wsUrl);
        return ws;
    };
    RemoteControlService.prototype.sendRemoteControlInstruction = function (instruction) {
        console.log('will send instruction');
        var jsonOperation = instruction.toJSON();
        console.log(jsonOperation);
        this.socket.send(jsonOperation);
    };
    RemoteControlService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], RemoteControlService);
    return RemoteControlService;
}());



/***/ }),

/***/ "./src/app/scroll-spy.directive.ts":
/*!*****************************************!*\
  !*** ./src/app/scroll-spy.directive.ts ***!
  \*****************************************/
/*! exports provided: ScrollSpyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSpyDirective", function() { return ScrollSpyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollSpyDirective = /** @class */ (function () {
    function ScrollSpyDirective(_el) {
        this._el = _el;
        this.spiedTags = [];
        this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        console.log('directive is getting initialized');
        //   _el.nativeElement.onscroll(this.onScroll)
    }
    ScrollSpyDirective.prototype.onScroll = function (event) {
        var currentSection;
        var children = this._el.nativeElement.children;
        var scrollTop = event.target.scrollTop;
        var parentOffset = event.target.offsetTop;
        var _loop_1 = function (i) {
            var element = children[i];
            if (this_1.spiedTags.some(function (spiedTag) { return spiedTag === element.tagName; })) {
                if ((element.offsetTop - parentOffset) <= scrollTop) {
                    currentSection = element.id;
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < children.length; i++) {
            _loop_1(i);
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ScrollSpyDirective.prototype, "spiedTags", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ScrollSpyDirective.prototype, "sectionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ScrollSpyDirective.prototype, "onScroll", null);
    ScrollSpyDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[scrollSpy]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ScrollSpyDirective);
    return ScrollSpyDirective;
}());



/***/ }),

/***/ "./src/app/spell-card/spell-card.component.css":
/*!*****************************************************!*\
  !*** ./src/app/spell-card/spell-card.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin: 2px;\r\n    padding: 12px;\r\n}\r\n\r\n.skillTitle {\r\n    width: 120px;\r\n}\r\n\r\n.skillBe, .skillValue {\r\n    width: 50px;\r\n}\r\n\r\n.fightDices {\r\n    width: 120px;\r\n    display:flex;\r\n}\r\n\r\n.fightDice {\r\n    width: 60px;\r\n}\r\n\r\n.dices {\r\n    display: flex;\r\n    width: 200px;\r\n}\r\n\r\n.dice {\r\n    width: 40px\r\n}\r\n\r\ni {\r\n    margin-right: 5px;\r\n}"

/***/ }),

/***/ "./src/app/spell-card/spell-card.component.html":
/*!******************************************************!*\
  !*** ./src/app/spell-card/spell-card.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <div class=\"skillTitle\">{{spell.getSpell().name}}</div>\r\n  <div class=\"skillBe\">\r\n    <i class=\"fa fa-wheelchair\"></i>{{spell.getSpell().be}}\r\n  </div>\r\n  \r\n  <div class=\"skillValue\">\r\n    <i class=\"fa fa-tachometer\"></i>{{spell.value}}</div>\r\n  <div class=\"dices\">\r\n    <i class=\"fa fa-cubes\"></i>\r\n    <div class=\"dice\">{{spell.getSpell().dice1}}: {{spell.dice1Value}}</div>\r\n    <div class=\"dice\">{{spell.getSpell().dice2}}: {{spell.dice2Value}}</div>\r\n    <div class=\"dice\">{{spell.getSpell().dice3}}: {{spell.dice3Value}}</div>\r\n  </div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/spell-card/spell-card.component.ts":
/*!****************************************************!*\
  !*** ./src/app/spell-card/spell-card.component.ts ***!
  \****************************************************/
/*! exports provided: SpellCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpellCard", function() { return SpellCard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_spells_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/spells.service */ "./src/app/domain/spells.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpellCard = /** @class */ (function () {
    function SpellCard(spellService) {
        this.spellService = spellService;
    }
    SpellCard.prototype.ngOnInit = function () {
    };
    Object.defineProperty(SpellCard.prototype, "spell", {
        get: function () {
            return this.spellProperty;
        },
        set: function (spell) {
            this.spellProperty = spell;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SpellCard.prototype, "spell", null);
    SpellCard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'spell-card',
            template: __webpack_require__(/*! ./spell-card.component.html */ "./src/app/spell-card/spell-card.component.html"),
            styles: [__webpack_require__(/*! ./spell-card.component.css */ "./src/app/spell-card/spell-card.component.css")]
        }),
        __metadata("design:paramtypes", [_domain_spells_service__WEBPACK_IMPORTED_MODULE_1__["SpellService"]])
    ], SpellCard);
    return SpellCard;
}());



/***/ }),

/***/ "./src/app/talent-card/talent-card.component.css":
/*!*******************************************************!*\
  !*** ./src/app/talent-card/talent-card.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin: 2px;\r\n    padding: 12px;\r\n}\r\n\r\n.skillTitle {\r\n    width: 120px;\r\n}\r\n\r\n.skillBe, .skillValue {\r\n    width: 50px;\r\n}\r\n\r\n.fightDices {\r\n    width: 120px;\r\n    display:flex;\r\n}\r\n\r\n.fightDice {\r\n    width: 60px;\r\n}\r\n\r\n.dices {\r\n    display: flex;\r\n    width: 200px;\r\n}\r\n\r\n.dice {\r\n    width: 40px\r\n}\r\n\r\ni {\r\n    margin-right: 5px;\r\n}"

/***/ }),

/***/ "./src/app/talent-card/talent-card.component.html":
/*!********************************************************!*\
  !*** ./src/app/talent-card/talent-card.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card matRipple>\r\n  <div class=\"skillTitle\">{{skill.getSkill().name}}</div>\r\n  <div class=\"skillBe\">\r\n    <i class=\"fa fa-wheelchair\"></i>{{skill.getSkill().be}}\r\n  </div>\r\n  \r\n  <div class=\"skillValue\">\r\n    <i class=\"fa fa-tachometer\"></i>{{skill.value}}</div>\r\n  <div class=\"fightDices\" *ngIf=\"skillGroup.hasAttackParade\">\r\n    <i class=\"fa fa-cube\"></i> \r\n    <div class=\"fightDice\">AT: {{skill.getAttack()}}</div>\r\n    <div class=\"fightDice\">PA: {{skill.getParade()}}</div>\r\n  </div>\r\n  <div class=\"dices\" *ngIf=\"skillGroup.hasThreeDices\">\r\n    <i class=\"fa fa-cubes\"></i>\r\n    <div class=\"dice\">{{skill.getSkill().dice1.short}}: {{skill.dice1Value}}</div>\r\n    <div class=\"dice\">{{skill.getSkill().dice2.short}}: {{skill.dice2Value}}</div>\r\n    <div class=\"dice\">{{skill.getSkill().dice3.short}}: {{skill.dice3Value}}</div>\r\n  </div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/talent-card/talent-card.component.ts":
/*!******************************************************!*\
  !*** ./src/app/talent-card/talent-card.component.ts ***!
  \******************************************************/
/*! exports provided: TalentCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalentCard", function() { return TalentCard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_skills_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/skills.service */ "./src/app/domain/skills.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TalentCard = /** @class */ (function () {
    function TalentCard(skillService) {
        this.skillService = skillService;
    }
    TalentCard.prototype.ngOnInit = function () {
    };
    Object.defineProperty(TalentCard.prototype, "skill", {
        get: function () {
            return this.skillProperty;
        },
        set: function (skill) {
            this.skillProperty = skill;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TalentCard.prototype, "skillGroup", {
        get: function () {
            return this.skillProperty.getSkillGroup();
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TalentCard.prototype, "skill", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TalentCard.prototype, "skillGroup", null);
    TalentCard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'talent-card',
            template: __webpack_require__(/*! ./talent-card.component.html */ "./src/app/talent-card/talent-card.component.html"),
            styles: [__webpack_require__(/*! ./talent-card.component.css */ "./src/app/talent-card/talent-card.component.css")]
        }),
        __metadata("design:paramtypes", [_domain_skills_service__WEBPACK_IMPORTED_MODULE_1__["SkillService"]])
    ], TalentCard);
    return TalentCard;
}());



/***/ }),

/***/ "./src/app/talent-search/skill.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/talent-search/skill.pipe.ts ***!
  \*********************************************/
/*! exports provided: MatchesSearchTerm, MatchesSearchTermChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesSearchTerm", function() { return MatchesSearchTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesSearchTermChildren", function() { return MatchesSearchTermChildren; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MatchesSearchTerm = /** @class */ (function () {
    function MatchesSearchTerm() {
    }
    MatchesSearchTerm.prototype.transform = function (skills, searchTerm) {
        if (searchTerm != '' && searchTerm !== undefined) {
            return skills.filter(function (skill) {
                return (skill.getSkill().name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
            });
        }
        else {
            return skills;
        }
    };
    MatchesSearchTerm = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'MatchesSearchTerm'
        })
    ], MatchesSearchTerm);
    return MatchesSearchTerm;
}());

var MatchesSearchTermChildren = /** @class */ (function () {
    function MatchesSearchTermChildren() {
    }
    MatchesSearchTermChildren.prototype.transform = function (skillGroups, searchTerm) {
        if (searchTerm != '' && searchTerm !== undefined) {
            return skillGroups.filter(function (SkillGroup) {
                return (SkillGroup.getSkills().filter(function (skill) { return skill.getSkill().name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1; })).length > 0;
            });
        }
        else {
            return skillGroups;
        }
    };
    MatchesSearchTermChildren = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'MatchesSearchTermChildren'
        })
    ], MatchesSearchTermChildren);
    return MatchesSearchTermChildren;
}());



/***/ }),

/***/ "./src/app/talent-search/talent-search.component.css":
/*!***********************************************************!*\
  !*** ./src/app/talent-search/talent-search.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/talent-search/talent-search.component.html":
/*!************************************************************!*\
  !*** ./src/app/talent-search/talent-search.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"search\" [value]=\"talentSearchTerm\" (input)=\"talentSearchTerm  = $event.target.value\" />\r\n<div *ngFor=\"let skillGroup of hero.skillGroups | MatchesSearchTermChildren:talentSearchTerm\">\r\n<!-- <div *ngFor=\"let skillGroup of hero.skillGroups\"> -->\r\n  <div class=\"skillGroupTitle\">{{skillGroup.skillGroup.name}}</div>\r\n  <div class=\"skillGroupEntries\">\r\n    <!-- <div class=\"skillEntry\" *ngFor=\"let skill of skillGroup.skills\"> -->\r\n      <div class=\"skillEntry\" *ngFor=\"let skill of skillGroup.skills | MatchesSearchTerm:talentSearchTerm\">\r\n    <!-- <mat-grid-list [cols]=\"breakpoint\" rowHeight=\"80px\"> -->\r\n      <!-- <mat-grid-tile *ngFor=\"let skill of skillGroup.skills\" colspan=\"1\" rowspan=\"1\" > -->\r\n        \r\n        <talent-card [skill]=\"skill\"></talent-card>\r\n      <!-- </mat-grid-tile> -->\r\n    <!-- </div> -->\r\n    <!-- </mat-grid-list> -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/talent-search/talent-search.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/talent-search/talent-search.component.ts ***!
  \**********************************************************/
/*! exports provided: TalentSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalentSearchComponent", function() { return TalentSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TalentSearchComponent = /** @class */ (function () {
    function TalentSearchComponent() {
    }
    TalentSearchComponent.prototype.ngOnInit = function () {
    };
    TalentSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'talent-search',
            template: __webpack_require__(/*! ./talent-search.component.html */ "./src/app/talent-search/talent-search.component.html"),
            styles: [__webpack_require__(/*! ./talent-search.component.css */ "./src/app/talent-search/talent-search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TalentSearchComponent);
    return TalentSearchComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\michel\jsWorkspace\table-top-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map