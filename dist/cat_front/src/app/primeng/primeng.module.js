"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimengModule = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const table_1 = require("primeng/table");
const inputtext_1 = require("primeng/inputtext");
const password_1 = require("primeng/password");
const toolbar_1 = require("primeng/toolbar");
const button_1 = require("primeng/button");
const dialog_1 = require("primeng/dialog");
const sidebar_1 = require("primeng/sidebar");
const toast_1 = require("primeng/toast");
const menu_1 = require("primeng/menu");
const card_1 = require("primeng/card");
const steps_1 = require("primeng/steps");
const dropdown_1 = require("primeng/dropdown");
const fileupload_1 = require("primeng/fileupload");
const calendar_1 = require("primeng/calendar");
const autocomplete_1 = require("primeng/autocomplete");
const multiselect_1 = require("primeng/multiselect");
const listbox_1 = require("primeng/listbox");
const avatar_1 = require("primeng/avatar");
const avatargroup_1 = require("primeng/avatargroup");
const tooltip_1 = require("primeng/tooltip");
const checkbox_1 = require("primeng/checkbox");
const confirmdialog_1 = require("primeng/confirmdialog");
const cascadeselect_1 = require("primeng/cascadeselect");
const divider_1 = require("primeng/divider");
const accordion_1 = require("primeng/accordion");
const panelmenu_1 = require("primeng/panelmenu");
const megamenu_1 = require("primeng/megamenu");
const panel_1 = require("primeng/panel");
const rating_1 = require("primeng/rating");
const radiobutton_1 = require("primeng/radiobutton");
const inputnumber_1 = require("primeng/inputnumber");
const inputswitch_1 = require("primeng/inputswitch");
const overlaypanel_1 = require("primeng/overlaypanel");
const timeline_1 = require("primeng/timeline");
const chip_1 = require("primeng/chip");
const chips_1 = require("primeng/chips");
const dataview_1 = require("primeng/dataview");
const tabview_1 = require("primeng/tabview");
const organizationchart_1 = require("primeng/organizationchart");
const blockui_1 = require("primeng/blockui");
const dock_1 = require("primeng/dock");
const tristatecheckbox_1 = require("primeng/tristatecheckbox");
const message_1 = require("primeng/message");
const progressspinner_1 = require("primeng/progressspinner");
const chart_1 = require("primeng/chart");
const fieldset_1 = require("primeng/fieldset");
const menubar_1 = require("primeng/menubar");
const breadcrumb_1 = require("primeng/breadcrumb");
const paginator_1 = require("primeng/paginator");
const dynamicdialog_1 = require("primeng/dynamicdialog");
let PrimengModule = class PrimengModule {
};
exports.PrimengModule = PrimengModule;
exports.PrimengModule = PrimengModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [],
        imports: [
            common_1.CommonModule,
            progressspinner_1.ProgressSpinnerModule,
            message_1.MessageModule,
            table_1.TableModule,
            inputtext_1.InputTextModule,
            password_1.PasswordModule,
            toolbar_1.ToolbarModule,
            button_1.ButtonModule,
            dialog_1.DialogModule,
            sidebar_1.SidebarModule,
            toast_1.ToastModule,
            menu_1.MenuModule,
            card_1.CardModule,
            steps_1.StepsModule,
            dropdown_1.DropdownModule,
            fileupload_1.FileUploadModule,
            calendar_1.CalendarModule,
            autocomplete_1.AutoCompleteModule,
            multiselect_1.MultiSelectModule,
            listbox_1.ListboxModule,
            avatar_1.AvatarModule,
            avatargroup_1.AvatarGroupModule,
            tooltip_1.TooltipModule,
            checkbox_1.CheckboxModule,
            confirmdialog_1.ConfirmDialogModule,
            cascadeselect_1.CascadeSelectModule,
            divider_1.DividerModule,
            accordion_1.AccordionModule,
            panelmenu_1.PanelMenuModule,
            megamenu_1.MegaMenuModule,
            panel_1.PanelModule,
            rating_1.RatingModule,
            radiobutton_1.RadioButtonModule,
            inputnumber_1.InputNumberModule,
            inputswitch_1.InputSwitchModule,
            overlaypanel_1.OverlayPanelModule,
            timeline_1.TimelineModule,
            chip_1.ChipModule,
            chips_1.ChipsModule,
            dataview_1.DataViewModule,
            tabview_1.TabViewModule,
            organizationchart_1.OrganizationChartModule,
            blockui_1.BlockUIModule,
            dock_1.DockModule,
            tristatecheckbox_1.TriStateCheckboxModule,
            avatar_1.AvatarModule,
            avatargroup_1.AvatarGroupModule,
            chart_1.ChartModule,
            fieldset_1.FieldsetModule,
            menubar_1.MenubarModule,
            breadcrumb_1.BreadcrumbModule,
            paginator_1.PaginatorModule,
            dynamicdialog_1.DynamicDialogModule
        ],
        exports: [
            progressspinner_1.ProgressSpinnerModule,
            message_1.MessageModule,
            table_1.TableModule,
            inputtext_1.InputTextModule,
            password_1.PasswordModule,
            toolbar_1.ToolbarModule,
            button_1.ButtonModule,
            dialog_1.DialogModule,
            sidebar_1.SidebarModule,
            toast_1.ToastModule,
            menu_1.MenuModule,
            card_1.CardModule,
            steps_1.StepsModule,
            dropdown_1.DropdownModule,
            fileupload_1.FileUploadModule,
            calendar_1.CalendarModule,
            autocomplete_1.AutoCompleteModule,
            multiselect_1.MultiSelectModule,
            listbox_1.ListboxModule,
            avatar_1.AvatarModule,
            avatargroup_1.AvatarGroupModule,
            tooltip_1.TooltipModule,
            checkbox_1.CheckboxModule,
            confirmdialog_1.ConfirmDialogModule,
            cascadeselect_1.CascadeSelectModule,
            divider_1.DividerModule,
            accordion_1.AccordionModule,
            panelmenu_1.PanelMenuModule,
            megamenu_1.MegaMenuModule,
            panel_1.PanelModule,
            rating_1.RatingModule,
            radiobutton_1.RadioButtonModule,
            inputnumber_1.InputNumberModule,
            inputswitch_1.InputSwitchModule,
            overlaypanel_1.OverlayPanelModule,
            timeline_1.TimelineModule,
            chip_1.ChipModule,
            chips_1.ChipsModule,
            dataview_1.DataViewModule,
            tabview_1.TabViewModule,
            organizationchart_1.OrganizationChartModule,
            blockui_1.BlockUIModule,
            dock_1.DockModule,
            tristatecheckbox_1.TriStateCheckboxModule,
            avatar_1.AvatarModule,
            avatargroup_1.AvatarGroupModule,
            chart_1.ChartModule,
            fieldset_1.FieldsetModule,
            menubar_1.MenubarModule,
            breadcrumb_1.BreadcrumbModule,
            paginator_1.PaginatorModule,
            dynamicdialog_1.DynamicDialogModule
        ]
    })
], PrimengModule);
//# sourceMappingURL=primeng.module.js.map