(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/addtask/addtask.component.css":
/*!***********************************************!*\
  !*** ./src/app/addtask/addtask.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=range] {\r\ndisplay: block; \r\n width: 33%; \r\n}\r\n.selected-value {\r\n    float: right;\r\n}"

/***/ }),

/***/ "./src/app/addtask/addtask.component.html":
/*!************************************************!*\
  !*** ./src/app/addtask/addtask.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n        <div class=\"col-sm-6 col-sm-offset-3\">\n  <form class=\"form-horizontal\" #taskForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"task\" class=\"control-label col-sm-3\" >Task</label>\n      <input class=\"col-sm-9\" type=\"text\" [(ngModel)]=\"task.task\"  name=\"task\" required minlength=\"4\" >\n    </div>\n    <div class=\"form-group\">\n        <label for=\"priority\"  class=\"control-label col-sm-3\" >Priority</label>\n        <input class=\"col-sm-9\" type=\"range\" [(ngModel)]=\"task.priority\" title=\"{{task.priority}}\" name=\"priority\" id=\"priority\" required>\n        <span class=\"selected-value\">{{task.priority}}</span>\n       \n    </div>\n    <div class=\"form-group\">\n      <label for=\"parentTask\" class=\"control-label col-sm-3\" >Parent Task</label>\n      <input class=\"col-sm-9\" type=\"text\" [(ngModel)]=\"task.parentTask\"   name=\"parentTask\" id=\"parentTask\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"startDate\" class=\"control-label col-sm-3\" >Start Date</label>\n            <input class=\"col-sm-9\" type=\"date\" [(ngModel)]=\"task.startDate\"   name=\"startDate\" id=\"startDate\" required>\n   </div>\n   <div class=\"form-group\">\n      <label for=\"endDate\" class=\"control-label col-sm-3\" >End Date</label>\n      <input class=\"col-sm-9\" type=\"date\" [(ngModel)]=\"task.endDate\"   name=\"endDate\" id=\"endDate\" (blur)=\"compareTwoDates()\" required>\n      <div *ngIf=\"error.isError\" class=\"alert alert-danger col-sm-offset-3\">\n        {{ error.errorMessage }}\n      </div>\n    </div>  \n    <div class=\"form-group\">\n      <div class=\"col-sm-9 col-sm-offset-3 mt-3\">\n        <button type=\"submit\" class=\"btn btn-secondary\" (click)=\"addTask(taskForm.value)\" [disabled]=\"taskForm.invalid\">Add Task</button>&nbsp;&nbsp;\n        <button type=\"reset\" class=\"btn btn-secondary\">Reset</button>\n      </div>\n    </div>\n  </form>\n  </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/addtask/addtask.component.ts":
/*!**********************************************!*\
  !*** ./src/app/addtask/addtask.component.ts ***!
  \**********************************************/
/*! exports provided: AddtaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtaskComponent", function() { return AddtaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/app/addtask/task.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddtaskComponent = /** @class */ (function () {
    function AddtaskComponent(router, taskervice) {
        this.router = router;
        this.taskervice = taskervice;
        this.task = new _task__WEBPACK_IMPORTED_MODULE_2__["Task"]();
        this.error = { isError: false, errorMessage: '' };
    }
    AddtaskComponent.prototype.compareTwoDates = function () {
        this.error = { isError: false, errorMessage: '' };
        if (new Date(this.task.endDate) < new Date(this.task.startDate)) {
            this.error = { isError: true, errorMessage: 'End Date can not before start date' };
        }
    };
    AddtaskComponent.prototype.addTask = function () {
        console.log(this.task.task);
        this.task.status = "active";
        console.log(this.task.status);
        this.taskervice.addTask(this.task)
            .subscribe(function (data) {
        });
        this.router.navigate(['/viewtask']);
    };
    ;
    /*addTask(task, parentTask,startDate, endDate) {
      this.taskervice.addTask(task,parentTask,startDate,endDate);
    }*/
    AddtaskComponent.prototype.ngOnInit = function () {
    };
    AddtaskComponent.prototype.formatLabel = function (value) {
        if (!value) {
            return 0;
        }
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    };
    AddtaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addtask',
            template: __webpack_require__(/*! ./addtask.component.html */ "./src/app/addtask/addtask.component.html"),
            styles: [__webpack_require__(/*! ./addtask.component.css */ "./src/app/addtask/addtask.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]])
    ], AddtaskComponent);
    return AddtaskComponent;
}());



/***/ }),

/***/ "./src/app/addtask/task.ts":
/*!*********************************!*\
  !*** ./src/app/addtask/task.ts ***!
  \*********************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task() {
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _addtask_addtask_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addtask/addtask.component */ "./src/app/addtask/addtask.component.ts");
/* harmony import */ var _viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewtask/viewtask.component */ "./src/app/viewtask/viewtask.component.ts");
/* harmony import */ var _edittask_edittask_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edittask/edittask.component */ "./src/app/edittask/edittask.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: 'addtask', component: _addtask_addtask_component__WEBPACK_IMPORTED_MODULE_2__["AddtaskComponent"] },
    { path: 'viewtask', component: _viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_3__["ViewtaskComponent"] },
    { path: 'edittask', component: _edittask_edittask_component__WEBPACK_IMPORTED_MODULE_4__["EdittaskComponent"] },
    { path: '', redirectTo: '/addtask', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<header>\n    <nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n                <a class=\"navbar-brand\" routerLink=\"/addtask\">Task Manager</a>\n            </div>\n            <ul class=\"nav navbar-nav\">\n                <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/addtask\">Add Task</a></li>\n                <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/viewtask\">View Task</a></li>\n            </ul>\n        </div>\n    </nav>\n</header>\n<section>\n    <router-outlet></router-outlet>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TaskManager';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _addtask_addtask_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addtask/addtask.component */ "./src/app/addtask/addtask.component.ts");
/* harmony import */ var _viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewtask/viewtask.component */ "./src/app/viewtask/viewtask.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services_static_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/static.service */ "./src/app/services/static.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _viewtask_task_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./viewtask/task.pipe */ "./src/app/viewtask/task.pipe.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _edittask_edittask_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edittask/edittask.component */ "./src/app/edittask/edittask.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _addtask_addtask_component__WEBPACK_IMPORTED_MODULE_4__["AddtaskComponent"],
                _viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_5__["ViewtaskComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"],
                _viewtask_task_pipe__WEBPACK_IMPORTED_MODULE_12__["TaskPipe"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _edittask_edittask_component__WEBPACK_IMPORTED_MODULE_14__["EdittaskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]
            ],
            exports: [_viewtask_task_pipe__WEBPACK_IMPORTED_MODULE_12__["TaskPipe"]],
            providers: [_services_task_service__WEBPACK_IMPORTED_MODULE_9__["TaskService"], _services_static_service__WEBPACK_IMPORTED_MODULE_10__["StaticTaskService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edittask/edittask.component.html":
/*!**************************************************!*\
  !*** ./src/app/edittask/edittask.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"row\">\n          <div class=\"col-xs-12\">\n    <form >\n      <div class=\"row\">\n        <label for=\"task\"  class=\"col-md-4\" >Task</label>\n        <input class=\"col-md-4\" type=\"text\" [(ngModel)]=\"task.task\"  name=\"task\" id=\"task\" required >\n      </div>\n      <br>\n      <div class=\"row\">\n          <label for=\"task\"  class=\"col-md-4\" >Priority</label>\n          <input class=\"col-md-4\" type=\"text\"  [(ngModel)]=\"task.priority\" name=\"priority\" id=\"priority\" required>\n      </div>\n        <br>\n      <div class=\"row\">\n        <label for=\"parentTask\" class=\"col-md-4\" >Parent Task</label>\n        <input class=\"col-md-4\" type=\"text\" [(ngModel)]=\"task.parentTask\"   name=\"parentTask\" id=\"parentTask\" required>\n      </div>\n      <br>\n      <div class=\"row\">\n        <label for=\"startDate\" class=\"col-md-4\" >Start Date</label>\n              <input class=\"col-md-4\" type=\"date\" [(ngModel)]=\"task.startDate\"   name=\"startDate\" id=\"startDate\" required>\n     </div>\n     <br>\n     <div class=\"row\">\n      <label for=\"endDate\" class=\"col-md-4\" >End Date</label>\n      <input class=\"col-md-4\" type=\"date\" [(ngModel)]=\"task.endDate\"   name=\"endDate\" id=\"endDate\" required>\n   \n    </div>\n    <br>\n    <div class=\"row\">\n        \n      <div class=\"col-md-6\">\n      <button type=\"submit\" class=\"btn btn-success\" (click)=\"updateTask(task)\">Update Task</button>  \n      </div>\n  \n      <div class=\"col-md-1\">\n      <button type=\"cancel\" routerLink=\"/viewtask\" class=\"btn btn-primary\">Cancel</button>\n    </div>\n    </div>\n      <br>\n    </form>\n    </div>\n    </div>\n  </div>\n  </div>\n  </div>\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/edittask/edittask.component.ts":
/*!************************************************!*\
  !*** ./src/app/edittask/edittask.component.ts ***!
  \************************************************/
/*! exports provided: EdittaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdittaskComponent", function() { return EdittaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services_static_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/static.service */ "./src/app/services/static.service.ts");
/* harmony import */ var _addtask_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addtask/task */ "./src/app/addtask/task.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EdittaskComponent = /** @class */ (function () {
    //editTask: any= {};
    function EdittaskComponent(router, taskervice, staticTaskService) {
        this.router = router;
        this.taskervice = taskervice;
        this.staticTaskService = staticTaskService;
        this.task = new _addtask_task__WEBPACK_IMPORTED_MODULE_3__["Task"]();
    }
    EdittaskComponent.prototype.ngOnInit = function () {
        this.task = this.staticTaskService.editTask;
    };
    EdittaskComponent.prototype.updateTask = function (task, taskId) {
        console.log(task.task + task.taskId);
        this.taskervice.updateTask(task, task.taskId)
            .subscribe(function (data) {
        }, function (error) {
        });
        this.router.navigate(['/viewtask']);
    };
    ;
    EdittaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edittask',
            template: __webpack_require__(/*! ./edittask.component.html */ "./src/app/edittask/edittask.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"], _services_static_service__WEBPACK_IMPORTED_MODULE_2__["StaticTaskService"]])
    ], EdittaskComponent);
    return EdittaskComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<nav class=\"navbar navbar-dark bg-primary\">\n            <a href=\"/\">Add Task</a>\n            <a href=\"/list\">View Task</a>\n  \n</nav>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/services/static.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/static.service.ts ***!
  \********************************************/
/*! exports provided: StaticTaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticTaskService", function() { return StaticTaskService; });
var StaticTaskService = /** @class */ (function () {
    function StaticTaskService() {
        this.editTask = {};
    }
    return StaticTaskService;
}());



/***/ }),

/***/ "./src/app/services/task.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/task.service.ts ***!
  \******************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        //private userUrl = 'http://localhost:8080/user-portal/user';
        this.userUrl = 'http://localhost:8090';
    }
    TaskService.prototype.addTask = function (task) {
        return this.http.post(this.userUrl + '/addTask', task);
    };
    TaskService.prototype.viewTask = function () {
        return this.http.get(this.userUrl + '/viewTask');
    };
    TaskService.prototype.updateTask = function (task, taskId) {
        console.log(taskId + task);
        return this.http.post(this.userUrl + '/editTask/' + taskId, task);
    };
    TaskService.prototype.endTask = function (taskId) {
        console.log(taskId);
        return this.http.get(this.userUrl + '/deleteTask/' + taskId);
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/viewtask/task.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/viewtask/task.pipe.ts ***!
  \***************************************/
/*! exports provided: TaskPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPipe", function() { return TaskPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TaskPipe = /** @class */ (function () {
    function TaskPipe() {
    }
    TaskPipe.prototype.transform = function (taskList, field, value) {
        console.log(field + "value --->" + value);
        if (!taskList) {
            return [];
        }
        if (!field || !value) {
            return taskList;
        }
        if (value === "") {
            return taskList;
        }
        else {
            if (field == "task") {
                return taskList.filter(function (singleTask) {
                    return singleTask.task.includes(value);
                });
            }
            else if (field == "parentTask") {
                return taskList.filter(function (singleTask) {
                    return singleTask.parentTask.includes(value);
                });
            }
            else if (field == "priorityFrom") {
                return taskList.filter(function (singleTask) { return singleTask.priority >= parseInt(value); });
            }
            else if (field == "priorityTo") {
                return taskList.filter(function (singleTask) { return singleTask.priority <= parseInt(value); });
            }
            else if (field == "startDate") {
                return taskList.filter(function (singleTask) {
                    var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]('en-US');
                    var str = datePipe.transform(singleTask.startDate, 'dd-MM-yyyy');
                    if (str.includes(value)) {
                        return singleTask;
                    }
                    else {
                        return null;
                    }
                });
            }
            else if (field == "endDate") {
                return taskList.filter(function (singleTask) {
                    var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]('en-US');
                    var str = datePipe.transform(singleTask.endDate, 'dd-MM-yyyy');
                    if (str.includes(value)) {
                        return singleTask;
                    }
                    else {
                        return null;
                    }
                });
            }
        }
    };
    TaskPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'filter' }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TaskPipe);
    return TaskPipe;
}());



/***/ }),

/***/ "./src/app/viewtask/viewtask.component.html":
/*!**************************************************!*\
  !*** ./src/app/viewtask/viewtask.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row\">\n<div class=\"col-md-12\">\n\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <div class=\"row form-group\">\n                <label class=\"col-md-1\" for=\"task\">Task</label>\n                <input class=\"col-md-3\" type=\"text\" [(ngModel)]=\"task.task\" name=\"task\">\n                <label class=\"col-md-2\" for=\"parentTask\">Parent Task</label>\n                <input class=\"col-md-3\" type=\"text\" [(ngModel)]=\"task.parentTask\" name=\"parentTask\" >\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <div class=\"row form-group\">\n                    <label for=\"priority\"  class=\"col-md-1\" >Priority From</label>\n                    <input class=\"col-md-1\" type=\"text\" [(ngModel)]=\"task.priorityFrom\" name=\"priorityFrom\" >\n                    <label for=\"parent\"  class=\"col-md-1\" >Priority To</label>\n                    <input class=\"col-md-1\" type=\"text\" [(ngModel)]=\"task.priorityTo\" name=\"priorityTo\"  >\n                    <label class=\"col-md-2\" for=\"startDate\" >Start Date</label>\n                    <input class=\"col-md-2\" type=\"text\" [(ngModel)]=\"task.startDate\" name=\"startDate\"  >\n                    <label class=\"col-md-2\" for=\"endDate\" >End Date</label>\n                    <input class=\"col-md-2\" type=\"text\" [(ngModel)]=\"task.endDate\"  name=\"endDate\"  >\n                </div>\n            </div>\n        </div>\n</div>\n</div><hr>\n<div>\n    <table>\n        <tbody *ngFor=\"let task of taskList | filter : 'task' : task.task | filter : 'parentTask' : task.parentTask  \n        | filter : 'priorityFrom' : task.priorityFrom | filter : 'priorityTo' : task.priorityTo\n        | filter : 'startDate' : task.startDate | filter : 'endDate' : task.endDate ; let i = index\">\n            <tr>\n                <th>Task</th>\n                <th>Parent</th>\n                <th>Priority</th>\n                <th>Start</th>\n                <th>End</th>\n                <th></th>\n                <th></th>\n            </tr>\n            <tr>\n                <td>{{task.task}}</td>\n                <td>{{task.parentTask}}</td>\n                <td>{{task.priority}}</td>\n                <td>{{task.startDate | date:'dd-MM-yyyy'}}</td>\n                <td>{{task.endDate  | date:'dd-MM-yyyy'}}</td>\n                <td><button type=\"button\" (click)=\"editTask(task)\" class=\"btn btn-secondary\" [disabled]=\"task.status !== 'active'\">Edit</button>&nbsp;&nbsp;</td>\n                <td><button type=\"button\" class=\"btn btn-secondary\" (click)=\"endTask(task)\" [disabled]=\"task.status !== 'active'\">End Task</button> </td>\n            </tr>\n        </tbody>\n    </table>\n<!-- <div class=\"row\">\n       \n          <label class=\"col-md-2\" style=\"margin-bottom: 10px;\">Task</label>\n          <label class=\"col-md-2\" style=\"margin-bottom: 10px;\">Parent</label>\n          <label class=\"col-md-1\" style=\"margin-bottom: 10px;\">Priority</label>\n          <label class=\"col-md-2\" style=\"margin-bottom: 10px;\">Start</label>\n          <label class=\"col-md-2\" style=\"margin-bottom: 10px;\">End</label>\n       \n</div>\n<div class=\"row\">\n        <div class=\"col-md-2\" style=\"background-color: lightgray;height: 55px;text-align: center;padding-top: 15px;margin-right: 10px;\">{{task.task}}</div>\n        <div class=\"col-md-2\" style=\"background-color: lightgray;height: 55px;text-align: center;padding-top: 15px;margin-right: 10px;\">{{task.parentTask}}</div>\n        <div class=\"col-md-1\" style=\"text-align: left;\">{{task.priority}}</div>\n        <div class=\"col-md-2\" style=\"text-align: left;\">{{task.startDate | date:'dd-MM-yyyy'}}</div>\n        <div class=\"col-md-2\" style=\"text-align: left;\">{{task.endDate  | date:'dd-MM-yyyy'}}</div>\n        <div class=\"col-md-3\" *ngIf=\"task.status === 'active'\">\n        <button type=\"button\" (click)=\"editTask(task)\" class=\"btn btn-secondary\" >Edit</button>&nbsp;&nbsp;\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"endTask(task)\">End Task</button> \n        </div>\n</div>                 -->\n\n</div>\n    <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/viewtask/viewtask.component.ts":
/*!************************************************!*\
  !*** ./src/app/viewtask/viewtask.component.ts ***!
  \************************************************/
/*! exports provided: ViewtaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewtaskComponent", function() { return ViewtaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _addtask_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addtask/task */ "./src/app/addtask/task.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_static_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/static.service */ "./src/app/services/static.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewtaskComponent = /** @class */ (function () {
    function ViewtaskComponent(router, taskervice, staticTaskService) {
        this.router = router;
        this.taskervice = taskervice;
        this.staticTaskService = staticTaskService;
        this.task = new _addtask_task__WEBPACK_IMPORTED_MODULE_2__["Task"]();
        this.taskList = [];
    }
    ViewtaskComponent.prototype.viewTask = function () {
        var _this = this;
        this.taskervice.viewTask()
            .subscribe(function (data) {
            _this.taskList = data;
        }, function (error) {
            // alert("ERROR");
        });
    };
    ;
    ViewtaskComponent.prototype.editTask = function (task) {
        this.staticTaskService.editTask = task;
        this.router.navigate(['/edittask']);
    };
    ViewtaskComponent.prototype.endTask = function (task) {
        var _this = this;
        this.taskervice.endTask(task.taskId)
            .subscribe(function (data) {
            _this.taskList = data;
        }, function (error) {
            alert("ERROR");
        });
    };
    /*addTask(task, parentTask,startDate, endDate) {
      this.taskervice.addTask(task,parentTask,startDate,endDate);
    }*/
    ViewtaskComponent.prototype.ngOnInit = function () {
        this.viewTask();
    };
    ViewtaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewtask',
            template: __webpack_require__(/*! ./viewtask.component.html */ "./src/app/viewtask/viewtask.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"], _services_static_service__WEBPACK_IMPORTED_MODULE_4__["StaticTaskService"]])
    ], ViewtaskComponent);
    return ViewtaskComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\git\task-manager\task-manager-ui\src\main\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map