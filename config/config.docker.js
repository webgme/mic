/* globals process, require, module */
const config = require('./config.default');
const validateConfig = require('webgme/config/validator');
config.server.port = 8888;
config.plugin.allowServerExecution = true;
config.mongo.uri = 'mongodb://mongo:27017/webgme';
config.server.workerManager.path = 'webgme-docker-worker-manager';

config.server.workerManager.options = {
    webgmeUrl: 'http://webgme-server:' + config.server.port,
    image: 'webgme-mic_py-core-executor',
    maxRunningContainers: 10,
    createParams: {
        HostConfig: {
            Memory: 536870912,
            NetworkMode: 'webgme-mic_workers'
        }
    }
};


config.authentication.enable = true;
config.authentication.allowGuests = false;
config.authentication.allowUserRegistration = false;

config.authentication.jwt.privateKey = '/token_keys/private_key';
config.authentication.jwt.publicKey = '/token_keys/public_key';

config.authentication.adminAccount = 'admin:admin';
config.authentication.publicOrganizations = ['MIC21'];

config.blob.fsDir = '/blob-local-storage';

config.api.useEnhancedStarterPage = true;


validateConfig(config);
module.exports = config;
