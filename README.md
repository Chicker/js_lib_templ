
## Описание ##

Для тестирования используется test framework `mocha` + expectation library `chai`.

Test runner'ом является phantomjs (через node module mocha-phantomjs)

Для организации модульной структуры библиотеки и разрешения зависимостей используется CommonJS и
RequireJS соответственно.

В папке `lib` хранятся js-файлы. Модуль пишется по правилам CommonJS. Специальный target в Gruntfile.js
конвертирует модуль написанный по правилам CommonJS в модуль совместимый с технологией AMD (реализация
в Require.js).

В корне приложения лежат файлы необходимые для тестирования:

    TestRunner.html
    test.config.js

В TestRunner.html загружается скрипт requirejs, который загружает главный скрипт библиотеки (приложения)
(в терминах RequireJS - это `data-main`). Главным скриптом в нашем случае будет являться конфигурационный
файл RequireJS. В этом конфигурационном файле настраиваются пути до всех используемых библиотек и
загружается инфраструктура `mocha`.

## Установка ##

Убедиться, что установлен модуль `requirejs`:

    npm install -g requirejs
    npm install -g mocha-phantomjs

В контексте проекта выполнить:

    npm install

## Использование ##

1. Сборка проекта

        grunt build

2. Запуск тестов

        grunt test


