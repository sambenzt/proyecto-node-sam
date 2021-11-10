FROM node:lts

WORKDIR /app

RUN npm install -g nodemon

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install

CMD ["nodemon", "eventos.js"]
