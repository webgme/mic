# WebGME-MIC
This repository contains a Design Studio that is aimed for students learning the principles of Model Integrated Computing. The deployment collects several domains and UI extensions that helps newbies to strangthen their knowledge when it comes to modeling, meta-modeling, model interpretation.
## Installation
To install the Studio and all of its tools, the user needs a machine with [Docker](https://www.docker.com/) as the deployment is a collection of docker images that needs to run together. There are two variations, the __default__ is created to run in a linux environment with some shared directories that contains security keys and the database files, while the __local__ is intended to either windows or linux or mac-os environment without any security features or permanent database. The steps to install the __default__ version is:
- Clone this repository
- create directories ```~/dockershare/token_keys, ~/dockershare/ssl_certs, ~/dockershare/blob-local-storage, ~/dockershare/db```
- generate [token_keys](https://github.com/webgme/webgme/wiki/Users-and-Authentication) and ssl_certs with [certbot](https://certbot.eff.org/) for example and place them in their respective directories inside the __dockershare__
- ```docker-compose build```
- ```docker-compose up -d```

This should start every containers and the Studio should be available at the port 443 (https).
## Containers
The system are built up of the following containers:
- __web__ this container runs the nginx reverse proxy and supposed to provide secure connection to the world
- __webgme-server__ contains the actual webgme application with all the additional UI and domain elements
- __mongo__ is the mongoDB server holding all project and user information
- __py-core-executor__ container is an on demand container that is cloned whenever a plugin should be executed as the plugins are managed by a docker-worker-manager
- __jupyter__ container runs the jupyter server that is used by the ViewNotebook visualizer to show the generated notebooks
## Components
Here is the list of the components made specificly in this Design Studio:
- __ViewNotebook__ is a visualizer that uses an iframe to show the Jupyter notebook attached to the project (by its unique id). Whenever there is no prepared notebook, it notifies the user to call the proper plugin to generate the notebook. To properly use this visualizer, the user could start by using the __JupyterGraph__ seed.
- __JupyterGraph__ seed is a simple graph domain that has the visualizers and plugins configured, so the user can start easily with Jupyter notebook cooperation scenarios.
- __SendGraphToJupyter__ plugin generates a jupyter notebook and send uploads it to the server, after successfull execution, the __ViewNotebook__ visualizer is functional.
- __UpdateGraphPositions__ plugin is created so the jupyter notebook can communicate new graph coordinates back to the webgme server. In its original form, it just accepts a JSON object with node ids and coordinates, and tries to apply it to the active graph model.