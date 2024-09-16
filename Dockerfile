FROM node:20-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS prod
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
CMD [ "node", "src/main.js" ]
