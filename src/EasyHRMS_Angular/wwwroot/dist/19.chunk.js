webpackJsonp([19],{

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgotpassword_routing_module__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_forgotpassword_component__ = __webpack_require__(483);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordModule", function() { return ForgotpasswordModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ForgotpasswordModule = (function () {
    function ForgotpasswordModule() {
    }
    return ForgotpasswordModule;
}());
ForgotpasswordModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__forgotpassword_routing_module__["a" /* ForgotpasswordRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__components_forgotpassword_component__["a" /* ForgotpasswordComponent */]]
    })
], ForgotpasswordModule);



/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotpasswordComponent = (function () {
    function ForgotpasswordComponent() {
    }
    ForgotpasswordComponent.prototype.ngOnInit = function () { };
    return ForgotpasswordComponent;
}());
ForgotpasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'app-forgotpassword',
        template: __webpack_require__(496),
    }),
    __metadata("design:paramtypes", [])
], ForgotpasswordComponent);



/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_forgotpassword_component__ = __webpack_require__(483);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_forgotpassword_component__["a" /* ForgotpasswordComponent */] }
];
var ForgotpasswordRoutingModule = (function () {
    function ForgotpasswordRoutingModule() {
    }
    return ForgotpasswordRoutingModule;
}());
ForgotpasswordRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], ForgotpasswordRoutingModule);



/***/ }),

/***/ 496:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"login-block\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 col-md-4 col-sm-offset-3 col-md-offset-4\">\r\n                <div class=\"login-box clearfix animated flipInY\">\r\n                    \r\n                    <div class=\"login-logo\">\r\n                        <a href=\"#\">\r\n                             <img src=\"developer_assets/img/logo-login.png\" alt=\"Easy HRMS\">\r\n                        </a>\r\n                    </div>\r\n                    <hr />\r\n                    <div class=\"login-form\">\r\n                        <!-- BEGIN ERROR BOX -->\r\n                        <div class=\"alert alert-danger hide\">\r\n                            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n                            <h4>Error!</h4>\r\n                            Your Error Message goes here\r\n                        </div>\r\n                        <!-- END ERROR BOX -->\r\n                        <form action=\"#\" method=\"get\">\r\n                            <p>Enter your email address below and we'll send a special reset password link to your inbox.</p>\r\n                            <input type=\"email\" placeholder=\"Email\" class=\"input-field\" required/>\r\n                            <button type=\"submit\" class=\"btn btn-login btn-reset\">Reset password</button>\r\n                        </form>\r\n                        <div class=\"login-links\">\r\n                            <a [routerLink]=\"['/login']\">Already have an account?  <strong>Sign In</strong></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ })

});
//# sourceMappingURL=19.chunk.js.map