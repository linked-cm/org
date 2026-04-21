import { Organization } from '@_linked/schema/shapes/Organization';
import { Person } from '@_linked/schema/shapes/Person';
import { Thing } from '@_linked/schema/shapes/Thing';
import { ShapeSet } from '@_linked/core/collections/ShapeSet';
import { shacl } from '@_linked/core/ontologies/shacl';
import { createPropertyShape, objectProperty } from '@_linked/core/shapes/SHACL';
import { org } from '../ontologies/org.js';
import { linkedShape } from '../package.js';
import { Role } from './Role.js';

@linkedShape
export class Membership extends Thing {
  static targetClass = org.Membership;

  @objectProperty({
    path: org.member,
    shape: Person,
    maxCount: 1,
  })
  get member(): Person {
    return undefined as any;
  }

  @objectProperty({
    path: org.role,
    shape: Role,
    maxCount: 1,
  })
  get role(): Role {
    return undefined as any;
  }

  @objectProperty({
    path: org.organization,
    shape: Organization,
    maxCount: 1,
  })
  get organization(): Organization {
    return undefined as any;
  }
}

//Support person.memberships in queries
createPropertyShape(
  {
    path: org.hasMembership,
    shape: Membership,
  },
  'memberships',
  shacl.IRI,
  Person
);
declare module '@_linked/schema/shapes/Person' {
  interface Person {
    readonly memberships: ShapeSet<Membership>;
  }
}

//TODO: support foaf:Agent
// Person.addProperty("organizations",{
//   path:[org.hasMembership,org.organization],
// });
// declare module '@_linked/schema/shapes/Person' {
//   interface Person {
//     readonly organizations: ShapeSet<Organization>;
//   }
// }
