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
exports.EmailComponent = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
let EmailComponent = class EmailComponent {
    constructor(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.newPassword = '';
        this.token = null;
        this.resetError = false;
        this.resetSuccess = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            this.token = params['token'];
        });
    }
    onResetPassword() {
        if (this.token && this.newPassword) {
            this.authService.resetPassword(this.token, this.newPassword).subscribe(() => {
                console.log('Contraseña restablecida con éxito');
                this.resetSuccess = true;
                setTimeout(() => {
                    this.router.navigate(['/login']);
                });
            }, (error) => {
                console.error('Error al restablecer la contraseña', error);
                this.resetError = true;
            });
        }
    }
};
exports.EmailComponent = EmailComponent;
exports.EmailComponent = EmailComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-email',
        templateUrl: './email.component.html',
        styleUrls: ['./email.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" ? _a : Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" ? _b : Object])
], EmailComponent);
const user_service_1 = require("../../../services/user.service");
//# sourceMappingURL=email.component.js.map