webpackJsonp([20],{

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyprofileComponent = (function () {
    function MyprofileComponent() {
    }
    MyprofileComponent.prototype.ngOnInit = function () {
    };
    return MyprofileComponent;
}());
MyprofileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-myprofile',
        template: __webpack_require__(609),
    }),
    __metadata("design:paramtypes", [])
], MyprofileComponent);



/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_myprofile_component__ = __webpack_require__(502);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfileRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_myprofile_component__["a" /* MyprofileComponent */] },
];
var MyProfileRoutingModule = (function () {
    function MyProfileRoutingModule() {
    }
    return MyProfileRoutingModule;
}());
MyProfileRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], MyProfileRoutingModule);



/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myprofile_routing_module__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_myprofile_component__ = __webpack_require__(502);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprofileModule", function() { return MyprofileModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MyprofileModule = (function () {
    function MyprofileModule() {
    }
    return MyprofileModule;
}());
MyprofileModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__myprofile_routing_module__["a" /* MyProfileRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__components_myprofile_component__["a" /* MyprofileComponent */]
        ]
    })
], MyprofileModule);



/***/ }),

/***/ 609:
/***/ (function(module, exports) {

module.exports = "<p>\n  myprofile works!\n</p>\n\n<div id=\"main-content\">\r\n    <div class=\"row m-t-10\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading text-right\">\r\n                    <button type=\"button\" class=\"btn btn-sm btn-icon btn-rounded btn-default\">\r\n                        <i class=\"fa fa-question\"></i>\r\n                    </button>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                            <form id=\"form1\" class=\"form-horizontal\" parsley-validate>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-sm-3 col-sm-offset-5 text-center\">\r\n                                        <img src=\"developer_assets/img/avatars/avatar1_big.png\" width=\"140\" class=\"img-circle\" alt=\"\">\r\n                                        <div class=\"fileupload-buttonbar\">\r\n                                            <span class=\"btn btn-success fileinput-button\">\r\n                                                <i class=\"glyphicon glyphicon-plus\"></i>\r\n                                                <span>Add files...</span>\r\n                                                <input type=\"file\" name=\"files[]\" multiple>\r\n                                            </span>\r\n                                            <!-- The table listing the files available for upload/download -->\r\n                                            <table role=\"presentation\" class=\"table table-striped\"><tbody class=\"files\"></tbody></table>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"boder-btm\">\r\n                                    <h3 class=\"panel-title\">Basic Info</h3>\r\n                                </div>\r\n                                <div class=\"m-b-30\">\r\n                                    <div class=\"form-group\">\r\n\r\n                                        <label class=\"col-sm-2 control-label\">First Name <span class=\"asterisk\">*</span> </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <input type=\"text\" class=\"form-control\" required>\r\n                                        </div>\r\n                                        <label class=\"col-sm-2 control-label\">Last Name <span class=\"asterisk\">*</span> </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <input type=\"text\" class=\"form-control\" required>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n\r\n                                        <label class=\"col-sm-2 control-label\">Email <span class=\"asterisk\">*</span> </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <input type=\"email\" class=\"form-control\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"boder-btm\">\r\n                                    <h3 class=\"panel-title\">Personal</h3>\r\n                                </div>\r\n                                <div class=\"m-b-30\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"col-sm-2 control-label\">Mobile Number </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <input type=\"text\" class=\"form-control\">\r\n                                        </div>\r\n                                        <label class=\"col-sm-2 control-label\">Gender </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <div class=\"radio\">\r\n                                                <label class=\"radio-inline\">\r\n                                                    <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\r\n                                                    Male\r\n                                                </label>\r\n                                                <label class=\"radio-inline\">\r\n                                                    <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\r\n                                                    Female\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"col-sm-2 control-label\">Date Of Birth </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <input type=\"text\" class=\"form-control\" required>\r\n                                        </div>\r\n                                        <label class=\"col-sm-2 control-label\">Marital Status </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <select class=\"form-control\">\r\n                                                <option>---Select---</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"col-sm-2 control-label\">Father/Husband Name </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <input type=\"text\" class=\"form-control\">\r\n                                        </div>\r\n                                        <label class=\"col-sm-2 control-label\">Mother Name </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <input type=\"text\" class=\"form-control\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"col-sm-2 control-label\">Blood Group </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <select class=\"form-control\">\r\n                                                <option>---Select---</option>\r\n                                            </select>\r\n                                        </div>\r\n                                        <label class=\"col-sm-2 control-label\">PAN Card </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <input type=\"text\" class=\"form-control\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"col-sm-2 control-label\">Address <span class=\"asterisk\">*</span> </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <textarea rows=\"2\" class=\"form-control valid\" placeholder=\"\" parsley-minwords=\"3\" required></textarea>\r\n                                        </div>\r\n                                        <label class=\"col-sm-2 control-label\">\r\n                                            City <span class=\"asterisk\">*</span>\r\n                                        </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <select class=\"form-control\">\r\n                                                <option>---Select---</option>\r\n                                                <option>2</option>\r\n                                                <option>3</option>\r\n                                                <option>4</option>\r\n                                                <option>5</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"col-sm-2 control-label\">\r\n                                            Pincode\r\n                                        </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <input type=\"text\" class=\"form-control\">\r\n                                        </div>\r\n                                        <label class=\"col-sm-2 control-label\">\r\n                                            State <span class=\"asterisk\">*</span>\r\n                                        </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <select class=\"form-control\">\r\n                                                <option>---Select---</option>\r\n                                                <option>2</option>\r\n                                                <option>3</option>\r\n                                                <option>4</option>\r\n                                                <option>5</option>\r\n                                            </select>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"col-sm-2 control-label\">\r\n                                            Country <span class=\"asterisk\">*</span>\r\n                                        </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <select class=\"form-control\">\r\n                                                <option>---Select---</option>\r\n                                                <option>2</option>\r\n                                                <option>3</option>\r\n                                                <option>4</option>\r\n                                                <option>5</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"boder-btm\">\r\n                                    <h3 class=\"panel-title\">Work</h3>\r\n                                </div>\r\n                                <div class=\"m-b-30\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"col-sm-2 control-label\">Department </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <select class=\"form-control\">\r\n                                                <option>---Select---</option>\r\n                                            </select>\r\n                                        </div>\r\n                                        <label class=\"col-sm-2 control-label\">Branch </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <select class=\"form-control\">\r\n                                                <option>---Select---</option>\r\n                                            </select>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"col-sm-2 control-label\">Qualification </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <input type=\"text\" class=\"form-control\">\r\n                                        </div>\r\n                                        <label class=\"col-sm-2 control-label\">Total Experience </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <input type=\"text\" class=\"form-control\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"col-sm-2 control-label\">Job Title </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <select class=\"form-control\">\r\n                                                <option>---Select---</option>\r\n                                            </select>\r\n                                        </div>\r\n                                        <label class=\"col-sm-2 control-label\">Role <span class=\"asterisk\">*</span> </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <select class=\"form-control\">\r\n                                                <option>---Select---</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n\r\n                                        <label class=\"col-sm-2 control-label\">Joining Date <span class=\"asterisk\">*</span> </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <input type=\"text\" class=\"form-control\" required>\r\n                                        </div>\r\n                                        <label class=\"col-sm-2 control-label\">Position </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <select class=\"form-control\">\r\n                                                <option>---Select---</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group\">\r\n\r\n                                        <label class=\"col-sm-2 control-label\">Grade </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <select class=\"form-control\">\r\n                                                <option>---Select---</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"boder-btm\">\r\n                                    <h3 class=\"panel-title\">Bank Info</h3>\r\n                                </div>\r\n                                <div class=\"m-b-30\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"col-sm-2 control-label\">Bank Name </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <input type=\"text\" class=\"form-control\">\r\n                                        </div>\r\n                                        <label class=\"col-sm-2 control-label\">Bank Branch </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <input type=\"text\" class=\"form-control\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"col-sm-2 control-label\">Account Number </label>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <input type=\"text\" class=\"form-control\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <div class=\"col-sm-10 col-sm-offset-2\">\r\n                                            <button class=\"btn btn-primary m-b-10\" onclick=\"javascript:$('#form1').parsley('validate');\">Submit</button>\r\n                                            <button type=\"reset\" class=\"btn btn-default m-b-10\">Cancel</button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\n"

/***/ })

});
//# sourceMappingURL=20.chunk.js.map