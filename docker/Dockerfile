# Build BASE
FROM node:16-alpine3.16 as BASE
LABEL author="miti"

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --omit=dev \
    && npm cache clean --force

# Build Image
FROM node:16-alpine3.16 AS BUILD
LABEL author="miti"

WORKDIR /app
COPY . .
RUN npm install \
    && npm install sharp \
    && npm run build \
    && cd .next/standalone 

# Build production
FROM node:16-alpine3.16 AS PRODUCTION
LABEL author="miti"

WORKDIR /app

COPY --from=BUILD /app/.next/standalone ./
COPY --from=BUILD /app/public ./public
COPY --from=BUILD /app/.next/static ./.next/static
COPY --from=BUILD /app/.next/server ./.next/server

EXPOSE 3000

CMD node server.js
#docker build -t tiendnm/portfolio -f Dockerfile .