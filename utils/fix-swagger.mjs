import * as fs from 'fs';

const file = 'src/swagger/swagger.json';

const content = JSON.parse(fs.readFileSync(file, {encoding: 'utf8'}));
for (let binaryPath of ['/submFiles/{submFileId}', '/admin/subm/eval/{evaluationId}', '/admin/subm/task/{taskId}', '/diplomas/{userId}/{yearId}/show']) {
    console.log('Fixing output format to binary for ', binaryPath);
    content['paths'][binaryPath]['get']['responses']['200']['content']['application/json']['schema']['format'] = 'binary';
}
fs.writeFileSync(file, JSON.stringify(content, null, 2));
