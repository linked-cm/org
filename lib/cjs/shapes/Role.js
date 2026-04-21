"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const package_js_1 = require("../package.js");
const org_js_1 = require("../ontologies/org.js");
const Thing_1 = require("@_linked/schema/shapes/Thing");
let Role = class Role extends Thing_1.Thing {
};
exports.Role = Role;
Role.targetClass = org_js_1.org.Role;
exports.Role = Role = __decorate([
    package_js_1.linkedShape
], Role);
//# sourceMappingURL=Role.js.map