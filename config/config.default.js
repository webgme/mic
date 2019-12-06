'use strict';

var config = require('./config.webgme'),
    validateConfig = require('webgme/config/validator'),
    path = require('path');

// Add/overwrite any additional settings here
// config.server.port = 8080;
// config.mongo.uri = 'mongodb://127.0.0.1:27017/webgme_my_app';

//path consolidation for HFSM embedding
// RequireJS paths
config.requirejsPaths['webgme-to-json'] = './node_modules/webgme-to-json/';

config.requirejsPaths['hfsm'] = './node_modules/webgme-hfsm/src/common/';
config.requirejsPaths['hfsm-library'] = './node_modules/webgme-hfsm/';

config.requirejsPaths['bower'] = './node_modules/webgme-hfsm/bower_components/';
config.requirejsPaths['cytoscape-edgehandles'] = './node_modules/webgme-hfsm/bower_components/cytoscape-edgehandles/cytoscape-edgehandles';
config.requirejsPaths['cytoscape-context-menus'] = './node_modules/webgme-hfsm/bower_components/cytoscape-context-menus/cytoscape-context-menus';
config.requirejsPaths['cytoscape-panzoom'] = './node_modules/webgme-hfsm/bower_components/cytoscape-panzoom/cytoscape-panzoom';

// BIP related config
config.requirejsPaths['bipsrc'] = './node_modules/webgme-bip/src/';
config.visualization.svgDirs.push(path.join(__dirname, '../node_modules/webgme-bip/src/svgs'));
config.requirejsPaths['widgets/DiagramDesigner'] =
    './node_modules/webgme-bip-editors/src/visualizers/widgets/DiagramDesigner';
config.requirejsPaths['panels/ModelEditor'] =
    './node_modules/webgme-bip-editors/src/visualizers/panels/ModelEditor';


config.client.log.level = 'info';

var path = require('path');
config.visualization.svgDirs.push(path.join(__dirname, '..', './node_modules/webgme-hfsm/src/svgs'));

config.plugin.allowServerExecution = true;

validateConfig(config);
module.exports = config;
