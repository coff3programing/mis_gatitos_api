"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonanteModule = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const donante_routing_module_1 = require("./donante-routing.module");
const layout_page_component_1 = require("./pages/layout-page/layout-page.component");
const home_page_component_1 = require("./pages/home-page/home-page.component");
const view_page_component_1 = require("./pages/view-page/view-page.component");
const add_page_component_1 = require("./pages/add-page/add-page.component");
const profile_page_component_1 = require("./pages/profile-page/profile-page.component");
const material_module_1 = require("../material/material.module");
const primeng_module_1 = require("../primeng/primeng.module");
const forms_1 = require("@angular/forms");
const menu_component_1 = require("./pages/menu/menu.component");
let DonanteModule = class DonanteModule {
};
exports.DonanteModule = DonanteModule;
exports.DonanteModule = DonanteModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            layout_page_component_1.LayoutPageComponent,
            home_page_component_1.HomePageComponent,
            view_page_component_1.ViewPageComponent,
            add_page_component_1.AddPageComponent,
            profile_page_component_1.ProfilePageComponent,
            menu_component_1.MenuComponent,
        ],
        imports: [
            common_1.CommonModule,
            donante_routing_module_1.DonanteRoutingModule,
            material_module_1.MaterialModule,
            primeng_module_1.PrimengModule,
            forms_1.ReactiveFormsModule,
        ],
    })
], DonanteModule);
//# sourceMappingURL=donante.module.js.map