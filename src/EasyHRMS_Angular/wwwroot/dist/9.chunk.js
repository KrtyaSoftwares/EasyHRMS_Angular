webpackJsonp([9,15,17],{

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_form_defination_service__ = __webpack_require__(173);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormbuilderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormbuilderComponent = (function () {
    function FormbuilderComponent(formsService) {
        this.formsService = formsService;
        this.result = {};
        this.createArray = [];
        this.forms = [];
        this.payLoad = '';
        this.record_not_exists = false;
    }
    FormbuilderComponent.prototype.ngOnInit = function () {
        this.getTableDefination(this.lookup);
    };
    FormbuilderComponent.prototype.onSubmit = function () {
        this.payLoad = JSON.stringify(this.form.value);
        for (var key in this.form.value) {
            var value = this.form.value[key];
            var tempObj = {
                'lookupId': this.lookup,
                'fieldName': key,
                'value': value
            };
            this.createArray.push(tempObj);
        }
        this.addTableData(this.lookup, this.createArray);
    };
    FormbuilderComponent.prototype.addTableData = function (id, data) {
        this.formsService
            .Add(id, data)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    FormbuilderComponent.prototype.updateTableData = function (id, data) {
        this.formsService
            .Update(id, data)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    FormbuilderComponent.prototype.getTableDefination = function (id) {
        var _this = this;
        this.formsService.GetSingle(id)
            .subscribe(function (data) {
            _this.result = data;
            _this.final_result = _this.result['list'];
            if (_this.final_result.length == 0) {
                _this.record_not_exists = true;
            }
            else {
                _this.record_not_exists = false;
            }
            var group = {};
            _this.final_result.forEach(function (form) {
                if (form.isRequire) {
                    group[form.fieldName] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
                }
                else {
                    group[form.fieldName] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('');
                }
            });
            _this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormGroup */](group);
        });
    };
    return FormbuilderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('lookup'),
    __metadata("design:type", String)
], FormbuilderComponent.prototype, "lookup", void 0);
FormbuilderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'app-formbuilder',
        template: __webpack_require__(368)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_services_form_defination_service__["a" /* FormsService */]])
], FormbuilderComponent);



/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_lists_data__ = __webpack_require__(363);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListingComponent = (function () {
    function ListingComponent(_listsService) {
        this._listsService = _listsService;
        this.results = {};
        this.filter_Array = [];
        this.record_not_exists = false;
    }
    ListingComponent.prototype.ngOnInit = function () {
        this.getAll(this.lookup);
    };
    ListingComponent.prototype.getAll = function (id) {
        var _this = this;
        this._listsService.GetAll(id)
            .subscribe(function (data) {
            _this.results = data;
            _this.lookuplist = _this.results['lookuplist'];
            _this.actionlist = _this.results['actionlist'];
            _this.lookupData = _this.results['lookupData'];
            _this.filterLookupData = _this.lookupData.sort(function (a, b) {
                return a.rowId - b.rowId;
            });
            if (_this.lookuplist.length == 0) {
                _this.record_not_exists = true;
            }
            else {
                _this.record_not_exists = false;
            }
            _this.filter_Array = _this.groupBy(_this.filterLookupData, 'rowId');
        });
    };
    ListingComponent.prototype.groupBy = function (collection, property) {
        var i = 0, val, index, values = [], result = [];
        for (; i < collection.length; i++) {
            val = collection[i][property];
            index = values.indexOf(val);
            if (index > -1) {
                result[index].push(collection[i]);
            }
            else {
                values.push(val);
                result.push([collection[i]]);
            }
        }
        return result;
    };
    return ListingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('lookup'),
    __metadata("design:type", String)
], ListingComponent.prototype, "lookup", void 0);
ListingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'app-listing',
        template: __webpack_require__(369),
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_lists_data__["a" /* ListsService */]])
], ListingComponent);



/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_constants__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListsService = (function () {
    function ListsService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.GetAll = function (id) {
            return _this.http
                .get(_this.actionUrl + 'LookupList/GetLookupListDataByLookupID/' + id)
                .map(function (res) { return res.json(); });
        };
        this.actionUrl = configuration.Server + 'api/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    return ListsService;
}());
ListsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_0__app_constants__["a" /* Configuration */]])
], ListsService);



/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_formbuilder_component__ = __webpack_require__(361);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormbuilderRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_formbuilder_component__["a" /* FormbuilderComponent */] },
];
var FormbuilderRoutingModule = (function () {
    function FormbuilderRoutingModule() {
    }
    return FormbuilderRoutingModule;
}());
FormbuilderRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], FormbuilderRoutingModule);



/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_formbuilder_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formbuilder_routing_module__ = __webpack_require__(364);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormbuilderModule", function() { return FormbuilderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FormbuilderModule = (function () {
    function FormbuilderModule() {
    }
    return FormbuilderModule;
}());
FormbuilderModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__formbuilder_routing_module__["a" /* FormbuilderRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__components_formbuilder_component__["a" /* FormbuilderComponent */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__components_formbuilder_component__["a" /* FormbuilderComponent */]]
    })
], FormbuilderModule);



/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_listing_component__ = __webpack_require__(362);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_listing_component__["a" /* ListingComponent */] },
];
var ListingRoutingModule = (function () {
    function ListingRoutingModule() {
    }
    return ListingRoutingModule;
}());
ListingRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], ListingRoutingModule);



/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_listing_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listing_routing_module__ = __webpack_require__(366);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingModule", function() { return ListingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListingModule = (function () {
    function ListingModule() {
    }
    return ListingModule;
}());
ListingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__listing_routing_module__["a" /* ListingRoutingModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__components_listing_component__["a" /* ListingComponent */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__components_listing_component__["a" /* ListingComponent */]]
    })
], ListingModule);



/***/ }),

/***/ 368:
/***/ (function(module, exports) {

module.exports = "<div id=\"main-content\" >\r\n    <div class=\"row m-t-10\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading text-right\">\r\n            <button type=\"button\" class=\"btn btn-sm btn-icon btn-rounded btn-default\"><i class=\"fa fa-question\"></i> </button>\r\n          </div>\r\n          <div class=\"panel-body\">\r\n           <div class=\"row\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">                                 \r\n                <div class=\"form-horizontal\" >\r\n                  <div class=\"boder-btm\">\r\n                    <h3 class=\"panel-title\">Branch Info</h3>\r\n                  </div>\r\n                  <div *ngIf=\"record_not_exists\">No Form found.</div>\r\n                  <div *ngIf=\"!record_not_exists\" class=\"m-b-30\">\r\n                    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" *ngIf=\"form\">\r\n                        <div *ngFor=\"let question of final_result; let i = index\">\r\n                            <div class=\"form-group\">\r\n                              <label class=\"col-sm-2 control-label\">\r\n                                  {{question.displayName ? question.displayName : question.fieldName}} <span *ngIf=\"question.isRequire\" class=\"asterisk\">*</span>\r\n                              </label>\r\n                              <div [ngSwitch]=\"question.fieldType\"  class=\"col-sm-4\">\r\n                                <div *ngSwitchCase=\"'Text'\">\r\n                                  <input \r\n                                      class=\"form-control\" \r\n                                      type=\"{{question.fieldType}}\" \r\n                                      id=\"{{question.fieldName}}\" \r\n                                      [formControlName]=\"question.fieldName\">\r\n                                </div>\r\n                              </div>\r\n                              <div \r\n                                  class=\"errorMessage\" \r\n                                  *ngIf=\"!form.controls[question.fieldName].valid\">*required</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-row\">\r\n                            <button type=\"submit\" [disabled]=\"!form.valid\">Save</button>\r\n                        </div>\r\n                    </form>\r\n                    <div class=\"form-row\">\r\n                      <div *ngIf=\"payLoad\"><strong>The form contains the following values</strong></div>\r\n                      <div>\r\n                          {{payLoad}}\r\n                      </div>\r\n                  </div>\r\n                  </div>\r\n                </div>\r\n\t\t          </div>\r\n           </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>  "

/***/ }),

/***/ 369:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"record_not_exists\">No Form found.</div>\r\n    <div *ngIf=\"!record_not_exists\" class=\"row\">\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"no-bd\">\r\n                <tr>\r\n                <th *ngFor=\"let heading of lookuplist; let i = index\"><strong>{{heading.displayName}}</strong> </th>\r\n                <th><strong>Action</strong></th>                        \r\n                </tr>\r\n            </thead>\r\n            <tbody class=\"no-bd-y\">\r\n                <tr *ngFor=\"let hero of filter_Array\">\r\n                <td *ngFor=\"let h of hero\">{{h.value}} </td>\r\n                <td>\r\n                    <button\r\n                    *ngFor=\"let act of actionlist\"\r\n                    type=\"button\"\r\n                    [ngClass]=\"act.action == 'Edit' ? 'btn btn-sm btn-warning' : 'btn btn-sm btn-danger'\"\r\n                    title=\"{{act.action}}\">\r\n                    <i [ngClass]=\"act.action == 'Edit' ? 'fa fa-pencil' : 'fa fa-remove'\"></i>\r\n                    </button>\r\n                </td>\r\n                </tr>\r\n            </tbody>\r\n            </table>\r\n        </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
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
        this.lookup = 2;
    }
    BranchComponent.prototype.ngOnInit = function () {
    };
    return BranchComponent;
}());
BranchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'app-branch',
        template: __webpack_require__(489)
    }),
    __metadata("design:paramtypes", [])
], BranchComponent);



/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
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
        this.lookup = 2;
    }
    return FormComponent;
}());
FormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'app-form',
        template: __webpack_require__(490),
    }),
    __metadata("design:paramtypes", [])
], FormComponent);



/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
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
        template: __webpack_require__(491),
    }),
    __metadata("design:paramtypes", [])
], LookupComponent);



/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
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
        template: __webpack_require__(492),
    }),
    __metadata("design:paramtypes", [])
], HolidayComponent);



/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_lookup_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__holiday_holiday_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__branch_branch_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__branch_form_form_component__ = __webpack_require__(395);
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
    { path: 'branch/form/:id', component: __WEBPACK_IMPORTED_MODULE_5__branch_form_form_component__["a" /* FormComponent */] },
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

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_lookup_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lookup_routing_module__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__holiday_holiday_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__branch_branch_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__branch_form_form_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__formbuilder_formbuilder_module__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__listing_listing_module__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_services_lists_data__ = __webpack_require__(363);
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
            __WEBPACK_IMPORTED_MODULE_5__shared__["c" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_9__formbuilder_formbuilder_module__["FormbuilderModule"],
            __WEBPACK_IMPORTED_MODULE_10__listing_listing_module__["ListingModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__components_lookup_component__["a" /* LookupComponent */],
            __WEBPACK_IMPORTED_MODULE_6__holiday_holiday_component__["a" /* HolidayComponent */],
            __WEBPACK_IMPORTED_MODULE_7__branch_branch_component__["a" /* BranchComponent */],
            __WEBPACK_IMPORTED_MODULE_8__branch_form_form_component__["a" /* FormComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__core_services_lists_data__["a" /* ListsService */]
        ]
    })
], LookupModule);



/***/ }),

/***/ 489:
/***/ (function(module, exports) {

module.exports = "<div id=\"main-content\" >\r\n    <div class=\"row m-t-10\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading text-right\">\r\n            <button type=\"button\" class=\"btn btn-sm btn-icon btn-rounded btn-default\"><i class=\"fa fa-question\"></i> </button>\r\n          </div>\r\n          <div class=\"panel-body\">\r\n           <div class=\"row\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12 text-right\">\r\n                <button [routerLink]=\"['/lookup/branch/form']\" class=\"btn btn-primary m-b-10\" >Add Branch</button>\r\n              </div>\r\n            </div>\r\n            <app-listing [lookup]=\"lookup\"> </app-listing>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ 490:
/***/ (function(module, exports) {

module.exports = "<app-formbuilder [lookup]=\"lookup\"> </app-formbuilder>"

/***/ }),

/***/ 491:
/***/ (function(module, exports) {

module.exports = "<div id=\"main-content\" class=\"dashboard\">\r\n\t<div class=\"boder-btm-dark\">\r\n\t\t  <h1 class=\"panel-title\">Company Configuration</h1>\r\n\t\t</div>\r\n    <ul class=\"lookup-list\">\r\n        \t<li>\r\n        \t \r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-blue text-center p-0\" >\r\n               \t <a [routerLink]=\"['/lookup/branch']\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n                \t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/manage-branches-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tManage Branches\r\n\t\t\t\t\t </div>\r\n               </a>\r\n                </div>\r\n              </div>\r\n              \r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-red text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/currency-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tCurrency\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-green text-center p-0\">\r\n                 <a [routerLink]=\"['/lookup/holiday']\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/holiday-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tHoliday\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-dark text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/announcement-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tAnnouncement\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        </ul>\r\n    <div class=\"boder-btm-dark\">\r\n\t\t  <h1 class=\"panel-title\">Employee Management</h1>\r\n\t\t</div>\r\n\t<ul class=\"list-unstyled lookup-list\">\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-blue text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/employee-position-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tEmployee Position\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-red text-center p-0\">\r\n                <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/employee-grade-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tEmployee Grade\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-green text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/employee-department-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tEmployee Department\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-dark text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/shift-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tShift\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-blue text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/pay-head-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tPay Type \r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-red text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/leave-head-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tLeave Type \r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-green text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/employee-tracking-mapping-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tEmployee Tracker Mapping\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>        \t\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-blue text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/working-days-alert-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tWorking Days Alert\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-dark text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/role-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tJob Profile\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>        \t\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-green text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/backoffice-detail-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tJob Posting\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-red text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/skills-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tSkills\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        </ul>\r\n    <div class=\"boder-btm-dark\">\r\n\t\t  <h1 class=\"panel-title\">Others</h1>\r\n\t\t</div>\r\n    <ul class=\"list-unstyled lookup-list\">\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-blue text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/country-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tCountry\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-red text-center p-0\">\r\n                <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/states-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tState\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-green text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/city-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tCity\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-dark text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/nationality-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tNationality\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-blue text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/email-template-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tEmail Template\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-red text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/sms-template-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tSMS Template \r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>\r\n        \t<li>\r\n        \t\t<div class=\"panel no-bd bd-3 panel-stat\">\r\n                <div class=\"panel-body bg-green text-center p-0\">\r\n                 <a href=\"#\" class=\"lookup-link p-10 lookup-icon-size hvr-rectangle-out\">\r\n\t\t\t\t\t <div class=\"lookup-icon\">\r\n\t\t\t\t\t \t<img src=\"developer_assets/img/lookup-icons/employee-tracking-mapping-icon-48.png\" width=\"36\" height=\"36\" alt=\"\" >\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"lookup-title\" >\r\n\t\t\t\t\t \tImport Export Data\r\n\t\t\t\t\t </div>\r\n               \t </a>\r\n                </div>\r\n              </div>\r\n        \t</li>        \t\r\n        \t        \t\r\n        \t\r\n        </ul>\r\n</div>"

/***/ }),

/***/ 492:
/***/ (function(module, exports) {

module.exports = "<div id=\"main-content\" >\r\n<div class=\"row m-t-10\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading text-right\">\r\n\t\t\t\t\t\t\t\r\n                                       <div class=\"btn-group text-left\">\r\n                                        <button class=\"btn btn-success dropdown-toggle\" data-toggle=\"dropdown\">Export <i class=\"fa fa-angle-down\"></i>\r\n                                        </button>\r\n                                        <ul class=\"dropdown-menu pull-right\">\r\n                                            <li><a href=\"#\">Print</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\">Export to PDF</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\">Export to XLS</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\">Export to CSV</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\">Export to DOC</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                    <button type=\"button\" class=\"btn btn-sm btn-icon btn-rounded btn-default\"><i class=\"fa fa-question\"></i>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\r\n                        </div>\r\n                        <div class=\"panel-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12 col-sm-12 col-xs-12 table-responsive\">\r\n                                    <table class=\"table table-bordered table-striped table-hover\">\r\n                                        <thead class=\"no-bd\">\r\n                                            <tr>                                               \r\n                                                <th><strong>Holiday Date</strong></th>\r\n                                                <th><strong>Holiday Discription</strong></th>\r\n                                                <th><strong>Action</strong></th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody class=\"no-bd-y\">\r\n                                            <tr>\r\n                                                <td>31/12/2016</td>\r\n                                                <td>Adjustment 1-January-2017 New Year</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>07/01/2017</td>\r\n                                                <td>1st Saturday Off(January)</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>14/01/2017</td>\r\n                                                <td>Kite Festival</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>21/01/2017</td>\r\n                                                <td>3rd Saturday Off(January)</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>26/01/2017</td>\r\n                                                <td>Republic Day</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>04/02/2017</td>\r\n                                                <td>1st Saturday off (February)</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>18/02/2017</td>\r\n                                                <td>3rd Saturday off (February)</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>31/12/2016</td>\r\n                                                <td>Adjustment 1-January-2017 New Year</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>07/01/2017</td>\r\n                                                <td>1st Saturday Off(January)</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>14/01/2017</td>\r\n                                                <td>Kite Festival</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>21/01/2017</td>\r\n                                                <td>3rd Saturday Off(January)</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>26/01/2017</td>\r\n                                                <td>Republic Day</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>04/02/2017</td>\r\n                                                <td>1st Saturday off (February)</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>18/02/2017</td>\r\n                                                <td>3rd Saturday off (February)</td>\r\n                                                <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                          <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\" ></i></button></td>\r\n                                            </tr>\r\n                                            \r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n            </div>\r\n</div>\r\n   \r\n    \r\n   "

/***/ })

});
//# sourceMappingURL=9.chunk.js.map