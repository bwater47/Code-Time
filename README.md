# Code Time

The frontend and API are separate applications and can be run, built, and deployed independently.

## Development

Install dependencies from the repository root and from `client/`:

```sh
npm install
cd client
npm install
```

Run the API and frontend in separate terminals:

```sh
npm run dev:server
npm run dev:client
```

The frontend development server proxies `/api` requests to `http://localhost:3001`. The API's `CLIENT_ORIGIN` defaults to `http://localhost:3000`.

## Build and deploy

Build the API from the repository root with `npm run build`, then run it with `npm start`. It listens on `PORT` (default `3001`) and exposes `/api/health`.

Build the frontend independently with `npm run build --prefix client`. Deploy the generated `client/build/` directory to a static web host configured to serve `index.html` for client-side routes.

Set `CLIENT_ORIGIN` on the API deployment to the deployed frontend's origin so browsers can make cross-origin API requests. Set `PORT` to the port provided by the hosting environment.
