/*jshint node:true*/

module.exports = {
    ICorePanel: {
        availablePythonModules:['mako.template','networkx', 'random', 'jinja2', 'mako', 'os', 'json', 'shutil', 'random'],
        maxRunTime:200
    },
    HierarchicalModelEditorPanel: 
    [{
        selector: 'edge.gme-connection',
        style: {
            'line-color': 'gray',
            'target-arrow-shape': 'triangle',
            'target-arrow-color': 'black',
            'label': 'data(attributes.event)',
        }
    },
    {
        selector: 'node[metaType="Variable"]',
        style: {
            shape: 'tag'
        }
    }],
};