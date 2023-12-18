"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const layout_page_component_1 = require("./pages/layout-page/layout-page.component");
const login_page_component_1 = require("./pages/login-page/login-page.component");
const register_page_component_1 = require("./pages/register-page/register-page.component");
const email_component_1 = require("./pages/email/email.component");
const routes = [
    {
        path: '',
        component: layout_page_component_1.LayoutPageComponent,
        children: [
            { path: 'login', component: login_page_component_1.LoginPageComponent },
            { path: 'register', component: register_page_component_1.RegisterPageComponent },
            { path: 'reset', component: email_component_1.EmailComponent },
            { path: '**', redirectTo: 'login' },
        ],
    },
];
let AuthRoutingModule = class AuthRoutingModule {
};
exports.AuthRoutingModule = AuthRoutingModule;
exports.AuthRoutingModule = AuthRoutingModule = __decorate([
    (0, core_1.NgModule)({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
    })
], AuthRoutingModule);
//# sourceMappingURL=auth-routing.module.js.map