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
exports.Membership = void 0;
const Organization_1 = require("@_linked/schema/shapes/Organization");
const Person_1 = require("@_linked/schema/shapes/Person");
const Thing_1 = require("@_linked/schema/shapes/Thing");
const shacl_1 = require("@_linked/core/ontologies/shacl");
const SHACL_1 = require("@_linked/core/shapes/SHACL");
const org_js_1 = require("../ontologies/org.js");
const package_js_1 = require("../package.js");
const Role_js_1 = require("./Role.js");
let Membership = class Membership extends Thing_1.Thing {
    get member() {
        return undefined;
    }
    get role() {
        return undefined;
    }
    get organization() {
        return undefined;
    }
};
exports.Membership = Membership;
Membership.targetClass = org_js_1.org.Membership;
__decorate([
    (0, SHACL_1.objectProperty)({
        path: org_js_1.org.member,
        shape: Person_1.Person,
        maxCount: 1,
    }),
    __metadata("design:type", Person_1.Person),
    __metadata("design:paramtypes", [])
], Membership.prototype, "member", null);
__decorate([
    (0, SHACL_1.objectProperty)({
        path: org_js_1.org.role,
        shape: Role_js_1.Role,
        maxCount: 1,
    }),
    __metadata("design:type", Role_js_1.Role),
    __metadata("design:paramtypes", [])
], Membership.prototype, "role", null);
__decorate([
    (0, SHACL_1.objectProperty)({
        path: org_js_1.org.organization,
        shape: Organization_1.Organization,
        maxCount: 1,
    }),
    __metadata("design:type", Organization_1.Organization),
    __metadata("design:paramtypes", [])
], Membership.prototype, "organization", null);
exports.Membership = Membership = __decorate([
    package_js_1.linkedShape
], Membership);
//Support person.memberships in queries
(0, SHACL_1.createPropertyShape)({
    path: org_js_1.org.hasMembership,
    shape: Membership,
}, 'memberships', shacl_1.shacl.IRI, Person_1.Person);
//TODO: support foaf:Agent
// Person.addProperty("organizations",{
//   path:[org.hasMembership,org.organization],
// });
// declare module '@_linked/schema/shapes/Person' {
//   interface Person {
//     readonly organizations: ShapeSet<Organization>;
//   }
// }
//# sourceMappingURL=Membership.js.map