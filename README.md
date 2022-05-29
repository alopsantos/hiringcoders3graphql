# Hiring Coders #3 Fase 1
## GraphQL

<p>Monorepo</p>

- [x] packages
  - [x] server
  - [x] web

```

pnpm init
touch pnpm-workspaces.yaml
pnpm i --filter @dev-demands/server
pnpm --filter @dev-demands/server run start

pnpx create-react-app packages/web
pnpm i --filter @dev-demands/web

pnpm i react-router-dom --filter @dev-demands/web
pnpm i express --filter @dev-demands/server

pnpm i cors --filter @dev-demands/server
```