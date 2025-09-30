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
- `DOCKER_USERNAME` - Docker Hub username
- `DOCKER_PASSWORD` - Docker Hub password
- `SERVER_HOST` - IP сервера
- `SERVER_USERNAME` - SSH username
- `SERVER_SSH_KEY` - SSH приватный ключ

## 📚 Strapi документация

- [Strapi documentation](https://docs.strapi.io) - Официальная документация
- [Strapi tutorials](https://strapi.io/tutorials) - Туториалы
- [Strapi blog](https://strapi.io/blog) - Блог и новости

## ✨ Community

- [Discord](https://discord.strapi.io) - Сообщество Strapi
- [Forum](https://forum.strapi.io/) - Форум поддержки
