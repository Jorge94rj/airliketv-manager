const execSync = require('child_process').execSync;

const args = process.argv.slice(2);

const name = args[0];
const inputDir = './imports';
const outputDir = './exports';
const inputFile = `${inputDir}/${name}.gltf`;
const outputFile = `${outputDir}/${name}-c.gltf`;

const output = execSync(
  `
    echo "compressing file..."
    gltf-pipeline -i ${inputFile} -o ${outputFile} --draco.compressionLevel=10
    cd ${outputDir}
    npx gltfjsx ${name}-c.gltf
    echo "done!"
    `,
    // cd ${outputDir}
    // npx gltfjsx ${name}-c.gltf
    // echo "done!"
{encoding: 'utf-8'});
