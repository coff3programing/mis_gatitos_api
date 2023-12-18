"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const auth_routing_module_1 = require("./auth-routing.module");
const layout_page_component_1 = require("./pages/layout-page/layout-page.component");
const login_page_component_1 = require("./pages/login-page/login-page.component");
const register_page_component_1 = require("./pages/register-page/register-page.component");
const material_module_1 = require("../material/material.module");
const primeng_module_1 = require("../primeng/primeng.module");
const form_error_directive_1 = require("../directives/form-error.directive");
const forms_1 = require("@angular/forms");
const email_component_1 = require("./pages/email/email.component");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            layout_page_component_1.LayoutPageComponent,
            login_page_component_1.LoginPageComponent,
            register_page_component_1.RegisterPageComponent,
            form_error_directive_1.FormErrorDirective,
            email_component_1.EmailComponent
        ],
        imports: [common_1.CommonModule, auth_routing_module_1.AuthRoutingModule, material_module_1.MaterialModule, primeng_module_1.PrimengModule, forms_1.ReactiveFormsModule,
        ],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map