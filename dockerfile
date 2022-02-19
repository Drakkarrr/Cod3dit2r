FROM node:14.16.0-alphine

WORKDIR /app

ENV PATH /app/node_mudules/.bin:PATH

COPY package*.json ./

RUN npm install --silent

COPY . ./

CMD ["npm", "start"]