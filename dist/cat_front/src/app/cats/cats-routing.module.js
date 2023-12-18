"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const layout_page_component_1 = require("./pages/layout-page/layout-page.component");
const new_page_component_1 = require("./pages/new-page/new-page.component");
const search_page_component_1 = require("./pages/search-page/search-page.component");
const list_page_component_1 = require("./pages/list-page/list-page.component");
const cat_page_component_1 = require("./pages/cat-page/cat-page.component");
const home_page_component_1 = require("./pages/home-page/home-page.component");
const routes = [
    {
        path: '',
        component: layout_page_component_1.LayoutPageComponent,
        children: [
            { path: 'home', component: home_page_component_1.HomePageComponent },
            { path: 'new-hero', component: new_page_component_1.NewPageComponent },
            { path: 'search', component: search_page_component_1.SearchPageComponent },
            { path: 'edit/:id', component: new_page_component_1.NewPageComponent },
            { path: 'list', component: list_page_component_1.ListPageComponent },
            { path: ':id', component: cat_page_component_1.CatPageComponent },
            { path: '**', redirectTo: 'home' },
        ],
    },
];
let CatsRoutingModule = class CatsRoutingModule {
};
exports.CatsRoutingModule = CatsRoutingModule;
exports.CatsRoutingModule = CatsRoutingModule = __decorate([
    (0, core_1.NgModule)({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
    })
], CatsRoutingModule);
//# sourceMappingURL=cats-routing.module.js.map