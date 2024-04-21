var fs = require('fs')
var archiver = require('archiver')

var output = fs.createWriteStream('uglybox.zip')
var archive = archiver('zip')

output.on('close', () => {
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');
});

archive.on('error', (err) => {
    throw err;
});

archive.pipe(output);

archive.file('install/app.js', { name: 'uglybox/app.js', mode: 0644 })
archive.file('install/package.json', { name: 'uglybox/package.json', mode: 0644 })
archive.file('install/yarn.lock', { name: 'uglybox/yarn.lock', mode: 0644 })
archive.file('install/install-pi', { name: 'uglybox/install-pi', mode: 0755 })
archive.file('install/uglybox.service', { name: 'uglybox/uglybox.service', mode: 0644 })
archive.file('install/autostart', { name: 'uglybox/autostart', mode: 0644 })

archive.directory('dist/', 'uglybox/dist')

archive.finalize()
