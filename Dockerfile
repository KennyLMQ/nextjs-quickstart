# base image contains the dependencies and no application code
FROM node:16 as base

# prod image inherits from base
FROM base as prod

WORKDIR /root/app

COPY . ./

RUN npm ci

RUN npm run build

CMD [ "npm", "start"]