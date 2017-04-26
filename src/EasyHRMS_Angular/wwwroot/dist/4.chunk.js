webpackJsonp([4],{

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_routing_module__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_component__ = __webpack_require__(410);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__login_routing_module__["a" /* LoginRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__components_login_component__["a" /* LoginComponent */]]
    })
], LoginModule);



/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(505),
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);



/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_component__ = __webpack_require__(410);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_login_component__["a" /* LoginComponent */] }
];
var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    return LoginRoutingModule;
}());
LoginRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], LoginRoutingModule);



/***/ }),

/***/ 505:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"login-block\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 col-md-4 col-sm-offset-3 col-md-offset-4\">\r\n                <div class=\"login-box clearfix animated flipInY\">                    \r\n                    <div class=\"login-logo\">\r\n                        <a href=\"#?login-theme-3\">\r\n                            <img src=\"developer_assets/img/logo-login.png\" alt=\"Easy HRMS\">\r\n                        </a>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"login-form\">\r\n                        <!-- BEGIN ERROR BOX -->\r\n                        <div class=\"alert alert-danger hide\">\r\n                            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button>\r\n                            <h4>Error!</h4>\r\n                            Your Error Message goes here\r\n                        </div>\r\n                        <!-- END ERROR BOX -->\r\n                        <form action=\"#\" method=\"post\">\r\n                            <input type=\"text\" placeholder=\"Username\" class=\"input-field form-control user\" />\r\n                            <input type=\"password\" placeholder=\"Password\" class=\"input-field form-control password\" />\r\n                            <button type=\"submit\" class=\"btn btn-login\">Login</button>\r\n                        </form>\r\n                        <div class=\"login-links\">\r\n                            <a [routerLink]=\"['/forgotpassword']\">Forgot password?</a>\r\n                           \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n            </div>\r\n        </div>\r\n    </div>"

/***/ })

});
//# sourceMappingURL=4.chunk.js.map