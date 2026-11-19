# aurahotels

Микрофронтенд на React с ИИ-агентом (GigaChat) для платформы [BroJS](https://brojs.ru).

> Проект создан через `@brojs/create` (шаблон «microfrontend advanced + AI»).

## О проекте

<!-- TODO: 2–3 предложения: что за продукт, для кого, какую задачу решает -->
aurahotels: веб-приложение с ИИ-агентом, работающее как микрофронтенд на платформе BroJS.

## Стек

- React 18, TypeScript
- Redux Toolkit, React Router
- Chakra UI, Emotion, Framer Motion
- LangChain + GigaChat (`langchain-gigachat`) для ИИ-агента
- Express (серверная часть заглушек в `stubs/`)
- BroJS CLI (`@brojs/cli`), ESLint

## Требования

- **Node.js 22** (версия зафиксирована в `.nvmrc`)
- npm 10 (идёт вместе с Node 22)
- Рекомендуется [nvm](https://github.com/nvm-sh/nvm) для переключения версий

## Быстрый старт

```bash
git clone https://github.com/karuzinaksenia/aurahotels.git
cd aurahotels
nvm install
nvm use
npm ci
cp .env.example .env
npm start
```

Dev-сервер откроется на `http://localhost:8099` (приложение обычно доступно по адресу `http://localhost:8099/aurahotels`).

Ставьте зависимости именно через `npm ci`, а не `npm install`: так у всей команды одинаковые версии пакетов, а `package-lock.json` не меняется. Файл `.npmrc` с `legacy-peer-deps=true` нужен, чтобы установка не падала из-за конфликта необязательных зависимостей LangChain.

## Переменные окружения

Настройки хранятся в файле `.env` (он в `.gitignore` и **не попадает в репозиторий**). Список переменных смотрите в `.env.example`.

Для работы ИИ-агента нужен ключ доступа GigaChat. Получите его у владельца репозитория лично. **Не коммитьте `.env` и не отправляйте ключ в общие чаты:** репозиторий публичный.

## Скрипты

| Команда | Что делает |
| --- | --- |
| `npm start` | dev-сервер BroJS на порту 8099 |
| `npm run build` | сборка в режиме разработки |
| `npm run build:prod` | production-сборка в `dist` |
| `npm run clean` | удаляет папку `dist` |
| `npm run compile` | компиляция проекта (`brojs compile`) |
| `npm run prom` | компиляция и запуск prom-сервера на порту 8099 |
| `npm run eslint` | проверка кода ESLint |
| `npm run eslint:fix` | проверка с автоисправлением |

## Структура проекта

```
aurahotels/
├── src/               # клиентский код (React, store, API-запросы)
├── stubs/             # серверные заглушки и работа с LLM
├── bro.config.js      # конфигурация BroJS (имя приложения, маршруты)
├── Jenkinsfile        # сценарий сборки и деплоя в Jenkins
├── .env.example       # пример переменных окружения
├── .nvmrc             # версия Node.js
└── package.json
```

## Деплой

Пуш в `main` автоматически запускает сборку в Jenkins (job `kfu-2026-b/aurahotels`). Стадии сборки: `processing`, `stats`, `install:ci`, `deploy`. После успешной сборки бандл выкладывается на сервер статики BroJS, а активная версия, конфигурация и навигация настраиваются в админке платформы.

Перед пушем убедитесь, что локально проходят:

```bash
npm ci
npm run build:prod
```

## Работа в команде

Все изменения вносятся через ветки и Pull Request, напрямую в `main` не пушим.

```bash
git switch main
git pull
git switch -c feature/название-задачи

# ...работа...

git add .
git commit -m "что сделано"
git push -u origin feature/название-задачи
```

Дальше на GitHub: **Compare & pull request** → заполнить шаблон → дождаться проверки коллегой → **Merge**. После слияния все делают `git switch main` и `git pull`.

Правила:

- перед началом новой задачи всегда `git pull` на `main`;
- не правим одни и те же файлы одновременно, задачи делим заранее;
- не коммитим `.env`, `node_modules`, `dist`;
- `package-lock.json` коммитим, чтобы у всех были одинаковые версии пакетов.

## Команда

- [@karuzinaksenia](https://github.com/karuzinaksenia)
- [@missaixxka](https://github.com/missaixxka)
- <!-- TODO: добавить третьего участника -->
