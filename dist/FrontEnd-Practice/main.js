(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\syeda\Angular\Internal Projects\FrontEnd-Practice\src\main.ts */"zUnb");


/***/ }),

/***/ "1XdZ":
/*!***************************************************************!*\
  !*** ./src/app/components/test4-page/test4-page.component.ts ***!
  \***************************************************************/
/*! exports provided: Test4PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test4PageComponent", function() { return Test4PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function Test4PageComponent_div_9_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Items_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](Items_r5.option);
} }
function Test4PageComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Test4PageComponent_div_9_div_5_Template, 4, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const surveyItems_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", surveyItems_r2.question, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.options);
} }
function Test4PageComponent_div_34_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const checkboxOption_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", checkboxOption_r9.value);
} }
function Test4PageComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Test4PageComponent_div_34_div_3_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.ratingOn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.ratingOptions);
} }
class Test4PageComponent {
    constructor() {
        this.surveyForm = [
            {
                id: 1,
                question: 'What was the reason for leaving?',
            },
            {
                id: 2,
                question: 'Did You Feel Your Achievment Were Recognized Throughout Your Employement',
            },
            {
                id: 3,
                question: 'What Suggestions Do You Have For The Company? How Could We Improve?',
            },
            {
                id: 4,
                question: 'Would You Recommend This Company To A Friend?',
            },
            {
                id: 5,
                question: 'Did You Share Any Of The Concerns We Discoussed Today With The Company Before Deciding To Leave?',
            },
        ];
        this.options = [
            {
                id: 1,
                option: 'Yes',
            },
            {
                id: 2,
                option: 'No'
            },
        ];
        this.moreOptions = [
            {
                id: 1,
                option: 'Higher pay'
            },
            {
                id: 2,
                option: 'Conflict with other Employees'
            },
            {
                id: 3,
                option: 'Better benifits'
            },
            {
                id: 4,
                option: 'Better benifits'
            },
            {
                id: 5,
                option: 'Career change'
            },
            {
                id: 6,
                option: 'No work from home'
            }
        ];
        this.notes = [
            "Is there anything that would have changed your mind about leaving?"
        ];
        this.ratingOptions = [
            { value: '1', checked: false },
            { value: '2', checked: false },
            { value: '3', checked: false },
            { value: '4', checked: false },
            { value: '5', checked: false },
        ];
        this.ratingBasedOn = [
            {
                id: 1,
                ratingOn: 'Advancement opportunity',
            },
            {
                id: 2,
                ratingOn: 'Benifits',
            },
            {
                id: 3,
                ratingOn: 'Pay',
            },
            {
                id: 4,
                ratingOn: 'Management',
            },
            {
                id: 5,
                ratingOn: 'Work Environment',
            },
            {
                id: 6,
                ratingOn: 'Work Schedule',
            },
        ];
    }
    ngOnInit() {
    }
}
Test4PageComponent.ɵfac = function Test4PageComponent_Factory(t) { return new (t || Test4PageComponent)(); };
Test4PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Test4PageComponent, selectors: [["app-test4-page"]], decls: 41, vars: 3, consts: [[2, "width", "95%", "margin-top", "0%", "margin-left", "3%", "min-height", "77vh"], [2, "display", "flex", "justify-content", "flex-start", "width", "95%"], [1, "cancel-btn"], [2, "color", "#5e5d5d", "font-size", "15px"], [1, "exit-surevey-header", 2, "margin-left", "40%"], [1, "ScrollStyle"], [4, "ngFor", "ngForOf"], [2, "border-top-right-radius", "15px", "border-top-left-radius", "15px", "border-bottom-left-radius", "0px", "border-bottom-left-radius", "0px", "background-color", "#f3f5fc", "width", "97%", "margin-top", "1%"], [1, "docs-header"], [1, "option-handoverform", 2, "width", "97%"], ["type", "", "id", "", "placeholder", "N/A", 1, "form-control", 2, "height", "13vh", "border-radius", "0%"], [1, "option-handoverform", 2, "height", "220px", "border", "1px solid #ced4da", "margin-left", "0%", "width", "97%"], [2, "width", "95%", "margin-left", "2%", "margin-bottom", "1%"], [1, "row"], [1, "checkbox-top-header", "col-2"], ["class", "row", "style", "display: flex; justify-content: center", 4, "ngFor", "ngForOf"], [1, "submit-btn", 2, "margin-left", "1%"], [2, "color", "#6b7a99", "margin-top", "8%", "font-size", "20px"], [1, "option-handoverform", 2, "height", "60px", "border", "1px solid #ced4da", "margin-left", "0%", "width", "97%"], ["class", "form-check form-check-inline", "style", "margin-left: 2%", 4, "ngFor", "ngForOf"], [1, "form-check", "form-check-inline", 2, "margin-left", "2%"], ["type", "checkbox", "id", "inlineCheckbox2", "value", "option", 1, "form-check-input"], ["for", "inlineCheckbox1", 1, "form-check-label"], [1, "row", 2, "display", "flex", "justify-content", "center"], [1, "checkbox-side-header", "col-2"], ["class", "checkbox-survey-review col-2", 4, "ngFor", "ngForOf"], [1, "checkbox-survey-review", "col-2"], ["type", "checkbox", "id", "inlineCheckbox1", 1, "form-check-input", 3, "value"]], template: function Test4PageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Employee Exit Survey ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, Test4PageComponent_div_9_Template, 6, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " How satisfied were you with Each of the Following ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Very Satisfied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Satisfied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Neural");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Dissatisfied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Very Dissatisfied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, Test4PageComponent_div_34_Template, 4, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " done_all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.surveyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.notes, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ratingBasedOn);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".cancel-btn[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #000000;\n  border: none;\n  height: 40px;\n  display: flex;\n  padding: 3px 10px;\n  justify-content: flex-start;\n  background: none;\n  border-radius: 4px;\n}\n\n.exit-surevey-header[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.survey-main-header[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #000000;\n}\n\n  .mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: none;\n}\n\n.docs-header[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #000000;\n}\n\n.option-handover[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  letter-spacing: 0.02em;\n  color: #000000;\n}\n\n.checkbox-side-header[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  letter-spacing: 0.02em;\n  justify-content: flex-start;\n  color: #000000;\n}\n\n.checkbox-top-header[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 24px;\n  \n  display: flex;\n  align-items: center;\n  letter-spacing: 0.02em;\n  justify-content: center;\n  color: #000000;\n}\n\n.checkbox-survey-review[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  letter-spacing: 0.02em;\n  justify-content: center;\n}\n\n.form-check-label[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  letter-spacing: 0.02em;\n  color: #000000;\n}\n\n.option-handoverform[_ngcontent-%COMP%] {\n  width: 98%;\n  display: flex;\n  justify-content: flex-start;\n  column-gap: 0%;\n  align-items: center;\n  margin-left: 0%;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n  margin-top: 3%;\n  border: 1px solid #6B7A99;\n  border-radius: 5px;\n  text-transform: capitalize;\n  color: #6B7A99;\n  height: 40px;\n  display: flex;\n  line-height: 33px;\n  padding: 3px 10px;\n  justify-content: center;\n  width: 85px;\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  letter-spacing: 0.01em;\n}\n\n.ScrollStyle[_ngcontent-%COMP%] {\n  height: 470px;\n  overflow: scroll;\n}\n\n  .input {\n  outline: none !important;\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0ZXN0NC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUlBO0VBQ0ksZ0JBQUE7QUFESjs7QUFJQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFNQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FBSEo7O0FBU0E7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFFQSxjQUFBO0FBUko7O0FBV0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBUko7O0FBWUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUVBLGNBQUE7QUFWSjs7QUFjQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBWEo7O0FBY0E7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQVhKOztBQWNBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBWEo7O0FBY0E7RUFDSSx3QkFBQTtFQUNBLDJCQUFBO0FBWEoiLCJmaWxlIjoidGVzdDQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW5jZWwtYnRuIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmV4aXQtc3VyZXZleS1oZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnN1cnZleS1tYWluLWhlYWRlciB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuXHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgLm1hdC1jYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5kb2NzLWhlYWRlciB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4ub3B0aW9uLWhhbmRvdmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG5cclxuXHJcbn1cclxuXHJcbi5jaGVja2JveC1zaWRlLWhlYWRlciB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuXHJcblxyXG5cclxufVxyXG5cclxuLmNoZWNrYm94LXRvcC1oZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDE3MSUgKi9cclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLmNoZWNrYm94LXN1cnZleS1yZXZpZXcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1jaGVjay1sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcblxyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcblxyXG59XHJcblxyXG4ub3B0aW9uLWhhbmRvdmVyZm9ybSB7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGNvbHVtbi1nYXA6IDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxufVxyXG5cclxuLnN1Ym1pdC1idG4ge1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCM2QjdBOTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGNvbG9yOiAjNkI3QTk5O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbn1cclxuXHJcbi5TY3JvbGxTdHlsZSB7XHJcbiAgICBoZWlnaHQ6IDQ3MHB4O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5pbnB1dCB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Test4PageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test4-page',
                templateUrl: './test4-page.component.html',
                styleUrls: ['./test4-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8Rtn":
/*!***************************************************************!*\
  !*** ./src/app/components/test6-page/test6-page.component.ts ***!
  \***************************************************************/
/*! exports provided: Test6PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test6PageComponent", function() { return Test6PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function Test6PageComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Emp ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Personal Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Submitted On");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Last Working Date (Estimated)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employeeDetails_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employeeDetails_r2.employeeID, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employeeDetails_r2.employeeName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employeeDetails_r2.employeeEmail, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employeeDetails_r2.employeeResignationAppliedDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employeeDetails_r2.employeeLastWorkingDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employeeDetails_r2.daysLeft, " ");
} }
function Test6PageComponent_div_11_div_3_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Items_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](Items_r5.option);
} }
function Test6PageComponent_div_11_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Test6PageComponent_div_11_div_3_label_3_Template, 2, 1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const returnItemDetails_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](returnItemDetails_r3.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", returnItemDetails_r3.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", returnItemDetails_r3.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", returnItemDetails_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", returnItemDetails_r3.isItrated);
} }
function Test6PageComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Test6PageComponent_div_11_div_3_Template, 4, 7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const returnItemDetails_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](returnItemDetails_r3.item);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.options);
} }
class Test6PageComponent {
    constructor() {
        this.employeeDetail = [
            {
                employeeID: 901212,
                employeeName: 'Subash Chandra Bose',
                employeeEmail: 'subashchandru.19@gmail.com',
                employeeResignationAppliedDate: '02-Jul-20',
                employeeLastWorkingDate: '02-Sept-20',
                daysLeft: '90 Days Left',
            },
        ];
        this.detailsOfItems = [
            {
                id: 1,
                item: 'ID Card',
                type: 'checkbox',
                value: 'option',
                class: 'form-check-input',
                isItrated: true,
            },
            {
                id: 2,
                item: 'Medical Card',
                type: 'checkbox',
                value: 'option',
                class: 'form-check-input',
                isItrated: true,
            },
            {
                id: 3,
                item: 'NSR Number',
                placeholder: "Enter NSR Number",
                value: '',
                class: 'form-control',
                isItrated: false,
            }
        ];
        this.options = [
            {
                id: 1,
                option: 'Yes',
            },
            {
                id: 2,
                option: 'No'
            },
        ];
    }
    ngOnInit() {
    }
}
Test6PageComponent.ɵfac = function Test6PageComponent_Factory(t) { return new (t || Test6PageComponent)(); };
Test6PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Test6PageComponent, selectors: [["app-test6-page"]], decls: 15, vars: 2, consts: [[1, "main"], [1, "body"], [1, "headerObjects"], [1, "header"], [1, "retire-button"], [1, "retire-btn"], ["class", "employeeDetails", 4, "ngFor", "ngForOf"], [1, "returnBack"], ["class", "returnBackItems", 4, "ngFor", "ngForOf"], [1, "submit-btn"], [1, "employeeDetails"], [1, "employeeinfo"], [1, "employeeHeader"], [1, "employeeDesc"], [2, "display", "flex", "align-items", "center", "justify-content", "center", "gap", "8px"], [1, "days-left"], [1, "returnBackItems"], [1, "returnBackItemsHeader"], ["class", "form-check form-check-inline", "style", "margin-left: 2%", 4, "ngFor", "ngForOf"], [1, "form-check", "form-check-inline", 2, "margin-left", "2%"], [3, "type", "placeholder", "value"], ["class", "form-check-label", "for", "inlineCheckbox1", 4, "ngIf"], ["for", "inlineCheckbox1", 1, "form-check-label"]], template: function Test6PageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Resignation Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Make As Retire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Test6PageComponent_div_8_Template, 29, 6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, Test6PageComponent_div_11_Template, 4, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.employeeDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.detailsOfItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".main[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  background-color: #f3f3f3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Roboto\";\n  font-style: normal;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  height: 76vh;\n  width: 80%;\n  background-color: #ffff;\n}\n.main[_ngcontent-%COMP%]   .headerObjects[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 1.5rem;\n  padding-left: 2.5rem;\n}\n.main[_ngcontent-%COMP%]   .headerObjects[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #000000;\n  display: grid;\n  place-items: center;\n}\n.main[_ngcontent-%COMP%]   .headerObjects[_ngcontent-%COMP%]   .retire-btn[_ngcontent-%COMP%] {\n  border: 1px solid #45546E;\n  border-radius: 5px;\n  text-transform: capitalize;\n  background: #fff;\n  width: 120px;\n  height: 35px;\n  display: flex;\n  padding: 2px 10px;\n  justify-content: center;\n  letter-spacing: -0.02em;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  color: #45546E;\n}\n.main[_ngcontent-%COMP%]   .employeeDetails[_ngcontent-%COMP%] {\n  padding: 0.2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10%;\n}\n.main[_ngcontent-%COMP%]   .employeeDetails[_ngcontent-%COMP%]   .employeeDetialsHeader[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #000000;\n  opacity: 0.5;\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.main[_ngcontent-%COMP%]   .employeeDetails[_ngcontent-%COMP%]   .employeeDetailsDesc[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #000000;\n  flex: none;\n  order: 1;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 1%;\n}\n.main[_ngcontent-%COMP%]   .employeeDetails[_ngcontent-%COMP%]   .employeeinfo[_ngcontent-%COMP%] {\n  display: block;\n  align-items: center;\n  justify-content: center;\n}\n.main[_ngcontent-%COMP%]   .employeeDetails[_ngcontent-%COMP%]   .employeeinfo[_ngcontent-%COMP%]   .employeeHeader[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #000000;\n  opacity: 0.5;\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n}\n.main[_ngcontent-%COMP%]   .employeeDetails[_ngcontent-%COMP%]   .employeeinfo[_ngcontent-%COMP%]   .employeeDesc[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #000000;\n  flex: none;\n  order: 1;\n  flex-grow: 0;\n  margin-top: 8px;\n}\n.main[_ngcontent-%COMP%]   .employeeDetails[_ngcontent-%COMP%]   .employeeinfo[_ngcontent-%COMP%]   .days-left[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #CF0001;\n  opacity: 0.7;\n  width: 87px;\n  height: 25px;\n  margin-left: 0%;\n  display: flex;\n  justify-content: center;\n  line-height: 23px;\n  border: 1px solid #cf0001;\n  border-radius: 17px;\n  margin-top: 8px;\n}\n.main[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  opacity: 0.1;\n  border: 0.5px solid #000000;\n}\n.main[_ngcontent-%COMP%]   .returnBack[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.main[_ngcontent-%COMP%]   .returnBackItems[_ngcontent-%COMP%] {\n  padding: 2rem;\n  margin-left: 5%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 1rem;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: -0.02em;\n  text-transform: capitalize;\n  color: #45546E;\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  column-gap: 15%;\n}\n.main[_ngcontent-%COMP%]   .returnBackItems[_ngcontent-%COMP%]   .returnBackItemsHeader[_ngcontent-%COMP%] {\n  width: 8%;\n}\n.main[_ngcontent-%COMP%]   .returnBackItems[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"roboto\";\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #5F6C81;\n}\n.main[_ngcontent-%COMP%]   .NSR-number[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 1rem;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: -0.02em;\n  text-transform: capitalize;\n  color: #45546E;\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  column-gap: 7%;\n}\n.main[_ngcontent-%COMP%]   .NSR-number[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"roboto\";\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #5F6C81;\n}\n.main[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  margin-left: 3rem;\n  border: 1px solid #fff;\n  border-radius: 5px;\n  text-transform: capitalize;\n  color: #FFFFFF;\n  background: linear-gradient(270deg, #ef4a61, #f27a6c 105.29%) !important;\n  width: 100px;\n  height: 40px;\n  display: flex;\n  line-height: 33px;\n  padding: 2px 15px;\n  justify-content: center;\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  letter-spacing: 0.01em;\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0ZXN0Ni1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQ0k7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBQ1I7QUFFSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUFSO0FBRVE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQVo7QUFHUTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBRFo7QUFNSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFKUjtBQU1RO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUpaO0FBUVE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7QUFOWjtBQVNRO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFQWjtBQVNZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFQaEI7QUFVWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBUmhCO0FBV1k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFUaEI7QUFjSTtFQUNJLFlBQUE7RUFDQSwyQkFBQTtBQVpSO0FBaUJJO0VBQ0ksYUFBQTtBQWZSO0FBaUJJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWZSO0FBaUJRO0VBQ0ksU0FBQTtBQWZaO0FBa0JRO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQWhCWjtBQXNCSTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBcEJSO0FBc0JRO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQXBCWjtBQXlCSTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLHdFQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBdkJSIiwiZmlsZSI6InRlc3Q2LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHJcbiAgICAuYm9keSB7XHJcbiAgICAgICAgaGVpZ2h0OiA3NnZoO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlck9iamVjdHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcclxuXHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yZXRpcmUtYnRuIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzQ1NTQ2RTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDU1NDZFO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLmVtcGxveWVlRGV0YWlscyB7XHJcbiAgICAgICAgcGFkZGluZzogMC4ycmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDEwJTtcclxuXHJcbiAgICAgICAgLmVtcGxveWVlRGV0aWFsc0hlYWRlciB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICBmbGV4OiBub25lO1xyXG4gICAgICAgICAgICBvcmRlcjogMDtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmVtcGxveWVlRGV0YWlsc0Rlc2Mge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdhcDogMSU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZW1wbG95ZWVpbmZvIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgLmVtcGxveWVlSGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICAgICAgZmxleDogbm9uZTtcclxuICAgICAgICAgICAgICAgIG9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZW1wbG95ZWVEZXNjIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgZmxleDogbm9uZTtcclxuICAgICAgICAgICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGF5cy1sZWZ0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjQ0YwMDAxO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDg3cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZjAwMDE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhyIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjE7XHJcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLnJldHVybkJhY2t7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgIH1cclxuICAgIC5yZXR1cm5CYWNrSXRlbXMge1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBjb2xvcjogIzQ1NTQ2RTtcclxuICAgICAgICBmbGV4OiBub25lO1xyXG4gICAgICAgIG9yZGVyOiAwO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMDtcclxuICAgICAgICBjb2x1bW4tZ2FwOiAxNSU7XHJcblxyXG4gICAgICAgIC5yZXR1cm5CYWNrSXRlbXNIZWFkZXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOjglO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3JvYm90byc7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICBjb2xvcjogIzVGNkM4MTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuTlNSLW51bWJlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGNvbG9yOiAjNDU1NDZFO1xyXG4gICAgICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgICAgb3JkZXI6IDA7XHJcbiAgICAgICAgZmxleC1ncm93OiAwO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDclO1xyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvJztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNUY2QzgxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnN1Ym1pdC1idG57XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDNyZW07XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2VmNGE2MSwgI2YyN2E2YyAxMDUuMjklKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgICAgICBwYWRkaW5nOiAycHggMTVweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgICAgICAgZmxleDogbm9uZTtcclxuICAgICAgICBvcmRlcjogMDtcclxuICAgICAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICBcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Test6PageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test6-page',
                templateUrl: './test6-page.component.html',
                styleUrls: ['./test6-page.component.scss']
            }]
    }], function () { return []; }, null); })();


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

/***/ "DH/R":
/*!***************************************************************!*\
  !*** ./src/app/components/test5-page/test5-page.component.ts ***!
  \***************************************************************/
/*! exports provided: Test5PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test5PageComponent", function() { return Test5PageComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "GS7A");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");













function Test5PageComponent_div_3_div_18_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Test5PageComponent_div_3_div_18_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const task_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; return task_r4.isEditing = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", task_r4.taskHeader, " ");
} }
function Test5PageComponent_div_3_div_18_input_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Test5PageComponent_div_3_div_18_input_6_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const task_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; return task_r4.taskHeader = $event; })("blur", function Test5PageComponent_div_3_div_18_input_6_Template_input_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const task_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r15.onEditBlur(task_r4); })("keydown.enter", function Test5PageComponent_div_3_div_18_input_6_Template_input_keydown_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const task_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r17.onEditBlur(task_r4); })("focus", function Test5PageComponent_div_3_div_18_input_6_Template_input_focus_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r19.onInputFocus(); })("blur", function Test5PageComponent_div_3_div_18_input_6_Template_input_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r20.onInputBlur(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", task_r4.taskHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", "input-task-" + task_r4.id);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function Test5PageComponent_div_3_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDragStarted", function Test5PageComponent_div_3_div_18_Template_div_cdkDragStarted_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const task_r4 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r22.onDragStarted(task_r4); })("cdkDragEnded", function Test5PageComponent_div_3_div_18_Template_div_cdkDragEnded_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const task_r4 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r24.onDragEnded(task_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, Test5PageComponent_div_3_div_18_div_5_Template, 2, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, Test5PageComponent_div_3_div_18_input_6_Template, 1, 2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-menu", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("menuOpened", function Test5PageComponent_div_3_div_18_Template_mat_menu_menuOpened_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r25.onMenuOpened($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Open ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Test5PageComponent_div_3_div_18_Template_button_click_17_listener() { const task_r4 = ctx.$implicit; return task_r4.isEditing = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Edit Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Test5PageComponent_div_3_div_18_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const task_r4 = ctx.$implicit; const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r27.addNewTask(item_r2, task_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Add Bug ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Test5PageComponent_div_3_div_18_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const task_r4 = ctx.$implicit; const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r29.removeTask(item_r2, task_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r4 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkDragData", task_r4)("cdkDragDisabled", ctx_r3.isInputFocused || task_r4.isDragging);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeInOut", task_r4.isNew);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !task_r4.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r4.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, task_r4.statusColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](task_r4.submittedDate);
} }
const _c1 = function (a0) { return { "border-bottom": a0 }; };
function Test5PageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "svg", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "g", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "clipPath", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "rect", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Test5PageComponent_div_3_Template_mat_icon_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const item_r2 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r31.addNewTask(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function Test5PageComponent_div_3_Template_div_cdkDropListDropped_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const item_r2 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r33.drop($event, item_r2.columnHeader); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, Test5PageComponent_div_3_div_18_Template, 38, 10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, "2px solid " + item_r2.barColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.columnHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.task.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkDropListData", item_r2.task);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r2.task);
} }
function Test5PageComponent_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r34.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r34.viewValue, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", option_r34.statusStateColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r34.statusStateIteration, " ");
} }
class Test5PageComponent {
    constructor() {
        this.selectedIteration = [
            {
                value: 'past-1',
                viewValue: 'Iteration 1',
                statusStateColor: { 'background-color': '#A8ACB2' },
                statusStateIteration: 'Past',
            },
            {
                value: 'past-2',
                viewValue: 'Iteration 2',
                statusStateColor: { 'background-color': '#A8ACB2' },
                statusStateIteration: 'Past',
            },
            {
                value: 'present',
                viewValue: 'Iteration 3',
                statusStateColor: { 'background-color': '#1890FF' },
                statusStateIteration: 'Present',
            },
            {
                value: 'future',
                viewValue: 'Iteration 4',
                statusStateColor: { 'background-color': '#FFBD3D' },
                statusStateIteration: 'Future',
            },
        ];
        this.taskIdCounter = 1000;
        this.isInputFocused = false;
        this.selectedItem = 'present';
        this.myColumns = [
            {
                id: 1,
                columnHeader: "To Do",
                count: 10,
                barColor: '#FFBD3D',
                task: [
                    {
                        id: 1,
                        taskHeader: 'Design Dashboard',
                        submittedDate: 'Present',
                        statusColor: '#FA8C16',
                        isEditing: false,
                    },
                    {
                        id: 2,
                        taskHeader: 'Web app development',
                        submittedDate: '15 July 2023',
                        statusColor: '#526179',
                        isEditing: false,
                    },
                    {
                        id: 3,
                        taskHeader: 'SEO',
                        submittedDate: '15 July 2023',
                        statusColor: '#FA8C16',
                        isEditing: false,
                    },
                    {
                        id: 4,
                        taskHeader: 'Mobile application',
                        submittedDate: '15 July 2023',
                        statusColor: '#526179',
                        isEditing: false,
                    },
                ]
            },
            {
                id: 2,
                columnHeader: "In Progress",
                count: 10,
                barColor: '#1890FF',
                task: [
                    {
                        id: 1,
                        taskHeader: 'Design Dashboard',
                        submittedDate: '15 July 2023',
                        statusColor: '#FA8C16',
                    },
                    {
                        id: 2,
                        taskHeader: 'Web app development',
                        submittedDate: '15 July 2023',
                        statusColor: '#526179',
                    },
                    {
                        id: 3,
                        taskHeader: 'SEO',
                        submittedDate: '15 July 2023',
                        statusColor: '#526179',
                    },
                    {
                        id: 4,
                        taskHeader: 'Mobile application',
                        submittedDate: '15 July 2023',
                        statusColor: '#FA8C16',
                    },
                ]
            },
            {
                id: 3,
                columnHeader: "Completed",
                count: 10,
                barColor: '#52C41A',
                task: [
                    {
                        id: 1,
                        taskHeader: 'Design Dashboard',
                        submittedDate: '15 July 2023',
                        statusColor: '#FF3A46',
                    },
                    {
                        id: 2,
                        taskHeader: 'Web app development',
                        submittedDate: '15 July 2023',
                        statusColor: '#526179',
                    },
                    {
                        id: 3,
                        taskHeader: 'SEO',
                        submittedDate: '15 July 2023',
                        statusColor: '#FF3A46',
                    },
                    {
                        id: 4,
                        taskHeader: 'Mobile application',
                        submittedDate: '15 July 2023',
                        statusColor: '#526179',
                    },
                ]
            },
        ];
        this.pastOneData = [
            {
                id: 1,
                columnHeader: "To Do",
                count: 10,
                barColor: '#FFBD3D',
                task: [
                    {
                        id: 1,
                        taskHeader: 'Design Dashboard',
                        submittedDate: 'Past',
                        statusColor: '#FA8C16',
                        isEditing: false,
                    },
                    {
                        id: 2,
                        taskHeader: 'Web app development',
                        submittedDate: '15 July 2023',
                        statusColor: '#526179',
                        isEditing: false,
                    },
                ]
            },
            {
                id: 2,
                columnHeader: "In Progress",
                count: 10,
                barColor: '#1890FF',
                task: [
                    {
                        id: 1,
                        taskHeader: 'Design Dashboard',
                        submittedDate: '15 July 2023',
                        statusColor: '#FA8C16',
                    },
                    {
                        id: 2,
                        taskHeader: 'Web app development',
                        submittedDate: '15 July 2023',
                        statusColor: '#526179',
                    },
                    {
                        id: 3,
                        taskHeader: 'SEO',
                        submittedDate: '15 July 2023',
                        statusColor: '#526179',
                    },
                ]
            },
            {
                id: 3,
                columnHeader: "Completed",
                count: 10,
                barColor: '#52C41A',
                task: [
                    {
                        id: 1,
                        taskHeader: 'Design Dashboard',
                        submittedDate: '15 July 2023',
                        statusColor: '#FF3A46',
                    },
                    {
                        id: 2,
                        taskHeader: 'Web app development',
                        submittedDate: '15 July 2023',
                        statusColor: '#526179',
                    },
                    {
                        id: 3,
                        taskHeader: 'SEO',
                        submittedDate: '15 July 2023',
                        statusColor: '#FF3A46',
                    },
                    {
                        id: 4,
                        taskHeader: 'Mobile application',
                        submittedDate: '15 July 2023',
                        statusColor: '#526179',
                    },
                    {
                        id: 5,
                        taskHeader: 'cloud application',
                        submittedDate: '15 July 2023',
                        statusColor: '#526179',
                    },
                    {
                        id: 6,
                        taskHeader: 'Azure application',
                        submittedDate: '15 July 2023',
                        statusColor: '#526179',
                    },
                ]
            },
        ];
        this.pastTwoData = [
            {
                id: 1,
                columnHeader: "To Do",
                count: 10,
                barColor: '#FFBD3D',
                task: [
                    {
                        id: 1,
                        taskHeader: 'Design Dashboard',
                        submittedDate: 'Past 2',
                        statusColor: '#FA8C16',
                        isEditing: false,
                    },
                    {
                        id: 2,
                        taskHeader: 'Web app development',
                        submittedDate: '15 July 2023',
                        statusColor: '#526179',
                        isEditing: false,
                    },
                    // {
                    //   id: 3,
                    //   taskHeader: 'SEO',
                    //   submittedDate: '15 July 2023',
                    //   statusColor: '#FA8C16',
                    //   isEditing: false,
                    // },
                    {
                        id: 4,
                        taskHeader: 'Mobile application',
                        submittedDate: '15 July 2023',
                        statusColor: '#526179',
                        isEditing: false,
                    },
                ]
            },
            {
                id: 2,
                columnHeader: "In Progress",
                count: 10,
                barColor: '#1890FF',
                task: [
                    {
                        id: 1,
                        taskHeader: 'Design Dashboard',
                        submittedDate: '15 July 2023',
                        statusColor: '#FA8C16',
                    },
                    // {
                    //   id: 2,
                    //   taskHeader: 'Web app development',
                    //   submittedDate: '15 July 2023',
                    //   statusColor: '#526179',
                    // },
                    {
                        id: 3,
                        taskHeader: 'SEO',
                        submittedDate: '15 July 2023',
                        statusColor: '#526179',
                    },
                    {
                        id: 4,
                        taskHeader: 'Mobile application',
                        submittedDate: '15 July 2023',
                        statusColor: '#FA8C16',
                    },
                ]
            },
            {
                id: 3,
                columnHeader: "Completed",
                count: 10,
                barColor: '#52C41A',
                task: [
                    {
                        id: 1,
                        taskHeader: 'Design Dashboard',
                        submittedDate: '15 July 2023',
                        statusColor: '#FF3A46',
                    },
                    {
                        id: 2,
                        taskHeader: 'Web app development',
                        submittedDate: '15 July 2023',
                        statusColor: '#526179',
                    },
                    {
                        id: 3,
                        taskHeader: 'SEO',
                        submittedDate: '15 July 2023',
                        statusColor: '#FF3A46',
                    },
                ]
            },
        ];
        this.futureData = [
            {
                id: 1,
                columnHeader: "To Do",
                count: 10,
                barColor: '#FFBD3D',
                task: [
                    {
                        id: 1,
                        taskHeader: 'Design Dashboard',
                        submittedDate: 'Future',
                        statusColor: '#FA8C16',
                        isEditing: false,
                    },
                    // {
                    //   id: 2,
                    //   taskHeader: 'Web app development',
                    //   submittedDate: '15 July 2023',
                    //   statusColor: '#526179',
                    //   isEditing: false,
                    // },
                    {
                        id: 3,
                        taskHeader: 'SEO',
                        submittedDate: '15 July 2023',
                        statusColor: '#FA8C16',
                        isEditing: false,
                    },
                    {
                        id: 4,
                        taskHeader: 'Mobile application',
                        submittedDate: '15 July 2023',
                        statusColor: '#526179',
                        isEditing: false,
                    },
                ]
            },
            {
                id: 2,
                columnHeader: "In Progress",
                count: 10,
                barColor: '#1890FF',
                task: [
                    // {
                    //   id: 1,
                    //   taskHeader: 'Design Dashboard',
                    //   submittedDate: '15 July 2023',
                    //   statusColor: '#FA8C16',
                    // },
                    // {
                    //   id: 2,
                    //   taskHeader: 'Web app development',
                    //   submittedDate: '15 July 2023',
                    //   statusColor: '#526179',
                    // },
                    {
                        id: 3,
                        taskHeader: 'SEO',
                        submittedDate: '15 July 2023',
                        statusColor: '#526179',
                    },
                    {
                        id: 4,
                        taskHeader: 'Mobile application',
                        submittedDate: '15 July 2023',
                        statusColor: '#FA8C16',
                    },
                ]
            },
            {
                id: 3,
                columnHeader: "Completed",
                count: 10,
                barColor: '#52C41A',
                task: [
                    {
                        id: 1,
                        taskHeader: 'Design Dashboard',
                        submittedDate: '15 July 2023',
                        statusColor: '#FF3A46',
                    },
                    {
                        id: 2,
                        taskHeader: 'Web app development',
                        submittedDate: '15 July 2023',
                        statusColor: '#526179',
                    },
                    {
                        id: 3,
                        taskHeader: 'SEO',
                        submittedDate: '15 July 2023',
                        statusColor: '#FF3A46',
                    },
                    {
                        id: 4,
                        taskHeader: 'Mobile application',
                        submittedDate: '15 July 2023',
                        statusColor: '#526179',
                    },
                    // {
                    //   id: 5,
                    //   taskHeader: 'cloud application',
                    //   submittedDate: '15 July 2023',
                    //   statusColor: '#526179',
                    // },
                    {
                        id: 6,
                        taskHeader: 'Azure application',
                        submittedDate: '15 July 2023',
                        statusColor: '#526179',
                    },
                ]
            },
        ];
        this.columnIds = this.myColumns.map((column) => column.id);
    }
    ngOnInit() {
        this.myColumns.forEach((column) => {
            column.task.forEach((task) => {
                task.isEditing = false;
            });
        });
    }
    // addNewTask(item: any) {
    //   const newTask = {
    //     id: ++this.taskIdCounter,
    //     taskHeader: 'New Task',
    //     submittedDate: 'Unknown',
    //     statusColor: '#000000',
    //     isEditing: true
    //   };
    //   item.task.unshift(newTask);
    //   setTimeout(() => {
    //     const inputElement = document.getElementById(`input-task-${newTask.id}`);
    //     if (inputElement) {
    //       inputElement.focus();
    //     }
    //   }, 0);
    // }
    get currentSelected() {
        switch (this.selectedItem) {
            case 'past-1':
                return this.pastOneData;
            case 'past-2':
                return this.pastTwoData;
            case 'future':
                return this.futureData;
            default:
                return this.myColumns;
        }
    }
    onSelectionChange() {
    }
    findColumnByHeader(header) {
        return this.myColumns.find((column) => column.columnHeader === header);
    }
    formatDateToDDMMM(date) {
        const options = { day: 'numeric', month: 'short' };
        return date.toLocaleDateString('en-US', options);
    }
    addNewTask(item, columnHeader) {
        const newTask = {
            id: ++this.taskIdCounter,
            taskHeader: 'New Task',
            // submittedDate: new Date().toISOString(),
            submittedDate: this.formatDateToDDMMM(new Date()),
            statusColor: '#13b80a',
            isEditing: true,
            isNew: true,
        };
        item.task.unshift(newTask);
        console.log('Updated myColumns:', this.myColumns);
        const column = this.findColumnByHeader(columnHeader);
        if (column) {
            column.task.unshift(newTask);
        }
        setTimeout(() => {
            const inputElement = document.getElementById(`input-task-${newTask.id}`);
            if (inputElement) {
                inputElement.focus();
            }
        }, 0);
    }
    // addNewTask(item: any, columnHeader: string) {
    //   const today = new Date();
    //   const newTask = {
    //     id: ++this.taskIdCounter,
    //     taskHeader: 'New Task',
    //     submittedDate: today,
    //     statusColor: '#13b80a',
    //     isEditing: true,
    //     isNew: true,
    //   };
    //   const formatDate = (date: Date) => {
    //     const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short' };
    //     return date.toLocaleDateString('en-US', options);
    //   };
    //   if (item.submittedDate && item.submittedDate.toDateString() === today.toDateString()) {
    //     newTask.submittedDate = 'Today';
    //   } else {
    //     newTask.submittedDate = formatDate(today);
    //   }
    //   item.task.unshift(newTask);
    //   const column = this.findColumnByHeader(columnHeader);
    //   if (column) {
    //     column.task.unshift(newTask);
    //   }
    //   console.log('Updated myColumns:', this.myColumns);
    // }
    // addNewTask(item: any, columnHeader: string) {
    //   const today = new Date(); // Get the current date object
    //   const newTask = {
    //     id: ++this.taskIdCounter,
    //     taskHeader: 'New Task',
    //     submittedDate: '', // Initialize the submittedDate property as an empty string
    //     statusColor: '#FFFFFF',
    //     isEditing: true,
    //     isNew: true,
    //   };
    //   // If the date is today, display "Today", otherwise format it as "DD MMM"
    //   const formattedDate =
    //     today.toDateString() === newTask.submittedDate.toDateString()
    //       ? 'Today'
    //       : formatDate(today);
    //   newTask.submittedDate = formattedDate; // Assign the formatted date to the submittedDate property
    //   // Find the index to add the new task based on the columnHeader
    //   const columnIndex = this.myColumns.findIndex((column) => column.columnHeader === columnHeader);
    //   if (columnIndex > -1) {
    //     this.myColumns[columnIndex].task.unshift(newTask); // Add the new task to the beginning of the task array
    //   }
    // }
    // ...
    // addNewTask(item: any, columnHeader: string) {
    //   const today = new Date(); // Get the current date object
    //   const newTask = {
    //     id: ++this.taskIdCounter,
    //     taskHeader: 'New Task',
    //     submittedDate: '',
    //     statusColor: '#FFFFFF',
    //     isEditing: true,
    //     isNew: true,
    //   };
    //   // If the date is today, display "Today", otherwise format it as "DD MMM"
    //   const formattedDate = today.toDateString() === new Date(item.submittedDate).toDateString()
    //     ? 'Today'
    //     : formatDate(new Date(item.submittedDate), 'dd MMM', 'en-US'); // You can change 'en-US' to the desired locale
    //   newTask.submittedDate = formattedDate; // Assign the formatted date to the submittedDate property
    //   // Find the index to add the new task based on the columnHeader
    //   const columnIndex = this.myColumns.findIndex((column) => column.columnHeader === columnHeader);
    //   if (columnIndex > -1) {
    //     this.myColumns[columnIndex].task.unshift(newTask); // Add the new task to the beginning of the task array
    //   }
    // }
    trackByTaskId(index, task) {
        return task.id;
    }
    removeTask(item, task) {
        const index = item.task.indexOf(task);
        if (index !== -1) {
            item.task.splice(index, 1);
        }
    }
    onInputFocus() {
        this.isInputFocused = true;
    }
    onInputBlur() {
        this.isInputFocused = false;
    }
    drop(event, newColumn) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            event.item.data.column = newColumn; // Update the task's column property
        }
    }
    onDragStarted(task) {
        this.currentDraggingTask = task;
    }
    onDragEnded() {
        this.currentDraggingTask = null;
    }
    onEditBlur(task) {
        task.isEditing = false;
        task.isNew = false;
    }
}
Test5PageComponent.ɵfac = function Test5PageComponent_Factory(t) { return new (t || Test5PageComponent)(); };
Test5PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Test5PageComponent, selectors: [["app-test5-page"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([], [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanel"]])], decls: 15, vars: 4, consts: [[1, "container-fluid", "outline"], [1, "container-fluid", "main"], [1, "all-col"], ["class", "seperation-columns", "cdkDropListGroup", "", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "addBtn"], [1, "add-col-btn"], [1, "add-icon"], [1, "sprint-wrapper-dropdown"], [3, "value", "valueChange", "selectionChange"], ["class", "option-iteration", 3, "value", 4, "ngFor", "ngForOf"], [1, "asd"], [1, "asdf"], ["cdkDropListGroup", "", 1, "seperation-columns"], [1, "header-tab", 3, "ngStyle"], [1, "left-side-icons"], [1, "header-name"], [1, "count"], [1, "sort-columns"], ["xmlns", "http://www.w3.org/2000/svg", "width", "13", "height", "14", "viewBox", "0 0 13 14", "fill", "none"], ["clip-path", "url(#clip0_0_9471)"], ["d", "M6.50001 4.83333H4.33389L4.33334 11.3333H3.25001V4.83333H1.08334L3.79168 2.125L6.50001 4.83333ZM11.9167 9.16667L9.20834 11.875L6.50001 9.16667H8.66668V2.66667H9.75001V9.16667H11.9167Z", "fill", "#828282"], ["id", "clip0_0_9471"], ["width", "13", "height", "13", "fill", "white", "transform", "translate(0 0.5)"], [1, "add-item", 3, "click"], ["cdkDropList", "", 1, "whole-list", 3, "cdkDropListData", "cdkDropListDropped"], ["style", "width: 100%", 4, "ngFor", "ngForOf"], [2, "width", "100%"], ["cdkDrag", "", 1, "list-wrapper", 3, "cdkDragData", "cdkDragDisabled", "cdkDragStarted", "cdkDragEnded"], [1, "list-display"], [1, "feature-row"], [1, "top-row"], ["class", "item-header", 3, "click", 4, "ngIf"], ["class", "item-header-input", 3, "ngModel", "ngModelChange", "blur", "keydown.enter", "focus", 4, "ngIf"], [1, "status-color", 3, "ngStyle"], [1, "more-options", 3, "matMenuTriggerFor"], [1, "option-icon"], [1, "menu-options-all", 3, "menuOpened"], ["menu", "matMenu"], ["mat-menu-item", "", 1, "menu-options"], [1, "icon-menu"], ["mat-menu-item", "", 1, "menu-options", 3, "click"], [1, "bottom-row"], [1, "first-in-row"], [1, "schedule-icon"], [1, "date-submitted"], [1, "last-in-row"], [1, "profile-icon"], [1, "item-header", 3, "click"], [1, "item-header-input", 3, "ngModel", "ngModelChange", "blur", "keydown.enter", "focus"], [1, "option-iteration", 3, "value"], [1, "p-0", "d-flex", "justify-content-between", "flex-row"], [1, "my-auto"], [1, "my-auto", "d-flex", "justify-content-start", "state-status", 3, "ngStyle"]], template: function Test5PageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, Test5PageComponent_div_3_Template, 19, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function Test5PageComponent_Template_mat_select_valueChange_10_listener($event) { return ctx.selectedItem = $event; })("selectionChange", function Test5PageComponent_Template_mat_select_selectionChange_10_listener() { return ctx.onSelectionChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, Test5PageComponent_mat_option_11_Template, 6, 4, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "as");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.currentSelected)("ngForTrackBy", ctx.trackByTaskId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.selectedItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.selectedIteration);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropListGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]], styles: [".outline {\n  height: 100vh;\n  background-color: #e8e8e8;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.outline .main {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  margin: 6% 0% 0% 0%;\n  padding: 0rem;\n  height: auto;\n  min-height: 75vh;\n  width: 90%;\n  background-color: #ffff;\n}\n.outline .main .all-col {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: auto;\n  min-width: 75%;\n  column-gap: 2%;\n  padding: 2rem;\n}\n.outline .main .all-col .seperation-columns {\n  width: 30%;\n  border-radius: 8px;\n  background: var(--blue-grey-10, #F6F6F6);\n  height: 70vh;\n  min-height: 70vh;\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.outline .main .all-col .seperation-columns ::-webkit-scrollbar {\n  width: 3px !important;\n  /* Set the width of the scrollbar */\n}\n.outline .main .all-col .seperation-columns .header-tab {\n  display: flex;\n  width: auto;\n  padding: 10px 12px 8px;\n  justify-content: space-between;\n  /* gap: 5%; */\n  align-items: center;\n  border-radius: 4px 4px 0px 0px;\n  border-bottom: 2px solid var(--palette-100-gold, #FFBD3D);\n  background: var(--blue-grey-30, #E8E9EE);\n}\n.outline .main .all-col .seperation-columns .header-tab .left-side-icons {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 5%;\n  width: -webkit-fill-available;\n}\n.outline .main .all-col .seperation-columns .header-tab .left-side-icons .header-name {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--black-100, #111434);\n  font-family: \"Roboto\";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n}\n.outline .main .all-col .seperation-columns .header-tab .left-side-icons .count {\n  border-radius: 14px;\n  background: var(--neutral-white, #FFF);\n  display: flex;\n  padding: 1%;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  color: var(--black-60, #7D838B);\n  font-family: \"Roboto\";\n  font-size: 10px;\n  font-style: normal;\n  font-weight: 400;\n  width: 20px;\n  height: 20px;\n}\n.outline .main .all-col .seperation-columns .header-tab .left-side-icons .sort-columns {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.outline .main .all-col .seperation-columns .header-tab .left-side-icons .sort-columns .sort-icon-ascending {\n  width: 13px !important;\n  height: 13px !important;\n}\n.outline .main .all-col .seperation-columns .header-tab .left-side-icons .sort-columns .sort-icon-descending {\n  width: 13px !important;\n  height: 13px !important;\n}\n.outline .main .all-col .seperation-columns .header-tab .left-side-icons .sort-columns mat-icon {\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: -13%;\n}\n.outline .main .all-col .seperation-columns .header-tab .add-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.outline .main .all-col .seperation-columns .header-tab .add-icon .add-item {\n  font-size: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #EE4961;\n}\n.outline .main .all-col .seperation-columns .whole-list {\n  flex-direction: column;\n  align-items: flex-start;\n  display: flex;\n  gap: 10px;\n  overflow-y: scroll;\n}\n.outline .main .all-col .seperation-columns .whole-list::-webkit-scrollbar {\n  display: none;\n}\n.outline .main .all-col .seperation-columns .pointer-cursor {\n  cursor: pointer;\n}\n.outline .main .all-col .seperation-columns .list-display {\n  border-radius: 4px;\n  border: 1px solid var(--blue-grey-40, #DADCE2);\n  background: #ffffff;\n  max-width: 240px;\n  width: 100%;\n  padding: 8px;\n}\n.outline .main .all-col .seperation-columns .list-display .feature-row {\n  display: flex;\n  justify-content: space-between !important;\n  align-items: center;\n  width: 100%;\n  padding: 2px 2px 1px 7px;\n}\n.outline .main .all-col .seperation-columns .list-display .feature-row .top-row {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 7px;\n}\n.outline .main .all-col .seperation-columns .list-display .feature-row .top-row .item-header {\n  color: #000;\n  font-family: \"Roboto\";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 16px;\n  /* 114.286% */\n  letter-spacing: 0.28px;\n  text-transform: capitalize;\n}\n.outline .main .all-col .seperation-columns .list-display .feature-row .top-row .status-color {\n  color: var(--blue-grey-90, #526179);\n  height: 7px;\n  width: 7px;\n  border: none;\n  border-radius: 50%;\n}\n.outline .main .all-col .seperation-columns .list-display .feature-row .top-row .item-header-input {\n  border: 2px solid #A8ACB2;\n  border-radius: 4px;\n  padding: 1rem;\n  height: 17px;\n}\n.outline .main .all-col .seperation-columns .list-display .feature-row .more-options {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.outline .main .all-col .seperation-columns .list-display .feature-row .more-options .option-icon {\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n}\n.outline .main .all-col .seperation-columns .list-display .bottom-row {\n  width: 100%;\n  padding: 2px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.outline .main .all-col .seperation-columns .list-display .bottom-row .first-in-row {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.outline .main .all-col .seperation-columns .list-display .bottom-row .first-in-row .schedule-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  color: #A8ACB2;\n}\n.outline .main .all-col .seperation-columns .list-display .bottom-row .first-in-row .date-submitted {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--black-40, #A8ACB2);\n  font-family: \"Roboto\";\n  font-size: 11px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n  /* 145.455% */\n  letter-spacing: 0.22px;\n  text-transform: uppercase;\n}\n.outline .main .all-col .seperation-columns .list-display .bottom-row .last-in-row {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.outline .main .all-col .seperation-columns .list-display .bottom-row .last-in-row .profile-icon {\n  cursor: pointer;\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.outline .main .addBtn {\n  padding: 2rem;\n  margin-left: -6%;\n}\n.outline .main .addBtn .add-col-btn {\n  border-radius: 4px;\n  background: var(--black-10, #F7F9FB);\n  border: none;\n  height: 40px;\n  width: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.outline .main .addBtn .add-col-btn .add-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.outline .main .sprint-wrapper-dropdown {\n  padding: 2rem;\n  margin-left: 4%;\n}\n.state-status {\n  background-color: #52c41a;\n  border-radius: 15px;\n  height: 20px;\n  width: auto;\n  color: #fff;\n  padding: 3%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  font-family: \"Roboto\";\n}\n.mat-menu-panel {\n  width: 120px;\n  max-height: 80px;\n  overflow-y: auto;\n}\n.mat-menu-item {\n  padding: 2%;\n}\n.menu-options-all {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 1%;\n}\n.menu-options-all .menu-options {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  color: var(--black-40, #A8ACB2);\n  font-family: \"Roboto\";\n  font-size: 11px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0.22px;\n}\n.menu-options-all .menu-options .icon-menu {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  color: #A8ACB2;\n}\n.menu-options-all button:focus {\n  outline: none;\n}\n.menu-options-all button {\n  height: 25px !important;\n}\n.dragging {\n  background: none;\n  box-shadow: none;\n  border-radius: 4px;\n  border: 1px solid var(--blue-grey-40, #DADCE2);\n  background: #FFF;\n  width: 100%;\n  padding: 8px;\n  font-family: \"Roboto\";\n  color: #EE4961;\n}\n.cdk-drag-preview {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2 px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-animating {\n  background: rgba(0, 0, 0, 0);\n}\n.custom-dropdown .mat-select-panel {\n  margin-top: 10px;\n  /* Adjust this value as needed to control the distance from the input */\n  position: absolute;\n  z-index: 1000;\n  /* Adjust the z-index as needed based on your layout */\n}\n.custom-mat-select .mat-select-trigger {\n  display: flex;\n  align-items: center;\n}\n.custom-mat-select .state-status {\n  margin-left: 8px;\n  padding: 2px 6px;\n  color: white;\n  font-weight: bold;\n  border-radius: 4px;\n}\n.list-display {\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 8px;\n}\n.list-display.cdk-drag-animating {\n  visibility: hidden;\n}\n::ng-deep .more-options .mat-menu-item:hover,\n.more-options .mat-menu-item:focus {\n  outline: none !important;\n  border: none !important;\n}\n::ng-deep .option-iteration .mat-option-text {\n  display: flex;\n  flex-grow: 1;\n  justify-content: space-between;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  align-items: center;\n  gap: 17%;\n}\n::ng-deep .option-iteration .mat-select-panel .mat-option .mat-option-text {\n  display: flex !important;\n  flex-grow: 1;\n  justify-content: space-between;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  align-items: center;\n  gap: 17%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0ZXN0NS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlrQkE7RUFFRSxhQUFBO0VBQ0EseUJBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTFrQkY7QUE0a0JFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUExa0JKO0FBNGtCSTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQTFrQk47QUE0a0JNO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQTFrQlI7QUE2a0JRO0VBQ0UscUJBQUE7RUFDQSxtQ0FBQTtBQTNrQlY7QUE4a0JRO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx5REFBQTtFQUNBLHdDQUFBO0FBNWtCVjtBQThrQlU7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7RUFDQSw2QkFBQTtBQTVrQlo7QUE4a0JZO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQTVrQmQ7QUEra0JZO0VBQ0UsbUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQTdrQmQ7QUFnbEJZO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBOWtCZDtBQWtsQmM7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FBaGxCaEI7QUFtbEJjO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQWpsQmhCO0FBb2xCYztFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFsbEJoQjtBQXlsQlU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUF2bEJaO0FBeWxCWTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUF2bEJkO0FBOGxCUTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBNWxCVjtBQThsQlU7RUFDRSxhQUFBO0FBNWxCWjtBQWdtQlE7RUFDRSxlQUFBO0FBOWxCVjtBQXltQlE7RUFDRSxrQkFBQTtFQUNBLDhDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBdm1CVjtBQTJtQlU7RUFDRSxhQUFBO0VBQ0EseUNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSx3QkFBQTtBQTFtQlo7QUE2bUJZO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBM21CZDtBQTZtQmM7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUEzbUJoQjtBQThtQmM7RUFDRSxtQ0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBNW1CaEI7QUErbUJjO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBN21CaEI7QUFrbkJZO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFobkJkO0FBa25CYztFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFobkJoQjtBQXNuQlU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBcG5CWjtBQXNuQlk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXBuQmQ7QUFzbkJjO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQXBuQmhCO0FBdW5CYztFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQXJuQmhCO0FBeW5CWTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBdm5CZDtBQXluQmM7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBdm5CaEI7QUFpb0JJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBL25CTjtBQWlvQk07RUFDRSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUEvbkJSO0FBaW9CUTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBL25CVjtBQW9vQkk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQWxvQk47QUF1b0JBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQXBvQkY7QUF1b0JBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFwb0JGO0FBdW9CQTtFQUNFLFdBQUE7QUFwb0JGO0FBdW9CQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQXBvQkY7QUFzb0JFO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBcG9CSjtBQXVvQkk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBcm9CTjtBQXlvQkU7RUFDRSxhQUFBO0FBdm9CSjtBQTBvQkU7RUFDRSx1QkFBQTtBQXhvQko7QUE2b0JBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBMW9CRjtBQThvQkE7RUFDRSxzREFBQTtFQUNBLHNIQUFBO0FBM29CRjtBQStvQkE7RUFDRSw0QkFBQTtBQTVvQkY7QUErb0JBO0VBQ0UsZ0JBQUE7RUFBa0IsdUVBQUE7RUFDbEIsa0JBQUE7RUFDQSxhQUFBO0VBQWUsc0RBQUE7QUExb0JqQjtBQTZvQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUExb0JGO0FBNm9CQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQTFvQkY7QUE2b0JBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtBQTFvQkY7QUE2b0JBO0VBQ0Usa0JBQUE7QUExb0JGO0FBNm9CQTs7RUFFRSx3QkFBQTtFQUNBLHVCQUFBO0FBMW9CRjtBQTZvQkE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQTFvQkY7QUE2b0JBO0VBQ0Usd0JBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBMW9CRiIsImZpbGUiOiJ0ZXN0NS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLy8gLndob2xlIHtcclxuLy8gLy8gICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuLy8gLy8gICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHJcbi8vIC8vICAgICAudG9wLWVsZW1lbnQge1xyXG4vLyAvLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vIC8vICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4vLyAvLyAgICAgICAgIHBhZGRpbmc6IDIlO1xyXG4vLyAvLyAgICAgICAgIHBhZGRpbmctdG9wOiA0JTtcclxuXHJcblxyXG4vLyAvLyAgICAgICAgIC5oZWFkZXIge1xyXG4vLyAvLyAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAvLyAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbi8vIC8vICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4vLyAvLyAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4vLyAvLyAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuLy8gLy8gICAgICAgICB9XHJcblxyXG4vLyAvLyAgICAgICAgIC5jYW5jZWwtYnRuIHtcclxuLy8gLy8gICAgICAgICAgICAgY29sb3I6ICMwMzA1M0Q7XHJcbi8vIC8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuLy8gLy8gICAgICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4vLyAvLyAgICAgICAgIH1cclxuLy8gLy8gICAgIH1cclxuXHJcbi8vIC8vICAgICAuc3RlcCB7XHJcbi8vIC8vICAgICAgICAgcGFkZGluZzogNnB4O1xyXG4vLyAvLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vIC8vICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbi8vIC8vICAgICAgICAgd2lkdGg6IDk4JTtcclxuLy8gLy8gICAgIH1cclxuXHJcbi8vIC8vICAgICAuY2lyY2xlIHtcclxuLy8gLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4vLyAvLyAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4vLyAvLyAgICAgICAgIGhlaWdodDogMzVweDtcclxuLy8gLy8gICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vIC8vICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gLy8gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAvLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vIC8vICAgICAgICAgYmFja2dyb3VuZDogIzAwOTQzMjtcclxuLy8gLy8gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vIC8vICAgICAgICAgei1pbmRleDogMTtcclxuLy8gLy8gICAgICAgICBtYXJnaW46IGxlZnQ7XHJcbi8vIC8vICAgICAgICAgbWFyZ2luLXRvcDogMjZweDtcclxuLy8gLy8gICAgICAgICBsZWZ0OiAyJTtcclxuXHJcbi8vIC8vICAgICB9XHJcblxyXG5cclxuLy8gLy8gICAgIC5jb250ZW50IHtcclxuLy8gLy8gICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbi8vIC8vICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4vLyAvLyAgICAgICAgIG1hcmdpbi10b3A6IDElO1xyXG5cclxuLy8gLy8gICAgICAgICAuaGVhZC1jb250ZW50IHtcclxuLy8gLy8gICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4vLyAvLyAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4vLyAvLyAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbi8vIC8vICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4vLyAvLyAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAvLyAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAvLyAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuLy8gLy8gICAgICAgICB9XHJcblxyXG4vLyAvLyAgICAgICAgIC5kZXNjLWNvbnRlbnQge1xyXG4vLyAvLyAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4vLyAvLyAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbi8vIC8vICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4vLyAvLyAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4vLyAvLyAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuLy8gLy8gICAgICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4vLyAvLyAgICAgICAgIH1cclxuXHJcbi8vIC8vICAgICAgICAgLmNvbXAtc3RhdCB7XHJcbi8vIC8vICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbi8vIC8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuLy8gLy8gICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbi8vIC8vICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbi8vIC8vICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4vLyAvLyAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuLy8gLy8gICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4vLyAvLyAgICAgICAgIH1cclxuXHJcbi8vIC8vICAgICAgICAgLmNvbXAtZGF0ZSB7XHJcbi8vIC8vICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbi8vIC8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuLy8gLy8gICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbi8vIC8vICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbi8vIC8vICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyBcclxuLy8gLy8gICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbi8vIC8vICAgICAgICAgfVxyXG5cclxuLy8gLy8gICAgICAgICAuc3RhdC1hcHByb3ZlIHtcclxuLy8gLy8gICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuLy8gLy8gICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyAvLyAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuLy8gLy8gICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuLy8gLy8gICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IFxyXG4vLyAvLyAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuLy8gLy8gICAgICAgICB9XHJcbi8vIC8vICAgICAgICAgfVxyXG4vLyAvLyAgICAgfVxyXG5cclxuLy8gLy8gICAgIC5yZXNpZ24tcmVxIHtcclxuLy8gLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNWZjO1xyXG4vLyAvLyAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAvLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQlO1xyXG4vLyAvLyAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbi8vIC8vICAgICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4vLyAvLyAgICAgfVxyXG5cclxuXHJcbi8vIC8vIC5lbWFpbC1jYXJkIHtcclxuLy8gLy8gICAgIGhlaWdodDogMTcwcHg7XHJcbi8vIC8vICAgICB3aWR0aDogMzUwcHg7XHJcbi8vIC8vICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuLy8gLy8gICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuLy8gLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICM1RTVENUQ7XHJcblxyXG4vLyAvLyAgICAgLmhlYWRlciB7XHJcbi8vIC8vICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4vLyAvLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vIC8vICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAvLyAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4vLyAvLyAgICAgICAgIGNvbG9yOiAjRUY0QTYxO1xyXG4vLyAvLyAgICAgfVxyXG5cclxuLy8gLy8gICAgIC5mb3JtLWdyb3VwIHtcclxuLy8gLy8gICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbi8vIC8vICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuLy8gLy8gICAgICAgICB3aWR0aDogOTAlO1xyXG5cclxuXHJcblxyXG5cclxuLy8gLy8gICAgIH1cclxuXHJcbi8vIC8vICAgICAuc3VibWl0LWVtYWlsIHtcclxuLy8gLy8gICAgICAgICBtYXJnaW4tbGVmdDogNiU7XHJcbi8vIC8vICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuLy8gLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gLy8gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAvLyAgICAgICAgIHBhZGRpbmc6IDZweCAxNnB4O1xyXG4vLyAvLyAgICAgICAgIGdhcDogNnB4O1xyXG4vLyAvLyAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4vLyAvLyAgICAgICAgIGhlaWdodDogMzJweDtcclxuLy8gLy8gICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNUU1RDVEO1xyXG4vLyAvLyAgICAgICAgIGJhY2tncm91bmQ6ICNFRTQ5NjE7XHJcbi8vIC8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAvLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbi8vIC8vICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAvLyAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNDAlO1xyXG4vLyAvLyAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbi8vIC8vICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbi8vIC8vICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbi8vIC8vICAgICB9XHJcblxyXG4vLyAvLyB9XHJcblxyXG4vLyAvLyAudG9wLWJhciB7XHJcbi8vIC8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAvLyAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4vLyAvLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbi8vIC8vICAgICAubWF0LWljb24ge1xyXG4vLyAvLyAgICAgICAgIG1hcmdpbi10b3A6IDIlO1xyXG4vLyAvLyAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuLy8gLy8gICAgIH1cclxuXHJcbi8vIC8vICAgICAucmVxdWVzdC1yZXNpZ25hdGlvbi1idG4ge1xyXG4vLyAvLyAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbi8vIC8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAvLyAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4vLyAvLyAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4vLyAvLyAgICAgICAgIGJhY2tncm91bmQ6ICNFRTQ5NjE7XHJcbi8vIC8vICAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4vLyAvLyAgICAgICAgIGhlaWdodDogNDBweDtcclxuLy8gLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAvLyAgICAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4vLyAvLyAgICAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4vLyAvLyAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAvLyAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuLy8gLy8gICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbi8vIC8vICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gLy8gICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbi8vIC8vICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuLy8gLy8gICAgICAgICBmbGV4OiBub25lO1xyXG4vLyAvLyAgICAgICAgIG9yZGVyOiAwO1xyXG4vLyAvLyAgICAgICAgIGZsZXgtZ3JvdzogMDtcclxuLy8gLy8gICAgIH1cclxuLy8gLy8gfVxyXG5cclxuLy8gLy8gLnN0YXR1cyB7XHJcbi8vIC8vICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbi8vIC8vICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcblxyXG4vLyAvLyAgICAgLmN1cnJlbnQtc3RhdHVzIHtcclxuLy8gLy8gICAgICAgICBtYXJnaW4tdG9wOiAyJTtcclxuXHJcbi8vIC8vICAgICAgICAgLmN1cnJlbnQtc3RhdHVzLWhlYWRlciB7XHJcbi8vIC8vICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbi8vIC8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuLy8gLy8gICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbi8vIC8vICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbi8vIC8vICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbi8vIC8vICAgICAgICAgICAgIGNvbG9yOiAjQjlDMENBO1xyXG4vLyAvLyAgICAgICAgIH1cclxuXHJcbi8vIC8vICAgICAgICAgLmN1cnJlbnQtc3RhdHVzLWRldGFpbHMge1xyXG4vLyAvLyAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAvLyAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbi8vIC8vICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4vLyAvLyAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4vLyAvLyAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuLy8gLy8gICAgICAgICAgICAgY29sb3I6ICM1MjYxNzk7XHJcbi8vIC8vICAgICAgICAgfVxyXG4vLyAvLyAgICAgfVxyXG5cclxuLy8gLy8gICAgIC5zdGF0dXMtaGlzdG9yeSB7XHJcbi8vIC8vICAgICAgICAgLnN0YXR1cy1oaXN0b3J5LWhlYWRlciB7XHJcbi8vIC8vICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbi8vIC8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuLy8gLy8gICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbi8vIC8vICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbi8vIC8vICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbi8vIC8vICAgICAgICAgICAgIGNvbG9yOiAjQjlDMENBO1xyXG4vLyAvLyAgICAgICAgIH1cclxuXHJcbi8vIC8vICAgICAgICAgLnN0YXR1cy1oaXN0b3J5LWRldGFpbHMge1xyXG4vLyAvLyAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAvLyAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbi8vIC8vICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4vLyAvLyAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4vLyAvLyAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuLy8gLy8gICAgICAgICAgICAgY29sb3I6ICM1MjYxNzk7XHJcbi8vIC8vICAgICAgICAgfVxyXG5cclxuLy8gLy8gICAgICAgICAucmVhc29uLWZvci13aXRoZHJhd2wge1xyXG4vLyAvLyAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyJTtcclxuLy8gLy8gICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4vLyAvLyAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjdGOUZCO1xyXG4vLyAvLyAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMCU7XHJcbi8vIC8vICAgICAgICAgICAgIHdpZHRoOiA5NyU7XHJcbi8vIC8vICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuLy8gLy8gICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG5cclxuLy8gLy8gICAgICAgICAgICAgLnJlYXNvbi1mb3Itd2l0aGRyYXdsLWhlYWRlciB7XHJcbi8vIC8vICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyJTtcclxuLy8gLy8gICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuM3JlbTtcclxuXHJcbi8vIC8vICAgICAgICAgICAgICAgICBoNCB7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuLy8gLy8gICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vIC8vICAgICAgICAgICAgICAgICBwIHtcclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTI2MTc5O1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAvLyAgICAgICAgICAgICB9XHJcbi8vIC8vICAgICAgICAgfVxyXG4vLyAvLyAgICAgfVxyXG5cclxuLy8gLy8gICAgIGhyIHtcclxuLy8gLy8gICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDRENkQ4XHJcbi8vIC8vICAgICB9XHJcbi8vIC8vIH1cclxuXHJcbi8vIC8vIC5lcnJvci1tZXNzYWdlIHtcclxuLy8gLy8gICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuLy8gLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAvLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAvLyAgICAgbWFyZ2luLXRvcDogMjAlO1xyXG4vLyAvLyAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4vLyAvLyAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbi8vIC8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAvLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gLy8gICAgIGZvbnQtc2l6ZTogMThweDtcclxuLy8gLy8gICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vIC8vICAgICBjb2xvcjogIzAwMDAwMDtcclxuLy8gLy8gICB9XHJcblxyXG4vLyAvLyAgIC5tYXQtZXhwYW5zaW9uLWhlYWRlcjo6YWZ0ZXIge1xyXG4vLyAvLyAgICAgaGVpZ2h0OiAxNTBweDtcclxuLy8gLy8gICAgIHdpZHRoOiAxNTBweDtcclxuLy8gLy8gfVxyXG5cclxuXHJcblxyXG5cclxuLy8gLmRlcGFydG1lbnQtY2xlYXJhbmNlIHtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuLy8gICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHJcbi8vICAgICAuYmFjay1idG4ge1xyXG4vLyAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4vLyAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4vLyAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuLy8gICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbi8vICAgICAgIGJvcmRlcjogbm9uZTtcclxuLy8gICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4vLyAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICBwYWRkaW5nOiAzcHggMTBweDtcclxuLy8gICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC50YWItZGVwdC1jbGVhcmFuY2UtaGVhZCB7XHJcbi8vICAgICAgIC5kZXB0LWhlYWRlciB7XHJcbi8vICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuLy8gICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbi8vICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgICAgICBjb2xvcjogIzI2MzAzRTtcclxuLy8gICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4vLyAgICAgICB9XHJcblxyXG4vLyAgICAgICAuaGVhZGVyZm9yY2xlYXJhbmNlIHtcclxuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4vLyAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbi8vICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbi8vICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbi8vICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4vLyAgICAgICB9XHJcblxyXG5cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAudGFiLWRlcHQtY2xlYXJhbmNlLWRlc2Mge1xyXG4vLyAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbi8vICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuLy8gICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4vLyAgICAgICAuc3RlcC1kZXNjIHtcclxuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuLy8gICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgICAgY29sb3I6ICMyNjMwM0U7XHJcbi8vICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4vLyAgICAgICAgIG1hcmdpbi1sZWZ0OiAxLjZyZW07XHJcbi8vICAgICAgIH1cclxuXHJcbi8vICAgICAgIC5hcHByb3Zlci1kZXNjIHtcclxuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4vLyAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4vLyAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbi8vICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbi8vICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbi8vICAgICAgIH1cclxuXHJcbi8vICAgICAgIC5kYXRlLWRlc2Mge1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuLy8gICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbi8vICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbi8vICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuLy8gICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuLy8gICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuLy8gICAgICAgfVxyXG5cclxuLy8gICAgICAgLnN0YXR1cy1kZXNjIHtcclxuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4vLyAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4vLyAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbi8vICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbi8vICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAvLyAuU2Nyb2xsc3R5bGUge1xyXG4vLyAgICAgLy8gICBtYXgtaGVpZ2h0OiA2NXZoO1xyXG4vLyAgICAgLy8gICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbi8vICAgICAvLyB9XHJcbi8vICAgfSBcclxuXHJcbi8vIC5hZG1pbi1kZXNjcmlwdGlvbiB7XHJcbi8vICAgaGVpZ2h0OiAxMTBweDtcclxuLy8gICB3aWR0aDogODUwcHg7XHJcbi8vICAgYm9yZGVyOiAxcHggc29saWQgI0YyN0E2QztcclxuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbi8vICAgcGFkZGluZzogMXJlbTtcclxuXHJcblxyXG4vLyAgIC5pZC1jYXJkIHtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuLy8gICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuLy8gICAgIHBhZGRpbmc6IDFyZW07XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4vLyAgICAgZ2FwOiAxMCU7XHJcblxyXG4vLyAgICAgLmlkLWNhcmQtaGVhZGVyIHtcclxuLy8gICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuLy8gICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuLy8gICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbi8vICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC5pZC1jYXJkLXN0YXR1cyB7XHJcbi8vICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuLy8gICAgICAgZ2FwOiAxNyU7XHJcbi8vICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgIHdpZHRoOiAxOCU7XHJcblxyXG4vLyAgICAgICAuc3RhdHVzLWhlYWRlciB7XHJcbi8vICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuLy8gICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbi8vICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbi8vICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuLy8gICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuLy8gICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbi8vICAgICAgIH1cclxuXHJcbi8vICAgICAgIC5zdGF0dXMtZGVzYyB7XHJcbi8vICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbi8vICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuLy8gICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuLy8gICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC5pZGNhcmQtY29zdCB7XHJcbi8vICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuLy8gICAgICAgZ2FwOiAxMCU7XHJcbi8vICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgIHdpZHRoOiAxOCU7XHJcblxyXG4vLyAgICAgICAuY29zdC1oZWFkZXIge1xyXG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4vLyAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbi8vICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbi8vICAgICAgICAgb3BhY2l0eTogMC40O1xyXG4vLyAgICAgICB9XHJcblxyXG4vLyAgICAgICAuY29zdC1kZXNjIHtcclxuLy8gICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuLy8gICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4vLyAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4vLyAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG5cclxuLy8gICAuYWNjZXNzLWNhcmQge1xyXG4vLyAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4vLyAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4vLyAgICAgcGFkZGluZzogMC41cmVtO1xyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiAwLjdyZW07XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4vLyAgICAgZ2FwOiAxMCU7XHJcblxyXG4vLyAgICAgLmFjY2Vzcy1oZWFkZXIge1xyXG4vLyAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4vLyAgICAgICBmb250LXNpemU6IDEycHg7XHJcbi8vICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC5zdGF0dXMge1xyXG4vLyAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4vLyAgICAgICBmb250LXNpemU6IDEycHg7XHJcbi8vICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuXHJcbi8vICAgLnNpbS1jYXJkIHtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuLy8gICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuLy8gICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogMC43cmVtO1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuLy8gICAgIGdhcDogMTAlO1xyXG5cclxuLy8gICAgIC5zaW0taGVhZGVyIHtcclxuLy8gICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuLy8gICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAuc2ltLWRlc2Mge1xyXG4vLyAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4vLyAgICAgICBmb250LXNpemU6IDEycHg7XHJcbi8vICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuXHJcbi8vIC5maW5hbmNlLWRlc2NyaXB0aW9uIHtcclxuLy8gICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbi8vICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4vLyAgIGhlaWdodDogMTEwcHg7XHJcbi8vICAgd2lkdGg6IDg1MHB4O1xyXG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkICNGMjdBNkM7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4vLyAgIHBhZGRpbmc6IDJyZW07XHJcblxyXG4vLyAgIC5tYWluLWhlYWRlciB7XHJcbi8vICAgICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbi8vICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4vLyAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbi8vICAgICBjb2xvcjogIzAwMDAwMDtcclxuLy8gICB9XHJcblxyXG4vLyAgIC5kZWNyaXB0aXZlcyB7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgcGFkZGluZzogM3B4O1xyXG4vLyAgICAgZ2FwOiA3JTtcclxuLy8gICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XHJcblxyXG4vLyAgICAgLmxvYW4tdHlwZSB7XHJcbi8vICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgICBnYXA6IDUlO1xyXG4vLyAgICAgICB3aWR0aDogMjAlO1xyXG5cclxuLy8gICAgICAgLmhlYWRlciB7XHJcbi8vICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuLy8gICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbi8vICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbi8vICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuLy8gICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuLy8gICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbi8vICAgICAgIH1cclxuXHJcbi8vICAgICAgIC50eXBlIHtcclxuLy8gICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuLy8gICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4vLyAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4vLyAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5cclxuXHJcbi5vdXRsaW5lIHtcclxuICAvLyB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzIsIDIzMiwgMjMyKTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAubWFpbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW46IDYlIDAlIDAlIDAlO1xyXG4gICAgcGFkZGluZzogMHJlbTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDc1dmg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY7XHJcblxyXG4gICAgLmFsbC1jb2wge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICBtaW4td2lkdGg6IDc1JTtcclxuICAgICAgY29sdW1uLWdhcDogMiU7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW07XHJcblxyXG4gICAgICAuc2VwZXJhdGlvbi1jb2x1bW5zIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlLWdyZXktMTAsICNGNkY2RjYpO1xyXG4gICAgICAgIGhlaWdodDogNzB2aDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA3MHZoO1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZ2FwOiAxNXB4O1xyXG5cclxuXHJcbiAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICB3aWR0aDogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAvKiBTZXQgdGhlIHdpZHRoIG9mIHRoZSBzY3JvbGxiYXIgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXItdGFiIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTJweCA4cHg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAvKiBnYXA6IDUlOyAqL1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMHB4IDBweDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wYWxldHRlLTEwMC1nb2xkLCAjRkZCRDNEKTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUtZ3JleS0zMCwgI0U4RTlFRSk7XHJcblxyXG4gICAgICAgICAgLmxlZnQtc2lkZS1pY29ucyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiA1JTtcclxuICAgICAgICAgICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcblxyXG4gICAgICAgICAgICAuaGVhZGVyLW5hbWUge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2stMTAwLCAjMTExNDM0KTtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb3VudCB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1uZXV0cmFsLXdoaXRlLCAjRkZGKTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDElO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjay02MCwgIzdEODM4Qik7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zb3J0LWNvbHVtbnMge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgLy8gd2lkdGg6IDEzcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDEzcHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgICAgLnNvcnQtaWNvbi1hc2NlbmRpbmcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEzcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLnNvcnQtaWNvbi1kZXNjZW5kaW5nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IC0xMyU7XHJcblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYWRkLWljb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgLmFkZC1pdGVtIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjRUU0OTYxO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC53aG9sZS1saXN0IHtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcblxyXG4gICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBvaW50ZXItY3Vyc29yIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIC5saXN0LXdyYXBwZXJ7XHJcbiAgICAgICAgLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgLy8gICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlLWdyZXktNDAsICNEQURDRTIpO1xyXG4gICAgICAgIC8vICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgICAgICAvLyAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC8vICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLmxpc3QtZGlzcGxheSB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlLWdyZXktNDAsICNEQURDRTIpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgIG1heC13aWR0aDogMjQwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuXHJcblxyXG5cclxuICAgICAgICAgIC5mZWF0dXJlLXJvdyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgLy8gcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHggMnB4IDFweCA3cHg7XHJcblxyXG5cclxuICAgICAgICAgICAgLnRvcC1yb3cge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZ2FwOiA3cHg7XHJcblxyXG4gICAgICAgICAgICAgIC5pdGVtLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgIC8qIDExNC4yODYlICovXHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yOHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuc3RhdHVzLWNvbG9yIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibHVlLWdyZXktOTAsICM1MjYxNzkpO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogN3B4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLml0ZW0taGVhZGVyLWlucHV0IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNBOEFDQjI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxN3B4O1xyXG5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tb3JlLW9wdGlvbnMge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgLm9wdGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5ib3R0b20tcm93IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgLmZpcnN0LWluLXJvdyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAuc2NoZWR1bGUtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNBOEFDQjI7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuZGF0ZS1zdWJtaXR0ZWQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjay00MCwgI0E4QUNCMik7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAvKiAxNDUuNDU1JSAqL1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjJweDtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubGFzdC1pbi1yb3cge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgLnByb2ZpbGUtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLmFkZEJ0biB7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNiU7XHJcblxyXG4gICAgICAuYWRkLWNvbC1idG4ge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFjay0xMCwgI0Y3RjlGQik7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5hZGQtaWNvbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zcHJpbnQtd3JhcHBlci1kcm9wZG93bntcclxuICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDQlO1xyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuLnN0YXRlLXN0YXR1c3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIsIDE5NiwgMjYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDMlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG59XHJcblxyXG4ubWF0LW1lbnUtcGFuZWwge1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBtYXgtaGVpZ2h0OiA4MHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtbWVudS1pdGVtIHtcclxuICBwYWRkaW5nOiAyJTtcclxufVxyXG5cclxuLm1lbnUtb3B0aW9ucy1hbGwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMSU7XHJcblxyXG4gIC5tZW51LW9wdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2stNDAsICNBOEFDQjIpO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjJweDtcclxuXHJcblxyXG4gICAgLmljb24tbWVudSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiAjQThBQ0IyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnV0dG9uOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmRyYWdnaW5nIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUtZ3JleS00MCwgI0RBRENFMik7XHJcbiAgYmFja2dyb3VuZDogI0ZGRjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIGNvbG9yOiAjRUU0OTYxO1xyXG5cclxufVxyXG5cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMiBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG5cclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcclxufVxyXG5cclxuLmN1c3RvbS1kcm9wZG93biAubWF0LXNlbGVjdC1wYW5lbCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDsgLyogQWRqdXN0IHRoaXMgdmFsdWUgYXMgbmVlZGVkIHRvIGNvbnRyb2wgdGhlIGRpc3RhbmNlIGZyb20gdGhlIGlucHV0ICovXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDEwMDA7IC8qIEFkanVzdCB0aGUgei1pbmRleCBhcyBuZWVkZWQgYmFzZWQgb24geW91ciBsYXlvdXQgKi9cclxufVxyXG5cclxuLmN1c3RvbS1tYXQtc2VsZWN0IC5tYXQtc2VsZWN0LXRyaWdnZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmN1c3RvbS1tYXQtc2VsZWN0IC5zdGF0ZS1zdGF0dXMge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgcGFkZGluZzogMnB4IDZweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4ubGlzdC1kaXNwbGF5IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4ubGlzdC1kaXNwbGF5LmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1vcmUtb3B0aW9ucyAubWF0LW1lbnUtaXRlbTpob3ZlcixcclxuLm1vcmUtb3B0aW9ucyAubWF0LW1lbnUtaXRlbTpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm9wdGlvbi1pdGVyYXRpb24gLm1hdC1vcHRpb24tdGV4dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE3JTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5vcHRpb24taXRlcmF0aW9uIC5tYXQtc2VsZWN0LXBhbmVsIC5tYXQtb3B0aW9uIC5tYXQtb3B0aW9uLXRleHQge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE3JTtcclxufVxyXG5cclxuLy8gOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXBhbmVsIC5tYXQtb3B0aW9uIC5tYXQtb3B0aW9uLXRleHQge1xyXG4vLyAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuLy8gICBmbGV4LWdyb3c6IDE7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXBhbmVsIC5tYXQtb3B0aW9uIC5zdGF0ZS1zdGF0dXMge1xyXG4vLyAgIGZsZXgtc2hyaW5rOiAwO1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4vLyB9XHJcbi8vIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuLy8gICBkaXNwbGF5OiBub25lO1xyXG4vLyB9XHJcblxyXG4vLyAvKiBBZGQgYm9yZGVyIHRvIG1hdC1zZWxlY3QgKi9cclxuLy8gOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuLy8gICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAvKiBDaGFuZ2UgdGhlIGJvcmRlciBjb2xvciBhbmQgc2l6ZSBhcyBuZWVkZWQgKi9cclxuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7IC8qIEFkZCBib3JkZXIgcmFkaXVzIGFzIG5lZWRlZCAqL1xyXG4vLyAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbi8vIH1cclxuXHJcbi8vIC8qIEFkZCBwYWRkaW5nIHRvIHRoZSBtYXQtc2VsZWN0IHRyaWdnZXIgdG8gYWxpZ24gd2l0aCB0aGUgYm9yZGVyICovXHJcbi8vIDo6bmctZGVlcCAubWF0LXNlbGVjdC10cmlnZ2VyIHtcclxuLy8gICBwYWRkaW5nOiA4cHg7IC8qIEFkanVzdCBwYWRkaW5nIGFzIG5lZWRlZCAqL1xyXG4vLyB9XHJcblxyXG4iXX0= */"], encapsulation: 2, data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
                ]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Test5PageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-test5-page',
                templateUrl: './test5-page.component.html',
                styleUrls: ['./test5-page.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
                        ]),
                    ]),
                ],
                viewProviders: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanel"]],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            }]
    }], null, null); })();


/***/ }),

/***/ "DieI":
/*!***************************************************************!*\
  !*** ./src/app/components/test3-page/test3-page.component.ts ***!
  \***************************************************************/
/*! exports provided: Test3PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test3PageComponent", function() { return Test3PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");




class Test3PageComponent {
    constructor() {
        // htmlTest = `<p> HIHkjsf </p>`;
        // withdrawnstatus = [
        //   {
        //     id: 1,
        //     maticon: 'face',
        //     request: 'Resignation',
        //     submittedDate: '22 July 2023',
        //     revertedDate: '22 July 2023',
        //     currentStatus: 'In Progress',
        //   },
        // ];
        // alldataForm = [
        //   {
        //     _id: "64946309d1b85d8ef26accd6",
        //     field_default_value: 1,
        //     has_default_value: false,
        //     field_key: "laptop",
        //     view_key: "system_admin",
        //     is_mandatory: true,
        //     is_active_field: true,
        //     field_label: "Laptop",
        //     sub_field_label: "Received?",
        //     is_active: true,
        //     has_master_data: false,
        //     master_data_info: {
        //       table_name: "m_exit_options",
        //       id_field: "id",
        //       name_field: "name"
        //     },
        //     field_type: "toggle-button",
        //     sort_order: 1,
        //     options: [
        //       { id: 1, name: "Yes" },
        //       { id: 2, name: "No" },
        //       { id: 3, name: "N/A" }
        //     ]
        //   },
        //   {
        //     _id: "64946309d1b85d8ef26accd6",
        //     field_default_value: 1,
        //     has_default_value: false,
        //     field_key: "laptop",
        //     view_key: "system_admin",
        //     is_mandatory: true,
        //     is_active_field: true,
        //     field_label: "",
        //     sub_field_label: "Damaged?",
        //     is_active: true,
        //     has_master_data: false,
        //     master_data_info: {
        //       table_name: "m_exit_options",
        //       id_field: "id",
        //       name_field: "name"
        //     },
        //     field_type: "toggle-button",
        //     sort_order: 1,
        //     options: [
        //       { id: 1, name: "Yes" },
        //       { id: 2, name: "No" }
        //     ]
        //   },
        // ];
        this.epicData = [{
                epicName: "Add Epic",
                epicNumber: "Add Feature Number",
                epicSection: 'Add Section ID'
            }
        ];
    }
    handleMatIconClick(event) {
        const target = event.target;
        if (target.tagName === 'MAT-ICON' || target.tagName === 'BUTTON') {
            this.openThis();
        }
    }
    openThis() {
        console.log('The openThis() function is called.');
    }
    ngOnInit() {
    }
}
Test3PageComponent.ɵfac = function Test3PageComponent_Factory(t) { return new (t || Test3PageComponent)(); };
Test3PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Test3PageComponent, selectors: [["app-test3-page"]], decls: 103, vars: 3, consts: [[1, "main"], [1, "body", 3, "click"], [1, "epic-row-wrapper", "d-flex", "justify-content-between", "align-items-center", "container-lg"], [1, "left-side-items", "d-flex", "justify-content-center", "align-items-center"], [1, "epic-state", "d-flex", "justify-content-center", "align-items-center"], [1, "d-flex", "justify-content-center", "align-items-center"], ["matTooltip", "Add Epic"], ["matTooltip", "Add Feature ID"], ["matTooltip", "Add Section ID"], [1, "all-right-icons", "d-flex", "justify-content-center", "align-items-center"], [1, "main-content", "mr-auto", "ml-auto"], [1, "content-container-tab"], [1, "tool-button-wrapper", "d-flex", "justify-content-start", "align-items-center"], [1, "attach-btn"], [1, "subtask-btn"], [1, "dependencies-btn"], [1, "d-flex", "all-content"], [1, "sub-contents"], [1, "add-description"], ["for", "descriptions-tab"], ["type", "text", "id", "descriptions-tab", "placeholder", "Enter here"], [1, "activity-charts"], [1, "chart-tabs"], [1, "comments", "d-flex", "mt-2", "p-2"], ["type", "text"], [1, "detail-tab"], [1, "row", "container-fluid"], [1, "col-6"], [1, "row", "mb-3", "header-sub"], [1, "row", "mb-3", "value-sub"]], template: function Test3PageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Test3PageComponent_Template_div_click_1_listener($event) { return ctx.handleMatIconClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "lock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "visibility ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "thumb_up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "more_horiz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "The Important Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Attach");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "account_tree ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Add Sub Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "person_add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Dependencies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Add Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Assigned To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Dates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Report To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "12th Aug - 21st Oct");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Critical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Mr. Subramanyam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.epicData[0].epicName, " /");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.epicData[0].epicNumber, " /");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.epicData[0].epicSection);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltip"]], styles: [".main[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  font-family: \"Roboto\";\n  font-style: normal;\n  background-color: lightgray;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  height: 75vh;\n  width: 80%;\n  background-color: #ffff;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .epic-row-wrapper[_ngcontent-%COMP%] {\n  padding: 3rem 3rem 2rem 3rem;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .epic-row-wrapper[_ngcontent-%COMP%]   .left-side-items[_ngcontent-%COMP%] {\n  color: var(--blue-grey-80, #5F6C81);\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .epic-row-wrapper[_ngcontent-%COMP%]   .left-side-items[_ngcontent-%COMP%]   .epic-state[_ngcontent-%COMP%] {\n  gap: 5px;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .epic-row-wrapper[_ngcontent-%COMP%]   .left-side-items[_ngcontent-%COMP%]   .epic-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  cursor: pointer;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .epic-row-wrapper[_ngcontent-%COMP%]   .left-side-items[_ngcontent-%COMP%]   .epic-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"Roboto\";\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  text-transform: capitalize;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .epic-row-wrapper[_ngcontent-%COMP%]   .all-right-icons[_ngcontent-%COMP%] {\n  gap: 15px;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .epic-row-wrapper[_ngcontent-%COMP%]   .all-right-icons[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--blue-grey-80, #5F6C81);\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  width: 95%;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .content-container-tab[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  padding: 5px;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .content-container-tab[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #000;\n  font-family: \"Roboto\";\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 24px;\n  text-transform: capitalize;\n  margin: 0;\n  padding: 1rem;\n  margin-right: auto;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .tool-button-wrapper[_ngcontent-%COMP%] {\n  margin-left: -5px;\n  margin-top: 2px;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .tool-button-wrapper[_ngcontent-%COMP%]   .subtask-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .tool-button-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #f5f5f5;\n  color: var(--black-80, #515965);\n  font-family: \"Roboto\";\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n  text-transform: capitalize;\n  border: none;\n  width: auto;\n  border-radius: 4px;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .tool-button-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--black-80, #515965);\n  font-size: 15px;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .all-content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .all-content[_ngcontent-%COMP%]   .sub-contents[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .all-content[_ngcontent-%COMP%]   .sub-contents[_ngcontent-%COMP%]   .add-description[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  margin: 2rem;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .all-content[_ngcontent-%COMP%]   .sub-contents[_ngcontent-%COMP%]   .add-description[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--blue-grey-70, #6E7B8F);\n  font-family: \"Roboto\";\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 500;\n  letter-spacing: 0.24px;\n  text-transform: capitalize;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .all-content[_ngcontent-%COMP%]   .sub-contents[_ngcontent-%COMP%]   .add-description[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid var(--blue-grey-40, #DADCE2);\n  width: 100%;\n  height: 40px;\n  padding: 1rem;\n  color: var(--blue-grey-50, #B9C0CA);\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .all-content[_ngcontent-%COMP%]   .sub-contents[_ngcontent-%COMP%]   .activity-charts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  margin: 0rem 2rem 1rem 2rem;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .all-content[_ngcontent-%COMP%]   .sub-contents[_ngcontent-%COMP%]   .activity-charts[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--blue-grey-70, #6E7B8F);\n  font-family: \"Roboto\";\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 500;\n  letter-spacing: 0.24px;\n  text-transform: capitalize;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .all-content[_ngcontent-%COMP%]   .sub-contents[_ngcontent-%COMP%]   .activity-charts[_ngcontent-%COMP%]   .chart-tabs[_ngcontent-%COMP%] {\n  color: #000;\n  font-family: \"Roboto\";\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  letter-spacing: 0.2px;\n  text-transform: capitalize;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .all-content[_ngcontent-%COMP%]   .sub-contents[_ngcontent-%COMP%]   .activity-charts[_ngcontent-%COMP%]   .chart-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  width: auto;\n  height: 25px;\n  margin: 2px;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .all-content[_ngcontent-%COMP%]   .sub-contents[_ngcontent-%COMP%]   .activity-charts[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .all-content[_ngcontent-%COMP%]   .sub-contents[_ngcontent-%COMP%]   .activity-charts[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid var(--blue-grey-40, #DADCE2);\n  width: 80%;\n  height: 40px;\n  padding: 1rem;\n  color: var(--blue-grey-50, #B9C0CA);\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .all-content[_ngcontent-%COMP%]   .detail-tab[_ngcontent-%COMP%] {\n  width: 30%;\n  border: 2px solid var(--black-20, #D4D6D8);\n  border-radius: 5px;\n  padding: 1rem;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .all-content[_ngcontent-%COMP%]   .detail-tab[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--black-80, #515965);\n  font-family: Roboto;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .all-content[_ngcontent-%COMP%]   .detail-tab[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin-top: -2px;\n  border: 1px solid var(--black-20, #D4D6D8);\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .all-content[_ngcontent-%COMP%]   .detail-tab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  display: flex;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .all-content[_ngcontent-%COMP%]   .detail-tab[_ngcontent-%COMP%]   .header-sub[_ngcontent-%COMP%] {\n  color: var(--black-60, #7D838B);\n  font-family: \"Roboto\";\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 400;\n  text-transform: capitalize;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .all-content[_ngcontent-%COMP%]   .detail-tab[_ngcontent-%COMP%]   .value-sub[_ngcontent-%COMP%] {\n  color: #000;\n  font-family: \"Roboto\";\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 400;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0ZXN0My1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFFSTtFQUtFLDRCQUFBO0FBSk47QUFNTTtFQUNFLG1DQUFBO0FBSlI7QUFPUTtFQUNFLFFBQUE7QUFMVjtBQU9VO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFMWjtBQVFVO0VBQ0UsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQU5aO0FBY007RUFDRSxTQUFBO0FBWlI7QUFjUTtFQUNFLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVpWO0FBcUJJO0VBQ0UsVUFBQTtBQW5CTjtBQXFCTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFuQlI7QUFzQlE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBcEJWO0FBeUJNO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBdkJSO0FBMEJVO0VBQ0UsZUFBQTtBQXhCWjtBQTRCUTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUExQlY7QUE2QlU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQTNCWjtBQW9DSTtFQUNFLFdBQUE7QUFsQ047QUFvQ007RUFDRSxVQUFBO0FBbENSO0FBcUNRO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFuQ1Y7QUFxQ1U7RUFDRSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FBbkNaO0FBc0NVO0VBQ0Usa0JBQUE7RUFDQSw4Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0FBcENaO0FBeUNRO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FBdkNWO0FBeUNVO0VBQ0UsbUNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQXZDWjtBQTBDVTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtBQXhDWjtBQTBDWTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUF4Q2Q7QUE2Q1k7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUEzQ2Q7QUE4Q1k7RUFDRSxrQkFBQTtFQUNBLDhDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7QUE1Q2Q7QUFtRE07RUFDRSxVQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFqRFI7QUFtRFE7RUFDRSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQWpEVjtBQW9EUTtFQUNFLGdCQUFBO0VBQ0EsMENBQUE7QUFsRFY7QUFxRFE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQW5EVjtBQXNEUTtFQUNFLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBcERWO0FBdURRO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQXJEViIsImZpbGUiOiJ0ZXN0My1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDc1dmg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY7XHJcblxyXG5cclxuICAgIC5lcGljLXJvdy13cmFwcGVyIHtcclxuICAgICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogM3JlbSAzcmVtIDJyZW0gM3JlbTtcclxuXHJcbiAgICAgIC5sZWZ0LXNpZGUtaXRlbXMge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibHVlLWdyZXktODAsICM1RjZDODEpO1xyXG5cclxuXHJcbiAgICAgICAgLmVwaWMtc3RhdGUge1xyXG4gICAgICAgICAgZ2FwOiA1cHg7XHJcblxyXG4gICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hbGwtcmlnaHQtaWNvbnMge1xyXG4gICAgICAgIGdhcDogMTVweDtcclxuXHJcbiAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWJsdWUtZ3JleS04MCwgIzVGNkM4MSk7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgd2lkdGg6IDk1JTtcclxuXHJcbiAgICAgIC5jb250ZW50LWNvbnRhaW5lci10YWIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcblxyXG5cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICAudG9vbC1idXR0b24td3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG5cclxuICAgICAgICAuc3VidGFzay1idG57XHJcbiAgICAgICAgICBtYXQtaWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjay04MCwgIzUxNTk2NSk7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuXHJcbiAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2stODAsICM1MTU5NjUpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIC8vIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5hbGwtY29udGVudCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgLnN1Yi1jb250ZW50cyB7XHJcbiAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG5cclxuICAgICAgICAuYWRkLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgIG1hcmdpbjogMnJlbTtcclxuXHJcbiAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibHVlLWdyZXktNzAsICM2RTdCOEYpO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yNHB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZS1ncmV5LTQwLCAjREFEQ0UyKTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsdWUtZ3JleS01MCwgI0I5QzBDQSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjdGl2aXR5LWNoYXJ0cyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICBtYXJnaW46IDByZW0gMnJlbSAxcmVtIDJyZW07XHJcblxyXG4gICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZS1ncmV5LTcwLCAjNkU3QjhGKTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjRweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNoYXJ0LXRhYnMge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jb21tZW50cyB7XHJcbiAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUtZ3JleS00MCwgI0RBRENFMik7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZS1ncmV5LTUwLCAjQjlDMENBKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kZXRhaWwtdGFiIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrLTIwLCAjRDRENkQ4KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuXHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrLTgwLCAjNTE1OTY1KTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBociB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stMjAsICNENEQ2RDgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXItc3ViIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjay02MCwgIzdEODM4Qik7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudmFsdWUtc3Vie1xyXG4gICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICB9XHJcblxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Test3PageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test3-page',
                templateUrl: './test3-page.component.html',
                styleUrls: ['./test3-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "JFIp":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HomePageComponent {
    constructor(_router, route) {
        this._router = _router;
        this.route = route;
    }
    toPageOne() { this._router.navigate(['/firstPageTesting']); }
    toPageTwo() { this._router.navigate(['/secondPageTesting']); }
    toPageThree() { this._router.navigate(['/thirdPageTesting']); }
    toPage4() { this._router.navigate(['/4PageTesting']); }
    toPage5() { this._router.navigate(['/5PageTesting']); }
    toPage6() { this._router.navigate(['/6PageTesting']); }
    toPage7() { this._router.navigate(['/7PageTesting']); }
    toPage8() { this._router.navigate(['/8PageTesting']); }
    toPage9() { this._router.navigate(['/9PageTesting']); }
    ngOnInit() { }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 60, vars: 0, consts: [[1, "bullshit"], [1, "ag-format-container"], [2, "display", "flex", "justify-content", "center", "color", "azure", "font-family", "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", "font-weight", "600"], [1, "ag-courses_box"], [1, "ag-courses_item"], [1, "ag-courses-item_link", 3, "click"], [1, "ag-courses-item_bg"], [1, "ag-courses-item_title"], [1, "ag-courses-item_date-box"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Kebs Frontend Testing Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_Template_a_click_7_listener() { return ctx.toPageOne(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Page - 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_Template_a_click_13_listener() { return ctx.toPageTwo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Page - 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_Template_a_click_19_listener() { return ctx.toPageThree(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Page - 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_Template_a_click_25_listener() { return ctx.toPage4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Page - 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_Template_a_click_31_listener() { return ctx.toPage5(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Page - 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_Template_a_click_37_listener() { return ctx.toPage6(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Page - 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_Template_a_click_43_listener() { return ctx.toPage7(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Page - 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_Template_a_click_49_listener() { return ctx.toPage8(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Page - 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_Template_a_click_55_listener() { return ctx.toPage9(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Page - 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".page[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  line-height: 23px;\n  border: 1px solid black;\n  border-radius: 17px;\n  column-gap: 2%;\n}\n\n.bullshit[_ngcontent-%COMP%] {\n  height: 100vh;\n  background: linear-gradient(178.6deg, #142432 11.8%, #7c8fa1 83.8%);\n}\n\n.ag-format-container[_ngcontent-%COMP%] {\n  width: 1142px;\n  margin: 0 auto;\n}\n\nbody[_ngcontent-%COMP%] {\n  background-color: #000;\n}\n\n.ag-courses_box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  padding: 50px 0;\n}\n\n.ag-courses_item[_ngcontent-%COMP%] {\n  flex-basis: calc(33.33333% - 30px);\n  margin: 0 15px 30px;\n  overflow: hidden;\n  border-radius: 28px;\n}\n\n.ag-courses-item_link[_ngcontent-%COMP%] {\n  display: block;\n  padding: 30px 20px;\n  background-color: #121212;\n  overflow: hidden;\n  position: relative;\n}\n\n.ag-courses-item_link[_ngcontent-%COMP%]:hover, .ag-courses-item_link[_ngcontent-%COMP%]:hover   .ag-courses-item_date[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #FFF;\n}\n\n.ag-courses-item_link[_ngcontent-%COMP%]:hover   .ag-courses-item_bg[_ngcontent-%COMP%] {\n  transform: scale(10);\n}\n\n.ag-courses-item_title[_ngcontent-%COMP%] {\n  min-height: 87px;\n  margin: 0 0 25px;\n  overflow: hidden;\n  font-weight: bold;\n  font-size: 30px;\n  color: #FFF;\n  z-index: 2;\n  position: relative;\n}\n\n.ag-courses-item_date-box[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #FFF;\n  z-index: 2;\n  position: relative;\n}\n\n.ag-courses-item_date[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #f9b234;\n  transition: color 0.5s ease;\n}\n\n.ag-courses-item_bg[_ngcontent-%COMP%] {\n  height: 128px;\n  width: 128px;\n  background-color: #f9b234;\n  z-index: 1;\n  position: absolute;\n  top: -75px;\n  right: -75px;\n  border-radius: 50%;\n  transition: all 0.5s ease;\n}\n\n.ag-courses_item[_ngcontent-%COMP%]:nth-child(2n)   .ag-courses-item_bg[_ngcontent-%COMP%] {\n  background-color: #3ecd5e;\n}\n\n.ag-courses_item[_ngcontent-%COMP%]:nth-child(3n)   .ag-courses-item_bg[_ngcontent-%COMP%] {\n  background-color: #e44002;\n}\n\n.ag-courses_item[_ngcontent-%COMP%]:nth-child(4n)   .ag-courses-item_bg[_ngcontent-%COMP%] {\n  background-color: #952aff;\n}\n\n.ag-courses_item[_ngcontent-%COMP%]:nth-child(5n)   .ag-courses-item_bg[_ngcontent-%COMP%] {\n  background-color: #cd3e94;\n}\n\n.ag-courses_item[_ngcontent-%COMP%]:nth-child(6n)   .ag-courses-item_bg[_ngcontent-%COMP%] {\n  background-color: #4c49ea;\n}\n\n@media only screen and (max-width: 979px) {\n  .ag-courses_item[_ngcontent-%COMP%] {\n    flex-basis: calc(50% - 30px);\n  }\n\n  .ag-courses-item_title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .ag-format-container[_ngcontent-%COMP%] {\n    width: 96%;\n  }\n}\n\n@media only screen and (max-width: 639px) {\n  .ag-courses_item[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n\n  .ag-courses-item_title[_ngcontent-%COMP%] {\n    min-height: 72px;\n    line-height: 1;\n    font-size: 24px;\n  }\n\n  .ag-courses-item_link[_ngcontent-%COMP%] {\n    padding: 22px 40px;\n  }\n\n  .ag-courses-item_date-box[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBSUE7RUFDRSxzQkFBQTtBQURGOztBQUlBO0VBR0UsYUFBQTtFQUdBLHVCQUFBO0VBRUEsZUFBQTtFQUVBLGVBQUE7QUFGRjs7QUFLQTtFQUVFLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTs7RUFFRSxxQkFBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUdFLG9CQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBR0EsMkJBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBR0EseUJBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0FBRkY7O0FBS0E7RUFDRSx5QkFBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0FBRkY7O0FBS0E7RUFDRSx5QkFBQTtBQUZGOztBQUtBO0VBQ0U7SUFFRSw0QkFBQTtFQUZGOztFQUtBO0lBQ0UsZUFBQTtFQUZGO0FBQ0Y7O0FBS0E7RUFDRTtJQUNFLFVBQUE7RUFIRjtBQUNGOztBQU9BO0VBQ0U7SUFFRSxnQkFBQTtFQUxGOztFQVFBO0lBQ0UsZ0JBQUE7SUFDQSxjQUFBO0lBRUEsZUFBQTtFQU5GOztFQVNBO0lBQ0Usa0JBQUE7RUFORjs7RUFTQTtJQUNFLGVBQUE7RUFORjtBQUNGIiwiZmlsZSI6ImhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE3cHg7XHJcbiAgY29sdW1uLWdhcDogMiU7XHJcbn1cclxuXHJcbi5idWxsc2hpdCB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTc4LjZkZWcsIHJnYigyMCwgMzYsIDUwKSAxMS44JSwgcmdiKDEyNCwgMTQzLCAxNjEpIDgzLjglKTtcclxufVxyXG5cclxuLmFnLWZvcm1hdC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMTQycHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG59XHJcblxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmFnLWNvdXJzZXNfYm94IHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcclxuICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gIHBhZGRpbmc6IDUwcHggMDtcclxufVxyXG5cclxuLmFnLWNvdXJzZXNfaXRlbSB7XHJcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IGNhbGMoMzMuMzMzMzMlIC0gMzBweCk7XHJcbiAgZmxleC1iYXNpczogY2FsYygzMy4zMzMzMyUgLSAzMHB4KTtcclxuICBtYXJnaW46IDAgMTVweCAzMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcclxufVxyXG5cclxuLmFnLWNvdXJzZXMtaXRlbV9saW5rIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAzMHB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmFnLWNvdXJzZXMtaXRlbV9saW5rOmhvdmVyLFxyXG4uYWctY291cnNlcy1pdGVtX2xpbms6aG92ZXIgLmFnLWNvdXJzZXMtaXRlbV9kYXRlIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbi5hZy1jb3Vyc2VzLWl0ZW1fbGluazpob3ZlciAuYWctY291cnNlcy1pdGVtX2JnIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMTApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEwKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEwKTtcclxufVxyXG5cclxuLmFnLWNvdXJzZXMtaXRlbV90aXRsZSB7XHJcbiAgbWluLWhlaWdodDogODdweDtcclxuICBtYXJnaW46IDAgMCAyNXB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiAjRkZGO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYWctY291cnNlcy1pdGVtX2RhdGUtYm94IHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgei1pbmRleDogMjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5hZy1jb3Vyc2VzLWl0ZW1fZGF0ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICNmOWIyMzQ7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAuNXMgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiBjb2xvciAuNXMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAuNXMgZWFzZVxyXG59XHJcblxyXG4uYWctY291cnNlcy1pdGVtX2JnIHtcclxuICBoZWlnaHQ6IDEyOHB4O1xyXG4gIHdpZHRoOiAxMjhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjliMjM0O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTc1cHg7XHJcbiAgcmlnaHQ6IC03NXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG59XHJcblxyXG4uYWctY291cnNlc19pdGVtOm50aC1jaGlsZCgybikgLmFnLWNvdXJzZXMtaXRlbV9iZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlY2Q1ZTtcclxufVxyXG5cclxuLmFnLWNvdXJzZXNfaXRlbTpudGgtY2hpbGQoM24pIC5hZy1jb3Vyc2VzLWl0ZW1fYmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNDQwMDI7XHJcbn1cclxuXHJcbi5hZy1jb3Vyc2VzX2l0ZW06bnRoLWNoaWxkKDRuKSAuYWctY291cnNlcy1pdGVtX2JnIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTUyYWZmO1xyXG59XHJcblxyXG4uYWctY291cnNlc19pdGVtOm50aC1jaGlsZCg1bikgLmFnLWNvdXJzZXMtaXRlbV9iZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkM2U5NDtcclxufVxyXG5cclxuLmFnLWNvdXJzZXNfaXRlbTpudGgtY2hpbGQoNm4pIC5hZy1jb3Vyc2VzLWl0ZW1fYmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzQ5ZWE7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTc5cHgpIHtcclxuICAuYWctY291cnNlc19pdGVtIHtcclxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiBjYWxjKDUwJSAtIDMwcHgpO1xyXG4gICAgZmxleC1iYXNpczogY2FsYyg1MCUgLSAzMHB4KTtcclxuICB9XHJcblxyXG4gIC5hZy1jb3Vyc2VzLWl0ZW1fdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5hZy1mb3JtYXQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5NiU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xyXG4gIC5hZy1jb3Vyc2VzX2l0ZW0ge1xyXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XHJcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmFnLWNvdXJzZXMtaXRlbV90aXRsZSB7XHJcbiAgICBtaW4taGVpZ2h0OiA3MnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcblxyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgLmFnLWNvdXJzZXMtaXRlbV9saW5rIHtcclxuICAgIHBhZGRpbmc6IDIycHggNDBweDtcclxuICB9XHJcblxyXG4gIC5hZy1jb3Vyc2VzLWl0ZW1fZGF0ZS1ib3gge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "LlTZ":
/*!***************************************************************!*\
  !*** ./src/app/components/test7-page/test7-page.component.ts ***!
  \***************************************************************/
/*! exports provided: Test7PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test7PageComponent", function() { return Test7PageComponent; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function Test7PageComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2);
} }
function Test7PageComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3);
} }
class Test7PageComponent {
    // handstatement = [
    //   {
    //     id: 1,
    //     step: 'Get A Detailed Walkthrough On the Current States Of Various      Responsibilities Handled By The Person Who is Handled By The Person Who is Handling Over',
    //     feedback: 'Yes',
    //   },
    //   {
    //     id: 2,
    //     step: 'Get A Detailed Walkthrough On the Current States Of Various      Responsibilities Handled By The Person Who is Handled By The Person Who is Handling Over',
    //     feedback: 'Yes',
    //   },
    //   {
    //     id: 3,
    //     step: 'Get A Detailed Walkthrough On the Current States Of Various      Responsibilities Handled By The Person Who is Handled By The Person Who is Handling Over',
    //     feedback: 'Yes',
    //   },
    //   {
    //     id: 4,
    //     step: 'Get A Detailed Walkthrough On the Current States Of Various      Responsibilities Handled By The Person Who is Handled By The Person Who is Handling Over',
    //     feedback: 'No',
    //   },
    //   {
    //     id: 5,
    //     step: 'Get A Detailed Walkthrough On the Current States Of Various      Responsibilities Handled By The Person Who is Handled By The Person Who is Handling Over',
    //     feedback: 'Yes',
    //   },
    // ];
    // options = [
    //   {
    //     id: 1,
    //     option: 'Yes',
    //   },
    //   {
    //     id: 2,
    //     option: 'No'
    //   },
    //   {
    //     id: 3,
    //     option: 'N / A'
    //   }
    // ];
    constructor() {
        this.todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
        this.done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
    }
    ngOnInit() {
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            console.log(this.todo, 'Todo');
            console.log(this.done, 'done');
        }
    }
}
Test7PageComponent.ɵfac = function Test7PageComponent_Factory(t) { return new (t || Test7PageComponent)(); };
Test7PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Test7PageComponent, selectors: [["app-test7-page"]], decls: 11, vars: 4, consts: [["cdkDropListGroup", ""], [1, "example-container"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListData", "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box"]], template: function Test7PageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "To do");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function Test7PageComponent_Template_div_cdkDropListDropped_4_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, Test7PageComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function Test7PageComponent_Template_div_cdkDropListDropped_9_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, Test7PageComponent_div_10_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDropListData", ctx.todo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.todo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDropListData", ctx.done);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.done);
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropListGroup"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"]], styles: [".back-btn[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #000000;\n  border: none;\n  height: 40px;\n  display: flex;\n  padding: 3px 10px;\n  justify-content: flex-start;\n  background: none;\n  border-radius: 4px;\n}\n\n.handover-approve[_ngcontent-%COMP%] {\n  border: 1px solid #52C41A;\n  text-transform: capitalize;\n  height: 40px;\n  display: flex;\n  line-height: 33px;\n  padding: 3px 10px;\n  justify-content: flex-start;\n  font-weight: 400;\n  font-size: 12px;\n  letter-spacing: -0.02em;\n  background: rgba(0, 148, 50, 0.07);\n  border-radius: 4px;\n}\n\n  .mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: none;\n}\n\n.docs-header[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #000000;\n}\n\n.option-handover[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  letter-spacing: 0.02em;\n  color: #000000;\n}\n\n.ScrollStyle[_ngcontent-%COMP%] {\n  max-height: 64vh;\n  overflow-y: scroll;\n}\n\n  .input {\n  outline: none !important;\n  box-shadow: none !important;\n}\n\n.option-handoverform[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.option-handoverform[_ngcontent-%COMP%]   .feedback-to-manager[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  align-items: center;\n  letter-spacing: 0.02em;\n  color: #000000;\n}\n\n.option-handoverform[_ngcontent-%COMP%]   .feedback-to-manager[_ngcontent-%COMP%]   .remarks-textfield[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2%;\n  align-items: center;\n  width: 50%;\n  margin-left: 1%;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0ZXN0Ny1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdsQkE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBL2tCSjs7QUFrbEJBO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FBL2tCSjs7QUFrbEJBO0VBQ0ksZ0JBQUE7QUEva0JKOztBQWtsQkE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQS9rQko7O0FBa2xCQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQS9rQko7O0FBa2xCQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUEva0JKOztBQWtsQkE7RUFDSSx3QkFBQTtFQUNBLDJCQUFBO0FBL2tCSjs7QUF3bkJBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFybkJKOztBQXVuQkk7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFybkJSOztBQXVuQlE7RUFDSSxhQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFybkJaOztBQTZuQkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQTFuQko7O0FBNm5CRTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBMW5CSjs7QUE2bkJFO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQTFuQko7O0FBNm5CRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtBQTFuQko7O0FBK25CRTtFQUNFLFVBQUE7QUE1bkJKOztBQStuQkU7RUFDRSxzREFBQTtBQTVuQko7O0FBK25CRTtFQUNFLFlBQUE7QUE1bkJKOztBQStuQkU7RUFDRSxzREFBQTtBQTVuQkoiLCJmaWxlIjoidGVzdDctcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5tYWluIHtcclxuLy8gICAgIGRpc3BsYXk6IGdyaWQ7XHJcbi8vICAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGhlaWdodDogMTAwdmg7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjRjBFNjhDXHJcbi8vIH1cclxuXHJcbi8vIC5oZWFkZXJ7XHJcbi8vICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuLy8gICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbi8vIH1cclxuXHJcbi8vIC8qICMjIyBMT0dJQyAjIyMjIyMjIyMjIyMjIyMjICovXHJcbi8vIC5udW1iZXI5Kyoge1xyXG4vLyAgICAgLS1kaWdpdDogMDtcclxuLy8gfVxyXG5cclxuLy8gLm51bWJlcjA6Y2hlY2tlZCsqKyorKisqKyorKisqKyorKisqIHtcclxuLy8gICAgIC0tZGlnaXQ6IDA7XHJcbi8vIH1cclxuXHJcbi8vIC5udW1iZXIxOmNoZWNrZWQrKisqKyorKisqKyorKisqKyoge1xyXG4vLyAgICAgLS1kaWdpdDogMTtcclxuLy8gfVxyXG5cclxuLy8gLm51bWJlcjI6Y2hlY2tlZCsqKyorKisqKyorKisqKyoge1xyXG4vLyAgICAgLS1kaWdpdDogMjtcclxuLy8gfVxyXG5cclxuLy8gLm51bWJlcjM6Y2hlY2tlZCsqKyorKisqKyorKisqIHtcclxuLy8gICAgIC0tZGlnaXQ6IDM7XHJcbi8vIH1cclxuXHJcbi8vIC5udW1iZXI0OmNoZWNrZWQrKisqKyorKisqKyoge1xyXG4vLyAgICAgLS1kaWdpdDogNDtcclxuLy8gfVxyXG5cclxuLy8gLm51bWJlcjU6Y2hlY2tlZCsqKyorKisqKyoge1xyXG4vLyAgICAgLS1kaWdpdDogNTtcclxuLy8gfVxyXG5cclxuLy8gLm51bWJlcjY6Y2hlY2tlZCsqKyorKisqIHtcclxuLy8gICAgIC0tZGlnaXQ6IDY7XHJcbi8vIH1cclxuXHJcbi8vIC5udW1iZXI3OmNoZWNrZWQrKisqKyoge1xyXG4vLyAgICAgLS1kaWdpdDogNztcclxuLy8gfVxyXG5cclxuLy8gLm51bWJlcjg6Y2hlY2tlZCsqKyoge1xyXG4vLyAgICAgLS1kaWdpdDogODtcclxuLy8gfVxyXG5cclxuLy8gLm51bWJlcjk6Y2hlY2tlZCsqIHtcclxuLy8gICAgIC0tZGlnaXQ6IDk7XHJcbi8vIH1cclxuXHJcbi8vICNkaWdpdDE+IDpjaGVja2VkfiA6bGFzdC1jaGlsZCB7XHJcbi8vICAgICAtLWRpZ2l0LTE6IHZhcigtLWRpZ2l0KTtcclxuLy8gICAgIC0tdmFsdWUtMTogdmFyKC0tZGlnaXQpO1xyXG4vLyB9XHJcblxyXG4vLyAjZGlnaXQyPiA6Y2hlY2tlZH4gOmxhc3QtY2hpbGQge1xyXG4vLyAgICAgLS1kaWdpdC0yOiB2YXIoLS1kaWdpdCk7XHJcbi8vICAgICAtLXZhbHVlLTE6IGNhbGModmFyKC0tZGlnaXQtMSkgKiAxMCArIHZhcigtLWRpZ2l0LTIpKTtcclxuLy8gfVxyXG5cclxuLy8gI2RpZ2l0Mz4gOmNoZWNrZWR+IDpsYXN0LWNoaWxkIHtcclxuLy8gICAgIC0tZGlnaXQtMzogdmFyKC0tZGlnaXQpO1xyXG4vLyAgICAgLS12YWx1ZS0xOiBjYWxjKHZhcigtLWRpZ2l0LTEpICogMTAwICsgdmFyKC0tZGlnaXQtMikgKiAxMCArIHZhcigtLWRpZ2l0LTMpKTtcclxuLy8gfVxyXG5cclxuLy8gI2RpZ2l0ND4gOmNoZWNrZWR+IDpsYXN0LWNoaWxkIHtcclxuLy8gICAgIC0tZGlnaXQtNDogdmFyKC0tZGlnaXQpO1xyXG4vLyAgICAgLS12YWx1ZS0xOiBjYWxjKHZhcigtLWRpZ2l0LTEpICogMTAwMCArIHZhcigtLWRpZ2l0LTIpICogMTAwICsgdmFyKC0tZGlnaXQtMykgKiAxMCArIHZhcigtLWRpZ2l0LTQpKTtcclxuLy8gfVxyXG5cclxuLy8gI2RpZ2l0NT4gOmNoZWNrZWR+IDpsYXN0LWNoaWxkIHtcclxuLy8gICAgIC0tZGlnaXQtNTogdmFyKC0tZGlnaXQpO1xyXG4vLyAgICAgLS12YWx1ZS0yOiB2YXIoLS1kaWdpdC01KTtcclxuLy8gfVxyXG5cclxuLy8gI2RpZ2l0Nj4gOmNoZWNrZWR+IDpsYXN0LWNoaWxkIHtcclxuLy8gICAgIC0tZGlnaXQtNjogdmFyKC0tZGlnaXQpO1xyXG4vLyAgICAgLS12YWx1ZS0yOiBjYWxjKHZhcigtLWRpZ2l0LTUpICogMTAgKyB2YXIoLS1kaWdpdC02KSk7XHJcbi8vIH1cclxuXHJcbi8vICNkaWdpdDc+IDpjaGVja2VkfiA6bGFzdC1jaGlsZCB7XHJcbi8vICAgICAtLWRpZ2l0LTc6IHZhcigtLWRpZ2l0KTtcclxuLy8gICAgIC0tdmFsdWUtMjogY2FsYyh2YXIoLS1kaWdpdC01KSAqIDEwMCArIHZhcigtLWRpZ2l0LTYpICogMTAgKyB2YXIoLS1kaWdpdC03KSk7XHJcbi8vIH1cclxuXHJcbi8vICNkaWdpdDg+IDpjaGVja2VkfiA6bGFzdC1jaGlsZCB7XHJcbi8vICAgICAtLWRpZ2l0LTg6IHZhcigtLWRpZ2l0KTtcclxuLy8gICAgIC0tdmFsdWUtMjogY2FsYyh2YXIoLS1kaWdpdC01KSAqIDEwMDAgKyB2YXIoLS1kaWdpdC02KSAqIDEwMCArIHZhcigtLWRpZ2l0LTcpICogMTAgKyB2YXIoLS1kaWdpdC04KSk7XHJcbi8vIH1cclxuXHJcbi8vICNhZGQ6Y2hlY2tlZH4jZXF1YWxzOmNoZWNrZWR+bWFpbiB7XHJcbi8vICAgICAtLW91dDogY2FsYyh2YXIoLS12YWx1ZS0xKSArIHZhcigtLXZhbHVlLTIpKTtcclxuLy8gfVxyXG5cclxuLy8gI3N1YnRyYWN0OmNoZWNrZWR+I2VxdWFsczpjaGVja2Vkfm1haW4ge1xyXG4vLyAgICAgLS1vdXQ6IGNhbGModmFyKC0tdmFsdWUtMSkgLSB2YXIoLS12YWx1ZS0yKSk7XHJcbi8vIH1cclxuXHJcbi8vICNtdWx0aXBseTpjaGVja2VkfiNlcXVhbHM6Y2hlY2tlZH5tYWluIHtcclxuLy8gICAgIC0tb3V0OiBjYWxjKHZhcigtLXZhbHVlLTEpICogdmFyKC0tdmFsdWUtMikpO1xyXG4vLyB9XHJcblxyXG4vLyAjZGl2aWRlOmNoZWNrZWR+I2VxdWFsczpjaGVja2Vkfm1haW4ge1xyXG4vLyAgICAgLS1vdXQ6IGNhbGModmFyKC0tdmFsdWUtMSkgLyB2YXIoLS12YWx1ZS0yKSk7XHJcbi8vIH1cclxuXHJcbi8vIG1haW4ge1xyXG4vLyAgICAgY291bnRlci1yZXNldDogdmFsdWUxIHZhcigtLXZhbHVlLTEsIDApIHZhbHVlMiB2YXIoLS12YWx1ZS0yLCAwKSBvdXQgdmFyKC0tb3V0LCAwKTtcclxuLy8gfVxyXG5cclxuLy8gLyogICAgYVxyXG4vLyAqL1xyXG4vLyAjaW5wdXQ6OmFmdGVyIHtcclxuLy8gICAgIGNvbnRlbnQ6IFwiXCI7XHJcbi8vIH1cclxuXHJcbi8vICNvdXRwdXQ6OmFmdGVyIHtcclxuLy8gICAgIGNvbnRlbnQ6IGNvdW50ZXIodmFsdWUxKTtcclxuLy8gfVxyXG5cclxuLy8gLyogICAgYVxyXG4vLyAgICAgICArXHJcbi8vICovXHJcbi8vICNvcGVyYXRpb25zPiA6Y2hlY2tlZH4jZXF1YWxzOm5vdCg6Y2hlY2tlZCl+bWFpbiAjaW5wdXQ6OmFmdGVyIHtcclxuLy8gICAgIGNvbnRlbnQ6IGNvdW50ZXIodmFsdWUxKTtcclxuLy8gfVxyXG5cclxuLy8gI2FkZDpjaGVja2VkfiNlcXVhbHM6bm90KDpjaGVja2VkKX5tYWluICNvdXRwdXQ6OmFmdGVyIHtcclxuLy8gICAgIGNvbnRlbnQ6IFwiK1wiO1xyXG4vLyB9XHJcblxyXG4vLyAjc3VidHJhY3Q6Y2hlY2tlZH4jZXF1YWxzOm5vdCg6Y2hlY2tlZCl+bWFpbiAjb3V0cHV0OjphZnRlciB7XHJcbi8vICAgICBjb250ZW50OiBcIi1cIjtcclxuLy8gfVxyXG5cclxuLy8gI211bHRpcGx5OmNoZWNrZWR+I2VxdWFsczpub3QoOmNoZWNrZWQpfm1haW4gI291dHB1dDo6YWZ0ZXIge1xyXG4vLyAgICAgY29udGVudDogXCJcXDAwRDdcIjtcclxuLy8gfVxyXG5cclxuLy8gI2RpdmlkZTpjaGVja2VkfiNlcXVhbHM6bm90KDpjaGVja2VkKX5tYWluICNvdXRwdXQ6OmFmdGVyIHtcclxuLy8gICAgIGNvbnRlbnQ6IFwiXFwwMGY3XCI7XHJcbi8vIH1cclxuXHJcbi8vIC8qICAgYSArXHJcbi8vICAgICAgICBiXHJcbi8vICovXHJcbi8vICNkaWdpdDUgOmNoZWNrZWR+ZGl2ICNhZGQ6Y2hlY2tlZH4jZXF1YWxzOm5vdCg6Y2hlY2tlZCl+bWFpbiAjaW5wdXQ6OmFmdGVyIHtcclxuLy8gICAgIGNvbnRlbnQ6IGNvdW50ZXIodmFsdWUxKSBcIiArIFwiO1xyXG4vLyB9XHJcblxyXG4vLyAjZGlnaXQ1IDpjaGVja2VkfmRpdiAjc3VidHJhY3Q6Y2hlY2tlZH4jZXF1YWxzOm5vdCg6Y2hlY2tlZCl+bWFpbiAjaW5wdXQ6OmFmdGVyIHtcclxuLy8gICAgIGNvbnRlbnQ6IGNvdW50ZXIodmFsdWUxKSBcIiAtIFwiO1xyXG4vLyB9XHJcblxyXG4vLyAjZGlnaXQ1IDpjaGVja2VkfmRpdiAjbXVsdGlwbHk6Y2hlY2tlZH4jZXF1YWxzOm5vdCg6Y2hlY2tlZCl+bWFpbiAjaW5wdXQ6OmFmdGVyIHtcclxuLy8gICAgIGNvbnRlbnQ6IGNvdW50ZXIodmFsdWUxKSBcIiBcXDAwRDcgIFwiO1xyXG4vLyB9XHJcblxyXG4vLyAjZGlnaXQ1IDpjaGVja2VkfmRpdiAjZGl2aWRlOmNoZWNrZWR+I2VxdWFsczpub3QoOmNoZWNrZWQpfm1haW4gI2lucHV0OjphZnRlciB7XHJcbi8vICAgICBjb250ZW50OiBjb3VudGVyKHZhbHVlMSkgXCIgXFwwMGY3IFwiO1xyXG4vLyB9XHJcblxyXG4vLyAjZGlnaXQ1IDpjaGVja2VkfmRpdiAjb3BlcmF0aW9ucz4gOmNoZWNrZWR+I2VxdWFsczpub3QoOmNoZWNrZWQpfm1haW4gI291dHB1dDo6YWZ0ZXIsXHJcbi8vICNkaWdpdDUgOmNoZWNrZWR+I29wZXJhdGlvbnM+IDpjaGVja2VkfiNlcXVhbHM6bm90KDpjaGVja2VkKX5tYWluICNvdXRwdXQ6OmFmdGVyIHtcclxuLy8gICAgIGNvbnRlbnQ6IGNvdW50ZXIodmFsdWUyKTtcclxuLy8gfVxyXG5cclxuLy8gLyogYSArIGJcclxuLy8gICAgICAgIGNcclxuLy8gKi9cclxuLy8gI2FkZDpjaGVja2VkfiNlcXVhbHM6Y2hlY2tlZH5tYWluICNpbnB1dDo6YWZ0ZXIge1xyXG4vLyAgICAgY29udGVudDogY291bnRlcih2YWx1ZTEpIFwiICsgXCIgY291bnRlcih2YWx1ZTIpO1xyXG4vLyB9XHJcblxyXG4vLyAjc3VidHJhY3Q6Y2hlY2tlZH4jZXF1YWxzOmNoZWNrZWR+bWFpbiAjaW5wdXQ6OmFmdGVyIHtcclxuLy8gICAgIGNvbnRlbnQ6IGNvdW50ZXIodmFsdWUxKSBcIiAtIFwiIGNvdW50ZXIodmFsdWUyKTtcclxuLy8gfVxyXG5cclxuLy8gI211bHRpcGx5OmNoZWNrZWR+I2VxdWFsczpjaGVja2Vkfm1haW4gI2lucHV0OjphZnRlciB7XHJcbi8vICAgICBjb250ZW50OiBjb3VudGVyKHZhbHVlMSkgXCIgXFwwMEQ3ICBcIiBjb3VudGVyKHZhbHVlMik7XHJcbi8vIH1cclxuXHJcbi8vICNkaXZpZGU6Y2hlY2tlZH4jZXF1YWxzOmNoZWNrZWR+bWFpbiAjaW5wdXQ6OmFmdGVyIHtcclxuLy8gICAgIGNvbnRlbnQ6IGNvdW50ZXIodmFsdWUxKSBcIiBcXDAwZjcgIFwiIGNvdW50ZXIodmFsdWUyKTtcclxuLy8gfVxyXG5cclxuXHJcbi8vICNlcXVhbHM6Y2hlY2tlZH5tYWluICNvdXRwdXQ6OmFmdGVyIHtcclxuLy8gICAgIGNvbnRlbnQ6IGNvdW50ZXIob3V0KTtcclxuLy8gfVxyXG5cclxuLy8gLyogZGl2aWRpbmcgYnkgMCAqL1xyXG4vLyAjZGlnaXQ1Pi5udW1iZXIwOmNoZWNrZWR+ZGl2ICNkaXZpZGU6Y2hlY2tlZH4jZXF1YWxzOmNoZWNrZWR+bWFpbiAjb3V0cHV0OjphZnRlciB7XHJcbi8vICAgICBjb250ZW50OiBcIk9pXCI7XHJcbi8vIH1cclxuXHJcbi8vICNkaWdpdDU+Lm51bWJlcjA6Y2hlY2tlZH5kaXYgI2RpdmlkZTpjaGVja2VkfiNlcXVhbHM6Y2hlY2tlZH5tYWluICNvdXRwdXQ6OmFmdGVyIHtcclxuLy8gICAgIGNvbnRlbnQ6IFwiT2lcIjtcclxuLy8gfVxyXG5cclxuLy8gI2RpZ2l0NSA6bm90KC5udW1iZXIwKTpjaGVja2VkfmRpdiAjZGl2aWRlOmNoZWNrZWR+I2VxdWFsczpjaGVja2Vkfm1haW4gI291dHB1dDo6YWZ0ZXIge1xyXG4vLyAgICAgY29udGVudDogY291bnRlcihvdXQpO1xyXG4vLyB9XHJcblxyXG4vLyBidXR0b24ge1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgYm9yZGVyOiBub25lO1xyXG4vLyB9XHJcblxyXG4vLyBsYWJlbCB7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgbGVmdDogMDtcclxuLy8gICAgIHRvcDogMDtcclxuLy8gfVxyXG5cclxuLy8gbGFiZWwuZGlnaXQ1LFxyXG4vLyBsYWJlbC5kaWdpdDYsXHJcbi8vIGxhYmVsLmRpZ2l0NyxcclxuLy8gbGFiZWwuZGlnaXQ4IHtcclxuLy8gICAgIGRpc3BsYXk6IG5vbmU7XHJcbi8vIH1cclxuXHJcbi8vICNvcGVyYXRpb25zPiA6Y2hlY2tlZH5tYWluIGxhYmVsIHtcclxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyB9XHJcblxyXG4vLyAjZGlnaXQxPiA6Y2hlY2tlZH5kaXYgbGFiZWwuZGlnaXQxIHtcclxuLy8gICAgIGRpc3BsYXk6IG5vbmU7XHJcbi8vIH1cclxuXHJcbi8vICNkaWdpdDI+IDpjaGVja2VkfmRpdiBsYWJlbC5kaWdpdDIge1xyXG4vLyAgICAgZGlzcGxheTogbm9uZTtcclxuLy8gfVxyXG5cclxuLy8gI2RpZ2l0Mz4gOmNoZWNrZWR+ZGl2IGxhYmVsLmRpZ2l0MyB7XHJcbi8vICAgICBkaXNwbGF5OiBub25lO1xyXG4vLyB9XHJcblxyXG4vLyAjZGlnaXQ0PiA6Y2hlY2tlZH5kaXYgbGFiZWwuZGlnaXQ0IHtcclxuLy8gICAgIGRpc3BsYXk6IG5vbmU7XHJcbi8vIH1cclxuXHJcbi8vICNkaWdpdDU+IDpjaGVja2VkfmRpdiBsYWJlbC5kaWdpdDUge1xyXG4vLyAgICAgZGlzcGxheTogbm9uZTtcclxuLy8gfVxyXG5cclxuLy8gI2RpZ2l0Nj4gOmNoZWNrZWR+ZGl2IGxhYmVsLmRpZ2l0NiB7XHJcbi8vICAgICBkaXNwbGF5OiBub25lO1xyXG4vLyB9XHJcblxyXG4vLyAjZGlnaXQ3PiA6Y2hlY2tlZH5kaXYgbGFiZWwuZGlnaXQ3IHtcclxuLy8gICAgIGRpc3BsYXk6IG5vbmU7XHJcbi8vIH1cclxuXHJcbi8vICNkaWdpdDg+IDpjaGVja2VkfmRpdiBsYWJlbC5kaWdpdDgge1xyXG4vLyAgICAgZGlzcGxheTogbm9uZTtcclxuLy8gfVxyXG5cclxuLy8gI29wZXJhdGlvbnM+IDpjaGVja2VkfiNlcXVhbHM6bm90KDpjaGVja2VkKX5tYWluIGxhYmVsOm50aC1jaGlsZChuICsgNCkge1xyXG4vLyAgICAgZGlzcGxheTogbm9uZTtcclxuLy8gfVxyXG5cclxuLy8gI29wZXJhdGlvbnM+IDpjaGVja2VkfiNlcXVhbHM6bm90KDpjaGVja2VkKX5tYWluIGxhYmVsLmRpZ2l0NSB7XHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gfVxyXG5cclxuLy8gI29wZXJhdGlvbnM+IDpjaGVja2VkfiNlcXVhbHM6Y2hlY2tlZH5tYWluIGxhYmVsIHtcclxuLy8gICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gI2RpZ2l0NT4gOmNoZWNrZWR+ZGl2ICNvcGVyYXRpb25zPiA6Y2hlY2tlZH4jZXF1YWxzOm5vdCg6Y2hlY2tlZCl+bWFpbiBsYWJlbC5kaWdpdDUge1xyXG4vLyAgICAgZGlzcGxheTogbm9uZTtcclxuLy8gfVxyXG5cclxuLy8gI2RpZ2l0NT4ubnVtYmVyMDpjaGVja2VkfmRpdiAjb3BlcmF0aW9ucz4gOmNoZWNrZWR+I2VxdWFsczpub3QoOmNoZWNrZWQpfm1haW4gbGFiZWwuZGlnaXQ1IHtcclxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyB9XHJcblxyXG4vLyAjZGlnaXQ1Pi5udW1iZXIwOmNoZWNrZWR+IDpjaGVja2VkfmRpdiAjb3BlcmF0aW9ucz4gOmNoZWNrZWR+I2VxdWFsczpub3QoOmNoZWNrZWQpfm1haW4gbGFiZWwuZGlnaXQ1IHtcclxuLy8gICAgIGRpc3BsYXk6IG5vbmU7XHJcbi8vIH1cclxuXHJcbi8vIGxhYmVsW2Zvcj1lcXVhbHNdIHtcclxuLy8gICAgIGRpc3BsYXk6IG5vbmU7XHJcbi8vIH1cclxuXHJcbi8vICNkaWdpdDU+IDpjaGVja2VkfmRpdiAjb3BlcmF0aW9ucz4gOmNoZWNrZWR+I2VxdWFsc35tYWluIGxhYmVsW2Zvcj1lcXVhbHNdIHtcclxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyB9XHJcblxyXG4vLyAjb3BlcmF0aW9ucz4gOmNoZWNrZWR+bWFpbiBidXR0b246bnRoLWNoaWxkKDRuKSBsYWJlbCB7XHJcbi8vICAgICBkaXNwbGF5OiBub25lO1xyXG4vLyB9XHJcblxyXG4vLyAjZGlnaXQ1Pi5udW1iZXIwOmNoZWNrZWR+ZGl2IG1haW4gYnV0dG9uOm50aC1jaGlsZCgxNCkgbGFiZWwge1xyXG4vLyAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbi8vIH1cclxuXHJcbi8vICNkaWdpdDU+Lm51bWJlcjA6Y2hlY2tlZH4gOmNoZWNrZWR+ZGl2IG1haW4gYnV0dG9uOm50aC1jaGlsZCgxNCkgbGFiZWwge1xyXG4vLyAgICAgcG9pbnRlci1ldmVudHM6IGluaXRpYWw7XHJcbi8vIH1cclxuXHJcbi8vIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcclxuLy8gICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuLy8gICAgIHJpZ2h0OiAwO1xyXG4vLyAgICAgdG9wOiAwO1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICB3aWR0aDogMXB4O1xyXG4vLyAgICAgaGVpZ2h0OiAxcHg7XHJcbi8vICAgICBvcGFjaXR5OiAwLjAxO1xyXG4vLyAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjAxKTtcclxuLy8gfVxyXG5cclxuLy8gLyogIyMjIERFU0lHTiAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXHJcbi8vIGJvZHkge1xyXG4vLyAgICAgZm9udDogMjBweCAvIDEuNSBSb2JvdG8sIGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4vLyAgICAgaGVpZ2h0OiAxMDB2aDtcclxuLy8gICAgIHdpZHRoOiAxMDB2dztcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICBtYXJnaW46IDA7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBraGFraTtcclxuLy8gfVxyXG5cclxuLy8gbWFpbiB7XHJcbi8vICAgICB3aWR0aDogMTAwdnc7XHJcbi8vICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4vLyAgICAgaGVpZ2h0OiAxMDB2aDtcclxuLy8gICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4vLyAgICAgbWF4LWhlaWdodDogNjAwcHg7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcclxuLy8gICAgICAgICAwIDVweCAyMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDgpLFxyXG4vLyAgICAgICAgIDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmNWViO1xyXG4vLyB9XHJcblxyXG4vLyAjc2NyZWVuIHtcclxuLy8gICAgIGhlaWdodDogMjUwcHg7XHJcbi8vICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuLy8gICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbi8vIH1cclxuXHJcbi8vICNpbnB1dCB7XHJcbi8vICAgICBoZWlnaHQ6IDUwcHg7XHJcbi8vICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuLy8gICAgIHBhZGRpbmc6IDUwcHggMzZweCAwO1xyXG4vLyB9XHJcblxyXG4vLyAjb3V0cHV0IHtcclxuLy8gICAgIGhlaWdodDogMTUwcHg7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMTAwcHg7XHJcbi8vICAgICBwYWRkaW5nOiAwIDM2cHg7XHJcbi8vICAgICBmb250LXNpemU6IDgwcHg7XHJcbi8vIH1cclxuXHJcbi8vICNidXR0b25zIHtcclxuLy8gICAgIGZsZXg6IDE7XHJcbi8vICAgICBkaXNwbGF5OiBncmlkO1xyXG4vLyAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuLy8gICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG4vLyB9XHJcblxyXG5cclxuLy8gYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxyXG4vLyBpbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XHJcbi8vICAgICBib3JkZXI6IDA7XHJcbi8vIH1cclxuXHJcbi8vIGJ1dHRvbiB7XHJcbi8vICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4vLyAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuLy8gICAgIGZvbnQtc2l6ZTogMjBweDtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4vLyAgICAgb3V0bGluZTogbm9uZTtcclxuLy8gICAgIHBhZGRpbmc6IDA7XHJcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyB9XHJcblxyXG4vLyBidXR0b246OmFmdGVyIHtcclxuLy8gICAgIGNvbnRlbnQ6IFwiXCI7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbi8vICAgICBvcGFjaXR5OiAwO1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICBsZWZ0OiAwO1xyXG4vLyAgICAgdG9wOiAwO1xyXG4vLyAgICAgdHJhbnNpdGlvbjogLjJzO1xyXG4vLyAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbi8vIH1cclxuXHJcbi8vIGJ1dHRvbjpob3Zlcjo6YWZ0ZXIge1xyXG4vLyAgICAgb3BhY2l0eTogMTtcclxuLy8gfVxyXG5cclxuLy8gYnV0dG9uOjpiZWZvcmUge1xyXG4vLyAgICAgY29udGVudDogXCJcIjtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuLy8gICAgIHdpZHRoOiAxMDBweDtcclxuLy8gICAgIGhlaWdodDogMTAwcHg7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICBsZWZ0OiA1MCU7XHJcbi8vICAgICB0b3A6IDUwJTtcclxuLy8gICAgIG9wYWNpdHk6IDA7XHJcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjgpO1xyXG4vLyAgICAgdHJhbnNpdGlvbjogLjNzO1xyXG4vLyAgICAgYW5pbWF0aW9uOiAuMnMgMHMgMSBibG9vcDtcclxuLy8gICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4vLyB9XHJcblxyXG4vLyBAa2V5ZnJhbWVzIGJsb29wIHtcclxuLy8gICAgIGZyb20ge1xyXG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4vLyAgICAgICAgIG9wYWNpdHk6IDE7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgdG8ge1xyXG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuNik7XHJcbi8vICAgICAgICAgb3BhY2l0eTogMDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gYnV0dG9uOmFjdGl2ZTo6YmVmb3JlIHtcclxuLy8gICAgIG9wYWNpdHk6IDE7XHJcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuLy8gICAgIGFuaW1hdGlvbjogbm9uZTtcclxuLy8gfVxyXG5cclxuLy8gYnV0dG9uOm50aC1jaGlsZCg0bikge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZTY2MDtcclxuLy8gICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbi8vIH1cclxuXHJcbi8vIGJ1dHRvbjpudGgtY2hpbGQoNG4pOjphZnRlcixcclxuLy8gYnV0dG9uOm50aC1jaGlsZCg0bik6OmJlZm9yZSB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMSwgMTA0LCA2LCAwLjEpO1xyXG4vLyB9XHJcblxyXG4vLyBidXR0b24sXHJcbi8vIGJ1dHRvbiAqIHtcclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gfVxyXG5cclxuXHJcbi8vIGJ1dHRvbjpudGgtY2hpbGQoMTMpIHtcclxuLy8gICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4vLyB9XHJcblxyXG4vLyBidXR0b246bnRoLWNoaWxkKDEzKTo6YmVmb3JlLFxyXG4vLyBidXR0b246bnRoLWNoaWxkKDEzKTo6YWZ0ZXIge1xyXG4vLyAgICAgY29udGVudDogbm9uZTtcclxuLy8gfVxyXG5cclxuLy8gaW5wdXRbdHlwZT1yZXNldF0ge1xyXG4vLyAgICAgYmFja2dyb3VuZDogI2Y0ZTY2MDtcclxuLy8gICAgIGJvcmRlcjogbm9uZTtcclxuLy8gICAgIHdpZHRoOiA4MHB4O1xyXG4vLyAgICAgaGVpZ2h0OiA4MHB4O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgdG9wOiA1MCU7XHJcbi8vICAgICBsZWZ0OiA1MCU7XHJcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuLy8gICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbi8vICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbi8vICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuLy8gICAgIHBhZGRpbmc6IDA7XHJcbi8vICAgICBvdXRsaW5lOiBub25lO1xyXG4vLyAgICAgdHJhbnNpdGlvbjogLjJzO1xyXG4vLyB9XHJcblxyXG4vLyBpbnB1dFt0eXBlPXJlc2V0XTpob3ZlciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdkOTU2O1xyXG4vLyB9XHJcblxyXG4vLyBpbnB1dFt0eXBlPXJlc2V0XTphY3RpdmUge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjY2Q0ZDtcclxuLy8gfVxyXG5cclxuLy8gYnV0dG9uI3doeSB7XHJcbi8vICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4vLyAgICAgd2lkdGg6IDQwcHg7XHJcbi8vICAgICBoZWlnaHQ6IDQwcHg7XHJcbi8vICAgICBwYWRkaW5nOiAxNnB4O1xyXG4vLyAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbi8vICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbi8vICAgICB0b3A6IDA7XHJcbi8vICAgICByaWdodDogMDtcclxuLy8gfVxyXG5cclxuLy8gYnV0dG9uI3doeTo6YmVmb3JlLFxyXG4vLyBidXR0b24jd2h5OjphZnRlciB7XHJcbi8vICAgICBjb250ZW50OiBub25lO1xyXG4vLyB9XHJcblxyXG4vLyBzZWN0aW9uIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuLy8gICAgIHdpZHRoOiA0NTBweDtcclxuLy8gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbi8vICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbi8vICAgICB0b3A6IDEycHg7XHJcbi8vICAgICByaWdodDogLTcwMHB4O1xyXG4vLyAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMjRweCk7XHJcbi8vICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjRweCk7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuLy8gICAgIHRyYW5zZm9ybS1vcmlnaW46IDk1JSA1JTtcclxuLy8gICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuLy8gICAgIG9wYWNpdHk6IDA7XHJcbi8vICAgICBib3gtc2hhZG93OiAwIDRweCAxMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSksXHJcbi8vICAgICAgICAgMCA1cHggMjBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjA4KSxcclxuLy8gICAgICAgICAwIDEwcHggMzBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbi8vICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzLCByaWdodCAwcyAuM3M7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmNWViO1xyXG4vLyAgICAgcGFkZGluZzogMmVtO1xyXG4vLyB9XHJcblxyXG4vLyBidXR0b24jd2h5OmZvY3VzK3NlY3Rpb24ge1xyXG4vLyAgICAgcmlnaHQ6IDEycHg7XHJcbi8vICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbi8vICAgICBvcGFjaXR5OiAxO1xyXG4vLyAgICAgdHJhbnNpdGlvbjogYWxsIC4zcywgcmlnaHQgMHM7XHJcbi8vIH1cclxuXHJcbi8vIHNlY3Rpb24gaDEge1xyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4vLyAgICAgZm9udC1zaXplOiAyZW07XHJcbi8vICAgICBtYXJnaW46IDAgYXV0byA0MHB4O1xyXG4vLyB9XHJcblxyXG4vLyBzZWN0aW9uIHAge1xyXG4vLyAgICAgbWFyZ2luOiAxOHB4IDA7XHJcbi8vIH1cclxuXHJcbi8vIHNlY3Rpb24gcDpsYXN0LWNoaWxkIHtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbi8vIH1cclxuXHJcbi8vIGEge1xyXG4vLyAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbi8vICAgICB3aWR0aDogNDhweDtcclxuLy8gICAgIGhlaWdodDogNDhweDtcclxuLy8gICAgIHBhZGRpbmc6IDEycHg7XHJcbi8vICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbi8vICAgICB0b3A6IDA7XHJcbi8vICAgICBsZWZ0OiAwO1xyXG4vLyB9XHJcblxyXG4vLyBzdmcge1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4vLyAgICAgbWFpbiB7XHJcbi8vICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xyXG4vLyAgICAgICAgIG1heC1oZWlnaHQ6IG5vbmU7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgYnV0dG9uI3doeSxcclxuLy8gICAgIGEge1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbi8vICAgICAgICAgd2lkdGg6IDM2cHg7XHJcbi8vICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNTAwcHgpIHtcclxuLy8gICAgIHNlY3Rpb24ge1xyXG4vLyAgICAgICAgIHdpZHRoOiA5MDBweDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuXHJcbi5iYWNrLWJ0biB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5oYW5kb3Zlci1hcHByb3ZlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIzUyQzQxQTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE0OCwgNTAsIDAuMDcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1jYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5kb2NzLWhlYWRlciB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4ub3B0aW9uLWhhbmRvdmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4uU2Nyb2xsU3R5bGUge1xyXG4gICAgbWF4LWhlaWdodDogNjR2aDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5pbnB1dCB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIC5zdWJtaXQtYnRuIHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDMlO1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQjNkI3QTk5O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbi8vICAgICBjb2xvcjogIzZCN0E5OTtcclxuLy8gICAgIGhlaWdodDogNDBweDtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMzNweDtcclxuLy8gICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICB3aWR0aDogODVweDtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuLy8gICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgICBmb250LXNpemU6IDEycHg7XHJcbi8vICAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4vLyB9XHJcblxyXG4vLyAuY2FuY2VsLWJ0biB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAzJTtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkIzZCN0E5OTtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4vLyAgICAgY29sb3I6ICNGRkZGRkY7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZWY0YTYxLCAjZjI3YTZjIDEwNS4yOSUpICFpbXBvcnRhbnQ7XHJcbi8vICAgICBoZWlnaHQ6IDQwcHg7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbi8vICAgICBwYWRkaW5nOiAzcHggMTBweDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgd2lkdGg6IDkwcHg7XHJcbi8vICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbi8vICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbi8vICAgICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuLy8gfVxyXG4ub3B0aW9uLWhhbmRvdmVyZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC5mZWVkYmFjay10by1tYW5hZ2VyIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG5cclxuICAgICAgICAucmVtYXJrcy10ZXh0ZmllbGQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBnYXA6IDIlO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMSU7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIDI1cHggMjVweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtbGlzdCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4gICAgbWluLWhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1ib3gge1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjdXJzb3I6IG1vdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgXHJcbiAgLmNkay1kcmFnLXByZXZpZXcge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIH1cclxuICBcclxuICAuY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgXHJcbiAgLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbiAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Test7PageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-test7-page',
                templateUrl: './test7-page.component.html',
                styleUrls: ['./test7-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "OQe8":
/*!***************************************************************!*\
  !*** ./src/app/components/test1-page/test1-page.component.ts ***!
  \***************************************************************/
/*! exports provided: Test1PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test1PageComponent", function() { return Test1PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");







function Test1PageComponent_div_7_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 44);
} }
function Test1PageComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Test1PageComponent_div_7_div_5_Template, 1, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r8 + 1 != ctx_r0.resignationProcess.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.step);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.des);
} }
function Test1PageComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Emp ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Employment Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Date of Submission");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employeeInfo_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employeeInfo_r10.empid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employeeInfo_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employeeInfo_r10.emptype);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employeeInfo_r10.date);
} }
function Test1PageComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r11.reason, " ");
} }
function Test1PageComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", note_r12.noteFromEmp, " ");
} }
function Test1PageComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Default notice period ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Last working Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const duration_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", duration_r13.daysLeft, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", duration_r13.lastWorkingDay, " ");
} }
function Test1PageComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Notice period changed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateInput", function Test1PageComponent_div_42_Template_input_dateInput_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.addEvent("input", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " New Last working Day ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Reason for changing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const modifiedDuration_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", modifiedDuration_r14.modifieddaysleft, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", modifiedDuration_r14.reasonForChanging, " ");
} }
class Test1PageComponent {
    constructor() {
        this.resignationProcess = [
            {
                id: 1,
                step: 'Sukumaran',
                des: 'Pending',
                profileicon: 'person',
            },
            {
                id: 2,
                step: 'Hari Shankar',
                des: 'Pending',
                profileicon: false,
            },
        ];
        this.empdata = [
            {
                empid: 901212,
                name: 'Subash Chandra Bose',
                emptype: 'Full-Time',
                date: '01-09-2022',
            },
        ];
        this.reasons = [
            {
                id: 1,
                reason: 'Career Change',
            },
            {
                id: 2,
                reason: 'Not Satisfying Pay',
            },
            {
                id: 3,
                reason: 'No Work Life Balance',
            },
        ];
        this.Notes = [
            {
                noteFromEmp: 'Personal Reason',
            },
        ];
        this.noticePeriod = [{ daysLeft: '90 Days', lastWorkingDay: '16th Sept' }];
        this.modifiedNoticePeriod = [
            { modifieddaysleft: '45 Days', reasonForChanging: 'Earned Leaves' },
        ];
        this.events = [];
        this.isShowDiv = true;
        this.divStyle = 'notice-period';
    }
    addEvent(type, event) {
        this.events.push(`${type}: ${event.value}`);
    }
    modifieNoticePeriod() {
        if (this.divStyle == 'notice-period-change') {
            this.divStyle = 'notice-period';
        }
        else {
            this.divStyle = 'notice-period-change';
            this.isShowDiv = !this.isShowDiv;
        }
    }
    ngOnInit() {
    }
}
Test1PageComponent.ɵfac = function Test1PageComponent_Factory(t) { return new (t || Test1PageComponent)(); };
Test1PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Test1PageComponent, selectors: [["app-test1-page"]], decls: 60, vars: 9, consts: [[2, "background-color", "#ffff"], [1, "row", 2, "height", "100vh", "width", "65%", "background-color", "whitesmoke", "margin-left", "34%"], [1, "status-side", "col-3", 2, "background-color", "#f7f9fb"], [1, "manager-status"], [1, "Approver-header"], [1, "process-and-descripition"], ["class", "step active", 4, "ngFor", "ngForOf"], [1, "detail-side", "col-9", 2, "background-color", "#ffff"], [2, "display", "flex", "justify-content", "space-between"], [1, "header-main"], [1, "detail-bar", "row"], ["class", "table-light col-9", 4, "ngFor", "ngForOf"], [1, "col-3"], [1, "terms-btn"], [2, "margin-top", "3%", "font-size", "18px", "margin-right", "1%"], [1, "reason-resign"], [1, "header-reason"], ["class", "reasonsfromemployee", 4, "ngFor", "ngForOf"], [1, "note-form-employee"], [1, "note-header"], ["class", "notes", 4, "ngFor", "ngForOf"], [1, "notice-period", 3, "ngClass"], [1, "notice-period-header"], ["class", "notice-period-days", 4, "ngFor", "ngForOf"], [1, "modified-notice-period", 3, "hidden"], [1, "modified-notice-period-header"], ["class", "modified-notice-period-days", 4, "ngFor", "ngForOf"], [1, "datepicker-lastdate"], [1, "label", 3, "click"], [2, "font-size", "19px", "margin-left", "3%", "margin-top", "1%", 3, "click"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "reason-briefing"], ["for", "textAreaExample", 1, "form-label"], ["id", "textAreaExample", "placeholder", "Type your comment here", "rows", "2", 1, "form-control", 2, "font-size", "14px"], [1, "approve-button-field"], [1, "approve-btn"], [1, "step", "active"], [1, "v-stepper"], [1, "circle"], ["class", "line", 4, "ngIf"], [1, "content"], [1, "step-header"], [1, "step-desc"], [1, "line"], [1, "table-light", "col-9"], [1, "table-content-head", "row"], [1, "col"], [1, "table-content", "row"], [1, "reasonsfromemployee"], [1, "reasons"], [1, "notes"], [1, "notice-period-days"], [1, "notice-period-days-left", "col"], [1, "notice-period-days-left-header", "col"], [1, "last-working-date"], [1, "last-working-date-header"], [1, "modified-notice-period-days"], [1, "modified-notice-period-days-left", "col"], [1, "modified-notice-period-days-left-header", "col"], [1, "modified-last-working-date", "col"], ["matInput", "", "placeholder", "", 3, "matDatepicker", "dateInput"], [1, "modified-last-working-date-header", "col"], [1, "reason-for-changing-desc"], [1, "reason-for-changing-header", "col"]], template: function Test1PageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Approver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Test1PageComponent_div_7_Template, 11, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Resignation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "dir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, Test1PageComponent_div_17_Template, 20, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "done_all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Terms & Conditions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Reason for resignation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, Test1PageComponent_div_27_Template, 3, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, Test1PageComponent_div_32_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Notice Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, Test1PageComponent_div_37_Template, 11, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Modified Notice Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, Test1PageComponent_div_42_Template, 16, 3, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Test1PageComponent_Template_div_click_45_listener() { return ctx.modifieNoticePeriod(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Change last working day ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Test1PageComponent_Template_mat_icon_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52); return _r6.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " date_range ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "mat-datepicker-toggle", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "mat-datepicker", null, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "textarea", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Approve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.resignationProcess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.empdata);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reasons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Notes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.divStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.noticePeriod);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isShowDiv);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.modifiedNoticePeriod);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r6);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerInput"]], styles: [".step[_ngcontent-%COMP%] {\n  padding: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  background-color: cream;\n  height: 10vh;\n}\n\n.v-stepper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.step[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #525252;\n  border-radius: 100%;\n  width: 35px;\n  \n  height: 35px;\n  display: inline-block;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n}\n\n.step[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  top: 35px;\n  left: 17px;\n  height: 100%;\n  position: absolute;\n  border-left: 0.8px solid #DADCE2;\n}\n\n.step.completed[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  visibility: visible;\n  background-color: black;\n  border-color: black;\n}\n\n.step.active[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  visibility: visible;\n  border: 2px solid #FA8C16;\n}\n\n.step.empty[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.step.empty[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  \n  \n  top: 0;\n  height: 150%;\n}\n\n.step[_ngcontent-%COMP%]:last-child   .line[_ngcontent-%COMP%] {\n  border-left: 3px solid white;\n  z-index: -1;\n  \n}\n\n.manager-status[_ngcontent-%COMP%] {\n  margin-top: 35%;\n  margin-left: 5%;\n}\n\n.manager-status[_ngcontent-%COMP%]   .Approver-header[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 19px;\n  letter-spacing: 0.02em;\n  color: #526179;\n}\n\n.process-and-descripition[_ngcontent-%COMP%] {\n  margin-top: 2vh;\n  font-family: \"Roboto\";\n  font-style: normal;\n}\n\n.process-and-descripition[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 1vh;\n  margin-left: 40px;\n  display: inline-block;\n}\n\n.process-and-descripition[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .step-header[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #000000;\n}\n\n.process-and-descripition[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .step-desc[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #FA8C16;\n}\n\n.detail-side[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  font-style: normal;\n}\n\n.detail-side[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 28px;\n  letter-spacing: 0.02em;\n  color: #EE4961;\n  margin-top: 4%;\n  margin-left: 2%;\n}\n\n.detail-side[_ngcontent-%COMP%]   .table-light[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  font-size: 12px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  margin-top: 1%;\n  color: #000000;\n}\n\n.detail-side[_ngcontent-%COMP%]   .table-light[_ngcontent-%COMP%]   .table-content-head[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.detail-side[_ngcontent-%COMP%]   .table-light[_ngcontent-%COMP%]   .table-content[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.detail-side[_ngcontent-%COMP%]   .terms-btn[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  border-radius: 5px;\n  text-transform: capitalize;\n  color: #FFFFFF;\n  background: #52C41A;\n  width: 155px;\n  height: 35px;\n  display: flex;\n  line-height: 29px;\n  padding: 2px 10px;\n  justify-content: center;\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  letter-spacing: 0.01em;\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n}\n\n.detail-side[_ngcontent-%COMP%]   .reason-resign[_ngcontent-%COMP%]   .header-reason[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  color: #000000;\n  opacity: 0.5;\n}\n\n.detail-side[_ngcontent-%COMP%]   .reason-resign[_ngcontent-%COMP%]   .reasonsfromemployee[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  column-gap: 2%;\n  margin-top: 1%;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  color: #5E5D5D;\n}\n\n.detail-side[_ngcontent-%COMP%]   .reason-resign[_ngcontent-%COMP%]   .reasonsfromemployee[_ngcontent-%COMP%]   .reasons[_ngcontent-%COMP%] {\n  height: 27px;\n  border: 1px solid #ee4961;\n  margin-left: 0%;\n  width: 22%;\n  display: flex;\n  justify-content: center;\n  border-radius: 50px;\n  line-height: 23px;\n}\n\n.detail-side[_ngcontent-%COMP%]   .note-form-employee[_ngcontent-%COMP%]   .note-header[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  color: #45546E;\n}\n\n.detail-side[_ngcontent-%COMP%]   .note-form-employee[_ngcontent-%COMP%]   .notes[_ngcontent-%COMP%] {\n  margin-top: 1%;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  color: #7D838B;\n}\n\n.detail-side[_ngcontent-%COMP%]   .notice-period[_ngcontent-%COMP%]   .notice-period-header[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 19px;\n  letter-spacing: 0.02em;\n  color: #45546E;\n}\n\n.detail-side[_ngcontent-%COMP%]   .notice-period[_ngcontent-%COMP%]   .notice-period-days[_ngcontent-%COMP%] {\n  height: 60px;\n  background: #FFFFFF;\n  border: 1px solid rgba(149, 148, 148, 0.6);\n  border-radius: 4px;\n  margin-left: 0%;\n  margin-top: 2%;\n  width: 97%;\n  display: flex;\n  justify-content: flex-start;\n  column-gap: 30%;\n  align-items: center;\n}\n\n.detail-side[_ngcontent-%COMP%]   .notice-period[_ngcontent-%COMP%]   .notice-period-days[_ngcontent-%COMP%]   .notice-period-days-left[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #000000;\n}\n\n.detail-side[_ngcontent-%COMP%]   .notice-period[_ngcontent-%COMP%]   .notice-period-days[_ngcontent-%COMP%]   .last-working-date[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #000000;\n}\n\n.detail-side[_ngcontent-%COMP%]   .notice-period[_ngcontent-%COMP%]   .notice-period-days[_ngcontent-%COMP%]   .notice-period-days-left-header[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  color: #000000;\n  opacity: 0.4;\n}\n\n.detail-side[_ngcontent-%COMP%]   .notice-period[_ngcontent-%COMP%]   .notice-period-days[_ngcontent-%COMP%]   .last-working-date-header[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  color: #000000;\n  opacity: 0.4;\n}\n\n.detail-side[_ngcontent-%COMP%]   .notice-period-change[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.detail-side[_ngcontent-%COMP%]   .notice-period-change[_ngcontent-%COMP%]   .notice-period-header[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 19px;\n  letter-spacing: 0.02em;\n  color: #45546E;\n}\n\n.detail-side[_ngcontent-%COMP%]   .notice-period-change[_ngcontent-%COMP%]   .notice-period-days[_ngcontent-%COMP%] {\n  height: 60px;\n  background: #FFFFFF;\n  border: 1px solid rgba(149, 148, 148, 0.6);\n  border-radius: 4px;\n  margin-left: 0%;\n  margin-top: 2%;\n  width: 97%;\n  display: flex;\n  justify-content: flex-start;\n  column-gap: 30%;\n  align-items: center;\n}\n\n.detail-side[_ngcontent-%COMP%]   .notice-period-change[_ngcontent-%COMP%]   .notice-period-days[_ngcontent-%COMP%]   .notice-period-days-left[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #000000;\n}\n\n.detail-side[_ngcontent-%COMP%]   .notice-period-change[_ngcontent-%COMP%]   .notice-period-days[_ngcontent-%COMP%]   .last-working-date[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #000000;\n}\n\n.detail-side[_ngcontent-%COMP%]   .notice-period-change[_ngcontent-%COMP%]   .notice-period-days[_ngcontent-%COMP%]   .notice-period-days-left-header[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  color: #000000;\n  opacity: 0.4;\n}\n\n.detail-side[_ngcontent-%COMP%]   .notice-period-change[_ngcontent-%COMP%]   .notice-period-days[_ngcontent-%COMP%]   .last-working-date-header[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  color: #000000;\n  opacity: 0.4;\n}\n\n.detail-side[_ngcontent-%COMP%]   .modified-notice-period[_ngcontent-%COMP%]   .modified-notice-period-header[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 19px;\n  letter-spacing: 0.02em;\n  color: #45546E;\n}\n\n.detail-side[_ngcontent-%COMP%]   .modified-notice-period[_ngcontent-%COMP%]   .modified-notice-period-days[_ngcontent-%COMP%] {\n  height: 60px;\n  background: #FFFFFF;\n  border: 1px solid rgba(149, 148, 148, 0.6);\n  border-radius: 4px;\n  margin-left: 0%;\n  margin-top: 2%;\n  width: 97%;\n  display: flex;\n  justify-content: flex-start;\n  column-gap: 13%;\n  align-items: center;\n}\n\n.detail-side[_ngcontent-%COMP%]   .modified-notice-period[_ngcontent-%COMP%]   .modified-notice-period-days[_ngcontent-%COMP%]   .modified-notice-period-days-left[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #000000;\n}\n\n.detail-side[_ngcontent-%COMP%]   .modified-notice-period[_ngcontent-%COMP%]   .modified-notice-period-days[_ngcontent-%COMP%]   .modified-last-working-date[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #000000;\n}\n\n.detail-side[_ngcontent-%COMP%]   .modified-notice-period[_ngcontent-%COMP%]   .modified-notice-period-days[_ngcontent-%COMP%]   .modified-notice-period-days-left-header[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  color: #000000;\n  opacity: 0.4;\n}\n\n.detail-side[_ngcontent-%COMP%]   .modified-notice-period[_ngcontent-%COMP%]   .modified-notice-period-days[_ngcontent-%COMP%]   .modified-last-working-date-header[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  color: #000000;\n  opacity: 0.4;\n}\n\n.detail-side[_ngcontent-%COMP%]   .modified-notice-period[_ngcontent-%COMP%]   .modified-notice-period-days[_ngcontent-%COMP%]   .reason-for-changing-header[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  color: #000000;\n  opacity: 0.4;\n}\n\n.detail-side[_ngcontent-%COMP%]   .modified-notice-period[_ngcontent-%COMP%]   .modified-notice-period-days[_ngcontent-%COMP%]   .reason-for-changing-desc[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #000000;\n  margin-left: 10%;\n}\n\n.detail-side[_ngcontent-%COMP%]   .datepicker-lastdate[_ngcontent-%COMP%] {\n  height: 35px;\n  background: #F7F9FB;\n  border: 1px solid #6B7A99;\n  border-radius: 4px;\n  margin-left: 0%;\n  width: 28%;\n}\n\n.detail-side[_ngcontent-%COMP%]   .datepicker-lastdate[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  color: #515965;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  line-height: 15px;\n  margin-top: 4px;\n}\n\n.detail-side[_ngcontent-%COMP%]   .reason-briefing[_ngcontent-%COMP%] {\n  width: 97%;\n}\n\n.detail-side[_ngcontent-%COMP%]   .approve-btn[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  border-radius: 8px;\n  text-transform: capitalize;\n  color: #FFFFFF;\n  background: linear-gradient(270deg, #ef4a61, #f27a6c 105.29%) !important;\n  width: 100px;\n  height: 40px;\n  display: flex;\n  line-height: 33px;\n  padding: 2px 10px;\n  justify-content: center;\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  letter-spacing: 0.01em;\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n}\n\n.reason-briefing[_ngcontent-%COMP%]     .form-control:focus {\n  border-color: #B9C0CA;\n  box-shadow: none;\n}\n\n  .cdk-overlay-pane .mat-datepicker-popup {\n  top: 62%;\n  left: 32%;\n}\n\n  .cdk-overlay-connected-position-bounding-box {\n  top: 40%;\n  left: -20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0ZXN0MS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUdBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksNEJBQUE7RUFDQSxvQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0FBQUo7O0FBSUE7RUFDSSw0QkFBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtBQURKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFGSjs7QUFJSTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUZSOztBQU9BO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFPSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBTFI7O0FBT1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FBTFo7O0FBUVE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FBTlo7O0FBWUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FBVEo7O0FBV0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBVFI7O0FBWUk7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQVZSOztBQVlRO0VBQ0ksZ0JBQUE7QUFWWjs7QUFhUTtFQUNJLGdCQUFBO0FBWFo7O0FBZUk7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFiUjs7QUFrQlE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFoQlo7O0FBb0JRO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQWxCWjs7QUFvQlk7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFsQmhCOztBQXdCUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBdEJaOztBQXlCUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQXZCWjs7QUE0QlE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQTFCWjs7QUE2QlE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBM0JaOztBQStCWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUE3QmhCOztBQWdDWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUE5QmhCOztBQWlDWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBRUEsWUFBQTtBQWhDaEI7O0FBbUNZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBakNoQjs7QUFzQ0k7RUFDSSxZQUFBO0FBcENSOztBQXFDUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBbkNaOztBQXNDUTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFwQ1o7O0FBd0NZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQXRDaEI7O0FBeUNZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQXZDaEI7O0FBMENZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFFQSxZQUFBO0FBekNoQjs7QUE0Q1k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUExQ2hCOztBQWdEUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBOUNaOztBQWlEUTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUEvQ1o7O0FBbURZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQWpEaEI7O0FBb0RZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQWxEaEI7O0FBcURZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBbkRoQjs7QUFzRFk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFwRGhCOztBQXVEWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQXJEaEI7O0FBdURZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBckRoQjs7QUEwREk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUF4RFI7O0FBMERRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQXhEWjs7QUE0REk7RUFDSSxVQUFBO0FBMURSOztBQTZESTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSx3RUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQTNEUjs7QUFnRUE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FBN0RKOztBQWlFQTtFQUNJLFFBQUE7RUFDQSxTQUFBO0FBOURKOztBQWlFQTtFQUNRLFFBQUE7RUFDQSxVQUFBO0FBOURSIiwiZmlsZSI6InRlc3QxLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RlcCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNyZWFtO1xyXG4gICAgaGVpZ2h0OiAxMHZoO1xyXG59XHJcblxyXG4udi1zdGVwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnN0ZXAgLmNpcmNsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1MjUyNTI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICAvKiArNiBmb3IgYm9yZGVyICovXHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuXHJcbi5zdGVwIC5saW5lIHtcclxuICAgIHRvcDogMzVweDtcclxuICAgIGxlZnQ6IDE3cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItbGVmdDogMC44cHggc29saWQgI0RBRENFMjtcclxufVxyXG5cclxuLnN0ZXAuY29tcGxldGVkIC5jaXJjbGUge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnN0ZXAuYWN0aXZlIC5jaXJjbGUge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGQThDMTY7XHJcbn1cclxuXHJcbi5zdGVwLmVtcHR5IC5jaXJjbGUge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uc3RlcC5lbXB0eSAubGluZSB7XHJcbiAgICAvKiAgICAgdmlzaWJpbGl0eTogaGlkZGVuOyAqL1xyXG4gICAgLyogICBoZWlnaHQ6IDE1MCU7ICovXHJcbiAgICB0b3A6IDA7XHJcbiAgICBoZWlnaHQ6IDE1MCU7XHJcbn1cclxuXHJcblxyXG4uc3RlcDpsYXN0LWNoaWxkIC5saW5lIHtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgd2hpdGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIC8qIGJlaGluZCB0aGUgY2lyY2xlIHRvIGNvbXBsZXRlbHkgaGlkZSAqL1xyXG59XHJcblxyXG5cclxuLm1hbmFnZXItc3RhdHVzIHtcclxuICAgIG1hcmdpbi10b3A6IDM1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuXHJcbiAgICAuQXBwcm92ZXItaGVhZGVyIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICAgICAgY29sb3I6ICM1MjYxNzk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ucHJvY2Vzcy1hbmQtZGVzY3JpcGl0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDF2aDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgICAgIC5zdGVwLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdGVwLWRlc2Mge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgY29sb3I6ICNGQThDMTY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuLmRldGFpbC1zaWRlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHJcbiAgICAuaGVhZGVyLW1haW4ge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICAgICAgY29sb3I6ICNFRTQ5NjE7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgfVxyXG5cclxuICAgIC50YWJsZS1saWdodCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcblxyXG4gICAgICAgIC50YWJsZS1jb250ZW50LWhlYWQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRhYmxlLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGVybXMtYnRuIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNTJDNDFBO1xyXG4gICAgICAgIHdpZHRoOiAxNTVweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjlweDtcclxuICAgICAgICBwYWRkaW5nOiAycHggMTBweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgICAgICAgZmxleDogbm9uZTtcclxuICAgICAgICBvcmRlcjogMDtcclxuICAgICAgICBmbGV4LWdyb3c6IDA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5yZWFzb24tcmVzaWduIHtcclxuICAgICAgICAuaGVhZGVyLXJlYXNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLnJlYXNvbnNmcm9tZW1wbG95ZWUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGNvbHVtbi1nYXA6IDIlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICM1RTVENUQ7XHJcblxyXG4gICAgICAgICAgICAucmVhc29uc3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjdweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZTQ5NjE7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjIlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ub3RlLWZvcm0tZW1wbG95ZWUge1xyXG4gICAgICAgIC5ub3RlLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDU1NDZFO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5vdGVzIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAjN0Q4MzhCO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubm90aWNlLXBlcmlvZCB7XHJcbiAgICAgICAgLm5vdGljZS1wZXJpb2QtaGVhZGVyIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICM0NTU0NkU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubm90aWNlLXBlcmlvZC1kYXlzIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE0OSwgMTQ4LCAxNDgsIDAuNik7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgICAgICAgICAgd2lkdGg6IDk3JTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBjb2x1bW4tZ2FwOiAzMCU7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC5ub3RpY2UtcGVyaW9kLWRheXMtbGVmdCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxhc3Qtd29ya2luZy1kYXRlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubm90aWNlLXBlcmlvZC1kYXlzLWxlZnQtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5sYXN0LXdvcmtpbmctZGF0ZS1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC40O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ub3RpY2UtcGVyaW9kLWNoYW5nZSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIC5ub3RpY2UtcGVyaW9kLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDU1NDZFO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5vdGljZS1wZXJpb2QtZGF5cyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNDksIDE0OCwgMTQ4LCAwLjYpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NyU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgY29sdW1uLWdhcDogMzAlO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAubm90aWNlLXBlcmlvZC1kYXlzLWxlZnQge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5sYXN0LXdvcmtpbmctZGF0ZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm5vdGljZS1wZXJpb2QtZGF5cy1sZWZ0LWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcblxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC40O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubGFzdC13b3JraW5nLWRhdGUtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubW9kaWZpZWQtbm90aWNlLXBlcmlvZCB7XHJcbiAgICAgICAgLm1vZGlmaWVkLW5vdGljZS1wZXJpb2QtaGVhZGVyIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICM0NTU0NkU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubW9kaWZpZWQtbm90aWNlLXBlcmlvZC1kYXlzIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE0OSwgMTQ4LCAxNDgsIDAuNik7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgICAgICAgICAgd2lkdGg6IDk3JTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBjb2x1bW4tZ2FwOiAxMyU7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC5tb2RpZmllZC1ub3RpY2UtcGVyaW9kLWRheXMtbGVmdCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1vZGlmaWVkLWxhc3Qtd29ya2luZy1kYXRlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubW9kaWZpZWQtbm90aWNlLXBlcmlvZC1kYXlzLWxlZnQtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1vZGlmaWVkLWxhc3Qtd29ya2luZy1kYXRlLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5yZWFzb24tZm9yLWNoYW5naW5nLWhlYWRlcntcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucmVhc29uLWZvci1jaGFuZ2luZy1kZXNje1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRhdGVwaWNrZXItbGFzdGRhdGUge1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRjdGOUZCO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2QjdBOTk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgICAgICB3aWR0aDogMjglO1xyXG5cclxuICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogIzUxNTk2NTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yZWFzb24tYnJpZWZpbmcge1xyXG4gICAgICAgIHdpZHRoOiA5NyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcHJvdmUtYnRuIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZWY0YTYxLCAjZjI3YTZjIDEwNS4yOSUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICAgICAgICBmbGV4OiBub25lO1xyXG4gICAgICAgIG9yZGVyOiAwO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5yZWFzb24tYnJpZWZpbmcgOjpuZy1kZWVwIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjQjlDMENBO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktcGFuZSAubWF0LWRhdGVwaWNrZXItcG9wdXB7XHJcbiAgICB0b3A6IDYyJTtcclxuICAgIGxlZnQ6IDMyJTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94e1xyXG4gICAgICAgIHRvcDogNDAlO1xyXG4gICAgICAgIGxlZnQ6IC0yMCU7ICAgIFxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Test1PageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test1-page',
                templateUrl: './test1-page.component.html',
                styleUrls: ['./test1-page.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'FrontEnd-Practice';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_test1_page_test1_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/test1-page/test1-page.component */ "OQe8");
/* harmony import */ var _components_test2_page_test2_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/test2-page/test2-page.component */ "xzHq");
/* harmony import */ var _components_test3_page_test3_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/test3-page/test3-page.component */ "DieI");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "JFIp");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/stepper */ "hzfI");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var _components_test4_page_test4_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/test4-page/test4-page.component */ "1XdZ");
/* harmony import */ var _components_test5_page_test5_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/test5-page/test5-page.component */ "DH/R");
/* harmony import */ var _components_test6_page_test6_page_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/test6-page/test6-page.component */ "8Rtn");
/* harmony import */ var _components_test7_page_test7_page_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/test7-page/test7-page.component */ "LlTZ");
/* harmony import */ var _components_test8_page_test8_page_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/test8-page/test8-page.component */ "kIxm");
/* harmony import */ var _components_test9_page_test9_page_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/test9-page/test9-page.component */ "d5aB");


































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["NoopAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatNativeDateModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_26__["DragDropModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_test1_page_test1_page_component__WEBPACK_IMPORTED_MODULE_4__["Test1PageComponent"],
        _components_test2_page_test2_page_component__WEBPACK_IMPORTED_MODULE_5__["Test2PageComponent"],
        _components_test3_page_test3_page_component__WEBPACK_IMPORTED_MODULE_6__["Test3PageComponent"],
        _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"],
        _components_test4_page_test4_page_component__WEBPACK_IMPORTED_MODULE_27__["Test4PageComponent"],
        _components_test5_page_test5_page_component__WEBPACK_IMPORTED_MODULE_28__["Test5PageComponent"],
        _components_test6_page_test6_page_component__WEBPACK_IMPORTED_MODULE_29__["Test6PageComponent"],
        _components_test7_page_test7_page_component__WEBPACK_IMPORTED_MODULE_30__["Test7PageComponent"],
        _components_test8_page_test8_page_component__WEBPACK_IMPORTED_MODULE_31__["Test8PageComponent"],
        _components_test9_page_test9_page_component__WEBPACK_IMPORTED_MODULE_32__["Test9PageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["NoopAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatNativeDateModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_26__["DragDropModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_test1_page_test1_page_component__WEBPACK_IMPORTED_MODULE_4__["Test1PageComponent"],
                    _components_test2_page_test2_page_component__WEBPACK_IMPORTED_MODULE_5__["Test2PageComponent"],
                    _components_test3_page_test3_page_component__WEBPACK_IMPORTED_MODULE_6__["Test3PageComponent"],
                    _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"],
                    _components_test4_page_test4_page_component__WEBPACK_IMPORTED_MODULE_27__["Test4PageComponent"],
                    _components_test5_page_test5_page_component__WEBPACK_IMPORTED_MODULE_28__["Test5PageComponent"],
                    _components_test6_page_test6_page_component__WEBPACK_IMPORTED_MODULE_29__["Test6PageComponent"],
                    _components_test7_page_test7_page_component__WEBPACK_IMPORTED_MODULE_30__["Test7PageComponent"],
                    _components_test8_page_test8_page_component__WEBPACK_IMPORTED_MODULE_31__["Test8PageComponent"],
                    _components_test9_page_test9_page_component__WEBPACK_IMPORTED_MODULE_32__["Test9PageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["NoopAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatNativeDateModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_26__["DragDropModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "d5aB":
/*!***************************************************************!*\
  !*** ./src/app/components/test9-page/test9-page.component.ts ***!
  \***************************************************************/
/*! exports provided: Test9PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test9PageComponent", function() { return Test9PageComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "GS7A");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");














const _c0 = ["typeSelect"];
const _c1 = function (a0) { return { color: a0 }; };
function Test9PageComponent_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r13.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, option_r13.iconColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](option_r13.itsIcon);
} }
function Test9PageComponent_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r14.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, option_r14.iconColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](option_r14.itsIcon);
} }
const _c2 = function (a0, a1) { return { "background-color": a0, color: a1 }; };
function Test9PageComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r15 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("matTooltip", status_r15.toolTipValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c2, status_r15.color, status_r15.color === "lightgrey" ? "#172B4D" : "#F4F5F7"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", status_r15.value ? status_r15.value : ctx_r4.issueList.length, " ");
} }
function Test9PageComponent_ng_container_43_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "There are no issues on the board.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function Test9PageComponent_ng_container_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Test9PageComponent_ng_container_43_div_2_Template, 5, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@collapsedSection", !ctx_r5.isExpandedBoard);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r5.isExpandedBoard);
} }
function Test9PageComponent_ng_template_44_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Test9PageComponent_ng_template_44_ng_container_1_ng_container_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; return item_r18.issueName = $event; })("blur", function Test9PageComponent_ng_template_44_ng_container_1_ng_container_2_Template_input_blur_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r26.toggleEditMode(item_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", item_r18.issueName);
} }
function Test9PageComponent_ng_template_44_ng_container_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dblclick", function Test9PageComponent_ng_template_44_ng_container_1_ng_template_3_Template_div_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r29.toggleEditMode(item_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("matTooltip", item_r18.toolTipValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, item_r18.iconColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r18.issueType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r18.issueName, " ");
} }
function Test9PageComponent_ng_template_44_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Test9PageComponent_ng_template_44_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, Test9PageComponent_ng_template_44_ng_container_1_ng_template_3_Template, 4, 6, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " DEPLOYED ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "more_vertz");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-menu", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Test9PageComponent_ng_template_44_ng_container_1_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const item_r18 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r33.toggleEditMode(item_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Edit Task ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Test9PageComponent_ng_template_44_ng_container_1_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const item_r18 = ctx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r35.deleteIssue("boards", item_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Test9PageComponent_ng_template_44_ng_container_1_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r36.moreOptions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "more_vertz");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " More Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Test9PageComponent_ng_template_44_ng_container_1_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r37.addFlag(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Add Flag ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkDragData", item_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r18.editMode)("ngIfElse", _r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r22);
} }
function Test9PageComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Test9PageComponent_ng_template_44_ng_container_1_Template, 32, 4, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@expandedSection", ctx_r7.isExpandedBoard);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r7.issueList);
} }
function Test9PageComponent_ng_container_52_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Test9PageComponent_ng_container_52_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r38.newIssueBoards = $event; })("blur", function Test9PageComponent_ng_container_52_Template_input_blur_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r40.addNewIssue("boards"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Test9PageComponent_ng_container_52_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r41.addNewIssue("boards"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Test9PageComponent_ng_container_52_Template_mat_icon_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r42.closeInputField("boards"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r8.newIssueBoards);
} }
function Test9PageComponent_ng_container_61_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Plan and prioritize future works in your backlog ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@collapsedSection", !ctx_r43.isExpandedBacklog);
} }
function Test9PageComponent_ng_container_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Test9PageComponent_ng_container_61_div_1_Template, 6, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r9.isExpandedBacklog);
} }
function Test9PageComponent_ng_template_62_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Test9PageComponent_ng_template_62_ng_container_1_ng_container_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r52); const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; return item_r45.issueName = $event; })("blur", function Test9PageComponent_ng_template_62_ng_container_1_ng_container_2_Template_input_blur_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r52); const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r53.toggleEditMode(item_r45); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", item_r45.issueName);
} }
function Test9PageComponent_ng_template_62_ng_container_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dblclick", function Test9PageComponent_ng_template_62_ng_container_1_ng_template_3_Template_div_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r56.toggleEditMode(item_r45); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("matTooltip", item_r45.toolTipValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, item_r45.iconColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r45.issueType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r45.issueName, " ");
} }
function Test9PageComponent_ng_template_62_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Test9PageComponent_ng_template_62_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, Test9PageComponent_ng_template_62_ng_container_1_ng_template_3_Template, 4, 6, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "more_vertz");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-menu", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Test9PageComponent_ng_template_62_ng_container_1_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r61); const item_r45 = ctx.$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r60.toggleEditMode(item_r45); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Edit Task ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Test9PageComponent_ng_template_62_ng_container_1_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r61); const item_r45 = ctx.$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r62.deleteIssue("backlogs", item_r45); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Test9PageComponent_ng_template_62_ng_container_1_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r61); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r63.moreOptions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " More Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Test9PageComponent_ng_template_62_ng_container_1_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r61); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r64.addFlag(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Add Flag");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r45 = ctx.$implicit;
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkDragData", item_r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r45.editMode)("ngIfElse", _r47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r49);
} }
function Test9PageComponent_ng_template_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Test9PageComponent_ng_template_62_ng_container_1_Template, 20, 4, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@expandedSection", ctx_r11.isExpandedBacklog);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r11.backlogList);
} }
function Test9PageComponent_ng_container_70_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Test9PageComponent_ng_container_70_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r65.newIssueBoards = $event; })("blur", function Test9PageComponent_ng_container_70_Template_input_blur_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r66); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r67.addNewIssue("backlogs"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Test9PageComponent_ng_container_70_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r66); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r68.addNewIssue("backlogs"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Test9PageComponent_ng_container_70_Template_mat_icon_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r66); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r69.closeInputField("backlogs"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r12.newIssueBoards);
} }
// import { type } from 'os';
class Test9PageComponent {
    constructor(renderer, changeDetectorRef) {
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.selectedTypeValue = null;
        this.statusIndication = [
            {
                id: 1,
                color: 'lightgrey',
                toolTipValue: 'Not Started'
            },
            {
                id: 2,
                color: '#0052CC',
                toolTipValue: 'In Progress',
                value: 1
            },
            {
                id: 3,
                color: '#00875A',
                toolTipValue: 'Done',
                value: 1
            }
        ];
        this.selectedTypes = [
            {
                id: 1,
                name: "Epic",
                itsIcon: "stars",
                iconColor: "#e06c00"
            },
            {
                id: 2,
                name: "Feature",
                itsIcon: 'emoji_events',
                iconColor: "#773b93"
            },
            {
                id: 3,
                name: "Story",
                itsIcon: "menu_book",
                iconColor: "#0098c7"
            },
        ];
        this.selectedType = [
            // {
            //   id: 1,
            //   name: "Epic",
            //   itsIcon: "stars",
            //   iconColor: "#e06c00"
            // },
            // {
            //   id: 2,
            //   name: "Feature",
            //   itsIcon: 'trophy',
            //   iconColor: "#773b93"
            // },
            {
                id: 3,
                name: "User Story",
                itsIcon: "menu_book",
                iconColor: "#0098c7"
            },
            {
                id: 4,
                name: "Task",
                itsIcon: "add_task",
                iconColor: "#a4880a"
            },
            {
                id: 5,
                name: "Bug",
                itsIcon: "pest_control",
                iconColor: "#cc293d"
            }
        ];
        this.backlogList = [
            {
                id: 1,
                issueName: 'Integrate the new feature with the existing code base',
                editMode: false,
                toolTipValue: 'Bug',
                issueType: 'pest_control',
                iconColor: "#0098c7"
            },
            {
                id: 2,
                issueName: 'Setup a feedback tool to facilitate the feedback process',
                editMode: false,
                toolTipValue: 'Feature',
                issueType: 'emoji_events',
                iconColor: "#773b93"
            }
        ];
        this.issueList = [
            {
                id: 1,
                issueName: 'Integrate the new feature with the existing code base',
                editMode: false,
                toolTipValue: 'Epic',
                issueType: 'stars',
                iconColor: "#e06c00"
            },
            {
                id: 2,
                issueName: 'Setup a feedback tool to facilitate the feedback process',
                editMode: false,
                toolTipValue: 'Feature',
                issueType: 'emoji_events',
                iconColor: "#773b93"
            }
        ];
        this.showInputFieldBoards = false;
        this.showInputFieldBacklogs = false;
        this.newIssueBoards = '';
        this.newIssueBacklogs = '';
        this.isExpandedBoard = this.issueList.length > 0;
        this.isExpandedBacklog = this.backlogList.length > 0;
        this.newIssue = '';
        this.nextIssueId = 3;
        this.selectedTypeOO = 2;
        this.selectedMatIconName = 'add';
        this.taskNameToAdd = 'Add Upcoming work here';
    }
    // ngAfterViewInit(): void {
    //   this.updatePlaceholderText();
    // }
    getSelectedTypeName() {
        var _a;
        const selectedOptionValue = (_a = this.typeSelect) === null || _a === void 0 ? void 0 : _a.value;
        const selectedOption = this.selectedTypes.find(option => option.id === selectedOptionValue);
        return selectedOption ? selectedOption.name : 'Types'; // Default placeholder text
    }
    onOptionClicked() {
        this.typeSelect.placeholder = this.getSelectedTypeName();
    }
    ngOnInit() {
    }
    onTaskDropped(event, type) {
        if (!event.container.data || event.container.data.length === 0) {
            return;
        }
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            if (type === 'boards') {
                Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(this.backlogList, this.issueList, event.previousIndex, event.currentIndex);
            }
            else if (type === 'backlogs') {
                Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(this.issueList, this.backlogList, event.previousIndex, event.currentIndex);
            }
        }
    }
    toggleIcon(type) {
        if (type == 'boards') {
            this.isExpandedBoard = !this.isExpandedBoard;
        }
        else if (type == 'backlogs') {
            this.isExpandedBacklog = !this.isExpandedBacklog;
        }
    }
    toggleEditMode(item) {
        item.editMode = !item.editMode;
        // If the item is in edit mode, set the expandedHeight to the current content height
        if (item.editMode) {
            // You can adjust the offset (e.g., 20) to add some padding to the expanded height
            this.expandedHeight = document.getElementById(`item-${item.id}`).clientHeight + 20;
        }
        else {
            // If the item is not in edit mode, reset the expandedHeight to null
            this.expandedHeight = null;
        }
    }
    addNewIssue(inputField) {
        const trimmedIssueName = this.newIssueBoards.trim();
        const issueNameToAdd = trimmedIssueName !== '' ? trimmedIssueName : 'New Task';
        const newIssueObj = {
            id: this.nextIssueId,
            issueName: issueNameToAdd,
            editMode: false,
            toolTipValue: 'Epic',
            issueType: 'stars',
            iconColor: "#e06c00",
        };
        if (inputField === 'boards') {
            this.issueList.push(newIssueObj);
        }
        else if (inputField === 'backlogs') {
            this.backlogList.push(newIssueObj);
        }
        this.nextIssueId++;
        this.newIssueBoards = '';
        this.selectedMatIconName = 'add';
        this.toggleInputField(inputField);
        this.taskNameToAdd = issueNameToAdd; // Update the displayed task name
    }
    deleteIssue(listType, item) {
        if (listType === 'boards') {
            const indexToDelete = this.issueList.findIndex((issue) => issue === item);
            if (indexToDelete !== -1) {
                this.issueList.splice(indexToDelete, 1);
            }
        }
        else if (listType === 'backlogs') {
            const indexToDelete = this.backlogList.findIndex((issue) => issue === item);
            if (indexToDelete !== -1) {
                this.backlogList.splice(indexToDelete, 1);
            }
        }
        // Ensure editMode is set to false for the deleted item
        item.editMode = false;
    }
    updateItem(type) {
        if (type === 'boards' && this.showInputFieldBoards) {
            const lastIssueBoards = this.issueList[this.issueList.length - 1];
            lastIssueBoards.issueName = this.newIssueBoards;
            this.newIssueBoards = '';
            this.showInputFieldBoards = false;
        }
        else if (type === 'backlogs' && this.showInputFieldBacklogs) {
            const lastIssueBacklogs = this.backlogList[this.backlogList.length - 1];
            lastIssueBacklogs.issueName = this.newIssueBacklogs;
            this.newIssueBacklogs = '';
            this.showInputFieldBacklogs = false;
        }
    }
    closeInputField(type) {
        this.newIssue = '';
        if (type === 'boards') {
            this.showInputFieldBoards = false;
        }
        else if (type === 'backlogs') {
            this.showInputFieldBacklogs = false;
        }
    }
    toggleInputField(inputField) {
        if (inputField === 'boards') {
            this.showInputFieldBoards = !this.showInputFieldBoards;
        }
        else if (inputField === 'backlogs') {
            this.showInputFieldBacklogs = !this.showInputFieldBacklogs;
        }
        if (!this.showInputFieldBoards && !this.showInputFieldBacklogs) {
            this.newIssueBoards = '';
            this.selectedMatIconName = 'add';
        }
    }
}
Test9PageComponent.ɵfac = function Test9PageComponent_Factory(t) { return new (t || Test9PageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"])); };
Test9PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Test9PageComponent, selectors: [["app-test9-page"]], viewQuery: function Test9PageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.typeSelect = _t.first);
    } }, decls: 71, vars: 17, consts: [[1, "container-fluid", "backlogs-main-page"], [1, "d-flex", "justify-content-between", "align-items-center", "p-3"], [1, "header-backlogs"], [1, "more-options-icon"], [1, "unit-wrapper"], [1, "input-group", "ml-3", "p-3", "d-flex", "justify-content-start", "align-items-center"], [1, "d-flex", "align-items-center"], ["type", "text", "placeholder", "Search", 1, "form-control", "search-input"], [1, "people-involved-profile-icon"], [1, "account-icon"], [1, "add-icon"], [1, "field-dropdown"], [1, "sprint-wrapper-dropdown", "ml-2"], ["appearance", "outline", 1, "d-flex", "align-items-center"], ["placeholder", "Types", 3, "placeholder", "value", "valueChange"], ["typeSelect", ""], ["class", "option-iteration", 3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "Types", 3, "placeholder"], ["cdkDropList", "", "id", "boards", 1, "boards-display-container", 3, "cdkDropListDropped"], [1, "header-boards"], [3, "click"], [1, "leftMost"], [4, "ngFor", "ngForOf"], ["mat-button", "", 1, "completed-sprint"], [1, "more-option-header"], [4, "ngIf", "ngIfElse"], ["issuesPresent", ""], [1, "create-issue"], [1, "addTask", 3, "click"], [4, "ngIf"], ["cdkDropList", "", "id", "backlogs", 1, "boards-display-container", 3, "cdkDropListDropped"], ["issuesPresentBacklogs", ""], [1, "option-iteration", 3, "value"], [1, "p-0", "d-flex", "justify-content-between", "flex-row"], [1, "my-auto"], [1, "my-auto", "d-flex", "justify-content-start", "person-select"], [1, "icon-feature", 3, "ngStyle"], [3, "ngStyle"], [1, "circleStatus", 3, "matTooltip", "ngStyle"], [1, "board-tasks"], ["class", "outline-board-tasks", 4, "ngIf"], [1, "outline-board-tasks"], [1, "image"], ["src", "../../../assets/issue svg.svg", "alt", "no issue", "width", "80px"], [1, "no-issues"], [1, "issues-present"], ["cdkDrag", "", 1, "list-of-issues", 3, "cdkDragData"], ["issueNameDisplay", ""], [1, "issueToProfile"], [1, "deployed"], [1, "more-options", 3, "matMenuTriggerFor"], [1, "menu-options-all"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["type", "text", 1, "input-edit-task", 3, "ngModel", "ngModelChange", "blur"], [1, "issueName", 3, "dblclick"], [3, "ngStyle", "matTooltip"], [1, "input-field-add-task"], ["type", "text", 3, "ngModel", "ngModelChange", "blur"], ["class", "board-tasks", 4, "ngIf"], ["src", "../../../assets/empty svg.svg", "alt", "no issue", "width", "150px"]], template: function Test9PageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Backlogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "more_horiz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "person_add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-select", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function Test9PageComponent_Template_mat_select_valueChange_19_listener($event) { return ctx.selectedTypeValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, Test9PageComponent_mat_option_21_Template, 7, 6, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-select", 17, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, Test9PageComponent_mat_option_26_Template, 7, 6, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function Test9PageComponent_Template_div_cdkDropListDropped_27_listener($event) { return ctx.onTaskDropped($event, "boards"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "header", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Test9PageComponent_Template_mat_icon_click_29_listener() { return ctx.toggleIcon("boards"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Boards ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " 24 Jul - 31 Aug ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, Test9PageComponent_div_37_Template, 3, 6, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Complete Sprint");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "more_horiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, Test9PageComponent_ng_container_43_Template, 3, 2, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, Test9PageComponent_ng_template_44_Template, 2, 2, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Test9PageComponent_Template_div_click_47_listener() { return ctx.toggleInputField("boards"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Add Upcoming work here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, Test9PageComponent_ng_container_52_Template, 7, 1, "ng-container", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function Test9PageComponent_Template_div_cdkDropListDropped_54_listener($event) { return ctx.onTaskDropped($event, "backlogs"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "header", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Test9PageComponent_Template_mat_icon_click_56_listener() { return ctx.toggleIcon("backlogs"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, " Backlogs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, Test9PageComponent_ng_container_61_Template, 2, 1, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, Test9PageComponent_ng_template_62_Template, 2, 2, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Test9PageComponent_Template_div_click_65_listener() { return ctx.toggleInputField("backlogs"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Add Upcoming work here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](70, Test9PageComponent_ng_container_70_Template, 7, 1, "ng-container", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](45);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.getSelectedTypeName());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.selectedTypeValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.selectedTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.getSelectedTypeName());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeInOut", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.selectedType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isExpandedBoard ? "expand_more" : "chevron_right", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", ctx.issueList.length, " issues)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.statusIndication);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.issueList.length === 0)("ngIfElse", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showInputFieldBoards);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isExpandedBacklog ? "expand_more" : "chevron_right", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", ctx.backlogList.length, " issues)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.backlogList.length === 0)("ngIfElse", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showInputFieldBacklogs);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuItem"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]], styles: [".backlogs-main-page[_ngcontent-%COMP%] {\n  height: 100vh;\n  padding: 1rem;\n  background-color: lightgray;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  height: 80vh;\n  margin-top: 9rem;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .header-backlogs[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  font-size: 18px;\n  color: #9a9a9a;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .more-options-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .unit-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .unit-wrapper[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  gap: 2%;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .unit-wrapper[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color: #fff;\n  border: 2px solid #dbdbdb;\n  height: 40px;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .unit-wrapper[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .search-icon-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: -30px;\n  pointer-events: none;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .unit-wrapper[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 10px;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .unit-wrapper[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #9a9a9a;\n  outline: 0;\n  box-shadow: none;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .unit-wrapper[_ngcontent-%COMP%]   .people-involved-profile-icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .unit-wrapper[_ngcontent-%COMP%]   .people-involved-profile-icon[_ngcontent-%COMP%]   .account-icon[_ngcontent-%COMP%] {\n  color: #d0d0d0;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .unit-wrapper[_ngcontent-%COMP%]   .people-involved-profile-icon[_ngcontent-%COMP%]   .add-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #7A869A;\n  margin-top: 5px;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .unit-wrapper[_ngcontent-%COMP%]   .field-dropdown[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2%;\n  margin-left: auto;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .boards-display-container[_ngcontent-%COMP%] {\n  background-color: #F4F5F7;\n  height: auto;\n  width: 96%;\n  border: none;\n  border-radius: 4px;\n  padding: 1rem;\n  \n  margin-left: 2%;\n  margin-top: 2%;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .boards-display-container[_ngcontent-%COMP%]   .header-boards[_ngcontent-%COMP%] {\n  color: #172B4D;\n  font-family: \"Roboto\";\n  font-size: 16px;\n  font-weight: 550;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 1px;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .boards-display-container[_ngcontent-%COMP%]   .header-boards[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  cursor: pointer;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .boards-display-container[_ngcontent-%COMP%]   .header-boards[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  margin-left: 4px;\n  font-family: \"Roboto\";\n  color: #6B778C;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .boards-display-container[_ngcontent-%COMP%]   .header-boards[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  color: #6B778C;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 11px;\n  opacity: 0.7;\n  margin-left: 6px;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .boards-display-container[_ngcontent-%COMP%]   .header-boards[_ngcontent-%COMP%]   .leftMost[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .boards-display-container[_ngcontent-%COMP%]   .header-boards[_ngcontent-%COMP%]   .leftMost[_ngcontent-%COMP%]   .circleStatus[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 22px;\n  width: 26px;\n  border-radius: 43%;\n  font-size: 10px;\n  font-weight: 600;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .boards-display-container[_ngcontent-%COMP%]   .header-boards[_ngcontent-%COMP%]   .leftMost[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #6B778C;\n  color: #6B778C;\n  font-size: 12px;\n  font-family: \"Roboto\";\n  border-radius: 4px;\n  padding: 6px;\n  width: 120px;\n  height: 26px;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .boards-display-container[_ngcontent-%COMP%]   .header-boards[_ngcontent-%COMP%]   .leftMost[_ngcontent-%COMP%]   .more-option-header[_ngcontent-%COMP%] {\n  background-color: #a8acb2;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  border-radius: 4px;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .boards-display-container[_ngcontent-%COMP%]   .header-boards[_ngcontent-%COMP%]   .leftMost[_ngcontent-%COMP%]   .more-option-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .boards-display-container[_ngcontent-%COMP%]   .board-tasks[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .boards-display-container[_ngcontent-%COMP%]   .board-tasks[_ngcontent-%COMP%]   .outline-board-tasks[_ngcontent-%COMP%] {\n  border-style: dashed !important;\n  height: auto;\n  padding: 1rem;\n  opacity: 0.5;\n  border: 2px solid #7A869A;\n  border-radius: 5px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 5px;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .boards-display-container[_ngcontent-%COMP%]   .board-tasks[_ngcontent-%COMP%]   .outline-board-tasks[_ngcontent-%COMP%]   .no-issues[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-family: \"Roboto\";\n  color: #172B4D;\n  font-weight: 40o;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .boards-display-container[_ngcontent-%COMP%]   .issues-present[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n  flex-direction: column;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .boards-display-container[_ngcontent-%COMP%]   .issues-present[_ngcontent-%COMP%]   .list-of-issues[_ngcontent-%COMP%] {\n  border: 1px solid #EBECF0;\n  margin-top: -1px;\n  background-color: #FAFBFC;\n  height: auto;\n  padding: 1rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .boards-display-container[_ngcontent-%COMP%]   .issues-present[_ngcontent-%COMP%]   .list-of-issues[_ngcontent-%COMP%]   .issueName[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Roboto\";\n  font-size: 14px;\n  word-spacing: 0.2px;\n  letter-spacing: 0.28px;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .boards-display-container[_ngcontent-%COMP%]   .issues-present[_ngcontent-%COMP%]   .list-of-issues[_ngcontent-%COMP%]   .issueName[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  margin-right: 2px;\n  cursor: pointer;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .boards-display-container[_ngcontent-%COMP%]   .issues-present[_ngcontent-%COMP%]   .list-of-issues[_ngcontent-%COMP%]   .issueToProfile[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .boards-display-container[_ngcontent-%COMP%]   .issues-present[_ngcontent-%COMP%]   .list-of-issues[_ngcontent-%COMP%]   .issueToProfile[_ngcontent-%COMP%]   .deployed[_ngcontent-%COMP%] {\n  display: flex;\n  font-family: \"Roboto\";\n  font-weight: 500;\n  justify-content: center;\n  align-items: center;\n  padding: 4px;\n  border: none;\n  border-radius: 5px;\n  height: 20px;\n  font-size: 12px;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .boards-display-container[_ngcontent-%COMP%]   .issues-present[_ngcontent-%COMP%]   .list-of-issues[_ngcontent-%COMP%]   .issueToProfile[_ngcontent-%COMP%]   .deployed[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 20px;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .boards-display-container[_ngcontent-%COMP%]   .issues-present[_ngcontent-%COMP%]   .list-of-issues[_ngcontent-%COMP%]   .issueToProfile[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 19px;\n  cursor: pointer;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .boards-display-container[_ngcontent-%COMP%]   .issues-present[_ngcontent-%COMP%]   .list-of-issues[_ngcontent-%COMP%]   .input-edit-task[_ngcontent-%COMP%] {\n  border: 2px solid #7A869A;\n  border-radius: 4px;\n  width: inherit;\n  padding: 10px;\n  height: 35px;\n  max-width: 40%;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .boards-display-container[_ngcontent-%COMP%]   .more-options[_ngcontent-%COMP%]   .option-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .create-issue[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 29%;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .create-issue[_ngcontent-%COMP%]   .addTask[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .create-issue[_ngcontent-%COMP%]   .addTask[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  color: #172B4D;\n  margin-left: 2px;\n  cursor: pointer;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .create-issue[_ngcontent-%COMP%]   .addTask[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  color: #6B778C;\n  font-family: \"Roboto\";\n  font-weight: 500;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .create-issue[_ngcontent-%COMP%]   .input-field-add-task[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .create-issue[_ngcontent-%COMP%]   .input-field-add-task[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 2px solid #7A869A;\n  width: auto;\n  border-radius: 4px;\n  height: 30px;\n}\n.backlogs-main-page[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .create-issue[_ngcontent-%COMP%]   .input-field-add-task[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 17px;\n  color: #172B4D;\n  margin-left: 2px;\n  cursor: pointer;\n}\n.menu-options-all[_ngcontent-%COMP%] {\n  padding: 1%;\n}\n.menu-options-all[_ngcontent-%COMP%]   .menu-options[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  color: var(--black-40, #a8acb2);\n  font-family: \"Roboto\";\n  font-size: 11px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0.22px;\n}\n.menu-options-all[_ngcontent-%COMP%]   .menu-options[_ngcontent-%COMP%]   .icon-menu[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  color: #a8acb2;\n}\n.menu-options-all[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.menu-options-all[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 25px !important;\n}\n  .sprint-wrapper-dropdown .mat-form-field-flex {\n  height: 40px !important;\n  width: 110px !important;\n  margin-top: 14% !important;\n}\n  .sprint-wrapper-dropdown .mat-form-field-flex:hover {\n  height: 40px !important;\n  width: 110px !important;\n  margin-top: 14% !important;\n}\n.mat-menu-panel[_ngcontent-%COMP%] {\n  width: 120px;\n  max-height: 100px;\n  overflow-y: auto;\n}\n  .sprint-wrapper-dropdown .mat-form-field-appearance-outline .mat-form-field-infix {\n  display: flex;\n  align-items: center;\n  border-top: 0 solid transparent;\n}\n  .sprint-wrapper-dropdown .mat-form-field-appearance-outline {\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 4px;\n}\n  .outline-board-tasks {\n  border-style: dashed;\n  height: auto;\n}\n  .more-options .mat-menu-item:hover, .more-options[_ngcontent-%COMP%]   .mat-menu-item[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0ZXN0OS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFLQSwyQkFBQTtBQUhKO0FBS0k7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFIUjtBQUtRO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUhaO0FBT1E7RUFDSSxlQUFBO0FBTFo7QUFTUTtFQUVJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBUlo7QUFVWTtFQUNJLE9BQUE7QUFSaEI7QUFVZ0I7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBUnBCO0FBV2dCO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBVHBCO0FBWWdCO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0FBVnBCO0FBYWdCO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBRUEsZ0JBQUE7QUFYcEI7QUFlWTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQWJoQjtBQWVnQjtFQUNJLGNBQUE7QUFicEI7QUFpQmdCO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBZnBCO0FBbUJZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7QUFqQmhCO0FBeUJRO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBdkJaO0FBNEJZO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBMUJoQjtBQTRCZ0I7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBMUJwQjtBQTZCZ0I7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUEzQnBCO0FBOEJnQjtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQTVCcEI7QUE4QmdCO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUE1QnBCO0FBOEJvQjtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7RUFFQSxnQkFBQTtBQTlCeEI7QUFpQ29CO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQS9CeEI7QUFrQ29CO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBaEN4QjtBQW1Dd0I7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWpDNUI7QUE2Q1k7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUEzQ2hCO0FBNkNnQjtFQUNJLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQTNDcEI7QUE2Q29CO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBM0N4QjtBQWdEWTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBOUNoQjtBQWlEZ0I7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQWhEcEI7QUFrRG9CO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBaER4QjtBQWtEd0I7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFoRDVCO0FBb0RvQjtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQWxEeEI7QUFvRHdCO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBbkQ1QjtBQXVENEI7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFyRGhDO0FBeUR3QjtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUF2RDVCO0FBMkRvQjtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBekR4QjtBQW9FZ0I7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBbEVwQjtBQXVFUTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQXJFWjtBQXVFWTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7QUF0RWhCO0FBd0VnQjtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUF0RXBCO0FBeUVnQjtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFFQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQXhFcEI7QUE0RVk7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQTFFaEI7QUE0RWdCO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBMUVwQjtBQTZFZ0I7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBM0VwQjtBQXNGQTtFQUlJLFdBQUE7QUF0Rko7QUF3Rkk7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUF0RlI7QUF3RlE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBdEZaO0FBMEZJO0VBQ0ksYUFBQTtBQXhGUjtBQTJGSTtFQUNJLHVCQUFBO0FBekZSO0FBK0ZBO0VBQ0ksdUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FBNUZKO0FBK0ZBO0VBQ0ksdUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FBNUZKO0FBa0dBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUEvRko7QUFrR0E7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQWhHSjtBQW1HQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBaEdKO0FBbUdBO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0FBaEdKO0FBbUdBOztFQUVJLHdCQUFBO0VBQ0EsdUJBQUE7QUFoR0oiLCJmaWxlIjoidGVzdDktcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrbG9ncy1tYWluLXBhZ2Uge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcblxyXG4gICAgbWF0LWNhcmQge1xyXG4gICAgICAgIGhlaWdodDogODB2aDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA5cmVtO1xyXG5cclxuICAgICAgICAuaGVhZGVyLWJhY2tsb2dzIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOWE5YTlhO1xyXG4gICAgICAgICAgICAvLyBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubW9yZS1vcHRpb25zLWljb246aG92ZXIge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVuaXQtd3JhcHBlciB7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIC5pbnB1dC1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICBnYXA6IDIlO1xyXG5cclxuICAgICAgICAgICAgICAgIC5zZWFyY2gtaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNkYmRiZGI7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5zZWFyY2gtaWNvbi1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnNlYXJjaC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjOWE5YTlhO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wZW9wbGUtaW52b2x2ZWQtcHJvZmlsZS1pY29uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmFjY291bnQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkMGQwZDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5hZGQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjN0E4NjlBO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmZpZWxkLWRyb3Bkb3duIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBnYXA6IDIlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gLmljb24tZmVhdHVyZSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ib2FyZHMtZGlzcGxheS1jb250YWluZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNUY3O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NiU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICAvKiBtYXJnaW46IDIlIDAlIDIlIDIlOyAqL1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIlO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLmhlYWRlci1ib2FyZHMge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxNzJCNEQ7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1NTA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGdhcDogMXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNkI3NzhDO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2Qjc3OEM7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5sZWZ0TW9zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhcDogNHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2lyY2xlU3RhdHVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQzJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzE3MkI0RDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb2xvcjogI0Y0RjVGNztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNkI3NzhDO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzZCNzc4QztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5tb3JlLW9wdGlvbi1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThhY2IyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tbGVmdDogNzAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBidXR0b24gOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ib2FyZC10YXNrcyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAub3V0bGluZS1ib2FyZC10YXNrcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzdBODY5QTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5uby1pc3N1ZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxNzJCNEQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaXNzdWVzLXByZXNlbnQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgLy8gZ2FwOiAwLjZyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgLmxpc3Qtb2YtaXNzdWVzIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRUJFQ0YwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkJGQztcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmlzc3VlTmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JkLXNwYWNpbmc6IDAuMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yOHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaXNzdWVUb1Byb2ZpbGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGVwbG95ZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDJweCBzb2xpZCAjMTcyQjREO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2IzY2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yOiAjMTcyQjREO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaW5wdXQtZWRpdC10YXNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzdBODY5QTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubW9yZS1vcHRpb25zIHtcclxuICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgLm9wdGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNyZWF0ZS1pc3N1ZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDI5JTtcclxuXHJcbiAgICAgICAgICAgIC5hZGRUYXNrIHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLy8gZ2FwOiAyJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMTcyQjREO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDBweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yOiAjMTcyQjREO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNkI3NzhDO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaW5wdXQtZmllbGQtYWRkLXRhc2sge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM3QTg2OUE7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzE3MkI0RDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5tZW51LW9wdGlvbnMtYWxsIHtcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMSU7XHJcblxyXG4gICAgLm1lbnUtb3B0aW9ucyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2stNDAsICNhOGFjYjIpO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yMnB4O1xyXG5cclxuICAgICAgICAuaWNvbi1tZW51IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6ICNhOGFjYjI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbjo6bmctZGVlcCAuc3ByaW50LXdyYXBwZXItZHJvcGRvd24gLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTEwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDE0JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnNwcmludC13cmFwcGVyLWRyb3Bkb3duIC5tYXQtZm9ybS1maWVsZC1mbGV4OmhvdmVyIHtcclxuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDExMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNCUgIWltcG9ydGFudDtcclxuICAgIC8vIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIC8vIGNvbG9yOiAjNDI1MjZFO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0VDRURGMDtcclxufVxyXG5cclxuLm1hdC1tZW51LXBhbmVsIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5zcHJpbnQtd3JhcHBlci1kcm9wZG93biAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItdG9wOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnNwcmludC13cmFwcGVyLWRyb3Bkb3duIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5vdXRsaW5lLWJvYXJkLXRhc2tzIHtcclxuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1vcmUtb3B0aW9ucyAubWF0LW1lbnUtaXRlbTpob3ZlcixcclxuLm1vcmUtb3B0aW9ucyAubWF0LW1lbnUtaXRlbTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200)),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('expandedIcon', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(0deg)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(180deg)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('false <=> true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in-out')),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('collapsedSection', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0', overflow: 'hidden' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', overflow: 'hidden' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('false <=> true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in-out')),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('expandedSection', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0', overflow: 'hidden', opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', overflow: 'hidden', opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('false <=> true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in-out')),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Test9PageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-test9-page',
                templateUrl: './test9-page.component.html',
                styleUrls: ['./test9-page.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200)),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('expandedIcon', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(0deg)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(180deg)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('false <=> true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in-out')),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('collapsedSection', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0', overflow: 'hidden' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', overflow: 'hidden' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('false <=> true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in-out')),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('expandedSection', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0', overflow: 'hidden', opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', overflow: 'hidden', opacity: 1 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('false <=> true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in-out')),
                    ]),
                ],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }]; }, { typeSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['typeSelect', { static: false }]
        }] }); })();


/***/ }),

/***/ "kIxm":
/*!***************************************************************!*\
  !*** ./src/app/components/test8-page/test8-page.component.ts ***!
  \***************************************************************/
/*! exports provided: Test8PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test8PageComponent", function() { return Test8PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class Test8PageComponent {
    constructor() {
        this.reasonResignationPrimary = ['Career Change'];
        this.reasonResignationSecondary = ['Not Satisfying Pay'];
        this.reasonResignationTritary = ['No Work-Life Balance'];
        this.dateOfSubmission = [' 16-Jun-2022'];
        this.notesFromEmployee = ['Hi, I have some family issue so i have to be with my family to take care thanks for giving this great opportunity '];
    }
    ngOnInit() {
    }
}
Test8PageComponent.ɵfac = function Test8PageComponent_Factory(t) { return new (t || Test8PageComponent)(); };
Test8PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Test8PageComponent, selectors: [["app-test8-page"]], decls: 22, vars: 5, consts: [[1, "main"], [1, "body"], [1, "date-of-submission"], [1, "head-date"], [1, "date"], [1, "reason-for-resignation"], [1, "head-reason-resignaiton"], [1, "reasons"], [1, "reason"], [1, "notes-from-employee"], [1, "head-notes"], [1, "notes-desc"]], template: function Test8PageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Date of submission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Reason For Resignation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dateOfSubmission);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reasonResignationPrimary);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reasonResignationSecondary);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reasonResignationTritary);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.notesFromEmployee);
    } }, styles: [".main[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  background-color: aliceblue;\n  display: flex;\n  justify-content: flex-end;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 35%;\n  background-color: #fff;\n  font-family: \"Roboto\";\n  font-style: normal;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .date-of-submission[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin-top: 4%;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .date-of-submission[_ngcontent-%COMP%]   .head-date[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  color: #000000;\n  opacity: 0.5;\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  padding: 0.5rem;\n}\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .date-of-submission[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  color: #000000;\n  padding: 0.5rem;\n}\n.main[_ngcontent-%COMP%]   .reason-for-resignation[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  font-style: normal;\n  padding: 1.5rem;\n}\n.main[_ngcontent-%COMP%]   .reason-for-resignation[_ngcontent-%COMP%]   .head-reason-resignaiton[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  color: #000000;\n  opacity: 0.5;\n}\n.main[_ngcontent-%COMP%]   .reason-for-resignation[_ngcontent-%COMP%]   .reasons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  padding-top: 1rem;\n}\n.main[_ngcontent-%COMP%]   .reason-for-resignation[_ngcontent-%COMP%]   .reasons[_ngcontent-%COMP%]   .reason[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  opacity: 0.7;\n  width: 200px;\n  height: 25px;\n  margin-left: 0%;\n  display: flex;\n  justify-content: center;\n  line-height: 23px;\n  border: 1px solid #cf0001;\n  border-radius: 17px;\n  color: #5E5D5D;\n}\n.main[_ngcontent-%COMP%]   .notes-from-employee[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.main[_ngcontent-%COMP%]   .notes-from-employee[_ngcontent-%COMP%]   .head-notes[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  color: #45546E;\n}\n.main[_ngcontent-%COMP%]   .notes-from-employee[_ngcontent-%COMP%]   .notes-desc[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: 0.02em;\n  color: #7D838B;\n  padding: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0ZXN0OC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNSO0FBQ1E7RUFFSSxhQUFBO0VBQ0EsY0FBQTtBQUFaO0FBRVk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQWhCO0FBSVk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFGaEI7QUFPSTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTFI7QUFPUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUxaO0FBUVE7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBTlo7QUFRWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBTmhCO0FBV0k7RUFDSSxlQUFBO0FBVFI7QUFXUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBVFo7QUFhUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVhaIiwiZmlsZSI6InRlc3Q4LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAuYm9keSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHJcbiAgICAgICAgLmRhdGUtb2Ytc3VibWlzc2lvbiB7XHJcblxyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0JTtcclxuXHJcbiAgICAgICAgICAgIC5oZWFkLWRhdGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICAgICAgZmxleDogbm9uZTtcclxuICAgICAgICAgICAgICAgIG9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogLjVyZW07XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGF0ZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmVhc29uLWZvci1yZXNpZ25hdGlvbiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcblxyXG4gICAgICAgIC5oZWFkLXJlYXNvbi1yZXNpZ25haXRvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmVhc29ucyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgZ2FwOiAuNXJlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogLjVyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG5cclxuICAgICAgICAgICAgLnJlYXNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZjAwMDE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1RTVENUQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5vdGVzLWZyb20tZW1wbG95ZWUge1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuXHJcbiAgICAgICAgLmhlYWQtbm90ZXMge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ1NTQ2RTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubm90ZXMtZGVzY3tcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICM3RDgzOEI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtICA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Test8PageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test8-page',
                templateUrl: './test8-page.component.html',
                styleUrls: ['./test8-page.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_test1_page_test1_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/test1-page/test1-page.component */ "OQe8");
/* harmony import */ var _components_test2_page_test2_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/test2-page/test2-page.component */ "xzHq");
/* harmony import */ var _components_test3_page_test3_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/test3-page/test3-page.component */ "DieI");
/* harmony import */ var _components_test4_page_test4_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/test4-page/test4-page.component */ "1XdZ");
/* harmony import */ var _components_test5_page_test5_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/test5-page/test5-page.component */ "DH/R");
/* harmony import */ var _components_test6_page_test6_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/test6-page/test6-page.component */ "8Rtn");
/* harmony import */ var _components_test7_page_test7_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/test7-page/test7-page.component */ "LlTZ");
/* harmony import */ var _components_test8_page_test8_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/test8-page/test8-page.component */ "kIxm");
/* harmony import */ var _components_test9_page_test9_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/test9-page/test9-page.component */ "d5aB");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "JFIp");














const routes = [
    { path: '', component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__["HomePageComponent"] },
    { path: 'firstPageTesting', component: _components_test1_page_test1_page_component__WEBPACK_IMPORTED_MODULE_2__["Test1PageComponent"] },
    { path: 'secondPageTesting', component: _components_test2_page_test2_page_component__WEBPACK_IMPORTED_MODULE_3__["Test2PageComponent"] },
    { path: 'thirdPageTesting', component: _components_test3_page_test3_page_component__WEBPACK_IMPORTED_MODULE_4__["Test3PageComponent"] },
    { path: '4PageTesting', component: _components_test4_page_test4_page_component__WEBPACK_IMPORTED_MODULE_5__["Test4PageComponent"] },
    { path: '5PageTesting', component: _components_test5_page_test5_page_component__WEBPACK_IMPORTED_MODULE_6__["Test5PageComponent"] },
    { path: '6PageTesting', component: _components_test6_page_test6_page_component__WEBPACK_IMPORTED_MODULE_7__["Test6PageComponent"] },
    { path: '7PageTesting', component: _components_test7_page_test7_page_component__WEBPACK_IMPORTED_MODULE_8__["Test7PageComponent"] },
    { path: '8PageTesting', component: _components_test8_page_test8_page_component__WEBPACK_IMPORTED_MODULE_9__["Test8PageComponent"] },
    { path: '9PageTesting', component: _components_test9_page_test9_page_component__WEBPACK_IMPORTED_MODULE_10__["Test9PageComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "xzHq":
/*!***************************************************************!*\
  !*** ./src/app/components/test2-page/test2-page.component.ts ***!
  \***************************************************************/
/*! exports provided: Test2PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test2PageComponent", function() { return Test2PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function Test2PageComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employeeinfo_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employeeinfo_r2.empid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employeeinfo_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employeeinfo_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employeeinfo_r2.submiton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employeeinfo_r2.lastworkdate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employeeinfo_r2.daysLeft);
} }
function Test2PageComponent_div_35_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 33);
} }
function Test2PageComponent_div_35_mat_icon_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " chevron_right ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Test2PageComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Test2PageComponent_div_35_div_5_Template, 1, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Test2PageComponent_div_35_Template_mat_card_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.redirect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Completed on");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, Test2PageComponent_div_35_mat_icon_25_Template, 2, 0, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const resignationDetailedStatus_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](resignationDetailedStatus_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r4 + 1 != ctx_r1.process.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", resignationDetailedStatus_r3.resigationStep, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", resignationDetailedStatus_r3.resignationDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", resignationDetailedStatus_r3.completedDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](resignationDetailedStatus_r3.resignationStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", resignationDetailedStatus_r3.isbuttonActive);
} }
class Test2PageComponent {
    constructor() {
        this.empdata = [
            {
                empid: 901212,
                name: 'Subash Chandra Bose',
                email: 'subashchandru.19@gmail.com',
                submiton: '02-Jul-20',
                lastworkdate: '02-Sept-20',
                daysLeft: '90 Days Left',
            },
        ];
        this.process = [
            {
                id: 1,
                resigationStep: 'Sukumaran Acceptance',
                resignationDescription: 'Your manager should accept your resignation, we guess it will be a heartbreak!',
                completedDate: '24-03-2023',
                resignationStatus: 'Approval Pending',
                isbuttonActive: false,
            },
            {
                id: 2,
                resigationStep: 'IP Out Sign',
                resignationDescription: 'Hand-over/ take-over from Approval',
                completedDate: '-',
                resignationStatus: 'Pending',
                isbuttonActive: true,
            },
            {
                id: 3,
                resigationStep: 'Handover Take Over',
                resignationDescription: 'Handover/ Take Over Approval',
                completedDate: '-',
                resignationStatus: 'Pending',
                isbuttonActive: true,
            },
            {
                id: 4,
                resigationStep: 'System Administration',
                resignationDescription: 'To collect IT accessories and remove login and email etc..',
                completedDate: '-',
                resignationStatus: 'Pending',
                isbuttonActive: true,
            },
            {
                id: 5,
                resigationStep: 'Administration',
                resignationDescription: 'To collect ID Card, Keys, SIM, books',
                completedDate: '-',
                resignationStatus: 'Pending',
                isbuttonActive: true,
            },
            {
                id: 6,
                resigationStep: 'Finance',
                resignationDescription: 'Loan Balance Amount',
                completedDate: '-',
                resignationStatus: 'Pending',
                isbuttonActive: true,
            },
            {
                id: 7,
                resigationStep: 'HR Docs',
                resignationDescription: 'To collect medical insurance and check files',
                completedDate: '-',
                resignationStatus: 'Pending',
                isbuttonActive: true,
            },
        ];
    }
    ngOnInit() {
    }
}
Test2PageComponent.ɵfac = function Test2PageComponent_Factory(t) { return new (t || Test2PageComponent)(); };
Test2PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Test2PageComponent, selectors: [["app-test2-page"]], decls: 36, vars: 2, consts: [[2, "background", "#f0f2f7", "height", "100vh", "width", "100%"], [1, "resign-req", "pl-1", "pr-1", "mat-card", 2, "margin-top", "6%", "margin-left", "8%", "width", "90%", "height", "83vh"], [1, "top-stat"], [1, "iconheader"], [1, "svg-resignation"], [1, "header-request"], [1, "retire-btn"], [2, "display", "flex", "justify-content", "space-between", "padding", "1.5rem", "gap", "0%"], [1, "table-light"], [1, "table-content-head", "row"], [1, "col"], [1, "personal-email"], [1, "email-edit-option"], [4, "ngFor", "ngForOf"], [1, "reason-btn"], [1, "emp-reason-btn"], [1, "ScrollStyle"], [1, "table-content", "row"], [1, "col", 2, "display", "flex", "justify-content", "center", "align-items", "center", "margin-top", "-3 px", "column-gap", "5%"], [1, "days-left"], [1, "step", "active", 2, "height", "15vh"], [1, "circle"], ["class", "line", 4, "ngIf"], [1, "resign-req", 2, "background-color", "#f3f5fc", "display", "flex", "margin-top", "0%", 3, "click"], [2, "display", "block", "width", "97%"], [1, "content", "row"], ["mat-cell", "", 1, "head-content", "col-9"], [1, "comp-stat", "col"], ["mat-cell", "", 1, "des-content", "col-9"], [1, "comp-date", "col"], [1, "stat-approve", "col"], [1, "next-btn"], [4, "ngIf"], [1, "line"]], template: function Test2PageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Resignation Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Make as Retire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Emp ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Personal Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Submitted On");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "last Working Day(Estimatied)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, Test2PageComponent_div_29_Template, 15, 6, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "View reason for Resignation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, Test2PageComponent_div_35_Template, 26, 7, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.empdata);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.process);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".resign-req[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  margin-left: 2%;\n  width: 70%;\n  border-radius: 6px;\n  width: 96%;\n  display: inline-block;\n  margin-top: 16px;\n}\n\n.top-stat[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  font-style: normal;\n  flex-direction: row;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 98%;\n  padding: 4px;\n  padding-left: 1rem;\n}\n\n.top-stat[_ngcontent-%COMP%]   .iconheader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 2px;\n  gap: 1rem;\n  align-content: center;\n}\n\n.top-stat[_ngcontent-%COMP%]   .iconheader[_ngcontent-%COMP%]   .svg-resignation[_ngcontent-%COMP%] {\n  margin-left: 0%;\n}\n\n.top-stat[_ngcontent-%COMP%]   .iconheader[_ngcontent-%COMP%]   .header-request[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #000000;\n  width: 100%;\n}\n\n.top-stat[_ngcontent-%COMP%]   .retire-btn[_ngcontent-%COMP%] {\n  border: 1px solid #45546E;\n  border-radius: 5px;\n  text-transform: capitalize;\n  background: #fff;\n  width: 120px;\n  height: 35px;\n  display: flex;\n  padding: 2px 10px;\n  justify-content: center;\n  letter-spacing: -0.02em;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  color: #45546E;\n}\n\n.table-light[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  text-align: left;\n  width: 100%;\n}\n\n.table-light[_ngcontent-%COMP%]   .table-content-head[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #000000;\n  opacity: 0.5;\n}\n\n.table-light[_ngcontent-%COMP%]   .table-content[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #000000;\n  margin-top: 1%;\n}\n\n.table-light[_ngcontent-%COMP%]   .table-content[_ngcontent-%COMP%]   .days-left[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #CF0001;\n  opacity: 0.7;\n  width: 87px;\n  height: 25px;\n  margin-left: 0%;\n  display: flex;\n  justify-content: center;\n  line-height: 23px;\n  border: 1px solid #cf0001;\n  border-radius: 17px;\n}\n\n.reason-btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.reason-btn[_ngcontent-%COMP%]   .emp-reason-btn[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  text-transform: capitalize;\n  color: #45546E;\n  width: 200px;\n  height: 35px;\n  display: flex;\n  line-height: 25px;\n  padding: 2px 10px;\n  justify-content: center;\n  font-weight: 500;\n  font-size: 11px;\n  letter-spacing: 0.01em;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-top: 0%;\n  opacity: 0.1;\n  border: 0.5px solid #000000;\n}\n\n.step[_ngcontent-%COMP%] {\n  padding: 6px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  width: 98%;\n}\n\n.circle[_ngcontent-%COMP%] {\n  border-radius: 100%;\n  width: 38px;\n  height: 38px;\n  display: inline-block;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n  background: #D7D7D7;\n  border: 2px solid #D7D7D7;\n  position: relative;\n  z-index: 1;\n  margin: left;\n  margin-top: 31px;\n  left: 3%;\n}\n\n.step.empty[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.content[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  font-style: normal;\n}\n\n.content[_ngcontent-%COMP%]   br[_ngcontent-%COMP%] {\n  line-height: 150%;\n}\n\n.content[_ngcontent-%COMP%]   .head-content[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 15px;\n  display: flex;\n  align-items: center;\n  color: #000000;\n}\n\n.content[_ngcontent-%COMP%]   .des-content[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 20px;\n  letter-spacing: 0.02em;\n  color: #000000;\n  opacity: 0.6;\n}\n\n.content[_ngcontent-%COMP%]   .comp-stat[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #000000;\n  opacity: 0.5;\n  margin-left: -1%;\n}\n\n.content[_ngcontent-%COMP%]   .comp-date[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #000000;\n}\n\n.content[_ngcontent-%COMP%]   .stat-approve[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #000000;\n}\n\n.next-btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100%;\n  width: 30px;\n  height: 30px;\n  background: #F3F5FC;\n  color: #A4A8AC;\n  font-size: 35px;\n  opacity: 0.7;\n  margin-top: 13px;\n}\n\n.next-btn[_ngcontent-%COMP%]:hover {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100%;\n  width: 30px;\n  height: 30px;\n  background: #D7D7D7;\n  color: #A4A8AC;\n  opacity: 1;\n  transition: background-color 100ms linear;\n}\n\n.step[_ngcontent-%COMP%]  .mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: none !important;\n}\n\n.personal-email[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  column-gap: 3%;\n}\n\n.personal-email[_ngcontent-%COMP%]   .email-edit-option[_ngcontent-%COMP%] {\n  margin-top: -2px;\n  color: #5E5D5D;\n}\n\n.personal-email[_ngcontent-%COMP%]   .email-edit-option[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.email-edit-option[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #3d3c3c;\n}\n\n.email-edit-option[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.ScrollStyle[_ngcontent-%COMP%] {\n  max-height: 60vh;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0ZXN0Mi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVJO0VBRUksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0FBRFI7O0FBR1E7RUFDSSxlQUFBO0FBRFo7O0FBSVE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBRUEsV0FBQTtBQUhaOztBQVNJO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFQUjs7QUFXQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBUko7O0FBV0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBRUEsWUFBQTtBQVZSOztBQWFJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFYUjs7QUFhUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBWFo7O0FBZ0JBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFiSjs7QUFnQkk7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBZFI7O0FBbUJBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQWhCSjs7QUFvQkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0FBakJKOztBQW9CQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtBQWpCSjs7QUFvQkE7RUFDSSxrQkFBQTtBQWpCSjs7QUFxQkE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FBbEJKOztBQW9CSTtFQUNJLGlCQUFBO0FBbEJSOztBQXFCSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQW5CUjs7QUFzQkk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFwQlI7O0FBdUJJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQXJCUjs7QUF3Qkk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FBdEJSOztBQXlCSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUF2QlI7O0FBMkJBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQXhCSjs7QUEyQkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBR0EseUNBQUE7QUF4Qko7O0FBNEJJO0VBQ0ksMkJBQUE7QUF6QlI7O0FBNkJBO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQTFCSjs7QUE2Qkk7RUFLSSxnQkFBQTtFQUNBLGNBQUE7QUEvQlI7O0FBMEJRO0VBQ0ksZUFBQTtBQXhCWjs7QUFnQ0E7RUFLSSxlQUFBO0VBQ0EsY0FBQTtBQWpDSjs7QUE0Qkk7RUFDSSxlQUFBO0FBMUJSOztBQWtDQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUEvQkoiLCJmaWxlIjoidGVzdDItcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNpZ24tcmVxIHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgd2lkdGg6IDk2JTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi50b3Atc3RhdCB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG5cclxuXHJcbiAgICAuaWNvbmhlYWRlciB7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgIGdhcDogMXJlbTtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5zdmctcmVzaWduYXRpb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGVhZGVyLXJlcXVlc3Qge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIC8vIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLnJldGlyZS1idG4ge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NTU0NkU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogIzQ1NTQ2RTtcclxuICAgIH1cclxufVxyXG5cclxuLnRhYmxlLWxpZ2h0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcblxyXG4gICAgLnRhYmxlLWNvbnRlbnQtaGVhZCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuXHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG5cclxuICAgIC50YWJsZS1jb250ZW50IHtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDElO1xyXG5cclxuICAgICAgICAuZGF5cy1sZWZ0IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjQ0YwMDAxO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4N3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2YwMDAxO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnJlYXNvbi1idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblxyXG4gICAgLmVtcC1yZWFzb24tYnRuIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgY29sb3I6ICM0NTU0NkU7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ociB7XHJcbiAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgIG9wYWNpdHk6IDAuMTtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgIzAwMDAwMDtcclxufVxyXG5cclxuXHJcbi5zdGVwIHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IDk4JTtcclxufVxyXG5cclxuLmNpcmNsZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgd2lkdGg6IDM4cHg7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJhY2tncm91bmQ6ICNEN0Q3RDc7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRDdEN0Q3O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG1hcmdpbjogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDMxcHg7XHJcbiAgICBsZWZ0OiAzJTtcclxufVxyXG5cclxuLnN0ZXAuZW1wdHkgLmNpcmNsZSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcblxyXG4uY29udGVudCB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcblxyXG4gICAgYnIge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkLWNvbnRlbnQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzLWNvbnRlbnQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb21wLXN0YXQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbXAtZGF0ZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIH1cclxuXHJcbiAgICAuc3RhdC1hcHByb3ZlIHtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubmV4dC1idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNGM0Y1RkM7XHJcbiAgICBjb2xvcjogI0E0QThBQztcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbn1cclxuXHJcbi5uZXh0LWJ0bjpob3ZlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0Q3RDdENztcclxuICAgIGNvbG9yOiAjQTRBOEFDO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBsaW5lYXI7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGxpbmVhcjtcclxufVxyXG5cclxuLnN0ZXA6Om5nLWRlZXAge1xyXG4gICAgLm1hdC1jYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wZXJzb25hbC1lbWFpbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgY29sdW1uLWdhcDogMyU7XHJcblxyXG5cclxuICAgIC5lbWFpbC1lZGl0LW9wdGlvbiB7XHJcbiAgICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgICAgICBjb2xvcjogIzVFNUQ1RDtcclxuICAgIH1cclxufVxyXG5cclxuLmVtYWlsLWVkaXQtb3B0aW9uIDpob3ZlciB7XHJcbiAgICAubWF0LWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzNkM2MzYztcclxuXHJcbn1cclxuXHJcbi5TY3JvbGxTdHlsZSB7XHJcbiAgICBtYXgtaGVpZ2h0OiA2MHZoO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Test2PageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test2-page',
                templateUrl: './test2-page.component.html',
                styleUrls: ['./test2-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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