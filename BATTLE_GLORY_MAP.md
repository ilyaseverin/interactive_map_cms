# Карта Боевой Славы Липецкой области

## 4 подраздела

1. **История ВОВ** - статистика по муниципальным образованиям
2. **Памятники и мемориалы** - фильтр по типу
3. **Мемориальные доски** - фильтр по типу
4. **Воинские захоронения** - фильтр по типу

## Content Types

1. **battle-glory-point** - все точки (памятники, доски, захоронения)
2. **battle-glory-history** - история ВОВ

## API Endpoints

### Подраздел 1: История ВОВ

```
GET /api/battle-glory-history
```

### Подраздел 2: Памятники и мемориалы

```
GET /api/battle-glory-points?filters[point_type][$eq]=памятник/мемориал&populate=*
```

### Подраздел 3: Мемориальные доски

```
GET /api/battle-glory-points?filters[point_type][$eq]=мемориальная доска&populate=*
```

### Подраздел 4: Воинские захоронения

```
GET /api/battle-glory-points?filters[point_type][$eq]=воинское захоронение&populate=*
```

### Статистика

```
GET /api/battle-glory-points/stats
```

### Импорт

```
POST /api/battle-glory-points/import
Body: { "data": [...] }
```

## Пример интеграции

```javascript
// Получить памятники для карты
fetch(
  "http://localhost:1337/api/battle-glory-points?filters[point_type][$eq]=памятник/мемориал&populate=*"
)
  .then((res) => res.json())
  .then((data) => {
    data.data.forEach((point) => {
      const { coordinates, title, image } = point.attributes;
      // Добавить маркер
    });
  });
```
