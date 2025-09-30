# 🗺️ Interactive Map CMS

Strapi CMS для управления интерактивной картой с Docker и CI/CD.

## 🚀 Быстрый старт

### Локальная разработка

1. Скопируйте переменные окружения:

```bash
cp env.example .env
```

2. Настройте `.env` файл с вашими данными

3. Запустите с Docker Compose:

```bash
docker-compose up -d
```

Или локально:

```bash
npm install
npm run develop
```

### 🖥️ Настройка сервера

#### 1. Подключение к серверу

```bash
ssh root@your-server-ip
```

#### 2. Установка Docker и Docker Compose

```bash
# Обновление системы
apt update && apt upgrade -y

# Установка Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Установка Docker Compose
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# Проверка установки
docker --version
docker-compose --version
```

#### 3. Клонирование репозитория

```bash
mkdir -p /opt/strapi-cms
cd /opt/strapi-cms
git clone https://github.com/ilyaseverin/interactive_map_cms.git .
```

#### 4. Настройка переменных окружения

```bash
cp env.example .env
nano .env
```

**В файле `.env` замените:**

- `your_database_password_here` → надежный пароль для БД
- `your_app_keys_here` → сгенерированные ключи (см. ниже)

#### 5. Генерация секретных ключей

```bash
# Установка Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

# Генерация ключей (выполните 6 раз)
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

**Замените в `.env`:**

- `APP_KEYS` - 4 ключа через запятую
- `API_TOKEN_SALT` - один ключ
- `ADMIN_JWT_SECRET` - один ключ
- `TRANSFER_TOKEN_SALT` - один ключ
- `ENCRYPTION_KEY` - один ключ
- `JWT_SECRET` - один ключ

#### 6. Запуск приложения

```bash
chmod +x deploy.sh
./deploy.sh
```

#### 7. Проверка статуса

```bash
docker-compose ps
```

**Strapi будет доступен по адресу:** `http://your-server-ip:1337`

## 🔐 Настройка GitHub Secrets

Для автоматического деплоя настройте Secrets в репозитории:
`https://github.com/ilyaseverin/interactive_map_cms/settings/secrets/actions`

### Добавьте следующие Secrets:

- **`SERVER_HOST`** - IP адрес сервера (например: `212.8.229.185`)
- **`SERVER_USERNAME`** - SSH username (например: `root`)
- **`SERVER_SSH_KEY`** - Приватный SSH ключ
- **`SERVER_PORT`** - SSH порт (опционально, по умолчанию `22`)

### Получение SSH ключа:

```bash
# Если ключ уже есть
cat ~/.ssh/id_rsa

# Если нужно создать новый
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
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

\*\*
