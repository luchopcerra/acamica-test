FROM node:12
ENV NODE_ENV=production

WORKDIR /usr/acamica/app
COPY package*.json ./
RUN npm install
COPY . .