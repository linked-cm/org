var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Organization } from '@_linked/schema/shapes/Organization';
import { Person } from '@_linked/schema/shapes/Person';
import { Thing } from '@_linked/schema/shapes/Thing';
import { shacl } from '@_linked/core/ontologies/shacl';
import { createPropertyShape, objectProperty } from '@_linked/core/shapes/SHACL';
import { org } from '../ontologies/org.js';
import { linkedShape } from '../package.js';
import { Role } from './Role.js';
let Membership = class Membership extends Thing {
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
Membership.targetClass = org.Membership;
__decorate([
    objectProperty({
        path: org.member,
        shape: Person,
        maxCount: 1,
    }),
    __metadata("design:type", Person),
    __metadata("design:paramtypes", [])
], Membership.prototype, "member", null);
__decorate([
    objectProperty({
        path: org.role,
        shape: Role,
        maxCount: 1,
    }),
    __metadata("design:type", Role),
    __metadata("design:paramtypes", [])
], Membership.prototype, "role", null);
__decorate([
    objectProperty({
        path: org.organization,
        shape: Organization,
        maxCount: 1,
    }),
    __metadata("design:type", Organization),
    __metadata("design:paramtypes", [])
], Membership.prototype, "organization", null);
Membership = __decorate([
    linkedShape
], Membership);
export { Membership };
//Support person.memberships in queries
createPropertyShape({
    path: org.hasMembership,
    shape: Membership,
}, 'memberships', shacl.IRI, Person);
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