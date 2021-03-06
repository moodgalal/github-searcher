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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var GithubService = (function () {
    function GithubService(_http) {
        this._http = _http;
        this.clientId = 'b4c8a0d0c9a428365c49';
        this.clientSecret = '94c396dc1f03caa178a424e71846de4a83c079ed';
        console.log('Service is ready!');
        this.userName = 'moodgalal';
    }
    GithubService.prototype.getUser = function () {
        return this._http.get("http://api.github.com/users/" + this.userName + "?client_id" + this.clientId + "&client_secret" + this.clientSecret)
            .map(function (res) { return res.json(); });
    };
    GithubService.prototype.getRepo = function () {
        return this._http.get("http://api.github.com/users/" + this.userName + "/repos?client_id" + this.clientId + "&client_secret" + this.clientSecret)
            .map(function (res) { return res.json(); });
    };
    GithubService.prototype.updateUser = function (userName) {
        this.userName = userName;
    };
    return GithubService;
}());
GithubService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GithubService);
exports.GithubService = GithubService;
//# sourceMappingURL=github.service.js.map