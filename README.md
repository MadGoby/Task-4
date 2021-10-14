# Плагин слайдера для jQuery

## Описание

Проект является выполненным заданием номер 4 обучающей программы frontend разработчика от MetaLamp.

## Информация по развёртыванию
```
git clone https://github.com/MadGoby/Task-4
npm install
```
## Команды для запуска

- Сборка версии для разработки: `npm run dev`
- Сборка версии для публикации: `npm run build`
- Автоматическая сборка после внесения изменений: `npm run watch`
- Сборка с дев-сервером: `npm run start`
- Запуск тестов проекта с обновлением степени покрытия: `npm run test` (степень покрытия: ./test/coverage/index.html)
- Проверка плагином для **eslint**: `npm run eslint`

## Github pages

[Demo Page](https://madgoby.github.io/Task-4/gh-pages/index.html)

## Глобальные библиотеки

- [JQuery](https://jquery.com/)

## Инструкция по использованию
### Подключение
  1. Подключить [JQuery](https://jquery.com/)
  2. Подключить плагин импортировав файл **main.js** из папки "./dist/plugin/main.js"
  #### Пример
  ```
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script src="./plugin/main.js"></script>
  <script src="index.js"></script>
  ``` 
### Инициализация
  1. Вызовете у контейнера для слайдера метод `.customSlider()`
  #### Пример
  ```
  const container = 'selector';

  $(container).customSlider();
  ``` 
### Параметры слайдера

  Для того чтобы указать параметры слайдера нужно передать в функцию объект со значениями( без него будут заданы параметры по умолчанию ).
  
  #### Пример
  ```
  const container = 'selector';

  $(container).customSlider({
    "min": "-10000",
    "max": "10000",
    "double": true,
    "side-menu": true,
    "handelsValues": true,
    "vertical": false,
    "step": 300,
    "valueScale": true,
    "from": "-7000",
    "to": "7000"
  });
  ```

  #### Описание параметров

  - `min`- изменяет минимально возможное значение слайдера (только **String**)
  - `max`- изменяет максимально возможное значение слайдера (только **String**)
  - `from`- изменяет значение начального ползунка (только **String**)
  - `to`- изменяет значение конечного ползунка (только **String**)
  - `double`- включает/отключает конечный ползунок (только **Boolean**)
  - `side-menu`- при верном **Boolean** значении добавит меню управления слайдером в контейнер самого слайдера. Также можно указать строковый селектор, что  даёт возможность самому выбрать контейнер для бокового меню.
  - `valueScale`- включает/отключает интерактивную шкалу значений возле полоски слайдера (только **Boolean**)
  - `vertical`- изменят плоскость слайдера с горизонтальной на вертикальную при значении **true** (только **Boolean**)
  - `double`- изменяет размер шага ползунков слайдера (только **Number**)
  - `handelsValues`- включает/отключает отображение текущего значения ползунка возле оного(только **Boolean**)

## Описание Архитектуры

- **Model** - хранит значения слайдера, отвечает за вычисления всех возможных изменений в этих значениях и проводит их валидацию.

- **Presenter** - Передаёт запросы от **View** к **Model** и наоборот. Отправляет изменения внесённые пользователем во **View** к **Model**, а затем уведомляет **View** о необходимости обновиться при успешном изменении модели. 

- **View** - хранит позиции ползунков в DOM, отвечает за отслеживание действий пользователя, а также хранит в себе все компоненты вида в папке "./src/components/view/components/**/*.ts".

### UML Диаграмма

[UML](https://madgoby.github.io/Task-4/Task4UML.html)