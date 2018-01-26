webpackJsonp([2],{

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesListPageModule", function() { return ArticlesListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__articles_list__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(396);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ArticlesListPageModule = (function () {
    function ArticlesListPageModule() {
    }
    ArticlesListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__articles_list__["a" /* ArticlesListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__articles_list__["a" /* ArticlesListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            ],
        })
    ], ArticlesListPageModule);
    return ArticlesListPageModule;
}());

//# sourceMappingURL=articles-list.module.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_othre_info_http_othre_info__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ArticlesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ArticlesListPage = (function () {
    function ArticlesListPage(http, navParams) {
        this.http = http;
        this.navParams = navParams;
    }
    ArticlesListPage.prototype.ionViewDidEnter = function () {
        this.http.SendMsg(-1);
    };
    ArticlesListPage.prototype.pageChanged = function (e) {
        // console.log(e,"page changed！");
    };
    /**
     * 路由传参
     */
    ArticlesListPage.prototype.ionViewDidLoad = function () {
        // console.log(JSON.stringify(this.navParams) + this.navParams.get('id'));
        ///this.activeRoute.params.subscribe(params => console.log(params["id"]));  另一种页面传参
    };
    /**
     * 下一页
     */
    ArticlesListPage.prototype.clickNextPage = function () {
        this.pager.nextPage();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pagination'),
        __metadata("design:type", Object)
    ], ArticlesListPage.prototype, "pager", void 0);
    ArticlesListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-articles-list',template:/*ion-inline-start:"D:\Blog\src\pages\articles-list\articles-list.html"*/'<!--\n\n  Generated template for the ArticlesListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <my-header></my-header>\n\n    <go-home></go-home>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <!--[className]="item.InvalidDays<=0||item.Status===0?\'timeOut coupons-type\':\'coupons-type\'"-->\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-10>\n\n        <ion-list>\n\n          <ion-list-header>\n\n            <ion-icon name="star" item-start>第0页</ion-icon>\n\n            <button ion-button item-end (click)="clickNextPage()">下一页</button>\n\n          </ion-list-header>\n\n          <articles-list></articles-list>\n\n        </ion-list>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <!-- 个人简介组件 -->\n\n        <left-introduction></left-introduction>\n\n        <!-- 访问量组件 -->\n\n        <left-information></left-information>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <!-- 分页组件 -->\n\n        <pagination #pagination\n\n          (pageChangeEvent)="pageChanged($event)" (nextPage)="$event.stopPropagation(); previousPage(true)"></pagination>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Blog\src\pages\articles-list\articles-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_http_othre_info_http_othre_info__["a" /* HttpOthreInfoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ArticlesListPage);
    return ArticlesListPage;
}());

//# sourceMappingURL=articles-list.js.map

/***/ })

});
//# sourceMappingURL=2.js.map