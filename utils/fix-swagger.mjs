import * as fs from 'fs';

const file = 'src/swagger/swagger.json';

const content = JSON.parse(fs.readFileSync(file, {encoding: 'utf8'}));
content['paths']['/submFiles/{submFileId}']['get']['responses']['200']['content']['application/json']['schema']['format'] = 'binary';
fs.writeFileSync(file, JSON.stringify(content, null, 2));
