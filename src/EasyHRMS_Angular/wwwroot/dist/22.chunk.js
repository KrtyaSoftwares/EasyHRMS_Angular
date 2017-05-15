webpackJsonp([22],{

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_constants__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormsService = (function () {
    function FormsService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.GetAll = function () {
            return _this.http
                .get(_this.actionUrl + 'Forms/GetAllFormDef')
                .map(function (res) { return res.json(); });
        };
        this.GetSingle = function (id) {
            return _this.http.get(_this.actionUrl + id).map(function (res) { return res.json(); });
        };
        this.Add = function (thingToAdd) {
            var toAdd = JSON.stringify({ name: thingToAdd.name });
            return _this.http.post(_this.actionUrl, toAdd, { headers: _this.headers }).map(function (res) { return res.json(); });
        };
        this.Update = function (id, itemToUpdate) {
            return _this.http
                .put(_this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: _this.headers })
                .map(function (res) { return res.json(); });
        };
        this.Delete = function (id) {
            return _this.http.delete(_this.actionUrl + id);
        };
        this.actionUrl = configuration.Server + 'api/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    return FormsService;
}());
FormsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_0__app_constants__["a" /* Configuration */]])
], FormsService);



/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChecklistsComponent = (function () {
    function ChecklistsComponent() {
    }
    ChecklistsComponent.prototype.ngOnInit = function () {
    };
    return ChecklistsComponent;
}());
ChecklistsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-checklists',
        template: __webpack_require__(619),
    }),
    __metadata("design:paramtypes", [])
], ChecklistsComponent);



/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_forms_forms_service__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_checklist_checklists_model__ = __webpack_require__(594);
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
    function FormComponent(fb, _router, _route, _formsService) {
        this.fb = fb;
        this._router = _router;
        this._route = _route;
        this._formsService = _formsService;
        this._checklistsModels = new __WEBPACK_IMPORTED_MODULE_4__models_checklist_checklists_model__["a" /* Checklists */]();
        this._results = {};
        this._formlist = [];
        this.form = fb.group({
            'formName': [this._checklistsModels.formName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'checklistName': [this._checklistsModels.checklistName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'taskId': [this._checklistsModels.taskId],
            'checklistOrder': [this._checklistsModels.checklistOrder],
            'taskOrder': [this._checklistsModels.taskOrder],
        });
    }
    FormComponent.prototype.ngOnInit = function () {
        this.getAllForms();
    };
    FormComponent.prototype.getAllForms = function () {
        var _this = this;
        this._formsService
            .GetAll()
            .subscribe(function (data) {
            _this._results = data;
            _this._formlist = _this._results['list'];
        });
    };
    FormComponent.prototype.onSubmit = function (value, isValid) {
        this.submitted = true;
        if (isValid == false) {
            return false;
        }
        else {
            console.log(value);
        }
    };
    return FormComponent;
}());
FormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form',
        template: __webpack_require__(620),
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_3__core_services_forms_forms_service__["a" /* FormsService */]])
], FormComponent);



/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_constants__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChecklistsService = (function () {
    function ChecklistsService(http, configuration) {
        this.http = http;
        this.configuration = configuration;
        this.actionUrl = configuration.Server + 'api/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    return ChecklistsService;
}());
ChecklistsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_0__app_constants__["a" /* Configuration */]])
], ChecklistsService);



/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_checklists_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_form_form_component__ = __webpack_require__(475);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_checklists_component__["a" /* ChecklistsComponent */] },
    { path: 'form', component: __WEBPACK_IMPORTED_MODULE_3__components_form_form_component__["a" /* FormComponent */] },
    { path: 'form/:id', component: __WEBPACK_IMPORTED_MODULE_3__components_form_form_component__["a" /* FormComponent */] },
];
var ChecklistsRoutingModule = (function () {
    function ChecklistsRoutingModule() {
    }
    return ChecklistsRoutingModule;
}());
ChecklistsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], ChecklistsRoutingModule);



/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checklists_routing_module__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_checklists_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_form_form_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_services_forms_forms_service__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_services_checklist_checklists_service__ = __webpack_require__(533);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistsModule", function() { return ChecklistsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ChecklistsModule = (function () {
    function ChecklistsModule() {
    }
    return ChecklistsModule;
}());
ChecklistsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__checklists_routing_module__["a" /* ChecklistsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__components_checklists_component__["a" /* ChecklistsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_form_form_component__["a" /* FormComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__core_services_forms_forms_service__["a" /* FormsService */],
            __WEBPACK_IMPORTED_MODULE_7__core_services_checklist_checklists_service__["a" /* ChecklistsService */]
        ]
    })
], ChecklistsModule);



/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Checklists; });
var Checklists = (function () {
    function Checklists() {
    }
    return Checklists;
}());



/***/ }),

/***/ 619:
/***/ (function(module, exports) {

module.exports = "<div id=\"main-content\" >\n    <div class=\"row m-t-10\">\n      <div class=\"col-md-12\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading text-right\">\n            <button type=\"button\" class=\"btn btn-sm btn-icon btn-rounded btn-default\"><i class=\"fa fa-question\"></i> </button>\n          </div>\n          <div class=\"panel-body\">\n           <div class=\"row\">\n              <div class=\"col-md-12 col-sm-12 col-xs-12 text-right\">\n                <button [routerLink]=\"['/automation/checklists/form']\" class=\"btn btn-primary m-b-10\" >Add Checklist</button>\n              </div>\n            </div>\n            \n            \n            <div class=\"row\">\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                <div class=\"table-responsive\">\n                  <table class=\"table table-bordered table-striped table-hover\">\n                    <thead class=\"no-bd\">\n                      <tr>                       \n                        <th><strong>Name</strong> </th>\n                        <th><strong>Form Name</strong> </th>\n                        <th><strong>Number of Parent Tasks Associated</strong> </th>                        \n                        <th><strong>Action</strong></th>                      \n                      </tr>\n                    </thead>\n                    <tbody class=\"no-bd-y\">\n                      <tr>                       \n                        <td><a href=\"#\">New employee joins </a></td>\n                        <td>Employee</td>\n                        <td>6</td>                        \n\t\t\t\t\t\t            <td>\n                          <button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>  \n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button>\n                        </td>   \n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ 620:
/***/ (function(module, exports) {

module.exports = "<div id=\"main-content\" >\n\t<div class=\"row m-t-10\">\n      <div class=\"col-md-12\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading text-right\">\n            <button type=\"button\" class=\"btn btn-sm btn-icon btn-rounded btn-default\"><i class=\"fa fa-question\"></i> </button>\n          </div>\n          <div class=\"panel-body\">\n           <div class=\"row\">\n                <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value,form.valid)\" novalidate class=\"form-horizontal\">\n                    <div class=\"boder-btm\">\n                      <h3 class=\"panel-title\">Basic Info</h3>\n                    </div>\n                    <div class=\"m-b-30\">\n                      <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Form Name </label>\n                        <div class=\"col-sm-4\">\n                          <select class=\"form-control\" formControlName=\"formName\" [(ngModel)]=\"_checklistsModels.formName\">\n                            <option>---Select---</option>\n                            <option *ngFor=\"let lst of _formlist\" [value]=\"lst.id\"> {{lst.formName}} </option>\n                          </select>\n                          <div [hidden]=\"form.get('formName').valid || (form.get('formName').pristine && !submitted)\" class=\"alert alert-danger\">\n                              Form Name is required.\n                          </div>\n                          </div>\n                        <label class=\"col-sm-2 control-label\">Checklist Name </label>\n                        <div class=\"col-sm-4\">\n                          <input type=\"text\" class=\"form-control\" formControlName=\"checklistName\" [(ngModel)]=\"_checklistsModels.checklistName\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-12 col-sm-12 col-xs-12 text-right\">\n                        <button class=\"btn btn-primary m-b-10\" >Add New Task</button>\n                      </div>\n                    </div>\n                    <div class=\"boder-btm\">\n                      <h3 class=\"panel-title\">Tasks</h3>\n                    </div>\n                    <div class=\"m-b-30\">\n                      <div class=\"form-group\">\n                        <div class=\"col-sm-offset-2 col-sm-10\">\n                            <ul class=\"list-unstyled task-item-list\">\n                                <li>\n                                    <div class=\"task-item-main\" >Place allocation - Manager: 2 day(s) \n                                      <button type=\"button\" class=\"btn btn-sm btn-warning pull-right\" title=\"Edit\">\n                                        <i class=\"fa fa-pencil\"></i>\n                                      </button>  \n                                      <button type=\"button\" class=\"btn btn-sm btn-danger pull-right\" title=\"Delete\">\n                                        <i class=\"fa fa-remove\" ></i>\n                                      </button>\n                                    </div>\t\n                                </li>\n                            </ul>\n                          </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">                                            \n                        <div class=\"col-sm-10 col-sm-offset-2\">\n                            <button class=\"btn btn-primary m-b-10\" type=\"submit\">Submit</button>\n                            <button type=\"reset\"  class=\"btn btn-default m-b-10\">Cancel</button>\n                        </div>                                           \n                    </div>                                       \n                  </form>\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>"

/***/ })

});
//# sourceMappingURL=22.chunk.js.map