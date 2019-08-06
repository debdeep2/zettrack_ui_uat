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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:left; color:rgb(255,255,255); background-color:rgb(33, 100, 243,1)  \">\r\n  <h1>\r\n    Welcome to <b>{{ title }}</b>\r\n  </h1>  \r\n</div>\r\n<div>\r\n  <a [routerLink]=\"['/home']\">Home</a>\r\n  ||\r\n  <a [routerLink]=\"['/about']\">About</a>\r\n  ||\r\n  <a [routerLink]=\"['/SuperStockist']\">Super Stockist</a>\r\n  ||\r\n  <a [routerLink]=\"['/Drisbutor']\">Drisbutor</a>\r\n  ||\r\n  <a [routerLink]=\"['/Retailer']\">Retailer</a>\r\n  ||\r\n  <a [routerLink]=\"['/BusinessAssociate']\">Business Associate</a>\r\n  ||\r\n  <a [routerLink]=\"['/Transaction']\">Transaction</a>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/business-associate/business-associate.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/business-associate/business-associate.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\r\n    <span class=\"Header\">Business Associate</span>\r\n    <p></p>\r\n    <span>------------------------------------------</span>\r\n    <p></p>\r\n    <span class=\"SubHeader\">Select Distributor</span>   \r\n    <p></p>\r\n    <select id=\"userType\" name=\"userType\" style=\"width: 300px\">\r\n        <option value=\"0\">Select</option>\r\n        <option value=\"1\">Dis1</option>\r\n        <option value=\"2\">Dis2</option>\r\n        <option value=\"3\">Dis3</option>\r\n        <option value=\"4\">Dis4</option>        \r\n    </select> \r\n    <p></p>\r\n    <div style=\"float: left; padding-top:20px;width: 50%;\">\r\n        <span class=\"SubHeader\">PERSONAL INFORMATION</span> \r\n         <p></p>\r\n    <label>Fisrt Name</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>Last Name</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>Email-Primary</label>\r\n    <p></p>\r\n    <input type=\"email\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>Email-Alternative</label>\r\n    <p></p>\r\n    <input type=\"email\" class=\"SubHeaderInput\">\r\n    <p></p>\r\n    <label>MobNo-Primary</label>\r\n    <p></p>\r\n    <input type=\"tel\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>MobNo-Alternative</label>\r\n    <p></p>\r\n    <input type=\"tel\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <input type=\"button\" width=\"400x;\" value=\"Save Record\" style=\"background-color:rgba(16, 108, 230, 0.692); color: white;\">\r\n    </div>  \r\n       \r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/distributor/distributor.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/distributor/distributor.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\r\n    <span class=\"Header\">Distributor</span>\r\n    <p></p>\r\n    <span>------------------------------------------</span>\r\n    <p></p> \r\n    <span class=\"SubHeader\">Select SuperStokist</span>   \r\n    <p></p>\r\n    <select id=\"userType\" name=\"userType\" style=\"width: 300px\">\r\n        <option value=\"0\">Select</option>\r\n        <option value=\"1\">SS1</option>\r\n        <option value=\"2\">SS2</option>\r\n        <option value=\"3\">SS3</option>\r\n        <option value=\"4\">SS4</option>\r\n        \r\n    </select> \r\n    <p></p>\r\n    <div style=\"float: left; padding-top:20px;width: 50%;\">\r\n        <span class=\"SubHeader\">PERSONAL INFORMATION</span> \r\n         <p></p>\r\n    <label>Fisrt Name</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>Last Name</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>Email-Primary</label>\r\n    <p></p>\r\n    <input type=\"email\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>Email-Alternative</label>\r\n    <p></p>\r\n    <input type=\"email\" class=\"SubHeaderInput\">\r\n    <p></p>\r\n    <label>MobNo-Primary</label>\r\n    <p></p>\r\n    <input type=\"tel\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>MobNo-Alternative</label>\r\n    <p></p>\r\n    <input type=\"tel\" class=\"SubHeaderInput\"> \r\n    </div>\r\n    <div  style=\"float: left; padding-top:20px;width: 50%; \">\r\n        <span class=\"SubHeader\">OUTLATE INFORMATION</span>        \r\n        <p></p>    \r\n       \r\n    <label>OutLate Name</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>Country</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>State</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>District</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\">\r\n    <p></p>\r\n    <label>Region</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\">   \r\n    <p></p>\r\n    <label>Pin</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\">\r\n    </div> \r\n    <br>\r\n    <div style=\"float:inherit;padding-top: 20px;\">\r\n        <input type=\"button\" width=\"400x;\" value=\"Save Record\" style=\"background-color:rgba(16, 108, 230, 0.692); color: white;\">\r\n    </div>\r\n       \r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home-compoment/home-compoment.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home-compoment/home-compoment.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>This is the Home</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login-component/login-component.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login-component/login-component.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>login-component works!</p>\r\n<div>\r\nUserName : \r\n</div>\r\n<div>\r\n    PassWord : \r\n </div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/retailer/retailer.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/retailer/retailer.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <span class=\"Header\">Retailer</span>\r\n    <p></p>\r\n    <span>------------------------------------------</span>\r\n    <p></p>\r\n    <span class=\"SubHeader\">Select Distributor</span>   \r\n    <p></p>\r\n    <select id=\"userType\" name=\"userType\" style=\"width: 300px\">\r\n        <option value=\"0\">Select</option>\r\n        <option value=\"1\">Dis1</option>\r\n        <option value=\"2\">Dis2</option>\r\n        <option value=\"3\">Dis3</option>\r\n        <option value=\"4\">Dis4</option>        \r\n    </select> \r\n    <p></p>\r\n    <div style=\"float: left; padding-top:20px;width: 50%;\">\r\n        <span class=\"SubHeader\">PERSONAL INFORMATION</span> \r\n         <p></p>\r\n    <label>Fisrt Name</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>Last Name</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>Email-Primary</label>\r\n    <p></p>\r\n    <input type=\"email\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>Email-Alternative</label>\r\n    <p></p>\r\n    <input type=\"email\" class=\"SubHeaderInput\">\r\n    <p></p>\r\n    <label>MobNo-Primary</label>\r\n    <p></p>\r\n    <input type=\"tel\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>MobNo-Alternative</label>\r\n    <p></p>\r\n    <input type=\"tel\" class=\"SubHeaderInput\"> \r\n    </div>\r\n    <div  style=\"float: left; padding-top:20px;width: 50%; \">\r\n        <span class=\"SubHeader\">OUTLATE INFORMATION</span>        \r\n        <p></p>    \r\n       \r\n    <label>OutLate Name</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>Country</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>State</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>District</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\">\r\n    <p></p>\r\n    <label>Region</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\">   \r\n    <p></p>\r\n    <label>Pin</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\">\r\n    </div> \r\n    <br>\r\n    <div style=\"float:inherit;padding-top: 20px;\">\r\n        <input type=\"button\" width=\"400x;\" value=\"Save Record\" style=\"background-color:rgba(16, 108, 230, 0.692); color: white;\">\r\n    </div>\r\n       \r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/super-stockist-list/super-stockist-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/super-stockist-list/super-stockist-list.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"divContainer\">\n    <div>\n          <span style=\"font-size:15px;color:rgba(18, 108, 218, 0.829)\">\n                Search : \n          </span>\n        \n            <input [(ngModel)]=\"searchText\" placeholder=\"search text goes here\" style=\"width: 300px;\">              \n           \n        </div>\n        <p></p>\n        <div style=\"width: 800px; text-align: right;\">\n                <a [routerLink]=\"['/empAdd']\" routerLinkActive=\"router-link-active\">Add Record</a>   \n        </div>\n        <div style=\"padding-top: 20px;\">  \n                <table>\n                    <thead>\n                        <tr>\n                                <th style=\"width: 100px;\">First Name</th>                        \n                                <th style=\"width: 100px;\">Last Name</th>\n                                <th style=\"width: 100px;\">Dept. Name</th>                                   \n                                <th style=\"width: 100px;\">DOJ</th>\n                                <th style=\"width: 50px;\">Gender</th>\n                                <th style=\"width: 100px;\">Mob Primary</th>\n                                <th style=\"width: 150px;\">Email</th>\n                                <th style=\"width: 50px;\"></th>\n                                <th style=\"width: 50px;\"></th>\n                        </tr>\n                    </thead>                \n                        <tbody>\n                            <tr *ngFor=\"let obj of superStockists | filterByMatchText : searchText\">\n                                <td>{{obj.Fname }}</td>\n                                <td>{{obj.lname}}</td>\n                                <td>{{obj.email}}</td>\n                                <td>{{obj.MobNoPrimary}</td>                                    \n                                <td>{{obj.BusinessAddress.OUTLateName}}</td>\n                                <td>{{obj.BusinessAddress.Region}}</td>\n                                <td>{{obj.BusinessAddress.DISTRICT}}</td>\n                                <td>\n                                        <a [routerLink]=\"['/editEmp']\" routerLinkActive=\"router-link-active\">Edit</a>\n                                        <img src=\"\" [routerLink]=\"['/editEmp']\" routerLinkActive=\"router-link-active\">    \n                                </td>\n                                <td>\n                                        <a [routerLink]=\"['/delEmp']\" routerLinkActive=\"router-link-active\">Del</a>    \n                                </td>\n                                \n                            </tr>\n                        </tbody>\n                    </table>\n        </div>\n        <p></p>\n        <div>\n            <button (click)=\"loadData()\">Load Data</button>\n           \n        </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/super-stockist/super-stockist.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/super-stockist/super-stockist.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <span class=\"Header\">Super Stockist</span>\r\n    <p></p>\r\n    <span>------------------------------------------</span>\r\n    <p></p>\r\n    <div style=\"float: left; padding-top:20px;width: 50%;\">\r\n        <span class=\"SubHeader\">PERSONAL INFORMATION</span> \r\n         <p></p>\r\n    <label>Fisrt Name</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>Last Name</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>Email-Primary</label>\r\n    <p></p>\r\n    <input type=\"email\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>Email-Alternative</label>\r\n    <p></p>\r\n    <input type=\"email\" class=\"SubHeaderInput\">\r\n    <p></p>\r\n    <label>MobNo-Primary</label>\r\n    <p></p>\r\n    <input type=\"tel\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>MobNo-Alternative</label>\r\n    <p></p>\r\n    <input type=\"tel\" class=\"SubHeaderInput\"> \r\n    </div>\r\n    <div  style=\"float: left; padding-top:20px;width: 50%; \">\r\n        <span class=\"SubHeader\">OUTLATE INFORMATION</span>        \r\n        <p></p>    \r\n       \r\n    <label>OutLate Name</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>Country</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>State</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\"> \r\n    <p></p>\r\n    <label>District</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\">\r\n    <p></p>\r\n    <label>Region</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\">   \r\n    <p></p>\r\n    <label>Pin</label>\r\n    <p></p>\r\n    <input type=\"text\" class=\"SubHeaderInput\">\r\n    </div> \r\n    <br>\r\n    <div style=\"float:inherit;padding-top: 20px;\">\r\n        <input type=\"button\" width=\"400x;\" value=\"Save Record\" style=\"background-color:rgba(16, 108, 230, 0.692); color: white;\">\r\n    </div>\r\n       \r\n</div>\r\n\r\n\r\n\r\n\r\n"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LWNvbXBvbWVudC9hYm91dC1jb21wb21lbnQuY29tcG9uZW50LmNzcyJ9 */"

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
/* harmony import */ var _distributor_distributor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./distributor/distributor.component */ "./src/app/distributor/distributor.component.ts");
/* harmony import */ var _retailer_retailer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./retailer/retailer.component */ "./src/app/retailer/retailer.component.ts");
/* harmony import */ var _business_associate_business_associate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./business-associate/business-associate.component */ "./src/app/business-associate/business-associate.component.ts");
/* harmony import */ var _super_stockist_list_super_stockist_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./super-stockist-list/super-stockist-list.component */ "./src/app/super-stockist-list/super-stockist-list.component.ts");










var routes = [
    { path: 'home', component: _home_compoment_home_compoment_component__WEBPACK_IMPORTED_MODULE_3__["HomeCompomentComponent"] },
    { path: 'about', component: _about_compoment_about_compoment_component__WEBPACK_IMPORTED_MODULE_4__["AboutCompomentComponent"] },
    { path: 'Transaction', component: _tran_assign_stock_tran_assign_stock_component__WEBPACK_IMPORTED_MODULE_5__["TranAssignStockComponent"] },
    { path: 'SuperStockist', component: _super_stockist_list_super_stockist_list_component__WEBPACK_IMPORTED_MODULE_9__["SuperStockistListComponent"] },
    { path: 'Drisbutor', component: _distributor_distributor_component__WEBPACK_IMPORTED_MODULE_6__["DistributorComponent"] },
    { path: 'Retailer', component: _retailer_retailer_component__WEBPACK_IMPORTED_MODULE_7__["RetailerComponent"] },
    { path: 'BusinessAssociate', component: _business_associate_business_associate_component__WEBPACK_IMPORTED_MODULE_8__["BusinessAssociateComponent"] }
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ZetTrack India';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_component_login_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-component/login-component.component */ "./src/app/login-component/login-component.component.ts");
/* harmony import */ var _home_compoment_home_compoment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-compoment/home-compoment.component */ "./src/app/home-compoment/home-compoment.component.ts");
/* harmony import */ var _about_compoment_about_compoment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about-compoment/about-compoment.component */ "./src/app/about-compoment/about-compoment.component.ts");
/* harmony import */ var _tran_assign_stock_tran_assign_stock_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tran-assign-stock/tran-assign-stock.component */ "./src/app/tran-assign-stock/tran-assign-stock.component.ts");
/* harmony import */ var _super_stockist_super_stockist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./super-stockist/super-stockist.component */ "./src/app/super-stockist/super-stockist.component.ts");
/* harmony import */ var _distributor_distributor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./distributor/distributor.component */ "./src/app/distributor/distributor.component.ts");
/* harmony import */ var _retailer_retailer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./retailer/retailer.component */ "./src/app/retailer/retailer.component.ts");
/* harmony import */ var _business_associate_business_associate_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./business-associate/business-associate.component */ "./src/app/business-associate/business-associate.component.ts");
/* harmony import */ var _filter_filter_by_match_text_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./filter/filter-by-match-text.pipe */ "./src/app/filter/filter-by-match-text.pipe.ts");
/* harmony import */ var _super_stockist_list_super_stockist_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./super-stockist-list/super-stockist-list.component */ "./src/app/super-stockist-list/super-stockist-list.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_component_login_component_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponentComponent"],
                _home_compoment_home_compoment_component__WEBPACK_IMPORTED_MODULE_8__["HomeCompomentComponent"],
                _about_compoment_about_compoment_component__WEBPACK_IMPORTED_MODULE_9__["AboutCompomentComponent"],
                _tran_assign_stock_tran_assign_stock_component__WEBPACK_IMPORTED_MODULE_10__["TranAssignStockComponent"],
                _super_stockist_super_stockist_component__WEBPACK_IMPORTED_MODULE_11__["SuperStockistComponent"],
                _distributor_distributor_component__WEBPACK_IMPORTED_MODULE_12__["DistributorComponent"],
                _retailer_retailer_component__WEBPACK_IMPORTED_MODULE_13__["RetailerComponent"],
                _business_associate_business_associate_component__WEBPACK_IMPORTED_MODULE_14__["BusinessAssociateComponent"],
                _filter_filter_by_match_text_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterByMatchTextPipe"],
                _super_stockist_list_super_stockist_list_component__WEBPACK_IMPORTED_MODULE_16__["SuperStockistListComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            exports: [_super_stockist_super_stockist_component__WEBPACK_IMPORTED_MODULE_11__["SuperStockistComponent"], _distributor_distributor_component__WEBPACK_IMPORTED_MODULE_12__["DistributorComponent"], _retailer_retailer_component__WEBPACK_IMPORTED_MODULE_13__["RetailerComponent"], _business_associate_business_associate_component__WEBPACK_IMPORTED_MODULE_14__["BusinessAssociateComponent"], _filter_filter_by_match_text_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterByMatchTextPipe"], _super_stockist_list_super_stockist_list_component__WEBPACK_IMPORTED_MODULE_16__["SuperStockistListComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/business-associate/business-associate.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/business-associate/business-associate.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXNzLWFzc29jaWF0ZS9idXNpbmVzcy1hc3NvY2lhdGUuY29tcG9uZW50LmNzcyJ9 */"

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

/***/ "./src/app/distributor/distributor.component.css":
/*!*******************************************************!*\
  !*** ./src/app/distributor/distributor.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dG9yL2Rpc3RyaWJ1dG9yLmNvbXBvbmVudC5jc3MifQ== */"

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


var DistributorComponent = /** @class */ (function () {
    function DistributorComponent() {
    }
    DistributorComponent.prototype.ngOnInit = function () {
    };
    DistributorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-distributor',
            template: __webpack_require__(/*! raw-loader!./distributor.component.html */ "./node_modules/raw-loader/index.js!./src/app/distributor/distributor.component.html"),
            styles: [__webpack_require__(/*! ./distributor.component.css */ "./src/app/distributor/distributor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtY29tcG9tZW50L2hvbWUtY29tcG9tZW50LmNvbXBvbmVudC5jc3MifQ== */"

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


var HomeCompomentComponent = /** @class */ (function () {
    function HomeCompomentComponent() {
    }
    HomeCompomentComponent.prototype.ngOnInit = function () {
    };
    HomeCompomentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-compoment',
            template: __webpack_require__(/*! raw-loader!./home-compoment.component.html */ "./node_modules/raw-loader/index.js!./src/app/home-compoment/home-compoment.component.html"),
            styles: [__webpack_require__(/*! ./home-compoment.component.css */ "./src/app/home-compoment/home-compoment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeCompomentComponent);
    return HomeCompomentComponent;
}());



/***/ }),

/***/ "./src/app/login-component/login-component.component.css":
/*!***************************************************************!*\
  !*** ./src/app/login-component/login-component.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLWNvbXBvbmVudC9sb2dpbi1jb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/login-component/login-component.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/login-component/login-component.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponentComponent", function() { return LoginComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponentComponent = /** @class */ (function () {
    function LoginComponentComponent() {
        this.userName = '';
        this.passWord = '';
    }
    LoginComponentComponent.prototype.ngOnInit = function () {
    };
    /**
     * name
     */
    LoginComponentComponent.prototype.Login = function () {
        var result = false;
        if ((this.userName == 'admin') && (this.passWord == 'admin')) {
            result = true;
        }
        return result;
    };
    LoginComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-component',
            template: __webpack_require__(/*! raw-loader!./login-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/login-component/login-component.component.html"),
            styles: [__webpack_require__(/*! ./login-component.component.css */ "./src/app/login-component/login-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponentComponent);
    return LoginComponentComponent;
}());



/***/ }),

/***/ "./src/app/retailer/retailer.component.css":
/*!*************************************************!*\
  !*** ./src/app/retailer/retailer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JldGFpbGVyL3JldGFpbGVyLmNvbXBvbmVudC5jc3MifQ== */"

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


var RetailerComponent = /** @class */ (function () {
    function RetailerComponent() {
    }
    RetailerComponent.prototype.ngOnInit = function () {
    };
    RetailerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-retailer',
            template: __webpack_require__(/*! raw-loader!./retailer.component.html */ "./node_modules/raw-loader/index.js!./src/app/retailer/retailer.component.html"),
            styles: [__webpack_require__(/*! ./retailer.component.css */ "./src/app/retailer/retailer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
        return this.myHttpClient.get("/src/app/config/appsettings.json");
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
        return this.myHttpclient.get(url)
            .subscribe({
            next: function (data) {
                return data;
            },
            error: function (err) {
                console.log('An error...');
                console.log(err);
            },
            complete: function () { console.log('call complete'); }
        });
    };
    SuperStockistService.prototype.getDataAll = function (parentCompanyId) {
        //var url = this.myAppSetting.baseUrl;
        var url = 'https://localhost:5001/api';
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
        var url = this.myAppSetting.baseUrl;
        url = url + '/SuperStockist';
        this.myHttpclient.post(url, superStockist, httpOptions).subscribe(function (data) {
            console.log("POST Request is successful ", data);
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
        this.myHttpclient.put('https://localhost:5001/api/SuperStockist/' + superStockist.ID, superStockist, httpOptions).subscribe(function (data) {
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

/***/ "./src/app/super-stockist-list/super-stockist-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/super-stockist-list/super-stockist-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyLXN0b2NraXN0LWxpc3Qvc3VwZXItc3RvY2tpc3QtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _service_app_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/app-settings.service */ "./src/app/service/app-settings.service.ts");




var SuperStockistListComponent = /** @class */ (function () {
    function SuperStockistListComponent(superStockistService, appSettingsService) {
        var _this = this;
        this.superStockistService = superStockistService;
        this.appSettingsService = appSettingsService;
        this.searchText = '';
        appSettingsService.getSettings().subscribe(function (data) { return _this.myAppSetting = data; });
    }
    SuperStockistListComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    SuperStockistListComponent.prototype.loadData = function () {
        var _this = this;
        this.searchText = '';
        this.superStockistService.getDataAll('05008166-6159-493D-15EE-08D712D81DBC')
            .subscribe(function (data) {
            console.log(data);
            _this.superStockists = data;
            (function (err) { console.log(err); });
        });
    };
    SuperStockistListComponent.ctorParameters = function () { return [
        { type: _service_super_stockist_service__WEBPACK_IMPORTED_MODULE_2__["SuperStockistService"] },
        { type: _service_app_settings_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsService"] }
    ]; };
    SuperStockistListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-super-stockist-list',
            template: __webpack_require__(/*! raw-loader!./super-stockist-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/super-stockist-list/super-stockist-list.component.html"),
            styles: [__webpack_require__(/*! ./super-stockist-list.component.css */ "./src/app/super-stockist-list/super-stockist-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_super_stockist_service__WEBPACK_IMPORTED_MODULE_2__["SuperStockistService"], _service_app_settings_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsService"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyLXN0b2NraXN0L3N1cGVyLXN0b2NraXN0LmNvbXBvbmVudC5jc3MifQ== */"

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



var SuperStockistComponent = /** @class */ (function () {
    function SuperStockistComponent(superStockistService) {
        this.superStockistService = superStockistService;
        this.searchText = '';
    }
    SuperStockistComponent.prototype.ngOnInit = function () {
    };
    SuperStockistComponent.prototype.loadData = function () {
        var _this = this;
        this.searchText = '';
        this.superStockistService.getDataAll('')
            .subscribe(function (data) {
            _this.superStockists = data;
            (function (err) { console.log(err); });
        });
    };
    SuperStockistComponent.ctorParameters = function () { return [
        { type: _service_super_stockist_service__WEBPACK_IMPORTED_MODULE_2__["SuperStockistService"] }
    ]; };
    SuperStockistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-super-stockist',
            template: __webpack_require__(/*! raw-loader!./super-stockist.component.html */ "./node_modules/raw-loader/index.js!./src/app/super-stockist/super-stockist.component.html"),
            styles: [__webpack_require__(/*! ./super-stockist.component.css */ "./src/app/super-stockist/super-stockist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_super_stockist_service__WEBPACK_IMPORTED_MODULE_2__["SuperStockistService"]])
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

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW4tYXNzaWduLXN0b2NrL3RyYW4tYXNzaWduLXN0b2NrLmNvbXBvbmVudC5jc3MifQ== */"

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
//# sourceMappingURL=main-es5.js.map