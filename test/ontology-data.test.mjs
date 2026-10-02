// Runs against the built output (lib/esm), so build first: `npm run build && npm test`.
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {loadData, ns} from '../lib/esm/ontologies/org.js';

test('ontology wraps the W3C org vocabulary', () => {
  assert.equal(ns('Role').id, 'http://www.w3.org/ns/org#Role');
});

test('ontology data declares the org prefix and no legacy lincd.org prefix', async () => {
  const data = await loadData();
  assert.equal(data['@context'].org, 'http://www.w3.org/ns/org#');
  assert.equal(data['@context']['lincd-org'], undefined);
  assert.ok(!JSON.stringify(data).includes('lincd.org'), 'no lincd.org IRI in ontology data');
});
