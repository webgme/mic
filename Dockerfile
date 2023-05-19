# Build a and run docker image for this repository
# 1. make sure docker is installed
# 2. make sure you have a clean copy of this repository
# 3. go to the directory where this file exists (the root of your repo)
# 4. $ docker build -t webgme-server .
# 5. $ docker run -d -p 8888:8888 -v /var/run/docker.sock:/var/run/docker.sock --link mongo:mongo webgme-server

# After successful startup, you should be able to connect to your dockerized webgme on the 8888 port of the host.
#
# Useful commands
# checking the status of your docker containers:    docker ps -a
# restart your docker container:                    docker restart webgme-server
# stop your container:                              docker stop webgme-server
# removing your container:                          docker rm webgme-server
# removing your image:                              docker rmi webgme-server
# list available images:                            docker images
# exporting the image:                              docker save -o webgme-server.tar webgme-server
# import an image:                                  docker load -i webgme-server.tar


# Node 20
FROM node:20-alpine
MAINTAINER Tamas Kecskes <tamas.kecskes@vanderbilt.edu>

RUN apk update
RUN apk add --no-cache make g++ git python3 py3-pip py3-setuptools dotnet6-sdk
RUN pip3 install webgme-bindings
RUN pip3 install jinja2
RUN pip3 install networkx
RUN pip3 install mako

RUN mkdir /usr/app

WORKDIR /usr/app

# copy app source
ADD . /usr/app/

# Install node-modules
RUN npm cache clean --force
RUN npm install --force --no-package-lock

CMD ["npm", "start"]
