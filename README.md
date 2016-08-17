# lsdeps [![Build Status](https://img.shields.io/travis/Den-dp/lsdeps.svg?style=flat-square)](https://travis-ci.org/Den-dp/lsdeps) [![version](https://img.shields.io/npm/v/lsdeps.svg?style=flat-square)](https://npmjs.com/package/lsdeps) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release) [![devDependency Status](https://img.shields.io/david/dev/den-dp/dota2-heroes.svg?style=flat-square)](https://david-dm.org/den-dp/dota2-heroes#info=devDependencies)


Provides flat variant of `npm ls` command.

## Use case
Helps to generate simple tsv reports with info about dependencies used in your project, their versions, and descriptions for top-level packages. Usual thing for very strict release processes.

![example](https://cloud.githubusercontent.com/assets/1770529/17754371/d9c0d19c-64dc-11e6-844e-a70082bd4a02.png)

## Installation
Install `lsdeps` globally with
```
npm i lsdeps -g
```

## Usage
Run `lsdeps` command in desired directory.
Pipe it to `tsv`
```
lsdeps > dependencies.tsv
```

## Output
```
async	0.2.10	http://registry.npmjs.org/async/-/async-0.2.10.tgz	Higher-order functions and common patterns for asynchronous code
mocha	2.3.4	http://registry.npmjs.org/mocha/-/mocha-2.3.4.tgz	simple, flexible, fun test framework
commander	2.3.0	http://registry.npmjs.org/commander/-/commander-2.3.0.tgz	required by mocha@2.3.4
debug	2.2.0	http://registry.npmjs.org/debug/-/debug-2.2.0.tgz	required by mocha@2.3.4
ms	0.7.1	http://registry.npmjs.org/ms/-/ms-0.7.1.tgz	required by mocha@2.3.4
diff	1.4.0	http://registry.npmjs.org/diff/-/diff-1.4.0.tgz	required by mocha@2.3.4
escape-string-regexp	1.0.2	http://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.2.tgz	required by mocha@2.3.4
glob	3.2.3	http://registry.npmjs.org/glob/-/glob-3.2.3.tgz	required by mocha@2.3.4
graceful-fs	2.0.3	http://registry.npmjs.org/graceful-fs/-/graceful-fs-2.0.3.tgz	required by mocha@2.3.4
inherits	2.0.1	http://registry.npmjs.org/inherits/-/inherits-2.0.1.tgz	required by mocha@2.3.4
minimatch	0.2.14	http://registry.npmjs.org/minimatch/-/minimatch-0.2.14.tgz	required by mocha@2.3.4
...
```

## API
```js
var lsdeps = require('lsdeps');

lsdeps().then(function(listOfDependencies){
    listOfDependencies.forEach(console.log.bind(console))
})
.catch(console.error.bind(console));
```
