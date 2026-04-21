import {linkedShape} from '../package.js';
import { org } from '../ontologies/org.js';
import { Thing } from '@_linked/schema/shapes/Thing';

@linkedShape
export class Role extends Thing {
  static targetClass = org.Role;
}
