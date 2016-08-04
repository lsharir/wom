var path = require('path');
var _root = path.resolve(__dirname, '..');
var _src = path.resolve(__dirname, 'src');
var _node_modules = path.resolve(__dirname, 'node_modules');

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [_root].concat(args));
}

function nodeModule(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [_node_modules].concat(args));
}

function src(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [_src].concat(args));
}

module.exports = {
    root: root,
    nodeModule: nodeModule,
    src: src
};