FROM node:16.13.2-alpine3.15
WORKDIR /app
EXPOSE 5000
COPY package*.json ./
RUN npm i
COPY . .
CMD [ "npm","start" ]