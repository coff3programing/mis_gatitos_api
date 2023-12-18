"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const admin_routing_module_1 = require("./admin-routing.module");
const layout_page_component_1 = require("./pages/layout-page/layout-page.component");
const administar_page_component_1 = require("./pages/administar-page/administar-page.component");
const cats_page_component_1 = require("./pages/cats-page/cats-page.component");
const donadores_page_component_1 = require("./pages/donadores-page/donadores-page.component");
const button_component_component_1 = require("./pages/button-component/button-component.component");
const material_module_1 = require("../material/material.module");
const primeng_module_1 = require("../primeng/primeng.module");
const forms_1 = require("@angular/forms");
const menu_component_1 = require("./pages/menu/menu.component");
let AdminModule = class AdminModule {
};
exports.AdminModule = AdminModule;
exports.AdminModule = AdminModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            layout_page_component_1.LayoutPageComponent,
            administar_page_component_1.AdministarPageComponent,
            cats_page_component_1.CatsPageComponent,
            donadores_page_component_1.DonadoresPageComponent,
            button_component_component_1.ButtonComponentComponent,
            menu_component_1.MenuComponent
        ],
        imports: [
            common_1.CommonModule,
            admin_routing_module_1.AdminRoutingModule,
            material_module_1.MaterialModule,
            primeng_module_1.PrimengModule,
            forms_1.ReactiveFormsModule,
        ]
    })
], AdminModule);
//# sourceMappingURL=admin.module.js.map