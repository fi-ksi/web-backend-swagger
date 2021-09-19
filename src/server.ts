import { app } from './app';

const port = process.env.PORT || 3000;

app.listen(port, () =>
    console.log(`KSI-backend-proxy at http://localhost:${port}`)
);
