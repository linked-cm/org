import type { NodeReferenceValue } from '@_linked/core/utils/NodeReference';
/**
 * Load the data of this ontology into memory, thus adding the properties of the entities of this ontology to the local graph.
 */
export declare var loadData: () => Promise<typeof import("../data/lincd-org.json")>;
/**
 * The namespace of this ontology, which can be used to create NamedNodes with URI's not listed in this file
 */
export declare var ns: (term: string) => NodeReferenceValue;
/**
 * The NamedNode of the ontology itself
 */
export declare var _self: NodeReferenceValue;
export declare var Membership: NodeReferenceValue;
export declare var Role: NodeReferenceValue;
export declare var hasMembership: NodeReferenceValue;
export declare var Organization: NodeReferenceValue;
export declare var organization: NodeReferenceValue;
export declare var member: NodeReferenceValue;
export declare var role: NodeReferenceValue;
export declare const org: {
    Membership: NodeReferenceValue;
    Role: NodeReferenceValue;
    hasMembership: NodeReferenceValue;
    Organization: NodeReferenceValue;
    organization: NodeReferenceValue;
    member: NodeReferenceValue;
    role: NodeReferenceValue;
};
