(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about-compoment/about-compoment.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about-compoment/about-compoment.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>This is the About</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:left; color:rgb(255,255,255); background-color:rgb(56, 114, 240)  \">\r\n  <h3>\r\n    Welcome to  <b>{{ title }}</b>  \r\n   </h3>\r\n   <span style=\"float: right;padding-right: 100px;\">     \r\n    <a href=\"\" (click)=\"logOut()\" style=\"color: yellow; font-size: 14px; \" >Log Out</a>\r\n  </span>  \r\n   <span style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif\">\r\n    <span style=\"padding-right: 5px;\">\r\n      UserName :  {{LogInUser.email}}\r\n    </span>\r\n    || \r\n    <span style=\"padding-right: 5px; padding-left: 5px;\">\r\n       Role :  {{LogInUser.roleName}}\r\n    </span> \r\n    || \r\n    <span style=\"padding-right: 5px; padding-left: 5px;\">\r\n      CompanyName :  {{LogInUser.companyName}}\r\n    </span> \r\n    || \r\n    <span style=\"padding-right: 5px; padding-left: 5px;\">\r\n       Name :  {{LogInUser.fname}} {{LogInUser.lname}}\r\n    </span>\r\n    \r\n      \r\n   </span>\r\n   \r\n    \r\n</div>\r\n<div>\r\n  <a [routerLink]=\"['/home']\">Home</a>\r\n  ||\r\n  <a [routerLink]=\"['/about']\">About</a>\r\n  ||\r\n  <a [routerLink]=\"['/SuperStockistList']\">Super Stockist</a>\r\n  ||\r\n  <a [routerLink]=\"['/distributorList']\">Drisbutor</a>\r\n  ||\r\n  <a [routerLink]=\"['/retailerList']\">Retailer</a>\r\n  ||\r\n  <a [routerLink]=\"['/BusinessAssociate']\">Business Associate</a>\r\n  ||\r\n  <a [routerLink]=\"['/Transaction']\">Transaction</a>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/business-associate/business-associate.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/business-associate/business-associate.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\r\n    <span class=\"Header\">Business Associate</span>\r\n    <p></p>\r\n    <span>------------------------------------------</span>\r\n    <p></p>\r\n    <span class=\"SubHeader\">Select Distributor</span>   \r\n    <p></p>\r\n    <select id=\"userType\" name=\"userType\" style=\"width: 300px\">\r\n        <option value=\"0\">Select</option>\r\n        <option value=\"1\">Dis1</option>\r\n        <option value=\"2\">Dis2</option>\r\n        <option value=\"3\">Dis3</option>\r\n        <option value=\"4\">Dis4</option>        \r\n    </select> \r\n    <p></p>\r\n    <div style=\"float: left; padding-top:20px;width: 50%;\">\r\n        <span class=\"SubHeader\">PERSONAL INFORMATION</span> \r\n         <p></p>\r\n    <label>Fisrt Name</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>Last Name</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>Email-Primary</label>\r\n    <p></p>\r\n    <input type=\"email\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>Email-Alternative</label>\r\n    <p></p>\r\n    <input type=\"email\" class=\"SubHeaderInput\">\r\n    <p></p>\r\n    <label>MobNo-Primary</label>\r\n    <p></p>\r\n    <input type=\"tel\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>MobNo-Alternative</label>\r\n    <p></p>\r\n    <input type=\"tel\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <input type=\"button\" width=\"400x;\" value=\"Save Record\" style=\"background-color:rgba(16, 108, 230, 0.692); color: white;\">\r\n    </div>  \r\n       \r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/distributor-edit/distributor-edit.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/distributor-edit/distributor-edit.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <span class=\"Header\">Distributor</span>\n    <p></p>\n    <span>------------------------------------------</span>\n    <p></p>\n    <div style=\"float: left; padding-top:20px;width: 50%;\">\n        <span class=\"SubHeader\">PERSONAL INFORMATION</span>\n        <p></p>\n\n\n        <label>Fisrt Name</label>\n        <p></p>\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.fname\">\n        <p></p>\n\n\n        <label>Last Name</label>\n        <p></p>\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.lname\">\n        <p></p>\n\n\n        <label>Email</label>\n        <p></p>\n        <input type=\"email\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.email\">\n        <p></p>        \n\n\n        <label>MobNo-Primary</label>\n        <p></p>\n        <input type=\"tel\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.businessContactInformation.mobNoPrimary\">\n        <p></p>\n\n\n        <label>MobNo-Alternative</label>\n        <p></p>\n        <input type=\"tel\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.businessContactInformation.mobNoAlternate\">\n\n\n    </div>\n\n\n\n\n    <div style=\"float: left; padding-top:20px;width: 50%; \">\n        <span class=\"SubHeader\">OUTLATE INFORMATION</span>\n        <p></p>\n\n        <label>OutLate Name</label>\n        <p></p>\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.businessAddress.outLateName\">\n        <p></p>\n\n\n        <label>Country</label>\n        <p></p>\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.businessAddress.country\">\n        <p></p>\n\n\n        <label>State</label>\n        <p></p>\n        <!--<input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.BusinessAddress.State\">-->\n        <select style=\"width: 320px;\" [(ngModel)]=\"obj.businessAddress.state\" (change)=\"onStateChange($event)\">\n            <!-- <option value=\"0\" selected=\"selected\">Select State -->\n            <option *ngFor=\"let state of states;let i = index\" [value]=\"states[i].Name\">\n                {{states[i].Name}}\n            </option>\n        </select>\n        <p></p>\n        \n\n        <label>District</label>\n        <p></p>\n        <!-- <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.BusinessAddress.District\"> -->\n        <select style=\"width: 320px;\" [(ngModel)]=\"obj.businessAddress.district\">\n            <!-- <option value=\"0\" selected=\"selected\">Select State -->\n            <option *ngFor=\"let dist of dists;let i = index\" [value]=\"dists[i].Name\">\n                {{dists[i].Name}}\n            </option>\n        </select>\n        <p></p>\n\n\n        <label>Region</label>\n        <p></p>\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.businessAddress.region\">\n        <p></p>\n\n\n        <label>Pin</label>\n        <p></p>\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.businessAddress.pin\">\n\n    </div>\n    <br>\n    <div style=\"float:inherit;padding-top: 20px;\">\n        <a [routerLink]=\"['/distributorList']\" routerLinkActive=\"router-link-active\">Back</a>\n        ||\n        <input type=\"button\" width=\"400x;\" value=\"Save Record\" (click)=\"SaveRecord()\"\n                   style=\"background-color:rgba(16, 108, 230, 0.692); color: white;\">\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/distributor-list/distributor-list.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/distributor-list/distributor-list.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"divContainer\">\n    <div>\n            <span class=\"Header\">Distributor</span>\n            <p></p>\n            <span>------------------------------------------</span>\n    </div>\n    <div style=\"padding-top: 20px;\">\n          <span style=\"font-size:15px;color:rgba(18, 108, 218, 0.829);\">\n                Search : \n          </span>\n        \n            <input [(ngModel)]=\"searchText\" placeholder=\"search text goes here\" style=\"width: 300px;\">              \n           \n        </div>\n        <p></p>\n        <div style=\"width: 850px; text-align: right;\">\n                <a [routerLink]=\"['/distributorAdd']\" routerLinkActive=\"router-link-active\">Add Record</a>   \n        </div>\n        <div style=\"padding-top: 20px;\">  \n                <table>\n                    <thead>\n                        <tr>\n                                <th style=\"width: 100px;\">First Name</th>                        \n                                <th style=\"width: 100px;\">Last Name</th>\n                                <th style=\"width: 100px;\">Email</th>                                   \n                                <th style=\"width: 100px;\">Mob Primar</th>\n                                <th style=\"width: 150px;\">Outlate Name</th>\n                                <th style=\"width: 100px;\">Region</th>\n                                <th style=\"width: 100px;\">Dist.</th>\n                                <th style=\"width: 50px;\"></th>\n                                <th style=\"width: 50px;\"></th>\n                        </tr>\n                    </thead>                \n                        <tbody>\n                            <tr *ngFor=\"let obj of objCollection | filterByMatchText : searchText\">\n                                <td>{{obj.fname }}</td>\n                                <td>{{obj.lname}}</td>\n                                <td>{{obj.businessContactInformation.email}}</td>\n                                <td>{{obj.businessContactInformation.mobNoPrimary}}</td>                                    \n                                <td>{{obj.businessAddress.outLateName}}</td>\n                                <td>{{obj.businessAddress.region}}</td>\n                                <td>{{obj.businessAddress.district}}</td>\n                                <td>\n                                        <a [routerLink]=\"['/distributorEdit',obj.id]\" routerLinkActive=\"router-link-active\">Edit</a>                                       \n                                </td>\n                                <td>\n                                        <a [routerLink]=\"['/delDistributor']\" routerLinkActive=\"router-link-active\">Del</a>    \n                                </td>\n                                \n                            </tr>\n                        </tbody>\n                    </table>\n        </div>\n        <p></p>\n        <div>\n            <button (click)=\"loadData()\">Load Data</button>\n           \n        </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/distributor/distributor.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/distributor/distributor.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <span class=\"Header\">Distributor. ...</span>\r\n    <p></p>\r\n    <span>------------------------------------------</span>\r\n    <p></p>\r\n    <div style=\"float: left; padding-top:20px;width: 50%;\">\r\n        <span class=\"SubHeader\">PERSONAL INFORMATION</span>\r\n        <p></p>\r\n\r\n\r\n        <label>Fisrt Name</label>\r\n        <p></p>\r\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.Fname\">\r\n        <p></p>\r\n\r\n\r\n        <label>Last Name</label>\r\n        <p></p>\r\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.Lname\">\r\n        <p></p>\r\n\r\n\r\n        <label>Email</label>\r\n        <p></p>\r\n        <input type=\"email\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.email\">\r\n        <p></p>\r\n\r\n\r\n        <label>Password</label>\r\n        <p></p>\r\n        <input type=\"password\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.password\">\r\n        <p></p>\r\n\r\n\r\n        <label>MobNo-Primary</label>\r\n        <p></p>\r\n        <input type=\"tel\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.BusinessContactInformation.MobNoPrimary\">\r\n        <p></p>\r\n\r\n\r\n        <label>MobNo-Alternative</label>\r\n        <p></p>\r\n        <input type=\"tel\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.BusinessContactInformation.MobNoAlternate\">\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div style=\"float: left; padding-top:20px;width: 50%; \">\r\n        <span class=\"SubHeader\">OUTLATE INFORMATION</span>\r\n        <p></p>\r\n\r\n        <label>OutLate Name</label>\r\n        <p></p>\r\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.BusinessAddress.OutLateName\">\r\n        <p></p>\r\n\r\n\r\n        <label>Country</label>\r\n        <p></p>\r\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.BusinessAddress.Country\">\r\n        <p></p>\r\n\r\n\r\n        <label>State</label>\r\n        <p></p>\r\n        <!--<input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.BusinessAddress.State\">-->\r\n        <select style=\"width: 320px;\" [(ngModel)]=\"obj.BusinessAddress.State\" (change)=\"onStateChange($event)\">\r\n            <!-- <option value=\"0\" selected=\"selected\">Select State -->\r\n            <option *ngFor=\"let state of states;let i = index\" [value]=\"states[i].Name\">\r\n                {{states[i].Name}}\r\n            </option>\r\n        </select>\r\n        <p></p>\r\n        \r\n\r\n        <label>District</label>\r\n        <p></p>\r\n        <!-- <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.BusinessAddress.District\"> -->\r\n        <select style=\"width: 320px;\" [(ngModel)]=\"obj.BusinessAddress.District\">\r\n            <!-- <option value=\"0\" selected=\"selected\">Select State -->\r\n            <option *ngFor=\"let dist of dists;let i = index\" [value]=\"dists[i].Name\">\r\n                {{dists[i].Name}}\r\n            </option>\r\n        </select>\r\n        <p></p>\r\n\r\n\r\n        <label>Region</label>\r\n        <p></p>\r\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.BusinessAddress.Region\">\r\n        <p></p>\r\n\r\n\r\n        <label>Pin</label>\r\n        <p></p>\r\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.BusinessAddress.Pin\">\r\n\r\n    </div>\r\n    <br>\r\n    <div style=\"float:inherit;padding-top: 20px;\">\r\n        <a [routerLink]=\"['/distributorList']\" routerLinkActive=\"router-link-active\">Back</a>\r\n        ||\r\n        <input type=\"button\" width=\"400x;\" value=\"Save Record\" (click)=\"SaveRecord()\"\r\n                   style=\"background-color:rgba(16, 108, 230, 0.692); color: white;\">\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home-compoment/home-compoment.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home-compoment/home-compoment.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n    <img src=\"../../assets/ZetTrackHomeImg.jpeg\">\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1 style=\"text-align:center\">\n    \n  </h1>\n  <div class=\"login\">\n    <h2 class=\"login-header\">Log in</h2>\n    <form [formGroup]=\"loginForm\" class=\"login-container\" (ngSubmit)=\"login()\">\n  \n      <p [ngClass]=\"{ 'has-error': isSubmitted && formControls.email.errors }\">\n        <input type=\"email\" placeholder=\"Email\" formControlName=\"email\">\n      </p>\n  \n      <div *ngIf=\"isSubmitted && formControls.email.errors\" class=\"help-block\">\n        <div *ngIf=\"formControls.email.errors.required\">Email is required</div>\n      </div>\n  \n      <p [ngClass]=\"{ 'has-error': isSubmitted && formControls.password.errors }\">\n        <input type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n      </p>\n  \n      <div *ngIf=\"isSubmitted && formControls.password.errors\" class=\"help-block\">\n        <div *ngIf=\"formControls.password.errors.required\">Password is required</div>\n      </div>\n  \n      <p>\n        <input type=\"submit\"  value=\"Log in\">        \n      </p>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/retailer-edit/retailer-edit.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/retailer-edit/retailer-edit.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <span class=\"Header\">Retailer</span>\n    <p></p>\n    <span>------------------------------------------</span>\n    <p></p>\n    <div style=\"float: left; padding-top:20px;width: 50%;\">\n        <span class=\"SubHeader\">PERSONAL INFORMATION</span>\n        <p></p>\n\n\n        <label>Fisrt Name</label>\n        <p></p>\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.fname\">\n        <p></p>\n\n\n        <label>Last Name</label>\n        <p></p>\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.lname\">\n        <p></p>\n\n\n        <label>Email</label>\n        <p></p>\n        <input type=\"email\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.email\">\n        <p></p>        \n\n\n        <label>MobNo-Primary</label>\n        <p></p>\n        <input type=\"tel\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.businessContactInformation.mobNoPrimary\">\n        <p></p>\n\n\n        <label>MobNo-Alternative</label>\n        <p></p>\n        <input type=\"tel\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.businessContactInformation.mobNoAlternate\">\n\n\n    </div>\n\n\n\n\n    <div style=\"float: left; padding-top:20px;width: 50%; \">\n        <span class=\"SubHeader\">OUTLATE INFORMATION</span>\n        <p></p>\n\n        <label>OutLate Name</label>\n        <p></p>\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.businessAddress.outLateName\">\n        <p></p>\n\n\n        <label>Country</label>\n        <p></p>\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.businessAddress.country\">\n        <p></p>\n\n\n        <label>State</label>\n        <p></p>\n        <!--<input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.BusinessAddress.State\">-->\n        <select style=\"width: 320px;\" [(ngModel)]=\"obj.businessAddress.state\" (change)=\"onStateChange($event)\">\n            <!-- <option value=\"0\" selected=\"selected\">Select State -->\n            <option *ngFor=\"let state of states;let i = index\" [value]=\"states[i].Name\">\n                {{states[i].Name}}\n            </option>\n        </select>\n        <p></p>\n        \n\n        <label>District</label>\n        <p></p>\n        <!-- <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.BusinessAddress.District\"> -->\n        <select style=\"width: 320px;\" [(ngModel)]=\"obj.businessAddress.district\">\n            <!-- <option value=\"0\" selected=\"selected\">Select State -->\n            <option *ngFor=\"let dist of dists;let i = index\" [value]=\"dists[i].Name\">\n                {{dists[i].Name}}\n            </option>\n        </select>\n        <p></p>\n\n\n        <label>Region</label>\n        <p></p>\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.businessAddress.region\">\n        <p></p>\n\n\n        <label>Pin</label>\n        <p></p>\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.businessAddress.pin\">\n\n    </div>\n    <br>\n    <div style=\"float:inherit;padding-top: 20px;\">\n        <a [routerLink]=\"['/retailerList']\" routerLinkActive=\"router-link-active\">Back</a>\n        ||\n        <input type=\"button\" width=\"400x;\" value=\"Save Record\" (click)=\"SaveRecord()\"\n                   style=\"background-color:rgba(16, 108, 230, 0.692); color: white;\">\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/retailer-list/retailer-list.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/retailer-list/retailer-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"divContainer\">\n    <div>\n            <span class=\"Header\">Retailer</span>\n            <p></p>\n            <span>------------------------------------------</span>\n    </div>\n    <div style=\"padding-top: 20px;\">\n          <span style=\"font-size:15px;color:rgba(18, 108, 218, 0.829);\">\n                Search : \n          </span>\n        \n            <input [(ngModel)]=\"searchText\" placeholder=\"search text goes here\" style=\"width: 300px;\">              \n           \n        </div>\n        <p></p>\n        <div style=\"width: 850px; text-align: right;\">\n                <a [routerLink]=\"['/retailerAdd']\" routerLinkActive=\"router-link-active\">Add Record</a>   \n        </div>\n        <div style=\"padding-top: 20px;\">  \n                <table>\n                    <thead>\n                        <tr>\n                                <th style=\"width: 100px;\">First Name</th>                        \n                                <th style=\"width: 100px;\">Last Name</th>\n                                <th style=\"width: 100px;\">Email</th>                                   \n                                <th style=\"width: 100px;\">Mob Primar</th>\n                                <th style=\"width: 150px;\">Outlate Name</th>\n                                <th style=\"width: 100px;\">Region</th>\n                                <th style=\"width: 100px;\">Dist.</th>\n                                <th style=\"width: 50px;\"></th>\n                                <th style=\"width: 50px;\"></th>\n                        </tr>\n                    </thead>                \n                        <tbody>\n                            <tr *ngFor=\"let obj of objCollection | filterByMatchText : searchText\">\n                                <td>{{obj.fname}}</td>\n                                <td>{{obj.lname}}</td>\n                                <td>{{obj.businessContactInformation.email}}</td>\n                                <td>{{obj.businessContactInformation.mobNoPrimary}}</td>                                    \n                                <td>{{obj.businessAddress.outLateName}}</td>\n                                <td>{{obj.businessAddress.region}}</td>\n                                <td>{{obj.businessAddress.district}}</td>\n                                <td>\n                                        <a [routerLink]=\"['/retailerEdit',obj.id]\" routerLinkActive=\"router-link-active\">Edit</a>                                       \n                                </td>\n                                <td>\n                                        <a [routerLink]=\"['/delRetailer']\" routerLinkActive=\"router-link-active\">Del</a>    \n                                </td>\n                                \n                            </tr>\n                        </tbody>\n                    </table>\n        </div>\n        <p></p>\n        <div>\n            <button (click)=\"loadData()\">Load Data</button>\n           \n        </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/retailer/retailer.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/retailer/retailer.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <span class=\"Header\">Retailer...</span>\r\n    <p></p>\r\n    <span>------------------------------------------</span>\r\n    <p></p>\r\n    <div style=\"float: left; padding-top:20px;width: 50%;\">\r\n        <span class=\"SubHeader\">PERSONAL INFORMATION</span>\r\n        <p></p>\r\n\r\n\r\n        <label>Fisrt Name</label>\r\n        <p></p>\r\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.Fname\">\r\n        <p></p>\r\n\r\n\r\n        <label>Last Name</label>\r\n        <p></p>\r\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.Lname\">\r\n        <p></p>\r\n\r\n\r\n        <label>Email</label>\r\n        <p></p>\r\n        <input type=\"email\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.email\">\r\n        <p></p>\r\n\r\n\r\n        <label>Password</label>\r\n        <p></p>\r\n        <input type=\"password\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.password\">\r\n        <p></p>\r\n\r\n\r\n        <label>MobNo-Primary</label>\r\n        <p></p>\r\n        <input type=\"tel\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.BusinessContactInformation.MobNoPrimary\">\r\n        <p></p>\r\n\r\n\r\n        <label>MobNo-Alternative</label>\r\n        <p></p>\r\n        <input type=\"tel\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.BusinessContactInformation.MobNoAlternate\">\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div style=\"float: left; padding-top:20px;width: 50%; \">\r\n        <span class=\"SubHeader\">OUTLATE INFORMATION</span>\r\n        <p></p>\r\n\r\n        <label>OutLate Name</label>\r\n        <p></p>\r\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.BusinessAddress.OutLateName\">\r\n        <p></p>\r\n\r\n\r\n        <label>Country</label>\r\n        <p></p>\r\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.BusinessAddress.Country\">\r\n        <p></p>\r\n\r\n\r\n        <label>State</label>\r\n        <p></p>\r\n        <!--<input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.BusinessAddress.State\">-->\r\n        <select style=\"width: 320px;\" [(ngModel)]=\"obj.BusinessAddress.State\" (change)=\"onStateChange($event)\">\r\n            <!-- <option value=\"0\" selected=\"selected\">Select State -->\r\n            <option *ngFor=\"let state of states;let i = index\" [value]=\"states[i].Name\">\r\n                {{states[i].Name}}\r\n            </option>\r\n        </select>\r\n        <p></p>\r\n        \r\n\r\n        <label>District</label>\r\n        <p></p>\r\n        <!-- <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.BusinessAddress.District\"> -->\r\n        <select style=\"width: 320px;\" [(ngModel)]=\"obj.BusinessAddress.District\">\r\n            <!-- <option value=\"0\" selected=\"selected\">Select State -->\r\n            <option *ngFor=\"let dist of dists;let i = index\" [value]=\"dists[i].Name\">\r\n                {{dists[i].Name}}\r\n            </option>\r\n        </select>\r\n        <p></p>\r\n\r\n\r\n        <label>Region</label>\r\n        <p></p>\r\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.BusinessAddress.Region\">\r\n        <p></p>\r\n\r\n\r\n        <label>Pin</label>\r\n        <p></p>\r\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"obj.BusinessAddress.Pin\">\r\n\r\n    </div>\r\n    <br>\r\n    <div style=\"float:inherit;padding-top: 20px;\">\r\n        <a [routerLink]=\"['/retailerList']\" routerLinkActive=\"router-link-active\">Back</a>\r\n        ||\r\n        <input type=\"button\" width=\"400x;\" value=\"Save Record\" (click)=\"SaveRecord()\"\r\n                   style=\"background-color:rgba(16, 108, 230, 0.692); color: white;\">\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/super-stockist-edit/super-stockist-edit.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/super-stockist-edit/super-stockist-edit.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n        <span class=\"Header\">Super Stockist</span>\r\n        <p></p>\r\n        <span>------------------------------------------</span>\r\n        <p></p>\r\n        <div style=\"float: left; padding-top:20px;width: 50%;\">\r\n            <span class=\"SubHeader\">PERSONAL INFORMATION</span>\r\n            <p></p>\r\n    \r\n    \r\n            <label>Fisrt Name</label>\r\n            <p></p>\r\n            <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"superStockist.fname\">\r\n            <p></p>\r\n    \r\n    \r\n            <label>Last Name</label>\r\n            <p></p>\r\n            <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"superStockist.lname\">\r\n            <p></p>\r\n    \r\n    \r\n            <label>Email</label>\r\n            <p></p>\r\n            <input type=\"email\" class=\"SubHeaderInput\" [(ngModel)]=\"superStockist.email\">\r\n            <p></p>        \r\n    \r\n    \r\n            <label>MobNo-Primary</label>\r\n            <p></p>\r\n            <input type=\"tel\" class=\"SubHeaderInput\" [(ngModel)]=\"superStockist.businessContactInformation.mobNoPrimary\">\r\n            <p></p>\r\n    \r\n    \r\n            <label>MobNo-Alternative</label>\r\n            <p></p>\r\n            <input type=\"tel\" class=\"SubHeaderInput\" [(ngModel)]=\"superStockist.businessContactInformation.mobNoAlternate\">\r\n    \r\n    \r\n        </div>\r\n    \r\n    \r\n    \r\n    \r\n        <div style=\"float: left; padding-top:20px;width: 50%; \">\r\n            <span class=\"SubHeader\">OUTLATE INFORMATION</span>\r\n            <p></p>\r\n    \r\n            <label>OutLate Name</label>\r\n            <p></p>\r\n            <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"superStockist.businessAddress.outLateName\">\r\n            <p></p>\r\n    \r\n    \r\n            <label>Country</label>\r\n            <p></p>\r\n            <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"superStockist.businessAddress.country\">\r\n            <p></p>\r\n    \r\n    \r\n            <label>State</label>\r\n            <p></p>\r\n            <!--<input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"superStockist.BusinessAddress.State\">-->\r\n            <select style=\"width: 320px;\" [(ngModel)]=\"superStockist.businessAddress.state\" (change)=\"onStateChange($event)\">\r\n                <!-- <option value=\"0\" selected=\"selected\">Select State -->\r\n                <option *ngFor=\"let state of states;let i = index\" [value]=\"states[i].Name\">\r\n                    {{states[i].Name}}\r\n                </option>\r\n            </select>\r\n            <p></p>\r\n            \r\n    \r\n            <label>District</label>\r\n            <p></p>\r\n            <!-- <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"superStockist.BusinessAddress.District\"> -->\r\n            <select style=\"width: 320px;\" [(ngModel)]=\"superStockist.businessAddress.district\">\r\n                <!-- <option value=\"0\" selected=\"selected\">Select State -->\r\n                <option *ngFor=\"let dist of dists;let i = index\" [value]=\"dists[i].Name\">\r\n                    {{dists[i].Name}}\r\n                </option>\r\n            </select>\r\n            <p></p>\r\n    \r\n    \r\n            <label>Region</label>\r\n            <p></p>\r\n            <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"superStockist.businessAddress.region\">\r\n            <p></p>\r\n    \r\n    \r\n            <label>Pin</label>\r\n            <p></p>\r\n            <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"superStockist.businessAddress.pin\">\r\n    \r\n        </div>\r\n        <br>\r\n        <div style=\"float:inherit;padding-top: 20px;\">\r\n            <a [routerLink]=\"['/SuperStockistList']\" routerLinkActive=\"router-link-active\">Back</a>\r\n            ||\r\n            <input type=\"button\" width=\"400x;\" value=\"Save Record\" (click)=\"SaveRecord()\"\r\n                       style=\"background-color:rgba(16, 108, 230, 0.692); color: white;\">\r\n        </div>\r\n    \r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/super-stockist-list/super-stockist-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/super-stockist-list/super-stockist-list.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"divContainer\">\n    <div>\n            <span class=\"Header\">Super Stockist</span>\n            <p></p>\n            <span>------------------------------------------</span>\n    </div>\n    <div style=\"padding-top: 20px;\">\n          <span style=\"font-size:15px;color:rgba(18, 108, 218, 0.829);\">\n                Search : \n          </span>\n        \n            <input [(ngModel)]=\"searchText\" placeholder=\"search text goes here\" style=\"width: 300px;\">              \n           \n        </div>\n        <p></p>\n        <div style=\"width: 850px; text-align: right;\">\n                <a [routerLink]=\"['/superStockistAdd']\" routerLinkActive=\"router-link-active\">Add Record</a>   \n        </div>\n        <div style=\"padding-top: 20px;\">  \n                <table>\n                    <thead>\n                        <tr>\n                                <th style=\"width: 100px;\">First Name</th>                        \n                                <th style=\"width: 100px;\">Last Name</th>\n                                <th style=\"width: 100px;\">Email</th>                                   \n                                <th style=\"width: 100px;\">Mob Primar</th>\n                                <th style=\"width: 150px;\">Outlate Name</th>\n                                <th style=\"width: 100px;\">Region</th>\n                                <th style=\"width: 100px;\">Dist.</th>\n                                <th style=\"width: 50px;\"></th>\n                                <th style=\"width: 50px;\"></th>\n                        </tr>\n                    </thead>                \n                        <tbody>\n                            <tr *ngFor=\"let obj of superStockists | filterByMatchText : searchText\">\n                                <td>{{obj.fname }}</td>\n                                <td>{{obj.lname}}</td>\n                                <td>{{obj.businessContactInformation.email}}</td>\n                                <td>{{obj.businessContactInformation.mobNoPrimary}}</td>                                    \n                                <td>{{obj.businessAddress.outLateName}}</td>\n                                <td>{{obj.businessAddress.region}}</td>\n                                <td>{{obj.businessAddress.district}}</td>\n                                <td>\n                                        <a [routerLink]=\"['/superStockistEdit',obj.id]\" routerLinkActive=\"router-link-active\">Edit</a>                                       \n                                </td>\n                                <td>\n                                        <a [routerLink]=\"['/delEmp']\" routerLinkActive=\"router-link-active\">Del</a>    \n                                </td>\n                                \n                            </tr>\n                        </tbody>\n                    </table>\n        </div>\n        <p></p>\n        <div>\n            <button (click)=\"loadData()\">Load Data</button>\n           \n        </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/super-stockist/super-stockist.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/super-stockist/super-stockist.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <span class=\"Header\">Super Stockist</span>\r\n    <p></p>\r\n    <span>------------------------------------------</span>\r\n    <p></p>\r\n    <div style=\"float: left; padding-top:20px;width: 50%;\">\r\n        <span class=\"SubHeader\">PERSONAL INFORMATION</span>\r\n        <p></p>\r\n\r\n\r\n        <label>Fisrt Name</label>\r\n        <p></p>\r\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"superStockist.Fname\">\r\n        <p></p>\r\n\r\n\r\n        <label>Last Name</label>\r\n        <p></p>\r\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"superStockist.Lname\">\r\n        <p></p>\r\n\r\n\r\n        <label>Email</label>\r\n        <p></p>\r\n        <input type=\"email\" class=\"SubHeaderInput\" [(ngModel)]=\"superStockist.email\">\r\n        <p></p>\r\n\r\n\r\n        <label>Password</label>\r\n        <p></p>\r\n        <input type=\"password\" class=\"SubHeaderInput\" [(ngModel)]=\"superStockist.password\">\r\n        <p></p>\r\n\r\n\r\n        <label>MobNo-Primary</label>\r\n        <p></p>\r\n        <input type=\"tel\" class=\"SubHeaderInput\" [(ngModel)]=\"superStockist.BusinessContactInformation.MobNoPrimary\">\r\n        <p></p>\r\n\r\n\r\n        <label>MobNo-Alternative</label>\r\n        <p></p>\r\n        <input type=\"tel\" class=\"SubHeaderInput\" [(ngModel)]=\"superStockist.BusinessContactInformation.MobNoAlternate\">\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div style=\"float: left; padding-top:20px;width: 50%; \">\r\n        <span class=\"SubHeader\">OUTLATE INFORMATION</span>\r\n        <p></p>\r\n\r\n        <label>OutLate Name</label>\r\n        <p></p>\r\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"superStockist.BusinessAddress.OutLateName\">\r\n        <p></p>\r\n\r\n\r\n        <label>Country</label>\r\n        <p></p>\r\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"superStockist.BusinessAddress.Country\">\r\n        <p></p>\r\n\r\n\r\n        <label>State</label>\r\n        <p></p>\r\n        <!--<input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"superStockist.BusinessAddress.State\">-->\r\n        <select style=\"width: 320px;\" [(ngModel)]=\"superStockist.BusinessAddress.State\" (change)=\"onStateChange($event)\">\r\n            <!-- <option value=\"0\" selected=\"selected\">Select State -->\r\n            <option *ngFor=\"let state of states;let i = index\" [value]=\"states[i].Name\">\r\n                {{states[i].Name}}\r\n            </option>\r\n        </select>\r\n        <p></p>\r\n        \r\n\r\n        <label>District</label>\r\n        <p></p>\r\n        <!-- <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"superStockist.BusinessAddress.District\"> -->\r\n        <select style=\"width: 320px;\" [(ngModel)]=\"superStockist.BusinessAddress.District\">\r\n            <!-- <option value=\"0\" selected=\"selected\">Select State -->\r\n            <option *ngFor=\"let dist of dists;let i = index\" [value]=\"dists[i].Name\">\r\n                {{dists[i].Name}}\r\n            </option>\r\n        </select>\r\n        <p></p>\r\n\r\n\r\n        <label>Region</label>\r\n        <p></p>\r\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"superStockist.BusinessAddress.Region\">\r\n        <p></p>\r\n\r\n\r\n        <label>Pin</label>\r\n        <p></p>\r\n        <input type=\"text\" class=\"SubHeaderInput\" [(ngModel)]=\"superStockist.BusinessAddress.Pin\">\r\n\r\n    </div>\r\n    <br>\r\n    <div style=\"float:inherit;padding-top: 20px;\">\r\n        <a [routerLink]=\"['/SuperStockistList']\" routerLinkActive=\"router-link-active\">Back</a>\r\n        ||\r\n        <input type=\"button\" width=\"400x;\" value=\"Save Record\" (click)=\"SaveRecord()\"\r\n                   style=\"background-color:rgba(16, 108, 230, 0.692); color: white;\">\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tran-assign-stock/tran-assign-stock.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tran-assign-stock/tran-assign-stock.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n        <span class=\"Header\">Stock Transfer</span>\r\n        <p></p>\r\n        <span>------------------------------------------</span>\r\n        <p></p>\r\n        <div style=\"float: left; padding-top:20px;width: 50%;\">\r\n                <label>Tranfer Type</label>  \r\n                <p></p>\r\n                <select id=\"transferType\" name=\"transferType\" style=\"width: 300px\">\r\n                        <option value=\"0\">Select</option>\r\n                        <option value=\"1\">My Channel</option>\r\n                        <option value=\"2\">Others</option>\r\n                </select> \r\n                <p></p>\r\n                <label>PO Number</label>  \r\n                <p></p>\r\n                <input type=\"text\" style=\"width: 200px\">\r\n                <input type=\"checkbox\"> Without PO  \r\n                <p></p>\r\n                 <label>\r\n                        User Type     \r\n                </label> \r\n                <p></p>\r\n                <select id=\"userType\" name=\"userType\" style=\"width: 300px\">\r\n                        <option value=\"0\">Select</option>\r\n                        <option value=\"1\">Retailer</option>\r\n                        <option value=\"2\">DSA</option>\r\n                        <option value=\"3\">BA</option>\r\n                        <option value=\"4\">LT Point</option>\r\n                        \r\n                </select> \r\n                <p></p>\r\n                <label>\r\n                        Users  :     \r\n                    </label>\r\n                    <p></p>\r\n                        <select id=\"usres\" name=\"usres\" style=\"width: 300px\">\r\n                        <option value=\"0\">Select</option>\r\n                        <option value=\"1\">Andy</option>\r\n                        <option value=\"2\">Jeckob</option>\r\n                        <option value=\"3\">Kristin</option>\r\n                        <option value=\"4\">Robert</option>\r\n                        </select> \r\n                    <p></p>\r\n                    <label>\r\n                        Product Type     \r\n                   </label>\r\n                   <p></p>\r\n                   <select id=\"productType\" name=\"productType\" style=\"width: 300px\">\r\n                        <option value=\"0\">Select</option>\r\n                        <option value=\"1\">BOX</option>\r\n                        <option value=\"2\">Device</option>\r\n                        <option value=\"3\">Accessories</option>\r\n                  </select> \r\n                   <p></p>\r\n                   <label>\r\n                        Product :     \r\n                  </label>\r\n                   <p></p>\r\n                   <select id=\"product\" name=\"product\" style=\"width: 300px\">\r\n                        <option value=\"0\">Select</option>\r\n                        <option value=\"1\">A</option>\r\n                        <option value=\"2\">B</option>\r\n                        <option value=\"2\">C</option>\r\n                  </select> \r\n                   <p></p>\r\n                   <label>\r\n                        Sale Type :     \r\n                 </label>\r\n                 <p></p>\r\n                 <input type=\"checkbox\"> Non FOC\r\n                 <input type=\"checkbox\"> FOC\r\n                 <p></p>\r\n        </div>\r\n    \r\n    \r\n    <div>\r\n        <div class=\"containerbodyitemleft\">\r\n                <label>\r\n                     \r\n                </label>\r\n        </div>\r\n        <div class=\"containerbodyitemright\">\r\n                         \r\n        </div>   \r\n    </div>\r\n    <br>    \r\n    <div>\r\n        <div class=\"containerbodyitemleft\">\r\n                          \r\n        </div>\r\n        <div class=\"containerbodyitemright\">\r\n                \r\n        </div>        \r\n    </div>\r\n    <br>\r\n    <div>\r\n        <div class=\"containerbodyitemleft\">\r\n           \r\n        </div>\r\n        <div class=\"containerbodyitemright\">\r\n                \r\n        </div>\r\n        \r\n    </div>\r\n\r\n    <br>\r\n    <div>\r\n        <div class=\"containerbodyitemleft\">\r\n               \r\n        </div>\r\n        <div class=\"containerbodyitemright\">\r\n                \r\n        </div>        \r\n    </div>\r\n\r\n    <br>\r\n    <div>\r\n            <div class=\"containerbodyitemleft\">\r\n                   \r\n            </div>\r\n            <div class=\"containerbodyitemright\">\r\n                   \r\n            </div> \r\n        \r\n    </div>\r\n\r\n    <br>\r\n    <div>\r\n            <div class=\"containerbodyitemleft\">\r\n                     \r\n            </div>\r\n            <div class=\"containerbodyitemright\">\r\n                   \r\n            </div> \r\n       \r\n    </div>\r\n\r\n    <br>\r\n    <div>\r\n        <div style=\"width: 15%; float: left; \">\r\n                <label style=\"font-weight: bold ; background-color:rgb(27, 166, 247);\r\n                color: whitesmoke;\">All Serials Numbers</label>                    \r\n               <textarea></textarea>  \r\n        </div>\r\n        \r\n        <div style=\"width: 20%; float: left;\">\r\n                <label style=\"font-weight: bold ; background-color:rgb(27, 166, 247);\r\n                color: whitesmoke;\">Selected Serials Numbers</label>           \r\n                <textarea></textarea>      \r\n        </div>\r\n        <div style=\"width: 75%; float: left;\">\r\n           \r\n                </div>\r\n          \r\n    </div>\r\n   \r\n    <div>\r\n        <input  type=\"button\" name=\"Add To Chart\" value=\"Add To Chart\" style=\"font-weight: bold ; background-color:rgb(27, 166, 247);\r\n        color: whitesmoke;\">\r\n    </div>\r\n   \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/about-compoment/about-compoment.component.css":
/*!***************************************************************!*\
  !*** ./src/app/about-compoment/about-compoment.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about-compoment/about-compoment.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/about-compoment/about-compoment.component.ts ***!
  \**************************************************************/
/*! exports provided: AboutCompomentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutCompomentComponent", function() { return AboutCompomentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutCompomentComponent = /** @class */ (function () {
    function AboutCompomentComponent() {
    }
    AboutCompomentComponent.prototype.ngOnInit = function () {
    };
    AboutCompomentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-compoment',
            template: __webpack_require__(/*! raw-loader!./about-compoment.component.html */ "./node_modules/raw-loader/index.js!./src/app/about-compoment/about-compoment.component.html"),
            styles: [__webpack_require__(/*! ./about-compoment.component.css */ "./src/app/about-compoment/about-compoment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutCompomentComponent);
    return AboutCompomentComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_compoment_home_compoment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-compoment/home-compoment.component */ "./src/app/home-compoment/home-compoment.component.ts");
/* harmony import */ var _about_compoment_about_compoment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-compoment/about-compoment.component */ "./src/app/about-compoment/about-compoment.component.ts");
/* harmony import */ var _tran_assign_stock_tran_assign_stock_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tran-assign-stock/tran-assign-stock.component */ "./src/app/tran-assign-stock/tran-assign-stock.component.ts");
/* harmony import */ var _super_stockist_list_super_stockist_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./super-stockist-list/super-stockist-list.component */ "./src/app/super-stockist-list/super-stockist-list.component.ts");
/* harmony import */ var _super_stockist_super_stockist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./super-stockist/super-stockist.component */ "./src/app/super-stockist/super-stockist.component.ts");
/* harmony import */ var _super_stockist_edit_super_stockist_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./super-stockist-edit/super-stockist-edit.component */ "./src/app/super-stockist-edit/super-stockist-edit.component.ts");
/* harmony import */ var _distributor_list_distributor_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./distributor-list/distributor-list.component */ "./src/app/distributor-list/distributor-list.component.ts");
/* harmony import */ var _distributor_distributor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./distributor/distributor.component */ "./src/app/distributor/distributor.component.ts");
/* harmony import */ var _distributor_edit_distributor_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./distributor-edit/distributor-edit.component */ "./src/app/distributor-edit/distributor-edit.component.ts");
/* harmony import */ var _retailer_list_retailer_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./retailer-list/retailer-list.component */ "./src/app/retailer-list/retailer-list.component.ts");
/* harmony import */ var _retailer_retailer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./retailer/retailer.component */ "./src/app/retailer/retailer.component.ts");
/* harmony import */ var _retailer_edit_retailer_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./retailer-edit/retailer-edit.component */ "./src/app/retailer-edit/retailer-edit.component.ts");
/* harmony import */ var _business_associate_business_associate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./business-associate/business-associate.component */ "./src/app/business-associate/business-associate.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");


















var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"] },
    { path: 'home', component: _home_compoment_home_compoment_component__WEBPACK_IMPORTED_MODULE_3__["HomeCompomentComponent"] },
    { path: 'about', component: _about_compoment_about_compoment_component__WEBPACK_IMPORTED_MODULE_4__["AboutCompomentComponent"] },
    { path: 'Transaction', component: _tran_assign_stock_tran_assign_stock_component__WEBPACK_IMPORTED_MODULE_5__["TranAssignStockComponent"] },
    { path: 'SuperStockistList', component: _super_stockist_list_super_stockist_list_component__WEBPACK_IMPORTED_MODULE_6__["SuperStockistListComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'superStockistAdd', component: _super_stockist_super_stockist_component__WEBPACK_IMPORTED_MODULE_7__["SuperStockistComponent"] },
    { path: 'superStockistEdit/:id', component: _super_stockist_edit_super_stockist_edit_component__WEBPACK_IMPORTED_MODULE_8__["SuperStockistEditComponent"] },
    { path: 'distributorList', component: _distributor_list_distributor_list_component__WEBPACK_IMPORTED_MODULE_9__["DistributorListComponent"] },
    { path: 'distributorAdd', component: _distributor_distributor_component__WEBPACK_IMPORTED_MODULE_10__["DistributorComponent"] },
    { path: 'distributorEdit/:id', component: _distributor_edit_distributor_edit_component__WEBPACK_IMPORTED_MODULE_11__["DistributorEditComponent"] },
    { path: 'retailerList', component: _retailer_list_retailer_list_component__WEBPACK_IMPORTED_MODULE_12__["RetailerListComponent"] },
    { path: 'retailerAdd', component: _retailer_retailer_component__WEBPACK_IMPORTED_MODULE_13__["RetailerComponent"] },
    { path: 'retailerEdit/:id', component: _retailer_edit_retailer_edit_component__WEBPACK_IMPORTED_MODULE_14__["RetailerEditComponent"] },
    { path: 'BusinessAssociate', component: _business_associate_business_associate_component__WEBPACK_IMPORTED_MODULE_15__["BusinessAssociateComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service_app_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/service/app-storage.service */ "./src/app/service/app-storage.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _model_LogInUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/LogInUser */ "./src/app/model/LogInUser.ts");





var AppComponent = /** @class */ (function () {
    /**
     *
     */
    function AppComponent(appStorageService, AuthService) {
        this.appStorageService = appStorageService;
        this.AuthService = AuthService;
        this.title = 'ZETTRACK INDIA';
        this.data = [];
        this.appStorageService.setUserNameInLocal('Admin');
        this.appStorageService.setParentCompanyIdInLocal('05008166-6159-493D-15EE-08D712D81DBC');
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('init called....');
        this.LogInUser = new _model_LogInUser__WEBPACK_IMPORTED_MODULE_4__["LogInUser"]();
        this.LogInUser.companyName = this.AuthService.getCompanyName();
        this.LogInUser.email = this.AuthService.getEmail();
        this.LogInUser.fname = this.AuthService.getFname();
        this.LogInUser.lname = this.AuthService.getLname();
        this.LogInUser.parentCompanyId = this.AuthService.getParentCompanyId();
        this.LogInUser.parentCompanyName = this.AuthService.getParentCompanyName();
        this.LogInUser.roleId = this.AuthService.getRoleId();
        this.LogInUser.roleName = this.AuthService.getRoleName();
    };
    AppComponent.prototype.logOut = function () {
        this.AuthService.logout();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _app_service_app_storage_service__WEBPACK_IMPORTED_MODULE_2__["AppStorageService"] },
        { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service_app_storage_service__WEBPACK_IMPORTED_MODULE_2__["AppStorageService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_compoment_home_compoment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-compoment/home-compoment.component */ "./src/app/home-compoment/home-compoment.component.ts");
/* harmony import */ var _about_compoment_about_compoment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about-compoment/about-compoment.component */ "./src/app/about-compoment/about-compoment.component.ts");
/* harmony import */ var _tran_assign_stock_tran_assign_stock_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tran-assign-stock/tran-assign-stock.component */ "./src/app/tran-assign-stock/tran-assign-stock.component.ts");
/* harmony import */ var _super_stockist_super_stockist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./super-stockist/super-stockist.component */ "./src/app/super-stockist/super-stockist.component.ts");
/* harmony import */ var _distributor_distributor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./distributor/distributor.component */ "./src/app/distributor/distributor.component.ts");
/* harmony import */ var _retailer_retailer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./retailer/retailer.component */ "./src/app/retailer/retailer.component.ts");
/* harmony import */ var _business_associate_business_associate_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./business-associate/business-associate.component */ "./src/app/business-associate/business-associate.component.ts");
/* harmony import */ var _filter_filter_by_match_text_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./filter/filter-by-match-text.pipe */ "./src/app/filter/filter-by-match-text.pipe.ts");
/* harmony import */ var _super_stockist_list_super_stockist_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./super-stockist-list/super-stockist-list.component */ "./src/app/super-stockist-list/super-stockist-list.component.ts");
/* harmony import */ var _model_app_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./model/app-storage */ "./src/app/model/app-storage.ts");
/* harmony import */ var _super_stockist_edit_super_stockist_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./super-stockist-edit/super-stockist-edit.component */ "./src/app/super-stockist-edit/super-stockist-edit.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _distributor_edit_distributor_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./distributor-edit/distributor-edit.component */ "./src/app/distributor-edit/distributor-edit.component.ts");
/* harmony import */ var _retailer_edit_retailer_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./retailer-edit/retailer-edit.component */ "./src/app/retailer-edit/retailer-edit.component.ts");
/* harmony import */ var _retailer_list_retailer_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./retailer-list/retailer-list.component */ "./src/app/retailer-list/retailer-list.component.ts");
/* harmony import */ var _distributor_list_distributor_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./distributor-list/distributor-list.component */ "./src/app/distributor-list/distributor-list.component.ts");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _home_compoment_home_compoment_component__WEBPACK_IMPORTED_MODULE_8__["HomeCompomentComponent"],
                _about_compoment_about_compoment_component__WEBPACK_IMPORTED_MODULE_9__["AboutCompomentComponent"],
                _tran_assign_stock_tran_assign_stock_component__WEBPACK_IMPORTED_MODULE_10__["TranAssignStockComponent"],
                _super_stockist_super_stockist_component__WEBPACK_IMPORTED_MODULE_11__["SuperStockistComponent"],
                _distributor_distributor_component__WEBPACK_IMPORTED_MODULE_12__["DistributorComponent"],
                _retailer_retailer_component__WEBPACK_IMPORTED_MODULE_13__["RetailerComponent"],
                _business_associate_business_associate_component__WEBPACK_IMPORTED_MODULE_14__["BusinessAssociateComponent"],
                _filter_filter_by_match_text_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterByMatchTextPipe"],
                _super_stockist_list_super_stockist_list_component__WEBPACK_IMPORTED_MODULE_16__["SuperStockistListComponent"],
                _super_stockist_edit_super_stockist_edit_component__WEBPACK_IMPORTED_MODULE_18__["SuperStockistEditComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _distributor_edit_distributor_edit_component__WEBPACK_IMPORTED_MODULE_20__["DistributorEditComponent"],
                _retailer_edit_retailer_edit_component__WEBPACK_IMPORTED_MODULE_21__["RetailerEditComponent"],
                _retailer_list_retailer_list_component__WEBPACK_IMPORTED_MODULE_22__["RetailerListComponent"],
                _distributor_list_distributor_list_component__WEBPACK_IMPORTED_MODULE_23__["DistributorListComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                angular_webstorage_service__WEBPACK_IMPORTED_MODULE_6__["StorageServiceModule"],
            ],
            providers: [_model_app_storage__WEBPACK_IMPORTED_MODULE_17__["AppStorage"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            exports: [_super_stockist_super_stockist_component__WEBPACK_IMPORTED_MODULE_11__["SuperStockistComponent"], _distributor_distributor_component__WEBPACK_IMPORTED_MODULE_12__["DistributorComponent"], _retailer_retailer_component__WEBPACK_IMPORTED_MODULE_13__["RetailerComponent"], _business_associate_business_associate_component__WEBPACK_IMPORTED_MODULE_14__["BusinessAssociateComponent"], _filter_filter_by_match_text_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterByMatchTextPipe"], _super_stockist_list_super_stockist_list_component__WEBPACK_IMPORTED_MODULE_16__["SuperStockistListComponent"], _super_stockist_edit_super_stockist_edit_component__WEBPACK_IMPORTED_MODULE_18__["SuperStockistEditComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"], _distributor_edit_distributor_edit_component__WEBPACK_IMPORTED_MODULE_20__["DistributorEditComponent"], _retailer_edit_retailer_edit_component__WEBPACK_IMPORTED_MODULE_21__["RetailerEditComponent"], _retailer_list_retailer_list_component__WEBPACK_IMPORTED_MODULE_22__["RetailerListComponent"], _distributor_list_distributor_list_component__WEBPACK_IMPORTED_MODULE_23__["DistributorListComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");



var AuthGuard = /** @class */ (function () {
    /**
     *
     */
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.authService.isLoggedIn();
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/business-associate/business-associate.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/business-associate/business-associate.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/business-associate/business-associate.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/business-associate/business-associate.component.ts ***!
  \********************************************************************/
/*! exports provided: BusinessAssociateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessAssociateComponent", function() { return BusinessAssociateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BusinessAssociateComponent = /** @class */ (function () {
    function BusinessAssociateComponent() {
    }
    BusinessAssociateComponent.prototype.ngOnInit = function () {
    };
    BusinessAssociateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-business-associate',
            template: __webpack_require__(/*! raw-loader!./business-associate.component.html */ "./node_modules/raw-loader/index.js!./src/app/business-associate/business-associate.component.html"),
            styles: [__webpack_require__(/*! ./business-associate.component.css */ "./src/app/business-associate/business-associate.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BusinessAssociateComponent);
    return BusinessAssociateComponent;
}());



/***/ }),

/***/ "./src/app/distributor-edit/distributor-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/distributor-edit/distributor-edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/distributor-edit/distributor-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/distributor-edit/distributor-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: DistributorEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributorEditComponent", function() { return DistributorEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_distributor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/distributor.service */ "./src/app/service/distributor.service.ts");
/* harmony import */ var _model_Distributor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/Distributor */ "./src/app/model/Distributor.ts");
/* harmony import */ var _model_BusinessAddress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/BusinessAddress */ "./src/app/model/BusinessAddress.ts");
/* harmony import */ var _model_BusinessContactInformation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/BusinessContactInformation */ "./src/app/model/BusinessContactInformation.ts");
/* harmony import */ var _model_PersonalContactInformation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/PersonalContactInformation */ "./src/app/model/PersonalContactInformation.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/state.service */ "./src/app/service/state.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");











var DistributorEditComponent = /** @class */ (function () {
    function DistributorEditComponent(distributorService, AuthService, stateService, router, route) {
        var _this = this;
        this.distributorService = distributorService;
        this.AuthService = AuthService;
        this.stateService = stateService;
        this.router = router;
        this.route = route;
        this.ChkForAuth();
        this.obj = new _model_Distributor__WEBPACK_IMPORTED_MODULE_3__["Distributor"]();
        this.obj.businessAddress = new _model_BusinessAddress__WEBPACK_IMPORTED_MODULE_4__["BusinessAddress"]();
        this.obj.businessContactInformation = new _model_BusinessContactInformation__WEBPACK_IMPORTED_MODULE_5__["BusinessContactInformation"]();
        this.obj.personalContactInformation = new _model_PersonalContactInformation__WEBPACK_IMPORTED_MODULE_6__["PersonalContactInformation"]();
        this.stateService.getStates().subscribe(function (data) {
            _this.states = data;
        }, function (data) {
            console.log('Error getting the state' + data);
        }).add(function () {
            route.paramMap.subscribe(function (p) {
                _this.id = p.get('id');
                _this.getData();
            });
        });
    }
    DistributorEditComponent.prototype.ngOnInit = function () {
    };
    DistributorEditComponent.prototype.ChkForAuth = function () {
        var roleId = this.AuthService.getRoleId();
        if (roleId != "2") {
            alert('You are not authorized to access the resurce');
            this.router.navigate(['../home']);
        }
    };
    DistributorEditComponent.prototype.getData = function () {
        var _this = this;
        this.distributorService.getData(this.id).subscribe(function (data) {
            _this.obj = data;
            console.log('Data from server');
            console.log(_this.obj);
            console.log(data);
            _this.getDistrict();
        });
    };
    DistributorEditComponent.prototype.onStateChange = function (args) {
        this.obj.businessAddress.state = args.target.value;
        this.getDistrict();
        this.obj.businessAddress.district = this.dists[0].Name;
    };
    DistributorEditComponent.prototype.getDistrict = function () {
        var stateName = this.obj.businessAddress.state;
        this.dists = this.states.find(function (o) { return o.Name == stateName; }).Dist;
        console.log('District info');
        console.log(stateName);
        console.log(this.dists);
        console.log('District info');
    };
    DistributorEditComponent.prototype.SaveRecord = function () {
        var _this = this;
        if (this.validateRecord() == false) {
            return false;
        }
        else {
            this.obj.superStockistId = this.AuthService.getId();
            this.distributorService.putData(this.obj).add(function (data) {
                alert('Record Saved');
                _this.router.navigate(['../distributorList']);
            });
        }
    };
    DistributorEditComponent.prototype.validateRecord = function () {
        if ((Object(util__WEBPACK_IMPORTED_MODULE_9__["isUndefined"])(this.obj.fname)) || this.obj.fname.trim() == '') {
            alert('First name is required.');
            return false;
        }
        if ((Object(util__WEBPACK_IMPORTED_MODULE_9__["isUndefined"])(this.obj.lname)) || this.obj.lname.trim() == '') {
            alert('Last name is required.');
            return false;
        }
        if ((Object(util__WEBPACK_IMPORTED_MODULE_9__["isUndefined"])(this.obj.email)) || this.obj.email == '') {
            alert('Email is required.');
            return false;
        }
    };
    DistributorEditComponent.ctorParameters = function () { return [
        { type: _service_distributor_service__WEBPACK_IMPORTED_MODULE_2__["DistributorService"] },
        { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _service_state_service__WEBPACK_IMPORTED_MODULE_8__["StateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }
    ]; };
    DistributorEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-distributor-edit',
            template: __webpack_require__(/*! raw-loader!./distributor-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/distributor-edit/distributor-edit.component.html"),
            styles: [__webpack_require__(/*! ./distributor-edit.component.css */ "./src/app/distributor-edit/distributor-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_distributor_service__WEBPACK_IMPORTED_MODULE_2__["DistributorService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _service_state_service__WEBPACK_IMPORTED_MODULE_8__["StateService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]])
    ], DistributorEditComponent);
    return DistributorEditComponent;
}());



/***/ }),

/***/ "./src/app/distributor-list/distributor-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/distributor-list/distributor-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/distributor-list/distributor-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/distributor-list/distributor-list.component.ts ***!
  \****************************************************************/
/*! exports provided: DistributorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributorListComponent", function() { return DistributorListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_distributor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/distributor.service */ "./src/app/service/distributor.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var DistributorListComponent = /** @class */ (function () {
    function DistributorListComponent(DistributorService, AuthService, router) {
        this.DistributorService = DistributorService;
        this.AuthService = AuthService;
        this.router = router;
        this.searchText = '';
        this.ChkForAuth();
    }
    DistributorListComponent.prototype.ngOnInit = function () {
    };
    DistributorListComponent.prototype.ChkForAuth = function () {
        var roleId = this.AuthService.getRoleId();
        if (roleId != "2") {
            alert('You are not authorized to access the resurce');
            this.router.navigate(['../home']);
        }
    };
    DistributorListComponent.prototype.loadData = function () {
        var _this = this;
        this.searchText = '';
        var superStockistId = this.AuthService.getId();
        this.DistributorService.getDataAll(superStockistId)
            .subscribe(function (data) {
            _this.objCollection = data;
            (function (err) { console.log(err); });
        });
    };
    DistributorListComponent.ctorParameters = function () { return [
        { type: _service_distributor_service__WEBPACK_IMPORTED_MODULE_2__["DistributorService"] },
        { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    DistributorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-distributor-list',
            template: __webpack_require__(/*! raw-loader!./distributor-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/distributor-list/distributor-list.component.html"),
            styles: [__webpack_require__(/*! ./distributor-list.component.css */ "./src/app/distributor-list/distributor-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_distributor_service__WEBPACK_IMPORTED_MODULE_2__["DistributorService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], DistributorListComponent);
    return DistributorListComponent;
}());



/***/ }),

/***/ "./src/app/distributor/distributor.component.css":
/*!*******************************************************!*\
  !*** ./src/app/distributor/distributor.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/distributor/distributor.component.ts":
/*!******************************************************!*\
  !*** ./src/app/distributor/distributor.component.ts ***!
  \******************************************************/
/*! exports provided: DistributorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributorComponent", function() { return DistributorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_distributor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/distributor.service */ "./src/app/service/distributor.service.ts");
/* harmony import */ var _model_Distributor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/Distributor */ "./src/app/model/Distributor.ts");
/* harmony import */ var _model_BusinessAddress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/BusinessAddress */ "./src/app/model/BusinessAddress.ts");
/* harmony import */ var _model_BusinessContactInformation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/BusinessContactInformation */ "./src/app/model/BusinessContactInformation.ts");
/* harmony import */ var _model_PersonalContactInformation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/PersonalContactInformation */ "./src/app/model/PersonalContactInformation.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/state.service */ "./src/app/service/state.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");











var DistributorComponent = /** @class */ (function () {
    function DistributorComponent(distributorService, AuthService, stateService, router, route) {
        var _this = this;
        this.distributorService = distributorService;
        this.AuthService = AuthService;
        this.stateService = stateService;
        this.router = router;
        this.route = route;
        this.ChkForAuth();
        this.obj = new _model_Distributor__WEBPACK_IMPORTED_MODULE_3__["Distributor"]();
        this.obj.businessAddress = new _model_BusinessAddress__WEBPACK_IMPORTED_MODULE_4__["BusinessAddress"]();
        this.obj.businessContactInformation = new _model_BusinessContactInformation__WEBPACK_IMPORTED_MODULE_5__["BusinessContactInformation"]();
        this.obj.personalContactInformation = new _model_PersonalContactInformation__WEBPACK_IMPORTED_MODULE_6__["PersonalContactInformation"]();
        this.stateService.getStates().subscribe(function (data) {
            _this.states = data;
            _this.obj.businessAddress.state = _this.states[0].Name;
            _this.getDistrict();
        }, function (data) {
            console.log('Error getting the state' + data);
        });
    }
    DistributorComponent.prototype.ngOnInit = function () {
    };
    DistributorComponent.prototype.ChkForAuth = function () {
        var roleId = this.AuthService.getRoleId();
        if (roleId != "2") {
            alert('You are not authorized to access the resurce');
            this.router.navigate(['../home']);
        }
    };
    DistributorComponent.prototype.onStateChange = function (args) {
        this.obj.businessAddress.state = args.target.value;
        this.getDistrict();
    };
    DistributorComponent.prototype.getDistrict = function () {
        var stateName = this.obj.businessAddress.state;
        this.dists = this.states.find(function (o) { return o.Name == stateName; }).Dist;
        this.obj.businessAddress.district = this.dists[0].Name;
    };
    DistributorComponent.prototype.validateRecord = function () {
        if ((Object(util__WEBPACK_IMPORTED_MODULE_9__["isUndefined"])(this.obj.fname)) || this.obj.fname.trim() == '') {
            alert('First name is required.');
            return false;
        }
        if ((Object(util__WEBPACK_IMPORTED_MODULE_9__["isUndefined"])(this.obj.lname)) || this.obj.lname.trim() == '') {
            alert('Last name is required.');
            return false;
        }
        if ((Object(util__WEBPACK_IMPORTED_MODULE_9__["isUndefined"])(this.obj.email)) || this.obj.email == '') {
            alert('Email is required.');
            return false;
        }
    };
    DistributorComponent.prototype.SaveRecord = function () {
        var _this = this;
        if (this.validateRecord() == false) {
            return false;
        }
        else {
            this.obj.superStockistId = this.AuthService.getId();
            this.distributorService.postData(this.obj).add(function (data) {
                alert('Record Saved');
                _this.router.navigate(['../distributorList']);
            });
        }
    };
    DistributorComponent.ctorParameters = function () { return [
        { type: _service_distributor_service__WEBPACK_IMPORTED_MODULE_2__["DistributorService"] },
        { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _service_state_service__WEBPACK_IMPORTED_MODULE_8__["StateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }
    ]; };
    DistributorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-distributor',
            template: __webpack_require__(/*! raw-loader!./distributor.component.html */ "./node_modules/raw-loader/index.js!./src/app/distributor/distributor.component.html"),
            styles: [__webpack_require__(/*! ./distributor.component.css */ "./src/app/distributor/distributor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_distributor_service__WEBPACK_IMPORTED_MODULE_2__["DistributorService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _service_state_service__WEBPACK_IMPORTED_MODULE_8__["StateService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]])
    ], DistributorComponent);
    return DistributorComponent;
}());



/***/ }),

/***/ "./src/app/filter/filter-by-match-text.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/filter/filter-by-match-text.pipe.ts ***!
  \*****************************************************/
/*! exports provided: FilterByMatchTextPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByMatchTextPipe", function() { return FilterByMatchTextPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterByMatchTextPipe = /** @class */ (function () {
    function FilterByMatchTextPipe() {
    }
    FilterByMatchTextPipe.prototype.transform = function (value, criteria) {
        if (!value)
            return [];
        if (!criteria)
            return value;
        return value.filter(function (i) {
            for (var key in i) {
                if (("" + i[key]).includes(criteria))
                    return true;
            }
        });
    };
    FilterByMatchTextPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filterByMatchText'
        })
    ], FilterByMatchTextPipe);
    return FilterByMatchTextPipe;
}());



/***/ }),

/***/ "./src/app/home-compoment/home-compoment.component.css":
/*!*************************************************************!*\
  !*** ./src/app/home-compoment/home-compoment.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home-compoment/home-compoment.component.ts":
/*!************************************************************!*\
  !*** ./src/app/home-compoment/home-compoment.component.ts ***!
  \************************************************************/
/*! exports provided: HomeCompomentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCompomentComponent", function() { return HomeCompomentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");



var HomeCompomentComponent = /** @class */ (function () {
    function HomeCompomentComponent(app) {
        this.app = app;
        app.ngOnInit();
    }
    HomeCompomentComponent.prototype.ngOnInit = function () {
    };
    HomeCompomentComponent.ctorParameters = function () { return [
        { type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] }
    ]; };
    HomeCompomentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-compoment',
            template: __webpack_require__(/*! raw-loader!./home-compoment.component.html */ "./node_modules/raw-loader/index.js!./src/app/home-compoment/home-compoment.component.html"),
            styles: [__webpack_require__(/*! ./home-compoment.component.css */ "./src/app/home-compoment/home-compoment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], HomeCompomentComponent);
    return HomeCompomentComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\r\n    width: 400px;\r\n    margin: 16px auto;\r\n    font-size: 16px;\r\n  }\r\n  \r\n  .login-header,\r\n  .login p {\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .login-triangle {\r\n    width: 0;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    border: 12px solid transparent;\r\n    border-bottom-color: rgb(15, 66, 107);\r\n  }\r\n  \r\n  .login-header {\r\n    background: rgb(12, 77, 129);\r\n    padding: 20px;\r\n    font-size: 1.4em;\r\n    font-weight: normal;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n  }\r\n  \r\n  .login-container {\r\n    background: #ebebeb;\r\n    padding: 12px;\r\n  }\r\n  \r\n  .login p {\r\n    padding: 12px;\r\n  }\r\n  \r\n  .login input {\r\n    box-sizing: border-box;\r\n    display: block;\r\n    width: 100%;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    padding: 16px;\r\n    outline: 0;\r\n    font-family: inherit;\r\n    font-size: 0.95em;\r\n  }\r\n  \r\n  .login input[type=\"email\"],\r\n  .login input[type=\"password\"] {\r\n    background: #fff;\r\n    border-color: #bbb;\r\n    color: #555;\r\n  }\r\n  \r\n  .login input[type=\"email\"]:focus,\r\n  .login input[type=\"password\"]:focus {\r\n    border-color: #888;\r\n  }\r\n  \r\n  .login input[type=\"submit\"] {\r\n    background: rgb(1, 29, 51);\r\n    border-color: transparent;\r\n    color: #fff;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .login input[type=\"submit\"]:hover {\r\n    background: #17c;\r\n  }\r\n  \r\n  .login input[type=\"submit\"]:focus {\r\n    border-color: #05a;\r\n  }\r\n  \r\n  .has-error input[type=\"email\"],\r\n.has-error input[type=\"password\"] {\r\n    border-color: rgb(216, 12, 12);\r\n    color: rgb(230, 14, 14);\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, formBuilder) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.isSubmitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "formControls", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.loginForm.value);
        this.isSubmitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
            next: function (data) {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isUndefined"])(data)) {
                    if ((data.roleId > 0)) {
                        _this.authService.setAccessToken(data);
                        _this.router.navigateByUrl('/home');
                    }
                    else {
                        alert('LonIn Failed...!!!');
                    }
                }
                else {
                    alert('LonIn Failed...!!!');
                }
            },
            error: function (data) {
                console.log('this is the error message' + data);
            },
            complete: function () {
                console.log('The login call completed...');
            }
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/model/BusinessAddress.ts":
/*!******************************************!*\
  !*** ./src/app/model/BusinessAddress.ts ***!
  \******************************************/
/*! exports provided: BusinessAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessAddress", function() { return BusinessAddress; });
var BusinessAddress = /** @class */ (function () {
    function BusinessAddress() {
    }
    Object.defineProperty(BusinessAddress.prototype, "ID", {
        get: function () {
            return this.Id;
        },
        set: function (value) {
            this.Id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BusinessAddress.prototype, "country", {
        get: function () {
            return this.Country;
        },
        set: function (value) {
            this.Country = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BusinessAddress.prototype, "state", {
        get: function () {
            return this.State;
        },
        set: function (value) {
            this.State = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BusinessAddress.prototype, "district", {
        get: function () {
            return this.District;
        },
        set: function (value) {
            this.District = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BusinessAddress.prototype, "region", {
        get: function () {
            return this.Region;
        },
        set: function (value) {
            this.Region = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BusinessAddress.prototype, "pin", {
        get: function () {
            return this.Pin;
        },
        set: function (value) {
            this.Pin = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BusinessAddress.prototype, "outLateName", {
        get: function () {
            return this.OutLateName;
        },
        set: function (value) {
            this.OutLateName = value;
        },
        enumerable: true,
        configurable: true
    });
    return BusinessAddress;
}());



/***/ }),

/***/ "./src/app/model/BusinessContactInformation.ts":
/*!*****************************************************!*\
  !*** ./src/app/model/BusinessContactInformation.ts ***!
  \*****************************************************/
/*! exports provided: BusinessContactInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessContactInformation", function() { return BusinessContactInformation; });
var BusinessContactInformation = /** @class */ (function () {
    function BusinessContactInformation() {
    }
    Object.defineProperty(BusinessContactInformation.prototype, "ID", {
        get: function () {
            return this.Id;
        },
        set: function (value) {
            this.Id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BusinessContactInformation.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BusinessContactInformation.prototype, "mobNoPrimary", {
        get: function () {
            return this.MobNoPrimary;
        },
        set: function (value) {
            this.MobNoPrimary = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BusinessContactInformation.prototype, "mobNoAlternate", {
        get: function () {
            return this.MobNoAlternate;
        },
        set: function (value) {
            this.MobNoAlternate = value;
        },
        enumerable: true,
        configurable: true
    });
    return BusinessContactInformation;
}());



/***/ }),

/***/ "./src/app/model/Distributor.ts":
/*!**************************************!*\
  !*** ./src/app/model/Distributor.ts ***!
  \**************************************/
/*! exports provided: Distributor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Distributor", function() { return Distributor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/app/model/user.ts");


var Distributor = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Distributor, _super);
    function Distributor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Distributor.prototype, "ID", {
        get: function () {
            return this.Id;
        },
        set: function (v) {
            this.Id = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Distributor.prototype, "businessAddress", {
        get: function () {
            return this.BusinessAddress;
        },
        set: function (value) {
            this.BusinessAddress = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Distributor.prototype, "businessAssociate", {
        get: function () {
            return this.BusinessAssociate;
        },
        set: function (value) {
            this.BusinessAssociate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Distributor.prototype, "retailer", {
        get: function () {
            return this.Retailer;
        },
        set: function (value) {
            this.Retailer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Distributor.prototype, "superStockistId", {
        get: function () {
            return this.SuperStockistId;
        },
        set: function (value) {
            this.SuperStockistId = value;
        },
        enumerable: true,
        configurable: true
    });
    return Distributor;
}(_user__WEBPACK_IMPORTED_MODULE_1__["user"]));



/***/ }),

/***/ "./src/app/model/LogInUser.ts":
/*!************************************!*\
  !*** ./src/app/model/LogInUser.ts ***!
  \************************************/
/*! exports provided: LogInUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInUser", function() { return LogInUser; });
var LogInUser = /** @class */ (function () {
    function LogInUser() {
    }
    return LogInUser;
}());



/***/ }),

/***/ "./src/app/model/PersonalContactInformation.ts":
/*!*****************************************************!*\
  !*** ./src/app/model/PersonalContactInformation.ts ***!
  \*****************************************************/
/*! exports provided: PersonalContactInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalContactInformation", function() { return PersonalContactInformation; });
var PersonalContactInformation = /** @class */ (function () {
    function PersonalContactInformation() {
    }
    Object.defineProperty(PersonalContactInformation.prototype, "ID", {
        get: function () {
            return this.Id;
        },
        set: function (value) {
            this.Id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonalContactInformation.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonalContactInformation.prototype, "mobNoPrimary", {
        get: function () {
            return this.MobNoPrimary;
        },
        set: function (value) {
            this.MobNoPrimary = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonalContactInformation.prototype, "mobNoAlternate", {
        get: function () {
            return this.MobNoAlternate;
        },
        set: function (value) {
            this.MobNoAlternate = value;
        },
        enumerable: true,
        configurable: true
    });
    return PersonalContactInformation;
}());



/***/ }),

/***/ "./src/app/model/Retailer.ts":
/*!***********************************!*\
  !*** ./src/app/model/Retailer.ts ***!
  \***********************************/
/*! exports provided: Retailer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Retailer", function() { return Retailer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/app/model/user.ts");


var Retailer = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Retailer, _super);
    function Retailer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Retailer.prototype, "ID", {
        get: function () {
            return this.Id;
        },
        set: function (v) {
            this.Id = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Retailer.prototype, "businessAddress", {
        get: function () {
            return this.BusinessAddress;
        },
        set: function (value) {
            this.BusinessAddress = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Retailer.prototype, "businessAssociate", {
        get: function () {
            return this.BusinessAssociate;
        },
        set: function (value) {
            this.BusinessAssociate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Retailer.prototype, "distributorId", {
        get: function () {
            return this.DistributorId;
        },
        set: function (value) {
            this.DistributorId = value;
        },
        enumerable: true,
        configurable: true
    });
    return Retailer;
}(_user__WEBPACK_IMPORTED_MODULE_1__["user"]));



/***/ }),

/***/ "./src/app/model/SuperStockist.ts":
/*!****************************************!*\
  !*** ./src/app/model/SuperStockist.ts ***!
  \****************************************/
/*! exports provided: SuperStockist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperStockist", function() { return SuperStockist; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/app/model/user.ts");


var SuperStockist = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SuperStockist, _super);
    function SuperStockist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SuperStockist.prototype, "ID", {
        get: function () {
            return this.Id;
        },
        set: function (v) {
            this.Id = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuperStockist.prototype, "businessAddress", {
        get: function () {
            return this.BusinessAddress;
        },
        set: function (value) {
            this.BusinessAddress = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuperStockist.prototype, "parentCompanyId", {
        get: function () {
            return this.ParentCompanyId;
        },
        set: function (v) {
            this.ParentCompanyId = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuperStockist.prototype, "distributors", {
        get: function () {
            return this._distributors;
        },
        set: function (v) {
            this._distributors = v;
        },
        enumerable: true,
        configurable: true
    });
    return SuperStockist;
}(_user__WEBPACK_IMPORTED_MODULE_1__["user"]));



/***/ }),

/***/ "./src/app/model/app-storage.ts":
/*!**************************************!*\
  !*** ./src/app/model/app-storage.ts ***!
  \**************************************/
/*! exports provided: AppStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStorage", function() { return AppStorage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");



var AppStorage = /** @class */ (function () {
    /**
     *
     */
    //public data:any=[]
    function AppStorage(storage) {
        this.storage = storage;
    }
    Object.defineProperty(AppStorage.prototype, "ParentCompanyId", {
        get: function () {
            //return this._ParentCompanyId;
            return this.getFromLocal('_ParentCompanyId');
        },
        set: function (v) {
            this._ParentCompanyId = v;
            this.saveInLocal('_ParentCompanyId', v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppStorage.prototype, "UserName", {
        get: function () {
            //return this._UserName;
            return this.getFromLocal('_UserName');
        },
        set: function (v) {
            this._UserName = v;
            this.saveInLocal('_UserName', v);
        },
        enumerable: true,
        configurable: true
    });
    AppStorage.prototype.saveInLocal = function (key, val) {
        console.log('recieved= key:' + key + 'value:' + val);
        this.storage.set(key, val);
        //this.data[key]= this.storage.get(key);
    };
    AppStorage.prototype.getFromLocal = function (key) {
        console.log('recieved= key:' + key);
        return this.storage.get(key);
        //this.data[key]= this.storage.get(key);
        //console.log(this.data);
    };
    AppStorage.ctorParameters = function () { return [
        { type: angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["WebStorageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"],] }] }
    ]; };
    AppStorage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["WebStorageService"]])
    ], AppStorage);
    return AppStorage;
}());



/***/ }),

/***/ "./src/app/model/user.ts":
/*!*******************************!*\
  !*** ./src/app/model/user.ts ***!
  \*******************************/
/*! exports provided: user */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
var user = /** @class */ (function () {
    function user() {
    }
    Object.defineProperty(user.prototype, "fname", {
        get: function () {
            return this.Fname;
        },
        set: function (v) {
            this.Fname = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(user.prototype, "lname", {
        get: function () {
            return this.Lname;
        },
        set: function (v) {
            this.Lname = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(user.prototype, "email", {
        get: function () {
            return this.Email;
        },
        set: function (v) {
            this.Email = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(user.prototype, "password", {
        get: function () {
            return this.Password;
        },
        set: function (v) {
            this.Password = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(user.prototype, "roleId", {
        get: function () {
            return this.RoleId;
        },
        set: function (v) {
            this.RoleId = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(user.prototype, "businessContactInformation", {
        get: function () {
            return this.BusinessContactInformation;
        },
        set: function (v) {
            this.BusinessContactInformation = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(user.prototype, "personalContactInformation", {
        get: function () {
            return this.PersonalContactInformation;
        },
        set: function (v) {
            this.PersonalContactInformation = v;
        },
        enumerable: true,
        configurable: true
    });
    return user;
}());



/***/ }),

/***/ "./src/app/retailer-edit/retailer-edit.component.css":
/*!***********************************************************!*\
  !*** ./src/app/retailer-edit/retailer-edit.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/retailer-edit/retailer-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/retailer-edit/retailer-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: RetailerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetailerEditComponent", function() { return RetailerEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_retailer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/retailer.service */ "./src/app/service/retailer.service.ts");
/* harmony import */ var _model_Retailer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/Retailer */ "./src/app/model/Retailer.ts");
/* harmony import */ var _model_BusinessAddress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/BusinessAddress */ "./src/app/model/BusinessAddress.ts");
/* harmony import */ var _model_BusinessContactInformation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/BusinessContactInformation */ "./src/app/model/BusinessContactInformation.ts");
/* harmony import */ var _model_PersonalContactInformation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/PersonalContactInformation */ "./src/app/model/PersonalContactInformation.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/state.service */ "./src/app/service/state.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");











var RetailerEditComponent = /** @class */ (function () {
    function RetailerEditComponent(retailerService, AuthService, stateService, router, route) {
        var _this = this;
        this.retailerService = retailerService;
        this.AuthService = AuthService;
        this.stateService = stateService;
        this.router = router;
        this.route = route;
        this.ChkForAuth();
        this.obj = new _model_Retailer__WEBPACK_IMPORTED_MODULE_3__["Retailer"]();
        this.obj.businessAddress = new _model_BusinessAddress__WEBPACK_IMPORTED_MODULE_4__["BusinessAddress"]();
        this.obj.businessContactInformation = new _model_BusinessContactInformation__WEBPACK_IMPORTED_MODULE_5__["BusinessContactInformation"]();
        this.obj.personalContactInformation = new _model_PersonalContactInformation__WEBPACK_IMPORTED_MODULE_6__["PersonalContactInformation"]();
        this.stateService.getStates().subscribe(function (data) {
            _this.states = data;
        }, function (data) {
            console.log('Error getting the state' + data);
        }).add(function () {
            route.paramMap.subscribe(function (p) {
                _this.id = p.get('id');
                _this.getData();
            });
        });
    }
    RetailerEditComponent.prototype.ngOnInit = function () {
    };
    RetailerEditComponent.prototype.ChkForAuth = function () {
        var roleId = this.AuthService.getRoleId();
        if (roleId != "3") {
            alert('You are not authorized to access the resurce');
            this.router.navigate(['../home']);
        }
    };
    RetailerEditComponent.prototype.getData = function () {
        var _this = this;
        this.retailerService.getData(this.id).subscribe(function (data) {
            _this.obj = data;
            console.log('Data from server');
            console.log(_this.obj);
            console.log(data);
            _this.getDistrict();
        });
    };
    RetailerEditComponent.prototype.SaveRecord = function () {
        var _this = this;
        if (this.validateRecord() == false) {
            return false;
        }
        else {
            this.obj.distributorId = this.AuthService.getId();
            this.retailerService.putData(this.obj).add(function (data) {
                alert('Record Saved');
                _this.router.navigate(['../retailerList']);
            });
        }
    };
    RetailerEditComponent.prototype.onStateChange = function (args) {
        this.obj.businessAddress.state = args.target.value;
        this.getDistrict();
        this.obj.businessAddress.district = this.dists[0].Name;
    };
    RetailerEditComponent.prototype.getDistrict = function () {
        var stateName = this.obj.businessAddress.state;
        this.dists = this.states.find(function (o) { return o.Name == stateName; }).Dist;
    };
    RetailerEditComponent.prototype.validateRecord = function () {
        alert(this.obj.fname);
        if ((Object(util__WEBPACK_IMPORTED_MODULE_9__["isUndefined"])(this.obj.fname)) || this.obj.fname.trim() == '') {
            alert('First name is required.');
            return false;
        }
        if ((Object(util__WEBPACK_IMPORTED_MODULE_9__["isUndefined"])(this.obj.lname)) || this.obj.lname.trim() == '') {
            alert('Last name is required.');
            return false;
        }
        if ((Object(util__WEBPACK_IMPORTED_MODULE_9__["isUndefined"])(this.obj.businessContactInformation.email)) || this.obj.businessContactInformation.email == '') {
            alert('Email is required.');
            return false;
        }
    };
    RetailerEditComponent.ctorParameters = function () { return [
        { type: _service_retailer_service__WEBPACK_IMPORTED_MODULE_2__["RetailerService"] },
        { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _service_state_service__WEBPACK_IMPORTED_MODULE_8__["StateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }
    ]; };
    RetailerEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-retailer-edit',
            template: __webpack_require__(/*! raw-loader!./retailer-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/retailer-edit/retailer-edit.component.html"),
            styles: [__webpack_require__(/*! ./retailer-edit.component.css */ "./src/app/retailer-edit/retailer-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_retailer_service__WEBPACK_IMPORTED_MODULE_2__["RetailerService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _service_state_service__WEBPACK_IMPORTED_MODULE_8__["StateService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]])
    ], RetailerEditComponent);
    return RetailerEditComponent;
}());



/***/ }),

/***/ "./src/app/retailer-list/retailer-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/retailer-list/retailer-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/retailer-list/retailer-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/retailer-list/retailer-list.component.ts ***!
  \**********************************************************/
/*! exports provided: RetailerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetailerListComponent", function() { return RetailerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_retailer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/retailer.service */ "./src/app/service/retailer.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RetailerListComponent = /** @class */ (function () {
    function RetailerListComponent(RetailerService, AuthService, router) {
        this.RetailerService = RetailerService;
        this.AuthService = AuthService;
        this.router = router;
        this.searchText = '';
        this.ChkForAuth();
    }
    RetailerListComponent.prototype.ngOnInit = function () {
    };
    RetailerListComponent.prototype.ChkForAuth = function () {
        var roleId = this.AuthService.getRoleId();
        if (roleId != "3") {
            alert('You are not authorized to access the resurce');
            this.router.navigate(['../home']);
        }
    };
    RetailerListComponent.prototype.loadData = function () {
        var _this = this;
        this.searchText = '';
        var retailerId = this.AuthService.getId();
        this.RetailerService.getDataAll(retailerId)
            .subscribe(function (data) {
            _this.objCollection = data;
            (function (err) { console.log(err); });
        });
    };
    RetailerListComponent.ctorParameters = function () { return [
        { type: _service_retailer_service__WEBPACK_IMPORTED_MODULE_2__["RetailerService"] },
        { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    RetailerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-retailer-list',
            template: __webpack_require__(/*! raw-loader!./retailer-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/retailer-list/retailer-list.component.html"),
            styles: [__webpack_require__(/*! ./retailer-list.component.css */ "./src/app/retailer-list/retailer-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_retailer_service__WEBPACK_IMPORTED_MODULE_2__["RetailerService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RetailerListComponent);
    return RetailerListComponent;
}());



/***/ }),

/***/ "./src/app/retailer/retailer.component.css":
/*!*************************************************!*\
  !*** ./src/app/retailer/retailer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/retailer/retailer.component.ts":
/*!************************************************!*\
  !*** ./src/app/retailer/retailer.component.ts ***!
  \************************************************/
/*! exports provided: RetailerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetailerComponent", function() { return RetailerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_retailer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/retailer.service */ "./src/app/service/retailer.service.ts");
/* harmony import */ var _model_Retailer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/Retailer */ "./src/app/model/Retailer.ts");
/* harmony import */ var _model_BusinessAddress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/BusinessAddress */ "./src/app/model/BusinessAddress.ts");
/* harmony import */ var _model_BusinessContactInformation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/BusinessContactInformation */ "./src/app/model/BusinessContactInformation.ts");
/* harmony import */ var _model_PersonalContactInformation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/PersonalContactInformation */ "./src/app/model/PersonalContactInformation.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/state.service */ "./src/app/service/state.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");











var RetailerComponent = /** @class */ (function () {
    function RetailerComponent(retailerService, AuthService, stateService, router, route) {
        var _this = this;
        this.retailerService = retailerService;
        this.AuthService = AuthService;
        this.stateService = stateService;
        this.router = router;
        this.route = route;
        this.ChkForAuth();
        this.obj = new _model_Retailer__WEBPACK_IMPORTED_MODULE_3__["Retailer"]();
        this.obj.businessAddress = new _model_BusinessAddress__WEBPACK_IMPORTED_MODULE_4__["BusinessAddress"]();
        this.obj.businessContactInformation = new _model_BusinessContactInformation__WEBPACK_IMPORTED_MODULE_5__["BusinessContactInformation"]();
        this.obj.personalContactInformation = new _model_PersonalContactInformation__WEBPACK_IMPORTED_MODULE_6__["PersonalContactInformation"]();
        this.stateService.getStates().subscribe(function (data) {
            _this.states = data;
            _this.obj.businessAddress.state = _this.states[0].Name;
            _this.getDistrict();
        }, function (data) {
            console.log('Error getting the state' + data);
        });
    }
    RetailerComponent.prototype.ngOnInit = function () {
    };
    RetailerComponent.prototype.ChkForAuth = function () {
        var roleId = this.AuthService.getRoleId();
        if (roleId != "3") {
            alert('You are not authorized to access the resurce');
            this.router.navigate(['../home']);
        }
    };
    RetailerComponent.prototype.onStateChange = function (args) {
        this.obj.businessAddress.state = args.target.value;
        this.getDistrict();
    };
    RetailerComponent.prototype.getDistrict = function () {
        var stateName = this.obj.businessAddress.state;
        this.dists = this.states.find(function (o) { return o.Name == stateName; }).Dist;
        this.obj.businessAddress.district = this.dists[0].Name;
    };
    RetailerComponent.prototype.validateRecord = function () {
        if ((Object(util__WEBPACK_IMPORTED_MODULE_9__["isUndefined"])(this.obj.fname)) || this.obj.fname.trim() == '') {
            alert('First name is required.');
            return false;
        }
        if ((Object(util__WEBPACK_IMPORTED_MODULE_9__["isUndefined"])(this.obj.lname)) || this.obj.lname.trim() == '') {
            alert('Last name is required.');
            return false;
        }
        if ((Object(util__WEBPACK_IMPORTED_MODULE_9__["isUndefined"])(this.obj.email)) || this.obj.email == '') {
            alert('Email is required.');
            return false;
        }
    };
    RetailerComponent.prototype.SaveRecord = function () {
        var _this = this;
        if (this.validateRecord() == false) {
            return false;
        }
        else {
            this.obj.distributorId = this.AuthService.getId();
            this.retailerService.postData(this.obj).add(function (data) {
                alert('Record Saved');
                _this.router.navigate(['../retailerList']);
            });
        }
    };
    RetailerComponent.ctorParameters = function () { return [
        { type: _service_retailer_service__WEBPACK_IMPORTED_MODULE_2__["RetailerService"] },
        { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _service_state_service__WEBPACK_IMPORTED_MODULE_8__["StateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }
    ]; };
    RetailerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-retailer',
            template: __webpack_require__(/*! raw-loader!./retailer.component.html */ "./node_modules/raw-loader/index.js!./src/app/retailer/retailer.component.html"),
            styles: [__webpack_require__(/*! ./retailer.component.css */ "./src/app/retailer/retailer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_retailer_service__WEBPACK_IMPORTED_MODULE_2__["RetailerService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _service_state_service__WEBPACK_IMPORTED_MODULE_8__["StateService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]])
    ], RetailerComponent);
    return RetailerComponent;
}());



/***/ }),

/***/ "./src/app/service/app-settings.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/app-settings.service.ts ***!
  \*************************************************/
/*! exports provided: AppSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettingsService", function() { return AppSettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AppSettingsService = /** @class */ (function () {
    function AppSettingsService(myHttpClient) {
        this.myHttpClient = myHttpClient;
    }
    AppSettingsService.prototype.getSettings = function () {
        return this.myHttpClient.get("./assets/appSettings.json");
    };
    AppSettingsService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    AppSettingsService.prototype.handleErrors = function (error) {
        console.error('An error occurred', error);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.message || error);
    };
    AppSettingsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AppSettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppSettingsService);
    return AppSettingsService;
}());



/***/ }),

/***/ "./src/app/service/app-storage.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/app-storage.service.ts ***!
  \************************************************/
/*! exports provided: AppStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStorageService", function() { return AppStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _model_app_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/app-storage */ "./src/app/model/app-storage.ts");




var AppStorageService = /** @class */ (function () {
    function AppStorageService(storage, appStoragea) {
        this.storage = storage;
        this.appStoragea = appStoragea;
    }
    AppStorageService.prototype.setUserNameInLocal = function (value) {
        this.appStoragea.UserName = value;
    };
    AppStorageService.prototype.getGetNameInLocal = function () {
        return this.appStoragea.UserName;
    };
    AppStorageService.prototype.setParentCompanyIdInLocal = function (value) {
        this.appStoragea.ParentCompanyId = value;
    };
    AppStorageService.prototype.getParentCompanyIdInLocal = function () {
        return this.appStoragea.ParentCompanyId;
    };
    AppStorageService.ctorParameters = function () { return [
        { type: angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["WebStorageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"],] }] },
        { type: _model_app_storage__WEBPACK_IMPORTED_MODULE_3__["AppStorage"] }
    ]; };
    AppStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["WebStorageService"], _model_app_storage__WEBPACK_IMPORTED_MODULE_3__["AppStorage"]])
    ], AppStorageService);
    return AppStorageService;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_LogInUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/LogInUser */ "./src/app/model/LogInUser.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-settings.service */ "./src/app/service/app-settings.service.ts");






var AuthService = /** @class */ (function () {
    function AuthService(router, myHttpclient, appSettingsService) {
        var _this = this;
        this.router = router;
        this.myHttpclient = myHttpclient;
        this.appSettingsService = appSettingsService;
        appSettingsService.getSettings().subscribe(function (data) { return _this.myAppSetting = data; });
    }
    AuthService.prototype.login = function (userName, passWord) {
        localStorage.setItem('ACCESS_TOKEN', "access_token");
        //var url = this.myAppSetting.baseUrl;
        var url = "https://gerpapi-uat.azurewebsites.net/api";
        url = url + '/LogInUser/' + userName + '/' + passWord;
        return this.myHttpclient.get(url);
    };
    AuthService.prototype.setAccessToken = function (data) {
        localStorage.setItem('ACCESS_TOKEN', JSON.stringify(_model_LogInUser__WEBPACK_IMPORTED_MODULE_2__["LogInUser"]));
        localStorage.setItem('id', data.id);
        localStorage.setItem('ParentCompanyId', data.parentCompanyId);
        localStorage.setItem('companyName', data.companyName);
        localStorage.setItem('email', data.email);
        localStorage.setItem('fname', data.fname);
        localStorage.setItem('lname', data.lname);
        localStorage.setItem('parentCompanyName', data.parentCompanyName);
        localStorage.setItem('roleId', data.roleId.toString());
        localStorage.setItem('roleName', data.roleName);
    };
    AuthService.prototype.getAccessToken = function () {
        return localStorage.getItem('ACCESS_TOKEN');
    };
    AuthService.prototype.getId = function () {
        return localStorage.getItem('id');
    };
    AuthService.prototype.getParentCompanyId = function () {
        return localStorage.getItem('ParentCompanyId');
    };
    AuthService.prototype.getCompanyName = function () {
        return localStorage.getItem('companyName');
    };
    AuthService.prototype.getEmail = function () {
        return localStorage.getItem('email');
    };
    AuthService.prototype.getFname = function () {
        return localStorage.getItem('fname');
    };
    AuthService.prototype.getLname = function () {
        return localStorage.getItem('lname');
    };
    AuthService.prototype.getParentCompanyName = function () {
        return localStorage.getItem('parentCompanyName');
    };
    AuthService.prototype.getRoleId = function () {
        return localStorage.getItem('roleId');
    };
    AuthService.prototype.getRoleName = function () {
        return localStorage.getItem('roleName');
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('ACCESS_TOKEN') !== null;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('ACCESS_TOKEN');
        localStorage.removeItem('id');
        localStorage.removeItem('ParentCompanyId');
        localStorage.removeItem('companyName');
        localStorage.removeItem('email');
        localStorage.removeItem('fname');
        localStorage.removeItem('lname');
        localStorage.removeItem('parentCompanyName');
        localStorage.removeItem('roleId');
        localStorage.removeItem('roleName');
        this.router.navigateByUrl('/login');
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _app_settings_service__WEBPACK_IMPORTED_MODULE_5__["AppSettingsService"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _app_settings_service__WEBPACK_IMPORTED_MODULE_5__["AppSettingsService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/service/distributor.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/distributor.service.ts ***!
  \************************************************/
/*! exports provided: DistributorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributorService", function() { return DistributorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_app_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/app-settings.service */ "./src/app/service/app-settings.service.ts");





var DistributorService = /** @class */ (function () {
    function DistributorService(myHttpclient, appSettingsService) {
        var _this = this;
        this.myHttpclient = myHttpclient;
        this.appSettingsService = appSettingsService;
        appSettingsService.getSettings().subscribe(function (data) { return _this.myAppSetting = data; });
    }
    DistributorService.prototype.getData = function (id) {
        var url = this.myAppSetting.baseUrl;
        url = url + '/Distributor/' + id;
        return this.myHttpclient.get(url);
    };
    DistributorService.prototype.getDataAll = function (superStokictId) {
        var url = this.myAppSetting.baseUrl;
        url = url + '/Distributor/' + superStokictId + '/0';
        return this.myHttpclient.get(url);
    };
    DistributorService.prototype.postData = function (distributor) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        var url = this.myAppSetting.baseUrl;
        url = url + '/Distributor';
        return this.myHttpclient.post(url, distributor, httpOptions).subscribe(function (data) {
            console.log("POST Request is successful ", data);
            return data;
        }, function (error) {
            console.log("Error", error);
        });
    };
    DistributorService.prototype.putData = function (distributor) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        var url = this.myAppSetting.baseUrl;
        url = url + '/Distributor';
        return this.myHttpclient.put(url, distributor, httpOptions).subscribe(function (data) {
            console.log("PUT Request is successful ", data);
        }, function (error) {
            console.log("Error", error);
        });
    };
    DistributorService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _service_app_settings_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsService"] }
    ]; };
    DistributorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _service_app_settings_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsService"]])
    ], DistributorService);
    return DistributorService;
}());



/***/ }),

/***/ "./src/app/service/retailer.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/retailer.service.ts ***!
  \*********************************************/
/*! exports provided: RetailerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetailerService", function() { return RetailerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_app_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/app-settings.service */ "./src/app/service/app-settings.service.ts");





var RetailerService = /** @class */ (function () {
    function RetailerService(myHttpclient, appSettingsService) {
        var _this = this;
        this.myHttpclient = myHttpclient;
        this.appSettingsService = appSettingsService;
        appSettingsService.getSettings().subscribe(function (data) { return _this.myAppSetting = data; });
    }
    RetailerService.prototype.getData = function (id) {
        var url = this.myAppSetting.baseUrl;
        url = url + '/Retailer/' + id;
        return this.myHttpclient.get(url);
    };
    RetailerService.prototype.getDataAll = function (distributorId) {
        var url = this.myAppSetting.baseUrl;
        url = url + '/Retailer/' + distributorId + '/0';
        return this.myHttpclient.get(url);
    };
    RetailerService.prototype.postData = function (retailer) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        var url = this.myAppSetting.baseUrl;
        url = url + '/Retailer';
        return this.myHttpclient.post(url, retailer, httpOptions).subscribe(function (data) {
            console.log("POST Request is successful ", data);
            return data;
        }, function (error) {
            console.log("Error", error);
        });
    };
    RetailerService.prototype.putData = function (retailer) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        var url = this.myAppSetting.baseUrl;
        url = url + '/Retailer';
        return this.myHttpclient.put(url, retailer, httpOptions).subscribe(function (data) {
            console.log("PUT Request is successful ", data);
        }, function (error) {
            console.log("Error", error);
        });
    };
    RetailerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _service_app_settings_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsService"] }
    ]; };
    RetailerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _service_app_settings_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsService"]])
    ], RetailerService);
    return RetailerService;
}());



/***/ }),

/***/ "./src/app/service/state.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/state.service.ts ***!
  \******************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var StateService = /** @class */ (function () {
    function StateService(myHttpClient) {
        this.myHttpClient = myHttpClient;
    }
    StateService.prototype.getStates = function () {
        return this.myHttpClient.get("./assets/state.json");
    };
    StateService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    StateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/app/service/super-stockist.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/super-stockist.service.ts ***!
  \***************************************************/
/*! exports provided: SuperStockistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperStockistService", function() { return SuperStockistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_app_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/app-settings.service */ "./src/app/service/app-settings.service.ts");





var SuperStockistService = /** @class */ (function () {
    function SuperStockistService(myHttpclient, appSettingsService) {
        var _this = this;
        this.myHttpclient = myHttpclient;
        this.appSettingsService = appSettingsService;
        appSettingsService.getSettings().subscribe(function (data) { return _this.myAppSetting = data; });
    }
    SuperStockistService.prototype.getData = function (id) {
        var url = this.myAppSetting.baseUrl;
        url = url + '/SuperStockist/' + id;
        return this.myHttpclient.get(url);
    };
    SuperStockistService.prototype.getDataAll = function (parentCompanyId) {
        var url = this.myAppSetting.baseUrl;
        //var url = 'https://localhost:5001/api';
        url = url + '/SuperStockist/' + parentCompanyId + '/0';
        return this.myHttpclient.get(url);
        /*.subscribe(
          {
            next: (data) => {
              return Observable.apply(data) ;
            },
            error: (err) => {
              console.log('An error...')
              console.log(err);
            },
            complete: () => { console.log('call complete') }
          });*/
    };
    SuperStockistService.prototype.postData = function (superStockist) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        //var url = this.myAppSetting.baseUrl;
        var url = this.myAppSetting.baseUrl;
        url = url + '/SuperStockist';
        return this.myHttpclient.post(url, superStockist, httpOptions).subscribe(function (data) {
            console.log("POST Request is successful ", data);
            return data;
        }, function (error) {
            console.log("Error", error);
        });
    };
    SuperStockistService.prototype.putData = function (superStockist) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        var url = this.myAppSetting.baseUrl;
        url = url + '/SuperStockist';
        return this.myHttpclient.put(url, superStockist, httpOptions).subscribe(function (data) {
            console.log("PUT Request is successful ", data);
        }, function (error) {
            console.log("Error", error);
        });
    };
    SuperStockistService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _service_app_settings_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsService"] }
    ]; };
    SuperStockistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _service_app_settings_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsService"]])
    ], SuperStockistService);
    return SuperStockistService;
}());



/***/ }),

/***/ "./src/app/super-stockist-edit/super-stockist-edit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/super-stockist-edit/super-stockist-edit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/super-stockist-edit/super-stockist-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/super-stockist-edit/super-stockist-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: SuperStockistEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperStockistEditComponent", function() { return SuperStockistEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_super_stockist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/super-stockist.service */ "./src/app/service/super-stockist.service.ts");
/* harmony import */ var _model_SuperStockist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/SuperStockist */ "./src/app/model/SuperStockist.ts");
/* harmony import */ var _model_BusinessAddress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/BusinessAddress */ "./src/app/model/BusinessAddress.ts");
/* harmony import */ var _model_BusinessContactInformation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/BusinessContactInformation */ "./src/app/model/BusinessContactInformation.ts");
/* harmony import */ var _model_PersonalContactInformation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/PersonalContactInformation */ "./src/app/model/PersonalContactInformation.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/state.service */ "./src/app/service/state.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");











var SuperStockistEditComponent = /** @class */ (function () {
    function SuperStockistEditComponent(superStockistService, AuthService, stateService, router, route) {
        var _this = this;
        this.superStockistService = superStockistService;
        this.AuthService = AuthService;
        this.stateService = stateService;
        this.router = router;
        this.route = route;
        this.superStockist = new _model_SuperStockist__WEBPACK_IMPORTED_MODULE_3__["SuperStockist"]();
        this.superStockist.businessAddress = new _model_BusinessAddress__WEBPACK_IMPORTED_MODULE_4__["BusinessAddress"]();
        this.superStockist.businessContactInformation = new _model_BusinessContactInformation__WEBPACK_IMPORTED_MODULE_5__["BusinessContactInformation"]();
        this.superStockist.personalContactInformation = new _model_PersonalContactInformation__WEBPACK_IMPORTED_MODULE_6__["PersonalContactInformation"]();
        this.ChkForAuth();
        this.stateService.getStates().subscribe(function (data) {
            _this.states = data;
        }, function (data) {
            console.log('Error getting the state' + data);
        }).add(function () {
            route.paramMap.subscribe(function (p) {
                _this.id = p.get('id');
                _this.getData();
            });
        });
    }
    SuperStockistEditComponent.prototype.ngOnInit = function () {
    };
    SuperStockistEditComponent.prototype.ChkForAuth = function () {
        var roleId = this.AuthService.getRoleId();
        if (roleId != "1") {
            alert('You are not authorized to access the resurce');
            this.router.navigate(['../home']);
        }
    };
    SuperStockistEditComponent.prototype.getData = function () {
        var _this = this;
        this.superStockistService.getData(this.id).subscribe(function (data) {
            _this.superStockist = data;
            console.log('Data from server');
            console.log(_this.superStockist);
            console.log(data);
            _this.getDistrict();
        });
    };
    SuperStockistEditComponent.prototype.SaveRecord = function () {
        var _this = this;
        if (this.validateRecord() == false) {
            return false;
        }
        else {
            this.superStockist.parentCompanyId = this.AuthService.getParentCompanyId();
            this.superStockistService.putData(this.superStockist).add(function (data) {
                alert('Record Saved');
                _this.router.navigate(['../SuperStockistList']);
            });
        }
    };
    SuperStockistEditComponent.prototype.onStateChange = function (args) {
        this.superStockist.businessAddress.state = args.target.value;
        this.getDistrict();
        this.superStockist.businessAddress.district = this.dists[0].Name;
    };
    SuperStockistEditComponent.prototype.getDistrict = function () {
        var stateName = this.superStockist.businessAddress.state;
        this.dists = this.states.find(function (o) { return o.Name == stateName; }).Dist;
    };
    SuperStockistEditComponent.prototype.validateRecord = function () {
        alert(this.superStockist.fname);
        if ((Object(util__WEBPACK_IMPORTED_MODULE_9__["isUndefined"])(this.superStockist.fname)) || this.superStockist.fname.trim() == '') {
            alert('First name is required.');
            return false;
        }
        if ((Object(util__WEBPACK_IMPORTED_MODULE_9__["isUndefined"])(this.superStockist.lname)) || this.superStockist.lname.trim() == '') {
            alert('Last name is required.');
            return false;
        }
        if ((Object(util__WEBPACK_IMPORTED_MODULE_9__["isUndefined"])(this.superStockist.businessContactInformation.email)) || this.superStockist.businessContactInformation.email == '') {
            alert('Email is required.');
            return false;
        }
    };
    SuperStockistEditComponent.ctorParameters = function () { return [
        { type: _service_super_stockist_service__WEBPACK_IMPORTED_MODULE_2__["SuperStockistService"] },
        { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _service_state_service__WEBPACK_IMPORTED_MODULE_8__["StateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }
    ]; };
    SuperStockistEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-super-stockist-edit',
            template: __webpack_require__(/*! raw-loader!./super-stockist-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/super-stockist-edit/super-stockist-edit.component.html"),
            styles: [__webpack_require__(/*! ./super-stockist-edit.component.css */ "./src/app/super-stockist-edit/super-stockist-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_super_stockist_service__WEBPACK_IMPORTED_MODULE_2__["SuperStockistService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _service_state_service__WEBPACK_IMPORTED_MODULE_8__["StateService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]])
    ], SuperStockistEditComponent);
    return SuperStockistEditComponent;
}());



/***/ }),

/***/ "./src/app/super-stockist-list/super-stockist-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/super-stockist-list/super-stockist-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/super-stockist-list/super-stockist-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/super-stockist-list/super-stockist-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: SuperStockistListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperStockistListComponent", function() { return SuperStockistListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_super_stockist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/super-stockist.service */ "./src/app/service/super-stockist.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SuperStockistListComponent = /** @class */ (function () {
    function SuperStockistListComponent(superStockistService, AuthService, router) {
        this.superStockistService = superStockistService;
        this.AuthService = AuthService;
        this.router = router;
        this.searchText = '';
        this.ChkForAuth();
    }
    SuperStockistListComponent.prototype.ngOnInit = function () {
    };
    SuperStockistListComponent.prototype.ChkForAuth = function () {
        var roleId = this.AuthService.getRoleId();
        if (roleId != "1") {
            alert('You are not authorized to access the resurce');
            this.router.navigate(['../home']);
        }
    };
    SuperStockistListComponent.prototype.loadData = function () {
        var _this = this;
        this.searchText = '';
        var parentCompanyId = this.AuthService.getParentCompanyId();
        this.superStockistService.getDataAll(parentCompanyId)
            .subscribe(function (data) {
            _this.superStockists = data;
            (function (err) { console.log(err); });
        });
    };
    SuperStockistListComponent.ctorParameters = function () { return [
        { type: _service_super_stockist_service__WEBPACK_IMPORTED_MODULE_2__["SuperStockistService"] },
        { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    SuperStockistListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-super-stockist-list',
            template: __webpack_require__(/*! raw-loader!./super-stockist-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/super-stockist-list/super-stockist-list.component.html"),
            styles: [__webpack_require__(/*! ./super-stockist-list.component.css */ "./src/app/super-stockist-list/super-stockist-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_super_stockist_service__WEBPACK_IMPORTED_MODULE_2__["SuperStockistService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SuperStockistListComponent);
    return SuperStockistListComponent;
}());



/***/ }),

/***/ "./src/app/super-stockist/super-stockist.component.css":
/*!*************************************************************!*\
  !*** ./src/app/super-stockist/super-stockist.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/super-stockist/super-stockist.component.ts":
/*!************************************************************!*\
  !*** ./src/app/super-stockist/super-stockist.component.ts ***!
  \************************************************************/
/*! exports provided: SuperStockistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperStockistComponent", function() { return SuperStockistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_super_stockist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/super-stockist.service */ "./src/app/service/super-stockist.service.ts");
/* harmony import */ var _model_SuperStockist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/SuperStockist */ "./src/app/model/SuperStockist.ts");
/* harmony import */ var _model_BusinessAddress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/BusinessAddress */ "./src/app/model/BusinessAddress.ts");
/* harmony import */ var _model_BusinessContactInformation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/BusinessContactInformation */ "./src/app/model/BusinessContactInformation.ts");
/* harmony import */ var _model_PersonalContactInformation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/PersonalContactInformation */ "./src/app/model/PersonalContactInformation.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/state.service */ "./src/app/service/state.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");











var SuperStockistComponent = /** @class */ (function () {
    function SuperStockistComponent(superStockistService, AuthService, stateService, router, route) {
        var _this = this;
        this.superStockistService = superStockistService;
        this.AuthService = AuthService;
        this.stateService = stateService;
        this.router = router;
        this.route = route;
        this.superStockist = new _model_SuperStockist__WEBPACK_IMPORTED_MODULE_3__["SuperStockist"]();
        this.superStockist.businessAddress = new _model_BusinessAddress__WEBPACK_IMPORTED_MODULE_4__["BusinessAddress"]();
        this.superStockist.businessContactInformation = new _model_BusinessContactInformation__WEBPACK_IMPORTED_MODULE_5__["BusinessContactInformation"]();
        this.superStockist.personalContactInformation = new _model_PersonalContactInformation__WEBPACK_IMPORTED_MODULE_6__["PersonalContactInformation"]();
        this.stateService.getStates().subscribe(function (data) {
            _this.states = data;
            _this.superStockist.businessAddress.state = _this.states[0].Name;
            console.log(_this.states);
            _this.getDistrict();
        }, function (data) {
            console.log('Error getting the state' + data);
        });
    }
    SuperStockistComponent.prototype.ngOnInit = function () {
        this.ChkForAuth();
    };
    SuperStockistComponent.prototype.ChkForAuth = function () {
        var roleId = this.AuthService.getRoleId();
        if (roleId != "1") {
            alert('You are not authorized to access the resurce');
            this.router.navigate(['../home']);
        }
    };
    SuperStockistComponent.prototype.SaveRecord = function () {
        var _this = this;
        if (this.validateRecord() == false) {
            return false;
        }
        else {
            this.superStockist.parentCompanyId = this.AuthService.getParentCompanyId();
            this.superStockistService.postData(this.superStockist).add(function (data) {
                alert('Record Saved');
                _this.router.navigate(['../SuperStockistList']);
            });
        }
    };
    SuperStockistComponent.prototype.onStateChange = function (args) {
        this.superStockist.businessAddress.state = args.target.value;
        this.getDistrict();
    };
    SuperStockistComponent.prototype.getDistrict = function () {
        var stateName = this.superStockist.businessAddress.state;
        this.dists = this.states.find(function (o) { return o.Name == stateName; }).Dist;
        this.superStockist.businessAddress.district = this.dists[0].Name;
    };
    SuperStockistComponent.prototype.validateRecord = function () {
        if ((Object(util__WEBPACK_IMPORTED_MODULE_9__["isUndefined"])(this.superStockist.fname)) || this.superStockist.fname.trim() == '') {
            alert('First name is required.');
            return false;
        }
        if ((Object(util__WEBPACK_IMPORTED_MODULE_9__["isUndefined"])(this.superStockist.lname)) || this.superStockist.lname.trim() == '') {
            alert('Last name is required.');
            return false;
        }
        if ((Object(util__WEBPACK_IMPORTED_MODULE_9__["isUndefined"])(this.superStockist.email)) || this.superStockist.email == '') {
            alert('Email is required.');
            return false;
        }
    };
    SuperStockistComponent.ctorParameters = function () { return [
        { type: _service_super_stockist_service__WEBPACK_IMPORTED_MODULE_2__["SuperStockistService"] },
        { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _service_state_service__WEBPACK_IMPORTED_MODULE_8__["StateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }
    ]; };
    SuperStockistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-super-stockist',
            template: __webpack_require__(/*! raw-loader!./super-stockist.component.html */ "./node_modules/raw-loader/index.js!./src/app/super-stockist/super-stockist.component.html"),
            styles: [__webpack_require__(/*! ./super-stockist.component.css */ "./src/app/super-stockist/super-stockist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_super_stockist_service__WEBPACK_IMPORTED_MODULE_2__["SuperStockistService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _service_state_service__WEBPACK_IMPORTED_MODULE_8__["StateService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]])
    ], SuperStockistComponent);
    return SuperStockistComponent;
}());



/***/ }),

/***/ "./src/app/tran-assign-stock/tran-assign-stock.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/tran-assign-stock/tran-assign-stock.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/tran-assign-stock/tran-assign-stock.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/tran-assign-stock/tran-assign-stock.component.ts ***!
  \******************************************************************/
/*! exports provided: TranAssignStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranAssignStockComponent", function() { return TranAssignStockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TranAssignStockComponent = /** @class */ (function () {
    function TranAssignStockComponent() {
    }
    TranAssignStockComponent.prototype.ngOnInit = function () {
    };
    TranAssignStockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tran-assign-stock',
            template: __webpack_require__(/*! raw-loader!./tran-assign-stock.component.html */ "./node_modules/raw-loader/index.js!./src/app/tran-assign-stock/tran-assign-stock.component.html"),
            styles: [__webpack_require__(/*! ./tran-assign-stock.component.css */ "./src/app/tran-assign-stock/tran-assign-stock.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TranAssignStockComponent);
    return TranAssignStockComponent;
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

module.exports = __webpack_require__(/*! D:\Debdeep\Mywork\ZT-Web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);