(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+7EV":
/*!********************************************************!*\
  !*** ./src/app/cake-details/cake-details.component.ts ***!
  \********************************************************/
/*! exports provided: CakeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CakeDetailsComponent", function() { return CakeDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cake_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cake.service */ "1S1X");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CakeDetailsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ing_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ing_r1);
} }
class CakeDetailsComponent {
    constructor(cakes, routes, client, router, toast) {
        this.cakes = cakes;
        this.routes = routes;
        this.client = client;
        this.router = router;
        this.toast = toast;
        this.ids = +this.routes.snapshot.params['id'];
        console.log(this.ids);
        var apiurl = 'https://apifromashu.herokuapp.com/api/cake/';
        this.client.get(apiurl + this.ids).subscribe((response) => {
            console.log('response from signup api', response);
            this.cakeobj = response.data;
            this.cake = { name: this.cakeobj.name, cakeid: this.cakeobj.cakeid, image: this.cakeobj.image, price: this.cakeobj.price, weight: this.cakeobj.weight };
        }, (error) => {
            console.log('Error from signup api', error);
        });
    }
    ngOnInit() {
    }
    add() {
        var api = 'https://apifromashu.herokuapp.com/api/addcaketocart';
        this.client.post(api, this.cake).subscribe((response) => {
            console.log("add cake to cart response", response);
        }, (error) => {
            console.log("add cake to cart error", error);
        });
        if (!localStorage.getItem("email")) {
            this.toast.warning("Please Login First", "Warning");
            setTimeout(() => {
                this.router.navigate(['/login']);
            }, 5000);
        }
        // if (localStorage.getItem("email")) {
        //   
        //   console.log(cake);
        // }
    }
}
CakeDetailsComponent.ɵfac = function CakeDetailsComponent_Factory(t) { return new (t || CakeDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cake_service__WEBPACK_IMPORTED_MODULE_1__["CakeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
CakeDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CakeDetailsComponent, selectors: [["app-cake-details"]], decls: 28, vars: 8, consts: [[1, "container"], [1, "imag"], [3, "src"], [4, "ngFor", "ngForOf"], [1, "details"], [3, "click"], [1, "far", "fa-heart"]], template: function CakeDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ingredients:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CakeDetailsComponent_div_6_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cake Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CakeDetailsComponent_Template_button_click_22_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Add To Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Like ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.cakeobj.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cakeobj.ingredients);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Name: ", ctx.cakeobj.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Description:", ctx.cakeobj.description, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ratings: ", ctx.cakeobj.ratings, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Likes: ", ctx.cakeobj.likes, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price: ", ctx.cakeobj.price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Weight: ", ctx.cakeobj.weight, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".container[_ngcontent-%COMP%]{\r\n    position:relative;\r\n    top:10vh;\r\n    left:10vw;\r\n    display: flex;\r\n    flex-direction: row;\r\n    height:100vh;\r\n    \r\n}\r\n.details[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    left:5vw;\r\n    display:grid;\r\n    grid-template-rows: repeat(6,1fr);\r\n    height:30px;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n    width:8vw;\r\n    height:5vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNha2UtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixTQUFTO0lBQ1QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZOztBQUVoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLFdBQVc7QUFDZjtBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZCIsImZpbGUiOiJjYWtlLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHRvcDoxMHZoO1xyXG4gICAgbGVmdDoxMHZ3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgICBcclxufVxyXG4uZGV0YWlsc3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6NXZ3O1xyXG4gICAgZGlzcGxheTpncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwxZnIpO1xyXG4gICAgaGVpZ2h0OjMwcHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgd2lkdGg6OHZ3O1xyXG4gICAgaGVpZ2h0OjV2aDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\cakeproject\src\main.ts */"zUnb");


/***/ }),

/***/ "1S1X":
/*!*********************************!*\
  !*** ./src/app/cake.service.ts ***!
  \*********************************/
/*! exports provided: CakeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CakeService", function() { return CakeService; });
/* harmony import */ var _cakedata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cakedata */ "co2x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CakeService {
    constructor() {
        this.cakecard = _cakedata__WEBPACK_IMPORTED_MODULE_0__["cakedatas"];
        this.cakess = this.cakecard;
        this.carousel = [
            'https://images.unsplash.com/photo-1619252872171-6f42e9803cce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE2fHxjYWtlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            'assets/cake-img2.jpg',
            'assets/cake-img3.jpg',
            'https://images.unsplash.com/photo-1553602870-e8a48bd4cd12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGNha2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1612899434438-23764f64bb3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNha2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        ];
        this.userdetails = [];
    }
    ValidateEmail(inputText) {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (inputText.match(mailformat)) {
            return true;
        }
        else {
            alert("Please! enter the valid mail id");
            return false;
        }
    }
}
CakeService.ɵfac = function CakeService_Factory(t) { return new (t || CakeService)(); };
CakeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CakeService, factory: CakeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "6+dj":
/*!************************************************************!*\
  !*** ./src/app/forgetpassword/forgetpassword.component.ts ***!
  \************************************************************/
/*! exports provided: ForgetpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpasswordComponent", function() { return ForgetpasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _cake_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cake.service */ "1S1X");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class ForgetpasswordComponent {
    constructor(client, user, router) {
        this.client = client;
        this.user = user;
        this.router = router;
    }
    ngOnInit() {
    }
    forgot() {
        if (this.user.ValidateEmail(this.email)) {
            //console.log('User entered', this.users);
            var apiurl = 'https://apifromashu.herokuapp.com/api/recoverpassword';
            this.client.post(apiurl, { email: this.email }).subscribe((response) => {
                console.log('response from signup api', response);
                this.message = response.message;
                console.log(this.message);
            }, (error) => {
                console.log('Error from signup api', error);
            });
        }
        else {
            alert('Please enter the valid Email id');
        }
        //console.log(this.user.userdetails);
    }
}
ForgetpasswordComponent.ɵfac = function ForgetpasswordComponent_Factory(t) { return new (t || ForgetpasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cake_service__WEBPACK_IMPORTED_MODULE_2__["CakeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ForgetpasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgetpasswordComponent, selectors: [["app-forgetpassword"]], decls: 8, vars: 1, consts: [[1, "wrapper", "fadeInDown"], ["id", "formContent"], [1, "fadeIn", "first"], ["type", "text", "id", "mail", "name", "mail", "placeholder", "Enter your mail id", 1, "fadeIn", "second", 3, "ngModel", "ngModelChange"], ["name", "forget", "type", "submit", "value", "send password", 1, "fadeIn", "fourth", 3, "click"]], template: function ForgetpasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Forgot You Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgetpasswordComponent_Template_input_ngModelChange_6_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgetpasswordComponent_Template_input_click_7_listener() { return ctx.forgot(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["html[_ngcontent-%COMP%] {\r\n    background-color: #56baed;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%] {\r\n    font-family: \"Poppins\", sans-serif;\r\n    height: 100vh;\r\n  }\r\n  \r\n  a[_ngcontent-%COMP%] {\r\n    color: #92badd;\r\n    display:inline-block;\r\n    text-decoration: none;\r\n    font-weight: 400;\r\n  }\r\n  \r\n  h2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    display:inline-block;\r\n    margin: 40px 8px 10px 8px; \r\n    color: #cccccc;\r\n  }\r\n  \r\n  \r\n  \r\n  .wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    width: 100%;\r\n    min-height: 100%;\r\n    padding: 20px;\r\n  }\r\n  \r\n  #formContent[_ngcontent-%COMP%] {\r\n    border-radius: 10px 10px 10px 10px;\r\n    background: #fff;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: 450px;\r\n    position: relative;\r\n    padding: 0px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n    text-align: center;\r\n  }\r\n  \r\n  #formFooter[_ngcontent-%COMP%] {\r\n    background-color: #f6f6f6;\r\n    border-top: 1px solid #dce8f1;\r\n    padding: 25px;\r\n    text-align: center;\r\n    border-radius: 0 0 10px 10px;\r\n  }\r\n  \r\n  \r\n  \r\n  h2.inactive[_ngcontent-%COMP%] {\r\n    color: #cccccc;\r\n  }\r\n  \r\n  h2.active[_ngcontent-%COMP%] {\r\n    color: #0d0d0d;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n  \r\n  \r\n  \r\n  input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]  {\r\n    background-color: #56baed;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 80px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n    border-radius: 5px 5px 5px 5px;\r\n    margin: 5px 20px 40px 20px;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n  \r\n  input[type=button][_ngcontent-%COMP%]:hover, input[type=submit][_ngcontent-%COMP%]:hover, input[type=reset][_ngcontent-%COMP%]:hover  {\r\n    background-color: #39ace7;\r\n  }\r\n  \r\n  input[type=button][_ngcontent-%COMP%]:active, input[type=submit][_ngcontent-%COMP%]:active, input[type=reset][_ngcontent-%COMP%]:active  {\r\n    transform: scale(0.95);\r\n  }\r\n  \r\n  input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]{\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    width: 85%;\r\n    border: 2px solid #f6f6f6;\r\n    transition: all 0.5s ease-in-out;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n  \r\n  input[type=text][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n  \r\n  input[type=text][_ngcontent-%COMP%]:placeholder {\r\n    color: #cccccc;\r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  .fadeInDown[_ngcontent-%COMP%] {\r\n    animation-name: fadeInDown;\r\n    animation-duration: 1s;\r\n    animation-fill-mode: both;\r\n  }\r\n  \r\n  @keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n  \r\n  \r\n  \r\n  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n  \r\n  .fadeIn[_ngcontent-%COMP%] {\r\n    opacity:0;\r\n    animation:fadeIn ease-in 1;\r\n    animation-fill-mode:forwards;\r\n    animation-duration:1s;\r\n  }\r\n  \r\n  .fadeIn.first[_ngcontent-%COMP%] {\r\n    animation-delay: 0.4s;\r\n  }\r\n  \r\n  .fadeIn.second[_ngcontent-%COMP%] {\r\n    animation-delay: 0.6s;\r\n  }\r\n  \r\n  .fadeIn.third[_ngcontent-%COMP%] {\r\n    animation-delay: 0.8s;\r\n  }\r\n  \r\n  .fadeIn.fourth[_ngcontent-%COMP%] {\r\n    animation-delay: 1s;\r\n  }\r\n  \r\n  \r\n  \r\n  .underlineHover[_ngcontent-%COMP%]:after {\r\n    display: block;\r\n    left: 0;\r\n    bottom: -10px;\r\n    width: 0;\r\n    height: 2px;\r\n    background-color: #56baed;\r\n    content: \"\";\r\n    transition: width 0.2s;\r\n  }\r\n  \r\n  .underlineHover[_ngcontent-%COMP%]:hover {\r\n    color: #0d0d0d;\r\n  }\r\n  \r\n  .underlineHover[_ngcontent-%COMP%]:hover:after{\r\n    width: 100%;\r\n  }\r\n  \r\n  \r\n  \r\n  *[_ngcontent-%COMP%]:focus {\r\n      outline: none;\r\n  }\r\n  \r\n  #icon[_ngcontent-%COMP%] {\r\n    width:60%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldHBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxrQ0FBa0M7SUFDbEMsYUFBYTtFQUNmOztFQUVBO0lBQ0UsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsY0FBYztFQUNoQjs7RUFJQSxjQUFjOztFQUVkO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOztFQUVBO0lBRUUsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUVaLHlDQUF5QztJQUN6QyxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixrQkFBa0I7SUFFbEIsNEJBQTRCO0VBQzlCOztFQUlBLFNBQVM7O0VBRVQ7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGdDQUFnQztFQUNsQzs7RUFJQSxtQkFBbUI7O0VBRW5CO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixlQUFlO0lBRWYsOENBQThDO0lBRTlDLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFLMUIsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBS0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0lBQ1gsVUFBVTtJQUNWLHlCQUF5QjtJQUt6QixnQ0FBZ0M7SUFFaEMsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBSUEsZUFBZTs7RUFFZix1Q0FBdUM7O0VBQ3ZDO0lBRUUsMEJBQTBCO0lBRTFCLHNCQUFzQjtJQUV0Qix5QkFBeUI7RUFDM0I7O0VBZUE7SUFDRTtNQUNFLFVBQVU7TUFFVixtQ0FBbUM7SUFDckM7SUFDQTtNQUNFLFVBQVU7TUFFVixlQUFlO0lBQ2pCO0VBQ0Y7O0VBRUEsa0NBQWtDOztFQUdsQyxvQkFBb0IsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFOztFQUUxRDtJQUNFLFNBQVM7SUFHVCwwQkFBMEI7SUFJMUIsNEJBQTRCO0lBSTVCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUdFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUdFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUdFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUdFLG1CQUFtQjtFQUNyQjs7RUFFQSxrQ0FBa0M7O0VBQ2xDO0lBQ0UsY0FBYztJQUNkLE9BQU87SUFDUCxhQUFhO0lBQ2IsUUFBUTtJQUNSLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBSUEsV0FBVzs7RUFFWDtNQUNJLGFBQWE7RUFDakI7O0VBRUE7SUFDRSxTQUFTO0VBQ1giLCJmaWxlIjoiZm9yZ2V0cGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICBcclxuICBhIHtcclxuICAgIGNvbG9yOiAjOTJiYWRkO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICBcclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiA0MHB4IDhweCAxMHB4IDhweDsgXHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogU1RSVUNUVVJFICovXHJcbiAgXHJcbiAgLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgI2Zvcm1Db250ZW50IHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAjZm9ybUZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2U4ZjE7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogVEFCUyAqL1xyXG4gIFxyXG4gIGgyLmluYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuICBcclxuICBoMi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogRk9STSBUWVBPR1JBUEhZKi9cclxuICBcclxuICBpbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0gIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgbWFyZ2luOiA1cHggMjBweCA0MHB4IDIwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciwgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLCBpbnB1dFt0eXBlPXJlc2V0XTpob3ZlciAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5YWNlNztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZSwgaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSwgaW5wdXRbdHlwZT1yZXNldF06YWN0aXZlICB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogIzBkMGQwZDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXRleHRdOnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvKiBBTklNQVRJT05TICovXHJcbiAgXHJcbiAgLyogU2ltcGxlIENTUzMgRmFkZS1pbi1kb3duIEFuaW1hdGlvbiAqL1xyXG4gIC5mYWRlSW5Eb3duIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG4gIEAtbW96LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG4gIFxyXG4gIC5mYWRlSW4ge1xyXG4gICAgb3BhY2l0eTowO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICAgIC1tb3otYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgICBhbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICBcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gIH1cclxuICBcclxuICAuZmFkZUluLmZpcnN0IHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWRlSW4uc2Vjb25kIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWRlSW4udGhpcmQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICB9XHJcbiAgXHJcbiAgLmZhZGVJbi5mb3VydGgge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICB9XHJcbiAgXHJcbiAgLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cclxuICAudW5kZXJsaW5lSG92ZXI6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAtMTBweDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMnM7XHJcbiAgfVxyXG4gIFxyXG4gIC51bmRlcmxpbmVIb3Zlcjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzBkMGQwZDtcclxuICB9XHJcbiAgXHJcbiAgLnVuZGVybGluZUhvdmVyOmhvdmVyOmFmdGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qIE9USEVSUyAqL1xyXG4gIFxyXG4gICo6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gIH0gXHJcbiAgXHJcbiAgI2ljb24ge1xyXG4gICAgd2lkdGg6NjAlO1xyXG4gIH1cclxuICAiXX0= */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slider/slider.component */ "oB+8");
/* harmony import */ var _cakecard_cakecard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cakecard/cakecard.component */ "w3UV");



class HomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cakecard");
    } }, directives: [_slider_slider_component__WEBPACK_IMPORTED_MODULE_1__["SliderComponent"], _cakecard_cakecard_component__WEBPACK_IMPORTED_MODULE_2__["CakecardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "MzBN":
/*!************************************************!*\
  !*** ./src/app/editfrom/editfrom.component.ts ***!
  \************************************************/
/*! exports provided: EditfromComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditfromComponent", function() { return EditfromComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function EditfromComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditfromComponent_div_41_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r5.ingredients[i_r4] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "ingds", i_r4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.ingredients[i_r4]);
} }
function EditfromComponent_input_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 34);
} }
function EditfromComponent_input_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 35);
} }
class EditfromComponent {
    constructor(routes, client) {
        this.routes = routes;
        this.client = client;
        this.ingredients = {};
        this.ids = this.routes.snapshot.params['id'];
        console.log(this.ids);
        var apiurl = 'https://apifromashu.herokuapp.com/api/cake/';
        this.client.get(apiurl + this.ids).subscribe((response) => {
            console.log('response from signup api', response);
            this.cakeobj = response.data;
            this.ingredients = Object.assign({}, this.cakeobj.ingredients);
            console.log(this.ingredients);
            console.log(this.cakeobj);
        }, (error) => {
            console.log('Error from signup api', error);
        });
    }
    ngOnInit() {
    }
    upload(event) {
        if (event.target.files.length === 0) {
            console.log("No file selected!");
            return;
        }
        let file = event.target.files[0];
        var formData = new FormData();
        formData.append('file', file);
        console.log(formData);
        // this.files.inProgress = true;
        var api = 'https://apifromashu.herokuapp.com/api/upload';
        this.client.post(api, formData).subscribe((res) => {
            console.log("response from upload api", res);
            this.cakeobj.image = res.imageUrl;
            console.log(this.cakeobj.image);
        }, (error) => {
            console.log("error from upload api", error);
        });
    }
    save() {
        this.cakeobj.ingredients = Object.values(this.ingredients);
        console.log(this.cakeobj);
    }
}
EditfromComponent.ɵfac = function EditfromComponent_Factory(t) { return new (t || EditfromComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
EditfromComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditfromComponent, selectors: [["app-editfrom"]], decls: 53, vars: 12, consts: [[1, "container"], [1, "row", "g-2"], [1, "col-md-8"], ["for", "name", 1, "form-label"], ["type", "email", "id", "name", "name", "cakename", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-12"], ["for", "owner", 1, "form-label"], [1, "col-md-4"], ["type", "text", "id", "owner", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "owner", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-10"], ["for", "description", 1, "form-label"], ["name", "description", "type", "text", "id", "description", "placeholder", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "price", 1, "form-label"], ["name", "price", "type", "text", "id", "price", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "type", 1, "form-label"], ["name", "type", "type", "text", "id", "type", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-4"], ["for", "flavour", 1, "form-label"], ["name", "flavour", "type", "text", "id", "flavour", "placeholder", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-2"], ["for", "weight", 1, "form-label"], ["name", "weight", "type", "text", "id", "weight", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "indg", 1, "form-label"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-12"], [1, "form-check"], ["name", "eggless", "class", "form-check-input", "type", "checkbox", "id", "eggless", 4, "ngIf"], ["name", "eggless", "class", "form-check-input", "type", "checkbox", "id", "eggless", "checked", "", 4, "ngIf"], ["for", "eggless", 1, "form-check-label"], ["name", "image", 1, "imgsi", 3, "src"], ["type", "file", "name", "imagefile", 3, "change"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["type", "text", "id", "indg", "placeholder", "", 1, "form-control", 3, "ngModel", "name", "ngModelChange"], ["name", "eggless", "type", "checkbox", "id", "eggless", 1, "form-check-input"], ["name", "eggless", "type", "checkbox", "id", "eggless", "checked", "", 1, "form-check-input"]], template: function EditfromComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditfromComponent_Template_input_ngModelChange_5_listener($event) { return ctx.cakeobj.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Owner:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditfromComponent_Template_input_ngModelChange_13_listener($event) { return ctx.cakeobj.owner.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditfromComponent_Template_input_ngModelChange_17_listener($event) { return ctx.cakeobj.owner.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditfromComponent_Template_input_ngModelChange_21_listener($event) { return ctx.cakeobj.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditfromComponent_Template_input_ngModelChange_25_listener($event) { return ctx.cakeobj.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditfromComponent_Template_input_ngModelChange_29_listener($event) { return ctx.cakeobj.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Flavour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditfromComponent_Template_input_ngModelChange_33_listener($event) { return ctx.cakeobj.flavour = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditfromComponent_Template_input_ngModelChange_37_listener($event) { return ctx.cakeobj.weight = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Ingredients:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, EditfromComponent_div_41_Template, 2, 2, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, EditfromComponent_input_44_Template, 1, 0, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, EditfromComponent_input_45_Template, 1, 0, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Eggless ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditfromComponent_Template_input_change_49_listener($event) { return ctx.upload($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditfromComponent_Template_button_click_51_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cakeobj.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cakeobj.owner.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cakeobj.owner.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cakeobj.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cakeobj.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cakeobj.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cakeobj.flavour);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cakeobj.weight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cakeobj.ingredients);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cakeobj.eggless);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cakeobj.eggless);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.cakeobj.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".form-label[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    left:0vw;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    border: 1px solid #aaa;\r\n    width:80vw;\r\n    height:150vh;\r\n    position: relative;\r\n    top:20px;\r\n    background-color: deepskyblue;\r\n}\r\n.row[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    left:10vw;\r\n    top:20px;\r\n}\r\ninput[_ngcontent-%COMP%]{\r\n    border:none;\r\n    transition: ease-in;\r\n    animation: ease-in 2s  1s  right line;\r\n}\r\n.imgsi[_ngcontent-%COMP%]{\r\n    width:100px;\r\n    height:100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRmcm9tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtBQUNaO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0FBQ1o7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJlZGl0ZnJvbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbGFiZWx7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OjB2dztcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxuICAgIHdpZHRoOjgwdnc7XHJcbiAgICBoZWlnaHQ6MTUwdmg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6MjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRlZXBza3libHVlO1xyXG59XHJcbi5yb3cge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDoxMHZ3O1xyXG4gICAgdG9wOjIwcHg7XHJcbn1cclxuaW5wdXR7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW47XHJcbiAgICBhbmltYXRpb246IGVhc2UtaW4gMnMgIDFzICByaWdodCBsaW5lO1xyXG59XHJcbi5pbWdzaXtcclxuICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgaGVpZ2h0OjEwMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "NWQE":
/*!**********************************************!*\
  !*** ./src/app/autheninterceptor.service.ts ***!
  \**********************************************/
/*! exports provided: AutheninterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutheninterceptorService", function() { return AutheninterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "5eHb");


class AutheninterceptorService {
    constructor(toastr) {
        this.toastr = toastr;
    }
    intercept(request, next) {
        //  alert("working");
        if (localStorage.token) {
            request = request.clone({
                setHeaders: { authtoken: localStorage.token }
            });
        }
        return next.handle(request);
    }
}
AutheninterceptorService.ɵfac = function AutheninterceptorService_Factory(t) { return new (t || AutheninterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
AutheninterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AutheninterceptorService, factory: AutheninterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'cakeproject';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "TRGY":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function AdminComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_tr_15_Template_td_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const parcake_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.editform(parcake_r1.cakeid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parcake_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", parcake_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](parcake_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", parcake_r1.price, "/-");
} }
class AdminComponent {
    constructor(client, router) {
        this.client = client;
        this.router = router;
        this.choosecake = {};
        this.api = 'https://apifromashu.herokuapp.com/api/';
        this.showing();
    }
    ngOnInit() {
    }
    showing() {
        this.client.get(this.api + 'allcakes').subscribe((res) => {
            console.log("response from cakescart", res);
            this.choosecake = [...res.data];
            console.log(this.choosecake);
        }, (error) => {
            console.log("error from cakescart", error);
        });
    }
    editform(i) {
        this.router.navigate(['/editform', i]);
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 16, vars: 1, consts: [[1, "table", "table-hover"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "sizes", 3, "src"], [3, "click"], [1, "far", "fa-edit"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdminComponent_tr_15_Template, 11, 4, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.choosecake);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["td[_ngcontent-%COMP%] > .sizes[_ngcontent-%COMP%]{\r\n    width:50px;\r\n    height:50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmIiwiZmlsZSI6ImFkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZD4uc2l6ZXN7XHJcbiAgICB3aWR0aDo1MHB4O1xyXG4gICAgaGVpZ2h0OjUwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "W32u":
/*!************************************************!*\
  !*** ./src/app/cakeform/cakeform.component.ts ***!
  \************************************************/
/*! exports provided: CakeformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CakeformComponent", function() { return CakeformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


class CakeformComponent {
    constructor() {
        this.addvalue = {};
    }
    ngOnInit() {
    }
    added() {
        console.log("the enter data is:", this.addvalue);
    }
}
CakeformComponent.ɵfac = function CakeformComponent_Factory(t) { return new (t || CakeformComponent)(); };
CakeformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CakeformComponent, selectors: [["app-cakeform"]], decls: 31, vars: 8, consts: [[1, "addlist"], [1, "form-style"], ["name", "cake name", "placeholder", "Enter Cake Name", 3, "ngModel", "ngModelChange"], ["name", "cake Image", "type", "file", "placeholder", "No file choosen", 3, "ngModel", "ngModelChange"], ["name", "cake rate", "type", "text", "placeholder", "Enter Price", 3, "ngModel", "ngModelChange"], ["name", "cake weight", "type", "text", "placeholder", "Enter Weight", 3, "ngModel", "ngModelChange"], ["name", "cake eggless", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["name", "cake ingreds", "type", "text", "placeholder", "Enter Ingredients", 3, "ngModel", "ngModelChange"], ["name", "categories", 3, "ngModel", "ngModelChange"], ["value", "Birthday cake"], ["value", "Vanilla cake"], ["value", "Butterscotch cake"], ["value", "BlackForest cake"], ["name", "cake describe", "placeholder", "Enter Description", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", 3, "click"]], template: function CakeformComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CakeformComponent_Template_input_ngModelChange_4_listener($event) { return ctx.addvalue.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CakeformComponent_Template_input_ngModelChange_6_listener($event) { return ctx.addvalue.file = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CakeformComponent_Template_input_ngModelChange_8_listener($event) { return ctx.addvalue.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CakeformComponent_Template_input_ngModelChange_10_listener($event) { return ctx.addvalue.weight = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CakeformComponent_Template_input_ngModelChange_12_listener($event) { return ctx.addvalue.eggless = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Eggless");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CakeformComponent_Template_input_ngModelChange_16_listener($event) { return ctx.addvalue.ingredients = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CakeformComponent_Template_select_ngModelChange_18_listener($event) { return ctx.addvalue.categories = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Chocolate cake");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Vanilla Cake");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Butterscotch Cake");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "BlackForest Cake");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CakeformComponent_Template_textarea_ngModelChange_28_listener($event) { return ctx.addvalue.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CakeformComponent_Template_button_click_29_listener() { return ctx.added(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addvalue.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addvalue.file);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addvalue.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addvalue.weight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addvalue.eggless);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addvalue.ingredients);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addvalue.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addvalue.description);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"]], styles: [".addlist[_ngcontent-%COMP%]{\r\n    border:1px solid #aaa;\r\n    display: grid;\r\n    position: relative;\r\n    top:10vh;\r\n    left:25vw;\r\n    width:50vw;\r\n    height:100%;\r\n    background-color:lightgray;\r\n}\r\n.form-style[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    gap: 3px;\r\n    width: 30vw;\r\n    position: relative;\r\n    left: 20%;\r\n    top: 0;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    width:10vw;\r\n    border:2px solid #555;\r\n\r\n}\r\nh5[_ngcontent-%COMP%]{\r\n    margin:15px 0px 0 10vw;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNha2Vmb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE1BQU07QUFDVjtBQUNBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjs7QUFFekI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJjYWtlZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZGxpc3R7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNhYWE7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOjEwdmg7XHJcbiAgICBsZWZ0OjI1dnc7XHJcbiAgICB3aWR0aDo1MHZ3O1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JheTtcclxufVxyXG4uZm9ybS1zdHlsZXtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBnYXA6IDNweDtcclxuICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMjAlO1xyXG4gICAgdG9wOiAwO1xyXG59XHJcbi5idG57XHJcbiAgICB3aWR0aDoxMHZ3O1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCAjNTU1O1xyXG5cclxufVxyXG5oNXtcclxuICAgIG1hcmdpbjoxNXB4IDBweCAwIDEwdnc7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _cakeform_cakeform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cakeform/cakeform.component */ "W32u");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slider/slider.component */ "oB+8");
/* harmony import */ var _cakecard_cakecard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cakecard/cakecard.component */ "w3UV");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search/search.component */ "tq2C");
/* harmony import */ var _searching_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./searching.directive */ "a8d9");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forgetpassword/forgetpassword.component */ "6+dj");
/* harmony import */ var _hovering_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hovering.directive */ "u7cC");
/* harmony import */ var _searchpage_searchpage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./searchpage/searchpage.component */ "mNnz");
/* harmony import */ var _cake_details_cake_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cake-details/cake-details.component */ "+7EV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _bucket_bucket_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bucket/bucket.component */ "gKpc");
/* harmony import */ var _autheninterceptor_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./autheninterceptor.service */ "NWQE");
/* harmony import */ var _orderform_orderform_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./orderform/orderform.component */ "aCg6");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _editfrom_editfrom_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./editfrom/editfrom.component */ "MzBN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ "fXoL");




























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({ providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
            useClass: _autheninterceptor_service__WEBPACK_IMPORTED_MODULE_22__["AutheninterceptorService"],
            multi: true
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _cakeform_cakeform_component__WEBPACK_IMPORTED_MODULE_4__["CakeformComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _slider_slider_component__WEBPACK_IMPORTED_MODULE_6__["SliderComponent"],
        _cakecard_cakecard_component__WEBPACK_IMPORTED_MODULE_7__["CakecardComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
        _searching_directive__WEBPACK_IMPORTED_MODULE_9__["SearchingDirective"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"],
        _forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_13__["ForgetpasswordComponent"],
        _hovering_directive__WEBPACK_IMPORTED_MODULE_14__["HoveringDirective"],
        _searchpage_searchpage_component__WEBPACK_IMPORTED_MODULE_15__["SearchpageComponent"],
        _cake_details_cake_details_component__WEBPACK_IMPORTED_MODULE_16__["CakeDetailsComponent"],
        _bucket_bucket_component__WEBPACK_IMPORTED_MODULE_21__["BucketComponent"],
        _orderform_orderform_component__WEBPACK_IMPORTED_MODULE_23__["OrderformComponent"],
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_24__["AdminComponent"],
        _editfrom_editfrom_component__WEBPACK_IMPORTED_MODULE_25__["EditfromComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"]] }); })();


/***/ }),

/***/ "a8d9":
/*!****************************************!*\
  !*** ./src/app/searching.directive.ts ***!
  \****************************************/
/*! exports provided: SearchingDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchingDirective", function() { return SearchingDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cake_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cake.service */ "1S1X");


class SearchingDirective {
    constructor(cakes) {
        this.cakes = cakes;
    }
    ngOnChanges(changes) {
        if (changes.searchKey.currentValue) {
            this.cakes.cakess = this.cakes.cakecard.filter((e) => e.name.toLowerCase().includes(changes.searchKey.currentValue.toLowerCase()));
        }
        else {
            this.cakes.cakess = this.cakes.cakecard;
        }
    }
}
SearchingDirective.ɵfac = function SearchingDirective_Factory(t) { return new (t || SearchingDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cake_service__WEBPACK_IMPORTED_MODULE_1__["CakeService"])); };
SearchingDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SearchingDirective, selectors: [["", "appSearching", ""]], inputs: { searchKey: "searchKey" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ "aCg6":
/*!**************************************************!*\
  !*** ./src/app/orderform/orderform.component.ts ***!
  \**************************************************/
/*! exports provided: OrderformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderformComponent", function() { return OrderformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class OrderformComponent {
    constructor(client) {
        this.client = client;
        this.userdetails = {};
        this.totalprice = 0;
        this.api = 'https://apifromashu.herokuapp.com/api/';
        this.client.post(this.api + 'cakecart', {}).subscribe((res) => {
            console.log("response from cakescart", res);
            this.userdetails.cakedetail = [...res.data];
            this.userdetails.totalprice = (this.userdetails.cakedetail.reduce((acc, e) => e.price * e.quantity + acc, 0));
        }, (error) => {
            console.log("error from cakescart", error);
        });
    }
    ngOnInit() {
    }
    placeorder() {
        //console.log(this.userdetails.cakedetail.reduce((acc:any,e: any) => e.price * e.quantity+acc,0))
        console.log(this.userdetails);
        //  console.log(this.totalprice);
        this.userdetails = '';
        console.log(this.userdetails);
    }
}
OrderformComponent.ɵfac = function OrderformComponent_Factory(t) { return new (t || OrderformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
OrderformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderformComponent, selectors: [["app-orderform"]], decls: 9, vars: 5, consts: [[1, "wrapper", "fadeInDown"], ["id", "formContent"], ["action", "submit"], ["type", "text", "id", "name", "name", "name", "placeholder", "Name", 1, "fadeIn", "second", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "address", "name", "address", "placeholder", "Address", 1, "fadeIn", "third", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "phone", "name", "phone", "placeholder", "Phone Number", 1, "fadeIn", "third", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "city", "name", "city", "placeholder", "City", 1, "fadeIn", "third", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "pin", "name", "pin", "placeholder", "Pin code", 1, "fadeIn", "third", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Order", 1, "fadeIn", "fourth", 3, "click"]], template: function OrderformComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderformComponent_Template_input_ngModelChange_3_listener($event) { return ctx.userdetails.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderformComponent_Template_input_ngModelChange_4_listener($event) { return ctx.userdetails.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderformComponent_Template_input_ngModelChange_5_listener($event) { return ctx.userdetails.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderformComponent_Template_input_ngModelChange_6_listener($event) { return ctx.userdetails.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderformComponent_Template_input_ngModelChange_7_listener($event) { return ctx.userdetails.pin = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderformComponent_Template_input_click_8_listener() { return ctx.placeorder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userdetails.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userdetails.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userdetails.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userdetails.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userdetails.pin);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["html[_ngcontent-%COMP%] {\r\n    background-color: #56baed;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%] {\r\n    font-family: \"Poppins\", sans-serif;\r\n    height: 100vh;\r\n  }\r\n  \r\n  a[_ngcontent-%COMP%] {\r\n    color: #92badd;\r\n    display:inline-block;\r\n    text-decoration: none;\r\n    font-weight: 400;\r\n  }\r\n  \r\n  h2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    display:inline-block;\r\n    margin: 40px 8px 10px 8px; \r\n    color: #cccccc;\r\n  }\r\n  \r\n  \r\n  \r\n  .wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    width: 100%;\r\n    min-height: 100%;\r\n    padding: 20px;\r\n  }\r\n  \r\n  #formContent[_ngcontent-%COMP%] {\r\n    border-radius: 10px 10px 10px 10px;\r\n    background: #fff;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: 450px;\r\n    position: relative;\r\n    padding: 0px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n    text-align: center;\r\n  }\r\n  \r\n  #formFooter[_ngcontent-%COMP%] {\r\n    background-color: #f6f6f6;\r\n    border-top: 1px solid #dce8f1;\r\n    padding: 25px;\r\n    text-align: center;\r\n    border-radius: 0 0 10px 10px;\r\n  }\r\n  \r\n  \r\n  \r\n  h2.inactive[_ngcontent-%COMP%] {\r\n    color: #cccccc;\r\n  }\r\n  \r\n  h2.active[_ngcontent-%COMP%] {\r\n    color: #0d0d0d;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n  \r\n  \r\n  \r\n  input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]  {\r\n    background-color: #56baed;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 80px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n    border-radius: 5px 5px 5px 5px;\r\n    margin: 5px 20px 40px 20px;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n  \r\n  input[type=button][_ngcontent-%COMP%]:hover, input[type=submit][_ngcontent-%COMP%]:hover, input[type=reset][_ngcontent-%COMP%]:hover  {\r\n    background-color: #39ace7;\r\n  }\r\n  \r\n  input[type=button][_ngcontent-%COMP%]:active, input[type=submit][_ngcontent-%COMP%]:active, input[type=reset][_ngcontent-%COMP%]:active  {\r\n    transform: scale(0.95);\r\n  }\r\n  \r\n  input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]{\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    width: 85%;\r\n    border: 2px solid #f6f6f6;\r\n    transition: all 0.5s ease-in-out;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n  \r\n  input[type=text][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n  \r\n  input[type=text][_ngcontent-%COMP%]:placeholder {\r\n    color: #cccccc;\r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  .fadeInDown[_ngcontent-%COMP%] {\r\n    animation-name: fadeInDown;\r\n    animation-duration: 1s;\r\n    animation-fill-mode: both;\r\n  }\r\n  \r\n  @keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n  \r\n  \r\n  \r\n  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n  \r\n  .fadeIn[_ngcontent-%COMP%] {\r\n    opacity:0;\r\n    animation:fadeIn ease-in 1;\r\n    animation-fill-mode:forwards;\r\n    animation-duration:1s;\r\n  }\r\n  \r\n  .fadeIn.first[_ngcontent-%COMP%] {\r\n    animation-delay: 0.4s;\r\n  }\r\n  \r\n  .fadeIn.second[_ngcontent-%COMP%] {\r\n    animation-delay: 0.6s;\r\n  }\r\n  \r\n  .fadeIn.third[_ngcontent-%COMP%] {\r\n    animation-delay: 0.8s;\r\n  }\r\n  \r\n  .fadeIn.fourth[_ngcontent-%COMP%] {\r\n    animation-delay: 1s;\r\n  }\r\n  \r\n  \r\n  \r\n  .underlineHover[_ngcontent-%COMP%]:after {\r\n    display: block;\r\n    left: 0;\r\n    bottom: -10px;\r\n    width: 0;\r\n    height: 2px;\r\n    background-color: #56baed;\r\n    content: \"\";\r\n    transition: width 0.2s;\r\n  }\r\n  \r\n  .underlineHover[_ngcontent-%COMP%]:hover {\r\n    color: #0d0d0d;\r\n  }\r\n  \r\n  .underlineHover[_ngcontent-%COMP%]:hover:after{\r\n    width: 100%;\r\n  }\r\n  \r\n  \r\n  \r\n  *[_ngcontent-%COMP%]:focus {\r\n      outline: none;\r\n  }\r\n  \r\n  #icon[_ngcontent-%COMP%] {\r\n    width:60%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usa0NBQWtDO0lBQ2xDLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLGNBQWM7RUFDaEI7O0VBSUEsY0FBYzs7RUFFZDtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjs7RUFFQTtJQUVFLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFFWix5Q0FBeUM7SUFDekMsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2Isa0JBQWtCO0lBRWxCLDRCQUE0QjtFQUM5Qjs7RUFJQSxTQUFTOztFQUVUO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxnQ0FBZ0M7RUFDbEM7O0VBSUEsbUJBQW1COztFQUVuQjtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsZUFBZTtJQUVmLDhDQUE4QztJQUU5Qyw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBSzFCLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUtFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7SUFDVix5QkFBeUI7SUFLekIsZ0NBQWdDO0lBRWhDLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUlBLGVBQWU7O0VBRWYsdUNBQXVDOztFQUN2QztJQUVFLDBCQUEwQjtJQUUxQixzQkFBc0I7SUFFdEIseUJBQXlCO0VBQzNCOztFQWVBO0lBQ0U7TUFDRSxVQUFVO01BRVYsbUNBQW1DO0lBQ3JDO0lBQ0E7TUFDRSxVQUFVO01BRVYsZUFBZTtJQUNqQjtFQUNGOztFQUVBLGtDQUFrQzs7RUFHbEMsb0JBQW9CLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTs7RUFFMUQ7SUFDRSxTQUFTO0lBR1QsMEJBQTBCO0lBSTFCLDRCQUE0QjtJQUk1QixxQkFBcUI7RUFDdkI7O0VBRUE7SUFHRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFHRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFHRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFHRSxtQkFBbUI7RUFDckI7O0VBRUEsa0NBQWtDOztFQUNsQztJQUNFLGNBQWM7SUFDZCxPQUFPO0lBQ1AsYUFBYTtJQUNiLFFBQVE7SUFDUixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUlBLFdBQVc7O0VBRVg7TUFDSSxhQUFhO0VBQ2pCOztFQUVBO0lBQ0UsU0FBUztFQUNYIiwiZmlsZSI6Im9yZGVyZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIFxyXG4gIGEge1xyXG4gICAgY29sb3I6ICM5MmJhZGQ7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDQwcHggOHB4IDEwcHggOHB4OyBcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvKiBTVFJVQ1RVUkUgKi9cclxuICBcclxuICAud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAjZm9ybUNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gICNmb3JtRm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RjZThmMTtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvKiBUQUJTICovXHJcbiAgXHJcbiAgaDIuaW5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgfVxyXG4gIFxyXG4gIGgyLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzBkMGQwZDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvKiBGT1JNIFRZUE9HUkFQSFkqL1xyXG4gIFxyXG4gIGlucHV0W3R5cGU9YnV0dG9uXSwgaW5wdXRbdHlwZT1zdWJtaXRdLCBpbnB1dFt0eXBlPXJlc2V0XSAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHggODBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgICBtYXJnaW46IDVweCAyMHB4IDQwcHggMjBweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLCBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsIGlucHV0W3R5cGU9cmVzZXRdOmhvdmVyICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlhY2U3O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPWJ1dHRvbl06YWN0aXZlLCBpbnB1dFt0eXBlPXN1Ym1pdF06YWN0aXZlLCBpbnB1dFt0eXBlPXJlc2V0XTphY3RpdmUgIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRde1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjMGQwZDBkO1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qIEFOSU1BVElPTlMgKi9cclxuICBcclxuICAvKiBTaW1wbGUgQ1NTMyBGYWRlLWluLWRvd24gQW5pbWF0aW9uICovXHJcbiAgLmZhZGVJbkRvd24ge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbiAgQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG4gIEBrZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbiAgXHJcbiAgLmZhZGVJbiB7XHJcbiAgICBvcGFjaXR5OjA7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gICAgLW1vei1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICAgIGFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gIFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICBcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWRlSW4uZmlyc3Qge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICB9XHJcbiAgXHJcbiAgLmZhZGVJbi5zZWNvbmQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICB9XHJcbiAgXHJcbiAgLmZhZGVJbi50aGlyZCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gIH1cclxuICBcclxuICAuZmFkZUluLmZvdXJ0aCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIH1cclxuICBcclxuICAvKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG4gIC51bmRlcmxpbmVIb3ZlcjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4ycztcclxuICB9XHJcbiAgXHJcbiAgLnVuZGVybGluZUhvdmVyOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMGQwZDBkO1xyXG4gIH1cclxuICBcclxuICAudW5kZXJsaW5lSG92ZXI6aG92ZXI6YWZ0ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogT1RIRVJTICovXHJcbiAgXHJcbiAgKjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfSBcclxuICBcclxuICAjaWNvbiB7XHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ "co2x":
/*!*************************!*\
  !*** ./src/cakedata.ts ***!
  \*************************/
/*! exports provided: cakedatas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cakedatas", function() { return cakedatas; });
let cakedatas = [
    {
        name: "Cartoons Face cake",
        price: 120,
        id: 357951,
        weight: 3 + "kg",
        img: 'data:image/jpeg;base64,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'
    },
    {
        name: "Fruit cake",
        price: 120,
        id: 159753,
        weight: 3 + "kg",
        img: 'data:image/jpeg;base64,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'
    },
    {
        name: "Multi level cake",
        price: 350,
        weight: 3 + "kg",
        img: 'assets/wedding cake.jpg',
        id: 124536
    },
    {
        name: "Multi flavour  cake",
        price: 720,
        id: 147852,
        weight: 3 + "kg",
        img: 'data:image/jpeg;base64,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'
    },
    {
        name: "Dolls cake",
        price: 1200,
        id: 123591,
        weight: 3 + "kg",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUKjPO0cJQhb_11plx5E5SECiXonuUDPFqtg&usqp=CAU'
    },
    {
        name: "chocolate cake",
        price: 1220,
        id: 258963,
        weight: 3 + "kg",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzURwWril9gxvd_x5sYtkJ85nrJv6tNNMRqQ&usqp=CAU'
    },
];


/***/ }),

/***/ "gKpc":
/*!********************************************!*\
  !*** ./src/app/bucket/bucket.component.ts ***!
  \********************************************/
/*! exports provided: BucketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BucketComponent", function() { return BucketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function BucketComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BucketComponent_tr_19_Template_td_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const parcake_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.remove(parcake_r1.cakeid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parcake_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", parcake_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](parcake_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", parcake_r1.price, "/-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](parcake_r1.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](parcake_r1.weight);
} }
class BucketComponent {
    constructor(client, router) {
        this.client = client;
        this.router = router;
        this.choosecake = {};
        this.api = 'https://apifromashu.herokuapp.com/api/';
        this.showing();
    }
    showing() {
        this.client.post(this.api + 'cakecart', {}).subscribe((res) => {
            console.log("response from cakescart", res);
            this.choosecake = [...res.data];
            // console.log(this.choosecake);
        }, (error) => {
            console.log("error from cakescart", error);
        });
    }
    ngOnInit() { }
    remove(i) {
        this.client.post(this.api + 'removecakefromcart', { cakeid: i }).subscribe((res) => {
            console.log("response from removecart", res);
            if (res.message = "Removed  item from cart") {
                this.showing();
            }
        }, (err) => {
            console.log("error from removecart", err);
        });
    }
    order() {
        this.router.navigate(['/order']);
    }
}
BucketComponent.ɵfac = function BucketComponent_Factory(t) { return new (t || BucketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
BucketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BucketComponent, selectors: [["app-bucket"]], decls: 28, vars: 1, consts: [[1, "table", "table-hover"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "click"], ["scope", "row"], [1, "sizes", 3, "src"], [1, "far", "fa-minus-square"], [1, "far", "fa-plus-square"], [1, "far", "fa-trash-alt"]], template: function BucketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, BucketComponent_tr_19_Template, 17, 6, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BucketComponent_Template_button_click_26_listener() { return ctx.order(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Place Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.choosecake);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["td[_ngcontent-%COMP%] > .sizes[_ngcontent-%COMP%]{\r\n    width:50px;\r\n    height:50px;\r\n}\r\n.minus[_ngcontent-%COMP%], .plus[_ngcontent-%COMP%]{\r\n    width:10px;\r\n    height:4px;\r\n    border:1px solid #999;\r\n}\r\n.fa-plus-square[_ngcontent-%COMP%], .fa-minus-square[_ngcontent-%COMP%], .fa-trash-alt[_ngcontent-%COMP%]{\r\n    size:3px;\r\n    margin:10px,0px;\r\n}\r\n.fa-trash-alt[_ngcontent-%COMP%]{\r\n    color:red;\r\n}\r\n.fa-trash-alt[_ngcontent-%COMP%]:hover{\r\n    color:black;\r\n    size:6px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1Y2tldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFFBQVE7SUFDUixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLFdBQVc7SUFDWCxRQUFRO0FBQ1oiLCJmaWxlIjoiYnVja2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZD4uc2l6ZXN7XHJcbiAgICB3aWR0aDo1MHB4O1xyXG4gICAgaGVpZ2h0OjUwcHg7XHJcbn1cclxuLm1pbnVzLC5wbHVze1xyXG4gICAgd2lkdGg6MTBweDtcclxuICAgIGhlaWdodDo0cHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICM5OTk7XHJcbn1cclxuLmZhLXBsdXMtc3F1YXJlLC5mYS1taW51cy1zcXVhcmUsLmZhLXRyYXNoLWFsdHtcclxuICAgIHNpemU6M3B4O1xyXG4gICAgbWFyZ2luOjEwcHgsMHB4O1xyXG59XHJcbi5mYS10cmFzaC1hbHR7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn1cclxuLmZhLXRyYXNoLWFsdDpob3ZlcntcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgc2l6ZTo2cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function NavbarComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.carts(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.admin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " LogOut ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    // fileToUpload: File ;
    constructor(rout, client) {
        this.rout = rout;
        this.client = client;
        this.flag = true;
        this.adminflag = false;
    }
    ngOnInit() { }
    search() {
        this.searchValues = this.searchValue.trim();
        if (!this.searchValues)
            return;
        this.rout.navigate(['/search'], { queryParams: { q: this.searchValues } });
    }
    ngDoCheck() {
        if (localStorage.email === 'amardeep92aec@gmail.com') {
            this.adminflag = true;
        }
        this.email = localStorage.getItem("email");
        if (this.email) {
            this.flag = false;
        }
    }
    logout() {
        localStorage.removeItem("email");
        this.rout.navigate(['/login']);
        this.flag = true;
        this.adminflag = false;
    }
    admin() {
        this.rout.navigate(['/admin']);
    }
    carts() {
        this.rout.navigate(['/cart']);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 17, vars: 6, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], ["routerLink", "/", 1, "navbar-brand"], [1, "d-flex"], ["type", "search", "placeholder", "Search", "aria-label", "Search", "name", "search", 1, "form-control", "me-2", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-outline-success", 3, "click"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], ["class", "order", 4, "ngIf"], ["class", "cart", 3, "click", 4, "ngIf"], ["class", "admin", 3, "click", 4, "ngIf"], ["class", "btn btn-primary", "type", "submit", "routerLink", "/login", 4, "ngIf"], ["class", "btn btn-primary", "type", "submit", "routerLink", "/login", 3, "click", 4, "ngIf"], [1, "order"], [1, "cart", 3, "click"], [1, "fas", "fa-shopping-cart"], [1, "admin", 3, "click"], [1, "fas", "fa-user-shield"], ["type", "submit", "routerLink", "/login", 1, "btn", "btn-primary"], ["type", "submit", "routerLink", "/login", 1, "btn", "btn-primary", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cake Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavbarComponent_Template_input_ngModelChange_5_listener($event) { return ctx.searchValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_6_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavbarComponent_button_12_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NavbarComponent_button_13_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavbarComponent_button_14_Template, 3, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavbarComponent_button_15_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NavbarComponent_button_16_Template, 2, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.flag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.flag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.adminflag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.flag);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".container-fluid[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: 0.1fr 2fr 1fr;\r\n    gap:0 15vw;\r\n    background-color: lightblue;\r\n}\r\n.bg-light[_ngcontent-%COMP%]{\r\n    border-bottom: 2px solid lightblue;\r\n    background-color: lightblue !important;\r\n    height:50px;\r\n    z-index:2;\r\n   }\r\n.fa-shopping-cart[_ngcontent-%COMP%]{\r\n    height:20px;\r\n    width:20px;\r\n}\r\n.collapse[_ngcontent-%COMP%]{\r\n    gap: 0px;\r\n}\r\n.cart[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    right:20px;\r\n    background-color: lightblue;\r\n    border: none;\r\n}\r\n.cart[_ngcontent-%COMP%]:hover{\r\n    background-color: #1a73e8;\r\n    border:1px solid #1a73e8;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 3px;\r\n}\r\n.order[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    right:40px;\r\n    top:0;\r\n    background-color:transparent;\r\n    border:none;\r\n    width: 7vw;\r\n    height: 6vh;\r\n}\r\n.order[_ngcontent-%COMP%]:hover{\r\n    background-color: #1a73e8;\r\n    border:1px solid #1a73e8;\r\n    color:white;\r\n    width: 7vw;\r\n    height: 6vh;\r\n    border-radius: 3px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxVQUFVO0lBQ1YsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsc0NBQXNDO0lBQ3RDLFdBQVc7SUFDWCxTQUFTO0dBQ1Y7QUFDSDtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFFBQVE7QUFDWjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixLQUFLO0lBQ0wsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjFmciAyZnIgMWZyO1xyXG4gICAgZ2FwOjAgMTV2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxufVxyXG4uYmctbGlnaHR7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRibHVlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6NTBweDtcclxuICAgIHotaW5kZXg6MjtcclxuICAgfVxyXG4uZmEtc2hvcHBpbmctY2FydHtcclxuICAgIGhlaWdodDoyMHB4O1xyXG4gICAgd2lkdGg6MjBweDtcclxufVxyXG4uY29sbGFwc2V7XHJcbiAgICBnYXA6IDBweDtcclxufVxyXG4uY2FydHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHJpZ2h0OjIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmNhcnQ6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE3M2U4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjMWE3M2U4O1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLm9yZGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6NDBweDtcclxuICAgIHRvcDowO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgd2lkdGg6IDd2dztcclxuICAgIGhlaWdodDogNnZoO1xyXG59XHJcbi5vcmRlcjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTczZTg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICMxYTczZTg7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHdpZHRoOiA3dnc7XHJcbiAgICBoZWlnaHQ6IDZ2aDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "mNnz":
/*!****************************************************!*\
  !*** ./src/app/searchpage/searchpage.component.ts ***!
  \****************************************************/
/*! exports provided: SearchpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchpageComponent", function() { return SearchpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cake_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cake.service */ "1S1X");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _hovering_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hovering.directive */ "u7cC");







function SearchpageComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cards_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/cake/", cards_r1.cakeid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", cards_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cards_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cards_r1.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cards_r1.weight);
} }
class SearchpageComponent {
    constructor(cakes, route, client) {
        this.cakes = cakes;
        this.route = route;
        this.client = client;
        var url = 'https://apifromashu.herokuapp.com/api/searchcakes?q=';
        this.route.queryParams.subscribe((e) => {
            if (e.q) {
                console.log(url + e.q);
                this.client.get(url + e.q).subscribe((response) => {
                    console.log('response from signup api', response);
                    this.cakedata = response.data;
                    if (!this.cakedata.length) {
                        alert("there is no such cake");
                    }
                    console.log(this.cakedata);
                }, (error) => {
                    console.log('Error from signup api', error);
                });
                // this.cakes.cakecard.filter((ev: any) =>
                // ev.name.toLowerCase().includes(e.q.toLowerCase()));
            }
            else {
            }
        });
    }
    ngOnInit() { }
    filters() {
        if (this.min || this.max) {
            this.cakes.cakess = this.cakes.cakess.filter((fil) => (this.min ? fil.price >= this.min : true) &&
                (this.max ? fil.price <= this.max : true));
            console.log(this.cakes.cakess);
        }
    }
}
SearchpageComponent.ɵfac = function SearchpageComponent_Factory(t) { return new (t || SearchpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cake_service__WEBPACK_IMPORTED_MODULE_1__["CakeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SearchpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchpageComponent, selectors: [["app-searchpage"]], decls: 7, vars: 3, consts: [[1, "filter"], ["type", "text", "name", "minValue", 1, "box", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "maxValue", 1, "box", 3, "ngModel", "ngModelChange"], [1, "sort", 3, "click"], [1, "cart"], ["appHovering", "", "class", "card", "style", "width: 18rem", 3, "routerLink", 4, "ngFor", "ngForOf"], ["appHovering", "", 1, "card", 2, "width", "18rem", 3, "routerLink"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"]], template: function SearchpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchpageComponent_Template_input_ngModelChange_1_listener($event) { return ctx.min = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchpageComponent_Template_input_ngModelChange_2_listener($event) { return ctx.max = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchpageComponent_Template_button_click_3_listener() { return ctx.filters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SearchpageComponent_div_6_Template, 9, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cakedata);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _hovering_directive__WEBPACK_IMPORTED_MODULE_6__["HoveringDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".cart[_ngcontent-%COMP%]{\r\n    display:grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    position: relative;\r\n    left:40px;\r\n    top:20px;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    margin-bottom: 20px;\r\n    \r\n}\r\n.filter[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    left:40%;\r\n    top:20px;\r\n    margin:0 0 20px 0;\r\n    \r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaHBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0FBQ1o7QUFDQTtJQUNJLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsUUFBUTtJQUNSLGlCQUFpQjs7O0FBR3JCIiwiZmlsZSI6InNlYXJjaHBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0e1xyXG4gICAgZGlzcGxheTpncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OjQwcHg7XHJcbiAgICB0b3A6MjBweDtcclxufVxyXG4uY2FyZHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBcclxufVxyXG4uZmlsdGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDo0MCU7XHJcbiAgICB0b3A6MjBweDtcclxuICAgIG1hcmdpbjowIDAgMjBweCAwO1xyXG4gICAgXHJcblxyXG59Il19 */"] });


/***/ }),

/***/ "oB+8":
/*!********************************************!*\
  !*** ./src/app/slider/slider.component.ts ***!
  \********************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cake_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cake.service */ "1S1X");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function SliderComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slides_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", slides_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class SliderComponent {
    constructor(slide) {
        this.slide = slide;
        this.slider = this.slide.carousel;
    }
    ngOnInit() {
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cake_service__WEBPACK_IMPORTED_MODULE_1__["CakeService"])); };
SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["app-slider"]], decls: 20, vars: 2, consts: [["id", "carouselExampleCaptions", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide-to", "2", "aria-label", "Slide 3"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide-to", "3", "aria-label", "Slide 4"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide-to", "4", "aria-label", "Slide 5"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["alt", "...", 1, "d-block", "w-100", 3, "src"], [1, "carousel-caption", "d-none", "d-md-block"], ["class", "carousel-item", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "carousel-item"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SliderComponent_div_11_Template, 3, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.slider[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slider.slice(1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".carousel-inner[_ngcontent-%COMP%]{\r\n    max-height: 500px;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n    width:400px;\r\n    height:400px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzbGlkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1pbm5lcntcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOjQwMHB4O1xyXG4gICAgaGVpZ2h0OjQwMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cake_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cake.service */ "1S1X");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class SignupComponent {
    constructor(user, client, router) {
        this.user = user;
        this.client = client;
        this.router = router;
        this.users = {};
    }
    ngOnInit() { }
    signup() {
        if (this.user.ValidateEmail(this.users.email)) {
            //console.log('User entered', this.users);
            var apiurl = 'https://apifromashu.herokuapp.com/api/register';
            this.client.post(apiurl, this.users).subscribe((response) => {
                console.log('response from signup api', response);
                this.message = response.message;
                if (response.message === 'User Already Exists') {
                    this.router.navigate(['/login', this.users.email]);
                }
            }, (error) => {
                console.log('Error from signup api', error);
            });
        }
        else {
            alert('Please enter the valid Email id');
        }
        //console.log(this.user.userdetails);
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cake_service__WEBPACK_IMPORTED_MODULE_1__["CakeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 35, vars: 4, consts: [[1, "container"], [1, "row", "main"], [1, "main-login", "main-center"], ["method", "post", "action", "#", 1, ""], [1, "form-group"], ["for", "name", 1, "cols-sm-2", "control-label"], [1, "cols-sm-10"], [1, "input-group"], [1, "input-group-addon"], ["aria-hidden", "true", 1, "fa", "fa-user", "fa"], ["type", "text", "name", "name", "id", "name", "placeholder", "Enter your Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "email", 1, "cols-sm-2", "control-label"], ["aria-hidden", "true", 1, "fa", "fa-envelope", "fa"], ["type", "text", "name", "email", "id", "email", "placeholder", "Enter your Email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password", 1, "cols-sm-2", "control-label"], ["aria-hidden", "true", 1, "fa", "fa-lock", "fa-lg"], ["type", "password", "name", "password", "id", "password", "placeholder", "Enter your Password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["target", "_blank", "type", "button", "id", "button", 1, "btn", "btn-primary", "btn-lg", "btn-block", "login-button", 3, "click"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign up once and watch any of our free demos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Your Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_13_listener($event) { return ctx.users.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Your Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_21_listener($event) { return ctx.users.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_29_listener($event) { return ctx.users.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_a_click_33_listener() { return ctx.signup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.users.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.users.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.users.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["#playground-container[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n    overflow: hidden !important;\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{\r\n     height: 100%;\r\n \tbackground-repeat: no-repeat;\r\n \tbackground:url(https://i.ytimg.com/vi/4kfXjatgeEU/maxresdefault.jpg);\r\n \tfont-family: 'Oxygen', sans-serif;\r\n\t    background-size: cover;\r\n}\r\n.main[_ngcontent-%COMP%]{\r\n \tmargin:50px 15px;\r\n}\r\nh1.title[_ngcontent-%COMP%] { \r\n\tfont-size: 50px;\r\n\tfont-family: 'Passion One', cursive; \r\n\tfont-weight: 400; \r\n}\r\nhr[_ngcontent-%COMP%]{\r\n\twidth: 10%;\r\n\tcolor: #fff;\r\n}\r\n.form-group[_ngcontent-%COMP%]{\r\n\tmargin-bottom: 15px;\r\n}\r\nlabel[_ngcontent-%COMP%]{\r\n\tmargin-bottom: 15px;\r\n}\r\ninput[_ngcontent-%COMP%], input[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n    font-size: 11px;\r\n    padding-top: 3px;\r\n}\r\n.main-login[_ngcontent-%COMP%]{\r\n \tbackground-color: #fff;\r\n    \r\n    border-radius: 2px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\r\n}\r\n.form-control[_ngcontent-%COMP%] {\r\n    height: auto!important;\r\npadding: 8px 12px !important;\r\n}\r\n.input-group[_ngcontent-%COMP%] {\r\n    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.21)!important;\r\n}\r\n#button[_ngcontent-%COMP%] {\r\n    border: 1px solid #ccc;\r\n    margin-top: 28px;\r\n    padding: 6px 12px;\r\n    color: #666;\r\n    text-shadow: 0 1px #fff;\r\n    cursor: pointer;\r\n    border-radius: 3px 3px;\r\n    box-shadow: 0 1px #fff inset, 0 1px #ddd;\r\n    background: #f5f5f5;\r\n    background: linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f5f5f5', endColorstr='#eeeeee', GradientType=0);\r\n}\r\n.main-center[_ngcontent-%COMP%]{\r\n \tmargin-top: 30px;\r\n \tmargin: 0 auto;\r\n \tmax-width: 400px;\r\n    padding: 10px 40px;\r\n\tbackground:#009edf;\r\n\t    color: #FFF;\r\n    text-shadow: none;\r\nbox-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);\r\n\r\n}\r\nspan.input-group-addon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #009edf;\r\n    font-size: 17px;\r\n}\r\n.login-button[_ngcontent-%COMP%]{\r\n\tmargin-top: 5px;\r\n}\r\n.login-register[_ngcontent-%COMP%]{\r\n\tfont-size: 11px;\r\n\ttext-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixpQ0FBaUM7QUFDckM7QUFDQTtLQUNLLFlBQVk7RUFDZiw0QkFBNEI7RUFDNUIsb0VBQW9FO0VBQ3BFLGlDQUFpQztLQUM5QixzQkFBc0I7QUFDM0I7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0NBQ0MsZUFBZTtDQUNmLG1DQUFtQztDQUNuQyxnQkFBZ0I7QUFDakI7QUFFQTtDQUNDLFVBQVU7Q0FDVixXQUFXO0FBQ1o7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjtBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBRUE7O0lBRUksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUVBO0VBQ0Usc0JBQXNCO0lBQ3BCLGdDQUFnQztJQUdoQyxrQkFBa0I7SUFHbEIsMENBQTBDOztBQUU5QztBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCLDRCQUE0QjtBQUM1QjtBQUNBO0lBR0ksc0RBQXNEO0FBQzFEO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFHZixzQkFBc0I7SUFHdEIsd0NBQXdDO0lBQ3hDLG1CQUFtQjtJQU1uQiwwREFBMEQ7SUFDMUQsa0hBQWtIO0FBQ3RIO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtJQUNkLGtCQUFrQjtDQUNyQixrQkFBa0I7S0FDZCxXQUFXO0lBQ1osaUJBQWlCO0FBR3JCLDRDQUE0Qzs7QUFFNUM7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBRUE7Q0FDQyxlQUFlO0FBQ2hCO0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25CIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BsYXlncm91bmQtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbn1cclxuYm9keSwgaHRtbHtcclxuICAgICBoZWlnaHQ6IDEwMCU7XHJcbiBcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiBcdGJhY2tncm91bmQ6dXJsKGh0dHBzOi8vaS55dGltZy5jb20vdmkvNGtmWGphdGdlRVUvbWF4cmVzZGVmYXVsdC5qcGcpO1xyXG4gXHRmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XHJcblx0ICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5tYWlue1xyXG4gXHRtYXJnaW46NTBweCAxNXB4O1xyXG59XHJcblxyXG5oMS50aXRsZSB7IFxyXG5cdGZvbnQtc2l6ZTogNTBweDtcclxuXHRmb250LWZhbWlseTogJ1Bhc3Npb24gT25lJywgY3Vyc2l2ZTsgXHJcblx0Zm9udC13ZWlnaHQ6IDQwMDsgXHJcbn1cclxuXHJcbmhye1xyXG5cdHdpZHRoOiAxMCU7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3Vwe1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbmxhYmVse1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbmlucHV0LFxyXG5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG59XHJcblxyXG4ubWFpbi1sb2dpbntcclxuIFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC8qIHNoYWRvd3MgYW5kIHJvdW5kZWQgYm9yZGVycyAqL1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcblxyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgaGVpZ2h0OiBhdXRvIWltcG9ydGFudDtcclxucGFkZGluZzogOHB4IDEycHggIWltcG9ydGFudDtcclxufVxyXG4uaW5wdXQtZ3JvdXAge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjIxKSFpbXBvcnRhbnQ7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMjEpIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMjEpIWltcG9ydGFudDtcclxufVxyXG4jYnV0dG9uIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIHRleHQtc2hhZG93OiAwIDFweCAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHggM3B4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHggM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDNweDtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCAxcHggI2ZmZiBpbnNldCwgMCAxcHggI2RkZDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggI2ZmZiBpbnNldCwgMCAxcHggI2RkZDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4ICNmZmYgaW5zZXQsIDAgMXB4ICNkZGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZjVmNWY1IDAlLCAjZWVlZWVlIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgI2Y1ZjVmNSksIGNvbG9yLXN0b3AoMTAwJSwgI2VlZWVlZSkpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZjVmNWY1IDAlLCAjZWVlZWVlIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y1ZjVmNSAwJSwgI2VlZWVlZSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjZjVmNWY1IDAlLCAjZWVlZWVlIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y1ZjVmNSAwJSwgI2VlZWVlZSAxMDAlKTtcclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyNmNWY1ZjUnLCBlbmRDb2xvcnN0cj0nI2VlZWVlZScsIEdyYWRpZW50VHlwZT0wKTtcclxufVxyXG4ubWFpbi1jZW50ZXJ7XHJcbiBcdG1hcmdpbi10b3A6IDMwcHg7XHJcbiBcdG1hcmdpbjogMCBhdXRvO1xyXG4gXHRtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xyXG5cdGJhY2tncm91bmQ6IzAwOWVkZjtcclxuXHQgICAgY29sb3I6ICNGRkY7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IDBweCAzcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMzEpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCAzcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMzEpO1xyXG5ib3gtc2hhZG93OiAwcHggM3B4IDVweCAwcHggcmdiYSgwLDAsMCwwLjMxKTtcclxuXHJcbn1cclxuc3Bhbi5pbnB1dC1ncm91cC1hZGRvbiBpIHtcclxuICAgIGNvbG9yOiAjMDA5ZWRmO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4ubG9naW4tYnV0dG9ue1xyXG5cdG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmxvZ2luLXJlZ2lzdGVye1xyXG5cdGZvbnQtc2l6ZTogMTFweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "tq2C":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _searching_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../searching.directive */ "a8d9");



class SearchComponent {
    constructor() { }
    ngOnInit() {
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 5, vars: 2, consts: [[1, "searchout"], [1, "searchin"], ["appSearching", "", "type", "search", "id", "site-search", "name", "q", "aria-label", "Search through site content", 3, "ngModel", "searchKey", "ngModelChange"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_2_listener($event) { return ctx.data = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data)("searchKey", ctx.data);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _searching_directive__WEBPACK_IMPORTED_MODULE_2__["SearchingDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["input[_ngcontent-%COMP%]{\r\n    margin: .4rem 0;\r\n    width:30vw;\r\n}\r\n.searchout[_ngcontent-%COMP%]{\r\n    background-color: blanchedalmond;\r\n    width: 100%;\r\n    height: 15vh;\r\n    top: 10px;\r\n    position: relative\r\n}\r\n.searchin[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    left: 30vw;\r\n    top: 5vh\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n    margin:0 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztJQUNUO0FBQ0o7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Y7QUFDSjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0e1xyXG4gICAgbWFyZ2luOiAuNHJlbSAwO1xyXG4gICAgd2lkdGg6MzB2dztcclxufVxyXG4uc2VhcmNob3V0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTV2aDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG59XHJcbi5zZWFyY2hpbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDMwdnc7XHJcbiAgICB0b3A6IDV2aFxyXG59XHJcbmJ1dHRvbntcclxuICAgIG1hcmdpbjowIDVweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "u7cC":
/*!***************************************!*\
  !*** ./src/app/hovering.directive.ts ***!
  \***************************************/
/*! exports provided: HoveringDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoveringDirective", function() { return HoveringDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HoveringDirective {
    constructor(ref) {
        this.ref = ref;
    }
    hovering() {
        this.ref.nativeElement.style.boxShadow = '2px 5px 10px #000';
    }
    hoverend() {
        this.ref.nativeElement.style.boxShadow = 'none';
    }
}
HoveringDirective.ɵfac = function HoveringDirective_Factory(t) { return new (t || HoveringDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
HoveringDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HoveringDirective, selectors: [["", "appHovering", ""]], hostBindings: function HoveringDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function HoveringDirective_mouseover_HostBindingHandler() { return ctx.hovering(); })("mouseleave", function HoveringDirective_mouseleave_HostBindingHandler() { return ctx.hoverend(); });
    } } });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cakeform_cakeform_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cakeform/cakeform.component */ "W32u");
/* harmony import */ var _forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgetpassword/forgetpassword.component */ "6+dj");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _searchpage_searchpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchpage/searchpage.component */ "mNnz");
/* harmony import */ var _cake_details_cake_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cake-details/cake-details.component */ "+7EV");
/* harmony import */ var _bucket_bucket_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bucket/bucket.component */ "gKpc");
/* harmony import */ var _orderform_orderform_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./orderform/orderform.component */ "aCg6");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _editfrom_editfrom_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./editfrom/editfrom.component */ "MzBN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'addcake', component: _cakeform_cakeform_component__WEBPACK_IMPORTED_MODULE_1__["CakeformComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'forgot', component: _forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_2__["ForgetpasswordComponent"] },
    { path: 'search', component: _searchpage_searchpage_component__WEBPACK_IMPORTED_MODULE_6__["SearchpageComponent"] },
    { path: 'cake/:id', component: _cake_details_cake_details_component__WEBPACK_IMPORTED_MODULE_7__["CakeDetailsComponent"] },
    { path: 'cart', component: _bucket_bucket_component__WEBPACK_IMPORTED_MODULE_8__["BucketComponent"] },
    { path: 'order', component: _orderform_orderform_component__WEBPACK_IMPORTED_MODULE_9__["OrderformComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"] },
    { path: 'editform/:id', component: _editfrom_editfrom_component__WEBPACK_IMPORTED_MODULE_11__["EditfromComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cake_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cake.service */ "1S1X");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class LoginComponent {
    constructor(check, route, routes, client, toast) {
        this.check = check;
        this.route = route;
        this.routes = routes;
        this.client = client;
        this.toast = toast;
        this.users = {};
        this.userdetails = {};
        this.users.email = this.routes.snapshot.params['email'];
    }
    ngOnInit() { }
    login() {
        if (!this.users.email || !this.users.password)
            alert('Please fill all the field');
        var apiurl = 'https://apifromashu.herokuapp.com/api/login';
        this.client.post(apiurl, this.users).subscribe((response) => {
            console.log('response from signup api', response);
            this.message = response.message;
            if (this.message !== 'Invalid Credentials') {
                this.toast.success(this.message, 'login successful');
                this.message = '';
                localStorage.setItem('email', response.email);
                localStorage.setItem('password', this.users.password);
                localStorage.setItem('token', response.token);
                this.route.navigate(['/']);
            }
            else {
                return;
            }
        }, (error) => {
            console.log('Error from signup api', error);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cake_service__WEBPACK_IMPORTED_MODULE_1__["CakeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 17, vars: 3, consts: [[1, "wrapper", "fadeInDown"], ["id", "formContent"], [1, "fadeIn", "first"], ["type", "text", "id", "login", "name", "login", "placeholder", "login", 1, "fadeIn", "second", 3, "ngModel", "ngModelChange"], ["type", "password", "id", "password", "name", "password", "placeholder", "password", 1, "fadeIn", "third", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Log In", 1, "fadeIn", "fourth", 3, "click"], ["id", "formFooter"], ["name", "signup", "routerLink", "/signup", 1, "underlineHover"], ["routerLink", "/forgot", 1, "underlineHover"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_4_listener($event) { return ctx.users.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_5_listener($event) { return ctx.users.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_input_click_6_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "New User?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.users.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.users.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["html[_ngcontent-%COMP%] {\r\n    background-color: #56baed;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%] {\r\n    font-family: \"Poppins\", sans-serif;\r\n    height: 100vh;\r\n  }\r\n  \r\n  a[_ngcontent-%COMP%] {\r\n    color: #92badd;\r\n    display:inline-block;\r\n    text-decoration: none;\r\n    font-weight: 400;\r\n  }\r\n  \r\n  h2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    display:inline-block;\r\n    margin: 40px 8px 10px 8px; \r\n    color: #cccccc;\r\n  }\r\n  \r\n  \r\n  \r\n  .wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    width: 100%;\r\n    min-height: 100%;\r\n    padding: 20px;\r\n  }\r\n  \r\n  #formContent[_ngcontent-%COMP%] {\r\n    border-radius: 10px 10px 10px 10px;\r\n    background: #fff;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: 450px;\r\n    position: relative;\r\n    padding: 0px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n    text-align: center;\r\n  }\r\n  \r\n  #formFooter[_ngcontent-%COMP%] {\r\n    background-color: #f6f6f6;\r\n    border-top: 1px solid #dce8f1;\r\n    padding: 25px;\r\n    text-align: center;\r\n    border-radius: 0 0 10px 10px;\r\n  }\r\n  \r\n  \r\n  \r\n  h2.inactive[_ngcontent-%COMP%] {\r\n    color: #cccccc;\r\n  }\r\n  \r\n  h2.active[_ngcontent-%COMP%] {\r\n    color: #0d0d0d;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n  \r\n  \r\n  \r\n  input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]  {\r\n    background-color: #56baed;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 80px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n    border-radius: 5px 5px 5px 5px;\r\n    margin: 5px 20px 40px 20px;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n  \r\n  input[type=button][_ngcontent-%COMP%]:hover, input[type=submit][_ngcontent-%COMP%]:hover, input[type=reset][_ngcontent-%COMP%]:hover  {\r\n    background-color: #39ace7;\r\n  }\r\n  \r\n  input[type=button][_ngcontent-%COMP%]:active, input[type=submit][_ngcontent-%COMP%]:active, input[type=reset][_ngcontent-%COMP%]:active  {\r\n    transform: scale(0.95);\r\n  }\r\n  \r\n  input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]{\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    width: 85%;\r\n    border: 2px solid #f6f6f6;\r\n    transition: all 0.5s ease-in-out;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n  \r\n  input[type=text][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n  \r\n  input[type=text][_ngcontent-%COMP%]:placeholder {\r\n    color: #cccccc;\r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  .fadeInDown[_ngcontent-%COMP%] {\r\n    animation-name: fadeInDown;\r\n    animation-duration: 1s;\r\n    animation-fill-mode: both;\r\n  }\r\n  \r\n  @keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n  \r\n  \r\n  \r\n  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n  \r\n  .fadeIn[_ngcontent-%COMP%] {\r\n    opacity:0;\r\n    animation:fadeIn ease-in 1;\r\n    animation-fill-mode:forwards;\r\n    animation-duration:1s;\r\n  }\r\n  \r\n  .fadeIn.first[_ngcontent-%COMP%] {\r\n    animation-delay: 0.4s;\r\n  }\r\n  \r\n  .fadeIn.second[_ngcontent-%COMP%] {\r\n    animation-delay: 0.6s;\r\n  }\r\n  \r\n  .fadeIn.third[_ngcontent-%COMP%] {\r\n    animation-delay: 0.8s;\r\n  }\r\n  \r\n  .fadeIn.fourth[_ngcontent-%COMP%] {\r\n    animation-delay: 1s;\r\n  }\r\n  \r\n  \r\n  \r\n  .underlineHover[_ngcontent-%COMP%]:after {\r\n    display: block;\r\n    left: 0;\r\n    bottom: -10px;\r\n    width: 0;\r\n    height: 2px;\r\n    background-color: #56baed;\r\n    content: \"\";\r\n    transition: width 0.2s;\r\n  }\r\n  \r\n  .underlineHover[_ngcontent-%COMP%]:hover {\r\n    color: #0d0d0d;\r\n  }\r\n  \r\n  .underlineHover[_ngcontent-%COMP%]:hover:after{\r\n    width: 100%;\r\n  }\r\n  \r\n  \r\n  \r\n  *[_ngcontent-%COMP%]:focus {\r\n      outline: none;\r\n  }\r\n  \r\n  #icon[_ngcontent-%COMP%] {\r\n    width:60%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxrQ0FBa0M7SUFDbEMsYUFBYTtFQUNmOztFQUVBO0lBQ0UsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsY0FBYztFQUNoQjs7RUFJQSxjQUFjOztFQUVkO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOztFQUVBO0lBRUUsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUVaLHlDQUF5QztJQUN6QyxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixrQkFBa0I7SUFFbEIsNEJBQTRCO0VBQzlCOztFQUlBLFNBQVM7O0VBRVQ7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGdDQUFnQztFQUNsQzs7RUFJQSxtQkFBbUI7O0VBRW5CO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixlQUFlO0lBRWYsOENBQThDO0lBRTlDLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFLMUIsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBS0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0lBQ1gsVUFBVTtJQUNWLHlCQUF5QjtJQUt6QixnQ0FBZ0M7SUFFaEMsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBSUEsZUFBZTs7RUFFZix1Q0FBdUM7O0VBQ3ZDO0lBRUUsMEJBQTBCO0lBRTFCLHNCQUFzQjtJQUV0Qix5QkFBeUI7RUFDM0I7O0VBZUE7SUFDRTtNQUNFLFVBQVU7TUFFVixtQ0FBbUM7SUFDckM7SUFDQTtNQUNFLFVBQVU7TUFFVixlQUFlO0lBQ2pCO0VBQ0Y7O0VBRUEsa0NBQWtDOztFQUdsQyxvQkFBb0IsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFOztFQUUxRDtJQUNFLFNBQVM7SUFHVCwwQkFBMEI7SUFJMUIsNEJBQTRCO0lBSTVCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUdFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUdFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUdFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUdFLG1CQUFtQjtFQUNyQjs7RUFFQSxrQ0FBa0M7O0VBQ2xDO0lBQ0UsY0FBYztJQUNkLE9BQU87SUFDUCxhQUFhO0lBQ2IsUUFBUTtJQUNSLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBSUEsV0FBVzs7RUFFWDtNQUNJLGFBQWE7RUFDakI7O0VBRUE7SUFDRSxTQUFTO0VBQ1giLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICBcclxuICBhIHtcclxuICAgIGNvbG9yOiAjOTJiYWRkO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICBcclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiA0MHB4IDhweCAxMHB4IDhweDsgXHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogU1RSVUNUVVJFICovXHJcbiAgXHJcbiAgLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgI2Zvcm1Db250ZW50IHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAjZm9ybUZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2U4ZjE7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogVEFCUyAqL1xyXG4gIFxyXG4gIGgyLmluYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuICBcclxuICBoMi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogRk9STSBUWVBPR1JBUEhZKi9cclxuICBcclxuICBpbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0gIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgbWFyZ2luOiA1cHggMjBweCA0MHB4IDIwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciwgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLCBpbnB1dFt0eXBlPXJlc2V0XTpob3ZlciAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5YWNlNztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZSwgaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSwgaW5wdXRbdHlwZT1yZXNldF06YWN0aXZlICB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogIzBkMGQwZDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXRleHRdOnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvKiBBTklNQVRJT05TICovXHJcbiAgXHJcbiAgLyogU2ltcGxlIENTUzMgRmFkZS1pbi1kb3duIEFuaW1hdGlvbiAqL1xyXG4gIC5mYWRlSW5Eb3duIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG4gIEAtbW96LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG4gIFxyXG4gIC5mYWRlSW4ge1xyXG4gICAgb3BhY2l0eTowO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICAgIC1tb3otYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgICBhbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICBcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gIH1cclxuICBcclxuICAuZmFkZUluLmZpcnN0IHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWRlSW4uc2Vjb25kIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWRlSW4udGhpcmQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICB9XHJcbiAgXHJcbiAgLmZhZGVJbi5mb3VydGgge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICB9XHJcbiAgXHJcbiAgLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cclxuICAudW5kZXJsaW5lSG92ZXI6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAtMTBweDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMnM7XHJcbiAgfVxyXG4gIFxyXG4gIC51bmRlcmxpbmVIb3Zlcjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzBkMGQwZDtcclxuICB9XHJcbiAgXHJcbiAgLnVuZGVybGluZUhvdmVyOmhvdmVyOmFmdGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qIE9USEVSUyAqL1xyXG4gIFxyXG4gICo6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gIH0gXHJcbiAgXHJcbiAgI2ljb24ge1xyXG4gICAgd2lkdGg6NjAlO1xyXG4gIH1cclxuICAiXX0= */"] });


/***/ }),

/***/ "w3UV":
/*!************************************************!*\
  !*** ./src/app/cakecard/cakecard.component.ts ***!
  \************************************************/
/*! exports provided: CakecardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CakecardComponent", function() { return CakecardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cake_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cake.service */ "1S1X");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _hovering_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hovering.directive */ "u7cC");






function CakecardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CakecardComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.cakedetail(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cards_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", cards_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Name:\u00A0", cards_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price:\u00A0", cards_r1.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Weight:\u00A0", cards_r1.weight, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Id:\u00A0", cards_r1.cakeid, "");
} }
class CakecardComponent {
    constructor(cakes, rout, client) {
        this.cakes = cakes;
        this.rout = rout;
        this.client = client;
        this.cakecards = this.cakes.cakess;
        var apiurl = 'https://apifromashu.herokuapp.com/api/allcakes';
        this.client.get(apiurl).subscribe((response) => {
            console.log('response from allcakes', response);
            this.data = response.data;
            console.log(this.data);
        }, (error) => {
            console.log('Error from signup api', error);
        });
    }
    ngOnInit() { }
    cakedetail(i) {
        this.rout.navigate(['/cake', this.data[i].cakeid]);
        console.log(this.data[i].cakeid);
    }
}
CakecardComponent.ɵfac = function CakecardComponent_Factory(t) { return new (t || CakecardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cake_service__WEBPACK_IMPORTED_MODULE_1__["CakeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
CakecardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CakecardComponent, selectors: [["app-cakecard"]], decls: 2, vars: 1, consts: [[1, "cart"], ["appHovering", "", "class", "card", "style", "width: 18rem", 3, "click", 4, "ngFor", "ngForOf"], ["appHovering", "", 1, "card", 2, "width", "18rem", 3, "click"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"]], template: function CakecardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CakecardComponent_div_1_Template, 11, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _hovering_directive__WEBPACK_IMPORTED_MODULE_5__["HoveringDirective"]], styles: [".cart[_ngcontent-%COMP%]{\r\n    display:grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    position: relative;\r\n    left:40px;\r\n    top:20px;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    margin-bottom: 20px;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNha2VjYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtBQUNaO0FBQ0E7SUFDSSxtQkFBbUI7O0FBRXZCIiwiZmlsZSI6ImNha2VjYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydHtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDo0MHB4O1xyXG4gICAgdG9wOjIwcHg7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map