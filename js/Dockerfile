FROM node:17-slim

COPY package*.json .

RUN npm i
RUN npm i cors
COPY . .

EXPOSE 3001

CMD ["node","index"]
