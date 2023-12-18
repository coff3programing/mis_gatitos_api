"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormErrorDirective = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let FormErrorDirective = class FormErrorDirective {
    set touched(value) {
        this._touched = value;
        console.log('_touched', this._touched);
        this.setMessage();
    }
    set dirty(value) {
        this._dirty = value;
        console.log('_dirty', this._dirty);
        this.setMessage();
    }
    set errors(value) {
        this._errors = value;
        console.log('_errors', this._errors);
        this.setMessage();
    }
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._errors = null;
        this._dirty = false;
        this._touched = false;
        this._nativeElement = elementRef.nativeElement;
    }
    setMessage() {
        if (this._touched || this._dirty) {
            if (this._errors) {
                if (this._errors['required']) {
                    this._nativeElement.innerText = 'El campo es requerido';
                }
                else if (this._errors['minlength']) {
                    this._nativeElement.innerText = `El número de caracteres debe ser 
                ${this._errors['minlength']['requiredLength']}, pero tienes 
                ${this._errors['minlength']['actualLength']}.`;
                }
                else if (this._errors['maxlength']) {
                    this._nativeElement.innerText = `El número de caracteres debe ser 
                  ${this._errors['maxlength']['requiredLength']}, pero tienes 
                  ${this._errors['maxlength']['actualLength']}.`;
                }
                else if (this._errors['email']) {
                    this._nativeElement.innerText = 'El campo tiene que ser de tipo email';
                }
            }
            else {
                this._nativeElement.innerText = 'Campo valido';
                this.renderer.addClass(this._nativeElement, 'success-color');
            }
        }
    }
};
exports.FormErrorDirective = FormErrorDirective;
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], FormErrorDirective.prototype, "touched", null);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], FormErrorDirective.prototype, "dirty", null);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", typeof (_c = typeof forms_1.ValidationErrors !== "undefined" && forms_1.ValidationErrors) === "function" ? _c : Object),
    __metadata("design:paramtypes", [typeof (_d = typeof forms_1.ValidationErrors !== "undefined" && forms_1.ValidationErrors) === "function" ? _d : Object])
], FormErrorDirective.prototype, "errors", null);
exports.FormErrorDirective = FormErrorDirective = __decorate([
    (0, core_1.Directive)({
        selector: '[formError]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" ? _a : Object, typeof (_b = typeof core_1.Renderer2 !== "undefined" && core_1.Renderer2) === "function" ? _b : Object])
], FormErrorDirective);
//# sourceMappingURL=form-error.directive.js.map