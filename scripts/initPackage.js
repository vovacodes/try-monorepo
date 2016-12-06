#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const fsExtra = require('fs.extra');

const packageDirName = process.argv[2];
const packageName = process.argv[3] || packageDirName;

if (!packageName) {
    throw new Error(
        '"packageName" is not provided. ' +
        'Please use this script like this: "node initPackage myPackageDir [@myOrg/myPackage]"'
    );
}

const newPackagePath = path.resolve(__dirname, `../packages/${packageDirName}`);

if (fs.existsSync(newPackagePath)) {
    throw new Error(`${newPackagePath} already exists`);
}

fsExtra.mkdirpSync(newPackagePath);

fsExtra.copyRecursive(
    path.resolve(__dirname, '../blueprints/package'),
    newPackagePath,
    (err) => {
        if (err) {
            throw err;
        }

        const packageJsonPath = path.resolve(newPackagePath, 'package.json');

        const packageJsonTemplate = fs.readFileSync(packageJsonPath, 'utf8');

        const newPackageJson = packageJsonTemplate.replace('{{packageName}}', packageName);

        fs.writeFileSync(packageJsonPath, newPackageJson);

        console.log(`package/${packageDirName} is generated`);
    }
);
