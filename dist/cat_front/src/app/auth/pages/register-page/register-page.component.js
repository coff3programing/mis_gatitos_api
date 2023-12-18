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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterPageComponent = void 0;
const core_1 = require("@angular/core");
const user_service_1 = require("../../../services/user.service");
const router_1 = require("@angular/router");
const forms_1 = require("@angular/forms");
let RegisterPageComponent = class RegisterPageComponent {
    constructor(userService, router, formBuilder) {
        this.userService = userService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.user = {};
        this.form = formBuilder.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(30)]],
            lastname: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(30)]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', [forms_1.Validators.required]],
            rol: ['', [forms_1.Validators.required]]
        });
    }
    onSubmit() {
        if (this.form.valid) {
            const formData = this.form.value;
            const user = {
                name: formData.name,
                lastname: formData.lastname,
                email: formData.email,
                password: formData.password,
                rol: formData.rol
            };
            this.userService.createUser(user).subscribe(response => {
                console.log('User registered successfully', response);
                this.router.navigate(['auth/login']);
            }, error => {
                console.error('Error registering user', error);
            });
        }
        else {
            alert('Invalid form. Please complete the fields correctly.');
        }
    }
    get Name() {
        return this.form.controls['name'];
    }
    get LastName() {
        return this.form.controls['lastname'];
    }
    get Email() {
        return this.form.controls['email'];
    }
    get Password() {
        return this.form.controls['password'];
    }
};
exports.RegisterPageComponent = RegisterPageComponent;
exports.RegisterPageComponent = RegisterPageComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-register-page',
        templateUrl: './register-page.component.html',
        styles: ``
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" ? _a : Object, typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" ? _b : Object])
], RegisterPageComponent);
//# sourceMappingURL=register-page.component.js.map