FROM node:18-buster

ENV MONGO_INITDB_ROOT_USERNAME=admin \
    MONGO_INITDB_ROOT_PASSWORD=password \
    MONGO_URI=mongodb://admin:password@0.0.0.0:27017

RUN mkdir -p /home/app

COPY . /home/app

CMD ["node", "/home/app/server.js"]