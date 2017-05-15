webpackJsonp([0],{

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_routing_module__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_layout_component__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__(437);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__layout_routing_module__["a" /* LayoutRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__components_layout_component__["a" /* LayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["c" /* SidebarselfserviceComponent */]
        ]
    })
], LayoutModule);



/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_shared_pipes_module__ = __webpack_require__(605);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(596);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules__ = __webpack_require__(600);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__modules__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__modules__["b"]; });





/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_common_common_data_service__ = __webpack_require__(175);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LayoutComponent = (function () {
    function LayoutComponent(router, commondataservice) {
        this.router = router;
        this.commondataservice = commondataservice;
        this.showSidebar = true;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url === '/') {
            this.router.navigate(['/dashboard']);
        }
        if (this.router.url.includes('/selfservice')) {
            this.showSidebar = false;
        }
        this.commondataservice.showSidebarlinkevnt.subscribe(function (obj) {
            _this.showSidebar = obj.showSelfServiceSidebar;
        });
    };
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__(624),
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__core_services_common_common_data_service__["a" /* CommonDataService */]])
], LayoutComponent);



/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_component__ = __webpack_require__(482);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_layout_component__["a" /* LayoutComponent */],
        children: [
            { path: 'dashboard', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(29).then((function (require) { resolve(__webpack_require__(554)['DashboardModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },
            { path: 'employee', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(8).then((function (require) { resolve(__webpack_require__(556)['EmployeeModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },
            { path: 'selfservice', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(20).then((function (require) { resolve(__webpack_require__(581)['SelfserviceModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },
            { path: 'appraisal', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(18).then((function (require) { resolve(__webpack_require__(532)['AppraisalModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },
            { path: 'lookup', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(9).then((function (require) { resolve(__webpack_require__(564)['LookupModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },
            { path: 'crm', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(19).then((function (require) { resolve(__webpack_require__(552)['CrmModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },
            { path: 'recruitment', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(17).then((function (require) { resolve(__webpack_require__(568)['RecruitmentModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },
            { path: 'leaveandattendance', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(16).then((function (require) { resolve(__webpack_require__(562)['LeaveandattendanceModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },
            { path: 'payroll', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(15).then((function (require) { resolve(__webpack_require__(566)['PayrollModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },
            { path: 'formbuilder', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(14).then((function (require) { resolve(__webpack_require__(450)['FormbuilderModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },
            { path: 'listing', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(22).then((function (require) { resolve(__webpack_require__(457)['ListingModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },
            { path: 'general-listing', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(21).then((function (require) { resolve(__webpack_require__(455)['GeneralListingModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },
            { path: 'general-formbuilder', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(13).then((function (require) { resolve(__webpack_require__(453)['GeneralFormbuilderModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },
            { path: 'templates', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(24).then((function (require) { resolve(__webpack_require__(587)['TemplatesModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },
            { path: 'automation', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(37).then((function (require) { resolve(__webpack_require__(534)['AutomationModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },
        ]
    }
];
var LayoutRoutingModule = (function () {
    function LayoutRoutingModule() {
    }
    return LayoutRoutingModule;
}());
LayoutRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], LayoutRoutingModule);



/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_common_common_data_service__ = __webpack_require__(175);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(router, commondataservice) {
        this.router = router;
        this.commondataservice = commondataservice;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (this.router.url.includes('/selfservice')) {
            this.showSelfServiceLink = false;
            this.mainHeader = 'Self Service';
        }
        if (!this.router.url.includes('/selfservice')) {
            this.showSelfServiceLink = true;
            this.mainHeader = 'Control Panel';
        }
    };
    HeaderComponent.prototype.showEmployeeLinkV = function (con) {
        this.showSelfServiceLink = con;
        this.commondataservice.showSidebarlinkevnt.emit({ showSelfServiceSidebar: con });
        if (con == true) {
            this.mainHeader = 'Control Panel';
        }
        else {
            this.mainHeader = 'Self Service';
        }
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('push-right');
    };
    HeaderComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(674),
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__core_services_common_common_data_service__["a" /* CommonDataService */]])
], HeaderComponent);



/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_component__ = __webpack_require__(595);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__header_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__(597);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validator_basicValidators__ = __webpack_require__(599);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__validator_basicValidators__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebarselfservice_sidebarselfservice_component__ = __webpack_require__(598);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__sidebarselfservice_sidebarselfservice_component__["a"]; });






/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidebarComponent = (function () {
    function SidebarComponent() {
        this.isActive = false;
        this.showMenu = '';
    }
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(675),
    })
], SidebarComponent);



/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarselfserviceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarselfserviceComponent = (function () {
    function SidebarselfserviceComponent() {
        this.isActive = false;
        this.showMenu = '';
    }
    SidebarselfserviceComponent.prototype.ngOnInit = function () {
    };
    SidebarselfserviceComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarselfserviceComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    return SidebarselfserviceComponent;
}());
SidebarselfserviceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebarselfservice',
        template: __webpack_require__(676)
    }),
    __metadata("design:paramtypes", [])
], SidebarselfserviceComponent);



/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicValidators; });
/* unused harmony export ValidMobileNumberValidator */
/* unused harmony export OnlyNumberValidator */
/* unused harmony export OnlyNumberOrDecimalValidator */
/* unused harmony export ValidUrlValidator */
/* unused harmony export ValidPercValidator */
/* unused harmony export matchingPasswords */
var BasicValidators = (function () {
    function BasicValidators() {
    }
    BasicValidators.email = function (control) {
        var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var valid = regEx.test(control.value);
        return valid ? null : { email: true };
    };
    return BasicValidators;
}());

var ValidMobileNumberValidator = (function () {
    function ValidMobileNumberValidator() {
    }
    ValidMobileNumberValidator.onlyvalidmobilenumber = function (control) {
        var regex = /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/;
        var valid = regex.test(control.value);
        return valid ? null : { onlyvalidmobilenumber: true };
    };
    return ValidMobileNumberValidator;
}());

var OnlyNumberValidator = (function () {
    function OnlyNumberValidator() {
    }
    OnlyNumberValidator.insertonlynumber = function (control) {
        var regex = /^[0-9]*(?:\.\d{1,2})?$/;
        var valid = regex.test(control.value);
        return valid ? null : { insertonlynumber: true };
    };
    return OnlyNumberValidator;
}());

var OnlyNumberOrDecimalValidator = (function () {
    function OnlyNumberOrDecimalValidator() {
    }
    OnlyNumberOrDecimalValidator.insertonlynumberordecimal = function (control) {
        var regex = /^[0-9]+([,.][0-9]+)?$/g;
        var valid = regex.test(control.value);
        return valid ? null : { insertonlynumberordecimal: true };
    };
    return OnlyNumberOrDecimalValidator;
}());

var ValidUrlValidator = (function () {
    function ValidUrlValidator() {
    }
    ValidUrlValidator.insertonlyvalidurl = function (control) {
        if (control.value) {
            var urltype = void 0;
            if (control.value.startsWith('http://')) {
                urltype = 'http://';
            }
            if (control.value.startsWith('https://')) {
                urltype = 'https://';
            }
            if (urltype) {
                var str = control.value.split(urltype);
                var regex = /(http(s)?:\\)?([\w-]+\.)+[\w-]+[.com|.in|.org]+(\[\?%&=]*)?/;
                var valid = regex.test(str[1]);
                if (valid == true) {
                    if (str[1]) {
                        var strurl = str[1].split('.');
                        var resstrurl = void 0;
                        if (str[1].startsWith('www.')) {
                            resstrurl = strurl[2];
                        }
                        else {
                            resstrurl = strurl[1];
                        }
                        if (resstrurl) {
                            var strpage = resstrurl.split('/');
                            if (strpage[0].length == 2 || strpage[0].length == 3) {
                                return null;
                            }
                            else {
                                return { insertonlyvalidurl: true };
                            }
                        }
                        else {
                            return { insertonlyvalidurl: true };
                        }
                    }
                    else {
                        return { insertonlyvalidurl: true };
                    }
                }
                else {
                    return { insertonlyvalidurl: true };
                }
            }
            else {
                return { insertonlyvalidurl: true };
            }
        }
        else {
            return null;
        }
    };
    return ValidUrlValidator;
}());

var ValidPercValidator = (function () {
    function ValidPercValidator() {
    }
    ValidPercValidator.insertonlyvalidperc = function (control) {
        if (control.value) {
            if (control.value <= 100) {
                return null;
            }
            else {
                return { insertonlyvalidperc: true };
            }
        }
        else {
            return null;
        }
    };
    return ValidPercValidator;
}());

function equalValidator(_a) {
    var value = _a.value;
    var _b = Object.keys(value || {}), first = _b[0], rest = _b.slice(1);
    var valid = rest.every(function (v) { return value[v] === value[first]; });
    return valid ? null : { equalValidator: true };
}
function matchingPasswords(passwordKey, confirmPasswordKey) {
    return function (group) {
        var password = group.controls[passwordKey];
        var confirmPassword = group.controls[confirmPasswordKey];
        if (password.value !== confirmPassword.value) {
            return {
                mismatchedPasswords: true
            };
        }
    };
}


/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_stat_module__ = __webpack_require__(604);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__stat_stat_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_header_page_header_module__ = __webpack_require__(602);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__page_header_page_header_module__["a"]; });




/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageHeaderComponent = (function () {
    function PageHeaderComponent() {
    }
    return PageHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PageHeaderComponent.prototype, "heading", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PageHeaderComponent.prototype, "icon", void 0);
PageHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-header',
        template: __webpack_require__(677),
    })
], PageHeaderComponent);



/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_header_component__ = __webpack_require__(601);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PageHeaderModule = (function () {
    function PageHeaderModule() {
    }
    return PageHeaderModule;
}());
PageHeaderModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__page_header_component__["a" /* PageHeaderComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__page_header_component__["a" /* PageHeaderComponent */]]
    })
], PageHeaderModule);



/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatComponent = (function () {
    function StatComponent() {
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    StatComponent.prototype.ngOnInit = function () { };
    return StatComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StatComponent.prototype, "bgClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StatComponent.prototype, "icon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], StatComponent.prototype, "count", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StatComponent.prototype, "label", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], StatComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], StatComponent.prototype, "event", void 0);
StatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-stat',
        template: __webpack_require__(678),
    }),
    __metadata("design:paramtypes", [])
], StatComponent);



/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stat_component__ = __webpack_require__(603);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StatModule = (function () {
    function StatModule() {
    }
    return StatModule;
}());
StatModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__stat_component__["a" /* StatComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__stat_component__["a" /* StatComponent */]]
    })
], StatModule);



/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(52);
/* unused harmony export SharedPipesModule */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedPipesModule = (function () {
    function SharedPipesModule() {
    }
    return SharedPipesModule;
}());
SharedPipesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: []
    })
], SharedPipesModule);



/***/ }),

/***/ 624:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div id=\"wrapper\">\r\n    <!--<app-sidebar></app-sidebar>-->\r\n    <app-sidebar *ngIf=\"showSidebar\"></app-sidebar>\r\n    <app-sidebarselfservice *ngIf=\"!showSidebar\"></app-sidebarselfservice>\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#sidebar\"> <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button>\r\n            <a id=\"menu-medium\" class=\"sidebar-toggle tooltips\"> <i class=\"fa fa-outdent\"></i> </a> <a class=\"navbar-brand\" href=\"index.html\"> <img src=\"developer_assets/img/logo.png\" alt=\"logo\" width=\"99\" height=\"31\"> </a>\r\n        </div>\r\n        <div class=\"app-label\">{{mainHeader}}</div>\r\n        <div class=\"navbar-center\">Employee</div>\r\n        <div class=\"navbar-collapse collapse\">\r\n            <!-- BEGIN TOP NAVIGATION MENU -->\r\n            <ul class=\"nav navbar-nav pull-right header-menu\">\r\n                <!-- BEGIN NOTIFICATION DROPDOWN -->\r\n                <li class=\"dropdown\" id=\"notifications-header\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\"> <i class=\"glyph-icon flaticon-notifications\"></i> <span class=\"badge badge-danger badge-header\">6</span> </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li class=\"dropdown-header clearfix\">\r\n                            <p class=\"pull-left\">Notifications</p>\r\n                        </li>\r\n                        <li>\r\n                            <ul class=\"dropdown-menu-list withScroll\" data-height=\"220\">\r\n                                <li> <a href=\"#\"> <i class=\"fa fa-star p-r-10 f-18 c-orange\"></i> Steve have rated your photo <span class=\"dropdown-time\">Just now</span> </a> </li>\r\n                                <li> <a href=\"#\"> <i class=\"fa fa-heart p-r-10 f-18 c-red\"></i> John added you to his favs <span class=\"dropdown-time\">15 mins</span> </a> </li>\r\n                                <li> <a href=\"#\"> <i class=\"fa fa-file-text p-r-10 f-18\"></i> New document available <span class=\"dropdown-time\">22 mins</span> </a> </li>\r\n                                <li> <a href=\"#\"> <i class=\"fa fa-picture-o p-r-10 f-18 c-blue\"></i> New picture added <span class=\"dropdown-time\">40 mins</span> </a> </li>\r\n                                <li> <a href=\"#\"> <i class=\"fa fa-bell p-r-10 f-18 c-orange\"></i> Meeting in 1 hour <span class=\"dropdown-time\">1 hour</span> </a> </li>\r\n                                <li> <a href=\"#\"> <i class=\"fa fa-bell p-r-10 f-18\"></i> Server 5 overloaded <span class=\"dropdown-time\">2 hours</span> </a> </li>\r\n                                <li> <a href=\"#\"> <i class=\"fa fa-comment p-r-10 f-18 c-gray\"></i> Bill comment your post <span class=\"dropdown-time\">3 hours</span> </a> </li>\r\n                                <li> <a href=\"#\"> <i class=\"fa fa-picture-o p-r-10 f-18 c-blue\"></i> New picture added <span class=\"dropdown-time\">2 days</span> </a> </li>\r\n                            </ul>\r\n                        </li>\r\n                        <li class=\"dropdown-footer clearfix\"> <a href=\"#\" class=\"pull-left\">See all notifications</a> <a href=\"#\" class=\"pull-right\"> <i class=\"fa fa-cog\"></i> </a> </li>\r\n                    </ul>\r\n                </li>\r\n                <!-- END NOTIFICATION DROPDOWN -->\r\n                <li *ngIf=\"!showSelfServiceLink\"> <a [routerLink]=\"['/dashboard']\" (click)=\"showEmployeeLinkV(true)\"> <i class=\"glyph-icon flaticon-settings21\"></i>  </a> </li>\r\n                <!-- BEGIN USER DROPDOWN -->\r\n                <li class=\"dropdown\" id=\"user-header\">\r\n                    <a href=\"#\" class=\"dropdown-toggle c-white\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\"> <img src=\"developer_assets/img/avatars/avatar2.png\" alt=\"user avatar\" width=\"30\" class=\"p-r-5\"> <span class=\"username\">Bob Nilson</span> <i class=\"fa fa-angle-down p-r-10\"></i> </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li> <a href=\"extra_profile.html\"> <i class=\"glyph-icon flaticon-account\"></i> My Profile </a> </li>\r\n                        <li> <a href=\"calendar.html\"> <i class=\"glyph-icon flaticon-calendar\"></i> My Calendar </a> </li>\r\n                        <li> <a href=\"calendar.html\"> <i class=\"glyph-icon flaticon-settings21\"></i> Account Settings </a> </li>\r\n                        <li *ngIf=\"showSelfServiceLink\" > <a [routerLink]=\"['/selfservice']\" (click)=\"showEmployeeLinkV(false)\"> <i class=\"glyph-icon flaticon-settings21\"></i> SelfService </a> </li>\r\n                        <li *ngIf=\"!showSelfServiceLink\"> <a [routerLink]=\"['/dashboard']\" (click)=\"showEmployeeLinkV(true)\"> <i class=\"glyph-icon flaticon-settings21\"></i> Employee </a> </li>\r\n                        <li class=\"dropdown-footer clearfix\"> <a href=\"javascript:;\" class=\"toggle_fullscreen\" title=\"Fullscreen\"> <i class=\"glyph-icon flaticon-fullscreen3\"></i> </a> <a href=\"lockscreen.html\" title=\"Lock Screen\"> <i class=\"glyph-icon flaticon-padlock23\"></i> </a> <a href=\"login.html\" title=\"Logout\"> <i class=\"fa fa-power-off\"></i> </a> </li>\r\n                    </ul>\r\n                </li>\r\n                <!-- END USER DROPDOWN -->\r\n\r\n            </ul>\r\n            <!-- END TOP NAVIGATION MENU -->\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = "<nav id=\"sidebar\">\r\n    <div id=\"main-menu\">\r\n        <ul class=\"sidebar-nav\">\r\n            <li> <a routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-dashboard\"></i><span class=\"sidebar-text\">Dashboard</span></a> </li>\r\n            <li [routerLinkActive]=\"['router-link-active']\">\r\n                <a (click)=\"addExpandClass('employee')\">\r\n                    <i class=\"glyph-icon flaticon-group44\"></i><span class=\"sidebar-text\">Employee</span>\r\n                    <span class=\"fa arrow\"></span>\r\n               </a>\r\n                <ul class=\"submenu collapse\" [class.in]=\"showMenu === 'employee'\">\r\n                    <li>\r\n                        <a [routerLink]=\"['/employee']\"><span>List View</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/employee/leave']\"><span>Leave</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/employee/salary']\"><span>Salary</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/employee/report']\"><span>Report</span></a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li [routerLinkActive]=\"['router-link-active']\">\r\n                <a (click)=\"addExpandClass('templates')\">\r\n                    <i class=\"glyph-icon flaticon-forms\"></i><span class=\"sidebar-text\">Templates</span><span class=\"fa arrow\"></span>\r\n                </a>\r\n                <ul class=\"submenu collapse\" [class.in]=\"showMenu === 'templates'\">\r\n                    <li>\r\n                        <a [routerLink]=\"['/templates/email-templates']\"><span>Email Template</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/templates/record-templates']\"><span>Record Template</span></a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li [routerLinkActive]=\"['router-link-active']\">\r\n                <a (click)=\"addExpandClass('automation')\">\r\n                    <i class=\"glyph-icon flaticon-forms\"></i><span class=\"sidebar-text\">Automation</span><span class=\"fa arrow\"></span>\r\n                </a>\r\n                <ul class=\"submenu collapse\" [class.in]=\"showMenu === 'automation'\">\r\n                    <li>\r\n                        <a [routerLink]=\"['/automation/workflows']\"><span>Workflows</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/automation/tasks']\"><span>Tasks</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/automation/checklists']\"><span>Checklists</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/automation/field-updates']\"><span>Field Updates</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/automation/webhooks']\"><span>Webhooks</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/automation/custom-functions']\"><span>Custom Functions </span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/automation/scheduler']\"><span> Scheduler </span></a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li [routerLinkActive]=\"['router-link-active']\">\r\n                <a (click)=\"addExpandClass('appraisal')\">\r\n                    <i class=\"glyph-icon flaticon-forms\"></i><span class=\"sidebar-text\">Appraisal</span><span class=\"fa arrow\"></span>\r\n                </a>\r\n                <ul class=\"submenu collapse\" [class.in]=\"showMenu === 'appraisal'\">\r\n                    <li>\r\n                        <a [routerLink]=\"['/appraisal']\"><span>List View</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/appraisal/setting']\"><span>Setting</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/appraisal/kpi']\"><span>KPI</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/appraisal/review']\"><span>Review</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/appraisal/report']\"><span>Report</span></a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li [routerLinkActive]=\"['router-link-active']\">\r\n                <a (click)=\"addExpandClass('recruitment')\"><i class=\"glyph-icon flaticon-hands-shake\"></i><span class=\"sidebar-text\">Recruitment</span><span class=\"fa arrow\"></span></a>\r\n                <ul class=\"submenu collapse\" [class.in]=\"showMenu === 'recruitment'\">\r\n                    <li>\r\n                        <a [routerLink]=\"['/recruitment']\"><span>List View</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/recruitment/applicants']\"><span>Applicants</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/recruitment/meetingcalendar']\"><span>Meeting Calendar</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/recruitment/interviewlists']\"><span>Interview List</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/recruitment/reports']\"><span>Report</span></a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li [routerLinkActive]=\"['router-link-active']\">\r\n                <a (click)=\"addExpandClass('leave')\"><i class=\"glyph-icon flaticon-email\"></i><span class=\"sidebar-text\">Leave & Attendance</span><span class=\"fa arrow\"></span></a>\r\n                <ul class=\"submenu collapse\" [class.in]=\"showMenu === 'leave'\">\r\n                    <li>\r\n                        <a [routerLink]=\"['/leaveandattendance']\"><span>Leave List View</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/leaveandattendance/leavestructure']\"><span>Leave Structure</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/leaveandattendance/holidays']\"><span>Holiday</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/leaveandattendance/attendance']\"><span>Attendance</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/leaveandattendance/misspunch']\"><span>MissPunch</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/leaveandattendance/reports']\"><span>Report</span></a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li [routerLinkActive]=\"['router-link-active']\">\r\n                <a (click)=\"addExpandClass('payroll')\"><i class=\"glyph-icon flaticon-pages\"></i><span class=\"sidebar-text\">Payroll</span><span class=\"fa arrow\"></span></a>\r\n                <ul class=\"submenu collapse\" [class.in]=\"showMenu === 'payroll'\">\r\n                    <li>\r\n                        <a [routerLink]=\"['/payroll']\"><span>List View</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/payroll/alert']\"><span>Alert</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/payroll/setting']\"><span>Setting</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/payroll/adjustment']\"><span>Adjustment</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/payroll/claim']\"><span>Claim & Advance Request</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/payroll/reports']\"><span>Report</span></a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li> <a [routerLink]=\"['/lookup']\" [routerLinkActive]=\"['router-link-active']\"><i class=\"glyph-icon flaticon-world\"></i><span class=\"sidebar-text\">Lookups</span></a> </li>\r\n        </ul>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = "<!--<p>\n  sidebarselfservice works!\n</p>-->\n\n<nav id=\"sidebar\">\r\n    <div id=\"main-menu\">\r\n        <ul class=\"sidebar-nav\">\r\n            <li> <a routerLink=\"/selfservice\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-user\"></i><span class=\"sidebar-text\">SelfService</span></a> </li>\r\n            <li> <a routerLink=\"/selfservice/dashboard\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-dashboard\"></i><span class=\"sidebar-text\">Dashboard</span></a> </li>\r\n            <!--<li [routerLinkActive]=\"['router-link-active']\">\r\n                <a (click)=\"addExpandClass('employee')\">\r\n                    <i class=\"glyph-icon flaticon-group44\"></i><span class=\"sidebar-text\">Employee</span>\r\n                    <span class=\"fa arrow\"></span>\r\n                </a>\r\n                <ul class=\"submenu collapse\" [class.in]=\"showMenu === 'employee'\">\r\n                    <li>\r\n                        <a [routerLink]=\"['/employee']\"><span>List View</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/employee/leave']\"><span>Leave</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/employee/salary']\"><span>Salary</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/employee/report']\"><span>Report</span></a>\r\n                    </li>\r\n                </ul>\r\n            </li>-->\r\n            <li> <a routerLink=\"/selfservice/myprofile\" [routerLinkActive]=\"['router-link-active']\"><i class=\"glyph-icon flaticon-account\"></i><span class=\"sidebar-text\">My Profile </span></a> </li>\r\n            <li> <a routerLink=\"/selfservice/holidaysdetails\" [routerLinkActive]=\"['router-link-active']\"><i class=\"glyph-icon flaticon-calendar5\"></i><span class=\"sidebar-text\">Holiday Details</span></a> </li>\r\n            <li> <a routerLink=\"/selfservice/mysalary\" [routerLinkActive]=\"['router-link-active']\"><i class=\"glyph-icon flaticon-doc2\"></i><span class=\"sidebar-text\">My Salary</span></a> </li>\r\n            <li> <a routerLink=\"/selfservice/myleaves\" [routerLinkActive]=\"['router-link-active']\"><i class=\"glyph-icon flaticon-email\"></i><span class=\"sidebar-text\">My Leaves</span></a> </li>\r\n            <li> <a routerLink=\"/selfservice/myadvancesclaim\" [routerLinkActive]=\"['router-link-active']\"><i class=\"glyph-icon flaticon-forms\"></i><span class=\"sidebar-text\">My Advances/Claim</span></a> </li>\r\n            <li> <a routerLink=\"/selfservice/myattendance\" [routerLinkActive]=\"['router-link-active']\"><i class=\"glyph-icon flaticon-pages\"></i><span class=\"sidebar-text\">My Attendance</span></a> </li>\r\n            <li> <a [routerLink]=\"['/selfservice/changepassword']\" [routerLinkActive]=\"['router-link-active']\"><i class=\"glyph-icon flaticon-world\"></i><span class=\"sidebar-text\">Change Password</span></a> </li>\r\n        </ul>\r\n    </div>\r\n</nav>\n"

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xl-12\">\r\n        <h2 class=\"page-header\">\r\n            {{heading}}\r\n        </h2>\r\n        <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\">\r\n                <i class=\"fa fa-dashboard\"></i> <a href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\"><i class=\"fa {{icon}}\"></i> {{heading}}</li>\r\n        </ol>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-inverse {{bgClass}}\">\r\n    <div class=\"card-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col col-xs-3\">\r\n                <i class=\"fa {{icon}} fa-5x\"></i>\r\n            </div>\r\n            <div class=\"col col-xs-9 text-right\">\r\n                <div class=\"d-block huge\">{{count}}</div>\r\n                <div class=\"d-block\">{{label}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n        <span class=\"float-left\">View Details {{data}}</span>\r\n        <a href=\"javascript:void(0)\" class=\"float-right card-inverse\">\r\n            <span ><i class=\"fa fa-arrow-circle-right\"></i></span>\r\n        </a>\r\n    </div>\r\n</div>\r\n"

/***/ })

});
//# sourceMappingURL=0.chunk.js.map