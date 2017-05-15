webpackJsonp([5],{

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgotpassword_routing_module__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_forgotpassword_component__ = __webpack_require__(467);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__forgotpassword_routing_module__["a" /* ForgotpasswordRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__components_forgotpassword_component__["a" /* ForgotpasswordComponent */]]
    })
], ForgotpasswordModule);



/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-forgotpassword',
        template: __webpack_require__(612),
    }),
    __metadata("design:paramtypes", [])
], ForgotpasswordComponent);



/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_forgotpassword_component__ = __webpack_require__(467);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], ForgotpasswordRoutingModule);



/***/ }),

/***/ 612:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"login-block\">\n        <div class=\"row\">\n            <div class=\"col-sm-6 col-md-4 col-sm-offset-3 col-md-offset-4\">\n                <div class=\"login-box clearfix animated flipInY\">\n                    \n                    <div class=\"login-logo\">\n                        <a href=\"#\">\n                             <img src=\"developer_assets/img/logo-login.png\" alt=\"Easy HRMS\">\n                        </a>\n                    </div>\n                    <hr />\n                    <div class=\"login-form\">\n                        <!-- BEGIN ERROR BOX -->\n                        <div class=\"alert alert-danger hide\">\n                            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n                            <h4>Error!</h4>\n                            Your Error Message goes here\n                        </div>\n                        <!-- END ERROR BOX -->\n                        <form action=\"#\" method=\"get\">\n                            <p>Enter your email address below and we'll send a special reset password link to your inbox.</p>\n                            <input type=\"email\" placeholder=\"Email\" class=\"input-field\" required/>\n                            <button type=\"submit\" class=\"btn btn-login btn-reset\">Reset password</button>\n                        </form>\n                        <div class=\"login-links\">\n                            <a [routerLink]=\"['/login']\">Already have an account?  <strong>Sign In</strong></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ })

});
//# sourceMappingURL=5.chunk.js.map