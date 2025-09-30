# 🗺️ Interactive Map CMS

Strapi CMS для управления интерактивной картой с Docker и CI/CD.

## 🚀 Быстрый старт

### С Docker (рекомендуется)

1. Скопируйте переменные окружения:

```bash
cp env.example .env
```

2. Настройте `.env` файл с вашими данными

3. Запустите с Docker Compose:

```bash
docker-compose up -d
```

### Локальная разработка

```bash
npm install
npm run develop
```

## 🐳 Docker

- **Dockerfile** - оптимизированный образ для Strapi
- **docker-compose.yml** - полная настройка с PostgreSQL
- **deploy.sh** - скрипт для деплоя на сервер

## 🔄 CI/CD

Автоматический деплой через GitHub Actions при push в main ветку.

### Настройка GitHub Secrets:

- `SERVER_HOST` - IP адрес сервера
- `SERVER_USERNAME` - SSH username для подключения
- `SERVER_SSH_KEY` - SSH приватный ключ
- `SERVER_PORT` - SSH порт (опционально, по умолчанию 22)

### Как работает деплой:

1. При push в main ветку запускается GitHub Actions
2. Подключается к серверу по SSH
3. Обновляет код из репозитория
4. Собирает Docker образ прямо на сервере
5. Перезапускает контейнеры
6. Очищает неиспользуемые образы

**Преимущества:**

- ✅ Не нужен Docker Hub или внешний реестр
- ✅ Быстрый деплой
- ✅ Простая настройка

## 📚 Strapi документация

- [Strapi documentation](https://docs.strapi.io) - Официальная документация
- [Strapi tutorials](https://strapi.io/tutorials) - Туториалы
- [Strapi blog](https://strapi.io/blog) - Блог и новости

## ✨ Community

- [Discord](https://discord.strapi.io) - Сообщество Strapi
- [Forum](https://forum.strapi.io/) - Форум поддержки
