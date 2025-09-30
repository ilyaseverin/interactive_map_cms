FROM node:22-alpine

# Установка зависимостей для работы с PostgreSQL
RUN apk add --no-cache \
    build-base \
    gcc \
    autoconf \
    automake \
    zlib-dev \
    libpng-dev \
    nasm \
    bash \
    vips-dev \
    git \
    && rm -rf /var/cache/apk/*

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/app

# Копируем package.json и устанавливаем зависимости
COPY package.json package-lock.json ./
RUN npm config set fetch-retry-maxtimeout 600000 -g && \
    npm ci --silent

# Копируем остальные файлы
COPY . .

# Создаем папку для загрузок
RUN mkdir -p public/uploads

# Собираем проект
RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "develop"]
