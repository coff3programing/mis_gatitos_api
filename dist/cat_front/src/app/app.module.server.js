"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppServerModule = void 0;
const core_1 = require("@angular/core");
const platform_server_1 = require("@angular/platform-server");
const app_module_1 = require("./app.module");
const app_component_1 = require("./app.component");
let AppServerModule = class AppServerModule {
};
exports.AppServerModule = AppServerModule;
exports.AppServerModule = AppServerModule = __decorate([
    (0, core_1.NgModule)({
        imports: [
            app_module_1.AppModule,
            platform_server_1.ServerModule,
        ],
        bootstrap: [app_component_1.AppComponent],
    })
], AppServerModule);
//# sourceMappingURL=app.module.server.js.map