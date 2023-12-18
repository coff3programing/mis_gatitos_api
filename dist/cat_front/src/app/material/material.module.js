"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialModule = void 0;
const core_1 = require("@angular/core");
const autocomplete_1 = require("@angular/material/autocomplete");
const button_1 = require("@angular/material/button");
const card_1 = require("@angular/material/card");
const chips_1 = require("@angular/material/chips");
const dialog_1 = require("@angular/material/dialog");
const form_field_1 = require("@angular/material/form-field");
const grid_list_1 = require("@angular/material/grid-list");
const icon_1 = require("@angular/material/icon");
const input_1 = require("@angular/material/input");
const list_1 = require("@angular/material/list");
const progress_spinner_1 = require("@angular/material/progress-spinner");
const select_1 = require("@angular/material/select");
const sidenav_1 = require("@angular/material/sidenav");
const snack_bar_1 = require("@angular/material/snack-bar");
const toolbar_1 = require("@angular/material/toolbar");
let MaterialModule = class MaterialModule {
};
exports.MaterialModule = MaterialModule;
exports.MaterialModule = MaterialModule = __decorate([
    (0, core_1.NgModule)({
        exports: [
            autocomplete_1.MatAutocompleteModule,
            button_1.MatButtonModule,
            card_1.MatCardModule,
            chips_1.MatChipsModule,
            dialog_1.MatDialogModule,
            form_field_1.MatFormFieldModule,
            grid_list_1.MatGridListModule,
            icon_1.MatIconModule,
            input_1.MatInputModule,
            list_1.MatListModule,
            progress_spinner_1.MatProgressSpinnerModule,
            select_1.MatSelectModule,
            sidenav_1.MatSidenavModule,
            snack_bar_1.MatSnackBarModule,
            toolbar_1.MatToolbarModule,
        ],
    })
], MaterialModule);
//# sourceMappingURL=material.module.js.map