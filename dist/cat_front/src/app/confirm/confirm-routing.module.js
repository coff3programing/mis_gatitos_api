"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const layout_page_component_1 = require("./pages/layout-page/layout-page.component");
const confirm_page_component_1 = require("./pages/confirm-page/confirm-page.component");
const denie_page_component_1 = require("./pages/denie-page/denie-page.component");
const welcome_component_1 = require("./pages/welcome/welcome.component");
const routes = [
    {
        path: '',
        component: layout_page_component_1.LayoutPageComponent,
        children: [
            { path: 'confirm', component: confirm_page_component_1.ConfirmPageComponent },
            { path: 'denie', component: denie_page_component_1.DeniePageComponent },
            { path: 'welcome', component: welcome_component_1.WelcomeComponent },
            { path: '**', redirectTo: 'confirm' },
        ],
    },
];
let ConfirmRoutingModule = class ConfirmRoutingModule {
};
exports.ConfirmRoutingModule = ConfirmRoutingModule;
exports.ConfirmRoutingModule = ConfirmRoutingModule = __decorate([
    (0, core_1.NgModule)({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
    })
], ConfirmRoutingModule);
//# sourceMappingURL=confirm-routing.module.js.map