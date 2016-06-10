# lsdeps

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
```
var lsdeps = require('lsdeps');

lsdeps().then(function(listOfDependencies){
    listOfDependencies.forEach(console.log.bind(console))
})
.catch(console.error.bind(console));
```
