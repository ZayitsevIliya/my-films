# My films

Приложение My films предназначено для использования в качестве библиотеки фильмов, которые можно определить 4 категориями:
- Wishlist (фильмы которые планирую посмотреть)
- Watched (посмотренные)
- Expected (еще не вышедшие фильмы)
- Favorite (любимые фильмы)

В приложении реализован поиск по каталогу фильмов Кинопоиска. ( API - https://api.kinopoisk.dev/documentation)
Благодаря этому, в приложение My films можно сохранять любые фильмы, содежращиеся в катологе.

Сохранение данных приложения реализованно через localStorage, а это значит, что при перезагрузке или закрытии вкладки все сохраненные вами фильмы, остнутся до следующего посещения приложения.

Приложение оптимизорано под различные разрешения, при уменшении до ширины мобильного устройства, панель навигании меняет положение для удобства использования со смартфона.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
