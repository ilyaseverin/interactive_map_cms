#!/bin/bash

# Скрипт деплоя Strapi CMS на сервер
set -e

echo "🚀 Начинаем деплой Strapi CMS..."

# Проверяем наличие .env файла
if [ ! -f .env ]; then
    echo "❌ Файл .env не найден! Скопируйте env.example в .env и настройте переменные."
    exit 1
fi

# Загружаем переменные окружения
export $(cat .env | grep -v '^#' | xargs)

# Останавливаем старые контейнеры
echo "🛑 Останавливаем старые контейнеры..."
docker-compose down

# Очищаем неиспользуемые образы перед сборкой
echo "🧹 Очищаем неиспользуемые Docker образы..."
docker system prune -f

# Собираем и запускаем новые контейнеры с ограничением памяти
echo "🔨 Собираем и запускаем контейнеры..."
DOCKER_BUILDKIT=1 docker-compose build --no-cache --parallel
docker-compose up -d

# Проверяем статус
echo "✅ Проверяем статус сервисов..."
docker-compose ps

echo "🎉 Деплой завершен!"
echo "📊 Strapi доступен по адресу: http://localhost:1337"
