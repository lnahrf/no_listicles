import * as path from 'path';
import * as fs from 'fs';
import * as uglifyjs from 'uglify-js';

const dirs = ['models', 'modules']

const filePaths = dirs.flatMap((dir) => {
    return fs.readdirSync(dir).map((fileName) => path.join(dir, fileName))
})

const files = filePaths.map(file =>
    fs
        .readFileSync(file, 'utf8')
        .split('\n')
        .map(l => {
            //line manipulation
            if(l.includes('export')) l.replace('export', '');
            return l;
        })
        .filter(l => !l.startsWith('import'))
        .join('\n')
);


const minified = uglifyjs.minify(files);

if (minified.error) throw new Error(`Failed to minify: ${minified.error}`)

if(!fs.existsSync('./build')){
    fs.mkdirSync('./build')
}

fs.writeFileSync('./build/no_listicles.js', minified.code.replace("export", "const listlessfuncs="))
