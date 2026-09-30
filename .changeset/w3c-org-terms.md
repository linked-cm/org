---
'@_linked/org': minor
---

Add the W3C ORG terms for organizational structure, legal identity and posts: `OrganizationalUnit`, `subOrganizationOf`, `linkedTo`, `identifier`, `memberDuring`, `Post`, `postIn` and `heldBy` (https://www.w3.org/TR/vocab-org/). They sit in the same `org:` namespace, so apps that were minting them with `ns(...)` get identical IRIs and need no data migration.
