FROM node:14.21

WORKDIR /app

COPY . .

RUN npm install 

EXPOSE 3001:3001

CMD [ "npm", "start" ]