FROM node:18-alpine

# Только минимальные зависимости
RUN apk add --no-cache bash

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/app

# Копируем package.json и устанавливаем зависимости
COPY package.json package-lock.json ./

# Устанавливаем зависимости без нативных модулей
RUN npm ci --silent --no-audit --no-fund --ignore-scripts

# Копируем остальные файлы
COPY . .

# Создаем папку для загрузок
RUN mkdir -p public/uploads

# Пропускаем сборку - запускаем в dev режиме
EXPOSE 1337

CMD ["npm", "run", "develop"]
