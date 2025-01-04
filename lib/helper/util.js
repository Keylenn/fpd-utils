const paths = require("./paths");
const { editFile } = require("./file");
const fs = require("fs");

function convertToCamelCase(str) {
  const parts = str.split("-");

  for (let i = 0; i < parts.length; i++) {
    parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
  }

  return parts.join("");
}

function initOneUse(name) {
  const args = process.argv.slice(2);
  if (!name) name = args[0];
  const dir = paths.resolvePath(`src/uses/${name}`);
  if (fs.existsSync(dir)) {
    console.error(`The name(${name}) has been initialized`);
    return;
  }
  fs.mkdirSync(dir);
  const fnName = `use${convertToCamelCase(name)}`;

  const content = `function ${fnName}() {}\n\nmodule.exports = ${fnName};`;
  editFile(`${dir}/index.js`, content);
}

module.exports = {
  convertToCamelCase,
  initOneUse,
};
