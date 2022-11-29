FROM node:16-alpine3.16 AS dependencies
WORKDIR /app
COPY package.json  ./
RUN npm install --omit=dev

FROM node:16-alpine3.16 AS builder
WORKDIR /app
COPY . .
RUN npm install && npm i sharp && NODE_ENV=production npm run build

FROM node:16-alpine3.16 AS production
WORKDIR /app
COPY --chown=node --from=builder /app/next.config.js ./
COPY --chown=node --from=builder /app/public ./public
COPY --chown=node --from=builder /app/.next ./.next
COPY --chown=node --from=builder /app/package.json ./
COPY --chown=node --from=dependencies /app/node_modules ./node_modules
USER node
EXPOSE 3000
CMD [ "npm","run", "start" ]