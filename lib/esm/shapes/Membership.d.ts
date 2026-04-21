import { Organization } from '@_linked/schema/shapes/Organization';
import { Person } from '@_linked/schema/shapes/Person';
import { Thing } from '@_linked/schema/shapes/Thing';
import { ShapeSet } from '@_linked/core/collections/ShapeSet';
import { Role } from './Role.js';
export declare class Membership extends Thing {
    static targetClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    get member(): Person;
    get role(): Role;
    get organization(): Organization;
}
declare module '@_linked/schema/shapes/Person' {
    interface Person {
        readonly memberships: ShapeSet<Membership>;
    }
}
