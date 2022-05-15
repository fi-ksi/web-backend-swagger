# Web Backend Swagger Proxy

A proxy for [web-backend](https://github.com/fi-ksi/web-backend) with added `/swagger/swagger.json` and reqeust parameter type verification.

Based upon [TypeScript OpenAPI](https://tsoa-community.github.io/docs/getting-started.html#defining-a-simple-controller).

## Installation

```bash
git clone https://github.com/fi-ksi/web-backend-swagger.git &&
cd web-backend-swagger &&
npm install 
```

## Running

```bash
# to generate swagger.json file
npm run gen.api
# to start proxy server with latest endpoint config
npm run serve.dev
```

The backend will then proxy all request to `http://localhost:3030`.

## Code structure

- All endpoint definitions are placed under `src/endpoint/`
- All model definitions are placed under `src/model/`

The `src/util` directory holds functions and classes for proxying requests to the real backend and for masking authentication (which is also handled by the real backend).
