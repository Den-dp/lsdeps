# lsdeps [![Build Status](https://img.shields.io/travis/Den-dp/lsdeps.svg?style=flat-square)](https://travis-ci.org/Den-dp/lsdeps) [![version](https://img.shields.io/npm/v/lsdeps.svg?style=flat-square)](http://npm.im/lsdeps) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release) [![devDependency Status](https://img.shields.io/david/dev/den-dp/dota2-heroes.svg?style=flat-square)](https://david-dm.org/den-dp/dota2-heroes#info=devDependencies)


Provides flat variant of `npm ls` command.

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
Or mode advanced:
```js
var lsdeps = require('lsdeps');

lsdeps().then(function(listOfDependencies){
    listOfDependencies.forEach(console.log.bind(console))
})
.catch(console.error.bind(console));
```
