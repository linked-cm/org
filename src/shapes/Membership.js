"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Organization_1 = require("@_linked/schema/shapes/Organization");
var Person_1 = require("@_linked/schema/shapes/Person");
var Thing_1 = require("@_linked/schema/shapes/Thing");
var shacl_1 = require("@_linked/core/ontologies/shacl");
var SHACL_1 = require("@_linked/core/shapes/SHACL");
var org_js_1 = require("../ontologies/org.js");
var package_js_1 = require("../package.js");
var Role_js_1 = require("./Role.js");
var Membership = /** @class */ (function (_super) {
    __extends(Membership, _super);
    function Membership() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Membership.prototype, "member", {
        get: function () {
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Membership.prototype, "role", {
        get: function () {
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Membership.prototype, "organization", {
        get: function () {
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    var _a, _b;
    Membership.targetClass = org_js_1.org.Membership;
    __decorate([
        (0, SHACL_1.objectProperty)({
            path: org_js_1.org.member,
            shape: Person_1.Person,
            maxCount: 1,
        }),
        __metadata("design:type", typeof (_a = typeof Person_1.Person !== "undefined" && Person_1.Person) === "function" ? _a : Object),
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
        __metadata("design:type", typeof (_b = typeof Organization_1.Organization !== "undefined" && Organization_1.Organization) === "function" ? _b : Object),
        __metadata("design:paramtypes", [])
    ], Membership.prototype, "organization", null);
    Membership = __decorate([
        package_js_1.linkedShape
    ], Membership);
    return Membership;
}(Thing_1.Thing));
exports.Membership = Membership;
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