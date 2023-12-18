"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPageComponent = void 0;
const core_1 = require("@angular/core");
const cats_service_1 = require("../../../services/cats.service");
let ListPageComponent = class ListPageComponent {
    constructor(catService) {
        this.catService = catService;
        this.cats = [];
    }
    ngOnInit() {
        this.loadCats();
    }
    loadCats() {
        this.catService.getCats().subscribe((data) => {
            this.cats = data;
        }, (error) => {
            console.error('Error fetching cats:', error);
        });
    }
    getImageUrl(image) {
        return `http://localhost:3000/files/cat/${image}`;
    }
};
exports.ListPageComponent = ListPageComponent;
exports.ListPageComponent = ListPageComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-list-page',
        templateUrl: './list-page.component.html',
    }),
    __metadata("design:paramtypes", [cats_service_1.CatService])
], ListPageComponent);
//# sourceMappingURL=list-page.component.js.map