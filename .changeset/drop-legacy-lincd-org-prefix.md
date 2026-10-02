---
'@_linked/org': patch
---

The ontology data file no longer declares the legacy `lincd-org` prefix
(`http://lincd.org/ont/lincd-org/`). No term used it — this package wraps the external W3C
vocabulary at `http://www.w3.org/ns/org#`, and every term IRI stays exactly as it was. The
file's `@context` now declares the `org` prefix instead, matching the prefix the ontology is
registered under, and the file is renamed `data/lincd-org.json` → `data/org.json`.

Patch rather than minor: no term IRI changes, and the data file was never an importable
subpath (the package's `exports` map only resolves `.js` modules), so nothing that consumers
can reach is removed. Stored data that used the `http://lincd.org/ont/lincd-org/` namespace is
not migrated; there is none in practice, but clear dev datasets if in doubt.

Also adds `npm test` (node's built-in runner, against the built `lib/`), asserting the
namespace and the absence of the legacy prefix.
