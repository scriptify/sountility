const path = require(`path`);
const fs = require(`fs`);

const PATHS = {
  packages: path.join(__dirname, `..`, `packages`),
  playgroundBuild: path.join(__dirname, `..`, `build`)
};

function getPackages(packagesDir) {
  const packages = [];
  const files = fs.readdirSync(packagesDir);

  files.forEach((file) => {
    const fPath = path.join(packagesDir, file);
    const isDir = fs.statSync(fPath).isDirectory();

    if (isDir) {
      const packageFiles = fs.readdirSync(fPath);

      const structure = {
        dirs: [],
        files: []
      };

      packageFiles.forEach((pFile) => {
        const pPath = path.join(packagesDir, file, pFile);
        const isDirP = fs.statSync(pPath).isDirectory();
        if (isDirP)
          structure.dirs.push(pFile);
        else
          structure.files.push(pFile);
      });

      let isPackage = true;
      [`src`, `dist`].forEach((d) => {
        if (!structure.dirs.includes(d)) {
          isPackage = false;
          return 0;
        }
        return true;
      });

      [`package.json`].forEach((f) => {
        if (!structure.files.includes(f)) {
          isPackage = false;
          return 0;
        }
        return true;
      });

      if (isPackage)
        packages.push(file);
    }
  });

  return packages;
}


function createCommandObject(command) {
  const split = command.split(`start:`);
  const ret = {
    cmd: ``,
    params: process.argv.filter((arg, i) => i >= 4)
  };

  if (split.length <= 1)
    throw new Error(`Invalid command: ${command}`);

  ret.cmd = split[1];

  return ret;
}


function packagesToAliases(packages, packagesPath) {
  let retObj = {};

  packages.forEach((p) => {
    retObj = Object.assign({}, retObj, {
      [p]: path.resolve(packagesPath, `${p}/src`)
    });
  });

  return retObj;
}

const TARGET = process.env.npm_lifecycle_event;
const commandObject = createCommandObject(TARGET);

module.exports = {
  packagesToAliases,
  commandObject,
  getPackages,
  PATHS
};
