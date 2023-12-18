"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsModule = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const cats_routing_module_1 = require("./cats-routing.module");
const cat_page_component_1 = require("./pages/cat-page/cat-page.component");
const layout_page_component_1 = require("./pages/layout-page/layout-page.component");
const list_page_component_1 = require("./pages/list-page/list-page.component");
const new_page_component_1 = require("./pages/new-page/new-page.component");
const search_page_component_1 = require("./pages/search-page/search-page.component");
const home_page_component_1 = require("./pages/home-page/home-page.component");
const material_module_1 = require("../material/material.module");
const button_component_component_1 = require("./pages/button-component/button-component.component");
const menu_component_1 = require("./pages/menu/menu.component");
const primeng_module_1 = require("../primeng/primeng.module");
let CatsModule = class CatsModule {
};
exports.CatsModule = CatsModule;
exports.CatsModule = CatsModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            cat_page_component_1.CatPageComponent,
            layout_page_component_1.LayoutPageComponent,
            list_page_component_1.ListPageComponent,
            new_page_component_1.NewPageComponent,
            search_page_component_1.SearchPageComponent,
            home_page_component_1.HomePageComponent,
            button_component_component_1.ButtonComponentComponent,
            menu_component_1.MenuComponent,
        ],
        imports: [common_1.CommonModule, cats_routing_module_1.CatsRoutingModule, material_module_1.MaterialModule, primeng_module_1.PrimengModule],
    })
], CatsModule);
//# sourceMappingURL=cats.module.js.map