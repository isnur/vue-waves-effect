const util = require('util');
const exec = util.promisify(require('child_process').exec);
const path = require('path');
const fs = require('fs-extra');

const DOCS_FOLDER = 'docs';

(async () => {
    try {
        // const indexPath = path.join('src', 'index.js');
        // build lib
        await exec(`npm run dist`);

        // build site
        await fs.emptyDir(DOCS_FOLDER); // empty the <docs> folder

        console.log('dir from: ' + process.cwd());
        let { stdout: out, stderr: err } = await exec(`cd ./site`);
        console.log(err, out);
        if (err) {
            console.log(out);
        }
        console.log('dir to: ' + process.cwd());
        let { stdout: sout, stderr: serr } = await exec(`npm run build`);
        console.log(serr, sout);
        if (serr) {
            console.log(sout);
        }

        // copy the site <site/dist> in <docs>
        await fs.copy(path.join(__dirname, 'site', 'dist'), path.join(__dirname, DOCS_FOLDER));
    } catch (err) {
        console.error(err);
    }
})();