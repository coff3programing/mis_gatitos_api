"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmModule = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const confirm_routing_module_1 = require("./confirm-routing.module");
const confirm_page_component_1 = require("./pages/confirm-page/confirm-page.component");
const denie_page_component_1 = require("./pages/denie-page/denie-page.component");
const layout_page_component_1 = require("./pages/layout-page/layout-page.component");
const welcome_component_1 = require("./pages/welcome/welcome.component");
const material_module_1 = require("../material/material.module");
const button_component_component_1 = require("./pages/button-component/button-component.component");
const primeng_module_1 = require("../primeng/primeng.module");
let ConfirmModule = class ConfirmModule {
};
exports.ConfirmModule = ConfirmModule;
exports.ConfirmModule = ConfirmModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            confirm_page_component_1.ConfirmPageComponent,
            denie_page_component_1.DeniePageComponent,
            layout_page_component_1.LayoutPageComponent,
            welcome_component_1.WelcomeComponent,
            button_component_component_1.ButtonComponentComponent
        ],
        imports: [
            common_1.CommonModule,
            confirm_routing_module_1.ConfirmRoutingModule,
            material_module_1.MaterialModule,
            primeng_module_1.PrimengModule
        ]
    })
], ConfirmModule);
//# sourceMappingURL=confirm.module.js.map