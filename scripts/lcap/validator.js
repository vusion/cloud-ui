const Ajv = require('ajv').default;
const yaml = require('js-yaml');
const schema = require('./schema');
const path = require('path');
const fs = require('fs-extra');
const ajv = new Ajv();
const validate = ajv.compile(schema);
const lodash = require('lodash');
const components = require('./config');
const args = require('yargs').argv;

const root = path.join(__dirname, '../../src/components');
components.every((component) => {
    if (component.show) {
        const targetFile = path.join(root, component.name + '.vue', 'api.yaml');
        const context = yaml.load(fs.readFileSync(targetFile).toString());
        const valid = validate(context);
        if (!valid) {
            console.log(targetFile, '\n', validate.errors);
             /**
             * yarn node scripts/lcap/validator.js --HELP=true
             * 1. 开启辅助定位 key 的功能，自动找出必填的 key
             */
            if (args.HELP === 'true') {
                validate.errors.forEach(errorObject => {
                    /* 辅助寻找必填的缺失的 key */
                    if (errorObject.keyword === 'required') {
                        const currentPath = errorObject.dataPath.split('/');
                        const keyTitle = errorObject.params.missingProperty;
                        // 去掉第一个 ''
                        currentPath.shift();
                        lodash.set(context, `${currentPath.join('.')}.${keyTitle}`, '');
                        fs.writeFileSync(targetFile, yaml.safeDump(context));
                    }
                });
            }
          
            return false;
        }
    }
    return true;
});
