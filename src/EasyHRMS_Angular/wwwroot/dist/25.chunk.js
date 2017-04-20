webpackJsonp([25],{

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LookupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LookupComponent = (function () {
    function LookupComponent() {
    }
    LookupComponent.prototype.ngOnInit = function () {
    };
    return LookupComponent;
}());
LookupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'app-lookup',
        template: __webpack_require__(461),
    }),
    __metadata("design:paramtypes", [])
], LookupComponent);



/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HolidayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HolidayComponent = (function () {
    function HolidayComponent() {
    }
    HolidayComponent.prototype.ngOnInit = function () {
    };
    return HolidayComponent;
}());
HolidayComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'app-holiday',
        template: __webpack_require__(462),
    }),
    __metadata("design:paramtypes", [])
], HolidayComponent);



/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_lookup_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__holiday_holiday_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__branch_branch_component__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__branch_form_form_component__ = __webpack_require__(487);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LookupRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_lookup_component__["a" /* LookupComponent */] },
    { path: 'holiday', component: __WEBPACK_IMPORTED_MODULE_3__holiday_holiday_component__["a" /* HolidayComponent */] },
    { path: 'branch', component: __WEBPACK_IMPORTED_MODULE_4__branch_branch_component__["a" /* BranchComponent */] },
    { path: 'branch/form', component: __WEBPACK_IMPORTED_MODULE_5__branch_form_form_component__["a" /* FormComponent */] },
];
var LookupRoutingModule = (function () {
    function LookupRoutingModule() {
    }
    return LookupRoutingModule;
}());
LookupRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], LookupRoutingModule);



/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_lookup_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lookup_routing_module__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__holiday_holiday_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__branch_branch_component__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__branch_form_form_component__ = __webpack_require__(487);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupModule", function() { return LookupModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var LookupModule = (function () {
    function LookupModule() {
    }
    return LookupModule;
}());
LookupModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__lookup_routing_module__["a" /* LookupRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared__["c" /* PageHeaderModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__components_lookup_component__["a" /* LookupComponent */],
            __WEBPACK_IMPORTED_MODULE_6__holiday_holiday_component__["a" /* HolidayComponent */],
            __WEBPACK_IMPORTED_MODULE_7__branch_branch_component__["a" /* BranchComponent */],
            __WEBPACK_IMPORTED_MODULE_8__branch_form_form_component__["a" /* FormComponent */]
        ]
    })
], LookupModule);



/***/ }),

/***/ 461:
/***/ (function(module, exports) {

module.exports = "<div id=\"main-content\" class=\"dashboard\">\r\n\t<div class=\"boder-btm-dark\">\r\n\t\t  <h1 class=\"panel-title\">Company Configuration</h1>\r\n\t\t</div>\r\n    <ul class=\"lookup-list\">\r\n        \t<li>\r\n        \t \r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-blue text-center p-0\" >\r\n               \t <a [routerLink]=\"['/lookup/branch']\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n                \t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/manage-branches-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tManage Branches\r\n\t\t\t\t\t </div>\r\n               </a>\r\n                </div>\r\n              </div>\r\n              \r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-red text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/currency-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tCurrency\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-green text-center p-0\">\r\n                 <a [routerLink]=\"['/lookup/holiday']\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/holiday-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tHoliday\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-dark text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/announcement-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tAnnouncement\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        </ul>\r\n    <div class=\"boder-btm-dark\">\r\n\t\t  <h1 class=\"panel-title\">Employee Management</h1>\r\n\t\t</div>\r\n\t<ul class=\"list-unstyled lookup-list\">\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-blue text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/employee-position-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tEmployee Position\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-red text-center p-0\">\r\n                <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/employee-grade-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tEmployee Grade\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-green text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/employee-department-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tEmployee Department\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-dark text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/shift-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tShift\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-blue text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/pay-head-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tPay Type \r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-red text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/leave-head-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tLeave Type \r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-green text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/employee-tracking-mapping-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tEmployee Tracker Mapping\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>        \t\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-blue text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/working-days-alert-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tWorking Days Alert\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-dark text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/role-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tJob Profile\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>        \t\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-green text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/backoffice-detail-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tJob Posting\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-red text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/skills-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tSkills\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        </ul>\r\n    <div class=\"boder-btm-dark\">\r\n\t\t  <h1 class=\"panel-title\">Others</h1>\r\n\t\t</div>\r\n    <ul class=\"list-unstyled lookup-list\">\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-blue text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/country-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tCountry\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-red text-center p-0\">\r\n                <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/states-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tState\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-green text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/city-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tCity\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-dark text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/nationality-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tNationality\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-blue text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/email-template-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tEmail Template\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-red text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/sms-template-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tSMS Template \r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-green text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/employee-tracking-mapping-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tImport Export Data\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>        \t\r\n        \t        \t\r\n        \t\r\n        </ul>\r\n</div>"

/***/ }),

/***/ 462:
/***/ (function(module, exports) {

module.exports = "<div id=\"main-content\" >\r\n<div class=\"row m-t-10\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading text-right\">\r\n\t\t\t\t\t\t\t\r\n                                       <div class=\"btn-group text-left\">\r\n                                        <button class=\"btn btn-success dropdown-toggle\" data-toggle=\"dropdown\">Export <i class=\"fa fa-angle-down\"></i>\r\n                                        </button>\r\n                                        <ul class=\"dropdown-menu pull-right\">\r\n                                            <li><a href=\"#\">Print</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\">Export to PDF</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\">Export to XLS</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\">Export to CSV</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\">Export to DOC</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                    <button type=\"button\" class=\"btn btn-sm btn-icon btn-rounded btn-default\"><i class=\"fa fa-question\"></i>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\r\n                        </div>\r\n                        <div class=\"panel-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12 col-sm-12 col-xs-12 table-responsive\">\r\n                                    <table class=\"table table-bordered table-striped table-hover\">\r\n                                        <thead class=\"no-bd\">\r\n                                            <tr>                                               \r\n                                                <th><strong>Holiday Date</strong></th>\r\n                                                <th><strong>Holiday Discription</strong></th>\r\n                                                <th><strong>Action</strong></th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody class=\"no-bd-y\">\r\n                                            <tr>\r\n                                                <td>31/12/2016</td>\r\n                                                <td>Adjustment 1-January-2017 New Year</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>07/01/2017</td>\r\n                                                <td>1st Saturday Off(January)</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>14/01/2017</td>\r\n                                                <td>Kite Festival</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>21/01/2017</td>\r\n                                                <td>3rd Saturday Off(January)</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>26/01/2017</td>\r\n                                                <td>Republic Day</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>04/02/2017</td>\r\n                                                <td>1st Saturday off (February)</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>18/02/2017</td>\r\n                                                <td>3rd Saturday off (February)</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>31/12/2016</td>\r\n                                                <td>Adjustment 1-January-2017 New Year</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>07/01/2017</td>\r\n                                                <td>1st Saturday Off(January)</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>14/01/2017</td>\r\n                                                <td>Kite Festival</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>21/01/2017</td>\r\n                                                <td>3rd Saturday Off(January)</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>26/01/2017</td>\r\n                                                <td>Republic Day</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>04/02/2017</td>\r\n                                                <td>1st Saturday off (February)</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>18/02/2017</td>\r\n                                                <td>3rd Saturday off (February)</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            \r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n            </div>\r\n</div>\r\n   \r\n    \r\n   "

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BranchComponent = (function () {
    function BranchComponent() {
    }
    BranchComponent.prototype.ngOnInit = function () {
    };
    return BranchComponent;
}());
BranchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'app-branch',
        template: __webpack_require__(499)
    }),
    __metadata("design:paramtypes", [])
], BranchComponent);



/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(171);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = (function () {
    function FormComponent() {
        this.payLoad = '';
        this.cols = [
            { key: 'lastName', text: 'Last name', required: true, order: 2, 'controlType': 'textbox' },
            { key: 'firstName', text: 'First name', required: true, order: 1, 'controlType': 'textbox' },
            { key: 'emailAddress', text: 'Email', required: false, type: 'email', order: 1, 'controlType': 'textbox' },
            { key: 'country', text: 'Country',
                'options': [
                    { key: 'usa', value: 'USA' },
                    { key: 'germany', value: 'Germany' },
                    { key: 'canada', value: 'Canada' },
                    { key: 'australia', value: 'Australia' }
                ],
                order: 1, 'controlType': 'dropdown' }
        ];
        this.cols.sort(function (a, b) { return a.order - b.order; });
    }
    FormComponent.prototype.ngOnInit = function () {
        this.form = this.toGroup();
    };
    FormComponent.prototype.onSubmit = function () {
        this.payLoad = JSON.stringify(this.form.value);
    };
    FormComponent.prototype.toGroup = function () {
        var group = {};
        this.cols.forEach(function (question) {
            if (question.required) {
                group[question.key] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
            }
            else {
                group[question.key] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('');
            }
        });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormGroup */](group);
    };
    return FormComponent;
}());
FormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'app-form',
        template: __webpack_require__(500),
    }),
    __metadata("design:paramtypes", [])
], FormComponent);



/***/ }),

/***/ 499:
/***/ (function(module, exports) {

module.exports = "<div id=\"main-content\" >\r\n    <div class=\"row m-t-10\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading text-right\">\r\n            <button type=\"button\" class=\"btn btn-sm btn-icon btn-rounded btn-default\"><i class=\"fa fa-question\"></i> </button>\r\n          </div>\r\n          <div class=\"panel-body\">\r\n           <div class=\"row\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12 text-right\">\r\n                <button [routerLink]=\"['/lookup/branch/form']\" class=\"btn btn-primary m-b-10\" >Add Branch</button>\r\n              </div>\r\n            </div>\r\n            \r\n            \r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table table-bordered table-striped table-hover\">\r\n                    <thead class=\"no-bd\">\r\n                      <tr>\r\n                        \r\n                        <th><strong>Location</strong> </th>\r\n                        <th width=\"30%\"><strong>Address</strong> </th>\r\n                        <th><strong>City</strong> </th>\r\n                        <th><strong>State</strong></th>\r\n                        <th><strong>Is HeadOffice</strong></th>\r\n                        <th><strong>Action</strong></th>                        \r\n                      </tr>\r\n                    </thead>\r\n                    <tbody class=\"no-bd-y\">\r\n                      <tr>                                                \r\n                        <td>Kailashnagar</td>\r\n                        <td>302/B, Indo World Commecial Complex, Opp.Narmada Complex, Nr. Kadiwala School, Nr. Center Point, Ring Road, Majura Gate, SURAT - 395002 (GUJARAT) INDIA. Telephone : 0261-4002247 </td>\r\n                        <td>Surat </td>\r\n                        <td>Gujarat</td>\r\n                        <td><button type=\"button\" class=\"btn btn-sm btn-success\" title=\"Check\"><i class=\"fa fa-check\"></i></button></td>                        \r\n                        <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>  <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>                       \r\n                      </tr>\r\n                      <tr>                                                \r\n                        <td>Kailashnagar</td>\r\n                        <td>A 01/02 Milstone Habitat, Kailash Nagar, Sagrampura, SURAT - 395002 (GUJARAT) INDIA. Telephone : 0261-4002247 </td>\r\n                        <td>Surat </td>\r\n                        <td>Gujarat</td>\r\n                        <td><button type=\"button\" class=\"btn btn-sm btn-success\" title=\"Check\"><i class=\"fa fa-check\"></i></button></td>                        \r\n                        <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>  <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>                       \r\n                      </tr>\r\n                      \r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ 500:
/***/ (function(module, exports) {

module.exports = "<div id=\"main-content\" >\r\n    <div class=\"row m-t-10\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading text-right\">\r\n            <button type=\"button\" class=\"btn btn-sm btn-icon btn-rounded btn-default\"><i class=\"fa fa-question\"></i> </button>\r\n          </div>\r\n          <div class=\"panel-body\">\r\n           <div class=\"row\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">                                 \r\n                <div class=\"form-horizontal\" >\r\n                  <div class=\"boder-btm\">\r\n                    <h3 class=\"panel-title\">Branch Info</h3>\r\n                  </div>\r\n                  <div class=\"m-b-30\">\r\n                    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\r\n                        <div *ngFor=\"let question of cols; let i = index\">\r\n                            <div class=\"form-group\">\r\n                              <label class=\"col-sm-2 control-label\">{{question.text}} <span *ngIf=\"question.required\" class=\"asterisk\">*</span></label>\r\n                              <div [ngSwitch]=\"question.controlType\"  class=\"col-sm-4\">\r\n                                <div *ngSwitchCase=\"'textbox'\"><input class=\"form-control\" type=\"{{question.type}}\" id=\"{{question.key}}\" [formControlName]=\"question.key\"></div>\r\n                                  <div *ngSwitchCase=\"'dropdown'\" >\r\n                                    <select [formControlName]=\"question.key\" class=\"form-control\">\r\n                                        <option *ngFor=\"let o of question.options\" [value]=\"o.key\">{{o.value}}</option>\r\n                                    </select>\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"errorMessage\" *ngIf=\"!form.controls[question.key].valid\">*required</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-row\">\r\n                            <button type=\"submit\" [disabled]=\"!form.valid\">Save</button>\r\n                        </div>\r\n                    </form>\r\n                    <div class=\"form-row\">\r\n                      <div *ngIf=\"payLoad\"><strong>The form contains the following values</strong></div>\r\n                      <div>\r\n                          {{payLoad}}\r\n                      </div>\r\n                  </div>\r\n                    <!--<div class=\"form-group\">\r\n                      <label class=\"col-sm-2 control-label\">Branch Name <span class=\"asterisk\">*</span></label>\r\n                      <div class=\"col-sm-4\">\r\n                        <input type=\"text\" class=\"form-control\" >\r\n                      </div>\r\n                      <label class=\"col-sm-2 control-label\">Branch Address </label>\r\n                      <div class=\"col-sm-4\">\r\n                        <input type=\"text\" class=\"form-control\" >\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label class=\"col-sm-2 control-label\">Branch City </label>\r\n                      <div class=\"col-sm-4\">\r\n                        <input type=\"text\" class=\"form-control\" >\r\n                      </div>\r\n                      <label class=\"col-sm-2 control-label\">Branch State </label>\r\n                      <div class=\"col-sm-4\">\r\n                        <input type=\"text\" class=\"form-control\" >\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"col-sm-10 col-sm-offset-2\">\r\n                        <button class=\"btn btn-primary m-b-10\" onclick=\"javascript:$('#form1').parsley('validate');\">Update</button>\r\n                        <button type=\"reset\" class=\"btn btn-default m-b-10\">Cancel</button>\r\n                      </div>\r\n                    </div>-->\r\n                  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t      </div>\r\n           </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Dynamic Form Start -->\r\n    <!--<div>\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\r\n        <div *ngFor=\"let question of cols\" class=\"form-group\">\r\n            <label class=\"col-sm-2 control-label\">{{question.text}} <span *ngIf=\"question.required\" class=\"asterisk\">*</span></label>\r\n            <div [ngSwitch]=\"question.controlType\"  class=\"col-sm-4\">\r\n                <div *ngSwitchCase=\"'textbox'\"><input class=\"form-control\" type=\"{{question.type}}\" id=\"{{question.key}}\" [formControlName]=\"question.key\"></div>\r\n                <div *ngSwitchCase=\"'dropdown'\" >\r\n                    <select [formControlName]=\"question.key\" class=\"form-control\">\r\n                        <option *ngFor=\"let o of question.options\" [value]=\"o.key\">{{o.value}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"errorMessage\" *ngIf=\"!form.controls[question.key].valid\">*required</div>\r\n        </div>\r\n\r\n        <div class=\"form-row\">\r\n            <button type=\"submit\" [disabled]=\"!form.valid\">Save</button>\r\n        </div>\r\n    </form>\r\n  </div>-->\r\n  <!-- Dynamic Form End -->\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n  "

/***/ })

});
//# sourceMappingURL=25.chunk.js.map