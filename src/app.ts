import express from 'express';
import bodyParser from 'body-parser';
import { RegisterRoutes } from '../build/routes';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import swaggerUI from 'swagger-ui-dist';
import path from 'path';

export const app = express();

app.use('/swagger-ui', express.static(swaggerUI.absolutePath()));
app.use('/swagger', express.static(path.resolve(path.join(__dirname, 'swagger'))));
app.get('/', (req, res) => {
    res.redirect('/swagger-ui/');
});

// Use body parser to read sent json payloads
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

RegisterRoutes(app);

