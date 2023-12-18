"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const error404_page_component_1 = require("./shared/pages/error404-page/error404-page.component");
const routes = [
    {
        path: 'auth',
        loadChildren: () => Promise.resolve().then(() => require('./auth/auth.module')).then((m) => m.AuthModule),
    },
    {
        path: 'conditions',
        loadChildren: () => Promise.resolve().then(() => require('./confirm/confirm.module')).then((m) => m.ConfirmModule),
    },
    {
        path: 'cats',
        loadChildren: () => Promise.resolve().then(() => require('./cats/cats.module')).then((m) => m.CatsModule),
    },
    {
        path: 'donor',
        loadChildren: () => Promise.resolve().then(() => require('./donante/donante.module')).then((m) => m.DonanteModule),
    },
    {
        path: 'admin',
        loadChildren: () => Promise.resolve().then(() => require('./admin/admin.module')).then((m) => m.AdminModule),
    },
    {
        path: '404',
        component: error404_page_component_1.Error404PageComponent,
    },
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: '404',
    },
];
let AppRoutingModule = class AppRoutingModule {
};
exports.AppRoutingModule = AppRoutingModule;
exports.AppRoutingModule = AppRoutingModule = __decorate([
    (0, core_1.NgModule)({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule],
    })
], AppRoutingModule);
//# sourceMappingURL=app-routing.module.js.map