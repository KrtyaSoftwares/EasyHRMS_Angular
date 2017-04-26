webpackJsonp([17],{

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

/***/ 368:
/***/ (function(module, exports) {

module.exports = "<div id=\"main-content\" >\r\n    <div class=\"row m-t-10\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading text-right\">\r\n            <button type=\"button\" class=\"btn btn-sm btn-icon btn-rounded btn-default\"><i class=\"fa fa-question\"></i> </button>\r\n          </div>\r\n          <div class=\"panel-body\">\r\n           <div class=\"row\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">                                 \r\n                <div class=\"form-horizontal\" >\r\n                  <div class=\"boder-btm\">\r\n                    <h3 class=\"panel-title\">Branch Info</h3>\r\n                  </div>\r\n                  <div *ngIf=\"record_not_exists\">No Form found.</div>\r\n                  <div *ngIf=\"!record_not_exists\" class=\"m-b-30\">\r\n                    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" *ngIf=\"form\">\r\n                        <div *ngFor=\"let question of final_result; let i = index\">\r\n                            <div class=\"form-group\">\r\n                              <label class=\"col-sm-2 control-label\">\r\n                                  {{question.displayName ? question.displayName : question.fieldName}} <span *ngIf=\"question.isRequire\" class=\"asterisk\">*</span>\r\n                              </label>\r\n                              <div [ngSwitch]=\"question.fieldType\"  class=\"col-sm-4\">\r\n                                <div *ngSwitchCase=\"'Text'\">\r\n                                  <input \r\n                                      class=\"form-control\" \r\n                                      type=\"{{question.fieldType}}\" \r\n                                      id=\"{{question.fieldName}}\" \r\n                                      [formControlName]=\"question.fieldName\">\r\n                                </div>\r\n                              </div>\r\n                              <div \r\n                                  class=\"errorMessage\" \r\n                                  *ngIf=\"!form.controls[question.fieldName].valid\">*required</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-row\">\r\n                            <button type=\"submit\" [disabled]=\"!form.valid\">Save</button>\r\n                        </div>\r\n                    </form>\r\n                    <div class=\"form-row\">\r\n                      <div *ngIf=\"payLoad\"><strong>The form contains the following values</strong></div>\r\n                      <div>\r\n                          {{payLoad}}\r\n                      </div>\r\n                  </div>\r\n                  </div>\r\n                </div>\r\n\t\t          </div>\r\n           </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>  "

/***/ })

});
//# sourceMappingURL=17.chunk.js.map