webpackJsonp([24],{

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_form_defination_service__ = __webpack_require__(174);
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
    function FormbuilderComponent(fb, _router, _route, formsService) {
        this.fb = fb;
        this._router = _router;
        this._route = _route;
        this.formsService = formsService;
        this.result = {};
        this.createArray = [];
        this.final_result = [];
        this.forms = [];
        this.record = {};
        this.singleRecord = [];
        this.record_not_exists = false;
    }
    FormbuilderComponent.prototype.ngOnInit = function () {
        this.getTableDefination(this.lookup);
    };
    FormbuilderComponent.prototype.getTableData = function (lookup, id) {
        var _this = this;
        this.formsService
            .GetTableData(lookup, id)
            .subscribe(function (data) {
            _this.record = data;
            _this.singleRecord = _this.record['list'];
            _this.array_merge();
        });
    };
    FormbuilderComponent.prototype.onSubmit = function (value, isValid) {
        this.submitted = true;
        if (isValid == false) {
            return false;
        }
        else {
            this.createArray = [];
            var rowId = void 0;
            var id = void 0;
            var cnt = 0;
            for (var key in this.form.value) {
                if (this.rowId) {
                    rowId = this.singleRecord[0]['rowId'];
                    id = this.singleRecord[cnt]['id'];
                }
                var value_1 = this.form.value[key];
                var tempObj = {
                    'lookupId': this.lookup,
                    'fieldName': key,
                    'rowId': this.rowId ? rowId : 0,
                    'id': this.rowId ? id : 0,
                    'value': value_1
                };
                this.createArray.push(tempObj);
                cnt++;
            }
            if (this.rowId) {
                this.updateTableData(this.lookup, this.createArray);
            }
            else {
                this.addTableData(this.lookup, this.createArray);
            }
        }
    };
    FormbuilderComponent.prototype.addTableData = function (id, data) {
        var _this = this;
        this.formsService
            .Add(id, data)
            .subscribe(function (data) {
            _this._router.navigate(['/lookup/lists/' + _this.lookup]);
        });
    };
    FormbuilderComponent.prototype.updateTableData = function (id, data) {
        var _this = this;
        this.formsService
            .Update(id, data)
            .subscribe(function (data) {
            _this._router.navigate(['/lookup/lists/' + _this.lookup]);
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
            if (_this.rowId) {
                _this.getTableData(_this.lookup, _this.rowId);
            }
            var group = {};
            var i = 0;
            _this.final_result.forEach(function (form) {
                _this.final_result[i]['custom_value'] = '';
                if (form.isRequire) {
                    group[form.fieldName] = ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required];
                }
                else {
                    group[form.fieldName] = [];
                }
                i++;
            });
            _this.form = _this.fb.group(group);
        });
    };
    FormbuilderComponent.prototype.array_merge = function () {
        for (var i in this.final_result) {
            for (var j in this.singleRecord) {
                if (this.singleRecord[j].fieldName == this.final_result[i].fieldName) {
                    this.final_result[i]['custom_value'] = this.singleRecord[j]['value'];
                }
            }
        }
    };
    return FormbuilderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('lookup'),
    __metadata("design:type", Number)
], FormbuilderComponent.prototype, "lookup", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('rowId'),
    __metadata("design:type", Number)
], FormbuilderComponent.prototype, "rowId", void 0);
FormbuilderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-formbuilder',
        template: __webpack_require__(449)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
        __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_0__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_3__core_services_form_defination_service__["a" /* FormsService */]])
], FormbuilderComponent);



/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_formbuilder_component__ = __webpack_require__(375);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], FormbuilderRoutingModule);



/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_formbuilder_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formbuilder_routing_module__ = __webpack_require__(442);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__formbuilder_routing_module__["a" /* FormbuilderRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__components_formbuilder_component__["a" /* FormbuilderComponent */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__components_formbuilder_component__["a" /* FormbuilderComponent */]]
    })
], FormbuilderModule);



/***/ }),

/***/ 449:
/***/ (function(module, exports) {

module.exports = "<div id=\"main-content\" >\r\n    <div class=\"row m-t-10\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading text-right\">\r\n            <button type=\"button\" class=\"btn btn-sm btn-icon btn-rounded btn-default\"><i class=\"fa fa-question\"></i> </button>\r\n          </div>\r\n          <div class=\"panel-body\">\r\n           <div class=\"row\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">                                 \r\n                <div class=\"form-horizontal\" >\r\n                  <div class=\"boder-btm\">\r\n                    <h3 class=\"panel-title\">Branch Info</h3>\r\n                  </div>\r\n                  <div *ngIf=\"record_not_exists\">No Form found.</div>\r\n                  <div *ngIf=\"!record_not_exists\" class=\"m-b-30\">\r\n                    <form \r\n                        *ngIf=\"form\"\r\n                        (ngSubmit)=\"onSubmit(form.value, form.valid)\" \r\n                        [formGroup]=\"form\" \r\n                        novalidate>\r\n                         <div *ngFor=\"let question of final_result; let i = index\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"inputEmail3\" class=\"col-md-4 col-sm-4 control-label\">\r\n                                  {{question.displayName ? question.displayName : question.fieldName}}\r\n                                </label>\r\n                                <div class=\"col-md-6 col-sm-6\" [ngSwitch]=\"question.fieldType\">\r\n                                  <div *ngSwitchCase=\"'Text'\">\r\n                                      <input \r\n                                        class=\"form-control\" \r\n                                        type=\"{{question.fieldType}}\"\r\n                                        [formControlName]=\"question.fieldName\" \r\n                                        [(ngModel)]=\"question.custom_value\">\r\n                                  </div>\r\n                                        <div \r\n                                          class=\"alert alert-danger\" \r\n                                          [hidden]=\"form.get([question.fieldName]).valid || (form.get([question.fieldName]).pristine && !submitted)\">\r\n                                          *{{question.fieldName}} is required\r\n                                        </div>\r\n                                </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"form-row\">\r\n                            <button class=\"btn btn-primary m-b-10\" type=\"submit\" >Save</button>\r\n                        </div>\r\n                    </form>\r\n                    <div class=\"form-row\">\r\n                      <div *ngIf=\"payLoad\"><strong>The form contains the following values</strong></div>\r\n                      <div>\r\n                          {{payLoad}}\r\n                      </div>\r\n                  </div>\r\n                  </div>\r\n                </div>\r\n\t\t          </div>\r\n           </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>  "

/***/ })

});
//# sourceMappingURL=24.chunk.js.map