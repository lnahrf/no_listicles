const fs = require('fs');
const uglifyjs = require('uglify-js');
const files = [
    './enums/blacklist.js',
    './models/state.js',
    './models/article.js',
    './modules/index.js',
    './modules/identify.js',
    './modules/parser.js',
    './modules/score.js',
    
].map(file =>
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
