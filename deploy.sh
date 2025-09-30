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

# Обновляем образы
echo "📥 Обновляем Docker образы..."
docker-compose pull

# Собираем и запускаем новые контейнеры
echo "🔨 Собираем и запускаем контейнеры..."
docker-compose up -d --build

# Очищаем неиспользуемые образы
echo "🧹 Очищаем неиспользуемые Docker образы..."
docker system prune -f

# Проверяем статус
echo "✅ Проверяем статус сервисов..."
docker-compose ps

echo "🎉 Деплой завершен!"
echo "📊 Strapi доступен по адресу: http://localhost:1337"
