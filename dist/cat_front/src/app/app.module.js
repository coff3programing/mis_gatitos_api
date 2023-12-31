"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const shared_module_1 = require("./shared/shared.module");
const animations_1 = require("@angular/platform-browser/animations");
const forms_1 = require("@angular/forms");
const primeng_module_1 = require("./primeng/primeng.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [app_component_1.AppComponent],
        imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, shared_module_1.SharedModule, animations_1.BrowserAnimationsModule, forms_1.FormsModule, primeng_module_1.PrimengModule, forms_1.ReactiveFormsModule,],
        providers: [],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map