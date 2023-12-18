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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPageComponent = void 0;
const core_1 = require("@angular/core");
const user_service_1 = require("../../../services/user.service");
const router_1 = require("@angular/router");
let LoginPageComponent = class LoginPageComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.credentials = { email: '', password: '' };
        this.loginError = false;
        this.loginSuccess = false;
        this.displayDialog = false;
        this.credentials = { email: '', password: '' };
    }
    onSubmit() {
        console.log('Intentando iniciar sesión con credenciales:', this.credentials);
        this.authService.login(this.credentials.email, this.credentials.password).subscribe((response) => {
            console.log('Inicio de sesión con éxito', response);
            this.authService.setToken(response.token);
            const userRole = response.rol;
            switch (userRole) {
                case 'administrador':
                    this.router.navigate(['/admin']);
                    break;
                case 'donante':
                    this.router.navigate(['auth/login']);
                    break;
                case 'adoptante':
                    this.router.navigate(['/cats/home']);
                    break;
                default:
                    console.error('Rol no reconocido');
                    break;
            }
        }, (error) => {
            console.error('Error en el inicio de sesión', error);
            if (error.error && error.error.message) {
                console.error('Mensaje de error:', error.error.message);
            }
            this.loginError = true;
            setTimeout(() => {
                this.loginError = false;
            }, 2000);
        });
    }
    onForgotPassword() {
        this.authService.sendResetEmail(this.credentials.email).subscribe(() => {
            console.log('Correo electrónico de restablecimiento enviado con éxito');
        }, (error) => {
            console.error('Error al enviar el correo electrónico de restablecimiento', error);
        });
    }
    showDialog() {
        this.displayDialog = true;
    }
    hideDialog() {
        this.displayDialog = false;
    }
};
exports.LoginPageComponent = LoginPageComponent;
exports.LoginPageComponent = LoginPageComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-login-page',
        templateUrl: './login-page.component.html',
        styles: ``,
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" ? _a : Object])
], LoginPageComponent);
//# sourceMappingURL=login-page.component.js.map