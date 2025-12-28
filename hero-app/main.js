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

module.exports = ".navButton {\n  width: 100%;\n  text-align: left;\n}\n\n.navIcon {\n  font-size: 20px;\n}\n\n#adminContent {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n#adminMenu {\n  position: fixed;\n  z-index: 100;\n}\n\n#appContent {\n  margin-top: 4rem;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tb3ZlcnZpZXcvYWRtaW4tb3ZlcnZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1vdmVydmlldy9hZG1pbi1vdmVydmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdkJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubmF2SWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI2FkbWluQ29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jYWRtaW5NZW51IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbiNhcHBDb250ZW50IHtcbiAgbWFyZ2luLXRvcDogNHJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/admin-overview/admin-overview.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin-overview/admin-overview.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<remote-control #remoteControlMaster></remote-control>\n<remote-control-receiver></remote-control-receiver>\n<div id=\"adminContent\">\n  <div id=\"adminMenu\">\n    <button class=\"comic-shadow\" (click)=\"showHeroes()\">Heroes</button>\n    <button class=\"comic-shadow\" (click)=\"remoteControlMaster.sendImage('')\">\n      Images\n    </button>\n    <button class=\"comic-shadow\" (click)=\"startFight()\">Fight</button>\n    <button class=\"comic-shadow\" (click)=\"startTimer()\">Timer</button>\n  </div>\n  <div id=\"appContent\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

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
    AdminOverviewComponent.prototype.showHeroes = function () {
        this.router.navigate(['master/heroes']);
    };
    AdminOverviewComponent.prototype.startTimer = function () {
        this.router.navigate(['master/startTimer']);
    };
    AdminOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-overview',
            template: __webpack_require__(/*! ./admin-overview.component.html */ "./src/app/admin-overview/admin-overview.component.html"),
            providers: [_domain_adventure_service__WEBPACK_IMPORTED_MODULE_1__["AdventureService"]],
            styles: [__webpack_require__(/*! ./admin-overview.component.css */ "./src/app/admin-overview/admin-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_domain_adventure_service__WEBPACK_IMPORTED_MODULE_1__["AdventureService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminOverviewComponent);
    return AdminOverviewComponent;
}());



/***/ }),

/***/ "./src/app/admin-timer/admin-timer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin-timer/admin-timer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXRpbWVyL2FkbWluLXRpbWVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin-timer/admin-timer.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin-timer/admin-timer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"padded flex-col center\" *ngIf=\"timer.running === false\">\n  <h1 class=\"\">Timer setzen</h1>\n  <div class=\"flex-col center\">\n    <h3>Presets</h3>\n    <div class=\"flex-row\">\n      <button (click)=\"setTimer('Kurze Bedenkzeit', 0, 15)\">Preset Kurz</button>\n      <button (click)=\"setTimer('Lange Bedenkzeit', 5, 0)\">Preset Lang</button>\n    </div>\n    <h3>Settings</h3>\n    <input [(ngModel)]=\"timer.title\" />\n    <span>Minuten</span>\n    <div class=\"flex-row\">\n      <input [(ngModel)]=\"timer.minutes\" />\n      <button (click)=\"addToTimerMinutes(1)\">\n        <i class=\"fa fa-plus\"></i>\n      </button>\n      <button\n        (click)=\"subtractFromTimerMinutes(1)\"\n        [class.disabled]=\"timer.minutes < 1\"\n      >\n        <i class=\"fa fa-minus\"></i>\n      </button>\n    </div>\n\n    <span>Sekunden</span>\n    <div class=\"flex-row\">\n      <input [(ngModel)]=\"timer.seconds\" />\n      <button (click)=\"addToTimerSeconds(1)\">\n        <i class=\"fa fa-plus\"></i>\n      </button>\n      <button\n        (click)=\"subtractFromTimerSeconds(1)\"\n        [class.disabled]=\"timer.seconds < 1\"\n      >\n        <i class=\"fa fa-minus\"></i>\n      </button>\n    </div>\n    <h3>Go</h3>\n    <button (click)=\"startTimer()\">Timer starten</button>\n  </div>\n</div>\n<div class=\"padded flex-col center\" *ngIf=\"timer.running === true\">\n  <h3>Timer \"{{ timer.title }}\"</h3>\n\n  <h4>{{ timeRemaining.minutes }}:{{ timeRemaining.secondsString }}</h4>\n  <button (click)=\"stopTimer()\">Sie sind fertig!</button>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-timer/admin-timer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-timer/admin-timer.component.ts ***!
  \******************************************************/
/*! exports provided: AdminTimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTimerComponent", function() { return AdminTimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_domain_timer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/domain/timer.service */ "./src/app/domain/timer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminTimerComponent = /** @class */ (function () {
    function AdminTimerComponent(timerService, timer) {
        this.timerService = timerService;
        this.timer = timer;
        this.timer = timerService.timer;
        this.timeRemaining = timerService.timeRemaining;
    }
    AdminTimerComponent.prototype.ngOnInit = function () {
    };
    AdminTimerComponent.prototype.addToTimerMinutes = function (minutes) {
        this.timer.minutes += minutes;
    };
    AdminTimerComponent.prototype.addToTimerSeconds = function (seconds) {
        this.timer.seconds += seconds;
    };
    AdminTimerComponent.prototype.subtractFromTimerMinutes = function (minutes) {
        this.timer.minutes -= minutes;
    };
    AdminTimerComponent.prototype.subtractFromTimerSeconds = function (seconds) {
        this.timer.seconds -= seconds;
    };
    AdminTimerComponent.prototype.setTimer = function (title, minutes, seconds) {
        this.timer.title = title,
            this.timer.minutes = minutes;
        this.timer.seconds = seconds;
    };
    AdminTimerComponent.prototype.startTimer = function () {
        this.timerService.startTimer();
    };
    AdminTimerComponent.prototype.stopTimer = function () {
        this.timerService.clearTimer();
    };
    AdminTimerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-timer',
            template: __webpack_require__(/*! ./admin-timer.component.html */ "./src/app/admin-timer/admin-timer.component.html"),
            styles: [__webpack_require__(/*! ./admin-timer.component.css */ "./src/app/admin-timer/admin-timer.component.css")]
        }),
        __metadata("design:paramtypes", [app_domain_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"], app_domain_timer_service__WEBPACK_IMPORTED_MODULE_1__["Timer"]])
    ], AdminTimerComponent);
    return AdminTimerComponent;
}());



/***/ }),

/***/ "./src/app/adventure-display/adventure-display.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/adventure-display/adventure-display.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sectionContainer {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  /* border: 1px solid #ccc; */\n  padding: 0.5rem;\n}\n\n.sectionContainer.border {\n  border-color: #ccc;\n}\n\n.adventureItemContainer,\n.adventureItem {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.adventureItem.image {\n  flex-direction: column-reverse;\n}\n\n.connector {\n  width: 1px;\n  height: 4rem;\n  border-color: #ccc;\n}\n\n.title {\n  z-index: 10;\n  margin-top: -10px;\n  margin-bottom: -10px;\n  padding: 1rem 0.5rem;\n  text-align: center;\n  background-color: white;\n}\n\n.image .title {\n  background-color: #666;\n  color: white;\n}\n\n.character .imageContainer {\n  width: 7rem;\n  height: 7rem;\n  border-radius: 50%;\n  overflow: hidden;\n  position: relative;\n}\n\n.character img {\n  position: absolute;\n  width: 7rem;\n}\n\n.image img {\n  max-width: 10rem;\n  max-height: 10rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWR2ZW50dXJlLWRpc3BsYXkvYWR2ZW50dXJlLWRpc3BsYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsNEJBQTRCO0VBQzVCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FkdmVudHVyZS1kaXNwbGF5L2FkdmVudHVyZS1kaXNwbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbkNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7ICovXG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuLnNlY3Rpb25Db250YWluZXIuYm9yZGVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xufVxuXG4uYWR2ZW50dXJlSXRlbUNvbnRhaW5lcixcbi5hZHZlbnR1cmVJdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFkdmVudHVyZUl0ZW0uaW1hZ2Uge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG59XG5cbi5jb25uZWN0b3Ige1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDRyZW07XG4gIGJvcmRlci1jb2xvcjogI2NjYztcbn1cblxuLnRpdGxlIHtcbiAgei1pbmRleDogMTA7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgcGFkZGluZzogMXJlbSAwLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5pbWFnZSAudGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jaGFyYWN0ZXIgLmltYWdlQ29udGFpbmVyIHtcbiAgd2lkdGg6IDdyZW07XG4gIGhlaWdodDogN3JlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jaGFyYWN0ZXIgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogN3JlbTtcbn1cblxuLmltYWdlIGltZyB7XG4gIG1heC13aWR0aDogMTByZW07XG4gIG1heC1oZWlnaHQ6IDEwcmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/adventure-display/adventure-display.component.html":
/*!********************************************************************!*\
  !*** ./src/app/adventure-display/adventure-display.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"adventureItemContainer flex-col center\"\n  *ngFor=\"let element of elements\"\n>\n  <div class=\"border-dashed connector\" height=\"100px\"></div>\n  <div\n    *ngIf=\"element.type !== 'section'\"\n    class=\"adventureItem {{ element.type }}\"\n    (click)=\"showItem(element)\"\n  >\n    <div class=\"imageContainer no-border\">\n      <img src=\"{{ element.imageUrl }}\" class=\"no-border\" />\n    </div>\n    <div class=\"border title\">\n      {{ element.title }}\n    </div>\n  </div>\n  <div class=\"sectionContainer\" *ngIf=\"element.type === 'section'\">\n    <div\n      *ngFor=\"let sectionElement of element.elements\"\n      class=\"adventureItem {{ sectionElement.type }}\"\n      (click)=\"showItem(sectionElement)\"\n    >\n      <div class=\"imageContainer border\">\n        <img src=\"{{ sectionElement.imageUrl }}\" class=\"no-border\" />\n      </div>\n      <div class=\"border title\">\n        {{ sectionElement.title }}\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/adventure-display/adventure-display.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/adventure-display/adventure-display.component.ts ***!
  \******************************************************************/
/*! exports provided: AdventureDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdventureDisplayComponent", function() { return AdventureDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_domain_adventure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/domain/adventure.service */ "./src/app/domain/adventure.service.ts");
/* harmony import */ var app_image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/image-popup/image-popup.component */ "./src/app/image-popup/image-popup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdventureDisplayComponent = /** @class */ (function () {
    function AdventureDisplayComponent(adventureService, dialog) {
        var _this = this;
        this.adventureService = adventureService;
        this.dialog = dialog;
        this._adventure = null;
        adventureService.getAdventures().then(function (adventures) { _this._adventure = adventures[0]; });
    }
    AdventureDisplayComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(AdventureDisplayComponent.prototype, "adventure", {
        get: function () {
            return this._adventure;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdventureDisplayComponent.prototype, "elements", {
        get: function () {
            if (this._adventure)
                return this._adventure.elements;
            else
                return [];
        },
        enumerable: true,
        configurable: true
    });
    AdventureDisplayComponent.prototype.showItem = function (element) {
        var dialogRef = this.dialog.open(app_image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_3__["ImagePopupComponent"], {
            // width: '90%',
            maxHeight: '100%',
            height: '90%',
            data: {
                url: element.imageUrl,
                caption: element.title
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", app_domain_adventure_service__WEBPACK_IMPORTED_MODULE_2__["Adventure"]),
        __metadata("design:paramtypes", [])
    ], AdventureDisplayComponent.prototype, "adventure", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [])
    ], AdventureDisplayComponent.prototype, "elements", null);
    AdventureDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'adventure-display',
            template: __webpack_require__(/*! ./adventure-display.component.html */ "./src/app/adventure-display/adventure-display.component.html"),
            styles: [__webpack_require__(/*! ./adventure-display.component.css */ "./src/app/adventure-display/adventure-display.component.css")]
        }),
        __metadata("design:paramtypes", [app_domain_adventure_service__WEBPACK_IMPORTED_MODULE_2__["AdventureService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], AdventureDisplayComponent);
    return AdventureDisplayComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.pageContainer {\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;/*\n\talign-items: center;*/\n}\n\n.wrapper {\n\theight: 100%;\n}\n\n.toolbarCenter {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\n.logo {\n\twidth: 40px;\n}\n\nh1 {\n\tcolor: #999;\n\tfont-size: 1rem;\n\tmargin: 5px;\n}\n\n#appMenuButton {\n\tposition: fixed;\n\ttop:20px;\n\tleft:calc(50%);\n\tmargin-left: -10px;\n\tbackground-color: #ccc;\n}\n\n.padded {\n\tpadding: 20px;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCLENBQUM7c0JBQ0g7QUFDdEI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBR0E7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsV0FBVztBQUNaOztBQUVBO0NBQ0MsZUFBZTtDQUNmLFFBQVE7Q0FDUixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGFBQWE7RUFDWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucGFnZUNvbnRhaW5lciB7XG5cdHdpZHRoOiAxMDAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsvKlxuXHRhbGlnbi1pdGVtczogY2VudGVyOyovXG59XG5cbi53cmFwcGVyIHtcblx0aGVpZ2h0OiAxMDAlO1xufVxuXG5cbi50b29sYmFyQ2VudGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ28ge1xuXHR3aWR0aDogNDBweDtcbn1cblxuaDEge1xuXHRjb2xvcjogIzk5OTtcblx0Zm9udC1zaXplOiAxcmVtO1xuXHRtYXJnaW46IDVweDtcbn1cblxuI2FwcE1lbnVCdXR0b24ge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHRvcDoyMHB4O1xuXHRsZWZ0OmNhbGMoNTAlKTtcblx0bWFyZ2luLWxlZnQ6IC0xMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4ucGFkZGVkIHtcblx0cGFkZGluZzogMjBweDtcbiAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-content container\">\n  <div class=\"wrapper\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

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
/* harmony import */ var _domain_adventure_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domain/adventure.service */ "./src/app/domain/adventure.service.ts");
/* harmony import */ var _domain_armor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domain/armor.service */ "./src/app/domain/armor.service.ts");
/* harmony import */ var _domain_attribute_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domain/attribute.service */ "./src/app/domain/attribute.service.ts");
/* harmony import */ var _domain_hero_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domain/hero.service */ "./src/app/domain/hero.service.ts");
/* harmony import */ var _domain_inventory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domain/inventory.service */ "./src/app/domain/inventory.service.ts");
/* harmony import */ var _domain_skills_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domain/skills.service */ "./src/app/domain/skills.service.ts");
/* harmony import */ var _domain_spells_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./domain/spells.service */ "./src/app/domain/spells.service.ts");
/* harmony import */ var _domain_timer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./domain/timer.service */ "./src/app/domain/timer.service.ts");
/* harmony import */ var _domain_weapons_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./domain/weapons.service */ "./src/app/domain/weapons.service.ts");
/* harmony import */ var _hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hero-controls/hero-life.service */ "./src/app/hero-controls/hero-life.service.ts");
/* harmony import */ var _remote_control_receiver_remote_control_receiver_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./remote-control-receiver/remote-control-receiver.service */ "./src/app/remote-control-receiver/remote-control-receiver.service.ts");
/* harmony import */ var _remote_control_remote_control_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./remote-control/remote-control.service */ "./src/app/remote-control/remote-control.service.ts");
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
            providers: [_domain_hero_service__WEBPACK_IMPORTED_MODULE_4__["HeroService"], _domain_attribute_service__WEBPACK_IMPORTED_MODULE_3__["AttributeService"], _hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_10__["HeroLifeService"], _domain_skills_service__WEBPACK_IMPORTED_MODULE_6__["SkillService"], _domain_spells_service__WEBPACK_IMPORTED_MODULE_7__["SpellService"], _domain_weapons_service__WEBPACK_IMPORTED_MODULE_9__["WeaponService"], _domain_armor_service__WEBPACK_IMPORTED_MODULE_2__["ArmorService"], _domain_inventory_service__WEBPACK_IMPORTED_MODULE_5__["InventoryService"], _remote_control_receiver_remote_control_receiver_service__WEBPACK_IMPORTED_MODULE_11__["RemoteControlReceiverService"], _remote_control_remote_control_service__WEBPACK_IMPORTED_MODULE_12__["RemoteControlService"], _domain_adventure_service__WEBPACK_IMPORTED_MODULE_1__["AdventureService"], _domain_timer_service__WEBPACK_IMPORTED_MODULE_8__["TimerService"], _domain_timer_service__WEBPACK_IMPORTED_MODULE_8__["Timer"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_domain_hero_service__WEBPACK_IMPORTED_MODULE_4__["HeroService"], _domain_attribute_service__WEBPACK_IMPORTED_MODULE_3__["AttributeService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _admin_overview_admin_overview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-overview/admin-overview.component */ "./src/app/admin-overview/admin-overview.component.ts");
/* harmony import */ var _admin_timer_admin_timer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin-timer/admin-timer.component */ "./src/app/admin-timer/admin-timer.component.ts");
/* harmony import */ var _adventure_display_adventure_display_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./adventure-display/adventure-display.component */ "./src/app/adventure-display/adventure-display.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _attributes_display_attributes_display_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./attributes-display/attributes-display.component */ "./src/app/attributes-display/attributes-display.component.ts");
/* harmony import */ var _basic_data_display_basic_data_display_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./basic-data-display/basic-data-display.component */ "./src/app/basic-data-display/basic-data-display.component.ts");
/* harmony import */ var _choose_image_choose_image_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./choose-image/choose-image.component */ "./src/app/choose-image/choose-image.component.ts");
/* harmony import */ var _combat_data_display_combat_data_display_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./combat-data-display/combat-data-display.component */ "./src/app/combat-data-display/combat-data-display.component.ts");
/* harmony import */ var _combatant_combatant_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./combatant/combatant.component */ "./src/app/combatant/combatant.component.ts");
/* harmony import */ var _confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./confirm-deletion/confirm-deletion.component */ "./src/app/confirm-deletion/confirm-deletion.component.ts");
/* harmony import */ var _confirmation_sheet_confirmation_sheet_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./confirmation-sheet/confirmation-sheet.component */ "./src/app/confirmation-sheet/confirmation-sheet.component.ts");
/* harmony import */ var _detail_navigation_detail_navigation_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./detail-navigation/detail-navigation.component */ "./src/app/detail-navigation/detail-navigation.component.ts");
/* harmony import */ var _domain_fight__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./domain/fight */ "./src/app/domain/fight.ts");
/* harmony import */ var _edit_attribute_edit_attribute_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./edit-attribute/edit-attribute.component */ "./src/app/edit-attribute/edit-attribute.component.ts");
/* harmony import */ var _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./edit-dialog/edit-dialog.component */ "./src/app/edit-dialog/edit-dialog.component.ts");
/* harmony import */ var _edit_money_edit_money_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./edit-money/edit-money.component */ "./src/app/edit-money/edit-money.component.ts");
/* harmony import */ var _edit_talent_edit_talent_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./edit-talent/edit-talent.component */ "./src/app/edit-talent/edit-talent.component.ts");
/* harmony import */ var _experience_addition_experience_addition_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./experience-addition/experience-addition.component */ "./src/app/experience-addition/experience-addition.component.ts");
/* harmony import */ var _experience_display_experience_display_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./experience-display/experience-display.component */ "./src/app/experience-display/experience-display.component.ts");
/* harmony import */ var _fight_display_fight_display_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./fight-display/fight-display.component */ "./src/app/fight-display/fight-display.component.ts");
/* harmony import */ var _fight_setup_fight_setup_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./fight-setup/fight-setup.component */ "./src/app/fight-setup/fight-setup.component.ts");
/* harmony import */ var _hero_card_hero_card_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./hero-card/hero-card.component */ "./src/app/hero-card/hero-card.component.ts");
/* harmony import */ var _hero_controls_hero_controls_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./hero-controls/hero-controls.component */ "./src/app/hero-controls/hero-controls.component.ts");
/* harmony import */ var _herodetail_hero_detail_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./herodetail/hero-detail.component */ "./src/app/herodetail/hero-detail.component.ts");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./heroes/heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./image-popup/image-popup.component */ "./src/app/image-popup/image-popup.component.ts");
/* harmony import */ var _inventory_display_inventory_display_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./inventory-display/inventory-display.component */ "./src/app/inventory-display/inventory-display.component.ts");
/* harmony import */ var _life_display_life_display_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./life-display/life-display.component */ "./src/app/life-display/life-display.component.ts");
/* harmony import */ var _magic_display_magic_display_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./magic-display/magic-display.component */ "./src/app/magic-display/magic-display.component.ts");
/* harmony import */ var _master_master_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./master/master.component */ "./src/app/master/master.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _remote_control_receiver_remote_control_receiver_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./remote-control-receiver/remote-control-receiver.component */ "./src/app/remote-control-receiver/remote-control-receiver.component.ts");
/* harmony import */ var _remote_control_remote_control_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./remote-control/remote-control.component */ "./src/app/remote-control/remote-control.component.ts");
/* harmony import */ var _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./scroll-spy.directive */ "./src/app/scroll-spy.directive.ts");
/* harmony import */ var _spell_card_spell_card_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./spell-card/spell-card.component */ "./src/app/spell-card/spell-card.component.ts");
/* harmony import */ var _spell_search_spell_search_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./spell-search/spell-search.component */ "./src/app/spell-search/spell-search.component.ts");
/* harmony import */ var _spell_search_spell_pipe__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./spell-search/spell.pipe */ "./src/app/spell-search/spell.pipe.ts");
/* harmony import */ var _talent_card_talent_card_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./talent-card/talent-card.component */ "./src/app/talent-card/talent-card.component.ts");
/* harmony import */ var _talent_search_skill_pipe__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./talent-search/skill.pipe */ "./src/app/talent-search/skill.pipe.ts");
/* harmony import */ var _talent_search_talent_search_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./talent-search/talent-search.component */ "./src/app/talent-search/talent-search.component.ts");
/* harmony import */ var _timer_dialog_timer_dialog_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./timer-dialog/timer-dialog.component */ "./src/app/timer-dialog/timer-dialog.component.ts");
/* harmony import */ var _edit_spell_edit_spell_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./edit-spell/edit-spell.component */ "./src/app/edit-spell/edit-spell.component.ts");
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
        path: 'master', component: _admin_overview_admin_overview_component__WEBPACK_IMPORTED_MODULE_12__["AdminOverviewComponent"],
        children: [
            { path: 'adventure', component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_36__["HeroesComponent"] },
            { path: 'heroes', component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_36__["HeroesComponent"] },
            { path: 'hero/:id', component: _herodetail_hero_detail_component__WEBPACK_IMPORTED_MODULE_35__["HeroDetailComponent"] },
            { path: 'fight/start', component: _fight_setup_fight_setup_component__WEBPACK_IMPORTED_MODULE_32__["FightSetupComponent"] },
            { path: 'startTimer', component: _admin_timer_admin_timer_component__WEBPACK_IMPORTED_MODULE_13__["AdminTimerComponent"] }
        ]
    },
    {
        path: 'player', component: _player_player_component__WEBPACK_IMPORTED_MODULE_43__["PlayerComponent"],
        children: [
            {
                path: 'heroes',
                component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_36__["HeroesComponent"]
            },
            {
                path: 'hero/:id',
                component: _herodetail_hero_detail_component__WEBPACK_IMPORTED_MODULE_35__["HeroDetailComponent"]
            },
            {
                path: 'hero/:id/editStuff',
                component: _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_26__["EditDialogComponent"]
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
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes, {
                    scrollPositionRestoration: 'top',
                    initialNavigation: 'enabled'
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot({
                    timeOut: 3000,
                    positionClass: 'toast-bottom-right',
                    preventDuplicates: true,
                }),
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production })
            ],
            exports: [
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_36__["HeroesComponent"],
                _herodetail_hero_detail_component__WEBPACK_IMPORTED_MODULE_35__["HeroDetailComponent"],
                _hero_controls_hero_controls_component__WEBPACK_IMPORTED_MODULE_34__["HeroControls"],
                _hero_card_hero_card_component__WEBPACK_IMPORTED_MODULE_33__["HeroCard"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_42__["Menu"],
                _talent_card_talent_card_component__WEBPACK_IMPORTED_MODULE_50__["TalentCard"],
                _spell_card_spell_card_component__WEBPACK_IMPORTED_MODULE_47__["SpellCard"],
                _admin_overview_admin_overview_component__WEBPACK_IMPORTED_MODULE_12__["AdminOverviewComponent"],
                _fight_setup_fight_setup_component__WEBPACK_IMPORTED_MODULE_32__["FightSetupComponent"],
                _fight_display_fight_display_component__WEBPACK_IMPORTED_MODULE_31__["FightDisplayComponent"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatButton"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleGroup"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatButtonToggle"],
                _remote_control_remote_control_component__WEBPACK_IMPORTED_MODULE_45__["RemoteControlComponent"],
                _remote_control_receiver_remote_control_receiver_component__WEBPACK_IMPORTED_MODULE_44__["RemoteControlReceiverComponent"],
                _player_player_component__WEBPACK_IMPORTED_MODULE_43__["PlayerComponent"],
                _master_master_component__WEBPACK_IMPORTED_MODULE_41__["MasterComponent"],
                _image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_37__["ImagePopupComponent"],
                _choose_image_choose_image_component__WEBPACK_IMPORTED_MODULE_18__["ChooseImageComponent"],
                _life_display_life_display_component__WEBPACK_IMPORTED_MODULE_39__["LifeDisplayComponent"],
                _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_46__["ScrollSpyDirective"],
                _magic_display_magic_display_component__WEBPACK_IMPORTED_MODULE_40__["MagicDisplayComponent"],
                _talent_search_talent_search_component__WEBPACK_IMPORTED_MODULE_52__["TalentSearchComponent"],
                _talent_search_skill_pipe__WEBPACK_IMPORTED_MODULE_51__["MatchesTalentSearchTerm"],
                _talent_search_skill_pipe__WEBPACK_IMPORTED_MODULE_51__["MatchesTalentSearchTermChildren"],
                _spell_search_spell_pipe__WEBPACK_IMPORTED_MODULE_49__["MatchesSpellSearchTerm"],
                _spell_search_spell_pipe__WEBPACK_IMPORTED_MODULE_49__["MatchesSpellSearchTermChildren"],
                _detail_navigation_detail_navigation_component__WEBPACK_IMPORTED_MODULE_23__["DetailNavigationComponent"],
                _attributes_display_attributes_display_component__WEBPACK_IMPORTED_MODULE_16__["AttributesDisplayComponent"],
                _basic_data_display_basic_data_display_component__WEBPACK_IMPORTED_MODULE_17__["BasicDataDisplayComponent"],
                _combat_data_display_combat_data_display_component__WEBPACK_IMPORTED_MODULE_19__["CombatDataDisplayComponent"],
                _inventory_display_inventory_display_component__WEBPACK_IMPORTED_MODULE_38__["InventoryDisplayComponent"],
                _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_26__["EditDialogComponent"],
                _edit_attribute_edit_attribute_component__WEBPACK_IMPORTED_MODULE_25__["EditAttributeComponent"],
                _experience_display_experience_display_component__WEBPACK_IMPORTED_MODULE_30__["ExperienceDisplayComponent"],
                _spell_search_spell_search_component__WEBPACK_IMPORTED_MODULE_48__["SpellSearchComponent"],
                _edit_talent_edit_talent_component__WEBPACK_IMPORTED_MODULE_28__["EditTalentComponent"],
                _confirmation_sheet_confirmation_sheet_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmationSheetComponent"],
                _confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmDeletionComponent"],
                _experience_addition_experience_addition_component__WEBPACK_IMPORTED_MODULE_29__["ExperienceAdditionComponent"],
                _edit_money_edit_money_component__WEBPACK_IMPORTED_MODULE_27__["EditMoneyComponent"],
                _adventure_display_adventure_display_component__WEBPACK_IMPORTED_MODULE_14__["AdventureDisplayComponent"],
                _combatant_combatant_component__WEBPACK_IMPORTED_MODULE_20__["CombatantComponent"],
                _domain_fight__WEBPACK_IMPORTED_MODULE_24__["MatchesCombatantSearchTerm"],
                _domain_fight__WEBPACK_IMPORTED_MODULE_24__["IsGoodFighter"],
                _admin_timer_admin_timer_component__WEBPACK_IMPORTED_MODULE_13__["AdminTimerComponent"],
                _timer_dialog_timer_dialog_component__WEBPACK_IMPORTED_MODULE_53__["TimerDialogComponent"],
                _edit_spell_edit_spell_component__WEBPACK_IMPORTED_MODULE_54__["EditSpellComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]],
            providers: [{
                    provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
                    useValue: {}
                },
                { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"], useValue: {} }],
            entryComponents: [_image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_37__["ImagePopupComponent"], _choose_image_choose_image_component__WEBPACK_IMPORTED_MODULE_18__["ChooseImageComponent"], _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_26__["EditDialogComponent"], _confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmDeletionComponent"], _experience_addition_experience_addition_component__WEBPACK_IMPORTED_MODULE_29__["ExperienceAdditionComponent"], _edit_money_edit_money_component__WEBPACK_IMPORTED_MODULE_27__["EditMoneyComponent"], _timer_dialog_timer_dialog_component__WEBPACK_IMPORTED_MODULE_53__["TimerDialogComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/attributes-display/attributes-display.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/attributes-display/attributes-display.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-row {\n  margin: 0.2rem 0;\n  padding-bottom: 0.2rem;\n}\n\n.attributeLabel {\n  border: 1px solid #aaa;\n  display: flex;\n  background-color: #ffffff;\n  align-items: center;\n  padding: 4px 0;\n  justify-content: center;\n}\n\n.value {\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  background-color: rgba(255, 255, 250, 0.8);\n}\n\n.attribute {\n  width: 35px;\n  /* padding: 5px; */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXR0cmlidXRlcy1kaXNwbGF5L2F0dHJpYnV0ZXMtZGlzcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2F0dHJpYnV0ZXMtZGlzcGxheS9hdHRyaWJ1dGVzLWRpc3BsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LXJvdyB7XG4gIG1hcmdpbjogMC4ycmVtIDA7XG4gIHBhZGRpbmctYm90dG9tOiAwLjJyZW07XG59XG5cbi5hdHRyaWJ1dGVMYWJlbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDRweCAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnZhbHVlIHtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjUwLCAwLjgpO1xufVxuXG4uYXR0cmlidXRlIHtcbiAgd2lkdGg6IDM1cHg7XG4gIC8qIHBhZGRpbmc6IDVweDsgKi9cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/attributes-display/attributes-display.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/attributes-display/attributes-display.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Grid-cell padded\">\n  <div class=\"attributesContainer flex-col\">\n    <div *ngFor=\"let attribute of hero.attributes; index as i; keyvalue\" class=\"flex-row borderBottom\">\n      <div class=\"label\">\n        <label>{{attribute.name}}</label>\n      </div>\n      <div class=\"flex-item\">{{attribute.value}}</div>\n      <!-- <div *ngIf=\"editMode\" class=\"editValue\"><input [value]=\"attribute.value\" /></div> -->\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/attributes-display/attributes-display.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/attributes-display/attributes-display.component.ts ***!
  \********************************************************************/
/*! exports provided: AttributesDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributesDisplayComponent", function() { return AttributesDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../domain/hero */ "./src/app/domain/hero.ts");
/* harmony import */ var _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../edit-dialog/edit-dialog.component */ "./src/app/edit-dialog/edit-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AttributesDisplayComponent = /** @class */ (function () {
    function AttributesDisplayComponent(editDialog) {
        this.editDialog = editDialog;
        this.editMode = false;
    }
    AttributesDisplayComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _domain_hero__WEBPACK_IMPORTED_MODULE_1__["Hero"])
    ], AttributesDisplayComponent.prototype, "hero", void 0);
    AttributesDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'attributes-display',
            providers: [_edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_2__["EditDialogComponent"]],
            template: __webpack_require__(/*! ./attributes-display.component.html */ "./src/app/attributes-display/attributes-display.component.html"),
            styles: [__webpack_require__(/*! ./attributes-display.component.css */ "./src/app/attributes-display/attributes-display.component.css")]
        }),
        __metadata("design:paramtypes", [_edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_2__["EditDialogComponent"]])
    ], AttributesDisplayComponent);
    return AttributesDisplayComponent;
}());



/***/ }),

/***/ "./src/app/basic-data-display/basic-data-display.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/basic-data-display/basic-data-display.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2ljLWRhdGEtZGlzcGxheS9iYXNpYy1kYXRhLWRpc3BsYXkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/basic-data-display/basic-data-display.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/basic-data-display/basic-data-display.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"propertiesContainer\">\n  <div class=\"padded\">\n    <div class=\"flex-row\">\n      <div class=\"label\">\n        <label>Rasse: </label>\n      </div>\n      <div class=\"value\">{{ hero.race.name }}</div>\n    </div>\n    <div class=\"flex-row\">\n      <div class=\"label\">\n        <label>Kultur: </label>\n      </div>\n      <div class=\"value\">{{ hero.culture }}</div>\n    </div>\n    <div class=\"flex-row\">\n      <div class=\"label\">\n        <label>Sozialrang: </label>\n      </div>\n      <div class=\"value\">{{ hero.social_rank }}</div>\n    </div>\n    <div class=\"flex-row\">\n      <div class=\"label\">\n        <label>Größe: </label>\n      </div>\n      <div class=\"value\">{{ hero.size }}</div>\n    </div>\n    <div class=\"flex-row\">\n      <div class=\"label\">\n        <label>Gewicht: </label>\n      </div>\n      <div class=\"value\">{{ hero.weight }}</div>\n    </div>\n    <div class=\"flex-row\">\n      <div class=\"label\">\n        <label>Haarfarbe: </label>\n      </div>\n      <div class=\"value\">{{ hero.hairColor }}</div>\n    </div>\n    <div class=\"flex-row\">\n      <div class=\"label\">\n        <label>Augenfarbe: </label>\n      </div>\n      <div class=\"value\">{{ hero.eyeColor }}</div>\n    </div>\n    <div class=\"flex-row\">\n      <div class=\"label\">\n        <label>Magieresistenz: </label>\n      </div>\n      <div class=\"value\">{{ hero.magieresistenz }}</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/basic-data-display/basic-data-display.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/basic-data-display/basic-data-display.component.ts ***!
  \********************************************************************/
/*! exports provided: BasicDataDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicDataDisplayComponent", function() { return BasicDataDisplayComponent; });
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


var BasicDataDisplayComponent = /** @class */ (function () {
    function BasicDataDisplayComponent() {
    }
    BasicDataDisplayComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", app_domain_hero__WEBPACK_IMPORTED_MODULE_1__["Hero"])
    ], BasicDataDisplayComponent.prototype, "hero", void 0);
    BasicDataDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'basic-data-display',
            template: __webpack_require__(/*! ./basic-data-display.component.html */ "./src/app/basic-data-display/basic-data-display.component.html"),
            styles: [__webpack_require__(/*! ./basic-data-display.component.css */ "./src/app/basic-data-display/basic-data-display.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicDataDisplayComponent);
    return BasicDataDisplayComponent;
}());



/***/ }),

/***/ "./src/app/choose-image/choose-image.component.css":
/*!*********************************************************!*\
  !*** ./src/app/choose-image/choose-image.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#imageSelector {\n    min-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hvb3NlLWltYWdlL2Nob29zZS1pbWFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY2hvb3NlLWltYWdlL2Nob29zZS1pbWFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ltYWdlU2VsZWN0b3Ige1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/choose-image/choose-image.component.html":
/*!**********************************************************!*\
  !*** ./src/app/choose-image/choose-image.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-select placeholder=\"Image\" #imageSelector>\n  <mat-option *ngFor=\"let image of images\" [value]=\"image\">\n    {{image.caption}}\n  </mat-option>\n</mat-select>\n<button mat-button class=\"navButton\" (click)=\"sendImage(imageSelector.value)\">Send</button>"

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
/* harmony import */ var app_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/url.service */ "./src/app/url.service.ts");
/* harmony import */ var _domain_adventure_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../domain/adventure.service */ "./src/app/domain/adventure.service.ts");
/* harmony import */ var _domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../domain/remoteControlOperation */ "./src/app/domain/remoteControlOperation.ts");
/* harmony import */ var _remote_control_remote_control_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../remote-control/remote-control.service */ "./src/app/remote-control/remote-control.service.ts");
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
        this.baseUrl = app_url_service__WEBPACK_IMPORTED_MODULE_2__["UrlService"].getBaseUrl();
    }
    ChooseImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adventureService.getAdventures().then(function (adventures) {
            _this.adventures = adventures;
            _this.adventures.forEach(function (adventure) {
                // this.images = this.images.concat(adventure.elements)
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
            providers: [_domain_adventure_service__WEBPACK_IMPORTED_MODULE_3__["AdventureService"], _remote_control_remote_control_service__WEBPACK_IMPORTED_MODULE_5__["RemoteControlService"]],
            styles: [__webpack_require__(/*! ./choose-image.component.css */ "./src/app/choose-image/choose-image.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_domain_adventure_service__WEBPACK_IMPORTED_MODULE_3__["AdventureService"],
            _remote_control_remote_control_service__WEBPACK_IMPORTED_MODULE_5__["RemoteControlService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            ImagePopupData])
    ], ChooseImageComponent);
    return ChooseImageComponent;
}());



/***/ }),

/***/ "./src/app/combat-data-display/combat-data-display.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/combat-data-display/combat-data-display.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".weaponEntry {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  flex-wrap: wrap;\n  font-size: 0.8rem;\n  align-items: center;\n  justify-content: stretch;\n}\n\n.weaponName {\n  margin-right: 1rem;\n}\n\n.weaponDices {\n  font-weight: 600;\n}\n\n.form-group .paper-check input + span,\n.form-group .paper-radio input + span {\n  display: flex;\n}\n\n.currentValues {\n  font-weight: 700;\n  padding: 1rem 0;\n}\n\n.currentValues label {\n  /* background-color: #fff; */\n  /* min-width: 4rem; */\n  margin-right: 1rem;\n}\n\n.armor-entry,\n.weapon-entry {\n  padding: 0.875rem;\n}\n\n.currentValues span {\n  margin-right: 3rem;\n}\n\n.currentValues.flex-col {\n  /* background-color: #fffffa; */\n  font-size: x-large;\n  justify-content: flex-start;\n  min-width: 400px;\n}\n\n.kampfwerte {\n  background-image: url(\"/assets/fight-icon.png\");\n  /* background-image: url(\"/assets/hero-background_desaturated.jpg\"); */\n  background-size: 5.5rem;\n  padding-top: 4rem;\n  background-position: top center;\n  background-repeat: no-repeat;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tYmF0LWRhdGEtZGlzcGxheS9jb21iYXQtZGF0YS1kaXNwbGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwrQ0FBK0M7RUFDL0Msc0VBQXNFO0VBQ3RFLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbWJhdC1kYXRhLWRpc3BsYXkvY29tYmF0LWRhdGEtZGlzcGxheS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlYXBvbkVudHJ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbn1cblxuLndlYXBvbk5hbWUge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi53ZWFwb25EaWNlcyB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5mb3JtLWdyb3VwIC5wYXBlci1jaGVjayBpbnB1dCArIHNwYW4sXG4uZm9ybS1ncm91cCAucGFwZXItcmFkaW8gaW5wdXQgKyBzcGFuIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmN1cnJlbnRWYWx1ZXMge1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAxcmVtIDA7XG59XG5cbi5jdXJyZW50VmFsdWVzIGxhYmVsIHtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgKi9cbiAgLyogbWluLXdpZHRoOiA0cmVtOyAqL1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi5hcm1vci1lbnRyeSxcbi53ZWFwb24tZW50cnkge1xuICBwYWRkaW5nOiAwLjg3NXJlbTtcbn1cblxuLmN1cnJlbnRWYWx1ZXMgc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogM3JlbTtcbn1cblxuLmN1cnJlbnRWYWx1ZXMuZmxleC1jb2wge1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZhOyAqL1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWluLXdpZHRoOiA0MDBweDtcbn1cblxuLmthbXBmd2VydGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ZpZ2h0LWljb24ucG5nXCIpO1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2hlcm8tYmFja2dyb3VuZF9kZXNhdHVyYXRlZC5qcGdcIik7ICovXG4gIGJhY2tncm91bmQtc2l6ZTogNS41cmVtO1xuICBwYWRkaW5nLXRvcDogNHJlbTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/combat-data-display/combat-data-display.component.html":
/*!************************************************************************!*\
  !*** ./src/app/combat-data-display/combat-data-display.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kampfwerte flex-item flex-col flex-top\">\n  <div class=\"padded flex-item flex-col\">\n    <h4>Basiswerte</h4>\n\n    <div class=\"flex-row\">\n      <div class=\"flex-item\">\n        <label class=\"long\">Attacke:&nbsp;</label> {{ hero.attack_basis }}\n      </div>\n      <div class=\"flex-item\">\n        <label class=\"long\">Parade:&nbsp;</label> {{ hero.parade_basis }}\n      </div>\n      <div class=\"flex-item\">\n        <label class=\"long\">Fernkampf:&nbsp;</label> {{ hero.fernkampf_basis }}\n      </div>\n      <div class=\"flex-item\">\n        <label class=\"long\">Initiative:&nbsp;</label> {{ hero.initiative }}\n      </div>\n    </div>\n  </div>\n  <div class=\"padded flex-item flex-col\">\n    <h4>Aktuelle Werte</h4>\n    <div class=\"flex-col\">\n\n      <div class=\"currentValues flex-item flex-row \" *ngIf=\"hero.currentWeapon && hero.currentWeaponSkillIsMelee()\">\n        <div class=\"flex-row\">\n          <label>Attacke:&nbsp;</label><span class=\"currentValue\"> {{ hero.currentAttack }}</span>\n        </div>\n        <div class=\"flex-row\">\n          <label>Parade:&nbsp;</label><span class=\"currentValue\"> {{ hero.currentParade }}</span>\n        </div>\n        <div class=\"flex-row\">\n          <label>Trefferpunkte:&nbsp;</label><span class=\"currentValue\">\n            {{ hero.currentWeapon.damageDice }}W6+{{\n            hero.currentWeapon.damageAddPoints\n            }}</span>\n        </div>\n      </div>\n      <div class=\"currentValues flex-item flex-row\" *ngIf=\"hero.currentWeapon && hero.currentWeaponSkillIsLongRange()\">\n        <div class=\"flex-row\">\n          <label>Fernkampfwert:&nbsp;</label><span>{{ hero.currentLongRangeValue }}</span>\n        </div>\n        <div class=\"flex-row\">\n          <label>Trefferpunkte:&nbsp;</label>\n          <span>{{ hero.currentWeapon.damageDice }}W6+{{\n            hero.currentWeapon.damageAddPoints\n            }}</span>\n        </div>\n      </div>\n      <div class=\"currentValues flex-item flex-row\">\n        <label>Rüstungsschutz:&nbsp;</label><span class=\"currentValue\"> {{ hero.armorValue }}</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"flex-row Grid--top\">\n    <div class=\"padded flex-item flex-col\">\n      <h4>Waffen</h4>\n\n      <fieldset class=\"form-group\" *ngFor=\"let weapon of hero.weapons\">\n        <label class=\"paper-radio\">\n          <div class=\"flex-row border border-primary weapon-entry comic-shadow\">\n            <input type=\"radio\" name=\"selectedWeapon\" class=\"flex-item\"\n              [checked]=\"weapon.name === hero.currentWeapon.name\" value=\"{{ weapon.name }}\"\n              (change)=\"updateCurrentWeapon(weapon)\" />\n            <span class=\"weaponChoiceLabel flex-row\">\n              <div class=\"flex-row\">\n                <div class=\"weaponName\">{{ weapon.name }}</div>\n                <div class=\"weaponDices\">{{ weapon.damageText }}</div>\n              </div>\n            </span>\n          </div>\n        </label>\n      </fieldset>\n    </div>\n    <div class=\"padded flex-item flex-col \">\n      <h4>Rüstung</h4>\n\n      <fieldset class=\"form-group\" *ngFor=\"let armor of hero.armor\">\n        <label class=\"paper-radio\">\n          <div class=\"flex-row border border-6 armor-entry comic-shadow\">\n            <input type=\"checkbox\" name=\"selectedArmor\" class=\"flex-item\" [checked]=\"armor.isEquipped\"\n              value=\"{{ armor.name }}\" (change)=\"updateEquippedArmor(armor)\" />\n            <span class=\"weaponChoiceLabel flex-row\">\n              <div class=\"flex-row\">\n                <div class=\"weaponName\">{{ armor.name }}</div>\n                <div class=\"weaponDices\">{{ armor.rs }}</div>\n              </div>\n            </span>\n          </div>\n        </label>\n      </fieldset>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/combat-data-display/combat-data-display.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/combat-data-display/combat-data-display.component.ts ***!
  \**********************************************************************/
/*! exports provided: CombatDataDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombatDataDisplayComponent", function() { return CombatDataDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_domain_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/domain/hero */ "./src/app/domain/hero.ts");
/* harmony import */ var app_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/hero-controls/hero-life.service */ "./src/app/hero-controls/hero-life.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CombatDataDisplayComponent = /** @class */ (function () {
    function CombatDataDisplayComponent(service) {
        this.service = service;
    }
    CombatDataDisplayComponent.prototype.ngOnInit = function () {
    };
    CombatDataDisplayComponent.prototype.updateCurrentWeapon = function (weapon) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.service.sendUpate({
                heroId: _this.hero.id,
                type: 'setCurrentWeapon',
                weaponId: weapon.id
            });
            _this.hero.currentWeapon = weapon;
            resolve(weapon);
        });
    };
    CombatDataDisplayComponent.prototype.updateEquippedArmor = function (armor) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            armor.isEquipped = !armor.isEquipped;
            _this.service.sendUpate({
                heroId: _this.hero.id,
                type: 'equipArmor',
                weaponId: armor.id,
                isEquipped: armor.isEquipped
            });
            resolve(armor);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", app_domain_hero__WEBPACK_IMPORTED_MODULE_1__["Hero"])
    ], CombatDataDisplayComponent.prototype, "hero", void 0);
    CombatDataDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'combat-data-display',
            template: __webpack_require__(/*! ./combat-data-display.component.html */ "./src/app/combat-data-display/combat-data-display.component.html"),
            styles: [__webpack_require__(/*! ./combat-data-display.component.css */ "./src/app/combat-data-display/combat-data-display.component.css")]
        }),
        __metadata("design:paramtypes", [app_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_2__["HeroLifeService"]])
    ], CombatDataDisplayComponent);
    return CombatDataDisplayComponent;
}());



/***/ }),

/***/ "./src/app/combatant/combatant.component.css":
/*!***************************************************!*\
  !*** ./src/app/combatant/combatant.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  min-width: 15rem;\n  padding: 0.5rem;\n  margin-bottom: 1rem;\n}\n\n.wrapper.added {\n  background-color: #eee;\n}\n\n.wrapper.good {\n  background-color: aqua;\n  margin-left: -2rem;\n}\n\n.wrapper.evil {\n  background-color: coral;\n  margin-left: 2rem;\n}\n\n.isNextIndicator {\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 50%;\n  position: absolute;\n  top: -0.25rem;\n  left: -0.25rem;\n  background-color: blue;\n}\n\n.header {\n  min-width: 15rem;\n  display: flex;\n  position: relative;\n  justify-content: space-between;\n  font-size: 1.5rem;\n}\n\n.fightValues {\n  display: flex;\n  justify-content: space-between;\n}\n\n.actions {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.actions {\n  margin-top: -2rem;\n  min-height: 2rem;\n}\n\n.gotHitButton {\n  margin-top: 2rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tYmF0YW50L2NvbWJhdGFudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYztFQUNkLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tYmF0YW50L2NvbWJhdGFudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAxNXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ud3JhcHBlci5hZGRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG5cbi53cmFwcGVyLmdvb2Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICBtYXJnaW4tbGVmdDogLTJyZW07XG59XG4ud3JhcHBlci5ldmlsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29yYWw7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xufVxuXG4uaXNOZXh0SW5kaWNhdG9yIHtcbiAgd2lkdGg6IDAuNXJlbTtcbiAgaGVpZ2h0OiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0wLjI1cmVtO1xuICBsZWZ0OiAtMC4yNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuLmhlYWRlciB7XG4gIG1pbi13aWR0aDogMTVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmZpZ2h0VmFsdWVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYWN0aW9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hY3Rpb25zIHtcbiAgbWFyZ2luLXRvcDogLTJyZW07XG4gIG1pbi1oZWlnaHQ6IDJyZW07XG59XG5cbi5nb3RIaXRCdXR0b24ge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/combatant/combatant.component.html":
/*!****************************************************!*\
  !*** ./src/app/combatant/combatant.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"border wrapper\"\n  [class.added]=\"combatant.selectedForFight === true && isActive === false\"\n  [class.good]=\"combatant.isGood === true\"\n  [class.evil]=\"combatant.isGood === false\"\n>\n  <div class=\"header\">\n    <div class=\"isNextIndicator\" *ngIf=\"combatant.nextUp === true\"></div>\n    <div>{{ combatant.name }}</div>\n    <div>LE: {{ combatant.currentLife }}</div>\n  </div>\n  <div class=\"content\">\n    <div class=\"fightValues\">\n      <div *ngFor=\"let fightString of combatant.fightTexts\">\n        {{ fightString }}\n      </div>\n    </div>\n    <div>IN: {{ combatant.currentInitiative }}</div>\n  </div>\n  <div class=\"actions\">\n    <button\n      (click)=\"addToFight()\"\n      *ngIf=\"isActive === false && combatant.selectedForFight !== true\"\n    >\n      +\n    </button>\n    <button\n      (click)=\"removeFromFight()\"\n      *ngIf=\"isActive === false && combatant.selectedForFight !== false\"\n    >\n      -\n    </button>\n    <button\n      class=\"gotHitButton\"\n      (click)=\"gotHit(1)\"\n      *ngIf=\"isActive === true && combatant.isHero === false\"\n    >\n      -1\n    </button>\n    <button\n      class=\"gotHitButton\"\n      (click)=\"gotHit(5)\"\n      *ngIf=\"isActive === true && combatant.isHero === false\"\n    >\n      -5\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/combatant/combatant.component.ts":
/*!**************************************************!*\
  !*** ./src/app/combatant/combatant.component.ts ***!
  \**************************************************/
/*! exports provided: CombatantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombatantComponent", function() { return CombatantComponent; });
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

var CombatantComponent = /** @class */ (function () {
    function CombatantComponent() {
    }
    CombatantComponent.prototype.ngOnInit = function () {
    };
    CombatantComponent.prototype.addToFight = function () {
        this.combatant.selectedForFight = true;
        this.combatant.isGood = this.usedForGood;
    };
    CombatantComponent.prototype.removeFromFight = function () {
        this.combatant.selectedForFight = false;
        this.combatant.isGood = null;
    };
    CombatantComponent.prototype.gotHit = function (hitPoints) {
        this.combatant.currentLife = this.combatant.currentLife - hitPoints;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CombatantComponent.prototype, "combatant", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CombatantComponent.prototype, "usedForGood", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CombatantComponent.prototype, "sequence", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CombatantComponent.prototype, "isActive", void 0);
    CombatantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'combatant',
            template: __webpack_require__(/*! ./combatant.component.html */ "./src/app/combatant/combatant.component.html"),
            styles: [__webpack_require__(/*! ./combatant.component.css */ "./src/app/combatant/combatant.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CombatantComponent);
    return CombatantComponent;
}());



/***/ }),

/***/ "./src/app/confirm-deletion/confirm-deletion.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/confirm-deletion/confirm-deletion.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttonRow {\n    margin-top: 30px;\n    justify-content: flex-end;\n}\n\n.titleText {\n    margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlybS1kZWxldGlvbi9jb25maXJtLWRlbGV0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29uZmlybS1kZWxldGlvbi9jb25maXJtLWRlbGV0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uUm93IHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi50aXRsZVRleHQge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/confirm-deletion/confirm-deletion.component.html":
/*!******************************************************************!*\
  !*** ./src/app/confirm-deletion/confirm-deletion.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-col center\">\n  <h4><i class=\"fa fa-trash\"></i></h4>\n  <h4 class=\"titleText\">\n    {{ data.title }}\n  </h4>\n</div>\n<p innerHTML=\"{{ data.text }}\"></p>\n<div class=\"buttonRow row\">\n  <button (click)=\"raiseCancel()\">Nee, doch nicht</button>\n  <button class=\"background-danger\" (click)=\"raiseAccept()\">\n    <i class=\"fa fa-trash\"></i> Ja, natürlich\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/confirm-deletion/confirm-deletion.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/confirm-deletion/confirm-deletion.component.ts ***!
  \****************************************************************/
/*! exports provided: ConfirmDeletionComponent, ConfirmationData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDeletionComponent", function() { return ConfirmDeletionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationData", function() { return ConfirmationData; });
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


var ConfirmDeletionComponent = /** @class */ (function () {
    function ConfirmDeletionComponent(dialog, data) {
        this.dialog = dialog;
        this.data = data;
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ConfirmDeletionComponent.prototype.ngOnInit = function () {
    };
    ConfirmDeletionComponent.prototype.raiseAccept = function () {
        this.confirm.emit();
    };
    ConfirmDeletionComponent.prototype.raiseCancel = function () {
        this.cancel.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ConfirmDeletionComponent.prototype, "confirm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ConfirmDeletionComponent.prototype, "cancel", void 0);
    ConfirmDeletionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'confirm-deletion',
            template: __webpack_require__(/*! ./confirm-deletion.component.html */ "./src/app/confirm-deletion/confirm-deletion.component.html"),
            styles: [__webpack_require__(/*! ./confirm-deletion.component.css */ "./src/app/confirm-deletion/confirm-deletion.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], ConfirmationData])
    ], ConfirmDeletionComponent);
    return ConfirmDeletionComponent;
}());

var ConfirmationData = /** @class */ (function () {
    function ConfirmationData(title, text) {
        this.title = title;
        this.text = text;
    }
    return ConfirmationData;
}());



/***/ }),

/***/ "./src/app/confirmation-sheet/confirmation-sheet.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/confirmation-sheet/confirmation-sheet.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".messageToConfirm {\n    margin-bottom: 10px;\n    padding: 10px;\n}\n\n\n.confirmationButtons {\n    background-color: #fff;\n    margin-top: -3px;\n    padding-top: 15px;\n    width: 180px;\n    border: 1px solid #aaa;\n    box-shadow: 1px 2px 0px #999;\n}\n\n\n.confirmationButton {\n    height: 30px;\n    width: 90px;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n}\n\n\n.confirmationButton.accept {\n    background-color: #8DC071;\n    border-right: 1px solid #999;\n}\n\n\n.confirmationButton.reject {\n    background-color: #eee;\n \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlybWF0aW9uLXNoZWV0L2NvbmZpcm1hdGlvbi1zaGVldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qiw0QkFBNEI7QUFDaEM7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRCQUE0QjtBQUNoQzs7O0FBQ0E7SUFDSSxzQkFBc0I7O0FBRTFCIiwiZmlsZSI6InNyYy9hcHAvY29uZmlybWF0aW9uLXNoZWV0L2NvbmZpcm1hdGlvbi1zaGVldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2VUb0NvbmZpcm0ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuXG4uY29uZmlybWF0aW9uQnV0dG9ucyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICAgIGJveC1zaGFkb3c6IDFweCAycHggMHB4ICM5OTk7XG59XG5cbi5jb25maXJtYXRpb25CdXR0b24ge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogOTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbmZpcm1hdGlvbkJ1dHRvbi5hY2NlcHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4REMwNzE7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzk5OTtcbn1cbi5jb25maXJtYXRpb25CdXR0b24ucmVqZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/confirmation-sheet/confirmation-sheet.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/confirmation-sheet/confirmation-sheet.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"confirmationButtons flex-col center\" >\n  <div class=\"messageToConfirm\" *ngIf=\"showExternalTemplate !== true\">{{confirmationText}}</div>\n  <div class=\"messageToConfirm\">\n    <ng-content></ng-content>\n  </div>\n  <div class=\"flex-row\">\n      <div class=\"flex-item flex-col confirmationButton center accept\" (click)=\"raiseConfirm()\">\n          <i class=\"fa fa-check\"></i>\n      </div>\n      <div class=\"flex-item flex-col confirmationButton center reject\" (click)=\"raiseCancel()\">\n          <i class=\"fa fa-window-close\"></i>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/confirmation-sheet/confirmation-sheet.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/confirmation-sheet/confirmation-sheet.component.ts ***!
  \********************************************************************/
/*! exports provided: ConfirmationSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationSheetComponent", function() { return ConfirmationSheetComponent; });
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

var ConfirmationSheetComponent = /** @class */ (function () {
    function ConfirmationSheetComponent() {
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ConfirmationSheetComponent.prototype.ngOnInit = function () {
    };
    ConfirmationSheetComponent.prototype.raiseConfirm = function () {
        this.confirm.emit();
    };
    ConfirmationSheetComponent.prototype.raiseCancel = function () {
        this.cancel.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmationSheetComponent.prototype, "confirmationText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ConfirmationSheetComponent.prototype, "confirm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ConfirmationSheetComponent.prototype, "cancel", void 0);
    ConfirmationSheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'confirmation-sheet',
            template: __webpack_require__(/*! ./confirmation-sheet.component.html */ "./src/app/confirmation-sheet/confirmation-sheet.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-sheet.component.css */ "./src/app/confirmation-sheet/confirmation-sheet.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmationSheetComponent);
    return ConfirmationSheetComponent;
}());



/***/ }),

/***/ "./src/app/detail-navigation/detail-navigation.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/detail-navigation/detail-navigation.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detailNavigation {\n  padding: 10px;\n  justify-content: space-between;\n}\n\nbutton {\n  margin: 0 0.5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsLW5hdmlnYXRpb24vZGV0YWlsLW5hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWwtbmF2aWdhdGlvbi9kZXRhaWwtbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbE5hdmlnYXRpb24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogMCAwLjVyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/detail-navigation/detail-navigation.component.html":
/*!********************************************************************!*\
  !*** ./src/app/detail-navigation/detail-navigation.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detailNavigation flex-item flex-row\" *ngIf=\"hero\">\n  <button class=\"comic-shadow\" (click)=\"navToOverview()\">\n    <i class=\"fa fa-arrow-left\"></i> Übersicht\n  </button>\n  <div class=\"detailNavButtons\">\n    <button (click)=\"updateDetailView('character')\"\n      [ngClass]=\"detailArea === 'character' ? 'comic-shadow btn-primary' : 'comic-shadow '\">\n      Charakter\n    </button>\n    <button (click)=\"updateDetailView('talents')\"\n      [ngClass]=\"detailArea === 'talents' ? 'comic-shadow btn-primary' : 'comic-shadow '\">\n      Talente\n    </button>\n    <button *ngIf=\"hero.knowsMagic\" (click)=\"updateDetailView('spells')\"\n      [ngClass]=\"detailArea === 'spells' ? 'comic-shadow btn-primary' : 'comic-shadow '\">\n      Zauber\n    </button>\n    <button (click)=\"updateDetailView('inventory')\"\n      [ngClass]=\"detailArea === 'inventory' ? 'comic-shadow btn-primary' : 'comic-shadow '\">\n      Inventar\n    </button>\n    <button (click)=\"updateDetailView('edit')\"\n      [ngClass]=\"detailArea === 'edit' ? 'comic-shadow btn-primary' : 'comic-shadow '\">\n      Steigern\n    </button>\n  </div>\n\n\n</div>"

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



var MenuItem = /** @class */ (function () {
    function MenuItem(config) {
        this.title = config.title;
        this.target = config.target;
    }
    return MenuItem;
}());
var DetailNavigationComponent = /** @class */ (function () {
    function DetailNavigationComponent(elRef, router) {
        this.elRef = elRef;
        this.router = router;
        this.navToArea = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.detailArea = 'character';
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
    DetailNavigationComponent.prototype.navToOverview = function () {
        this.router.navigate(['/player/heroes']);
    };
    DetailNavigationComponent.prototype.navToEdit = function () {
        this.router.navigate(["/player/hero/" + this.hero.id + "/editStuff"]);
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
    DetailNavigationComponent.prototype.updateDetailView = function (detailTarget) {
        this.detailArea = detailTarget;
        this.navToArea.emit(detailTarget);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", app_domain_hero__WEBPACK_IMPORTED_MODULE_1__["Hero"])
    ], DetailNavigationComponent.prototype, "hero", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DetailNavigationComponent.prototype, "detailArea", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DetailNavigationComponent.prototype, "navToArea", void 0);
    DetailNavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'detail-navigation',
            template: __webpack_require__(/*! ./detail-navigation.component.html */ "./src/app/detail-navigation/detail-navigation.component.html"),
            styles: [__webpack_require__(/*! ./detail-navigation.component.css */ "./src/app/detail-navigation/detail-navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
        this._attribute = attribute;
    }
    Object.defineProperty(ActualAttribute.prototype, "value", {
        get: function () {
            return this.valueNumber;
        },
        set: function (value) {
            this.valueNumber = value;
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
    Object.defineProperty(ActualAttribute.prototype, "attribute", {
        get: function () {
            return this._attribute;
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
        this.assignmentId = actualSkill ? actualSkill['assignmentId'] : null;
        this.value = actualSkill ? actualSkill['value'] : 0;
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
        this.assignmentId = actualSpell ? actualSpell['assignmentId'] : null;
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
/*! exports provided: AdventureService, Adventure, ElementType, Image, Character, Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdventureService", function() { return AdventureService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adventure", function() { return Adventure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementType", function() { return ElementType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return Character; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _attribute_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attribute.service */ "./src/app/domain/attribute.service.ts");
/* harmony import */ var _fight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fight */ "./src/app/domain/fight.ts");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hero */ "./src/app/domain/hero.ts");
/* harmony import */ var _npc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./npc */ "./src/app/domain/npc.ts");
/* harmony import */ var _skills_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skills.service */ "./src/app/domain/skills.service.ts");
/* harmony import */ var _spells_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./spells.service */ "./src/app/domain/spells.service.ts");
/* harmony import */ var app_url_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/url.service */ "./src/app/url.service.ts");
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
    function AdventureService(http, skillService, spellService, attributeService) {
        this.http = http;
        this.skillService = skillService;
        this.spellService = spellService;
        this.attributeService = attributeService;
        this.adventuresUrl = app_url_service__WEBPACK_IMPORTED_MODULE_12__["UrlService"].getBaseUrl() + '/adventures/';
        this.npcTypesUrl = app_url_service__WEBPACK_IMPORTED_MODULE_12__["UrlService"].getBaseUrl() + 'npcTypes/';
        this.currentAdventure = 1;
        this.npcsUrl = app_url_service__WEBPACK_IMPORTED_MODULE_12__["UrlService"].getBaseUrl() + "/adventures/" + this.currentAdventure + "/npcs/";
        this.fightsURL = app_url_service__WEBPACK_IMPORTED_MODULE_12__["UrlService"].getBaseUrl() + "/adventures/" + this.currentAdventure + "/fights/";
    }
    AdventureService.prototype.getAdventures = function () {
        var _this = this;
        return this.http.get(this.adventuresUrl)
            .toPromise()
            .then(function (response) {
            return _this.extractAdventures(response);
        });
    };
    AdventureService.prototype.getCurrentAdventureId = function () {
        return 1;
    };
    AdventureService.prototype.extractAdventures = function (res) {
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
    AdventureService.prototype.getNPCTypes = function () {
        return this.http.get(this.npcTypesUrl)
            .toPromise()
            .then(function (response) {
            return response.json().map(function (npcResult) {
                return new _npc__WEBPACK_IMPORTED_MODULE_9__["NPCType"](npcResult.id, npcResult.name);
            });
        });
    };
    AdventureService.prototype.getNPCs = function () {
        var _this = this;
        return this.http.get(this.npcsUrl)
            .toPromise()
            .then(function (response) {
            return response.json().map(function (npcResult) {
                if (npcResult.character) {
                    var character = new _hero__WEBPACK_IMPORTED_MODULE_8__["Hero"](_this.skillService, _this.spellService, _this.attributeService).setData(npcResult.character);
                    character.isHero = false;
                    return character;
                }
                else
                    return new _npc__WEBPACK_IMPORTED_MODULE_9__["NPC"](npcResult.npc.id, npcResult.npc.name, null, npcResult.npc.life, npcResult.npc.initiative, npcResult.npc.weapon_1_name, npcResult.npc.weapon_1_attack, npcResult.npc.weapon_1_parade, npcResult.npc.weapon_1_damage, npcResult.npc.weapon_2_name, npcResult.npc.weapon_2_attack, npcResult.npc.weapon_2_parade, npcResult.npc.weapon_2_damage);
            });
        });
    };
    AdventureService.prototype.getFights = function () {
        return this.http.get(this.fightsURL)
            .toPromise()
            .then(function (response) {
            return response.json().map(function (fight) {
                return new _fight__WEBPACK_IMPORTED_MODULE_7__["Fight"](fight.name);
            });
        });
    };
    AdventureService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _skills_service__WEBPACK_IMPORTED_MODULE_10__["SkillService"], _spells_service__WEBPACK_IMPORTED_MODULE_11__["SpellService"], _attribute_service__WEBPACK_IMPORTED_MODULE_6__["AttributeService"]])
    ], AdventureService);
    return AdventureService;
}());

var Adventure = /** @class */ (function () {
    function Adventure() {
        this.images = [];
        this.characters = [];
    }
    Adventure.prototype.setData = function (dataObject) {
        var _this = this;
        this.id = dataObject.id;
        this.name = dataObject.name;
        dataObject.images.forEach(function (image) {
            var imageObject = new Image(_this.buildImageLink(image.url), image.caption, image.sequence);
            _this.images.push(imageObject);
        });
        dataObject.characters.forEach(function (character) {
            _this.characters.push(new Character(character.name, _this.buildImageLink(character.imageUrl), character.sequence));
        });
    };
    Object.defineProperty(Adventure.prototype, "elements", {
        get: function () {
            var allElements = [];
            for (var i = 0; i < this.images.length; i++) {
                allElements.push(this.images[i]);
            }
            for (var j = 0; j < this.characters.length; j++) {
                allElements.push(this.characters[j]);
            }
            allElements.sort(function (elementA, elementB) {
                return elementA.sequence - elementB.sequence;
            });
            var allElementsGrouped = [];
            var _loop_1 = function (index) {
                var element = allElements[index];
                var existingElementWithThatSequenceIndex = allElementsGrouped.findIndex(function (groupedElement) { return element.sequence === groupedElement.sequence; });
                if (existingElementWithThatSequenceIndex !== -1) {
                    var existingElementWithThatSequence = allElementsGrouped[existingElementWithThatSequenceIndex];
                    if (existingElementWithThatSequence.type === ElementType.Section) {
                        existingElementWithThatSequence.elements.push(element);
                    }
                    else {
                        var newSection = new Section();
                        newSection.sequence = element.sequence;
                        newSection.elements.push(existingElementWithThatSequence);
                        newSection.elements.push(element);
                        allElementsGrouped[existingElementWithThatSequenceIndex] = newSection;
                    }
                }
                else {
                    allElementsGrouped.push(element);
                }
            };
            for (var index = 0; index < allElements.length; index++) {
                _loop_1(index);
            }
            return allElementsGrouped;
        },
        enumerable: true,
        configurable: true
    });
    Adventure.prototype.buildImageLink = function (absolutePath) {
        return "" + app_url_service__WEBPACK_IMPORTED_MODULE_12__["UrlService"].getBaseUrl() + absolutePath;
    };
    return Adventure;
}());

var ElementType;
(function (ElementType) {
    ElementType["Image"] = "image";
    ElementType["Character"] = "character";
    ElementType["Location"] = "location";
    ElementType["Section"] = "section";
})(ElementType || (ElementType = {}));
var Image = /** @class */ (function () {
    function Image(url, caption, sequence) {
        this.url = url;
        this.caption = caption;
        this.sequence = sequence;
    }
    Object.defineProperty(Image.prototype, "imageUrl", {
        get: function () {
            return this.url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "type", {
        get: function () {
            return ElementType.Image;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "title", {
        get: function () {
            return this.caption;
        },
        enumerable: true,
        configurable: true
    });
    return Image;
}());

var Character = /** @class */ (function () {
    function Character(name, imageUrl, sequence) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.sequence = sequence;
    }
    Object.defineProperty(Character.prototype, "title", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "type", {
        get: function () {
            return ElementType.Character;
        },
        enumerable: true,
        configurable: true
    });
    return Character;
}());

var Section = /** @class */ (function () {
    function Section() {
        this.type = ElementType.Section;
        this.elements = [];
    }
    return Section;
}());



/***/ }),

/***/ "./src/app/domain/applicationState.ts":
/*!********************************************!*\
  !*** ./src/app/domain/applicationState.ts ***!
  \********************************************/
/*! exports provided: gameState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameState", function() { return gameState; });
var gameState = {
    gameStarted: false,
    dataInitialized: false
};


/***/ }),

/***/ "./src/app/domain/armor.service.ts":
/*!*****************************************!*\
  !*** ./src/app/domain/armor.service.ts ***!
  \*****************************************/
/*! exports provided: ArmorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmorService", function() { return ArmorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/hero-controls/hero-life.service */ "./src/app/hero-controls/hero-life.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArmorService = /** @class */ (function () {
    function ArmorService(service) {
        this.service = service;
    }
    ArmorService.prototype.addArmor = function (armor, hero) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.service.sendUpate({
                heroId: hero.id,
                type: 'addArmor',
                armorName: armor.name,
                armorRS: armor.rs,
                armorBE: armor.behinderung
            });
            resolve(armor);
        });
    };
    ArmorService.prototype.deleteArmor = function (armor, hero) {
        var _this = this;
        new Promise(function (resolve, reject) {
            _this.service.sendUpate({
                type: 'deleteArmor',
                heroId: hero.id,
                armorId: armor.id
            });
            resolve(armor);
        });
    };
    ArmorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [app_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_1__["HeroLifeService"]])
    ], ArmorService);
    return ArmorService;
}());



/***/ }),

/***/ "./src/app/domain/armor.ts":
/*!*********************************!*\
  !*** ./src/app/domain/armor.ts ***!
  \*********************************/
/*! exports provided: Armor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Armor", function() { return Armor; });
var Armor = /** @class */ (function () {
    function Armor(id, name, rs, behinderung, isEquipped) {
        if (isEquipped === void 0) { isEquipped = false; }
        this.id = id;
        this.name = name;
        this.rs = rs;
        this.behinderung = behinderung;
        this.isEquipped = isEquipped;
    }
    return Armor;
}());



/***/ }),

/***/ "./src/app/domain/ascensionPricing.ts":
/*!********************************************!*\
  !*** ./src/app/domain/ascensionPricing.ts ***!
  \********************************************/
/*! exports provided: AscensionPricing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AscensionPricing", function() { return AscensionPricing; });
var AscensionPricing = /** @class */ (function () {
    function AscensionPricing(pricingData, index) {
        this.levelFrom = index;
        this.levelTo = index + 1;
        this.priceA = pricingData['cost_a'];
        this.priceB = pricingData['cost_b'];
        this.priceC = pricingData['cost_c'];
        this.priceD = pricingData['cost_d'];
        this.priceE = pricingData['cost_e'];
        this.priceF = pricingData['cost_f'];
        this.priceG = pricingData['cost_g'];
        this.priceH = pricingData['cost_h'];
    }
    AscensionPricing.prototype.getPrice = function (from, to, group) {
        return this['price_' + group];
    };
    ;
    return AscensionPricing;
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
            ['MU', new _attribute__WEBPACK_IMPORTED_MODULE_1__["Attribute"]('MU', 'Mut', 'MU')],
            ['KL', new _attribute__WEBPACK_IMPORTED_MODULE_1__["Attribute"]('KL', 'Klugheit', 'KL')],
            ['IN', new _attribute__WEBPACK_IMPORTED_MODULE_1__["Attribute"]('IN', 'Intuition', 'IN')],
            ['CH', new _attribute__WEBPACK_IMPORTED_MODULE_1__["Attribute"]('CH', 'Charisma', 'CH')],
            ['FF', new _attribute__WEBPACK_IMPORTED_MODULE_1__["Attribute"]('FF', 'Fingerfertigkeit', 'FF')],
            ['GE', new _attribute__WEBPACK_IMPORTED_MODULE_1__["Attribute"]('GE', 'Gewandheit', 'GE')],
            ['KO', new _attribute__WEBPACK_IMPORTED_MODULE_1__["Attribute"]('KO', 'Konstitution', 'KO')],
            ['KK', new _attribute__WEBPACK_IMPORTED_MODULE_1__["Attribute"]('KK', 'Körperkraft', 'KK')]
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
    function Attribute(attributeId, attributeName, short) {
        this.attributeName = attributeName;
        this.attributeId = attributeId;
        this._short = short;
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
            return this._short;
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

/***/ "./src/app/domain/enhancement-pricing.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/domain/enhancement-pricing.service.ts ***!
  \*******************************************************/
/*! exports provided: EnhancementPricingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnhancementPricingService", function() { return EnhancementPricingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var app_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/url.service */ "./src/app/url.service.ts");
/* harmony import */ var _ascensionPricing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ascensionPricing */ "./src/app/domain/ascensionPricing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnhancementPricingService = /** @class */ (function () {
    function EnhancementPricingService(http) {
        this.http = http;
        this.ascensionsUrl = app_url_service__WEBPACK_IMPORTED_MODULE_2__["UrlService"].getBaseUrl() + '/ascensions/';
    }
    EnhancementPricingService.prototype.getAscensionPricing = function () {
        var _this = this;
        if (!this.ascensionPricing) {
            this.ascensionsPromise = this.http.get(this.ascensionsUrl)
                .toPromise()
                .then(function (response) {
                _this.ascensionPricing = _this.extractAscensions(response.json());
                return _this.ascensionPricing;
            });
            return this.ascensionsPromise;
        }
        else {
            return new Promise(function (resolve) {
                resolve(_this.ascensionPricing);
            });
        }
    };
    EnhancementPricingService.prototype.extractAscensions = function (response) {
        return response.map(function (ascensionResponse, index) {
            return new _ascensionPricing__WEBPACK_IMPORTED_MODULE_3__["AscensionPricing"](ascensionResponse, index);
        });
    };
    EnhancementPricingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], EnhancementPricingService);
    return EnhancementPricingService;
}());



/***/ }),

/***/ "./src/app/domain/fight.ts":
/*!*********************************!*\
  !*** ./src/app/domain/fight.ts ***!
  \*********************************/
/*! exports provided: Fight, MatchesCombatantSearchTerm, IsGoodFighter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fight", function() { return Fight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesCombatantSearchTerm", function() { return MatchesCombatantSearchTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsGoodFighter", function() { return IsGoodFighter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Fight = /** @class */ (function () {
    function Fight(name) {
        this.name = name;
    }
    Object.defineProperty(Fight.prototype, "combatants", {
        get: function () {
            return this._combatants;
        },
        enumerable: true,
        configurable: true
    });
    return Fight;
}());

var MatchesCombatantSearchTerm = /** @class */ (function () {
    function MatchesCombatantSearchTerm() {
    }
    MatchesCombatantSearchTerm.prototype.transform = function (combatants, searchTerm) {
        if (searchTerm != '' && searchTerm !== undefined) {
            return combatants.filter(function (combatant) {
                return (combatant.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
            });
        }
        else {
            return combatants;
        }
    };
    MatchesCombatantSearchTerm = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'MatchesCombatantSearchTerm'
        })
    ], MatchesCombatantSearchTerm);
    return MatchesCombatantSearchTerm;
}());

var IsGoodFighter = /** @class */ (function () {
    function IsGoodFighter() {
    }
    IsGoodFighter.prototype.transform = function (combatants, isGood) {
        return combatants.filter(function (combatant) { return combatant.isGood !== !isGood; });
    };
    IsGoodFighter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'IsGoodFighter'
        })
    ], IsGoodFighter);
    return IsGoodFighter;
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _attribute_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attribute.service */ "./src/app/domain/attribute.service.ts");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hero */ "./src/app/domain/hero.ts");
/* harmony import */ var _skills_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./skills.service */ "./src/app/domain/skills.service.ts");
/* harmony import */ var _spells_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./spells.service */ "./src/app/domain/spells.service.ts");
/* harmony import */ var app_url_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/url.service */ "./src/app/url.service.ts");
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
        this.heroesUrl = app_url_service__WEBPACK_IMPORTED_MODULE_10__["UrlService"].getBaseUrl() + "/characters/";
    }
    HeroService.prototype.getHeroes = function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
        if (this._heroes && !force) {
            return new Promise(function (resolve, reject) {
                resolve(_this._heroes);
            });
        }
        else {
            var characterGetPromise = this.http.get(this.heroesUrl)
                .toPromise()
                .then(function (response) {
                if (!_this._heroes) {
                    _this._heroes = [];
                }
                var heroes = _this.extractData(response);
                var _loop_1 = function (hero) {
                    var bufferdHero = _this._heroes ? _this._heroes.find(function (h) { return h.id === hero.id; }) : null;
                    if (bufferdHero) {
                        Object.assign(bufferdHero, hero);
                    }
                    else {
                        _this._heroes.push(hero);
                    }
                };
                for (var _i = 0, heroes_1 = heroes; _i < heroes_1.length; _i++) {
                    var hero = heroes_1[_i];
                    _loop_1(hero);
                }
                _this._heroes.sort(function (heroA, heroB) {
                    if (heroA.name > heroB.name)
                        return 1;
                    else
                        return -1;
                });
                return _this._heroes;
            });
            characterGetPromise.catch(function (error) {
                console.log('error getting characters');
            });
            return characterGetPromise;
        }
    };
    Object.defineProperty(HeroService.prototype, "heroes", {
        get: function () {
            if (this._heroes) {
                return this._heroes;
            }
            else {
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    HeroService.prototype.extractData = function (res) {
        var body = res.json();
        var heroes = [];
        body.forEach(function (hero) {
            var newHero = new _hero__WEBPACK_IMPORTED_MODULE_7__["Hero"](this.skillService, this.spellService, this.attributeService).setData(hero);
            heroes.push(newHero);
        }.bind(this));
        return heroes;
    };
    HeroService.prototype.handleError = function (error) {
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
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _skills_service__WEBPACK_IMPORTED_MODULE_8__["SkillService"], _spells_service__WEBPACK_IMPORTED_MODULE_9__["SpellService"], _attribute_service__WEBPACK_IMPORTED_MODULE_6__["AttributeService"]])
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
/* harmony import */ var _actualAttribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actualAttribute */ "./src/app/domain/actualAttribute.ts");
/* harmony import */ var _actualSkill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actualSkill */ "./src/app/domain/actualSkill.ts");
/* harmony import */ var _actualSkillGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actualSkillGroup */ "./src/app/domain/actualSkillGroup.ts");
/* harmony import */ var _actualSpell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actualSpell */ "./src/app/domain/actualSpell.ts");
/* harmony import */ var _actualSpellGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actualSpellGroup */ "./src/app/domain/actualSpellGroup.ts");
/* harmony import */ var _armor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./armor */ "./src/app/domain/armor.ts");
/* harmony import */ var _inventoryItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inventoryItem */ "./src/app/domain/inventoryItem.ts");
/* harmony import */ var _moneyInventory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./moneyInventory */ "./src/app/domain/moneyInventory.ts");
/* harmony import */ var _weapon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./weapon */ "./src/app/domain/weapon.ts");
/* harmony import */ var _weaponSkillDistribution__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./weaponSkillDistribution */ "./src/app/domain/weaponSkillDistribution.ts");











var Hero = /** @class */ (function () {
    function Hero(skillService, spellService, attributeService) {
        this.skillService = skillService;
        this.spellService = spellService;
        this.attributeService = attributeService;
        this.isHero = true;
        this.skillService = skillService;
        this.weapons = [];
    }
    Object.defineProperty(Hero.prototype, "damage", {
        get: function () {
            throw new Error('Method not implemented.');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "initiative", {
        get: function () {
            return this._initiative;
        },
        set: function (initiative) {
            this._initiative = initiative;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "currentInitiative", {
        get: function () {
            return this._currentInitiative;
        },
        set: function (initiative) {
            this._currentInitiative = initiative;
        },
        enumerable: true,
        configurable: true
    });
    Hero.prototype.setData = function (dataObject) {
        this.attack_basis = dataObject['attack_basis'];
        this.parade_basis = dataObject['parade_basis'];
        this.fernkampf_basis = dataObject['fernkampf_basis'];
        this.life_lost = dataObject['life_lost'];
        this.avatar_small = dataObject['avatar_small'];
        this.culture = dataObject['culture'];
        this.experience = dataObject['experience'];
        this.level = Math.floor(Math.sqrt(this.experience / 50 + 0.25) + 0.5);
        this.experience_used = dataObject['experience_used'];
        this.gender = dataObject['gender'];
        this.hero_type = dataObject['hero_type'];
        this.id = dataObject['id'];
        this._initiative = dataObject['ini_basis'];
        this.knowsMagic = dataObject['knows_magic'];
        this.money = new _moneyInventory__WEBPACK_IMPORTED_MODULE_8__["MoneyInventory"](dataObject['money_dukaten'], dataObject['money_silbertaler'], dataObject['money_kreuzer'], dataObject['money_heller']);
        this.hairColor = dataObject['hair_color'];
        this.eyeColor = dataObject['eye_color'];
        this.weight = dataObject['weight'];
        this.attributes = [
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_1__["ActualAttribute"](dataObject['MU'], this.attributeService.attributes.get('MU')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_1__["ActualAttribute"](dataObject['KL'], this.attributeService.attributes.get('KL')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_1__["ActualAttribute"](dataObject['IN'], this.attributeService.attributes.get('IN')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_1__["ActualAttribute"](dataObject['CH'], this.attributeService.attributes.get('CH')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_1__["ActualAttribute"](dataObject['FF'], this.attributeService.attributes.get('FF')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_1__["ActualAttribute"](dataObject['GE'], this.attributeService.attributes.get('GE')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_1__["ActualAttribute"](dataObject['KO'], this.attributeService.attributes.get('KO')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_1__["ActualAttribute"](dataObject['KK'], this.attributeService.attributes.get('KK'))
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
        this.armor = [];
        this.weaponSkillDistributions = dataObject['weaponSkillDistributions'].map(function (weaponSkillDistribution) {
            return new _weaponSkillDistribution__WEBPACK_IMPORTED_MODULE_10__["WeaponSkillDistribution"](weaponSkillDistribution.skill, weaponSkillDistribution.attack, weaponSkillDistribution.parade);
        });
        this.structureSkills(dataObject['skills'], dataObject['weaponSkillDistributions'], dataObject['weapons'], dataObject['armor']);
        if (this.knowsMagic) {
            this.structureSpells(dataObject['spells']);
        }
        this.inventory = dataObject['inventoryItems'].map(function (inventoryItem) {
            return new _inventoryItem__WEBPACK_IMPORTED_MODULE_7__["InventoryItem"](inventoryItem.id, inventoryItem.name, inventoryItem.amount, inventoryItem.weight);
        });
        return this;
    };
    Hero.prototype.structureSkills = function (actualSkillsOfHero, weaponSkillDistributions, weapons, armor) {
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
                _this.skills.push(new _actualSkill__WEBPACK_IMPORTED_MODULE_2__["ActualSkill"](actualSkill, _this, skill, skillSkillGroup));
            });
            _this.skills.sort(function (skillA, skillB) {
                if (skillA.getSkill().name < skillB.getSkill().name) {
                    return -1;
                }
                if (skillA.getSkill().name > skillB.getSkill().name) {
                    return 1;
                }
                return 0;
            });
            skillGroups.forEach(function (skillGroup) {
                var skills = lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](_this.skills, function (actualSkill) {
                    return actualSkill.getSkill().skillGroupId == skillGroup.id;
                });
                _this.skillGroups.push(new _actualSkillGroup__WEBPACK_IMPORTED_MODULE_3__["ActualSkillGroup"](skillGroup, skills));
            });
            weapons.forEach(function (weapon) {
                _this.addWeapon(new _weapon__WEBPACK_IMPORTED_MODULE_9__["Weapon"](weapon['id'], weapon['name'], weapon['tp_dice'], weapon['tp_add_points'], weapon['extra_tp_from_kk'], lodash__WEBPACK_IMPORTED_MODULE_0__["find"](allSkills, function (skill) {
                    return skill.id === weapon['skill'];
                }), _this.getAttribute('KK').value));
            });
            if (_this.weapons.length > 0)
                _this.currentWeapon = _this.weapons[0];
            armor.forEach(function (armor) {
                _this.addArmor(new _armor__WEBPACK_IMPORTED_MODULE_6__["Armor"](armor['id'], armor['name'], armor['rs'], armor['be']));
            });
        });
    };
    Hero.prototype.addArmor = function (armor) {
        this.armor.push(armor);
    };
    Hero.prototype.deleteArmorById = function (armorId) {
        var armorIndex = this.armor.findIndex(function (armorItem) {
            return armorItem.id === armorId;
        });
        this.armor.splice(armorIndex, 1);
    };
    Hero.prototype.getArmorById = function (armorId) {
        return this.armor.find(function (armorItem) {
            return armorItem.id === armorId;
        });
    };
    Object.defineProperty(Hero.prototype, "armorValue", {
        get: function () {
            return this.armor.reduce(function (previousArmorValue, armorEntry) {
                if (armorEntry.isEquipped)
                    return previousArmorValue + armorEntry.rs;
                else
                    return previousArmorValue;
            }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "behinderung", {
        get: function () {
            return this.armor.reduce(function (previousBehinderungValue, armorEntry) {
                if (armorEntry.isEquipped)
                    return previousBehinderungValue + armorEntry.behinderung;
                else
                    return previousBehinderungValue;
            }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Hero.prototype.equipArmorById = function (armorId, isEquipped) {
        this.getArmorById(armorId).isEquipped = isEquipped;
    };
    Hero.prototype.addWeapon = function (weapon) {
        this.weapons.push(weapon);
    };
    Hero.prototype.deleteWeaponById = function (weaponId) {
        var weaponIndex = this.weapons.findIndex(function (weapon) {
            return weapon.id === weaponId;
        });
        this.weapons.splice(weaponIndex, 1);
    };
    Hero.prototype.addInventoryItem = function (inventoryItem) {
        this.inventory.push(inventoryItem);
    };
    Hero.prototype.getInventoryItemById = function (inventoryItemId) {
        var inventoryIndex = this.inventory.findIndex(function (InventoryItem) {
            return InventoryItem.id === inventoryItemId;
        });
        return this.inventory[inventoryIndex];
    };
    Hero.prototype.deleteInventoryItemById = function (inventoryItemId) {
        var inventoryIndex = this.inventory.findIndex(function (InventoryItem) {
            return InventoryItem.id === inventoryItemId;
        });
        this.inventory.splice(inventoryIndex, 1);
    };
    Hero.prototype.updateInventoryItemAmount = function (inventoryItemId, amount) {
        this.getInventoryItemById(inventoryItemId).amount = amount;
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
                _this.spellGroups.push(new _actualSpellGroup__WEBPACK_IMPORTED_MODULE_5__["ActualSpellGroup"](spellGroup, []));
            });
            allSpells.sort(function (spellA, spellB) {
                if (spellA.name < spellB.name) {
                    return -1;
                }
                if (spellA.name > spellB.name) {
                    return 1;
                }
                return 0;
            });
            allSpells.forEach(function (spell) {
                var actualSpellDataObject = actualSpellsOfHero.find(function (actualSpellData) {
                    return spell.id === actualSpellData['id'];
                });
                var spellGroupOfSpell = _this.spellGroups.find(function (spellGroup) {
                    return spellGroup.getSpellGroup().id === spell.spellGroupId;
                });
                var actualSpell = new _actualSpell__WEBPACK_IMPORTED_MODULE_4__["ActualSpell"](actualSpellDataObject, _this, spell, spellGroupOfSpell.getSpellGroup());
                _this.spells.push(actualSpell);
                spellGroupOfSpell.getSpells().push(actualSpell);
            });
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
        get: function () {
            return this._currentWeapon;
        },
        set: function (weapon) {
            var _this = this;
            this._currentWeapon = weapon;
            var skillDistribution = this._getDistributionOfSkill(weapon.skill);
            if (this._currentWeapon.skill.skillGroupId === 1) {
                this.currentAttack = skillDistribution ? this.attack_basis + skillDistribution.attack : this.attack_basis;
                this.currentParade = skillDistribution ? this.parade_basis + skillDistribution.parade : this.parade_basis;
            }
            if (this._currentWeapon.skill.skillGroupId === 8) {
                var actualSkill = this.skills.find(function (skill) {
                    return skill.getSkill().id === _this._currentWeapon.skill.id;
                });
                this.currentLongRangeValue = this.fernkampf_basis + actualSkill.value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "attack", {
        get: function () {
            return this.currentAttack;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "parade", {
        get: function () {
            return this.currentParade;
        },
        enumerable: true,
        configurable: true
    });
    Hero.prototype.currentWeaponSkillIsMelee = function () {
        if (this._currentWeapon)
            return this._currentWeapon.skill.skillGroupId === 1;
        else
            return false;
    };
    Hero.prototype.currentWeaponSkillIsLongRange = function () {
        if (this._currentWeapon)
            return this._currentWeapon.skill.skillGroupId === 8;
        else
            return false;
    };
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
    Object.defineProperty(Hero.prototype, "availablePoints", {
        get: function () {
            return this.experience - this.experience_used;
        },
        enumerable: true,
        configurable: true
    });
    Hero.prototype.getParadeOfWeaponSkill = function (weaponSkill) {
        var skillDistribution = this._getDistributionOfSkill(weaponSkill);
        return skillDistribution ? this.parade_basis + skillDistribution.attack : this.parade_basis;
    };
    Object.defineProperty(Hero.prototype, "fightTexts", {
        get: function () {
            return this.currentWeapon ? ["" + this.currentWeapon.name, "AT: " + this.currentAttack + ", PA: " + this.currentParade, "TP: " + this.currentWeaponDamageText] : ['keine Waffe gesetzt', 'AT:', 'PA:'];
        },
        enumerable: true,
        configurable: true
    });
    return Hero;
}());



/***/ }),

/***/ "./src/app/domain/inventory.service.ts":
/*!*********************************************!*\
  !*** ./src/app/domain/inventory.service.ts ***!
  \*********************************************/
/*! exports provided: InventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryService", function() { return InventoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var app_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/hero-controls/hero-life.service */ "./src/app/hero-controls/hero-life.service.ts");
/* harmony import */ var app_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/url.service */ "./src/app/url.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InventoryService = /** @class */ (function () {
    function InventoryService(http, chRef, service) {
        this.http = http;
        this.chRef = chRef;
        this.service = service;
        this.inventoryItemsUrl = app_url_service__WEBPACK_IMPORTED_MODULE_3__["UrlService"].getBaseUrl() + "/inventoryItems/";
    }
    InventoryService.prototype.updateAccountEntry = function (accountEntry, hero, newAmountValue) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.service.sendUpate({
                heroId: hero.id,
                type: 'updateAccountEntry',
                unit: accountEntry.unit.toLowerCase(),
                amount: newAmountValue
            });
            resolve(accountEntry);
        });
    };
    InventoryService.prototype.addInventory = function (inventoryItem, hero) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.service.sendUpate({
                heroId: hero.id,
                type: 'addInventoryItem',
                name: inventoryItem.name,
                amount: inventoryItem.amount,
                weight: inventoryItem.weight
            });
            resolve(inventoryItem);
        });
    };
    InventoryService.prototype.setInventoryItemAmount = function (inventoryItem, hero, amount) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.service.sendUpate({
                heroId: hero.id,
                inventoryItemId: inventoryItem.id,
                type: 'updateInventoryItem',
                amount: amount
            });
            resolve(inventoryItem);
        });
    };
    InventoryService.prototype.deleteInventory = function (inventoryItem, hero) {
        var _this = this;
        new Promise(function (resolve, reject) {
            _this.service.sendUpate({
                type: 'deleteInventoryItem',
                heroId: hero.id,
                inventoryItemId: inventoryItem.id
            });
            resolve(inventoryItem);
        });
    };
    InventoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], app_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_2__["HeroLifeService"]])
    ], InventoryService);
    return InventoryService;
}());



/***/ }),

/***/ "./src/app/domain/inventoryItem.ts":
/*!*****************************************!*\
  !*** ./src/app/domain/inventoryItem.ts ***!
  \*****************************************/
/*! exports provided: InventoryItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryItem", function() { return InventoryItem; });
var InventoryItem = /** @class */ (function () {
    function InventoryItem(id, name, amount, weight) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.weight = weight;
    }
    return InventoryItem;
}());



/***/ }),

/***/ "./src/app/domain/moneyInventory.ts":
/*!******************************************!*\
  !*** ./src/app/domain/moneyInventory.ts ***!
  \******************************************/
/*! exports provided: MoneyInventory, AccountEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyInventory", function() { return MoneyInventory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEntry", function() { return AccountEntry; });
var MoneyInventory = /** @class */ (function () {
    function MoneyInventory(dukaten, silbertaler, kreuzer, heller) {
        this.entries = [];
        this.entries.push(new AccountEntry('Dukaten', dukaten));
        this.entries.push(new AccountEntry('Silbertaler', silbertaler));
        this.entries.push(new AccountEntry('Kreuzer', kreuzer));
        this.entries.push(new AccountEntry('Heller', heller));
    }
    Object.defineProperty(MoneyInventory.prototype, "dukaten", {
        get: function () {
            return this.entries.find(function (entry) {
                return entry.unit === 'Dukaten';
            }).amount;
        },
        set: function (amount) {
            this.entries.find(function (entry) {
                return entry.unit === 'Dukaten';
            }).amount = amount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MoneyInventory.prototype, "silbertaler", {
        get: function () {
            return this.entries.find(function (entry) {
                return entry.unit === 'Silbertaler';
            }).amount;
        },
        set: function (amount) {
            this.entries.find(function (entry) {
                return entry.unit === 'Silbertaler';
            }).amount = amount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MoneyInventory.prototype, "kreuzer", {
        get: function () {
            return this.entries.find(function (entry) {
                return entry.unit === 'Kreuzer';
            }).amount;
        },
        set: function (amount) {
            this.entries.find(function (entry) {
                return entry.unit === 'Kreuzer';
            }).amount = amount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MoneyInventory.prototype, "heller", {
        get: function () {
            return this.entries.find(function (entry) {
                return entry.unit === 'Heller';
            }).amount;
        },
        set: function (amount) {
            this.entries.find(function (entry) {
                return entry.unit === 'Heller';
            }).amount = amount;
        },
        enumerable: true,
        configurable: true
    });
    return MoneyInventory;
}());

var AccountEntry = /** @class */ (function () {
    function AccountEntry(unit, amount) {
        this.unit = unit;
        this.amount = amount;
    }
    return AccountEntry;
}());



/***/ }),

/***/ "./src/app/domain/npc.ts":
/*!*******************************!*\
  !*** ./src/app/domain/npc.ts ***!
  \*******************************/
/*! exports provided: NPCType, NPC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NPCType", function() { return NPCType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NPC", function() { return NPC; });
var NPCType = /** @class */ (function () {
    function NPCType(id, name) {
        this.id = id;
        this.name = name;
    }
    return NPCType;
}());

var NPC = /** @class */ (function () {
    function NPC(id, name, isGood, currentLife, _initiative, _weapon_1, _attack_1, _parade_1, _damage_1, _weapon_2, _attack_2, _parade_2, _damage_2) {
        this.id = id;
        this.name = name;
        this.isGood = isGood;
        this.currentLife = currentLife;
        this._initiative = _initiative;
        this._weapon_1 = _weapon_1;
        this._attack_1 = _attack_1;
        this._parade_1 = _parade_1;
        this._damage_1 = _damage_1;
        this._weapon_2 = _weapon_2;
        this._attack_2 = _attack_2;
        this._parade_2 = _parade_2;
        this._damage_2 = _damage_2;
        this.isHero = false;
    }
    Object.defineProperty(NPC.prototype, "initiative", {
        get: function () {
            return this._initiative;
        },
        set: function (initiative) {
            this._initiative = initiative;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NPC.prototype, "fightTexts", {
        get: function () {
            var fightTexts = ["" + this._weapon_1,
                "AT: " + this._attack_1 + ", PA: " + this._parade_1,
                "TP: " + this._damage_1];
            if (this._weapon_2)
                fightTexts.concat(["" + this._weapon_2,
                    "AT: " + this._attack_2 + ", PA: " + this._parade_2,
                    "TP: " + this._damage_2]);
            return fightTexts;
        },
        enumerable: true,
        configurable: true
    });
    return NPC;
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
    RemoteControlOperation.prototype.getParameter = function (parameterName) {
        return this.params[parameterName];
    };
    RemoteControlOperation.prototype.toJSON = function () {
        return JSON.stringify({
            type: this.type,
            target: this.target,
            params: JSON.stringify(this.params)
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
        return new RemoteControlOperation(parsedObject.type, parsedObject.target, JSON.parse(parsedObject.params));
    };
    return OperationFactory;
}());

var operationTypes = {
    openImage: 'openImage',
    closeImage: 'closeImage',
    createNPC: 'createNPC',
    startFight: 'startFight',
    startTimer: 'startTimer',
    timerFinished: 'timerFinished',
    timerStopped: 'timerStopped'
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
        this.isWeaponSkill = dataObject['isWeaponSkill'];
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
        this.skillType = dataObject['skill_group']['name'];
    }
    SkillGroup.prototype.setSkills = function (skills) {
        this.skills = skills;
    };
    SkillGroup.prototype.getSkills = function () {
        return this.skills;
    };
    SkillGroup.prototype.getAscensionPricingTableColumn = function () {
        return "price" + this.skillType;
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
/* harmony import */ var _attribute_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attribute.service */ "./src/app/domain/attribute.service.ts");
/* harmony import */ var _skill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skill */ "./src/app/domain/skill.ts");
/* harmony import */ var _skillgroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skillgroup */ "./src/app/domain/skillgroup.ts");
/* harmony import */ var app_url_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/url.service */ "./src/app/url.service.ts");
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
        this.skillsUrl = app_url_service__WEBPACK_IMPORTED_MODULE_5__["UrlService"].getBaseUrl() + "/skills/";
        this.skillTypesUrl = app_url_service__WEBPACK_IMPORTED_MODULE_5__["UrlService"].getBaseUrl() + "/skillTypes/";
    }
    SkillService.prototype.getSkills = function () {
        var _this = this;
        if (!this.skillsPromise) {
            this.skillsPromise = this.http.get(this.skillsUrl)
                .toPromise()
                .then(function (response) {
                return _this.extractSkills(response);
            });
            this.skillsPromise.catch(function (error) {
                console.log('error getting skills');
                _this.skillsPromise = null;
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
            this.skillGroupsPromise.catch(function (error) {
                console.log('error getting skill groups');
            });
        }
        return this.skillGroupsPromise;
    };
    SkillService.prototype.extractSkills = function (res) {
        var _this = this;
        var skills = [];
        var body = res.json();
        body.forEach(function (skill) {
            skills.push(new _skill__WEBPACK_IMPORTED_MODULE_3__["Skill"](skill, _this.attributeService));
        });
        return skills;
    };
    SkillService.prototype.extractSkillTypes = function (res) {
        var _this = this;
        var skillTypes = [];
        var body = res.json();
        body.forEach(function (skillType) {
            skillTypes.push(new _skillgroup__WEBPACK_IMPORTED_MODULE_4__["SkillGroup"](skillType, _this.chRef));
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
    SkillService.prototype.getWeaponSkills = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getSkills().then(function (skills) {
                resolve(skills.filter(function (skill) {
                    return skill.skillGroupId === 1 || skill.skillGroupId === 8;
                }));
            });
        });
    };
    SkillService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _attribute_service__WEBPACK_IMPORTED_MODULE_2__["AttributeService"]])
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
        this.complexity = dataObject['complexity'];
    }
    Spell.prototype.getAscensionPricingTableColumn = function () {
        return "price" + this.complexity;
    };
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
    SpellGroup.prototype.getAscensionPricingTableColumn = function () {
        return "price" + this.spellType;
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
/* harmony import */ var app_url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/url.service */ "./src/app/url.service.ts");
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
        this.spellsUrl = app_url_service__WEBPACK_IMPORTED_MODULE_4__["UrlService"].getBaseUrl() + "/spells/";
        this.spellTypesUrl = app_url_service__WEBPACK_IMPORTED_MODULE_4__["UrlService"].getBaseUrl() + "/spellTypes/";
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

/***/ "./src/app/domain/timer.service.ts":
/*!*****************************************!*\
  !*** ./src/app/domain/timer.service.ts ***!
  \*****************************************/
/*! exports provided: TimerService, Timer, TimeRemaining */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerService", function() { return TimerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeRemaining", function() { return TimeRemaining; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_remote_control_remote_control_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/remote-control/remote-control.service */ "./src/app/remote-control/remote-control.service.ts");
/* harmony import */ var _remoteControlOperation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remoteControlOperation */ "./src/app/domain/remoteControlOperation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimerService = /** @class */ (function () {
    function TimerService(remoteControlService) {
        this.remoteControlService = remoteControlService;
        this.timer = new Timer();
        this.timer.minutes = 0;
        this.timer.seconds = 0;
        this.timer.title = 'Denkt nach';
        this.timer.running = false;
        this.timeRemaining = new TimeRemaining(0, 0, 0);
    }
    TimerService.prototype.startTimer = function (isLocal) {
        if (isLocal === void 0) { isLocal = false; }
        this.timer.isLocal = isLocal;
        var timerPeriod = this.timer.getTimerMilliseconds();
        this.timer.timerId = window.setTimeout(this.stopTimer.bind(this), timerPeriod);
        if (this.timer.isLocal === false) {
            var remoteControlOperation = _remoteControlOperation__WEBPACK_IMPORTED_MODULE_2__["OperationFactory"].createOperation(_remoteControlOperation__WEBPACK_IMPORTED_MODULE_2__["operationTypes"].startTimer, 'all', this.timer);
            this.remoteControlService.sendRemoteControlInstruction(remoteControlOperation);
        }
        this.timer.running = true;
        this.timeRemaining.minutes = this.timer.minutes;
        this.timeRemaining.seconds = this.timer.seconds;
        this.timeRemaining.intervalId = window.setInterval(this._countDown.bind(this), 1000, this.timeRemaining);
    };
    TimerService.prototype.stopTimer = function (letOthersKnow) {
        if (letOthersKnow === void 0) { letOthersKnow = true; }
        window.clearTimeout(this.timer.timerId);
        window.clearInterval(this.timeRemaining.intervalId);
        this.timer.running = false;
        if (letOthersKnow === true) {
            var remoteControlOperation = _remoteControlOperation__WEBPACK_IMPORTED_MODULE_2__["OperationFactory"].createOperation(_remoteControlOperation__WEBPACK_IMPORTED_MODULE_2__["operationTypes"].timerFinished, 'all', this.timer);
            this.remoteControlService.sendRemoteControlInstruction(remoteControlOperation);
        }
    };
    TimerService.prototype.clearTimer = function () {
        window.clearTimeout(this.timer.timerId);
        window.clearInterval(this.timeRemaining.intervalId);
        this.timer.running = false;
        var remoteControlOperation = _remoteControlOperation__WEBPACK_IMPORTED_MODULE_2__["OperationFactory"].createOperation(_remoteControlOperation__WEBPACK_IMPORTED_MODULE_2__["operationTypes"].timerStopped, 'all', this.timer);
        this.remoteControlService.sendRemoteControlInstruction(remoteControlOperation);
    };
    TimerService.prototype._countDown = function (timeRemaining) {
        timeRemaining.seconds--;
        if (timeRemaining.seconds < 0) {
            timeRemaining.minutes--;
            if (timeRemaining.minutes < 0)
                this.stopTimer();
            else
                timeRemaining.seconds = 59;
        }
    };
    TimerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [app_remote_control_remote_control_service__WEBPACK_IMPORTED_MODULE_1__["RemoteControlService"]])
    ], TimerService);
    return TimerService;
}());

var Timer = /** @class */ (function () {
    function Timer() {
        this.isLocal = false;
    }
    Timer.prototype.getTimerMilliseconds = function () {
        return (this.seconds + this.minutes * 60) * 1000;
    };
    return Timer;
}());

var TimeRemaining = /** @class */ (function () {
    function TimeRemaining(_intervalId, _minutes, _seconds) {
        this._intervalId = _intervalId;
        this._minutes = _minutes;
        this._seconds = _seconds;
    }
    Object.defineProperty(TimeRemaining.prototype, "secondsString", {
        get: function () {
            return this.seconds.toString().padStart(2, '0');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeRemaining.prototype, "intervalId", {
        get: function () {
            return this._intervalId;
        },
        set: function (intervalId) {
            this._intervalId = intervalId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeRemaining.prototype, "minutes", {
        get: function () {
            return this._minutes;
        },
        set: function (minutes) {
            this._minutes = minutes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeRemaining.prototype, "seconds", {
        get: function () {
            return this._seconds;
        },
        set: function (seconds) {
            this._seconds = seconds;
        },
        enumerable: true,
        configurable: true
    });
    return TimeRemaining;
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
    function Weapon(id, name, damageDice, _damageAddPoints, extraPointsFromKk, skill, heroKk) {
        if (skill === void 0) { skill = null; }
        if (heroKk === void 0) { heroKk = null; }
        this.id = id;
        this.name = name;
        this.damageDice = damageDice;
        this._damageAddPoints = _damageAddPoints;
        this.extraPointsFromKk = extraPointsFromKk;
        this.skill = skill;
        this.heroKk = heroKk;
    }
    Object.defineProperty(Weapon.prototype, "damageAddPoints", {
        get: function () {
            if (this.extraPointsFromKk < this.heroKk)
                return this._damageAddPoints + this.heroKk - this.extraPointsFromKk;
            else
                return this._damageAddPoints;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weapon.prototype, "damageTextGeneral", {
        get: function () {
            return this.damageDice.toString() + 'W6+' + this._damageAddPoints.toString();
        },
        enumerable: true,
        configurable: true
    });
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

/***/ "./src/app/domain/weapons.service.ts":
/*!*******************************************!*\
  !*** ./src/app/domain/weapons.service.ts ***!
  \*******************************************/
/*! exports provided: WeaponService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponService", function() { return WeaponService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var app_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/hero-controls/hero-life.service */ "./src/app/hero-controls/hero-life.service.ts");
/* harmony import */ var app_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/url.service */ "./src/app/url.service.ts");
/* harmony import */ var _weapon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weapon */ "./src/app/domain/weapon.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WeaponService = /** @class */ (function () {
    function WeaponService(http, chRef, service) {
        this.http = http;
        this.chRef = chRef;
        this.service = service;
        this.weaponsUrl = app_url_service__WEBPACK_IMPORTED_MODULE_3__["UrlService"].getBaseUrl() + "/weapons/";
    }
    WeaponService.prototype.getWeapons = function () {
        var _this = this;
        if (this.weapons) {
            return new Promise(function (resolve) {
                resolve(_this.weapons);
            });
        }
        else {
            if (!this.weaponsPromise) {
                this.weaponsPromise = this.http.get(this.weaponsUrl)
                    .toPromise()
                    .then(function (response) {
                    _this.weapons = _this.extractWeapons(response);
                    return _this.weapons;
                });
            }
            return this.weaponsPromise;
        }
    };
    WeaponService.prototype.extractWeapons = function (res, skills) {
        if (skills === void 0) { skills = null; }
        var weapons = [];
        var body = res.json();
        body.forEach(function (weapon) {
            weapons.push(new _weapon__WEBPACK_IMPORTED_MODULE_4__["Weapon"](weapon['id'], weapon['name'], weapon['tp_dice'], weapon['tp_add_points'], weapon['extra_tp_from_kk']));
        });
        return weapons;
    };
    WeaponService.prototype.addWeapon = function (weapon, hero) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.service.sendUpate({
                heroId: hero.id,
                type: 'addWeapon',
                skill: weapon.skill.id,
                weaponName: weapon.name,
                damageDice: weapon.damageDice,
                damageAddPoints: weapon.damageAddPoints,
                extraPointsFromKk: weapon.extraPointsFromKk
            });
            resolve(weapon);
        });
    };
    WeaponService.prototype.deleteWeapon = function (weapon, hero) {
        var _this = this;
        new Promise(function (resolve, reject) {
            _this.service.sendUpate({
                type: 'deleteWeapon',
                heroId: hero.id,
                weaponId: weapon.id
            });
            resolve(weapon);
        });
    };
    WeaponService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], app_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_2__["HeroLifeService"]])
    ], WeaponService);
    return WeaponService;
}());



/***/ }),

/***/ "./src/app/edit-attribute/edit-attribute.component.css":
/*!*************************************************************!*\
  !*** ./src/app/edit-attribute/edit-attribute.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".editAttributeContainer {\n    /* background-color: #D1B99D; */\n    padding: 10px 20px 10px 20px;\n}\n\n.attributeName {\n    width: 100px;\n    text-align: left;\n}\n\n.targetValue, .costOfRaise {\n    width: 40px;\n}\n\nbutton {\n    z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1hdHRyaWJ1dGUvZWRpdC1hdHRyaWJ1dGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUErQjtJQUMvQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1hdHRyaWJ1dGUvZWRpdC1hdHRyaWJ1dGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0QXR0cmlidXRlQ29udGFpbmVyIHtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjRDFCOTlEOyAqL1xuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XG59XG5cbi5hdHRyaWJ1dGVOYW1lIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi50YXJnZXRWYWx1ZSwgLmNvc3RPZlJhaXNlIHtcbiAgICB3aWR0aDogNDBweDtcbn1cblxuYnV0dG9uIHtcbiAgICB6LWluZGV4OiAxMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/edit-attribute/edit-attribute.component.html":
/*!**************************************************************!*\
  !*** ./src/app/edit-attribute/edit-attribute.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-col center\">\n    <button (click)=\"increaseAttribute()\">\n        <div class=\"editAttributeContainer flex-row\" >\n            <div class=\"attributeName\">{{attribute.name}}</div>\n            <div class=\"targetValue\"><i class=\"fa fa-tachometer\"></i> {{targetValue}}</div>\n            <div class=\"costOfRaise\"><i class=\"fa fa-dollar\"></i> {{costOfAscension}}</div>\n        </div>\n    </button>\n    \n    <confirmation-sheet *ngIf=\"state === 'toBeConfirmed'\" confirmationText=\"Zahle {{costOfAscension}} um {{attribute.name}} zu steigern?\" (confirm)=\"confirmIncrease()\" (cancel)=\"cancelIncrease()\"></confirmation-sheet>\n    \n</div>"

/***/ }),

/***/ "./src/app/edit-attribute/edit-attribute.component.ts":
/*!************************************************************!*\
  !*** ./src/app/edit-attribute/edit-attribute.component.ts ***!
  \************************************************************/
/*! exports provided: EditAttributeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAttributeComponent", function() { return EditAttributeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_domain_actualAttribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/domain/actualAttribute */ "./src/app/domain/actualAttribute.ts");
/* harmony import */ var app_domain_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/domain/hero */ "./src/app/domain/hero.ts");
/* harmony import */ var _hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../hero-controls/hero-life.service */ "./src/app/hero-controls/hero-life.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditAttributeComponent = /** @class */ (function () {
    function EditAttributeComponent(service) {
        this.service = service;
        this._service = service;
    }
    EditAttributeComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(EditAttributeComponent.prototype, "attribute", {
        get: function () {
            return this._attribute;
        },
        set: function (attribute) {
            this._attribute = attribute;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditAttributeComponent.prototype, "hero", {
        get: function () {
            return this._hero;
        },
        set: function (hero) {
            this._hero = hero;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditAttributeComponent.prototype, "costOfAscension", {
        get: function () {
            return this._costOfAscension;
        },
        set: function (costOfAscension) {
            this._costOfAscension = costOfAscension;
        },
        enumerable: true,
        configurable: true
    });
    EditAttributeComponent.prototype.cancelIncrease = function () {
        this._state = '';
    };
    EditAttributeComponent.prototype.increaseAttribute = function () {
        this._state = 'toBeConfirmed';
    };
    EditAttributeComponent.prototype.confirmIncrease = function () {
        this._service.sendUpate({
            heroId: this._hero.id,
            type: 'updateAttribute',
            attribute: this._attribute.attribute.id,
            value: this.targetValue,
            price: this._costOfAscension
        });
        // this.heroMU
        this._state = '';
        this._attribute.value = this.targetValue;
        this.hero.experience_used += this.costOfAscension;
    };
    Object.defineProperty(EditAttributeComponent.prototype, "targetValue", {
        get: function () {
            return this._attribute.value + 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditAttributeComponent.prototype, "state", {
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", app_domain_actualAttribute__WEBPACK_IMPORTED_MODULE_1__["ActualAttribute"]),
        __metadata("design:paramtypes", [Object])
    ], EditAttributeComponent.prototype, "attribute", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", app_domain_hero__WEBPACK_IMPORTED_MODULE_2__["Hero"]),
        __metadata("design:paramtypes", [Object])
    ], EditAttributeComponent.prototype, "hero", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], EditAttributeComponent.prototype, "costOfAscension", null);
    EditAttributeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-attribute',
            template: __webpack_require__(/*! ./edit-attribute.component.html */ "./src/app/edit-attribute/edit-attribute.component.html"),
            styles: [__webpack_require__(/*! ./edit-attribute.component.css */ "./src/app/edit-attribute/edit-attribute.component.css")]
        }),
        __metadata("design:paramtypes", [_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_3__["HeroLifeService"]])
    ], EditAttributeComponent);
    return EditAttributeComponent;
}());



/***/ }),

/***/ "./src/app/edit-dialog/edit-dialog.component.css":
/*!*******************************************************!*\
  !*** ./src/app/edit-dialog/edit-dialog.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigationButton {\n  width: 250px;\n  margin-bottom: 5px;\n}\n\n.attributeContainer,\n.skillEntry,\n.spellEntry {\n  margin-bottom: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1kaWFsb2cvZWRpdC1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtZGlhbG9nL2VkaXQtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2aWdhdGlvbkJ1dHRvbiB7XG4gIHdpZHRoOiAyNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uYXR0cmlidXRlQ29udGFpbmVyLFxuLnNraWxsRW50cnksXG4uc3BlbGxFbnRyeSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/edit-dialog/edit-dialog.component.html":
/*!********************************************************!*\
  !*** ./src/app/edit-dialog/edit-dialog.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page flex-col center\">\n  <div class=\"pageContent\">\n    <div class=\"sheet flex-col center\" *ngIf=\"hero\">\n      <h2>Punkte einsetzen</h2>\n      <div>{{ hero.availablePoints }}</div>\n      <div id=\"firstStep\" *ngIf=\"state === 'initial'\" class=\"flex-col center\">\n        <h3>Was möchtest Du mit {{ hero.name }} tun?</h3>\n        <div class=\"flex-col\">\n          <button class=\"navigationButton\" (click)=\"setState('raiseAttribute')\">\n            Eigenschaft steigern\n          </button>\n          <button class=\"navigationButton\" (click)=\"setState('raiseTalent')\">\n            Talent steigern\n          </button>\n          <button\n            class=\"navigationButton\"\n            (click)=\"setState('raiseMagicTalent')\"\n            *ngIf=\"hero.knowsMagic === true\"\n          >\n            Zauberfertigkeit steigern\n          </button>\n        </div>\n      </div>\n      <div\n        id=\"raiseAttribute\"\n        *ngIf=\"state === 'raiseAttribute'\"\n        class=\"flex-col center\"\n      >\n        <h3>Welche Eigenschaft möchtest Du steigern?</h3>\n        <div\n          class=\"navigationButton flex-item\"\n          *ngFor=\"let attribute of hero.attributes; index as i; keyvalue\"\n        >\n          <edit-attribute\n            [attribute]=\"attribute\"\n            [costOfAscension]=\"getCostOfAttributeAscension(attribute)\"\n            [hero]=\"hero\"\n          ></edit-attribute>\n        </div>\n      </div>\n      <div\n        id=\"raiseTalent\"\n        *ngIf=\"state === 'raiseTalent'\"\n        class=\"flex-col center\"\n      >\n        <h3>Welches Talent möchtest Du steigern?</h3>\n        <div class=\"flex-col flex-item center\">\n          <div class=\"flex-row padded searchContainer center\">\n            <input\n              placeholder=\"Suchbegriff\"\n              [value]=\"talentSearchTerm\"\n              (input)=\"talentSearchTerm = $event.target.value\"\n            />\n          </div>\n          <div class=\"talente padded\">\n            <div\n              class=\"flex-col center\"\n              *ngFor=\"\n                let skillGroup of hero.skillGroups\n                  | MatchesTalentSearchTermChildren : talentSearchTerm\n              \"\n            >\n              <div class=\"skillGroupTitle\">\n                {{ skillGroup.skillGroup.name }}\n              </div>\n              <div class=\"skillGroupEntries\">\n                <div\n                  class=\"skillEntry\"\n                  *ngFor=\"\n                    let skill of skillGroup.skills\n                      | MatchesTalentSearchTerm : talentSearchTerm\n                  \"\n                >\n                  <edit-talent\n                    [skill]=\"skill\"\n                    [hero]=\"hero\"\n                    [costOfAscension]=\"getCostOfSkillAscension(skill)\"\n                  ></edit-talent>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div\n        id=\"raiseTalent\"\n        *ngIf=\"state === 'raiseMagicTalent'\"\n        class=\"flex-col center\"\n      >\n        <h3>Welche Zauberfertigkeit möchtest Du steigern?</h3>\n        <div class=\"flex-col flex-item center\">\n          <div class=\"flex-row padded searchContainer center\">\n            <input\n              placeholder=\"Suchbegriff\"\n              [value]=\"spellSearchTerm\"\n              (input)=\"spellSearchTerm = $event.target.value\"\n            />\n          </div>\n          <div class=\"talente padded\">\n            <div\n              class=\"flex-col center spellGroup\"\n              *ngFor=\"\n                let spellGroup of hero.spellGroups\n                  | MatchesSpellSearchTermChildren : spellSearchTerm\n              \"\n            >\n              <div class=\"spellGroupTitle\">\n                {{ spellGroup.spellGroup.name }}\n              </div>\n              <div class=\"spellGroupEntries\">\n                <div\n                  class=\"spellEntry\"\n                  *ngFor=\"\n                    let spell of spellGroup.spells\n                      | MatchesSpellSearchTerm : spellSearchTerm\n                  \"\n                >\n                  <edit-spell\n                    [spell]=\"spell\"\n                    [hero]=\"hero\"\n                    [costOfAscension]=\"getCostOfSpellAscension(spell)\"\n                  ></edit-spell>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/edit-dialog/edit-dialog.component.ts":
/*!******************************************************!*\
  !*** ./src/app/edit-dialog/edit-dialog.component.ts ***!
  \******************************************************/
/*! exports provided: EditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDialogComponent", function() { return EditDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_domain_enhancement_pricing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/domain/enhancement-pricing.service */ "./src/app/domain/enhancement-pricing.service.ts");
/* harmony import */ var app_domain_hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/domain/hero */ "./src/app/domain/hero.ts");
/* harmony import */ var app_edit_attribute_edit_attribute_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/edit-attribute/edit-attribute.component */ "./src/app/edit-attribute/edit-attribute.component.ts");
/* harmony import */ var _domain_hero_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../domain/hero.service */ "./src/app/domain/hero.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditDialogComponent = /** @class */ (function () {
    function EditDialogComponent(heroService, route, enhancementPricingService, dialogRef) {
        var _this = this;
        this.heroService = heroService;
        this.route = route;
        this.dialogRef = dialogRef;
        this.talentSearchTerm = '';
        this.spellSearchTerm = '';
        this.enhancementPricingService = enhancementPricingService;
        this.enhancementPricingService.getAscensionPricing().then(function (pricing) {
            _this.pricingTable = pricing;
        });
        this.state = 'initial';
    }
    EditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.heroService.getHero(+params['id']); })
            .subscribe(function (hero) {
            _this._hero = hero;
        });
    };
    EditDialogComponent.prototype.setState = function (state) {
        this.state = state;
    };
    EditDialogComponent.prototype.getState = function () {
        return 'initial';
    };
    Object.defineProperty(EditDialogComponent.prototype, "hero", {
        get: function () {
            return this._hero;
        },
        set: function (hero) {
            this._hero = hero;
        },
        enumerable: true,
        configurable: true
    });
    EditDialogComponent.prototype.getCostOfAttributeAscension = function (attribute) {
        var price = this.pricingTable.find(function (ascensionPricing) {
            return ascensionPricing.levelFrom === attribute.value;
        }).priceH;
        return price;
    };
    EditDialogComponent.prototype.getCostOfSkillAscension = function (skill) {
        var rowValue = skill.value;
        if (rowValue === -7)
            rowValue = 0;
        var price = this.pricingTable.find(function (ascensionPricing) {
            return ascensionPricing.levelFrom === rowValue;
        })[skill.getSkillGroup().getAscensionPricingTableColumn()];
        return price;
    };
    EditDialogComponent.prototype.getCostOfSpellAscension = function (spell) {
        var rowValue = spell.value;
        if (rowValue === -7)
            rowValue = 0;
        var price = this.pricingTable.find(function (ascensionPricing) {
            return ascensionPricing.levelFrom === rowValue;
        })[spell.getSpell().getAscensionPricingTableColumn()];
        return price;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", app_domain_hero__WEBPACK_IMPORTED_MODULE_4__["Hero"]),
        __metadata("design:paramtypes", [Object])
    ], EditDialogComponent.prototype, "hero", null);
    EditDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-dialog',
            providers: [
                app_edit_attribute_edit_attribute_component__WEBPACK_IMPORTED_MODULE_5__["EditAttributeComponent"]
                // MatDialogRef
            ],
            template: __webpack_require__(/*! ./edit-dialog.component.html */ "./src/app/edit-dialog/edit-dialog.component.html"),
            styles: [__webpack_require__(/*! ./edit-dialog.component.css */ "./src/app/edit-dialog/edit-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_domain_hero_service__WEBPACK_IMPORTED_MODULE_6__["HeroService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_domain_enhancement_pricing_service__WEBPACK_IMPORTED_MODULE_3__["EnhancementPricingService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], EditDialogComponent);
    return EditDialogComponent;
}());



/***/ }),

/***/ "./src/app/edit-money/edit-money.component.css":
/*!*****************************************************!*\
  !*** ./src/app/edit-money/edit-money.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n  font-size: 3rem;\n  text-align: center;\n}\n\np {\n  font-size: 1.5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1tb25leS9lZGl0LW1vbmV5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9lZGl0LW1vbmV5L2VkaXQtbW9uZXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnAge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/edit-money/edit-money.component.html":
/*!******************************************************!*\
  !*** ./src/app/edit-money/edit-money.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-col center\">\n  <img src=\"/assets/money-icon.png\" class=\"dialogHeroImage no-border\" />\n  <p>\n    Aktuell hast Du <span style=\"font-weight: 700;\">{{ accountEntry.amount }} {{ accountEntry.unit }}</span>.\n  </p>\n  <p>\n    Auf welchen Wert möchtest Du es setzen?\n  </p>\n\n  <input type=\"number\" placeholder=\"Die Anzahl deiner {{ accountEntry.unit }}\" [(ngModel)]=\"newAmount\" />\n</div>\n<hr />\n<div class=\"buttonRow row\">\n  <button (click)=\"raiseCancel()\">Doch nicht.</button>\n  <button class=\"background-danger\" (click)=\"raiseAccept()\">\n    <i class=\"fa fa-magic\"></i> So ist das jetzt mit dem Geld\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/edit-money/edit-money.component.ts":
/*!****************************************************!*\
  !*** ./src/app/edit-money/edit-money.component.ts ***!
  \****************************************************/
/*! exports provided: EditMoneyComponent, EditMoneyData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMoneyComponent", function() { return EditMoneyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMoneyData", function() { return EditMoneyData; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_domain_moneyInventory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/domain/moneyInventory */ "./src/app/domain/moneyInventory.ts");
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



var EditMoneyComponent = /** @class */ (function () {
    function EditMoneyComponent(dialog, data) {
        this.dialog = dialog;
        this.data = data;
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newAmount = data.amount;
        this.accountEntry = data;
    }
    EditMoneyComponent.prototype.ngOnInit = function () {
    };
    EditMoneyComponent.prototype.raiseAccept = function () {
        this.confirm.emit(new EditMoneyData(this.accountEntry, this.newAmount));
    };
    EditMoneyComponent.prototype.raiseCancel = function () {
        this.cancel.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditMoneyComponent.prototype, "confirm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditMoneyComponent.prototype, "cancel", void 0);
    EditMoneyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-money',
            template: __webpack_require__(/*! ./edit-money.component.html */ "./src/app/edit-money/edit-money.component.html"),
            styles: [__webpack_require__(/*! ./edit-money.component.css */ "./src/app/edit-money/edit-money.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], app_domain_moneyInventory__WEBPACK_IMPORTED_MODULE_2__["AccountEntry"]])
    ], EditMoneyComponent);
    return EditMoneyComponent;
}());

var EditMoneyData = /** @class */ (function () {
    function EditMoneyData(accountEntry, newAmount) {
        this.accountEntry = accountEntry;
        this.newAmount = newAmount;
    }
    return EditMoneyData;
}());



/***/ }),

/***/ "./src/app/edit-spell/edit-spell.component.css":
/*!*****************************************************!*\
  !*** ./src/app/edit-spell/edit-spell.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".skillTitle {\n  width: 140px;\n  font-weight: 600;\n  text-align: left;\n}\n\n.targetValue {\n  margin-right: 0.25rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1zcGVsbC9lZGl0LXNwZWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtc3BlbGwvZWRpdC1zcGVsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNraWxsVGl0bGUge1xuICB3aWR0aDogMTQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50YXJnZXRWYWx1ZSB7XG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/edit-spell/edit-spell.component.html":
/*!******************************************************!*\
  !*** ./src/app/edit-spell/edit-spell.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-col center\">\n  <button (click)=\"increaseSpell()\">\n    <div class=\"flex-row skill\">\n      <div class=\"skillTitle\">{{ spell.getSpell().name }}</div>\n      <div class=\"targetValue\">\n        <i class=\"fa fa-tachometer\"></i> {{ targetValue }}\n      </div>\n      <div class=\"costOfRaise\">\n        <i class=\"fa fa-dollar\"></i> {{ costOfAscension }}\n      </div>\n    </div>\n  </button>\n  <confirmation-sheet\n    *ngIf=\"state === 'toBeConfirmed'\"\n    confirmationText=\"Zahle {{ costOfAscension }} um {{\n      spell.spell.name\n    }} zu steigern?\"\n    (confirm)=\"confirmIncrease()\"\n    (cancel)=\"cancelIncrease()\"\n  ></confirmation-sheet>\n</div>\n"

/***/ }),

/***/ "./src/app/edit-spell/edit-spell.component.ts":
/*!****************************************************!*\
  !*** ./src/app/edit-spell/edit-spell.component.ts ***!
  \****************************************************/
/*! exports provided: EditSpellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSpellComponent", function() { return EditSpellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_domain_actualSpell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/domain/actualSpell */ "./src/app/domain/actualSpell.ts");
/* harmony import */ var app_domain_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/domain/hero */ "./src/app/domain/hero.ts");
/* harmony import */ var app_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/hero-controls/hero-life.service */ "./src/app/hero-controls/hero-life.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditSpellComponent = /** @class */ (function () {
    function EditSpellComponent(service) {
        this.service = service;
        this._service = service;
    }
    EditSpellComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(EditSpellComponent.prototype, "targetValue", {
        get: function () {
            if (this.spell.value === -7)
                return 0;
            else
                return this.spell.value + 1;
        },
        enumerable: true,
        configurable: true
    });
    EditSpellComponent.prototype.increaseSpell = function () {
        this._state = 'toBeConfirmed';
    };
    EditSpellComponent.prototype.cancelIncrease = function () {
        this._state = '';
    };
    EditSpellComponent.prototype.confirmIncrease = function () {
        this._service.sendUpate({
            heroId: this.hero.id,
            type: 'updateSpell',
            skillId: this.spell.getSpell().id,
            assignmentId: this.spell.assignmentId,
            value: this.targetValue,
            price: this.costOfAscension
        });
        this.spell.value = this.targetValue;
        this.hero.experience_used += this.costOfAscension;
        // this.heroMU
        this._state = '';
    };
    Object.defineProperty(EditSpellComponent.prototype, "state", {
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", app_domain_actualSpell__WEBPACK_IMPORTED_MODULE_1__["ActualSpell"])
    ], EditSpellComponent.prototype, "spell", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], EditSpellComponent.prototype, "costOfAscension", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", app_domain_hero__WEBPACK_IMPORTED_MODULE_2__["Hero"])
    ], EditSpellComponent.prototype, "hero", void 0);
    EditSpellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-spell',
            template: __webpack_require__(/*! ./edit-spell.component.html */ "./src/app/edit-spell/edit-spell.component.html"),
            styles: [__webpack_require__(/*! ./edit-spell.component.css */ "./src/app/edit-spell/edit-spell.component.css")]
        }),
        __metadata("design:paramtypes", [app_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_3__["HeroLifeService"]])
    ], EditSpellComponent);
    return EditSpellComponent;
}());



/***/ }),

/***/ "./src/app/edit-talent/edit-talent.component.css":
/*!*******************************************************!*\
  !*** ./src/app/edit-talent/edit-talent.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".skillTitle {\n  width: 140px;\n  font-weight: 600;\n  text-align: left;\n}\n\n.targetValue {\n  margin-right: 0.25rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC10YWxlbnQvZWRpdC10YWxlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvZWRpdC10YWxlbnQvZWRpdC10YWxlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5za2lsbFRpdGxlIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udGFyZ2V0VmFsdWUge1xuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/edit-talent/edit-talent.component.html":
/*!********************************************************!*\
  !*** ./src/app/edit-talent/edit-talent.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-col center\">\n  <button (click)=\"increaseSkill()\">\n    <div class=\"flex-row skill\">\n      <div class=\"skillTitle\">{{skill.getSkill().name}}</div>\n      <div class=\"targetValue\"><i class=\"fa fa-tachometer\"></i> {{targetValue}}</div>\n      <div class=\"costOfRaise\"><i class=\"fa fa-dollar\"></i> {{costOfAscension}}</div>\n    </div>\n  </button>\n  <confirmation-sheet *ngIf=\"state === 'toBeConfirmed'\" confirmationText=\"Zahle {{costOfAscension}} um {{skill.skill.name}} zu steigern?\" (confirm)=\"confirmIncrease()\" (cancel)=\"cancelIncrease()\"></confirmation-sheet>\n</div>"

/***/ }),

/***/ "./src/app/edit-talent/edit-talent.component.ts":
/*!******************************************************!*\
  !*** ./src/app/edit-talent/edit-talent.component.ts ***!
  \******************************************************/
/*! exports provided: EditTalentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTalentComponent", function() { return EditTalentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_domain_actualSkill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/domain/actualSkill */ "./src/app/domain/actualSkill.ts");
/* harmony import */ var app_domain_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/domain/hero */ "./src/app/domain/hero.ts");
/* harmony import */ var app_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/hero-controls/hero-life.service */ "./src/app/hero-controls/hero-life.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditTalentComponent = /** @class */ (function () {
    function EditTalentComponent(service) {
        this.service = service;
        this._service = service;
    }
    EditTalentComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(EditTalentComponent.prototype, "targetValue", {
        get: function () {
            if (this.skill.value === -7)
                return 0;
            else
                return this.skill.value + 1;
        },
        enumerable: true,
        configurable: true
    });
    EditTalentComponent.prototype.increaseSkill = function () {
        this._state = 'toBeConfirmed';
    };
    EditTalentComponent.prototype.cancelIncrease = function () {
        this._state = '';
    };
    EditTalentComponent.prototype.confirmIncrease = function () {
        this._service.sendUpate({
            heroId: this.hero.id,
            type: 'updateSkill',
            skillId: this.skill.getSkill().id,
            assignmentId: this.skill.assignmentId,
            value: this.targetValue,
            price: this.costOfAscension
        });
        this.skill.value = this.targetValue;
        this.hero.experience_used += this.costOfAscension;
        // this.heroMU
        this._state = '';
    };
    Object.defineProperty(EditTalentComponent.prototype, "state", {
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", app_domain_actualSkill__WEBPACK_IMPORTED_MODULE_1__["ActualSkill"])
    ], EditTalentComponent.prototype, "skill", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], EditTalentComponent.prototype, "costOfAscension", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", app_domain_hero__WEBPACK_IMPORTED_MODULE_2__["Hero"])
    ], EditTalentComponent.prototype, "hero", void 0);
    EditTalentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-talent',
            template: __webpack_require__(/*! ./edit-talent.component.html */ "./src/app/edit-talent/edit-talent.component.html"),
            styles: [__webpack_require__(/*! ./edit-talent.component.css */ "./src/app/edit-talent/edit-talent.component.css")]
        }),
        __metadata("design:paramtypes", [app_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_3__["HeroLifeService"]])
    ], EditTalentComponent);
    return EditTalentComponent;
}());



/***/ }),

/***/ "./src/app/experience-addition/experience-addition.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/experience-addition/experience-addition.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n    margin-top: 3rem;\n    margin-bottom: 3rem;\n    font-size: 3rem;\n    text-align: center;\n}\n\n.buttonRow {\n    margin-top: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS1hZGRpdGlvbi9leHBlcmllbmNlLWFkZGl0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9leHBlcmllbmNlLWFkZGl0aW9uL2V4cGVyaWVuY2UtYWRkaXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ1dHRvblJvdyB7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/experience-addition/experience-addition.component.html":
/*!************************************************************************!*\
  !*** ./src/app/experience-addition/experience-addition.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-col center\">\n  <img src=\"/assets/scroll.png\" class=\"dialogHeroImage no-border\" />\n  <h4 class=\"titleText\">Neue Abenteuerpunkte</h4>\n  <input\n    type=\"number\"\n    placeholder=\"Die Anzahl deiner neuen Abenteuerpunkte\"\n    [(ngModel)]=\"newPointsToAdd\"\n  />\n</div>\n<div class=\"buttonRow row\">\n  <button (click)=\"raiseCancel()\">\n    Aaah, Quatsch, kommt doch nichts dazu.\n  </button>\n  <button class=\"\" (click)=\"raiseStopTimer()\">\n    <i class=\"fa fa-magic\"></i> Her mit den Punkten!\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/experience-addition/experience-addition.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/experience-addition/experience-addition.component.ts ***!
  \**********************************************************************/
/*! exports provided: ExperienceAdditionComponent, ConfirmationData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceAdditionComponent", function() { return ExperienceAdditionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationData", function() { return ConfirmationData; });
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


var ExperienceAdditionComponent = /** @class */ (function () {
    function ExperienceAdditionComponent(dialog, data) {
        this.dialog = dialog;
        this.data = data;
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newPointsToAdd = 10;
    }
    ExperienceAdditionComponent.prototype.ngOnInit = function () {
    };
    ExperienceAdditionComponent.prototype.raiseAccept = function () {
        this.confirm.emit(this.newPointsToAdd);
    };
    ExperienceAdditionComponent.prototype.raiseCancel = function () {
        this.cancel.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ExperienceAdditionComponent.prototype, "confirm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ExperienceAdditionComponent.prototype, "cancel", void 0);
    ExperienceAdditionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience-addition',
            template: __webpack_require__(/*! ./experience-addition.component.html */ "./src/app/experience-addition/experience-addition.component.html"),
            styles: [__webpack_require__(/*! ./experience-addition.component.css */ "./src/app/experience-addition/experience-addition.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], ConfirmationData])
    ], ExperienceAdditionComponent);
    return ExperienceAdditionComponent;
}());

var ConfirmationData = /** @class */ (function () {
    function ConfirmationData(currentPoints, newPointsToAdd) {
        this.currentPoints = currentPoints;
        this.newPointsToAdd = newPointsToAdd;
    }
    return ConfirmationData;
}());



/***/ }),

/***/ "./src/app/experience-display/experience-display.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/experience-display/experience-display.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overalContainer {\n  /* position: absolute; */\n  overflow: visible;\n}\n\n.experienceContainer {\n  font-size: 2.5rem;\n}\n\n.overalContainer {\n  background-image: url(\"/assets/scroll.png\");\n  background-repeat: no-repeat;\n  background-size: 5rem;\n  background-position: center 0;\n  padding-top: 5rem;\n  padding-bottom: 4rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS1kaXNwbGF5L2V4cGVyaWVuY2UtZGlzcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZXhwZXJpZW5jZS1kaXNwbGF5L2V4cGVyaWVuY2UtZGlzcGxheS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJhbENvbnRhaW5lciB7XG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5leHBlcmllbmNlQ29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbi5vdmVyYWxDb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3Njcm9sbC5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNXJlbTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDA7XG4gIHBhZGRpbmctdG9wOiA1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/experience-display/experience-display.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/experience-display/experience-display.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overalContainer flex flex-col center\">\n  <div class=\"experienceContainer\">{{ experience }} Abenteuerpunkte</div>\n  <button (click)=\"openAddExperiencePointsDialog()\"><i class=\"fa fa-plus\"></i></button>\n  <!-- <div class=\"experienceLeftContainer flex-item\">\n    {{ availablePoints }} übrig\n  </div> -->\n</div>"

/***/ }),

/***/ "./src/app/experience-display/experience-display.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/experience-display/experience-display.component.ts ***!
  \********************************************************************/
/*! exports provided: ExperienceDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceDisplayComponent", function() { return ExperienceDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_domain_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/domain/hero */ "./src/app/domain/hero.ts");
/* harmony import */ var app_experience_addition_experience_addition_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/experience-addition/experience-addition.component */ "./src/app/experience-addition/experience-addition.component.ts");
/* harmony import */ var app_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/hero-controls/hero-life.service */ "./src/app/hero-controls/hero-life.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExperienceDisplayComponent = /** @class */ (function () {
    function ExperienceDisplayComponent(dialog, lifeService) {
        this.dialog = dialog;
        this.lifeService = lifeService;
    }
    ExperienceDisplayComponent.prototype.ngOnInit = function () {
    };
    ExperienceDisplayComponent.prototype.openAddExperiencePointsDialog = function () {
        this.addExperiencePointsDialogRef = this.dialog.open(app_experience_addition_experience_addition_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceAdditionComponent"], { data: new app_experience_addition_experience_addition_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationData"](this.hero.experience, 0) });
        this.addExperiencePointsDialogRef.componentInstance.confirm.subscribe(this.addExperiencePoints.bind(this));
        this.addExperiencePointsDialogRef.componentInstance.cancel.subscribe(this.closeAddExperiencePointsDialog.bind(this));
    };
    ExperienceDisplayComponent.prototype.addExperiencePoints = function (additionalPoints) {
        this.lifeService.sendUpate({
            type: 'addExperiencePoints',
            heroId: this.hero.id,
            additionalPoints: additionalPoints
        });
        this.closeAddExperiencePointsDialog();
    };
    ExperienceDisplayComponent.prototype.closeAddExperiencePointsDialog = function () {
        this.addExperiencePointsDialogRef.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ExperienceDisplayComponent.prototype, "experience", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ExperienceDisplayComponent.prototype, "availablePoints", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", app_domain_hero__WEBPACK_IMPORTED_MODULE_2__["Hero"])
    ], ExperienceDisplayComponent.prototype, "hero", void 0);
    ExperienceDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'experience-display',
            template: __webpack_require__(/*! ./experience-display.component.html */ "./src/app/experience-display/experience-display.component.html"),
            styles: [__webpack_require__(/*! ./experience-display.component.css */ "./src/app/experience-display/experience-display.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], app_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_4__["HeroLifeService"]])
    ], ExperienceDisplayComponent);
    return ExperienceDisplayComponent;
}());



/***/ }),

/***/ "./src/app/fight-display/fight-display.component.css":
/*!***********************************************************!*\
  !*** ./src/app/fight-display/fight-display.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpZ2h0LWRpc3BsYXkvZmlnaHQtZGlzcGxheS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/fight-display/fight-display.component.html":
/*!************************************************************!*\
  !*** ./src/app/fight-display/fight-display.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div *ngFor=\"let hero of heroes\">\n    <span>{{ hero.name }}</span>\n  </div>\n</div>\n"

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

module.exports = ".setupAssistant {\n  display: flex;\n  flex-direction: column;\n}\n\n.addHeroes,\n.addOpponents {\n  display: flex;\n  flex-direction: column;\n  margin: 0.5rem;\n}\n\n.Grid-cell {\n  margin: 1rem;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n\n#fight-setup-step-3 combatant,\n#fight combatant {\n  width: 20rem;\n  max-width: 20rem;\n}\n\n#fight-setup-step-3 button {\n  margin-bottom: 2rem;\n}\n\ncombatant.good {\n  margin-left: -1rem;\n}\n\ncombatant.evil {\n  margin-left: 1rem;\n}\n\n.searchInput {\n  margin: 0 0.5rem 0.5rem 0.5rem;\n  justify-self: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlnaHQtc2V0dXAvZmlnaHQtc2V0dXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZmlnaHQtc2V0dXAvZmlnaHQtc2V0dXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXR1cEFzc2lzdGFudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5hZGRIZXJvZXMsXG4uYWRkT3Bwb25lbnRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAwLjVyZW07XG59XG5cbi5HcmlkLWNlbGwge1xuICBtYXJnaW46IDFyZW07XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuI2ZpZ2h0LXNldHVwLXN0ZXAtMyBjb21iYXRhbnQsXG4jZmlnaHQgY29tYmF0YW50IHtcbiAgd2lkdGg6IDIwcmVtO1xuICBtYXgtd2lkdGg6IDIwcmVtO1xufVxuXG4jZmlnaHQtc2V0dXAtc3RlcC0zIGJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbmNvbWJhdGFudC5nb29kIHtcbiAgbWFyZ2luLWxlZnQ6IC0xcmVtO1xufVxuY29tYmF0YW50LmV2aWwge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnNlYXJjaElucHV0IHtcbiAgbWFyZ2luOiAwIDAuNXJlbSAwLjVyZW0gMC41cmVtO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/fight-setup/fight-setup.component.html":
/*!********************************************************!*\
  !*** ./src/app/fight-setup/fight-setup.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-col center page\">\n  <div class=\"pageContent\">\n    <div *ngIf=\"state === 'initial'\">\n      <button (click)=\"startNewFight()\">Neuen Kampf starten</button>\n      <div id=\"existingFights\">\n        <ul>\n          <li *ngFor=\"let fight of existingFights\">\n            <span>{{ fight.name }}</span\n            ><button (click)=\"continueFight(fight)\">Weiter kämpfen</button>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div id=\"fight-setup-step-1\" *ngIf=\"state === 'setup_1'\" class=\"flex-col\">\n      <div class=\"flex-row space-between\">\n        <h2>1. Die Guten</h2>\n        <button (click)=\"goToStep2()\">> 2. Gegner</button>\n      </div>\n      <div class=\"Grid\">\n        <div class=\"Grid-cell\">\n          <div class=\"header\">\n            <div>Helden</div>\n            <div class=\"headerButtons\">\n              <button (click)=\"addAllHeroes()\">Alle +</button>\n              <button (click)=\"removeAllHeroes()\">Alle -</button>\n            </div>\n          </div>\n          <div *ngFor=\"let hero of heroes\">\n            <combatant\n              [isActive]=\"false\"\n              class=\"combatant\"\n              [usedForGood]=\"true\"\n              [combatant]=\"hero\"\n            ></combatant>\n          </div>\n        </div>\n        <div class=\"Grid-cell\">\n          <div class=\"header\">\n            <div>Andere</div>\n            <button (click)=\"initNPCGeneration()\">NPC anlegen</button>\n          </div>\n          <div class=\"flex-col\">\n            <input\n              class=\"searchInput\"\n              placeholder=\"Suchbegriff\"\n              [value]=\"combatantSearchTerm\"\n              (input)=\"combatantSearchTerm = $event.target.value\"\n            />\n          </div>\n          <div *ngIf=\"createNPCNow === true\">\n            <div class=\"header\">Neuer NPC</div>\n            <div *ngFor=\"let npcType of npcTypes\">{{ npcType.name }}</div>\n          </div>\n\n          <div\n            *ngFor=\"\n              let npc of npcs | MatchesCombatantSearchTerm : combatantSearchTerm\n            \"\n          >\n            <combatant\n              [isActive]=\"false\"\n              class=\"combatant\"\n              [combatant]=\"npc\"\n              [usedForGood]=\"true\"\n            ></combatant>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"fight-setup-step-2\" *ngIf=\"state === 'setup_2'\" class=\"flex-col\">\n      <div class=\"flex-row space-between\">\n        <h2>2. Die Bösen</h2>\n        <button (click)=\"goToStep3()\">> 3. Initiative</button>\n      </div>\n      <div class=\"Grid\">\n        <div class=\"Grid-cell\">\n          <div class=\"header\">\n            <div>Andere</div>\n            <button (click)=\"initNPCGeneration()\">NPC anlegen</button>\n          </div>\n          <div class=\"flex-col\">\n            <input\n              class=\"searchInput\"\n              placeholder=\"Suchbegriff\"\n              [value]=\"combatantSearchTerm\"\n              (input)=\"combatantSearchTerm = $event.target.value\"\n            />\n          </div>\n          <div *ngIf=\"createNPCNow === true\">\n            <div class=\"header\">Neuer NPC</div>\n            <div *ngFor=\"let npcType of npcTypes\">{{ npcType.name }}</div>\n          </div>\n\n          <div\n            *ngFor=\"\n              let npc of npcs\n                | IsGoodFighter : false\n                | MatchesCombatantSearchTerm : combatantSearchTerm\n            \"\n          >\n            <combatant\n              [isActive]=\"false\"\n              class=\"combatant\"\n              [combatant]=\"npc\"\n              [usedForGood]=\"false\"\n            ></combatant>\n          </div>\n        </div>\n        <div class=\"Grid-cell\">\n          <div class=\"header\">\n            <div>Helden</div>\n            <div class=\"headerButtons\">\n              <button (click)=\"addAllHeroes()\">Alle +</button>\n              <button (click)=\"removeAllHeroes()\">Alle -</button>\n            </div>\n          </div>\n          <div *ngFor=\"let hero of heroes | IsGoodFighter : false\">\n            <combatant\n              [isActive]=\"false\"\n              class=\"combatant\"\n              [combatant]=\"hero\"\n              [usedForGood]=\"false\"\n            ></combatant>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      id=\"fight-setup-step-3\"\n      *ngIf=\"state === 'setup_overview'\"\n      class=\"flex-col\"\n    >\n      <div class=\"flex-row space-between\">\n        <h2>3. Initiative</h2>\n        <button (click)=\"nameIt()\" [disabled]=\"allSet !== true\">\n          > 4. Ein Name noch!\n        </button>\n      </div>\n      <button (click)=\"calculateInititives()\">Initiative berechnen</button>\n      <div class=\"flex-col center\">\n        <combatant\n          [isActive]=\"true\"\n          *ngFor=\"let combatant of combatants\"\n          [combatant]=\"combatant\"\n        ></combatant>\n      </div>\n    </div>\n    <div id=\"fight-setup-step-4\" *ngIf=\"state === 'name'\" class=\"flex-col\">\n      <div class=\"flex-row space-between\">\n        <h2>Gib dem Kampf einen Namen</h2>\n        <button (click)=\"go()\" [disabled]=\"allSet !== true\">\n          > 5. Let's go!\n        </button>\n      </div>\n      <input [(ngModel)]=\"fightName\" />\n    </div>\n    <div id=\"fight\" *ngIf=\"state === 'fight'\">\n      <button (click)=\"nextFighter()\">Nächster</button>\n\n      <div class=\"flex-col center\">\n        <combatant\n          [isActive]=\"true\"\n          *ngFor=\"let combatant of combatants\"\n          [combatant]=\"combatant\"\n        ></combatant>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var app_domain_adventure_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/domain/adventure.service */ "./src/app/domain/adventure.service.ts");
/* harmony import */ var app_domain_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/domain/hero */ "./src/app/domain/hero.ts");
/* harmony import */ var app_domain_hero_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/domain/hero.service */ "./src/app/domain/hero.service.ts");
/* harmony import */ var app_domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/domain/remoteControlOperation */ "./src/app/domain/remoteControlOperation.ts");
/* harmony import */ var app_remote_control_remote_control_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/remote-control/remote-control.service */ "./src/app/remote-control/remote-control.service.ts");
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
    function FightSetupComponent(remoteControlService, adventureService, heroService) {
        var _this = this;
        this.remoteControlService = remoteControlService;
        this.adventureService = adventureService;
        this.heroService = heroService;
        this.createNPCNow = false;
        this.fightName = 'Rumble in the djungle';
        this.combatantSearchTerm = '';
        this.state = 'initial';
        this.heroService.getHeroes().then(function (heroes) {
            for (var index = 0; index < heroes.length; index++) {
                var hero = heroes[index];
                hero.selectedForFight = false;
            }
            _this.heroes = heroes;
        });
        this.adventureService.getNPCs().then(function (npcs) {
            for (var index = 0; index < npcs.length; index++) {
                var npc = npcs[index];
                npc.selectedForFight = false;
            }
            _this.npcs = npcs;
        });
        this.adventureService.getNPCTypes().then(function (npcTypes) {
            _this.npcTypes = npcTypes;
        });
        this.adventureService.getFights().then(function (fights) {
            _this.existingFights = fights;
        });
    }
    FightSetupComponent.prototype.ngOnInit = function () {
    };
    FightSetupComponent.prototype.initNPCGeneration = function () {
        this.createNPCNow = true;
    };
    FightSetupComponent.prototype.startNewFight = function () {
        this.state = 'setup_1';
    };
    FightSetupComponent.prototype.goToStep2 = function () {
        this.state = 'setup_2';
        this.combatants = this.heroes.filter(function (hero) { return hero.selectedForFight === true; }).concat(this.npcs.filter(function (npc) { return npc.selectedForFight === true; }));
    };
    FightSetupComponent.prototype.goToStep3 = function () {
        this.state = 'setup_overview';
        this.combatants = this.combatants.concat(this.heroes.filter(function (hero) { return hero.selectedForFight === true && hero.isGood === false; })).concat(this.npcs.filter(function (npc) { return npc.selectedForFight === true && npc.isGood === false; }));
    };
    FightSetupComponent.prototype.calculateInititives = function () {
        for (var index = 0; index < this.combatants.length; index++) {
            var combatant = this.combatants[index];
            combatant.currentInitiative = combatant.initiative + +Math.floor(Math.random() * 6 + 1);
        }
        this.combatants.sort(function (combatantA, combatantB) {
            return combatantB.currentInitiative - combatantA.currentInitiative;
        });
        this.allSet = true;
    };
    FightSetupComponent.prototype.nameIt = function () {
        this.state = 'name';
    };
    FightSetupComponent.prototype.go = function () {
        this.state = 'fight';
        for (var index = 0; index < this.combatants.length; index++) {
            var combatant = this.combatants[index];
            if (index === 0)
                combatant.nextUp = true;
            else
                combatant.nextUp = false;
        }
        this.startFight(this.fightName, this.adventureService.getCurrentAdventureId(), this.combatants.map(function (combatant) {
            return {
                isGood: combatant.isGood,
                isCharacter: combatant instanceof app_domain_hero__WEBPACK_IMPORTED_MODULE_2__["Hero"],
                id: combatant.id,
                initiative: combatant.currentInitiative
            };
        }));
    };
    FightSetupComponent.prototype.nextFighter = function () {
        var nextFighterIsUp = false;
        for (var index = 0; index < this.combatants.length; index++) {
            var combatant = this.combatants[index];
            if (combatant.nextUp === true) {
                nextFighterIsUp = true;
                combatant.nextUp = false;
            }
            else if (nextFighterIsUp) {
                combatant.nextUp = true;
                nextFighterIsUp = false;
            }
        }
        if (nextFighterIsUp)
            this.combatants[0].nextUp = true;
    };
    FightSetupComponent.prototype.createNPC = function (templateId, name) {
        this.remoteControlService.sendRemoteControlInstruction(app_domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_4__["OperationFactory"].createOperation(app_domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_4__["operationTypes"].createNPC, 'self', { name: name, templateId: templateId }));
    };
    FightSetupComponent.prototype.startFight = function (fightNameParam, currentAdventureId, participants) {
        this.remoteControlService.sendRemoteControlInstruction(app_domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_4__["OperationFactory"].createOperation(app_domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_4__["operationTypes"].startFight, 'self', { name: fightNameParam, adventureId: currentAdventureId, participants: participants }));
    };
    FightSetupComponent.prototype.continueFight = function (fight) {
        console.log(fight);
    };
    FightSetupComponent.prototype.addAllHeroes = function () {
        this.heroes.forEach(function (hero) {
            hero.selectedForFight = true;
        });
    };
    FightSetupComponent.prototype.removeAllHeroes = function () {
        this.heroes.forEach(function (hero) {
            hero.selectedForFight = false;
        });
    };
    FightSetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fight-setup',
            template: __webpack_require__(/*! ./fight-setup.component.html */ "./src/app/fight-setup/fight-setup.component.html"),
            styles: [__webpack_require__(/*! ./fight-setup.component.css */ "./src/app/fight-setup/fight-setup.component.css")]
        }),
        __metadata("design:paramtypes", [app_remote_control_remote_control_service__WEBPACK_IMPORTED_MODULE_5__["RemoteControlService"], app_domain_adventure_service__WEBPACK_IMPORTED_MODULE_1__["AdventureService"], app_domain_hero_service__WEBPACK_IMPORTED_MODULE_3__["HeroService"]])
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

module.exports = "mat-card {\n  padding: 0;\n  /* background-color: #f2f1ed; */\n  box-shadow: 0 2px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0px 4px 20px 2px rgba(0, 0, 0, 0.48) !important;\n}\n\nmat-card-content {\n  display: block;\n}\n\nmat-card-title {\n  margin-bottom: 0;\n}\n\n.cardContentContainer {\n  margin-right: 2rem;\n  margin-left: 2rem;\n  height: 100px;\n  position: relative;\n  overflow: visible;\n  padding: 0px;\n}\n\nh2 {\n  margin: 0;\n  font-size: 1.75rem;\n}\n\n.heroValues {\n  height: 50px;\n}\n\n.heroAvatar {\n  position: absolute;\n  bottom: 53px;\n  right: 10px;\n  height: 190px;\n  z-index: 10;\n  display: block;\n}\n\n.heroAvatar img {\n  height: 100%;\n}\n\nul {\n  list-style-type: none;\n  color: #4b4b4b;\n  margin-left: 20px;\n  padding: 0 0 5px 10px;\n  font-family: Neucha, sans-serif;\n}\n\nli::before {\n  content: none;\n}\n\ndiv.label {\n  width: 96px;\n  float: left;\n}\n\n.headerContent {\n  cursor: pointer;\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n\n.hero-entry-container {\n  position: relative;\n}\n\n.heroes-entry {\n  overflow: hidden;\n  background-color: #fff;\n}\n\n.actionsContainer {\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyby1jYXJkL2hlcm8tY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLCtCQUErQjtFQUMvQjttREFDaUQ7QUFDbkQ7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9oZXJvLWNhcmQvaGVyby1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gIHBhZGRpbmc6IDA7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmMmYxZWQ7ICovXG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAwcHggNHB4IDIwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC40OCkgIWltcG9ydGFudDtcbn1cblxubWF0LWNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5tYXQtY2FyZC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5jYXJkQ29udGVudENvbnRhaW5lciB7XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gIGhlaWdodDogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cblxuLmhlcm9WYWx1ZXMge1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5oZXJvQXZhdGFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDUzcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBoZWlnaHQ6IDE5MHB4O1xuICB6LWluZGV4OiAxMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5oZXJvQXZhdGFyIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGNvbG9yOiAjNGI0YjRiO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgcGFkZGluZzogMCAwIDVweCAxMHB4O1xuICBmb250LWZhbWlseTogTmV1Y2hhLCBzYW5zLXNlcmlmO1xufVxuXG5saTo6YmVmb3JlIHtcbiAgY29udGVudDogbm9uZTtcbn1cblxuZGl2LmxhYmVsIHtcbiAgd2lkdGg6IDk2cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uaGVhZGVyQ29udGVudCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xufVxuXG4uaGVyby1lbnRyeS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oZXJvZXMtZW50cnkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uYWN0aW9uc0NvbnRhaW5lciB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/hero-card/hero-card.component.html":
/*!****************************************************!*\
  !*** ./src/app/hero-card/hero-card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero-entry-container\">\n  <div class=\"heroes-entry comic-shadow border border-3\">\n    <div class=\"headerContainer\" (click)=\"gotoDetail()\">\n      <!--  -->\n      <div class=\"headerContent\">\n        <h2>{{ hero.name }}</h2>\n        <span>{{ hero.hero_type.name }}, Stufe {{ hero.level }}</span>\n      </div>\n    </div>\n    <div class=\"cardContentContainer\" (click)=\"gotoDetail()\">\n      <ul *ngIf=\"hero.currentWeapon && hero.currentWeaponSkillIsMelee()\">\n        <li>\n          <div class=\"label\">Attacke:</div>\n          {{ hero.currentAttack }}\n        </li>\n        <li>\n          <div class=\"label\">Parade:</div>\n          {{ hero.currentParade }}\n        </li>\n        <li>\n          <div class=\"label\">Trefferpunkte:</div>\n          {{ hero.currentWeaponDamageText }}\n        </li>\n        <li>\n          <p>Rüstung: {{hero.armorValue}}</p>\n        </li>\n      </ul>\n      <ul *ngIf=\"hero.currentWeapon && hero.currentWeaponSkillIsLongRange()\">\n        <li>\n          <div class=\"label\">Fernkampfwert:</div>\n          {{ hero.currentLongRangeValue }}\n        </li>\n        <li>\n          <div class=\"label\">Trefferpunkte:</div>\n          {{ hero.currentWeaponDamageText }}\n        </li>\n        <li>\n          <p>Rüstung: {{hero.armorValue}}</p>\n        </li>\n      </ul>\n    </div>\n    <div class=\"actionsContainer\">\n      <hero-controls [hero]=\"hero\"> </hero-controls>\n    </div>\n  </div>\n  <div class=\"heroAvatar\" (click)=\"gotoDetail()\">\n    <img class=\"heroAvatarImage no-border\" src=\"{{ baseUrl }}{{ hero.avatar_small }}\" height=\"100%\" />\n  </div>\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/url.service */ "./src/app/url.service.ts");
/* harmony import */ var _domain_hero_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/hero.service */ "./src/app/domain/hero.service.ts");
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
        this.baseUrl = app_url_service__WEBPACK_IMPORTED_MODULE_2__["UrlService"].getBaseUrl();
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
            styles: [__webpack_require__(/*! ./hero-card.component.css */ "./src/app/hero-card/hero-card.component.css")]
        }),
        __metadata("design:paramtypes", [_domain_hero_service__WEBPACK_IMPORTED_MODULE_3__["HeroService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
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

module.exports = ".buttons {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\twidth: 100%;\n\theight: 50px;\n\n}\n\n.buttons button {\n\tborder: none;\n}\n\n.buttons.transparent button {\n\tbackground-color: transparent;\n}\n\n.buttons button:hover {\n\tbox-shadow: none;\n}\n\n.container {\n\twidth: 100%;\n\tposition: relative;\n\tborder-top: 1px solid #bbb;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.lifeChangerButton {\n\tbackground-color: #fff;\n\tflex: 1;\n\theight: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.buttons .lifeChangerButton:not(:last-child) {\n\tborder-right: 1px solid #bbb;\n}\n\n.buttons .lifeChangerButton:first-child {\n\tborder-bottom-left-radius: 2px;\n}\n\n.buttons .lifeChangerButton:last-child {\n\tborder-bottom-right-radius: 2px;\n}\n\nlife-display,\nmagic-display {\n\tposition: absolute;\n\n}\n\nlife-display {\n\ttop: -15px;\n\ttransition: all .3s ease-out;\n}\n\nmagic-display {\n\ttop: 5px;\n\ttransition: all .3s ease-out;\n}\n\nmagic-display.displayActive,\nlife-display.displayActive {\n\tz-index: 60;\n}\n\nmagic-display.displayInactive,\nlife-display.displayInactive {\n\tz-index: 30;\n\ttransform: scale(0.7)\n}\n\n.displaysContainer {\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyby1jb250cm9scy9oZXJvLWNvbnRyb2xzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLDhCQUE4QjtDQUM5QixXQUFXO0NBQ1gsWUFBWTs7QUFFYjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsMEJBQTBCO0NBQzFCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QixPQUFPO0NBQ1AsWUFBWTtDQUNaLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0MsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MsK0JBQStCO0FBQ2hDOztBQUVBOztDQUVDLGtCQUFrQjs7QUFFbkI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0MsUUFBUTtDQUNSLDRCQUE0QjtBQUM3Qjs7QUFFQTs7Q0FFQyxXQUFXO0FBQ1o7O0FBRUE7O0NBRUMsV0FBVztDQUNYO0FBQ0Q7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsbUJBQW1CO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaGVyby1jb250cm9scy9oZXJvLWNvbnRyb2xzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9ucyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogNTBweDtcblxufVxuXG4uYnV0dG9ucyBidXR0b24ge1xuXHRib3JkZXI6IG5vbmU7XG59XG5cbi5idXR0b25zLnRyYW5zcGFyZW50IGJ1dHRvbiB7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYnV0dG9ucyBidXR0b246aG92ZXIge1xuXHRib3gtc2hhZG93OiBub25lO1xufVxuXG4uY29udGFpbmVyIHtcblx0d2lkdGg6IDEwMCU7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNiYmI7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubGlmZUNoYW5nZXJCdXR0b24ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRmbGV4OiAxO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYnV0dG9ucyAubGlmZUNoYW5nZXJCdXR0b246bm90KDpsYXN0LWNoaWxkKSB7XG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiYmI7XG59XG5cbi5idXR0b25zIC5saWZlQ2hhbmdlckJ1dHRvbjpmaXJzdC1jaGlsZCB7XG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDJweDtcbn1cblxuLmJ1dHRvbnMgLmxpZmVDaGFuZ2VyQnV0dG9uOmxhc3QtY2hpbGQge1xuXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnB4O1xufVxuXG5saWZlLWRpc3BsYXksXG5tYWdpYy1kaXNwbGF5IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXG59XG5cbmxpZmUtZGlzcGxheSB7XG5cdHRvcDogLTE1cHg7XG5cdHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XG59XG5cbm1hZ2ljLWRpc3BsYXkge1xuXHR0b3A6IDVweDtcblx0dHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcbn1cblxubWFnaWMtZGlzcGxheS5kaXNwbGF5QWN0aXZlLFxubGlmZS1kaXNwbGF5LmRpc3BsYXlBY3RpdmUge1xuXHR6LWluZGV4OiA2MDtcbn1cblxubWFnaWMtZGlzcGxheS5kaXNwbGF5SW5hY3RpdmUsXG5saWZlLWRpc3BsYXkuZGlzcGxheUluYWN0aXZlIHtcblx0ei1pbmRleDogMzA7XG5cdHRyYW5zZm9ybTogc2NhbGUoMC43KVxufVxuXG4uZGlzcGxheXNDb250YWluZXIge1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/hero-controls/hero-controls.component.html":
/*!************************************************************!*\
  !*** ./src/app/hero-controls/hero-controls.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"displaysContainer\">\n    <life-display currentLife=\"{{ hero.currentLife }}\" maxLife=\"{{ hero.life }}\" (click)=\"focusLife()\"\n      [ngClass]=\"lifeClass\">\n    </life-display>\n    <magic-display *ngIf=\"hero.knowsMagic\" currentMagicEnergy=\"{{ hero.currentMagicEnergy }}\"\n      maxMagicEnergy=\"{{ hero.magicEnergy }}\" (click)=\"focusMagic()\" [ngClass]=\"magicClass\">\n    </magic-display>\n  </div>\n  <div class=\"buttons\" [class.transparent]=\"listMode\">\n    <button class=\"lifeChangerButton comic-shadow\" (click)=\"updateValue(-5)\">\n      <i class=\"fa fa-angle-double-down\" aria-hidden=\"true\"></i>\n    </button>\n    <button class=\"lifeChangerButton\" (click)=\"updateValue(-1)\">\n      <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n    </button>\n    <button class=\"lifeChangerButton\" (click)=\"updateValue(1)\">\n      <i class=\"fa fa-angle-up\" aria-hidden=\"true\"></i>\n    </button>\n    <button class=\"lifeChangerButton\" (click)=\"updateValue(5)\">\n      <i class=\"fa fa-angle-double-up\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>"

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
/* harmony import */ var app_domain_armor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/domain/armor */ "./src/app/domain/armor.ts");
/* harmony import */ var app_domain_inventoryItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/domain/inventoryItem */ "./src/app/domain/inventoryItem.ts");
/* harmony import */ var app_domain_weapon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/domain/weapon */ "./src/app/domain/weapon.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var app_url_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/url.service */ "./src/app/url.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _domain_hero_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../domain/hero.service */ "./src/app/domain/hero.service.ts");
/* harmony import */ var _domain_skills_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../domain/skills.service */ "./src/app/domain/skills.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






// import { Rx } from 'rxjs';






var HeroLifeService = /** @class */ (function () {
    function HeroLifeService(http, heroService, toastr, skillService) {
        this.http = http;
        this.toastr = toastr;
        this.skillService = skillService;
        this.wsUrl = app_url_service__WEBPACK_IMPORTED_MODULE_6__["UrlService"].getBaseURLWS() + "/heroes";
        this.wsClientId = Math.random().toString(36).substring(7);
        this.hasBeenDisconnected = false;
        this.currentlyConnected = false;
        this.heroService = heroService;
        this.createWebsocket();
    }
    HeroLifeService.prototype.createWebsocket = function () {
        var _this = this;
        try {
            this.socket = new WebSocket(this.wsUrl);
            this.heroSubject = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
            this.heroSubject.subscribe(this.handleIncommingMessage.bind(this));
            this.socket.onmessage = (function (evt) { return _this.heroSubject.next(evt); });
            this.socket.onopen = function (event) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.currentlyConnected = true;
                            this.toastr.success('Du bist online.');
                            clearInterval(this.connectionInterval);
                            return [4 /*yield*/, this.heroService.getHeroes(true)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); };
            this.socket.onerror = function (error) {
                if (_this.socket.readyState === _this.socket.OPEN) {
                    _this.toastr.error('Es gab einen Fehler', 'Wir schließen nun die Verbindung');
                }
            };
            this.socket.addEventListener('error', function (event) {
                _this.toastr.error('Fehler bei der Websocketkommunikation mit den Helden.', 'Fehler');
                event.stopPropagation();
            });
            this.socket.addEventListener('close', function (event) {
                if (_this.currentlyConnected) {
                    _this.currentlyConnected = false;
                    _this.toastr.error('Du bist nicht mehr mit dem Server verbunden', 'Die Verbindung ist abgebaut worden');
                    _this.connectionInterval = window.setInterval(_this.createWebsocket.bind(_this), 4000);
                }
            });
        }
        catch (error) {
            this.toastr.error('bisher hat es noch nicht geklappt', 'Fehler');
        }
    };
    HeroLifeService.prototype.sendUpate = function (data) {
        try {
            this.socket.send(JSON.stringify(data));
        }
        catch (error) {
            this.toastr.error('bisher hat es noch nicht geklappt', 'Fehler');
        }
    };
    HeroLifeService.prototype.handleIncommingMessage = function (message) {
        var _this = this;
        var messageData = JSON.parse(message.data);
        this.heroService.getHero(messageData.heroId).then(function (hero) {
            switch (messageData.type) {
                case 'lifeUpdate':
                    hero.life_lost = hero.life_lost - messageData.value;
                    break;
                case 'magicUpdate':
                    hero.magicEnergy_lost = hero.magicEnergy_lost - messageData.value;
                    break;
                case 'updateAttribute':
                    // TODO: update hero's attribute
                    hero.getAttribute(messageData['attribute']).value = messageData['value'];
                    _this.toastr.success(hero.name + " hat die Eigenschaft " + hero.getAttribute(messageData['attribute']).name + " gesteigert!", 'Bäähm!');
                    break;
                case 'addWeapon':
                    _this.skillService.getSkill(messageData['skill']).then(function (skill) {
                        hero.addWeapon(new app_domain_weapon__WEBPACK_IMPORTED_MODULE_4__["Weapon"](messageData['weaponId'], messageData['weaponName'], messageData['damageDice'], messageData['damageAddPoints'], messageData['extraPointsFromKk'], skill));
                        _this.toastr.success(hero.name + " hat eine Waffe mehr!", 'Bäähm!');
                    });
                    break;
                case 'deleteWeapon':
                    hero.deleteWeaponById(messageData['weaponId']);
                    _this.toastr.success(hero.name + " hat eine Waffe weniger!", 'Hui!!');
                    break;
                case 'addArmor':
                    hero.addArmor(new app_domain_armor__WEBPACK_IMPORTED_MODULE_2__["Armor"](messageData['armorId'], messageData['armorName'], messageData['armorRS'], messageData['armorBE']));
                    _this.toastr.success(hero.name + " ist nun besser ger\u00FCstet!", 'Zack!');
                    break;
                case 'deleteArmor':
                    hero.deleteArmorById(messageData['armorId']);
                    _this.toastr.success(hero.name + " muss nun aufpassen, er hat weniger Schutz!", 'Zack!');
                    break;
                case 'addInventoryItem':
                    hero.addInventoryItem(new app_domain_inventoryItem__WEBPACK_IMPORTED_MODULE_3__["InventoryItem"](messageData['inventoryId'], messageData['name'], messageData['amount'], messageData['weight']));
                    _this.toastr.success(hero.name + " hat was neues: " + messageData['name'] + "!", 'Zack!');
                    break;
                case 'deleteInventoryItem':
                    var itemName = hero.getInventoryItemById(messageData['inventoryItemId']).name;
                    hero.deleteInventoryItemById(messageData['inventoryItemId']);
                    _this.toastr.success(hero.name + " hat etwas abgegeben: " + itemName + "!", 'Zack!');
                    break;
                case 'updateInventoryItem':
                    hero.updateInventoryItemAmount(messageData['inventoryItemId'], messageData['amount']);
                    break;
                case 'addExperiencePoints':
                    hero.experience = hero.experience + messageData['additionalPoints'];
                    _this.toastr.success(hero.name + " hat " + messageData['additionalPoints'] + " neue Abenteuerpunkte!", 'Hurrrraaaah!');
                case 'updateAccountEntry':
                    hero.money[messageData['unit']] = messageData['amount'];
                default:
                    break;
            }
        });
    };
    HeroLifeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _domain_hero_service__WEBPACK_IMPORTED_MODULE_10__["HeroService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _domain_skills_service__WEBPACK_IMPORTED_MODULE_11__["SkillService"]])
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

module.exports = "/** header **/\n\n.heroDetailHeader {\n  /*padding: 20px 20px 0 20px;*/\n  display: flex;\n}\n\n.shadow {\n  /* box-shadow: 0px 4px 8px 2px rgba(0,0,0,0.75); */\n  margin-bottom: 40px !important;\n  /* background-color: rgba(255, 255, 255, 1); */\n  min-height: 500px;\n}\n\n.page {\n  padding-top: 10px;\n  height: 100%;\n  font-size: 1.5rem;\n}\n\n.skillEntry i {\n  margin-right: 5px;\n}\n\n.characterDetailNavButton {\n  color: #fff;\n  font-size: 2rem;\n  flex: 1;\n  padding: 5px;\n}\n\n.headerContent p {\n  margin-top: 0;\n}\n\n.heroBanner {\n  background-image: url(\"/assets/banner-hero.png\");\n  background-repeat: no-repeat;\n  background-position: top center;\n  background-size: 600px;\n  width: 100%;\n  height: 160px;\n  padding: 20px 0;\n  margin-bottom: -40px;\n}\n\n.heroType {\n  font-size: 1rem;\n}\n\n.heroLevel {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-top: 30px;\n}\n\n#combatAttributes {\n  padding-top: 2rem;\n}\n\n.heroName::before,\n.heroName::after {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: -60px;\n  top: 24px;\n  display: block;\n  width: 80px;\n  height: 0px;\n  border: 30px solid #9b2;\n  border-right: 20px solid #791;\n  border-bottom-color: #94b81e;\n  border-left-color: transparent;\n  transform: rotate(-5deg);\n}\n\n.heroName::after {\n  left: auto;\n  right: -60px;\n  border-left: 20px solid #791;\n  border-right: 30px solid transparent;\n  transform: rotate(5deg);\n}\n\n.heroClass {\n  background-color: #eee;\n  padding: 10px;\n  border: 1px solid #aaa;\n  margin-top: -3px;\n  border-radius: 3px;\n}\n\n/** content sections **/\n\nbasic-data-display {\n  background-image: url(\"/assets/hero-icon.png\");\n  /* background-image: url(\"/assets/hero-background_desaturated.jpg\"); */\n  background-size: 5.5rem;\n  padding-left: 5rem;\n  background-position: 0 2rem;\n  background-repeat: no-repeat;\n}\n\nattributes-display {\n  background-image: url(\"/assets/properties-icon.png\");\n  /* background-image: url(\"/assets/hero-background_desaturated.jpg\"); */\n  background-size: 5.5rem;\n  padding-left: 5rem;\n  background-position: 0 2rem;\n  background-repeat: no-repeat;\n}\n\n#combatAttributes {\n  /* background-image: url(\"/assets/sword_drawn_desaturated.jpg\"); */\n  background-size: 200px;\n  background-position: right 100px top 50px;\n  background-repeat: no-repeat;\n}\n\n.heroTalents {\n  /* background-image: url(\"/assets/hero-tavern_desaturated.jpg\"); */\n  background-size: 300px;\n  background-position: right 100px top 50px;\n  background-repeat: no-repeat;\n}\n\n.heroSpells {\n  /* background-image: url(\"/assets/wizard_desaturated.jpg\"); */\n  background-size: 500px;\n  background-position: right 10px top 10px;\n  background-repeat: no-repeat;\n}\n\n.inventory {\n  /* background-image: url('/assets/inventory-desaturated.jpg'); */\n  background-size: 500px;\n  background-position: right 10px top 10px;\n  background-repeat: no-repeat;\n}\n\n/** end content sections **/\n\nlabel.long {\n  width: 150px;\n  display: none;\n}\n\nlabel.short {\n  width: 40px;\n}\n\n#avatarContainer {\n  order: 1;\n  border-bottom: 1px solid #999;\n  background-color: #fff;\n  /* margin-top: -15px; */\n  margin-right: 5px;\n}\n\nexperience-display {\n  margin-top: 5rem;\n}\n\n#propertiesContainer {\n  order: 2;\n}\n\n#attributesContainer {\n  order: 3;\n}\n\n.heroAvatarImage,\n.heroAvatar {\n  height: 150px;\n}\n\n.heroAvatarImage {\n  background-color: white;\n  border-color: #999;\n}\n\n.heroAvatar {\n  margin-top: -15px;\n  margin-bottom: -15px;\n  z-index: 100;\n}\n\n.actionsContainer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1000;\n}\n\n.talente {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.skillGroupEntries {\n  width: 100%;\n  /* display: flex;\n  flex-wrap: wrap; */\n}\n\n.heroName {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.talentSearchBox {\n  background-color: rgba(255, 255, 255, 1);\n  border-radius: 4px;\n  margin: -20px 0 10px 0;\n  padding: 10px;\n}\n\n.skillGroupTitle {\n  padding: 10px 0;\n}\n\ncombat-data-display {\n  flex: 1;\n}\n\n.skillEntry,\n.weaponEntry {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  flex-wrap: wrap;\n  font-size: 0.8rem;\n  align-items: center;\n  justify-content: stretch;\n  float: left;\n}\n\ntalent-card {\n  flex: 1;\n}\n\n.skillContent,\n.weaponEntry {\n  margin: 1px;\n  /* border: 1px solid #ddd; */\n  background-color: #fff;\n  flex: 1;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 4px;\n  align-items: center;\n}\n\n.weaponEntry {\n  min-height: 30px;\n  padding-left: 10px;\n}\n\n.skillTitle {\n  width: 150px;\n  padding-left: 10px;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n\n.skillBe {\n  width: 60px;\n}\n\n.skillValue {\n  width: 30px;\n  color: #ad2003;\n}\n\n.dices,\n.fightDices {\n  display: flex;\n  flex-direction: row;\n  padding: 0 10px;\n  align-items: center;\n}\n\n.dice {\n  width: 30px;\n  text-align: center;\n}\n\n.fightDice {\n  width: 45px;\n}\n\n/** Search box **/\n\n::-webkit-input-placeholder {\n  text-align: center;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center;\n}\n\n:-ms-input-placeholder {\n  text-align: center;\n}\n\ninput.talentSearchInbox {\n  text-align: center;\n  height: 30px;\n  width: 100%;\n}\n\nform.search {\n  width: 100%;\n  max-width: 1200px;\n  display: flex;\n  flex-direction: column;\n}\n\n.mat-option.skillOption {\n  height: auto;\n  line-height: 12px;\n}\n\nmat-radio-button {\n  width: 100%;\n}\n\n.weaponChoiceLabel div {\n  float: left;\n  padding-right: 20px;\n}\n\n.weaponChoiceLabel :nth-child(1) {\n  width: 120px;\n}\n\n.inventoryWeaponItem {\n  display: flex;\n}\n\n.inventoryItemName {\n  width: 200px;\n}\n\n.weaponDamage {\n  width: 80px;\n}\n\n.inventoryItemAction {\n  width: 40px;\n}\n\n@media (min-width: 48em) {\n  #avatarContainer {\n    order: 1;\n    background-color: transparent;\n    border-bottom: none;\n  }\n\n  #propertiesContainer {\n    order: 0;\n  }\n\n  #attributesContainer {\n    order: 2;\n  }\n\n  .heroAvatarImage,\n  .heroAvatar {\n    height: 300px;\n  }\n\n  label.long {\n    display: inline;\n  }\n\n  label.short {\n    display: none;\n  }\n\n  .skillEntry {\n    /* width: 50%; */\n    float: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyb2RldGFpbC9oZXJvLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWE7O0FBRWI7RUFDRSw2QkFBNkI7RUFDN0IsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0RBQWtEO0VBQ2xELDhCQUE4QjtFQUM5Qiw4Q0FBOEM7RUFDOUMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLE9BQU87RUFDUCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxTQUFTO0VBQ1QsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLG9DQUFvQztFQUNwQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBLHVCQUF1Qjs7QUFDdkI7RUFDRSw4Q0FBOEM7RUFDOUMsc0VBQXNFO0VBQ3RFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG9EQUFvRDtFQUNwRCxzRUFBc0U7RUFDdEUsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0VBQWtFO0VBQ2xFLHNCQUFzQjtFQUN0Qix5Q0FBeUM7RUFDekMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0VBQWtFO0VBQ2xFLHNCQUFzQjtFQUN0Qix5Q0FBeUM7RUFDekMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNkRBQTZEO0VBQzdELHNCQUFzQjtFQUN0Qix3Q0FBd0M7RUFDeEMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZ0VBQWdFO0VBQ2hFLHNCQUFzQjtFQUN0Qix3Q0FBd0M7RUFDeEMsNEJBQTRCO0FBQzlCOztBQUVBLDJCQUEyQjs7QUFFM0I7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsUUFBUTtFQUNSLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1g7b0JBQ2tCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBOztFQUVFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7O0VBRUUsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsT0FBTztFQUNQLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLFFBQVE7SUFDUiw2QkFBNkI7SUFDN0IsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBOztJQUVFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZXJvZGV0YWlsL2hlcm8tZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogaGVhZGVyICoqL1xuXG4uaGVyb0RldGFpbEhlYWRlciB7XG4gIC8qcGFkZGluZzogMjBweCAyMHB4IDAgMjBweDsqL1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc2hhZG93IHtcbiAgLyogYm94LXNoYWRvdzogMHB4IDRweCA4cHggMnB4IHJnYmEoMCwwLDAsMC43NSk7ICovXG4gIG1hcmdpbi1ib3R0b206IDQwcHggIWltcG9ydGFudDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTsgKi9cbiAgbWluLWhlaWdodDogNTAwcHg7XG59XG5cbi5wYWdlIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5za2lsbEVudHJ5IGkge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmNoYXJhY3RlckRldGFpbE5hdkJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmhlYWRlckNvbnRlbnQgcCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5oZXJvQmFubmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9iYW5uZXItaGVyby5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogNjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2MHB4O1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG1hcmdpbi1ib3R0b206IC00MHB4O1xufVxuXG4uaGVyb1R5cGUge1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5oZXJvTGV2ZWwge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbiNjb21iYXRBdHRyaWJ1dGVzIHtcbiAgcGFkZGluZy10b3A6IDJyZW07XG59XG5cbi5oZXJvTmFtZTo6YmVmb3JlLFxuLmhlcm9OYW1lOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIGxlZnQ6IC02MHB4O1xuICB0b3A6IDI0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJvcmRlcjogMzBweCBzb2xpZCAjOWIyO1xuICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgIzc5MTtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzk0YjgxZTtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG59XG5cbi5oZXJvTmFtZTo6YWZ0ZXIge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogLTYwcHg7XG4gIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkICM3OTE7XG4gIGJvcmRlci1yaWdodDogMzBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XG59XG5cbi5oZXJvQ2xhc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICBtYXJnaW4tdG9wOiAtM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi8qKiBjb250ZW50IHNlY3Rpb25zICoqL1xuYmFzaWMtZGF0YS1kaXNwbGF5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9oZXJvLWljb24ucG5nXCIpO1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2hlcm8tYmFja2dyb3VuZF9kZXNhdHVyYXRlZC5qcGdcIik7ICovXG4gIGJhY2tncm91bmQtc2l6ZTogNS41cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDVyZW07XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMnJlbTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuYXR0cmlidXRlcy1kaXNwbGF5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9wcm9wZXJ0aWVzLWljb24ucG5nXCIpO1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2hlcm8tYmFja2dyb3VuZF9kZXNhdHVyYXRlZC5qcGdcIik7ICovXG4gIGJhY2tncm91bmQtc2l6ZTogNS41cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDVyZW07XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMnJlbTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuI2NvbWJhdEF0dHJpYnV0ZXMge1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3N3b3JkX2RyYXduX2Rlc2F0dXJhdGVkLmpwZ1wiKTsgKi9cbiAgYmFja2dyb3VuZC1zaXplOiAyMDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTAwcHggdG9wIDUwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5oZXJvVGFsZW50cyB7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaGVyby10YXZlcm5fZGVzYXR1cmF0ZWQuanBnXCIpOyAqL1xuICBiYWNrZ3JvdW5kLXNpemU6IDMwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxMDBweCB0b3AgNTBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmhlcm9TcGVsbHMge1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3dpemFyZF9kZXNhdHVyYXRlZC5qcGdcIik7ICovXG4gIGJhY2tncm91bmQtc2l6ZTogNTAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDEwcHggdG9wIDEwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5pbnZlbnRvcnkge1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW52ZW50b3J5LWRlc2F0dXJhdGVkLmpwZycpOyAqL1xuICBiYWNrZ3JvdW5kLXNpemU6IDUwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxMHB4IHRvcCAxMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4vKiogZW5kIGNvbnRlbnQgc2VjdGlvbnMgKiovXG5cbmxhYmVsLmxvbmcge1xuICB3aWR0aDogMTUwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmxhYmVsLnNob3J0IHtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbiNhdmF0YXJDb250YWluZXIge1xuICBvcmRlcjogMTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC8qIG1hcmdpbi10b3A6IC0xNXB4OyAqL1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuZXhwZXJpZW5jZS1kaXNwbGF5IHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbn1cblxuI3Byb3BlcnRpZXNDb250YWluZXIge1xuICBvcmRlcjogMjtcbn1cblxuI2F0dHJpYnV0ZXNDb250YWluZXIge1xuICBvcmRlcjogMztcbn1cblxuLmhlcm9BdmF0YXJJbWFnZSxcbi5oZXJvQXZhdGFyIHtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLmhlcm9BdmF0YXJJbWFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6ICM5OTk7XG59XG5cbi5oZXJvQXZhdGFyIHtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIG1hcmdpbi1ib3R0b206IC0xNXB4O1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5hY3Rpb25zQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4udGFsZW50ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2tpbGxHcm91cEVudHJpZXMge1xuICB3aWR0aDogMTAwJTtcbiAgLyogZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwOyAqL1xufVxuXG4uaGVyb05hbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFsZW50U2VhcmNoQm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW46IC0yMHB4IDAgMTBweCAwO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc2tpbGxHcm91cFRpdGxlIHtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuXG5jb21iYXQtZGF0YS1kaXNwbGF5IHtcbiAgZmxleDogMTtcbn1cblxuLnNraWxsRW50cnksXG4ud2VhcG9uRW50cnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICBmbG9hdDogbGVmdDtcbn1cblxudGFsZW50LWNhcmQge1xuICBmbGV4OiAxO1xufVxuXG4uc2tpbGxDb250ZW50LFxuLndlYXBvbkVudHJ5IHtcbiAgbWFyZ2luOiAxcHg7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ud2VhcG9uRW50cnkge1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5za2lsbFRpdGxlIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc2tpbGxCZSB7XG4gIHdpZHRoOiA2MHB4O1xufVxuXG4uc2tpbGxWYWx1ZSB7XG4gIHdpZHRoOiAzMHB4O1xuICBjb2xvcjogI2FkMjAwMztcbn1cblxuLmRpY2VzLFxuLmZpZ2h0RGljZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kaWNlIHtcbiAgd2lkdGg6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZpZ2h0RGljZSB7XG4gIHdpZHRoOiA0NXB4O1xufVxuXG4vKiogU2VhcmNoIGJveCAqKi9cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTgtICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOSsgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pbnB1dC50YWxlbnRTZWFyY2hJbmJveCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuZm9ybS5zZWFyY2gge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5tYXQtb3B0aW9uLnNraWxsT3B0aW9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMTJweDtcbn1cblxubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ud2VhcG9uQ2hvaWNlTGFiZWwgZGl2IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi53ZWFwb25DaG9pY2VMYWJlbCA6bnRoLWNoaWxkKDEpIHtcbiAgd2lkdGg6IDEyMHB4O1xufVxuXG4uaW52ZW50b3J5V2VhcG9uSXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pbnZlbnRvcnlJdGVtTmFtZSB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLndlYXBvbkRhbWFnZSB7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG4uaW52ZW50b3J5SXRlbUFjdGlvbiB7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xuICAjYXZhdGFyQ29udGFpbmVyIHtcbiAgICBvcmRlcjogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG5cbiAgI3Byb3BlcnRpZXNDb250YWluZXIge1xuICAgIG9yZGVyOiAwO1xuICB9XG5cbiAgI2F0dHJpYnV0ZXNDb250YWluZXIge1xuICAgIG9yZGVyOiAyO1xuICB9XG5cbiAgLmhlcm9BdmF0YXJJbWFnZSxcbiAgLmhlcm9BdmF0YXIge1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cblxuICBsYWJlbC5sb25nIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cblxuICBsYWJlbC5zaG9ydCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5za2lsbEVudHJ5IHtcbiAgICAvKiB3aWR0aDogNTAlOyAqL1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/herodetail/hero-detail.component.html":
/*!*******************************************************!*\
  !*** ./src/app/herodetail/hero-detail.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-sidenav #sidenav (keydown.escape)=\"close('escape')\" disableClose> -->\n<detail-navigation [hero]=\"hero\" (navToArea)=\"showArea($event)\">\n</detail-navigation>\n<!-- </mat-sidenav> -->\n\n<div class=\"page flex-col center\">\n  <div class=\"pageContent\">\n    <div class=\"sheet\">\n      <div class=\"\" *ngIf=\"hero\" style=\"flex: 1\">\n        <div class=\"headerContainer contentBox\">\n          <a class=\"menuItem\" name=\"Allgemein\"></a>\n          <!--  -->\n          <div class=\"headerContent\">\n            <div class=\"flex-col\">\n              <div class=\"heroBanner flex-col center\">\n                <h1>{{hero.name}}</h1>\n                <div class=\"heroType\">{{ hero.hero_type.name }}</div>\n                <div class=\"heroLevel\">{{ hero.level }}</div>\n                <!-- <img style=\"width: 600px;\" src=\"/assets/banner-hero.png\" class=\"no-border\" /> -->\n                <!-- <h1 class=\"heroName\">{{ hero.name }}</h1>\n                <div class=\"flex-item heroClass\">\n                  {{ hero.hero_type.name }}, Stufe {{ hero.level }}\n                </div> -->\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"Grid Grid--full Grid-cell\">\n          <div class=\"actionsContainer Grid-cell\">\n            <hero-controls [hero]=\"hero\"> </hero-controls>\n          </div>\n        </div>\n        <div *ngIf=\"detailArea === 'character'\" class=\"characterDetails\">\n          <div class=\"experienceContainer contentBox padded\">\n\n          </div>\n          <div class=\"flex-col\">\n            <div id=\"propertiesBox\" id=\"mainAttributes\" class=\"contentBox Grid Grid--cols-2\">\n              <div id=\"propertiesContainer\" class=\"Grid-cell flex-item flex-col\">\n                <basic-data-display [hero]=\"hero\" class=\"\"></basic-data-display>\n                <attributes-display [hero]=\"hero\" class=\"attributes-display\"></attributes-display>\n              </div>\n              <div id=\"avatarContainer\" class=\"Grid-cell flex-col center\">\n                <div class=\"heroAvatar large flex-item\">\n                  <img class=\"heroAvatarImage comic-shadow\" src=\"{{ baseUrl }}{{ hero.avatar_small }}\" />\n                </div>\n                <experience-display [hero]=\"hero\" [experience]=\"hero.experience\"\n                  [availablePoints]=\"hero.availablePoints\">\n                </experience-display>\n              </div>\n            </div>\n          </div>\n          <div class=\"contentBox flex-item borderTop\" id=\"combatAttributes\">\n            <a id=\"fightValueContainerAnchor\"></a>\n            <combat-data-display [hero]=\"hero\"></combat-data-display>\n          </div>\n        </div>\n        <div *ngIf=\"detailArea === 'talents'\" class=\"contentBox flex-item flex-row heroTalents\">\n          <talent-search mode=\"viewTalents\" [hero]=\"hero\" [searchActive]=\"searchActive\" class=\"flex-item\">\n          </talent-search>\n        </div>\n        <div *ngIf=\"hero.knowsMagic && detailArea === 'spells'\" class=\"contentBox flex-row heroSpells\">\n          <spell-search [hero]=\"hero\" class=\"flex-item\"></spell-search>\n        </div>\n        <div *ngIf=\"detailArea === 'inventory'\" class=\"inventory\">\n          <inventory-display [hero]=\"hero\"></inventory-display>\n        </div>\n        <div *ngIf=\"detailArea === 'edit'\" class=\"editHeroValues\">\n          <edit-dialog [hero]=\"hero\"></edit-dialog>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _domain_hero_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/hero.service */ "./src/app/domain/hero.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_url_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/url.service */ "./src/app/url.service.ts");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
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
        this.talentSearchActive = false;
        this.detailArea = 'character';
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.baseUrl = app_url_service__WEBPACK_IMPORTED_MODULE_6__["UrlService"].getBaseUrl();
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
    HeroDetailComponent.prototype.navToAnchor = function (anchor) {
    };
    HeroDetailComponent.prototype.onSectionChange = function (event) {
        console.log('hey');
    };
    HeroDetailComponent.prototype.showArea = function (areaTarget) {
        this.detailArea = areaTarget;
    };
    Object.defineProperty(HeroDetailComponent.prototype, "detailArea", {
        get: function () {
            return this._detailArea;
        },
        set: function (target) {
            this._detailArea = target;
        },
        enumerable: true,
        configurable: true
    });
    HeroDetailComponent.prototype.removeWeaponFromInventory = function (weapon) {
        debugger;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], HeroDetailComponent.prototype, "_detailArea", void 0);
    HeroDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'hero-details',
            template: __webpack_require__(/*! ./hero-detail.component.html */ "./src/app/herodetail/hero-detail.component.html"),
            styles: [__webpack_require__(/*! ./hero-detail.component.css */ "./src/app/herodetail/hero-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_domain_hero_service__WEBPACK_IMPORTED_MODULE_3__["HeroService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"]])
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

module.exports = ".heroes-list {\n  padding: 0;\n  width: 100%;\n  max-width: 400px;\n  transition: visible 1s ease-in;\n  animation-delay: 2s;\n}\n\nhero-card {\n  margin-bottom: 15px;\n  display: block;\n}\n\nh1 {\n  margin: 2rem 0 -1.6rem 0;\n}\n\n.heroes-banner {\n  width: 280px;\n  margin-left: 2rem;\n  transition: margin-top 0.4s ease-out;\n  /* transform: translate3d(0, 0, 1px); */\n}\n\n.heroes-banner-container {\n  height: 20rem;\n}\n\n/** navigation behavior **/\n\n.navColumn {\n  display: flex;\n  justify-content: center;\n  flex-grow: 0;\n}\n\n.navColumn.activeEntry {\n  flex-grow: 1;\n}\n\n.navColumn:not(.activeEntry) {\n  min-width: 100px;\n}\n\n.navColumn:not(.activeEntry) .heroes-banner {\n  width: 100px;\n  margin-left: 2rem;\n  transition: margin-top 0.4s ease-out;\n  /* transform: translate3d(0, 0, 1px); */\n  margin-top: 5rem;\n}\n\n.firstNavColumn:not(.activeEntry) {\n  margin-left: -50px;\n}\n\n.secondNavColumn:not(.activeEntry) {\n  margin-right: -20px;\n}\n\n.landingPage .heroes-banner {\n  margin-top: 30rem;\n}\n\nadventure-display {\n  margin-bottom: 3rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyb2VzL2hlcm9lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLDBCQUEwQjs7QUFDMUI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLHVDQUF1QztFQUN2QyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9oZXJvZXMvaGVyb2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVyb2VzLWxpc3Qge1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgdHJhbnNpdGlvbjogdmlzaWJsZSAxcyBlYXNlLWluO1xuICBhbmltYXRpb24tZGVsYXk6IDJzO1xufVxuXG5oZXJvLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaDEge1xuICBtYXJnaW46IDJyZW0gMCAtMS42cmVtIDA7XG59XG5cbi5oZXJvZXMtYmFubmVyIHtcbiAgd2lkdGg6IDI4MHB4O1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgdHJhbnNpdGlvbjogbWFyZ2luLXRvcCAwLjRzIGVhc2Utb3V0O1xuICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDFweCk7ICovXG59XG5cbi5oZXJvZXMtYmFubmVyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMjByZW07XG59XG5cbi8qKiBuYXZpZ2F0aW9uIGJlaGF2aW9yICoqL1xuLm5hdkNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWdyb3c6IDA7XG59XG5cbi5uYXZDb2x1bW4uYWN0aXZlRW50cnkge1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5uYXZDb2x1bW46bm90KC5hY3RpdmVFbnRyeSkge1xuICBtaW4td2lkdGg6IDEwMHB4O1xufVxuXG4ubmF2Q29sdW1uOm5vdCguYWN0aXZlRW50cnkpIC5oZXJvZXMtYmFubmVyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgdHJhbnNpdGlvbjogbWFyZ2luLXRvcCAwLjRzIGVhc2Utb3V0O1xuICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDFweCk7ICovXG4gIG1hcmdpbi10b3A6IDVyZW07XG59XG5cbi5maXJzdE5hdkNvbHVtbjpub3QoLmFjdGl2ZUVudHJ5KSB7XG4gIG1hcmdpbi1sZWZ0OiAtNTBweDtcbn1cblxuLnNlY29uZE5hdkNvbHVtbjpub3QoLmFjdGl2ZUVudHJ5KSB7XG4gIG1hcmdpbi1yaWdodDogLTIwcHg7XG59XG5cbi5sYW5kaW5nUGFnZSAuaGVyb2VzLWJhbm5lciB7XG4gIG1hcmdpbi10b3A6IDMwcmVtO1xufVxuXG5hZHZlbnR1cmUtZGlzcGxheSB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/heroes/heroes.component.html":
/*!**********************************************!*\
  !*** ./src/app/heroes/heroes.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"flex-row\" style=\"flex-wrap: nowrap; align-items: flex-start\">\n    <div\n      class=\"flex-col center navColumn firstNavColumn\"\n      [class.activeEntry]=\"activeMainNavEntry === 'heroes'\"\n    >\n      <div\n        class=\"heroes-banner-container flex-col center flex-item\"\n        [ngClass]=\"{ landingPage: gameStarted === false }\"\n      >\n        <h1 *ngIf=\"gameStarted === true && activeMainNavEntry === 'heroes'\">\n          Die Helden\n        </h1>\n        <img\n          src=\"/assets/winged-shield.png\"\n          class=\"no-border heroes-banner\"\n          (click)=\"activateNavEntry('heroes')\"\n        />\n      </div>\n\n      <div\n        class=\"flex-col center flex-item\"\n        *ngIf=\"successfullyLoaded === false\"\n      >\n        <p>Ich lade Deine Helden ....</p>\n        <button [disabled]=\"currentlyLoading\" (click)=\"loadBasicData()\">\n          Hier clicken um es noch mal zu versuchen\n        </button>\n      </div>\n      <div\n        class=\"flex-col center\"\n        *ngIf=\"gameStarted === false && successfullyLoaded === true\"\n      >\n        <p>Das Spiel ist bereit ...</p>\n        <button (click)=\"startGame()\">Los geht's!</button>\n      </div>\n      <div\n        class=\"heroes-list flex-col flex-item\"\n        *ngIf=\"\n          successfullyLoaded === true &&\n          gameStarted === true &&\n          activeMainNavEntry === 'heroes'\n        \"\n        [@inOutAnimation]\n      >\n        <hero-card\n          *ngFor=\"let hero of heroes\"\n          [class.selected]=\"hero === selectedHero\"\n          [hero]=\"hero\"\n        >\n        </hero-card>\n      </div>\n    </div>\n    <div\n      class=\"flex-col flex-item navColumn secondNavColumn\"\n      *ngIf=\"successfullyLoaded === true && gameStarted === true\"\n      [class.activeEntry]=\"activeMainNavEntry === 'adventure'\"\n    >\n      <div class=\"heroes-banner-container flex-col center flex-item\">\n        <h1 *ngIf=\"activeMainNavEntry === 'adventure'\">Der Weg</h1>\n        <!-- <p>{{ activeMainNavEntry }}</p> -->\n        <img\n          src=\"/assets/kompass-adventure.png\"\n          class=\"no-border heroes-banner\"\n          (click)=\"activateNavEntry('adventure')\"\n        />\n        <adventure-display\n          *ngIf=\"activeMainNavEntry === 'adventure'\"\n        ></adventure-display>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_domain_applicationState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/domain/applicationState */ "./src/app/domain/applicationState.ts");
/* harmony import */ var _domain_hero_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domain/hero.service */ "./src/app/domain/hero.service.ts");
/* harmony import */ var _domain_skills_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../domain/skills.service */ "./src/app/domain/skills.service.ts");
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
        this.currentlyLoading = false;
        this._activeMainNavEntry = 'heroes';
        this.loadBasicData();
    }
    HeroesComponent.prototype.loadBasicData = function () {
        var _this = this;
        this.currentlyLoading = true;
        var heroesPromise = this.heroService.getHeroes();
        var skillsPromise = this.skillService.getSkills();
        Promise.all([heroesPromise, skillsPromise]).then(function (results) {
            _this.heroes = _this.heroService.heroes;
            _this.skills = results[1];
            _this.currentlyLoading = false;
            app_domain_applicationState__WEBPACK_IMPORTED_MODULE_3__["gameState"].dataInitialized = true;
        }).catch(function (error) {
            _this.currentlyLoading = false;
        });
    };
    HeroesComponent.prototype.startGame = function () {
        app_domain_applicationState__WEBPACK_IMPORTED_MODULE_3__["gameState"].gameStarted = true;
    };
    HeroesComponent.prototype.activateNavEntry = function (navEntry) {
        this._activeMainNavEntry = navEntry;
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
    Object.defineProperty(HeroesComponent.prototype, "gameStarted", {
        get: function () {
            return app_domain_applicationState__WEBPACK_IMPORTED_MODULE_3__["gameState"].gameStarted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroesComponent.prototype, "successfullyLoaded", {
        get: function () {
            return app_domain_applicationState__WEBPACK_IMPORTED_MODULE_3__["gameState"].dataInitialized;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroesComponent.prototype, "activeMainNavEntry", {
        get: function () {
            return this._activeMainNavEntry;
        },
        enumerable: true,
        configurable: true
    });
    HeroesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'heroes-list',
            template: __webpack_require__(/*! ./heroes.component.html */ "./src/app/heroes/heroes.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('inOutAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s 1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./heroes.component.css */ "./src/app/heroes/heroes.component.css")]
        }),
        __metadata("design:paramtypes", [_domain_hero_service__WEBPACK_IMPORTED_MODULE_4__["HeroService"],
            _domain_skills_service__WEBPACK_IMPORTED_MODULE_5__["SkillService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = ".mat-dialog-content {\n  max-height: 90%;\n  height: 90%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.mat-dialog-title {\n  font-family: Neucha, sans-serif;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2UtcG9wdXAvaW1hZ2UtcG9wdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvaW1hZ2UtcG9wdXAvaW1hZ2UtcG9wdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1hdC1kaWFsb2ctdGl0bGUge1xuICBmb250LWZhbWlseTogTmV1Y2hhLCBzYW5zLXNlcmlmO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/image-popup/image-popup.component.html":
/*!********************************************************!*\
  !*** ./src/app/image-popup/image-popup.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 mat-dialog-title>{{ data.caption }}</h3>\n<div mat-dialog-content>\n  <img [src]=\"data.url\" />\n</div>\n"

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

/***/ "./src/app/inventory-display/inventory-display.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/inventory-display/inventory-display.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inventoryItem {\n  display: flex;\n  min-height: 30px;\n  max-width: 100%;\n  align-items: center;\n}\n\n.inventoryGroupTitle {\n  margin-top: 3rem;\n  background-size: 5.5rem;\n  padding-left: 7rem;\n  background-position: 0 0;\n  background-repeat: no-repeat;\n  height: 5rem;\n  padding-top: 0.8rem;\n}\n\ntable {\n  position: relative;\n}\n\nth {\n  padding: 8px;\n  position: sticky;\n  top: 0;\n  background-color: white;\n}\n\ntr th:first-of-type {\n  text-align: left;\n}\n\ntr td:not(:first-of-type) {\n  text-align: center;\n}\n\ntr td:last-of-type {\n  text-align: right;\n}\n\n.inventoryMoneyTitle {\n  background-image: url(\"/assets/money-icon.png\");\n}\n\n.inventoryWeaponsTitle {\n  background-image: url(\"/assets/sword-icon.png\");\n  background-size: 3rem;\n  background-position-x: 0.5rem;\n}\n\n.inventoryArmorTitle {\n  background-image: url(\"/assets/armor-icon.png\");\n}\n\n.inventoryMiscTitle {\n  background-image: url(\"/assets/bag-icon.png\");\n}\n\n.spellGroupTitle {\n  font-size: 24px;\n  margin-top: 15px;\n  margin-bottom: 10px;\n}\n\nconfirmation-sheet {\n  margin-top: -20px;\n  display: block;\n}\n\nbutton.addButton {\n  margin-bottom: 8px;\n  z-index: 10;\n}\n\n.addWeaponForm span {\n  display: block;\n  padding-top: 15px;\n  padding-bottom: 5px;\n}\n\n.addButton {\n  width: 300px;\n  max-width: 100%;\n}\n\n.inventoryItemName {\n  width: 200px;\n}\n\n.inventoryDamage,\n.inventoryItemAmount {\n  width: 100px;\n  font-weight: 600;\n}\n\n.inventoryItemAction {\n  padding-left: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50b3J5LWRpc3BsYXkvaW52ZW50b3J5LWRpc3BsYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDs7QUFDQTtFQUNFLCtDQUErQztFQUMvQyxxQkFBcUI7RUFDckIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEOztBQUNBO0VBQ0UsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztFQUVFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9pbnZlbnRvcnktZGlzcGxheS9pbnZlbnRvcnktZGlzcGxheS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludmVudG9yeUl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbnZlbnRvcnlHcm91cFRpdGxlIHtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgYmFja2dyb3VuZC1zaXplOiA1LjVyZW07XG4gIHBhZGRpbmctbGVmdDogN3JlbTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDVyZW07XG4gIHBhZGRpbmctdG9wOiAwLjhyZW07XG59XG5cbnRhYmxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG50aCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxudHIgdGg6Zmlyc3Qtb2YtdHlwZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRyIHRkOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRyIHRkOmxhc3Qtb2YtdHlwZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uaW52ZW50b3J5TW9uZXlUaXRsZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvbW9uZXktaWNvbi5wbmdcIik7XG59XG4uaW52ZW50b3J5V2VhcG9uc1RpdGxlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9zd29yZC1pY29uLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAzcmVtO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDAuNXJlbTtcbn1cblxuLmludmVudG9yeUFybW9yVGl0bGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2FybW9yLWljb24ucG5nXCIpO1xufVxuLmludmVudG9yeU1pc2NUaXRsZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvYmFnLWljb24ucG5nXCIpO1xufVxuXG4uc3BlbGxHcm91cFRpdGxlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuY29uZmlybWF0aW9uLXNoZWV0IHtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuYnV0dG9uLmFkZEJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5hZGRXZWFwb25Gb3JtIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5hZGRCdXR0b24ge1xuICB3aWR0aDogMzAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmludmVudG9yeUl0ZW1OYW1lIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uaW52ZW50b3J5RGFtYWdlLFxuLmludmVudG9yeUl0ZW1BbW91bnQge1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5pbnZlbnRvcnlJdGVtQWN0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/inventory-display/inventory-display.component.html":
/*!********************************************************************!*\
  !*** ./src/app/inventory-display/inventory-display.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"padded flex-col center\">\n  <h4 class=\"inventoryGroupTitle inventoryMoneyTitle\">Geld</h4>\n  <div class=\"flex-col\">\n    <div class=\"row inventoryItem\">\n      <div class=\"inventoryItemName\">Dukaten:</div>\n      <div class=\"inventoryItemAmount\">{{ hero.money.dukaten }}</div>\n      <button (click)=\"editMoney(hero.money.entries[0])\">\n        <i class=\"fa fa-pencil\"></i>\n      </button>\n    </div>\n    <div class=\"row inventoryItem\">\n      <div class=\"inventoryItemName\">Silbertaler:</div>\n      <div class=\"inventoryItemAmount\">{{ hero.money.silbertaler }}</div>\n      <button (click)=\"editMoney(hero.money.entries[1])\">\n        <i class=\"fa fa-pencil\"></i>\n      </button>\n    </div>\n    <div class=\"row inventoryItem\">\n      <div class=\"inventoryItemName\">Kreuzer:</div>\n      <div class=\"inventoryItemAmount\">{{ hero.money.kreuzer }}</div>\n      <button (click)=\"editMoney(hero.money.entries[2])\">\n        <i class=\"fa fa-pencil\"></i>\n      </button>\n    </div>\n    <div class=\"row inventoryItem\">\n      <div class=\"inventoryItemName\">Heller:</div>\n      <div class=\"inventoryItemAmount\">{{ hero.money.heller }}</div>\n      <button (click)=\"editMoney(hero.money.entries[3])\">\n        <i class=\"fa fa-pencil\"></i>\n      </button>\n    </div>\n  </div>\n  <hr />\n  <h4 class=\"inventoryGroupTitle inventoryWeaponsTitle\">Waffen</h4>\n  <button (click)=\"addWeaponToInventory()\" class=\"addButton\">\n    <i class=\"fa fa-plus-square\"></i> Waffe hinzufügen\n  </button>\n  <div class=\"addInventoryItem\" *ngIf=\"showAddWeaponSheet === true\">\n    <confirmation-sheet\n      showExternalTemplate=\"true\"\n      (confirm)=\"addWeapon()\"\n      (cancel)=\"cancelAddWeaponToInventory()\"\n    >\n      <div class=\"addWeaponForm\">\n        <div>Neue Waffe</div>\n        <span>Name</span>\n        <input [(ngModel)]=\"newWeapon.name\" />\n        <span>Trefferpunkte Würfel</span>\n        <input [(ngModel)]=\"newWeapon.damageDice\" />\n        <span>Trefferpunkte Zusatzpunkte</span>\n        <input [(ngModel)]=\"newWeapon._damageAddPoints\" />\n        <span>Körperkraft Zuschlag</span>\n        <input [(ngModel)]=\"newWeapon.extraPointsFromKk\" />\n        <span>Kampftalent</span>\n        <select [(ngModel)]=\"selectedSkillId\">\n          <option\n            *ngFor=\"let weaponSkill of weaponSkills\"\n            [value]=\"weaponSkill.id\"\n          >\n            {{ weaponSkill.name }}\n          </option>\n        </select>\n      </div>\n    </confirmation-sheet>\n  </div>\n  <table>\n    <tr>\n      <th>Name</th>\n      <th>Schaden</th>\n      <th>Talent</th>\n      <th></th>\n    </tr>\n\n    <tr *ngFor=\"let weapon of hero.weapons\" class=\"\">\n      <td class=\"inventoryItemName\">{{ weapon.name }}</td>\n      <td class=\"inventoryDamage\">{{ weapon.damageTextGeneral }}</td>\n      <td class=\"inventoryDamage\">{{ weapon.skill.name }}</td>\n\n      <td class=\"flex-spaces child-borders\">\n        <button (click)=\"removeWeaponFromInventory(weapon)\">\n          <i class=\"fa fa-trash\"></i>\n        </button>\n      </td>\n      <input class=\"modal-state\" id=\"modal-{{ weapon.id }}\" type=\"checkbox\" />\n    </tr>\n  </table>\n  <hr />\n\n  <h4 class=\"inventoryGroupTitle inventoryArmorTitle\">Rüstung</h4>\n  <button class=\"addButton\" (click)=\"addArmorToInventory()\">\n    <i class=\"fa fa-plus-square\"></i> Rüstung hinzufügen\n  </button>\n  <div class=\"addInventoryItem\" *ngIf=\"showAddArmorSheet === true\">\n    <confirmation-sheet\n      showExternalTemplate=\"true\"\n      (confirm)=\"addArmor()\"\n      (cancel)=\"cancelAddArmorToInventory()\"\n    >\n      <div class=\"addWeaponForm\">\n        <div>Neue Rüstung</div>\n        <span>Name</span>\n        <input [(ngModel)]=\"newArmor.name\" />\n        <span>Rüstungsschutz</span>\n        <input [(ngModel)]=\"newArmor.rs\" />\n        <span>Behinderung</span>\n        <input [(ngModel)]=\"newArmor.behinderung\" />\n      </div>\n    </confirmation-sheet>\n  </div>\n  <table>\n    <tr>\n      <th>Name</th>\n      <th>Rüstungsschutz</th>\n      <th>Behinderung</th>\n      <th></th>\n    </tr>\n    <tr *ngFor=\"let armor of hero.armor\" class=\"\">\n      <td class=\"inventoryItemName\">{{ armor.name }}</td>\n      <td class=\"inventoryDamage\">{{ armor.rs }}</td>\n      <td class=\"inventoryDamage\">{{ armor.behinderung }}</td>\n      <td>\n        <button (click)=\"removeArmorFromInventory(armor)\">\n          <i class=\"fa fa-trash\"></i>\n        </button>\n      </td>\n    </tr>\n  </table>\n  <hr />\n  <h4 class=\"inventoryGroupTitle inventoryMiscTitle\">Anderes</h4>\n  <button class=\"addButton\" (click)=\"addInventoryToInventory()\">\n    <i class=\"fa fa-plus-square\"></i> Inventar hinzufügen\n  </button>\n  <div class=\"addInventoryItem\" *ngIf=\"showAddInventorySheet === true\">\n    <confirmation-sheet\n      showExternalTemplate=\"true\"\n      (confirm)=\"addInventory()\"\n      (cancel)=\"cancelAddInventoryToInventory()\"\n    >\n      <div class=\"addWeaponForm\">\n        <div>Neues Ding</div>\n        <span>Name</span>\n        <input [(ngModel)]=\"newInventoryItem.name\" />\n        <span>Menge</span>\n        <input [(ngModel)]=\"newInventoryItem.amount\" />\n        <span>Gewicht</span>\n        <input [(ngModel)]=\"newInventoryItem.weight\" />\n      </div>\n    </confirmation-sheet>\n  </div>\n  <table>\n    <tr>\n      <th>Name</th>\n      <th>Menge</th>\n      <th>Gewicht</th>\n      <th></th>\n    </tr>\n\n    <tr *ngFor=\"let inventoryItem of hero.inventory\">\n      <td class=\"inventoryItemName\">{{ inventoryItem.name }}</td>\n      <td class=\"inventoryItemAmount\">{{ inventoryItem.amount }}</td>\n      <td class=\"inventoryItemAmount\">{{ inventoryItem.weight }}</td>\n      <td>\n        <button (click)=\"addToInventoryAmount(inventoryItem)\">\n          <i class=\"fa fa-plus\"></i>\n        </button>\n        <button\n          (click)=\"subtractFromInventoryAmount(inventoryItem)\"\n          [class.disabled]=\"inventoryItem.amount < 1\"\n        >\n          <i class=\"fa fa-minus\"></i>\n        </button>\n        <button (click)=\"removeInventoryItemFromInventory(inventoryItem)\">\n          <i class=\"fa fa-trash\"></i>\n        </button>\n      </td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/inventory-display/inventory-display.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/inventory-display/inventory-display.component.ts ***!
  \******************************************************************/
/*! exports provided: InventoryDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryDisplayComponent", function() { return InventoryDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/confirm-deletion/confirm-deletion.component */ "./src/app/confirm-deletion/confirm-deletion.component.ts");
/* harmony import */ var app_domain_armor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/domain/armor */ "./src/app/domain/armor.ts");
/* harmony import */ var app_domain_armor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/domain/armor.service */ "./src/app/domain/armor.service.ts");
/* harmony import */ var app_domain_hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/domain/hero */ "./src/app/domain/hero.ts");
/* harmony import */ var app_domain_inventory_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/domain/inventory.service */ "./src/app/domain/inventory.service.ts");
/* harmony import */ var app_domain_inventoryItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/domain/inventoryItem */ "./src/app/domain/inventoryItem.ts");
/* harmony import */ var app_domain_skills_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/domain/skills.service */ "./src/app/domain/skills.service.ts");
/* harmony import */ var app_domain_weapon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/domain/weapon */ "./src/app/domain/weapon.ts");
/* harmony import */ var app_domain_weapons_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/domain/weapons.service */ "./src/app/domain/weapons.service.ts");
/* harmony import */ var app_edit_money_edit_money_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/edit-money/edit-money.component */ "./src/app/edit-money/edit-money.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var InventoryDisplayComponent = /** @class */ (function () {
    function InventoryDisplayComponent(skillService, weaponService, armorService, inventoryService, dialog) {
        this.skillService = skillService;
        this.weaponService = weaponService;
        this.armorService = armorService;
        this.inventoryService = inventoryService;
        this.dialog = dialog;
        this.showAddWeaponSheet = false;
        this.showAddArmorSheet = false;
        this.showAddInventorySheet = false;
    }
    InventoryDisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.skillService.getWeaponSkills().then(function (weaponSkills) {
            _this.weaponSkills = weaponSkills;
            _this.newWeapon = new app_domain_weapon__WEBPACK_IMPORTED_MODULE_9__["Weapon"](null, 'new weapon', 1, 4, 14, _this.weaponSkills[0]);
            _this.newArmor = new app_domain_armor__WEBPACK_IMPORTED_MODULE_3__["Armor"](null, 'Neue Rüstung', 2, 2),
                _this.newInventoryItem = new app_domain_inventoryItem__WEBPACK_IMPORTED_MODULE_7__["InventoryItem"](null, 'Neues Ding', 1, 1);
        });
    };
    /** money maintenance */
    InventoryDisplayComponent.prototype.editMoney = function (accountEntry) {
        this.editModeyDialogRef = this.dialog.open(app_edit_money_edit_money_component__WEBPACK_IMPORTED_MODULE_11__["EditMoneyComponent"], { data: accountEntry });
        this.editModeyDialogRef.componentInstance.confirm.subscribe(this.updateAccountEntry.bind(this));
        this.editModeyDialogRef.componentInstance.cancel.subscribe(this.closeEditMoneyDialog.bind(this));
    };
    InventoryDisplayComponent.prototype.updateAccountEntry = function (updateMoneyData) {
        this.inventoryService.updateAccountEntry(updateMoneyData.accountEntry, this.hero, updateMoneyData.newAmount);
        this.editModeyDialogRef.close();
    };
    InventoryDisplayComponent.prototype.closeEditMoneyDialog = function () {
        this.editModeyDialogRef.close();
    };
    /** weapon maintenance */
    InventoryDisplayComponent.prototype.addWeaponToInventory = function () {
        this.showAddWeaponSheet = true;
    };
    InventoryDisplayComponent.prototype.addWeapon = function () {
        var selectedSkillId = this.selectedSkillId;
        var skill = this.weaponSkills.find(function (weaponSkill) {
            return weaponSkill.id == selectedSkillId;
        });
        this.newWeapon.skill = skill;
        this.weaponService.addWeapon(this.newWeapon, this.hero);
        this.showAddWeaponSheet = false;
    };
    InventoryDisplayComponent.prototype.cancelAddWeaponToInventory = function () {
        this.showAddWeaponSheet = false;
    };
    InventoryDisplayComponent.prototype.removeWeaponFromInventory = function (weapon) {
        this._weaponToDelete = weapon;
        this.deletionDialogRef = this.dialog.open(app_confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDeletionComponent"], { data: new app_confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmationData"]('Möchtest Du das Ding wegwerfen?', 'Es handelt sich dabei um die Waffe <strong>"' + weapon.name + '"</strong>') });
        this.deletionDialogRef.componentInstance.confirm.subscribe(this.deleteWeapon.bind(this));
        this.deletionDialogRef.componentInstance.cancel.subscribe(this.cancelDeletion.bind(this));
    };
    InventoryDisplayComponent.prototype.deleteWeapon = function () {
        this.weaponService.deleteWeapon(this._weaponToDelete, this.hero);
        this.deletionDialogRef.close();
    };
    /** armor maintenance*/
    InventoryDisplayComponent.prototype.addArmorToInventory = function () {
        this.showAddArmorSheet = true;
    };
    InventoryDisplayComponent.prototype.removeArmorFromInventory = function (armor) {
        this._armorToDelete = armor;
        this.deletionDialogRef = this.dialog.open(app_confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDeletionComponent"], { data: new app_confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmationData"]('Möchtest Du die Rüstung wegwerfen?', 'Es handelt sich dabei um die das Rüstungsteil <strong>"' + armor.name + '"</strong>') });
        this.deletionDialogRef.componentInstance.confirm.subscribe(this.deleteArmor.bind(this));
        this.deletionDialogRef.componentInstance.cancel.subscribe(this.cancelDeletion.bind(this));
    };
    InventoryDisplayComponent.prototype.cancelAddArmorToInventory = function () {
        this.showAddArmorSheet = false;
    };
    InventoryDisplayComponent.prototype.addArmor = function () {
        this.armorService.addArmor(this.newArmor, this.hero);
        this.showAddArmorSheet = false;
    };
    InventoryDisplayComponent.prototype.deleteArmor = function () {
        this.armorService.deleteArmor(this._armorToDelete, this.hero);
        this.deletionDialogRef.close();
    };
    /** general inventory maintenance */
    InventoryDisplayComponent.prototype.addInventoryToInventory = function () {
        this.showAddInventorySheet = true;
    };
    InventoryDisplayComponent.prototype.addInventory = function () {
        this.inventoryService.addInventory(this.newInventoryItem, this.hero);
        this.showAddInventorySheet = false;
    };
    InventoryDisplayComponent.prototype.cancelAddInventoryToInventory = function () {
        this.showAddInventorySheet = false;
    };
    InventoryDisplayComponent.prototype.removeInventoryItemFromInventory = function (inventoryItem) {
        this._inventoryItemToDelete = inventoryItem;
        this.deletionDialogRef = this.dialog.open(app_confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDeletionComponent"], { data: new app_confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmationData"]('Brauchst Du das Stück nicht mehr?', 'Es handelt sich dabei um <strong>"' + inventoryItem.name + '"</strong>') });
        this.deletionDialogRef.componentInstance.confirm.subscribe(this.deleteInventory.bind(this));
        this.deletionDialogRef.componentInstance.cancel.subscribe(this.cancelDeletion.bind(this));
    };
    InventoryDisplayComponent.prototype.deleteInventory = function () {
        this.inventoryService.deleteInventory(this._inventoryItemToDelete, this.hero);
        this.deletionDialogRef.close();
    };
    InventoryDisplayComponent.prototype.subtractFromInventoryAmount = function (inventoryItem) {
        if (inventoryItem.amount > 0)
            this.inventoryService.setInventoryItemAmount(inventoryItem, this.hero, inventoryItem.amount - 1);
    };
    InventoryDisplayComponent.prototype.addToInventoryAmount = function (inventoryItem) {
        this.inventoryService.setInventoryItemAmount(inventoryItem, this.hero, inventoryItem.amount + 1);
    };
    InventoryDisplayComponent.prototype.cancelDeletion = function () {
        this.deletionDialogRef.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", app_domain_hero__WEBPACK_IMPORTED_MODULE_5__["Hero"])
    ], InventoryDisplayComponent.prototype, "hero", void 0);
    InventoryDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'inventory-display',
            template: __webpack_require__(/*! ./inventory-display.component.html */ "./src/app/inventory-display/inventory-display.component.html"),
            styles: [__webpack_require__(/*! ./inventory-display.component.css */ "./src/app/inventory-display/inventory-display.component.css")]
        }),
        __metadata("design:paramtypes", [app_domain_skills_service__WEBPACK_IMPORTED_MODULE_8__["SkillService"], app_domain_weapons_service__WEBPACK_IMPORTED_MODULE_10__["WeaponService"], app_domain_armor_service__WEBPACK_IMPORTED_MODULE_4__["ArmorService"], app_domain_inventory_service__WEBPACK_IMPORTED_MODULE_6__["InventoryService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], InventoryDisplayComponent);
    return InventoryDisplayComponent;
}());



/***/ }),

/***/ "./src/app/life-display/life-display.component.css":
/*!*********************************************************!*\
  !*** ./src/app/life-display/life-display.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainStatus {\t\n\t/* ; */\n\t/* top: -16px;\n\tleft: 50%;\n\tz-index: 30; */\n}\n\n.statusValueContainer {\n    height: 30px;\n    width: 120px;\n    display: flex;\n    justify-content: center;\n\tposition: relative;\n    /* left: -50%; */\n}\n\n.mainStatusValue {\n\theight: 30px;\n\twidth: 120px;\n\tborder-radius: 60px;\n\tborder: 1px solid #bbb;\n\tbackground-color: #fff;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 2px 0 0 0;\n\tfont-size: 1.5rem;\n\tposition: relative;\n\t\n}\n\n.statusValueText {\n    z-index: 10;\n}\n\n.control-icon {\n\twidth: 40px;\n\theight: 40px;\n\tposition: absolute;\n    top: -25px;\n    left: 40px;\n\tz-index: 200;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlmZS1kaXNwbGF5L2xpZmUtZGlzcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsTUFBTTtDQUNOOztlQUVjO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7Q0FDMUIsa0JBQWtCO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsc0JBQXNCO0NBQ3RCLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixrQkFBa0I7O0FBRW5COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixrQkFBa0I7SUFDZixVQUFVO0lBQ1YsVUFBVTtDQUNiLFlBQVk7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2xpZmUtZGlzcGxheS9saWZlLWRpc3BsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluU3RhdHVzIHtcdFxuXHQvKiA7ICovXG5cdC8qIHRvcDogLTE2cHg7XG5cdGxlZnQ6IDUwJTtcblx0ei1pbmRleDogMzA7ICovXG59XG5cbi5zdGF0dXNWYWx1ZUNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLyogbGVmdDogLTUwJTsgKi9cbn1cblxuLm1haW5TdGF0dXNWYWx1ZSB7XG5cdGhlaWdodDogMzBweDtcblx0d2lkdGg6IDEyMHB4O1xuXHRib3JkZXItcmFkaXVzOiA2MHB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0cGFkZGluZzogMnB4IDAgMCAwO1xuXHRmb250LXNpemU6IDEuNXJlbTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcbn1cblxuLnN0YXR1c1ZhbHVlVGV4dCB7XG4gICAgei1pbmRleDogMTA7XG59XG5cbi5jb250cm9sLWljb24ge1xuXHR3aWR0aDogNDBweDtcblx0aGVpZ2h0OiA0MHB4O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMjVweDtcbiAgICBsZWZ0OiA0MHB4O1xuXHR6LWluZGV4OiAyMDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/life-display/life-display.component.html":
/*!**********************************************************!*\
  !*** ./src/app/life-display/life-display.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainStatus\">\n  <img class=\"control-icon no-border\" src=\"/assets/icons/heart.png\"/>\n  <div  class=\"mainStatusValue good\">\n    <div matRipple matRipple \n    matRippleColor=\"#ff0000\"\n    matRippleRadius=\"20\" \n    matRippleCentered=\"true\"\n    matRippleDisabled=\"true\"\n    class=\"statusValueContainer\">\n      <div class=\"statusValueText\">{{currentLife}}/{{maxLife}}</div>\n    </div>\n</div>\n</div>"

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
    };
    // Test stuff
    LifeDisplayComponent.prototype.rippleText = function (text) {
        console.log(text);
    };
    ;
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

module.exports = ".mainStatus {\t\n\t/* ; */\n\t/* top: -16px;\n\tleft: 50%;\n\tz-index: 30; */\n}\n\n.statusValueContainer {\n    height: 30px;\n    width: 120px;\n    display: flex;\n    justify-content: center;\n\tposition: relative;\n    /* left: -50%; */\n}\n\n.mainStatusValue {\n\theight: 30px;\n\twidth: 120px;\n\tborder-radius: 60px;\n\tborder: 1px solid #bbb;\n\tbackground-color: #fff;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 2px 0 0 0;\n\tfont-size: 1.5rem;\n\tposition: relative;\n}\n\n.statusValueText {\n    z-index: 10;\n}\n\n.control-icon {\n\twidth: 40px;\n\theight: 40px;\n\tposition: absolute;\n    top: 15px;\n    left: 40px;\n\tz-index: 200;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFnaWMtZGlzcGxheS9tYWdpYy1kaXNwbGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxNQUFNO0NBQ047O2VBRWM7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtDQUMxQixrQkFBa0I7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsc0JBQXNCO0NBQ3RCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osa0JBQWtCO0lBQ2YsU0FBUztJQUNULFVBQVU7Q0FDYixZQUFZO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9tYWdpYy1kaXNwbGF5L21hZ2ljLWRpc3BsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluU3RhdHVzIHtcdFxuXHQvKiA7ICovXG5cdC8qIHRvcDogLTE2cHg7XG5cdGxlZnQ6IDUwJTtcblx0ei1pbmRleDogMzA7ICovXG59XG5cbi5zdGF0dXNWYWx1ZUNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLyogbGVmdDogLTUwJTsgKi9cbn1cblxuLm1haW5TdGF0dXNWYWx1ZSB7XG5cdGhlaWdodDogMzBweDtcblx0d2lkdGg6IDEyMHB4O1xuXHRib3JkZXItcmFkaXVzOiA2MHB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0cGFkZGluZzogMnB4IDAgMCAwO1xuXHRmb250LXNpemU6IDEuNXJlbTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3RhdHVzVmFsdWVUZXh0IHtcbiAgICB6LWluZGV4OiAxMDtcbn1cblxuLmNvbnRyb2wtaWNvbiB7XG5cdHdpZHRoOiA0MHB4O1xuXHRoZWlnaHQ6IDQwcHg7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1cHg7XG4gICAgbGVmdDogNDBweDtcblx0ei1pbmRleDogMjAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/magic-display/magic-display.component.html":
/*!************************************************************!*\
  !*** ./src/app/magic-display/magic-display.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainStatus\">\n    <img class=\"control-icon no-border\" src=\"/assets/icons/upg_wand.png\"/>\n    <div  class=\"mainStatusValue good\">\n      <div class=\"statusValueContainer\">\n        <div class=\"statusValueText\">{{currentMagicEnergy}}/{{maxMagicEnergy}}</div>\n      </div>\n  </div>\n  </div>"

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
    };
    // Test stuff
    MagicDisplayComponent.prototype.rippleText = function (text) {
        console.log(text);
    };
    ;
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9tYXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/master/master.component.html":
/*!**********************************************!*\
  !*** ./src/app/master/master.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  master works!\n</p>\n"

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

module.exports = ":host {\n  padding: 50px 0;\n  position: fixed;\n  \n}\n\n#menuContainer {\n  display: none;\n}\n\n#menuContainer.open {\n\tdisplay: flex;\n}\n\n.mat-menu-content {\n  background-color: rgba(90, 90, 90, 0.5);\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTs7QUFFakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekMiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcGFkZGluZzogNTBweCAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIFxufVxuXG4jbWVudUNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNtZW51Q29udGFpbmVyLm9wZW4ge1xuXHRkaXNwbGF5OiBmbGV4O1xufVxuXG4ubWF0LW1lbnUtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTAsIDkwLCA5MCwgMC41KTtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"menuContainer\" [ngClass]=\"{'open': open === true }\">\n  <!-- <md-nav-list class=\"modal\">\n    <md-list-item (click)=\"gotoList()\">\n      <a mdLine>Zurück</a>\n    </md-list-item>\n    <md-list-item>Salt </md-list-item>\n    <md-list-item>Paprika </md-list-item>\n  </md-nav-list> -->\n</div>\n"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/player/player.component.html":
/*!**********************************************!*\
  !*** ./src/app/player/player.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<remote-control-receiver></remote-control-receiver>\n<router-outlet></router-outlet>\n"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbW90ZS1jb250cm9sLXJlY2VpdmVyL3JlbW90ZS1jb250cm9sLXJlY2VpdmVyLmNvbXBvbmVudC5jc3MifQ== */"

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
/* harmony import */ var app_url_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/url.service */ "./src/app/url.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _remote_control_receiver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remote-control-receiver.service */ "./src/app/remote-control-receiver/remote-control-receiver.service.ts");
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
    function RemoteControlReceiverComponent(websocketService, toastr) {
        this.websocketService = websocketService;
        this.toastr = toastr;
        this.wsUrl = app_url_service__WEBPACK_IMPORTED_MODULE_1__["UrlService"].getBaseURLWS() + "/remoteControl";
        this.currentlyConnected = false;
    }
    RemoteControlReceiverComponent.prototype.ngOnInit = function () {
    };
    RemoteControlReceiverComponent.prototype.handleIncommingMessage = function (message) {
        var messageData = JSON.parse(message.data);
    };
    RemoteControlReceiverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'remote-control-receiver',
            template: __webpack_require__(/*! ./remote-control-receiver.component.html */ "./src/app/remote-control-receiver/remote-control-receiver.component.html"),
            styles: [__webpack_require__(/*! ./remote-control-receiver.component.css */ "./src/app/remote-control-receiver/remote-control-receiver.component.css")]
        }),
        __metadata("design:paramtypes", [_remote_control_receiver_service__WEBPACK_IMPORTED_MODULE_3__["RemoteControlReceiverService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var app_domain_timer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/domain/timer.service */ "./src/app/domain/timer.service.ts");
/* harmony import */ var app_timer_dialog_timer_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/timer-dialog/timer-dialog.component */ "./src/app/timer-dialog/timer-dialog.component.ts");
/* harmony import */ var app_url_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/url.service */ "./src/app/url.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../domain/remoteControlOperation */ "./src/app/domain/remoteControlOperation.ts");
/* harmony import */ var _image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../image-popup/image-popup.component */ "./src/app/image-popup/image-popup.component.ts");
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
    function RemoteControlReceiverService(http, dialog, toastr, timerService) {
        var _this = this;
        this.http = http;
        this.dialog = dialog;
        this.toastr = toastr;
        this.timerService = timerService;
        this.operationsMap = new Map();
        this.wsUrl = app_url_service__WEBPACK_IMPORTED_MODULE_6__["UrlService"].getBaseURLWS() + "/remoteControl";
        this.wsClientId = Math.random().toString(36).substring(7);
        this.currentlyConnected = false;
        this.baseUrl = app_url_service__WEBPACK_IMPORTED_MODULE_6__["UrlService"].getBaseUrl();
        this.createWebsocket();
        this.operationsMap.set(_domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_11__["operationTypes"].openImage, function (openImageOperation) {
            var dialogRef = _this.dialog.open(_image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_12__["ImagePopupComponent"], {
                // width: '250px',
                data: { url: _this.baseUrl + openImageOperation.getParameter('url') }
            });
        });
        this.operationsMap.set(_domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_11__["operationTypes"].startTimer, function (startTimerOperation) {
            if (_this.timerService.timer.running === false) {
                var timerData = startTimerOperation.getParameters();
                _this.timerService.timer.minutes = timerData.minutes;
                _this.timerService.timer.seconds = timerData.seconds;
                _this.timerService.timer.title = timerData.title;
                _this.timerService.startTimer(true);
                _this.timerToaster = _this.toastr.info("Ihr k\u00F6nnt kurz nachdenken: \n" + startTimerOperation.getParameter('minutes') + " Minuten\n" + startTimerOperation.getParameter('seconds') + " Sekunden!", 'Bedenkzeit', {
                    timeOut: _this.timerService.timer.getTimerMilliseconds(),
                    tapToDismiss: false,
                    progressBar: true
                });
                _this.timerToaster.onTap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1))
                    .subscribe(function () {
                    var _this = this;
                    this.timerDialogRef = this.dialog.open(app_timer_dialog_timer_dialog_component__WEBPACK_IMPORTED_MODULE_5__["TimerDialogComponent"], {
                        data: { timer: this.timerService.timer, timeRemaining: this.timerService.timeRemaining }
                    });
                    this.timerDialogRef.componentInstance.cancelDialog.subscribe(this.closeTimerDialog.bind(this));
                    this.timerDialogRef.componentInstance.stopTimer.subscribe(function () {
                        _this.timerService.clearTimer();
                        _this.closeTimerDialog();
                    });
                }.bind(_this));
            }
        });
        this.operationsMap.set(_domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_11__["operationTypes"].timerFinished, function (timerFinishedOperation) {
            _this.closeTimerDialog();
            _this.timerService.stopTimer(false);
            if (_this.timerToaster)
                _this.toastr.clear(_this.timerToaster.toastId);
            _this.toastr.info('Die Zeit ist abgelaufen', "Time's Up!");
        });
        this.operationsMap.set(_domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_11__["operationTypes"].timerStopped, function (timerFinishedOperation) {
            _this.closeTimerDialog();
            _this.timerService.stopTimer(false);
            if (_this.timerToaster)
                _this.toastr.clear(_this.timerToaster.toastId);
            _this.toastr.info("Der Plan ist gefasst!", 'Geschafft');
        });
    }
    RemoteControlReceiverService.prototype.closeTimerDialog = function () {
        if (this.timerDialogRef)
            this.timerDialogRef.close();
    };
    RemoteControlReceiverService.prototype.createWebsocket = function () {
        var _this = this;
        try {
            this.socket = new WebSocket(this.wsUrl);
            this.remoteControlReceiverSubject = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
            this.socket.onopen = function (event) {
                _this.currentlyConnected = true;
                _this.toastr.success('Du bist online.');
                clearInterval(_this.connectionInterval);
            };
            this.socket.onerror = function (error) {
                if (_this.socket.readyState === _this.socket.OPEN) {
                    _this.toastr.error('Es gab einen Fehler', 'Wir schließen nun die Verbindung');
                }
            };
            this.socket.addEventListener('error', function (event) {
                console.log('hey');
                event.stopPropagation();
            });
            this.socket.addEventListener('close', function (event) {
                if (_this.currentlyConnected) {
                    _this.currentlyConnected = false;
                    _this.toastr.error('Du bist nicht mehr mit dem Server verbunden', 'Die Verbindung ist abgebaut worden');
                    _this.connectionInterval = window.setInterval(_this.createWebsocket.bind(_this), 4000);
                }
            });
            this.remoteControlReceiverSubscription = this.remoteControlReceiverSubject.subscribe(function (message) {
                var instruction = _domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_11__["OperationFactory"].createOperationFromJSON(message.data);
                var parameters = instruction.getParameters();
                var instructionFunction = _this.operationsMap.get(instruction.getType());
                instructionFunction.apply(_this, [instruction]);
                // this.operationsMap.get(instruction.getType()).apply(this, parameters)
            });
            this.socket.onmessage = (function (evt) {
                return _this.remoteControlReceiverSubject.next(evt);
            });
        }
        catch (error) {
            console.log('error setting up web socket with remote control receiver');
        }
    };
    RemoteControlReceiverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], app_domain_timer_service__WEBPACK_IMPORTED_MODULE_4__["TimerService"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbW90ZS1jb250cm9sL3JlbW90ZS1jb250cm9sLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/remote-control/remote-control.component.html":
/*!**************************************************************!*\
  !*** ./src/app/remote-control/remote-control.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

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
/* harmony import */ var app_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/url.service */ "./src/app/url.service.ts");
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




var RemoteControlService = /** @class */ (function () {
    function RemoteControlService(http) {
        this.http = http;
        this.wsUrl = app_url_service__WEBPACK_IMPORTED_MODULE_2__["UrlService"].getBaseURLWS() + "/remoteControl";
        this.wsClientId = Math.random().toString(36).substring(7);
        this.socket = this.createWebsocket();
        var subject = this.remoteControlSubject = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.socket.onmessage = (function (evt) { return subject.next(evt); });
    }
    RemoteControlService.prototype.createWebsocket = function () {
        try {
            var ws = new WebSocket(this.wsUrl);
            return ws;
        }
        catch (error) {
            console.log('error setting up web socket to remote control sender');
        }
    };
    RemoteControlService.prototype.sendRemoteControlInstruction = function (instruction) {
        var jsonOperation = instruction.toJSON();
        console.log("will send instruction: " + jsonOperation);
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

/***/ "./src/app/spell-card/spell-card.component.html":
/*!******************************************************!*\
  !*** ./src/app/spell-card/spell-card.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-col center\">\n  <button>\n    <div class=\"flex-row skill\">\n      <div class=\"skillTitle\">{{spell.getSpell().name}}</div>\n      <div class=\"skillBe\">\n        <i class=\"fa fa-wheelchair\"></i>{{spell.getSpell().be}}\n      </div>\n      \n      <div class=\"skillValue\">\n        <i class=\"fa fa-tachometer\"></i>{{spell.value}}</div>\n      <div class=\"dices\">\n        <i class=\"fa fa-cubes\"></i>\n        <div class=\"dice\">{{spell.getSpell().dice1}}: {{spell.dice1Value}}</div>\n        <div class=\"dice\">{{spell.getSpell().dice2}}: {{spell.dice2Value}}</div>\n        <div class=\"dice\">{{spell.getSpell().dice3}}: {{spell.dice3Value}}</div>\n      </div>\n    </div>\n  </button>\n</div>"

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
            styles: [__webpack_require__(/*! ./../talent-card/talent-card.component.css */ "./src/app/talent-card/talent-card.component.css")]
        }),
        __metadata("design:paramtypes", [_domain_spells_service__WEBPACK_IMPORTED_MODULE_1__["SpellService"]])
    ], SpellCard);
    return SpellCard;
}());



/***/ }),

/***/ "./src/app/spell-search/spell-search.component.css":
/*!*********************************************************!*\
  !*** ./src/app/spell-search/spell-search.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchContainer {\n  justify-content: center;\n}\n\n.spellGroup {\n  position: relative;\n}\n\n.spellGroupTitle {\n  font-size: 24px;\n  margin-top: 15px;\n  margin-bottom: 10px;\n  position: sticky;\n  top: 0;\n  padding: 8px;\n  background-color: #efefef;\n}\n\n.spellEntry {\n  margin-bottom: 8px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlbGwtc2VhcmNoL3NwZWxsLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc3BlbGwtc2VhcmNoL3NwZWxsLXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaENvbnRhaW5lciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3BlbGxHcm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNwZWxsR3JvdXBUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG59XG4uc3BlbGxFbnRyeSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/spell-search/spell-search.component.html":
/*!**********************************************************!*\
  !*** ./src/app/spell-search/spell-search.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-col flex-item\">\n  <div class=\"flex-row padded searchContainer center\">\n    <input\n      placeholder=\"Suchbegriff\"\n      [value]=\"spellSearchTerm\"\n      (input)=\"spellSearchTerm = $event.target.value\"\n    />\n  </div>\n  <div class=\"talente padded\">\n    <div\n      class=\"flex-col center spellGroup\"\n      *ngFor=\"\n        let spellGroup of hero.spellGroups\n          | MatchesSpellSearchTermChildren: spellSearchTerm\n      \"\n    >\n      <div class=\"spellGroupTitle border\">{{ spellGroup.spellGroup.name }}</div>\n      <div class=\"spellGroupEntries\">\n        <div\n          class=\"spellEntry\"\n          *ngFor=\"\n            let spell of spellGroup.spells\n              | MatchesSpellSearchTerm: spellSearchTerm\n          \"\n        >\n          <spell-card [spell]=\"spell\"></spell-card>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/spell-search/spell-search.component.ts":
/*!********************************************************!*\
  !*** ./src/app/spell-search/spell-search.component.ts ***!
  \********************************************************/
/*! exports provided: SpellSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpellSearchComponent", function() { return SpellSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/hero */ "./src/app/domain/hero.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpellSearchComponent = /** @class */ (function () {
    function SpellSearchComponent() {
        this.spellSearchTerm = '';
    }
    SpellSearchComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _domain_hero__WEBPACK_IMPORTED_MODULE_1__["Hero"])
    ], SpellSearchComponent.prototype, "hero", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SpellSearchComponent.prototype, "searchActive", void 0);
    SpellSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'spell-search',
            template: __webpack_require__(/*! ./spell-search.component.html */ "./src/app/spell-search/spell-search.component.html"),
            styles: [__webpack_require__(/*! ./spell-search.component.css */ "./src/app/spell-search/spell-search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpellSearchComponent);
    return SpellSearchComponent;
}());



/***/ }),

/***/ "./src/app/spell-search/spell.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/spell-search/spell.pipe.ts ***!
  \********************************************/
/*! exports provided: MatchesSpellSearchTerm, MatchesSpellSearchTermChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesSpellSearchTerm", function() { return MatchesSpellSearchTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesSpellSearchTermChildren", function() { return MatchesSpellSearchTermChildren; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MatchesSpellSearchTerm = /** @class */ (function () {
    function MatchesSpellSearchTerm() {
    }
    MatchesSpellSearchTerm.prototype.transform = function (spells, searchTerm) {
        if (searchTerm != '' && searchTerm !== undefined) {
            return spells.filter(function (spell) {
                return (spell.getSpell().name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
            });
        }
        else {
            return spells;
        }
    };
    MatchesSpellSearchTerm = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'MatchesSpellSearchTerm'
        })
    ], MatchesSpellSearchTerm);
    return MatchesSpellSearchTerm;
}());

var MatchesSpellSearchTermChildren = /** @class */ (function () {
    function MatchesSpellSearchTermChildren() {
    }
    MatchesSpellSearchTermChildren.prototype.transform = function (spellGroups, searchTerm) {
        if (searchTerm != '' && searchTerm !== undefined) {
            return spellGroups.filter(function (spellGroup) {
                return (spellGroup.getSpells().filter(function (spell) { return spell.getSpell().name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1; })).length > 0;
            });
        }
        else {
            return spellGroups;
        }
    };
    MatchesSpellSearchTermChildren = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'MatchesSpellSearchTermChildren'
        })
    ], MatchesSpellSearchTermChildren);
    return MatchesSpellSearchTermChildren;
}());



/***/ }),

/***/ "./src/app/talent-card/talent-card.component.css":
/*!*******************************************************!*\
  !*** ./src/app/talent-card/talent-card.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-row.skill {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 2px;\n    padding: 12px;\n    font-size: 16px;\n}\n\n.skillTitle {\n    width: 140px;\n    font-weight: 600;\n    text-align: left;\n}\n\n.skillBe, .skillValue {\n    width: 60px;\n}\n\n.fightDices {\n    width: 120px;\n    display:flex;\n}\n\n.fightDice {\n    width: 60px;\n}\n\n.dices {\n    display: flex;\n    width: 200px;\n}\n\n.dice {\n    width: 50px\n}\n\ni {\n    margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFsZW50LWNhcmQvdGFsZW50LWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3RhbGVudC1jYXJkL3RhbGVudC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1yb3cuc2tpbGwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbjogMnB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uc2tpbGxUaXRsZSB7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnNraWxsQmUsIC5za2lsbFZhbHVlIHtcbiAgICB3aWR0aDogNjBweDtcbn1cblxuLmZpZ2h0RGljZXMge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBkaXNwbGF5OmZsZXg7XG59XG5cbi5maWdodERpY2Uge1xuICAgIHdpZHRoOiA2MHB4O1xufVxuXG4uZGljZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuXG4uZGljZSB7XG4gICAgd2lkdGg6IDUwcHhcbn1cblxuaSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/talent-card/talent-card.component.html":
/*!********************************************************!*\
  !*** ./src/app/talent-card/talent-card.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-col center\">\n  <button class=\"comic-shadow\">\n    <div class=\"flex-row skill\">\n      <div class=\"skillTitle\">{{skill.getSkill().name}}</div>\n      <div class=\"skillBe\">\n        <i class=\"fa fa-wheelchair\"></i>{{skill.getSkill().be}}\n      </div>\n\n      <div class=\"skillValue\">\n        <i class=\"fa fa-tachometer\"></i>{{skill.value}}\n      </div>\n      <div class=\"fightDices\" *ngIf=\"skillGroup.hasAttackParade\">\n        <i class=\"fa fa-cube\"></i>\n        <div class=\"fightDice\">AT: {{skill.getAttack()}}</div>\n        <div class=\"fightDice\">PA: {{skill.getParade()}}</div>\n      </div>\n      <div class=\"dices\" *ngIf=\"skillGroup.hasThreeDices\">\n        <i class=\"fa fa-cubes\"></i>\n        <div class=\"dice\">{{skill.getSkill().dice1.short}}: {{skill.dice1Value}}</div>\n        <div class=\"dice\">{{skill.getSkill().dice2.short}}: {{skill.dice2Value}}</div>\n        <div class=\"dice\">{{skill.getSkill().dice3.short}}: {{skill.dice3Value}}</div>\n      </div>\n    </div>\n  </button>\n  <div *ngIf=\"state === 'rollDice'\" class=\"confirmationButtons flex-col center\">\n    <div class=\"messageToConfirm\">Würfeln</div>\n    <div class=\"flex-row\">\n      <div class=\"flex-item flex-col confirmationButton center accept\" (click)=\"confirmIncrease()\">\n        <i class=\"fa fa-check\"></i>\n      </div>\n      <div class=\"flex-item flex-col confirmationButton center reject\" (click)=\"cancelIncrease()\">\n        <i class=\"fa fa-window-close\"></i>\n      </div>\n    </div>\n  </div>\n</div>"

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
/*! exports provided: MatchesTalentSearchTerm, MatchesTalentSearchTermChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesTalentSearchTerm", function() { return MatchesTalentSearchTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesTalentSearchTermChildren", function() { return MatchesTalentSearchTermChildren; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MatchesTalentSearchTerm = /** @class */ (function () {
    function MatchesTalentSearchTerm() {
    }
    MatchesTalentSearchTerm.prototype.transform = function (skills, searchTerm) {
        if (searchTerm != '' && searchTerm !== undefined) {
            return skills.filter(function (skill) {
                return (skill.getSkill().name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
            });
        }
        else {
            return skills;
        }
    };
    MatchesTalentSearchTerm = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'MatchesTalentSearchTerm'
        })
    ], MatchesTalentSearchTerm);
    return MatchesTalentSearchTerm;
}());

var MatchesTalentSearchTermChildren = /** @class */ (function () {
    function MatchesTalentSearchTermChildren() {
    }
    MatchesTalentSearchTermChildren.prototype.transform = function (skillGroups, searchTerm) {
        if (searchTerm != '' && searchTerm !== undefined) {
            return skillGroups.filter(function (SkillGroup) {
                return (SkillGroup.getSkills().filter(function (skill) { return skill.getSkill().name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1; })).length > 0;
            });
        }
        else {
            return skillGroups;
        }
    };
    MatchesTalentSearchTermChildren = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'MatchesTalentSearchTermChildren'
        })
    ], MatchesTalentSearchTermChildren);
    return MatchesTalentSearchTermChildren;
}());



/***/ }),

/***/ "./src/app/talent-search/talent-search.component.css":
/*!***********************************************************!*\
  !*** ./src/app/talent-search/talent-search.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchContainer {\n  justify-content: center;\n}\n\n.skillGroup {\n  position: relative;\n}\n\n.skillGroupTitle {\n  font-size: 24px;\n  margin-top: 15px;\n  margin-bottom: 10px;\n  position: sticky;\n  top: 0;\n  padding: 8px;\n  background-color: #efefef;\n}\n\n.skillEntry {\n  margin-bottom: 8px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFsZW50LXNlYXJjaC90YWxlbnQtc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC90YWxlbnQtc2VhcmNoL3RhbGVudC1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2hDb250YWluZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNraWxsR3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5za2lsbEdyb3VwVGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xufVxuXG4uc2tpbGxFbnRyeSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/talent-search/talent-search.component.html":
/*!************************************************************!*\
  !*** ./src/app/talent-search/talent-search.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-col flex-item\">\n  <div class=\"flex-row padded searchContainer center\">\n    <input\n      placeholder=\"Suchbegriff\"\n      [value]=\"talentSearchTerm\"\n      (input)=\"talentSearchTerm = $event.target.value\"\n    />\n  </div>\n  <div class=\"talente padded\">\n    <div\n      class=\"flex-col center skillGroup\"\n      *ngFor=\"\n        let skillGroup of hero.skillGroups\n          | MatchesTalentSearchTermChildren: talentSearchTerm\n      \"\n    >\n      <div class=\"skillGroupTitle border\">{{ skillGroup.skillGroup.name }}</div>\n      <div class=\"skillGroupEntries\">\n        <div\n          class=\"skillEntry\"\n          *ngFor=\"\n            let skill of skillGroup.skills\n              | MatchesTalentSearchTerm: talentSearchTerm\n          \"\n        >\n          <talent-card [skill]=\"skill\"></talent-card>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _domain_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/hero */ "./src/app/domain/hero.ts");
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
        this.talentSearchTerm = '';
    }
    TalentSearchComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _domain_hero__WEBPACK_IMPORTED_MODULE_1__["Hero"])
    ], TalentSearchComponent.prototype, "hero", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TalentSearchComponent.prototype, "searchActive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TalentSearchComponent.prototype, "editMode", void 0);
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

/***/ "./src/app/timer-dialog/timer-dialog.component.css":
/*!*********************************************************!*\
  !*** ./src/app/timer-dialog/timer-dialog.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\n  background: url(\"/assets/time.png\");\n  height: 90px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 100%;\n}\n\nh3,\nh4 {\n  margin: 20px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZXItZGlhbG9nL3RpbWVyLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3RpbWVyLWRpYWxvZy90aW1lci1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL3RpbWUucG5nXCIpO1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaDMsXG5oNCB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/timer-dialog/timer-dialog.component.html":
/*!**********************************************************!*\
  !*** ./src/app/timer-dialog/timer-dialog.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-col center\">\n  <h3>Timer \"{{ timerData.timer.title }}\"</h3>\n  <div class=\"spacer\">&nbsp;</div>\n  <h4>\n    {{ timerData.timeRemaining.minutes }}:{{\n      timerData.timeRemaining.secondsString\n    }}\n  </h4>\n  <div class=\"flex-row\">\n    <button (click)=\"raiseCancel()\">Mach mal zu den Dialog</button>\n    <button class=\"\" (click)=\"raiseStopTimer()\">\n      <i class=\"fa fa-brain\"></i> Wir haben's!\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/timer-dialog/timer-dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/timer-dialog/timer-dialog.component.ts ***!
  \********************************************************/
/*! exports provided: TimerDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerDialogComponent", function() { return TimerDialogComponent; });
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


var TimerDialogComponent = /** @class */ (function () {
    function TimerDialogComponent(dialog, timerData) {
        this.dialog = dialog;
        this.timerData = timerData;
        this.stopTimer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancelDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TimerDialogComponent.prototype.ngOnInit = function () {
    };
    TimerDialogComponent.prototype.raiseStopTimer = function () {
        this.stopTimer.emit();
    };
    TimerDialogComponent.prototype.raiseCancel = function () {
        this.cancelDialog.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TimerDialogComponent.prototype, "stopTimer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TimerDialogComponent.prototype, "cancelDialog", void 0);
    TimerDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timer-dialog',
            template: __webpack_require__(/*! ./timer-dialog.component.html */ "./src/app/timer-dialog/timer-dialog.component.html"),
            styles: [__webpack_require__(/*! ./timer-dialog.component.css */ "./src/app/timer-dialog/timer-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], Object])
    ], TimerDialogComponent);
    return TimerDialogComponent;
}());



/***/ }),

/***/ "./src/app/url.service.ts":
/*!********************************!*\
  !*** ./src/app/url.service.ts ***!
  \********************************/
/*! exports provided: UrlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlService", function() { return UrlService; });
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

var UrlService = /** @class */ (function () {
    function UrlService() {
    }
    UrlService_1 = UrlService;
    UrlService.getBaseUrl = function () {
        return this._baseURL;
    };
    UrlService.getBaseURLWS = function () {
        return this._baseURLWS;
    };
    var UrlService_1;
    UrlService.productionHost = 'dsa-server-dev.eu-central-1.elasticbeanstalk.com';
    // private static _baseHostProd = `${window.location.hostname}:${window.location.port}`
    UrlService._baseHostProd = "" + UrlService_1.productionHost;
    UrlService._baseHostDev = window.location.hostname + ":8000";
    UrlService._isDev = window.location.hostname === 'localhost' || /^(((1?[1-9]?|10|2[0-4])\d|25[0-5])($|\.(?!$))){4}$/.test(window.location.hostname) ? true : false;
    UrlService._baseURL = UrlService_1._isDev ? window.location.protocol + "//" + UrlService_1._baseHostDev : window.location.protocol + "//" + UrlService_1._baseHostProd;
    UrlService._protocolWebSockets = window.location.protocol === 'http:' ? 'ws:' : 'wss:';
    UrlService._baseURLWS = UrlService_1._isDev ? UrlService_1._protocolWebSockets + "//" + UrlService_1._baseHostDev : UrlService_1._protocolWebSockets + "//" + UrlService_1._baseHostProd;
    UrlService = UrlService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UrlService);
    return UrlService;
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

module.exports = __webpack_require__(/*! /Users/michaelluther/jsWorkspace/table-top-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map