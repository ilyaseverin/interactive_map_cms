# Build stage
FROM node:22-alpine AS builder

WORKDIR /opt/app

# Копируем package.json и устанавливаем зависимости
COPY package.json package-lock.json ./

# Устанавливаем только необходимые системные пакеты для сборки
RUN apk add --no-cache python3 make g++ && \
    npm ci --silent --no-audit --no-fund && \
    npm run build && \
    rm -rf node_modules

# Production stage
FROM node:22-alpine AS production

# Минимальная установка для runtime
RUN apk add --no-cache bash

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/app

# Копируем собранное приложение
COPY --from=builder /opt/app/dist ./dist
COPY --from=builder /opt/app/build ./build
COPY package.json package-lock.json ./

# Устанавливаем только production зависимости
RUN npm ci --silent --no-audit --no-fund --only=production

# Копируем остальные файлы
COPY . .

# Создаем папку для загрузок
RUN mkdir -p public/uploads

EXPOSE 1337

CMD ["npm", "run", "develop"]
