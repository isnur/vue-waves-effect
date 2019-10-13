const util = require('util');
const exec = util.promisify(require('child_process').exec);
const path = require('path');
const fs = require('fs-extra');

const DOCS_Folder = 'docs';

return (async () => {
    try {
        console.log(`Compiling library\n`);

        const indexPath = path.join('src', 'index.js');
        const { stdout, stderr } = await exec(`vue-cli-service build --target lib --name vueWavesEffect ${indexPath}`);
        // console.log('stdout:', stdout);
        if (stderr) {
            console.log(stderr);
        }

        // copy "umd" files and remove the "umd" part of the filename
        await fs.copy(path.join('dist', 'vueWavesEffect.umd.js'), path.join('dist', 'vueWavesEffect.js'));
        await fs.copy(path.join('dist', 'vueWavesEffect.umd.js.map'), path.join('dist', 'vueWavesEffect.js.map'));
        await fs.copy(path.join('dist', 'vueWavesEffect.umd.min.js'), path.join('dist', 'vueWavesEffect.min.js'));
        await fs.copy(path.join('dist', 'vueWavesEffect.umd.min.js.map'), path.join('dist', 'vueWavesEffect.min.js.map'));

        console.log(`Library compiled in the <dist> folder\n`);
    } catch (err) {
        console.error(err);
    }
})();