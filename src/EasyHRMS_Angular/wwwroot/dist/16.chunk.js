webpackJsonp([16],{

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_constants__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyLeaveService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyLeaveService = (function () {
    function MyLeaveService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.GetAllEmployeeLeave = function () {
            return _this.http
                .get(_this.actionUrl + 'EmployeeLeave/GetAllEmployeeLeave')
                .map(function (res) { return res.json(); });
        };
        this.DeleteEmployeeLeave = function (id) {
            console.log(id);
            return _this.http
                .get(_this.actionUrl + 'EmployeeLeave/DeleteEmployeeLeaveByID/' + id)
                .map(function (res) { return res.json(); });
        };
        this.actionUrl = configuration.Server + 'api/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    return MyLeaveService;
}());
MyLeaveService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_0__app_constants__["a" /* Configuration */]])
], MyLeaveService);



/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_selfservice_myleaves_service__ = __webpack_require__(375);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = (function () {
    function ListComponent(_leaveService) {
        this._leaveService = _leaveService;
        this._employeeLeaveList = [];
        this._employeeLeaveListGroupByMonth = [];
        this._employeeLeaveDetailList = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.GetAllEmployeeLeave();
    };
    ListComponent.prototype.GetAllEmployeeLeave = function () {
        var _this = this;
        this._leaveService
            .GetAllEmployeeLeave()
            .subscribe(function (data) {
            _this._employeeLeaveList = data.list;
            _this._employeeLeaveListGroupByMonth = _this.groupBy(_this._employeeLeaveList, function (item) {
                return new Date(item.fromDate).getMonth();
            });
        });
    };
    ListComponent.prototype.getTotalLeave = function (leavelist) {
        var leave = 0;
        leavelist.forEach(function (item, index) {
            if (item.fromDate != null && item.toDate != null) {
                if (item.fromDate < item.toDate) {
                    leave += (new Date(item.toDate).getDate() - new Date(item.fromDate).getDate());
                    leave += 1;
                }
                else if (item.fromDate == item.toDate) {
                    leave += 1;
                }
            }
        });
        return leave;
    };
    ListComponent.prototype.DeleteLeave = function (id) {
        this._leaveService
            .DeleteEmployeeLeave(id)
            .subscribe(function (data) {
        });
    };
    ListComponent.prototype.groupBy = function (array, f) {
        var groups = {};
        array.forEach(function (o) {
            var group = JSON.stringify(f(o));
            groups[group] = groups[group] || [];
            groups[group].push(o);
        });
        return Object.keys(groups).map(function (group) {
            return groups[group];
        });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-list',
        template: __webpack_require__(527),
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_selfservice_myleaves_service__["a" /* MyLeaveService */]])
], ListComponent);



/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyleavesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyleavesComponent = (function () {
    function MyleavesComponent() {
    }
    MyleavesComponent.prototype.ngOnInit = function () {
    };
    return MyleavesComponent;
}());
MyleavesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-myleaves',
        template: __webpack_require__(528),
    }),
    __metadata("design:paramtypes", [])
], MyleavesComponent);



/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_list_list_component__ = __webpack_require__(421);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyLeavesRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_list_list_component__["a" /* ListComponent */] },
];
var MyLeavesRoutingModule = (function () {
    function MyLeavesRoutingModule() {
    }
    return MyLeavesRoutingModule;
}());
MyLeavesRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], MyLeavesRoutingModule);



/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myleaves_routing_module__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_myleaves_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_list_list_component__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_services_selfservice_myleaves_service__ = __webpack_require__(375);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyleavesModule", function() { return MyleavesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MyleavesModule = (function () {
    function MyleavesModule() {
    }
    return MyleavesModule;
}());
MyleavesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__myleaves_routing_module__["a" /* MyLeavesRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__components_myleaves_component__["a" /* MyleavesComponent */], __WEBPACK_IMPORTED_MODULE_4__components_list_list_component__["a" /* ListComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__core_services_selfservice_myleaves_service__["a" /* MyLeaveService */]]
    })
], MyleavesModule);



/***/ }),

/***/ 527:
/***/ (function(module, exports) {

module.exports = "<!--<p>\n   Leaves list works!\n</p>-->\n\n<div id=\"main-content\">\r\n\r\n    <div class=\"row m-t-10\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading text-right\">\r\n\r\n\r\n                    <button type=\"button\" class=\"btn btn-sm btn-icon btn-rounded btn-default\">\r\n                        <i class=\"fa fa-question\"></i>\r\n                    </button>\r\n\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-sm-6 col-xs-6\">\r\n                            <h3 class=\"panel-title m-t-20\">New Leave Request</h3>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-sm-6 col-xs-6 text-right\">\r\n                            <button class=\"btn btn-primary m-b-10\" data-toggle=\"modal\" data-target=\"#modal-basic\">New Leave</button>\r\n                            <div class=\"modal fade text-left\" id=\"modal-basic\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n                                <div class=\"modal-dialog\">\r\n                                    <div class=\"modal-content\">\r\n                                        <div class=\"modal-header\">\r\n                                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n                                            <h4 class=\"modal-title\" id=\"myModalLabel\"><strong>New Leave Request</strong> </h4>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                            <form class=\"form-horizontal\" id=\"form1\" parsley-validate>\r\n                                                <div class=\"form-group\">\r\n                                                    <label class=\"col-sm-4 control-label\">\r\n                                                        From  <span class=\"asterisk\">*</span>\r\n                                                    </label>\r\n                                                    <div class=\"col-sm-8\">\r\n                                                        <input type=\"text\" class=\"form-control\" required>\r\n                                                    </div>\r\n\r\n                                                </div>\r\n                                                <div class=\"form-group\">\r\n                                                    <label class=\"col-sm-4 control-label\">\r\n                                                        To  <span class=\"asterisk\">*</span>\r\n                                                    </label>\r\n                                                    <div class=\"col-sm-8\">\r\n                                                        <input type=\"text\" class=\"form-control\" required>\r\n                                                    </div>\r\n\r\n                                                </div>\r\n                                                <div class=\"form-group\">\r\n                                                    <label class=\"col-sm-4 control-label\">\r\n                                                        Reason <span class=\"asterisk\">*</span>\r\n                                                    </label>\r\n                                                    <div class=\"col-sm-8\">\r\n                                                        <textarea rows=\"5\" class=\"form-control valid\" placeholder=\"\" parsley-minwords=\"3\" required></textarea>\r\n                                                    </div>\r\n                                                </div>\r\n\r\n\r\n\r\n                                            </form>\r\n                                        </div>\r\n                                        <div class=\"modal-footer\">\r\n                                            <button type=\"button\" class=\"btn btn-primary\" onclick=\"javascript:$('#form1').parsley('validate');\">Save</button>\r\n\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12 col-sm-12 col-xs-12 table-responsive\">\r\n                            <table class=\"table table-bordered table-striped table-hover\">\r\n                                <thead class=\"no-bd\">\r\n                                    <tr>\r\n                                        <th>\r\n                                            <strong>Date</strong>\r\n                                        </th>\r\n                                        <th>\r\n                                            <strong>Leave Reason</strong>\r\n                                        </th>\r\n                                        <th>\r\n                                            <strong>Status</strong>\r\n                                        </th>\r\n                                        <th>\r\n                                            <strong>Leave cancel</strong>\r\n                                        </th>\r\n\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody class=\"no-bd-y\">\r\n                                    <tr *ngFor=\"let rec of _employeeLeaveList;let i = index\">\r\n                                        <td>{{rec.fromDate| date: 'dd/MM/yyyy'}} to {{rec.toDate| date: 'dd/MM/yyyy'}}</td>\r\n                                        <td>{{rec.leaveReason}}</td>\r\n                                        <td>{{rec.status}}</td>\r\n                                        <td><button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"DeleteLeave(rec.employeeLeaveId)\"><i class=\"fa fa-remove\"></i></button></td>\r\n                                    </tr>\r\n                                    <!--<tr>\r\n                                        <td>12/02/17 to 12/02/17 </td>\r\n                                        <td>Personal</td>\r\n                                        <td>In Progress</td>\r\n                                        <td><button type=\"button\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-remove\"></i></button></td>\r\n                                    </tr>-->\r\n\r\n\r\n\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                    <h3 class=\"panel-title\">Leave Details</h3>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12 col-sm-12 col-xs-12 table-responsive\">\r\n                            <table class=\"table table-bordered table-striped table-hover\">\r\n                                <thead class=\"no-bd\">\r\n                                    <tr>\r\n                                        <th>\r\n                                            <strong>Month</strong>\r\n                                        </th>\r\n                                        <th>\r\n                                            <strong>Total Leave</strong>\r\n                                        </th>\r\n                                        <th>\r\n                                            <strong>Carry Forward</strong>\r\n                                        </th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody class=\"no-bd-y\">\r\n                                    <tr  *ngFor=\"let rec of _employeeLeaveListGroupByMonth;let i = index\">\r\n\r\n                                        <td>{{rec[0].fromDate| date: 'MMMM,y'}}</td>\r\n                                        <td>{{getTotalLeave(rec)}}</td>\r\n                                        <td>4.50</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>September, 2015</td>\r\n                                        <td>3.00</td>\r\n                                        <td>4.50</td>\r\n                                    </tr>\r\n                                    <!--<tr>\r\n                                        <td>October, 2015</td>\r\n                                        <td>1.00</td>\r\n                                        <td>4.50</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>November, 2015</td>\r\n                                        <td>00.00</td>\r\n                                        <td>4.50</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>December, 2015</td>\r\n                                        <td>00.00</td>\r\n                                        <td>4.50</td>\r\n                                    </tr>-->\r\n\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n<!-- END MAIN CONTENT -->\n"

/***/ }),

/***/ 528:
/***/ (function(module, exports) {

module.exports = "<p>\n  myleaves works!\n</p>\n"

/***/ })

});
//# sourceMappingURL=16.chunk.js.map