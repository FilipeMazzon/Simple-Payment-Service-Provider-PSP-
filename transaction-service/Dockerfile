FROM node:10-alpine
WORKDIR /app

RUN apk update && apk add yarn python g++ make && rm -rf /var/cache/apk/*

RUN chown node /app
USER node

COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run start:prod

EXPOSE 3000

CMD ["node", "dist/main.ts"]
