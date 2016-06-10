'use strict';

module.exports = function lsdeps() {
    return new Promise(function (resolve, reject) {
        //var fs = require('fs');
        //var stdin = fs.createReadStream('./npm-shrinkwrap.json');

        require('child_process').exec('npm ls --json --long', {
            encoding: 'utf8',
            // maxBuffer Number largest amount of data (in bytes) allowed on stdout or stderr - if exceeded child process is killed (Default: 200*1024)
            maxBuffer: 10 * 1024 * 1024
        }, function (error, stdout, stderr) {
            if (error !== null) {
                reject(`exec error: ${error}`)
            }

            try {
                var parsedData = JSON.parse(stdout);
            } catch (e) {
                reject(`can't parse json output: ${e}`);
            }

            if (parsedData === undefined) {
                reject(`empty output`);
            } else {
                var result = collectSetOfSortedDependencies(parsedData.dependencies);
                result.forEach(function (dep) {
                    process.stdout.write(`${dep}\n`);
                });
                resolve(result);
            }

        });

    });
};

class Dependency{
    constructor(name, version, tarball, parent, grandParent, description){
        this.name = name;
        this.version = version;
        this.tarball = tarball;
        this.parent = parent;
        this.grandParent = grandParent;
        this.description= description;
    }
    toString(){
        return `${this.name}\t${this.version}\t${this.tarball}\t${this.grandParent ? `required by ${this.parent}` : this.description || ''}`
    }
}

function collectSetOfSortedDependencies(deps) {
    let parent;

    function collect(dependencyHashMap, acc, grandParent) {
        return Object.keys(dependencyHashMap)
            .reduce(function (prev, name) {
                if (!grandParent) {
                    parent = `${name}@${dependencyHashMap[name].version}`;
                }
                // dependency object might be empty if npm ls calles with --long
                // empty dependency means that the required dependency exists higher in the fs-hierarchy
                if (dependencyHashMap[name].version) {
                    prev.add(
                        new Dependency(
                            name,
                            dependencyHashMap[name].version,
                            dependencyHashMap[name].dist.tarball,
                            parent,
                            grandParent,
                            dependencyHashMap[name].description || ''
                        )
                    );

                    if (dependencyHashMap[name].dependencies) {
                        collect(dependencyHashMap[name].dependencies, prev, parent);
                    }
                }
                return prev;
            }, acc);
    }

    var collectedDeps = collect(deps, new Set());

    return Array.from(collectedDeps);
        //.sort(compareFn);
}

function compareFn(a, b) {
    const _a = a.toLowerCase();
    const _b = b.toLowerCase();
    if (_a > _b) {
        return 1;
    }
    if (_a < _b) {
        return -1;
    }
    return 0;
}
