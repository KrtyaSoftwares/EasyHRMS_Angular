webpackJsonp([8],{

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_constants__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeService = (function () {
    function EmployeeService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.GetAll = function () {
            return _this.http
                .get(_this.actionUrl + 'EmployeeDetails/getAllEmployee')
                .map(function (res) { return res.json(); });
        };
        this.actionUrl = configuration.Server + 'api/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    return EmployeeService;
}());
EmployeeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_0__app_constants__["a" /* Configuration */]])
], EmployeeService);



/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_constants__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralFormsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GeneralFormsService = (function () {
    function GeneralFormsService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.GetSingle = function (id) {
            return _this.http
                .get(_this.actionUrl + 'Forms/GetAllFormDefByFormID/' + id)
                .map(function (res) { return res.json(); });
        };
        this.GetFormData = function (id) {
            return _this.http
                .get(_this.actionUrl + 'EmployeeDetails/GetEmployeeByID/' + id)
                .map(function (res) { return res.json(); });
        };
        this.actionUrl = configuration.Server + 'api/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    return GeneralFormsService;
}());
GeneralFormsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_0__app_constants__["a" /* Configuration */]])
], GeneralFormsService);



/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_general_forms_service__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_general_data_model__ = __webpack_require__(455);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditComponent = (function () {
    function EditComponent(_router, _route, _generalFormsService) {
        this._router = _router;
        this._route = _route;
        this._generalFormsService = _generalFormsService;
        this._generalDataModel = new __WEBPACK_IMPORTED_MODULE_3__models_general_data_model__["a" /* GeneralDataModel */]();
        this.allResults = {};
        this._tabLists = [];
        this._fieldLists = [];
        this._formDetails = [];
        this._tabs = [];
        this._fields = [];
        this._mixArray = [];
        this.final_array = [];
        this._formDataObj = {};
        this._formData = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.generalFormId = params['formid'];
            _this.Id = params['id'];
        });
        this.getFormDefination(this.generalFormId);
        this.getFormData(this.Id);
    };
    EditComponent.prototype.getFormData = function (id) {
        var _this = this;
        this._generalFormsService
            .GetFormData(id)
            .subscribe(function (data) {
            _this._formDataObj = data;
            _this._generalDataModel = _this._formDataObj['objEmployee'];
            _this._formData.push(_this._formDataObj['objEmployee']);
        });
    };
    EditComponent.prototype.getFormDefination = function (id) {
        var _this = this;
        this._generalFormsService
            .GetSingle(id)
            .subscribe(function (data) {
            _this.allResults = data;
            _this._formDetails = _this.allResults['objForm'];
            _this._tabLists = _this.allResults['formTablist'];
            _this._fieldLists = _this.allResults['formFieldlist'];
            var group = {};
            var k = 0;
            for (var i = 0; i < _this._tabLists.length; i++) {
                var index = _this._tabLists[i]['tabOrder'];
                var tab_catId = _this._tabLists[i]['id'];
                if (!_this._mixArray[index]) {
                    _this._mixArray[index] = [];
                }
                group = {
                    tabName: _this._tabLists[i]['tabName'],
                    id: tab_catId,
                    category_name: _this._tabLists[i]['category'],
                    custom_obj: []
                };
                var nested_group = {};
                for (var j = 0; j < _this._fieldLists.length; j++) {
                    var fields_catId = _this._fieldLists[j]['formTabId'];
                    if (tab_catId == fields_catId) {
                        var val_index = _this._fieldLists[j]['fieldName'].toLowerCase();
                        var value = '';
                        if (_this._formData[0]) {
                            value = _this._formData[0][val_index];
                        }
                        nested_group = {
                            defaultValue: _this._fieldLists[j]['defaultValue'],
                            displayName: _this._fieldLists[j]['displayName'],
                            fieldName: _this._fieldLists[j]['fieldName'],
                            fieldOrder: _this._fieldLists[j]['fieldOrder'],
                            fieldType: _this._fieldLists[j]['fieldType'],
                            formId: _this._fieldLists[j]['formId'],
                            formTabId: _this._fieldLists[j]['formTabId'],
                            id: _this._fieldLists[j]['id'],
                            isActive: _this._fieldLists[j]['isActive'],
                            isRequire: _this._fieldLists[j]['isRequire'],
                            isVisibleInList: _this._fieldLists[j]['isVisibleInList'],
                            listOrder: _this._fieldLists[j]['listOrder'],
                            optionValue: _this._fieldLists[j]['optionValue'],
                            placeholder: _this._fieldLists[j]['placeholder'],
                            validator: _this._fieldLists[j]['validator'],
                            value: value,
                        };
                        group['custom_obj'].push(nested_group);
                    }
                }
                _this._mixArray[index].push(group);
            }
            _this.final_array = _this.stripUndefined(_this._mixArray);
            console.log(_this.final_array);
            setTimeout(function () {
                document.getElementById('maintab_1').click();
            }, 500);
        });
    };
    EditComponent.prototype.groupBy = function (collection, property) {
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
    EditComponent.prototype.stripUndefined = function (arr) {
        return arr.reduce(function (result, item) {
            result.push(Array.isArray(item) && !item.length ? this.stripUndefined(item) : item);
            return result;
        }, []);
    };
    return EditComponent;
}());
EditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'app-edit',
        template: __webpack_require__(483),
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */],
        __WEBPACK_IMPORTED_MODULE_2__core_services_general_forms_service__["a" /* GeneralFormsService */]])
], EditComponent);



/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeaveComponent = (function () {
    function LeaveComponent() {
    }
    LeaveComponent.prototype.ngOnInit = function () {
    };
    return LeaveComponent;
}());
LeaveComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'app-leave',
        template: __webpack_require__(488),
    }),
    __metadata("design:paramtypes", [])
], LeaveComponent);



/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_employee_service__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_general_forms_service__ = __webpack_require__(372);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListsComponent = (function () {
    function ListsComponent(_router, _route, _generalFormsService, _employeeService) {
        this._router = _router;
        this._route = _route;
        this._generalFormsService = _generalFormsService;
        this._employeeService = _employeeService;
        this.result_lists = {};
        this._resultsData = [];
        this._fieldLists = [];
        this._results = {};
        this._selectedfieldsHeading = [];
        this._selectedfields = [];
        this._FilteredfieldsHeading = [];
        this._Filteredfields = [];
        this._data = [];
        this.lookup = 1;
    }
    ListsComponent.prototype.ngOnInit = function () {
        this.getListingFields(this.lookup);
    };
    ListsComponent.prototype.getListingFields = function (id) {
        var _this = this;
        this._generalFormsService
            .GetSingle(id)
            .subscribe(function (data) {
            _this._results = data;
            _this._fieldLists = _this._results['formFieldlist'];
            for (var i = 0; i < _this._fieldLists.length; i++) {
                if (_this._fieldLists[i]['isVisibleInList'] == true) {
                    var index = _this._fieldLists[i]['id'];
                    if (!_this._selectedfields[i]) {
                        _this._selectedfields[i] = [];
                    }
                    _this._selectedfieldsHeading.push(_this._fieldLists[i]);
                    _this._selectedfields[i] = _this._fieldLists[i]['fieldName'];
                }
            }
            _this._FilteredfieldsHeading = _this.stripUndefined(_this._selectedfieldsHeading);
            _this._Filteredfields = _this.stripUndefined(_this._selectedfields);
            _this.getAllEmployee();
        });
    };
    ListsComponent.prototype.getAllEmployee = function () {
        var _this = this;
        this._employeeService.GetAll()
            .subscribe(function (data) {
            _this.result_lists = data;
            _this._resultsData = _this.result_lists['list'];
            for (var i = 0; i < _this._resultsData.length; i++) {
                if (!_this._data[i]) {
                    _this._data[i] = [];
                }
                for (var j = 0; j < _this._Filteredfields.length; j++) {
                    var field_name = _this._Filteredfields[j].toLowerCase();
                    var field_value = _this._resultsData[i][field_name];
                    var group = {
                        val: field_value,
                        id: _this._resultsData[i]['employeeId'],
                    };
                    _this._data[i].push(group);
                }
            }
        });
    };
    ListsComponent.prototype.stripUndefined = function (arr) {
        return arr.reduce(function (result, item) {
            result.push(Array.isArray(item) && !item.length ? this.stripUndefined(item) : item);
            return result;
        }, []);
    };
    return ListsComponent;
}());
ListsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'app-lists',
        template: __webpack_require__(489),
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */],
        __WEBPACK_IMPORTED_MODULE_3__core_services_general_forms_service__["a" /* GeneralFormsService */],
        __WEBPACK_IMPORTED_MODULE_2__core_services_employee_service__["a" /* EmployeeService */]])
], ListsComponent);



/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportComponent = (function () {
    function ReportComponent() {
    }
    ReportComponent.prototype.ngOnInit = function () {
    };
    return ReportComponent;
}());
ReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'app-report',
        template: __webpack_require__(492),
    }),
    __metadata("design:paramtypes", [])
], ReportComponent);



/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SalaryComponent = (function () {
    function SalaryComponent() {
    }
    SalaryComponent.prototype.ngOnInit = function () {
    };
    return SalaryComponent;
}());
SalaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'app-salary',
        template: __webpack_require__(494),
    }),
    __metadata("design:paramtypes", [])
], SalaryComponent);



/***/ }),

/***/ 428:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\Projects\\EasyHRMS_Angular\\src\\EasyHRMS_Angular\\angularApp\\app\\layout\\employee\\edit\\bankform\\bankform.component.ts'");

/***/ }),

/***/ 429:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\Projects\\EasyHRMS_Angular\\src\\EasyHRMS_Angular\\angularApp\\app\\layout\\employee\\edit\\contactform\\contactform.component.ts'");

/***/ }),

/***/ 430:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\Projects\\EasyHRMS_Angular\\src\\EasyHRMS_Angular\\angularApp\\app\\layout\\employee\\edit\\experienceform\\experienceform.component.ts'");

/***/ }),

/***/ 431:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\Projects\\EasyHRMS_Angular\\src\\EasyHRMS_Angular\\angularApp\\app\\layout\\employee\\edit\\leaveform\\leaveform.component.ts'");

/***/ }),

/***/ 432:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\Projects\\EasyHRMS_Angular\\src\\EasyHRMS_Angular\\angularApp\\app\\layout\\employee\\edit\\personalform\\personalform.component.ts'");

/***/ }),

/***/ 433:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\Projects\\EasyHRMS_Angular\\src\\EasyHRMS_Angular\\angularApp\\app\\layout\\employee\\edit\\salaryform\\salaryform.component.ts'");

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_edit_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__leave_leave_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__salary_salary_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__report_report_component__ = __webpack_require__(390);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */] },
    { path: 'edit/:formid/', component: __WEBPACK_IMPORTED_MODULE_3__edit_edit_component__["a" /* EditComponent */] },
    { path: 'edit/:formid/:id', component: __WEBPACK_IMPORTED_MODULE_3__edit_edit_component__["a" /* EditComponent */] },
    { path: 'leave', component: __WEBPACK_IMPORTED_MODULE_4__leave_leave_component__["a" /* LeaveComponent */] },
    { path: 'salary', component: __WEBPACK_IMPORTED_MODULE_5__salary_salary_component__["a" /* SalaryComponent */] },
    { path: 'report', component: __WEBPACK_IMPORTED_MODULE_6__report_report_component__["a" /* ReportComponent */] },
];
var EmployeeRoutingModule = (function () {
    function EmployeeRoutingModule() {
    }
    return EmployeeRoutingModule;
}());
EmployeeRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], EmployeeRoutingModule);



/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lists_lists_component__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_edit_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__employee_routing_module__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__leave_leave_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__salary_salary_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__report_report_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__edit_personalform_personalform_component__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__edit_personalform_personalform_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__edit_personalform_personalform_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__edit_contactform_contactform_component__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__edit_contactform_contactform_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__edit_contactform_contactform_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__edit_bankform_bankform_component__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__edit_bankform_bankform_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__edit_bankform_bankform_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__edit_experienceform_experienceform_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__edit_experienceform_experienceform_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__edit_experienceform_experienceform_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__edit_salaryform_salaryform_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__edit_salaryform_salaryform_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__edit_salaryform_salaryform_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__edit_leaveform_leaveform_component__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__edit_leaveform_leaveform_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__edit_leaveform_leaveform_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__report_activeemployee_activeemployee_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__report_workanniversary_workanniversary_component__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__report_birthday_birthday_component__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__core_services_employee_service__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__core_services_general_forms_service__ = __webpack_require__(372);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var EmployeeModule = (function () {
    function EmployeeModule() {
    }
    return EmployeeModule;
}());
EmployeeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__employee_routing_module__["a" /* EmployeeRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared__["c" /* PageHeaderModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__lists_lists_component__["a" /* ListsComponent */],
            __WEBPACK_IMPORTED_MODULE_4__edit_edit_component__["a" /* EditComponent */],
            __WEBPACK_IMPORTED_MODULE_7__leave_leave_component__["a" /* LeaveComponent */],
            __WEBPACK_IMPORTED_MODULE_8__salary_salary_component__["a" /* SalaryComponent */],
            __WEBPACK_IMPORTED_MODULE_9__report_report_component__["a" /* ReportComponent */],
            __WEBPACK_IMPORTED_MODULE_10__edit_personalform_personalform_component__["PersonalformComponent"],
            __WEBPACK_IMPORTED_MODULE_11__edit_contactform_contactform_component__["ContactformComponent"],
            __WEBPACK_IMPORTED_MODULE_12__edit_bankform_bankform_component__["BankformComponent"],
            __WEBPACK_IMPORTED_MODULE_13__edit_experienceform_experienceform_component__["ExperienceformComponent"],
            __WEBPACK_IMPORTED_MODULE_14__edit_salaryform_salaryform_component__["SalaryformComponent"],
            __WEBPACK_IMPORTED_MODULE_15__edit_leaveform_leaveform_component__["LeaveformComponent"],
            __WEBPACK_IMPORTED_MODULE_16__report_activeemployee_activeemployee_component__["a" /* ActiveemployeeComponent */],
            __WEBPACK_IMPORTED_MODULE_17__report_workanniversary_workanniversary_component__["a" /* WorkanniversaryComponent */],
            __WEBPACK_IMPORTED_MODULE_18__report_birthday_birthday_component__["a" /* BirthdayComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_19__core_services_employee_service__["a" /* EmployeeService */],
            __WEBPACK_IMPORTED_MODULE_20__core_services_general_forms_service__["a" /* GeneralFormsService */]
        ]
    })
], EmployeeModule);



/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveemployeeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActiveemployeeComponent = (function () {
    function ActiveemployeeComponent() {
    }
    ActiveemployeeComponent.prototype.ngOnInit = function () {
    };
    return ActiveemployeeComponent;
}());
ActiveemployeeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'app-activeemployee',
        template: __webpack_require__(490),
    }),
    __metadata("design:paramtypes", [])
], ActiveemployeeComponent);



/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BirthdayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BirthdayComponent = (function () {
    function BirthdayComponent() {
    }
    BirthdayComponent.prototype.ngOnInit = function () {
    };
    return BirthdayComponent;
}());
BirthdayComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'app-birthday',
        template: __webpack_require__(491),
    }),
    __metadata("design:paramtypes", [])
], BirthdayComponent);



/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkanniversaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkanniversaryComponent = (function () {
    function WorkanniversaryComponent() {
    }
    WorkanniversaryComponent.prototype.ngOnInit = function () {
    };
    return WorkanniversaryComponent;
}());
WorkanniversaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'app-workanniversary',
        template: __webpack_require__(493),
    }),
    __metadata("design:paramtypes", [])
], WorkanniversaryComponent);



/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralDataModel; });
var GeneralDataModel = (function () {
    function GeneralDataModel() {
    }
    return GeneralDataModel;
}());



/***/ }),

/***/ 483:
/***/ (function(module, exports) {

module.exports = "<div id=\"main-content\" >\r\n    <div class=\"row m-t-10\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"\">\r\n          <ul id=\"myTab2\" class=\"nav nav-tabs nav-dark\">\r\n            <li *ngFor=\"let tab of final_array;let i = index\">\r\n              <a id=\"maintab_{{i+1}}\" href=\"#tab2_{{i+1}}\" data-toggle=\"tab\"> {{tab[0]['tabName']}} </a>\r\n            </li>\r\n          </ul>\r\n          <div id=\"myTabContent\" class=\"tab-content\">\r\n            <div *ngFor=\"let tab of final_array;let i = index\" class=\"tab-pane fade\" id=\"tab2_{{i+1}}\">\r\n              <div class=\"text-right m-b-20\">\r\n\t              <button type=\"button\" class=\"btn btn-sm btn-icon btn-rounded btn-default\"><i class=\"fa fa-question\"></i> </button>\r\n              </div>\r\n              <div class=\"form-horizontal\" *ngFor=\"let category of tab\">\r\n                <div class=\"boder-btm\">\r\n                    <h3 class=\"panel-title\"> {{category.category_name}}  </h3>\r\n                </div>\r\n                <div class=\"m-b-30\">\r\n                    <div class=\"form-group\" *ngFor=\"let fields of category['custom_obj']\">\r\n                      <label class=\"col-sm-2 control-label\"> {{fields.displayName}}  <span class=\"asterisk\">*</span> </label>\r\n                      <div class=\"col-sm-4\">\r\n                        <input type=\"text\" value=\"{{fields.value}}\" parsley-minlength=\"3\" class=\"form-control\" required>\r\n                        <small>Last Employee ID 3</small> \r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ 488:
/***/ (function(module, exports) {

module.exports = "<div id=\"main-content\" >\r\n    <div class=\"row m-t-10\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading text-right\">\r\n            <button type=\"button\" class=\"btn btn-sm btn-icon btn-rounded btn-default\"><i class=\"fa fa-question\"></i> </button>\r\n          </div>\r\n          <div class=\"panel-body\">\r\n           \r\n            <div class=\"row\">\r\n              <div class=\"col-md-3 col-sm-3 col-xs-12 \">\r\n                <label class=\"bold\" >Employee</label>\r\n                <select class=\"form-control\">\r\n                  <option>-- Select --</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-md-3 col-sm-3 col-xs-12 \">\r\n                <label class=\"bold\" >Leave Structure</label>\r\n                <select class=\"form-control\">\r\n                  <option>-- Select --</option>\r\n                </select>\r\n              </div>\r\n              \r\n              \r\n            </div>\r\n            \r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table table-bordered table-striped table-hover\">\r\n                    <thead class=\"no-bd\">\r\n                      <tr>\r\n                        <th><strong>Employee Name</strong> </th>\r\n                        <th><strong>Branch</strong> </th>\r\n                        <th><strong>Department</strong> </th>\r\n                        <th><strong>CL(Monthly)</strong></th>\r\n                        <th><strong>Total Leave(Monthly)</strong></th>\r\n                        <th><strong>Total Leave(Yearly)</strong></th>\r\n                        <th><strong>CF</strong></th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody class=\"no-bd-y\">\r\n                      <tr>\r\n                        <td>Prashant Kapse </td>\r\n                        <td>Kailashnagar</td>\r\n                        <td>Software development (Kailashnagar)</td>\r\n                        <td>1.00</td>\r\n                        <td>1.00</td>\r\n                        <td>12.00</td>\r\n                        <td>0.00</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Ankit Chopada </td>\r\n                        <td>Kailashnagar</td>\r\n                        <td>Software development (Kailashnagar)</td>\r\n                        <td>1.00</td>\r\n                        <td>1.00</td>\r\n                        <td>12.00</td>\r\n                        <td>0.00</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Ankur Patel </td>\r\n                        <td>Kailashnagar</td>\r\n                        <td>Software development (Kailashnagar)</td>\r\n                        <td>1.00</td>\r\n                        <td>1.00</td>\r\n                        <td>12.00</td>\r\n                        <td>0.00</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Arvind Salunke </td>\r\n                        <td>Kailashnagar</td>\r\n                        <td>Software development (Kailashnagar)</td>\r\n                        <td>1.00</td>\r\n                        <td>1.00</td>\r\n                        <td>12.00</td>\r\n                        <td>0.00</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Avani Ghervara </td>\r\n                        <td>Kailashnagar</td>\r\n                        <td>Software development (Kailashnagar)</td>\r\n                        <td>1.00</td>\r\n                        <td>1.00</td>\r\n                        <td>12.00</td>\r\n                        <td>0.00</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Bharat Jariwala </td>\r\n                        <td>Kailashnagar</td>\r\n                        <td>Software development (Kailashnagar)</td>\r\n                        <td>1.00</td>\r\n                        <td>1.00</td>\r\n                        <td>12.00</td>\r\n                        <td>0.00</td>\r\n                      </tr>\r\n                     \r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ 489:
/***/ (function(module, exports) {

module.exports = "<div id=\"main-content\">\r\n    <div class=\"row m-t-10\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading text-right\">\r\n                    <button type=\"button\" class=\"btn btn-sm btn-icon btn-rounded btn-default\"><i class=\"fa fa-question\"></i> </button>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12 col-sm-12 col-xs-12 text-right\">\r\n                            <button class=\"btn btn-primary m-b-10\">Add Employee</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3 col-sm-3 col-xs-12 \">\r\n                            <label class=\"bold\">Employee</label>\r\n                            <select class=\"form-control\" style=\"display: none;\">\r\n                                <option>-- Select --</option>\r\n                            </select><div class=\"btn-group bootstrap-select form-control\"><button type=\"button\" class=\"btn dropdown-toggle selectpicker btn-default\" data-toggle=\"dropdown\" title=\"-- Select --\"><span class=\"filter-option pull-left\">-- Select --</span>&nbsp;<span class=\"caret\"></span></button><div class=\"dropdown-menu open\"><ul class=\"dropdown-menu inner selectpicker\" role=\"menu\"><li rel=\"0\" class=\"selected\"><a tabindex=\"0\" class=\"\" style=\"\"><span class=\"text\">-- Select --</span><i class=\"fa fa-ok icon-ok check-mark\"></i></a></li></ul></div></div>\r\n                        </div>\r\n                        <div class=\"col-md-3 col-sm-3 col-xs-12 \">\r\n                            <label class=\"bold\">Department</label>\r\n                            <select class=\"form-control\" style=\"display: none;\">\r\n                                <option>-- Select --</option>\r\n                            </select><div class=\"btn-group bootstrap-select form-control\"><button type=\"button\" class=\"btn dropdown-toggle selectpicker btn-default\" data-toggle=\"dropdown\" title=\"-- Select --\"><span class=\"filter-option pull-left\">-- Select --</span>&nbsp;<span class=\"caret\"></span></button><div class=\"dropdown-menu open\"><ul class=\"dropdown-menu inner selectpicker\" role=\"menu\"><li rel=\"0\" class=\"selected\"><a tabindex=\"0\" class=\"\" style=\"\"><span class=\"text\">-- Select --</span><i class=\"fa fa-ok icon-ok check-mark\"></i></a></li></ul></div></div>\r\n                        </div>\r\n                        <div class=\"col-md-3 col-sm-3 col-xs-12 \">\r\n                            <label class=\"bold\">Status</label>\r\n                            <select class=\"form-control\" style=\"display: none;\">\r\n                                <option>-- Select --</option>\r\n                            </select><div class=\"btn-group bootstrap-select form-control\"><button type=\"button\" class=\"btn dropdown-toggle selectpicker btn-default\" data-toggle=\"dropdown\" title=\"-- Select --\"><span class=\"filter-option pull-left\">-- Select --</span>&nbsp;<span class=\"caret\"></span></button><div class=\"dropdown-menu open\"><ul class=\"dropdown-menu inner selectpicker\" role=\"menu\"><li rel=\"0\" class=\"selected\"><a tabindex=\"0\" class=\"\" style=\"\"><span class=\"text\">-- Select --</span><i class=\"fa fa-ok icon-ok check-mark\"></i></a></li></ul></div></div>\r\n                        </div>\r\n                        <div class=\"col-md-3 col-sm-3 col-xs-12 \">\r\n                            <label class=\"bold\">Employee Statistics</label>\r\n                            <select class=\"form-control\" style=\"display: none;\">\r\n                                <option>-- Select --</option>\r\n                            </select><div class=\"btn-group bootstrap-select form-control\"><button type=\"button\" class=\"btn dropdown-toggle selectpicker btn-default\" data-toggle=\"dropdown\" title=\"-- Select --\"><span class=\"filter-option pull-left\">-- Select --</span>&nbsp;<span class=\"caret\"></span></button><div class=\"dropdown-menu open\"><ul class=\"dropdown-menu inner selectpicker\" role=\"menu\"><li rel=\"0\" class=\"selected\"><a tabindex=\"0\" class=\"\" style=\"\"><span class=\"text\">-- Select --</span><i class=\"fa fa-ok icon-ok check-mark\"></i></a></li></ul></div></div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                            <div class=\"table-responsive\">\r\n                                <table class=\"table table-bordered table-striped table-hover\">\r\n                                    <thead class=\"no-bd\">\r\n                                        <tr>\r\n                                            <th *ngFor=\"let fields of _FilteredfieldsHeading\"><strong> {{fields.displayName}} </strong> </th>\r\n                                            <th><strong>Action</strong></th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody class=\"no-bd-y\">\r\n                                        <tr *ngFor=\"let rec of _data;let i = index\">\r\n                                            <td *ngFor=\"let r of rec\"> {{r.val}} </td>\r\n                                            <td>\r\n                                                <button [routerLink]=\"['/employee/edit/' + lookup + '/' + rec[0]['id'] ]\" type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n                                                <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete\"><i class=\"fa fa-remove\"></i></button>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 490:
/***/ (function(module, exports) {

module.exports = "<div class=\"text-right m-b-20\">\r\n                <div class=\"btn-group text-left\">\r\n                                        <button class=\"btn btn-success dropdown-toggle\" data-toggle=\"dropdown\">Export <i class=\"fa fa-angle-down\"></i>\r\n                                        </button>\r\n                                        <ul class=\"dropdown-menu pull-right\">\r\n                                            <li><a href=\"#\">Customize Columns</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\">Print</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\">Export to PDF</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\">Export to XLS</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\">Export to CSV</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\">Export to DOC</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                \r\n                <button type=\"button\" class=\"btn btn-sm btn-icon btn-rounded btn-default\"><i class=\"fa fa-question\"></i></button>\r\n              </div>\r\n              <div class=\"form-horizontal\">\r\n                \r\n                <div class=\"m-b-10\">\r\n                  <div class=\"row row-5px\">\r\n              <div class=\"col-md-2 col-sm-2 col-xs-12 col-5px\">\r\n\r\n                <label class=\"bold\" >Branch</label>\r\n                <select class=\"form-control\">\r\n                  <option>-- Select --</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-md-2 col-sm-2 col-xs-12 col-5px\">\r\n                <label class=\"bold\" >Department</label>\r\n                <select class=\"form-control\">\r\n                  <option>-- Select --</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-md-3 col-sm-3 col-xs-12 col-5px\">\r\n                <label class=\"bold\" >Job Profile</label>\r\n                <select class=\"form-control\">\r\n                  <option>-- Select --</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-md-2 col-sm-2 col-xs-12 col-5px\">\r\n                <label class=\"bold\" >User Role</label>\r\n                <select class=\"form-control\">\r\n                  <option>-- Select --</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-md-3 col-sm-3 col-xs-12 col-5px\">                \r\n                <button class=\"btn btn-primary m-t-25\" >Generate Report</button>\r\n              </div>\r\n            </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                 <div class=\"table-responsive\">\r\n                  <table class=\"table table-bordered table-striped table-hover\">\r\n                    <thead class=\"no-bd\">\r\n                      <tr>\r\n                        <th><strong>First Name</strong> </th>\r\n                        <th><strong>Last Name</strong> </th>\r\n                        <th><strong>Job Title</strong> </th>\r\n                        <th><strong>Address</strong> </th>\r\n                        <th><strong>Gender</strong> </th>\r\n                        <th><strong>Birth Date</strong> </th>\r\n                        <th><strong>Phone</strong> </th>\r\n                        <th><strong>Role Name</strong> </th>\r\n                        <th><strong>Email</strong> </th>\r\n                        <th><strong>Status</strong> </th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody class=\"no-bd-y\">\r\n                      <tr>\r\n                        <td>Nikunj</td>                        \r\n                        <td>Savani </td>\r\n                        <td>ASP .NET Developer </td>\r\n                        <td>A-201 Rivera apartment, near CNG pump, sudama chowk, mota varachha</td>\r\n                        <td>Male</td>\r\n                        <td>5/4/1988 12:00:00 AM</td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td>nikunj.savani@krtya.com</td>\r\n                        <td>Active</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Bhavesh</td>                        \r\n                        <td>Patel </td>\r\n                        <td>ASP .NET Developer </td>\r\n                        <td>A-201 Rivera apartment, near CNG pump, sudama chowk, mota varachha</td>\r\n                        <td>Male</td>\r\n                        <td>5/4/1988 12:00:00 AM</td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td>nikunj.savani@krtya.com</td>\r\n                        <td>Active</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Manish</td>                        \r\n                        <td>Parakhiya </td>\r\n                        <td>ASP .NET Developer </td>\r\n                        <td>A-201 Rivera apartment, near CNG pump, sudama chowk, mota varachha</td>\r\n                        <td>Male</td>\r\n                        <td>5/4/1988 12:00:00 AM</td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td>nikunj.savani@krtya.com</td>\r\n                        <td>Active</td>\r\n                      </tr>\r\n                     \r\n                      \r\n                    </tbody>\r\n                  </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n                 \r\n              </div>"

/***/ }),

/***/ 491:
/***/ (function(module, exports) {

module.exports = "<div class=\"text-right m-b-20\">\r\n                <div class=\"btn-group text-left\">\r\n                                        <button class=\"btn btn-success dropdown-toggle\" data-toggle=\"dropdown\">Export <i class=\"fa fa-angle-down\"></i>\r\n                                        </button>\r\n                                        <ul class=\"dropdown-menu pull-right\">\r\n                                            <li><a href=\"#\">Customize Columns</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\">Print</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\">Export to PDF</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\">Export to XLS</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\">Export to CSV</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\">Export to DOC</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                \r\n                <button type=\"button\" class=\"btn btn-sm btn-icon btn-rounded btn-default\"><i class=\"fa fa-question\"></i></button>\r\n              </div>\r\n               <div class=\"form-horizontal\">\r\n                \r\n                <div class=\"m-b-10\">\r\n                  <div class=\"row row-5px\">\r\n              <div class=\"col-md-2 col-sm-2 col-xs-12 col-5px\">\r\n                <label class=\"bold\" >Branch</label>\r\n                <select class=\"form-control\">\r\n                  <option>-- Select --</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-md-2 col-sm-2 col-xs-12 col-5px\">\r\n                <label class=\"bold\" >Department</label>\r\n                <select class=\"form-control\">\r\n                  <option>-- Select --</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-md-2 col-sm-2 col-xs-12 col-5px\">\r\n                <label class=\"bold\" >Job Profile</label>\r\n                <select class=\"form-control\">\r\n                  <option>-- Select --</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-md-2 col-sm-2 col-xs-12 col-5px\">\r\n                <label class=\"bold\" >User Role</label>\r\n                <select class=\"form-control\">\r\n                  <option>-- Select --</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-md-2 col-sm-2 col-xs-12 col-5px\">\r\n                <label class=\"bold\" >Month</label>\r\n                <select class=\"form-control\">\r\n                  <option>-- Select --</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-md-2 col-sm-2 col-xs-12 col-5px\">                \r\n                <button class=\"btn btn-primary m-t-25\" >Generate Report</button>\r\n              </div>\r\n            </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                 <div class=\"table-responsive\">\r\n                  <table class=\"table table-bordered table-striped table-hover\">\r\n                    <thead class=\"no-bd\">\r\n                      <tr>\r\n                        <th><strong>First Name</strong> </th>\r\n                        <th><strong>Last Name</strong> </th>\r\n                        <th><strong>Job Title</strong> </th>\r\n                        <th><strong>Address</strong> </th>\r\n                        <th><strong>Gender</strong> </th>\r\n                        <th><strong>Birth Date</strong> </th>                                                                \r\n                      </tr>\r\n                    </thead>\r\n                    <tbody class=\"no-bd-y\">\r\n                      <tr>\r\n                        <td>Nikunj</td>                        \r\n                        <td>Savani </td>\r\n                        <td>ASP .NET Developer </td>\r\n                        <td>A-201 Rivera apartment, near CNG pump, sudama chowk, mota varachha</td>\r\n                        <td>Male</td>\r\n                        <td>5/4/1988 12:00:00 AM</td>                        \r\n                      </tr>\r\n                      <tr>\r\n                        <td>Bhavesh</td>                        \r\n                        <td>Patel </td>\r\n                        <td>ASP .NET Developer </td>\r\n                        <td>A-201 Rivera apartment, near CNG pump, sudama chowk, mota varachha</td>\r\n                        <td>Male</td>\r\n                        <td>5/4/1988 12:00:00 AM</td>\r\n                        \r\n                      </tr>\r\n                      <tr>\r\n                        <td>Manish</td>                        \r\n                        <td>Parakhiya </td>\r\n                        <td>ASP .NET Developer </td>\r\n                        <td>A-201 Rivera apartment, near CNG pump, sudama chowk, mota varachha</td>\r\n                        <td>Male</td>\r\n                        <td>5/4/1988 12:00:00 AM</td>\r\n                        \r\n                      </tr>\r\n                     \r\n                      \r\n                    </tbody>\r\n                  </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n                 \r\n              </div>"

/***/ }),

/***/ 492:
/***/ (function(module, exports) {

module.exports = "<div id=\"main-content\" >\r\n    <div class=\"row m-t-10\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"\">\r\n          <ul id=\"myTab2\" class=\"nav nav-tabs nav-dark\">\r\n            <li class=\"active\"><a href=\"#tab2_1\" data-toggle=\"tab\">Active Employees</a></li>\r\n            <li class=\"\"><a href=\"#tab2_2\" data-toggle=\"tab\">Work Anniversary</a></li>\r\n            <li class=\"\"><a href=\"#tab2_3\" data-toggle=\"tab\">Birthday </a></li>\r\n            \r\n          </ul>\r\n          <div id=\"myTabContent\" class=\"tab-content\">\r\n           \r\n            <div class=\"tab-pane fade active in\" id=\"tab2_1\">\r\n              <app-activeemployee></app-activeemployee>\r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"tab2_2\">\r\n              <app-workanniversary></app-workanniversary>\r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"tab2_3\">\r\n               <app-birthday></app-birthday>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ 493:
/***/ (function(module, exports) {

module.exports = "<div class=\"text-right m-b-20\">\r\n                <div class=\"btn-group text-left\">\r\n                                        <button class=\"btn btn-success dropdown-toggle\" data-toggle=\"dropdown\">Export <i class=\"fa fa-angle-down\"></i>\r\n                                        </button>\r\n                                        <ul class=\"dropdown-menu pull-right\">\r\n                                            <li><a href=\"#\">Customize Columns</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\">Print</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\">Export to PDF</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\">Export to XLS</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\">Export to CSV</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\">Export to DOC</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                \r\n                <button type=\"button\" class=\"btn btn-sm btn-icon btn-rounded btn-default\"><i class=\"fa fa-question\"></i></button>\r\n              </div>\r\n              <div class=\"form-horizontal\">\r\n                \r\n                <div class=\"m-b-10\">\r\n                  <div class=\"row row-5px\">\r\n              <div class=\"col-md-2 col-sm-2 col-xs-12 col-5px\">\r\n                <label class=\"bold\" >Branch</label>\r\n                <select class=\"form-control\">\r\n                  <option>-- Select --</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-md-2 col-sm-2 col-xs-12 col-5px\">\r\n                <label class=\"bold\" >Department</label>\r\n                <select class=\"form-control\">\r\n                  <option>-- Select --</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-md-2 col-sm-2 col-xs-12 col-5px\">\r\n                <label class=\"bold\" >Job Profile</label>\r\n                <select class=\"form-control\">\r\n                  <option>-- Select --</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-md-2 col-sm-2 col-xs-12 col-5px\">\r\n                <label class=\"bold\" >User Role</label>\r\n                <select class=\"form-control\">\r\n                  <option>-- Select --</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-md-2 col-sm-2 col-xs-12 col-5px\">\r\n                <label class=\"bold\" >Month</label>\r\n                <select class=\"form-control\">\r\n                  <option>-- Select --</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-md-2 col-sm-2 col-xs-12 col-5px\">                \r\n                <button class=\"btn btn-primary m-t-25\" >Generate Report</button>\r\n              </div>\r\n            </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                 <div class=\"table-responsive\">\r\n                  <table class=\"table table-bordered table-striped table-hover\">\r\n                    <thead class=\"no-bd\">\r\n                      <tr>\r\n                        <th><strong>First Name</strong> </th>\r\n                        <th><strong>Last Name</strong> </th>\r\n                        <th><strong>Job Title</strong> </th>\r\n                        <th><strong>Address</strong> </th>\r\n                        <th><strong>Gender</strong> </th>\r\n                        <th><strong>Joining Date</strong> </th>                                                                \r\n                      </tr>\r\n                    </thead>\r\n                    <tbody class=\"no-bd-y\">\r\n                      <tr>\r\n                        <td>Nikunj</td>                        \r\n                        <td>Savani </td>\r\n                        <td>ASP .NET Developer </td>\r\n                        <td>A-201 Rivera apartment, near CNG pump, sudama chowk, mota varachha</td>\r\n                        <td>Male</td>\r\n                        <td>5/4/1988 12:00:00 AM</td>                        \r\n                      </tr>\r\n                      <tr>\r\n                        <td>Bhavesh</td>                        \r\n                        <td>Patel </td>\r\n                        <td>ASP .NET Developer </td>\r\n                        <td>A-201 Rivera apartment, near CNG pump, sudama chowk, mota varachha</td>\r\n                        <td>Male</td>\r\n                        <td>5/4/1988 12:00:00 AM</td>\r\n                        \r\n                      </tr>\r\n                      <tr>\r\n                        <td>Manish</td>                        \r\n                        <td>Parakhiya </td>\r\n                        <td>ASP .NET Developer </td>\r\n                        <td>A-201 Rivera apartment, near CNG pump, sudama chowk, mota varachha</td>\r\n                        <td>Male</td>\r\n                        <td>5/4/1988 12:00:00 AM</td>\r\n                        \r\n                      </tr>\r\n                     \r\n                      \r\n                    </tbody>\r\n                  </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n                 \r\n              </div>"

/***/ }),

/***/ 494:
/***/ (function(module, exports) {

module.exports = "<div id=\"main-content\" >\r\n    <div class=\"row m-t-10\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading text-right\">\r\n            <button type=\"button\" class=\"btn btn-sm btn-icon btn-rounded btn-default\"><i class=\"fa fa-question\"></i> </button>\r\n          </div>\r\n          <div class=\"panel-body\">\r\n           \r\n            <div class=\"row\">\r\n              <div class=\"col-md-3 col-sm-3 col-xs-12 \">\r\n                <label class=\"bold\" >Employee</label>\r\n                <select class=\"form-control\">\r\n                  <option>-- Select --</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-md-3 col-sm-3 col-xs-12 \">\r\n                <label class=\"bold\" >Salary Structure</label>\r\n                <select class=\"form-control\">\r\n                  <option>-- Select --</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-md-3 col-sm-3 col-xs-12 \">\r\n                <label class=\"bold\" >Department</label>\r\n                <select class=\"form-control\">\r\n                  <option>-- Select --</option>\r\n                </select>\r\n              </div>\r\n              \r\n              \r\n            </div>\r\n            \r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table table-bordered table-striped table-hover\">\r\n                    <thead class=\"no-bd\">\r\n                      <tr>\r\n                        <th><strong>Employee Name</strong> </th>\r\n                        <th><strong>Joinig Date</strong> </th>\r\n                        <th><strong>Department</strong> </th>\r\n                        <th><strong>Position</strong></th>\r\n                        <th><strong>CTC</strong></th>\r\n                        <th><strong>Professional Tax</strong></th>\r\n                        <th><strong>Action</strong></th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody class=\"no-bd-y\">\r\n                      <tr>\r\n                        <td>Prashant Kapse </td>\r\n                        <td>2/6/2017 12:00:00 AM</td>\r\n                        <td>Software development (Kailashnagar)</td>\r\n                        <td>ASP.NET Developer</td>                       \r\n                        <td>20000.00</td>\r\n                        <td>200.00</td>\r\n                        <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\" data-toggle=\"modal\" data-target=\"#modal-basic\"><i class=\"fa fa-pencil\"></i></button>\r\n                        <div class=\"modal fade text-left\" id=\"modal-basic\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n                    <div class=\"modal-dialog modal-lg\">\r\n                      <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n                          <h4 class=\"modal-title\" id=\"myModalLabel\"><strong>Employee Salary</strong> </h4>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                          <div class=\"form-horizontal\">\r\n                \r\n                <div class=\"m-b-30\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"col-sm-2 control-label\">Department </label>\r\n                    <div class=\"col-sm-3\">\r\n                      <select class=\"form-control\">\r\n                        <option>---Select---</option>\r\n                      </select>\r\n                    </div>\r\n                    <label class=\"col-sm-2 control-label\">Salary Structure  </label>\r\n                    <div class=\"col-sm-3\">\r\n                      <select class=\"form-control\">\r\n                        <option>---Select---</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                <div class=\"col-md-12 col-sm-12 col-xs-12 table-responsive\">\r\n                  <table class=\"table table-bordered table-striped table-hover\">\r\n                    <thead class=\"no-bd\">\r\n                      <tr>\r\n                        <th><strong>Category Name</strong> </th>\r\n                        <th><strong>Category wise Amount</strong> </th>\r\n                        <th><strong>Percentage</strong> </th>\r\n                        <th><strong>Percentage Of</strong> </th>\r\n                        <th><strong>Duration</strong> </th>\r\n                        <th><strong>Deduction</strong> </th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody class=\"no-bd-y\">\r\n                      <tr>\r\n                        <td>CTC</td>\r\n                        <td>\r\n                        \t<div class=\"form-inline\">\r\n\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t  <div class=\"input-group-addon\">₹</div>\r\n\t\t\t\t\t\t\t\t  <input type=\"text\" class=\"form-control\"  placeholder=\"Amount\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t</div>\r\n                        </td>\r\n                        <td> </td>\r\n                        <td> </td>\r\n                        <td>Monthly</td>\r\n                        <td></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Professional tax</td>\r\n                        <td>\r\n                        \t<div >\r\n\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t  <div class=\"input-group-addon\">₹</div>\r\n\t\t\t\t\t\t\t\t  <input type=\"text\" class=\"form-control\"  placeholder=\"Amount\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t</div>\r\n                        </td>\r\n                        <td> </td>\r\n                        <td> </td>\r\n                        <td>Monthly</td>\r\n                        <td><i class=\"fa fa-check\"></i></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Gross Salary</td>\r\n                        <td>\r\n                        \t₹ 14900\r\n                        </td>\r\n                        <td> </td>\r\n                        <td> </td>\r\n                        <td></td>\r\n                        <td></td>\r\n                      </tr>\r\n                      \r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n                 \r\n              </div>\r\n                        </div>\r\n                        <div class=\"modal-footer\">\r\n                          <button type=\"button\" class=\"btn btn-primary\" onclick=\"javascript:$('#form1').parsley('validate');\">Save</button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                            </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Prashant Kapse </td>\r\n                        <td>2/6/2017 12:00:00 AM</td>\r\n                        <td>Software development (Kailashnagar)</td>\r\n                        <td>ASP.NET Developer</td>                       \r\n                        <td>20000.00</td>\r\n                        <td>200.00</td>\r\n                        <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>  </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Prashant Kapse </td>\r\n                        <td>2/6/2017 12:00:00 AM</td>\r\n                        <td>Software development (Kailashnagar)</td>\r\n                        <td>ASP.NET Developer</td>                       \r\n                        <td>20000.00</td>\r\n                        <td>200.00</td>\r\n                        <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>  </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Prashant Kapse </td>\r\n                        <td>2/6/2017 12:00:00 AM</td>\r\n                        <td>Software development (Kailashnagar)</td>\r\n                        <td>ASP.NET Developer</td>                       \r\n                        <td>20000.00</td>\r\n                        <td>200.00</td>\r\n                        <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>  </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Prashant Kapse </td>\r\n                        <td>2/6/2017 12:00:00 AM</td>\r\n                        <td>Software development (Kailashnagar)</td>\r\n                        <td>ASP.NET Developer</td>                       \r\n                        <td>20000.00</td>\r\n                        <td>200.00</td>\r\n                        <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>  </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Prashant Kapse </td>\r\n                        <td>2/6/2017 12:00:00 AM</td>\r\n                        <td>Software development (Kailashnagar)</td>\r\n                        <td>ASP.NET Developer</td>                       \r\n                        <td>20000.00</td>\r\n                        <td>200.00</td>\r\n                        <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>  </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Prashant Kapse </td>\r\n                        <td>2/6/2017 12:00:00 AM</td>\r\n                        <td>Software development (Kailashnagar)</td>\r\n                        <td>ASP.NET Developer</td>                       \r\n                        <td>20000.00</td>\r\n                        <td>200.00</td>\r\n                        <td><button type=\"button\" class=\"btn btn-sm btn-warning\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>  </td>\r\n                      </tr>\r\n                      \r\n                     \r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ })

});
//# sourceMappingURL=8.chunk.js.map