const Ajv = require('ajv').default;
const yaml = require('js-yaml');
const schema = require('./schema');
const path = require('path');
const fs = require('fs-extra');
const ajv = new Ajv();
const validate = ajv.compile(schema);
const components = require('./config');
const root = path.join(__dirname, '../../src/components');
components.every((component) => {
    if (component.show) {
        const targetFile = path.join(root, component.name + '.vue', 'api.yaml');
        const valid = validate(yaml.load(fs.readFileSync(targetFile).toString()));
        if (!valid) {
            console.log(targetFile, '\n', validate.errors);
            return false;
        }
    }
    return true;
});
