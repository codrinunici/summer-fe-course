# Take node as base image
FROM node:18.17

WORKDIR /app

COPY ./* ./

RUN npm install && rm -rf node_modules

EXPOSE 5173


CMD ["npm","run","dev"]
