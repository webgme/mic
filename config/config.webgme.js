// DO NOT EDIT THIS FILE
// This file is automatically generated from the webgme-setup-tool.
'use strict';


var config = require('webgme/config/config.default'),
    validateConfig = require('webgme/config/validator');

// The paths can be loaded from the webgme-setup.json
config.plugin.basePaths.push(__dirname + '/../src/plugins');
config.plugin.basePaths.push(__dirname + '/../node_modules/webgme-icore/src/plugins');
config.plugin.basePaths.push(__dirname + '/../node_modules/webgme-hfsm/src/plugins');
config.plugin.basePaths.push(__dirname + '/../node_modules/webgme-bip/src/plugins');
config.visualization.decoratorPaths.push(__dirname + '/../node_modules/webgme-logic-gates/src/decorators');
config.visualization.decoratorPaths.push(__dirname + '/../node_modules/webgme-hfsm/src/decorators');
config.visualization.decoratorPaths.push(__dirname + '/../node_modules/webgme-bip/src/decorators');
config.seedProjects.basePaths.push(__dirname + '/../src/seeds/HFSM');
config.seedProjects.basePaths.push(__dirname + '/../src/seeds/JupyterGraph');
config.seedProjects.basePaths.push(__dirname + '/../node_modules/webgme-logic-gates/src/seeds/LogicGates');
config.seedProjects.basePaths.push(__dirname + '/../node_modules/webgme-bip/src/seeds/BIPv1');



config.visualization.panelPaths.push(__dirname + '/../node_modules/webgme-icore/src/visualizers/panels');
config.visualization.panelPaths.push(__dirname + '/../node_modules/webgme-hfsm/src/visualizers/panels');
config.visualization.panelPaths.push(__dirname + '/../node_modules/webgme-codeeditor/src/visualizers/panels');
config.visualization.panelPaths.push(__dirname + '/../node_modules/webgme-bip/src/visualizers/panels');
config.visualization.panelPaths.push(__dirname + '/../node_modules/webgme-bip-editors/src/visualizers/panels');
config.visualization.panelPaths.push(__dirname + '/../node_modules/hierarchical-model-editor/src/visualizers/panels');
config.visualization.panelPaths.push(__dirname + '/../src/visualizers/panels');


config.rest.components['BindingsDocs'] = {
  src: __dirname + '/../node_modules/webgme-bindings/src/routers/BindingsDocs/BindingsDocs.js',
  mount: 'bindings-docs',
  options: {}
};

// Visualizer descriptors
config.visualization.visualizerDescriptors.push(__dirname + '/../src/visualizers/Visualizers.json');
// Add requirejs paths
config.requirejsPaths = {
  'BIPv1': 'node_modules/webgme-bip/src/seeds/BIPv1',
  'LogicGates': 'node_modules/webgme-logic-gates/src/seeds/LogicGates',
  'BIPStateDecorator': 'node_modules/webgme-bip/src/decorators/BIPStateDecorator',
  'BIPConnectorEndDecorator': 'node_modules/webgme-bip/src/decorators/BIPConnectorEndDecorator',
  'BIPComponentTypeDecorator': 'node_modules/webgme-bip/src/decorators/BIPComponentTypeDecorator',
  'UMLDecorator': 'node_modules/webgme-hfsm/src/decorators/UMLDecorator',
  'UMLStateMachineDecorator': 'node_modules/webgme-hfsm/src/decorators/UMLStateMachineDecorator',
  'LogicGatesDecorator': 'node_modules/webgme-logic-gates/src/decorators/LogicGatesDecorator',
  'BindingsDocs': 'node_modules/webgme-bindings/src/routers/BindingsDocs',
  'JavaBIPEngine': 'node_modules/webgme-bip/src/plugins/JavaBIPEngine',
  'SoftwareGenerator': 'node_modules/webgme-hfsm/src/plugins/SoftwareGenerator',
  'PyCoreExecutor': 'node_modules/webgme-icore/src/plugins/PyCoreExecutor',
  'HierarchicalModelEditor': 'panels/HierarchicalModelEditor/HierarchicalModelEditorPanel',
  'BIPExecutionViz': 'panels/BIPExecutionViz/BIPExecutionVizPanel',
  'BIPCodeEditor': 'panels/BIPCodeEditor/BIPCodeEditorPanel',
  'CodeEditor': 'panels/CodeEditor/CodeEditorPanel',
  'HFSMViz': 'panels/HFSMViz/HFSMVizPanel',
  'ICore': 'panels/ICore/ICorePanel',
  'panels': './src/visualizers/panels',
  'widgets': './src/visualizers/widgets',
  'panels/HierarchicalModelEditor': './node_modules/hierarchical-model-editor/src/visualizers/panels/HierarchicalModelEditor',
  'widgets/HierarchicalModelEditor': './node_modules/hierarchical-model-editor/src/visualizers/widgets/HierarchicalModelEditor',
  'panels/BIPExecutionViz': './node_modules/webgme-bip-editors/src/visualizers/panels/BIPExecutionViz',
  'widgets/BIPExecutionViz': './node_modules/webgme-bip-editors/src/visualizers/widgets/BIPExecutionViz',
  'panels/BIPCodeEditor': './node_modules/webgme-bip/src/visualizers/panels/BIPCodeEditor',
  'widgets/BIPCodeEditor': './node_modules/webgme-bip/src/visualizers/widgets/BIPCodeEditor',
  'panels/CodeEditor': './node_modules/webgme-codeeditor/src/visualizers/panels/CodeEditor',
  'widgets/CodeEditor': './node_modules/webgme-codeeditor/src/visualizers/widgets/CodeEditor',
  'panels/HFSMViz': './node_modules/webgme-hfsm/src/visualizers/panels/HFSMViz',
  'widgets/HFSMViz': './node_modules/webgme-hfsm/src/visualizers/widgets/HFSMViz',
  'panels/ICore': './node_modules/webgme-icore/src/visualizers/panels/ICore',
  'widgets/ICore': './node_modules/webgme-icore/src/visualizers/widgets/ICore',
  'webgme-icore': './node_modules/webgme-icore/src/common',
  'webgme-hfsm': './node_modules/webgme-hfsm/src/common',
  'webgme-codeeditor': './node_modules/webgme-codeeditor/src/common',
  'webgme-bip': './node_modules/webgme-bip/src/common',
  'webgme-bip-editors': './node_modules/webgme-bip-editors/src/common',
  'hierarchical-model-editor': './node_modules/hierarchical-model-editor/src/common',
  'webgme-bindings': './node_modules/webgme-bindings/src/common',
  'webgme-logic-gates': './node_modules/webgme-logic-gates/src/common',
  'webgme-mic': './src/common'
};


config.mongo.uri = 'mongodb://127.0.0.1:27017/webgme_mic';
validateConfig(config);
module.exports = config;
