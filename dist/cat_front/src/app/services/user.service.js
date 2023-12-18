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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:3000/api/auth';
        this.token = '';
        this.apiUrl1 = 'http://localhost:3000/api/users';
    }
    login(email, password) {
        const body = { email, password };
        return this.http.post(`${this.apiUrl}/login`, body);
    }
    setToken(token) {
        this.token = token;
    }
    getToken() {
        return this.token;
    }
    getAuthenticatedData() {
        const headers = { Authorization: `Bearer ${this.getToken()}` };
        return this.http.get(`${this.apiUrl}/data`, { headers });
    }
    sendResetEmail(email) {
        const resetUrl = `${this.apiUrl}/send-reset-email`;
        return this.http.post(resetUrl, { email });
    }
    resetPassword(token, newPassword) {
        return this.http.post(`${this.apiUrl}/reset-password`, { token, newPassword });
    }
    createUser(user) {
        return this.http.post(this.apiUrl1, user);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" ? _a : Object])
], UserService);
//# sourceMappingURL=user.service.js.map