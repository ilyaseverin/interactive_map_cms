FROM node:22-alpine

# Установка только необходимых зависимостей
RUN apk add --no-cache \
    bash \
    vips-dev \
    git

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/app

# Копируем package.json и устанавливаем зависимости
COPY package.json package-lock.json ./

# Настройки npm для экономии памяти
RUN npm config set fetch-retry-maxtimeout 600000 -g && \
    npm config set fetch-retry-mintimeout 10000 -g && \
    npm config set fetch-retries 3 -g && \
    npm ci --silent --no-audit --no-fund

# Копируем остальные файлы
COPY . .

# Создаем папку для загрузок
RUN mkdir -p public/uploads

# Собираем проект с ограничением памяти
RUN NODE_OPTIONS="--max-old-space-size=1024" npm run build

EXPOSE 1337

CMD ["npm", "run", "develop"]
