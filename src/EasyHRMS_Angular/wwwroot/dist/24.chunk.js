webpackJsonp([24],{

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TemplatesComponent = (function () {
    function TemplatesComponent() {
    }
    TemplatesComponent.prototype.ngOnInit = function () {
    };
    return TemplatesComponent;
}());
TemplatesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-templates',
        template: __webpack_require__(668),
    }),
    __metadata("design:paramtypes", [])
], TemplatesComponent);



/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_templates_component__ = __webpack_require__(522);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatseRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_templates_component__["a" /* TemplatesComponent */],
        children: [
            { path: 'email-templates', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(10).then((function (require) { resolve(__webpack_require__(583)['EmailTemplateModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },
            { path: 'record-templates', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(23).then((function (require) { resolve(__webpack_require__(585)['RecordTemplateModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },
        ]
    },
];
var TemplatseRoutingModule = (function () {
    function TemplatseRoutingModule() {
    }
    return TemplatseRoutingModule;
}());
TemplatseRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], TemplatseRoutingModule);



/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_templates_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_routing_module__ = __webpack_require__(586);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatesModule", function() { return TemplatesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TemplatesModule = (function () {
    function TemplatesModule() {
    }
    return TemplatesModule;
}());
TemplatesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__templates_routing_module__["a" /* TemplatseRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__components_templates_component__["a" /* TemplatesComponent */]]
    })
], TemplatesModule);



/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ })

});
//# sourceMappingURL=24.chunk.js.map