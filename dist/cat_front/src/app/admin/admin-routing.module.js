"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const layout_page_component_1 = require("./pages/layout-page/layout-page.component");
const administar_page_component_1 = require("./pages/administar-page/administar-page.component");
const donadores_page_component_1 = require("./pages/donadores-page/donadores-page.component");
const cats_page_component_1 = require("./pages/cats-page/cats-page.component");
const routes = [
    {
        path: '',
        component: layout_page_component_1.LayoutPageComponent,
        children: [
            {
                path: 'manage',
                component: administar_page_component_1.AdministarPageComponent,
            },
            {
                path: 'donor',
                component: donadores_page_component_1.DonadoresPageComponent,
            },
            {
                path: 'cats',
                component: cats_page_component_1.CatsPageComponent,
            },
            { path: '**', redirectTo: 'manage' },
        ],
    },
];
let AdminRoutingModule = class AdminRoutingModule {
};
exports.AdminRoutingModule = AdminRoutingModule;
exports.AdminRoutingModule = AdminRoutingModule = __decorate([
    (0, core_1.NgModule)({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
    })
], AdminRoutingModule);
//# sourceMappingURL=admin-routing.module.js.map