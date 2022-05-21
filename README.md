# Плагин слайдера для jQuery

## Описание

Проект является выполненным заданием номер 4  
обучающей программы frontend разработчика от MetaLamp.

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
- Запуск тестов проекта с обновлением степени покрытия: `npm run test`  
(степень покрытия: ./test/coverage/index.html)
- Проверка плагином для **eslint**: `npm run eslint`

## Github pages

- [Demo Page](https://madgoby.github.io/Task-4/gh-pages/index.html)
- [Coverage](https://madgoby.github.io/Task-4/gh-pages/coverage/index.html)

## Глобальные библиотеки

- [JQuery](https://jquery.com/)

## Инструкция по использованию
### Подключение
  1. Подключить [JQuery](https://jquery.com/)
  2. Подключить плагин импортировав файл **main.js** из папки "./dist/plugin/main.js"
  #### Пример
  ```
  <body>
    <div class="my-slider-container"></div>
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script src="./plugin/main.js"></script>
  <script src="DemoPage.ts"></script>
  ``` 
### Инициализация
1. Вызовете у контейнера для слайдера метод `.gobySlider()`
    #### Пример
    ```
    const container = 'selector';
  
    $(container).customSlider({});
    ``` 
2. Добавьте контейнеру класс `js-gobySliderWrapper`. Тогда плагин инициализируется сам себя.
    #### Пример
    ```
    <div class="your-container-class js-gobySliderWrapper"></div>
    ``` 
### Параметры слайдера
2. Параметры передать с помощью HTML аттрибута "data" в стиле "kebab-case".
   #### Пример для параметров `{ isDouble: true, min: 50 }`
    ```
    <div class="js-gobySliderWrapper" data-is-double=true data-min="50"></div>
    ``` 
3. Для того чтобы передать параметры слайдеру с помощью JS, нужно передать в функцию объект со значениями.
( без него будут заданы параметры по умолчанию ).
    #### Пример
    ```
    const container = 'selector';

    $(container).customSlider({
      min: -10000,
      max: 10000,
      from: -7000,
      to: 7000,
      step: 300,
      isDouble: true,
      isHandelsValues: true,
      isVertical: false,
      isValueScale: true,
      isStep: true,
    });
    ```

  #### Описание параметров

  - `min: number`- изменяет минимально возможное значение слайдера.
  - `max: number`- изменяет максимально возможное значение слайдера.
  - `from: number`- изменяет значение начального ползунка.
  - `to: number`- изменяет значение конечного ползунка.
  - `step: number`- изменяет размер шага ползунков слайдера. Минимальное значение **0.01** при значении ниже  
  шагу присвоиться значение 0, при котором слайдер будет считать шаг выключенной опцией
  - `isDouble: boolean`- включает/отключает конечный ползунок.
  - `isValueScale: boolean`- включает/отключает интерактивную шкалу значений возле полоски слайдера.
  - `isVertical: boolean`- изменят плоскость слайдера с горизонтальной на вертикальную при значении.
  - `isInteger`: boolean`- включает/отключает округление дробных чисел.
  - `isHandelsValues: boolean`- включает/отключает отображение текущего значения ползунка возле оного.
  - `onStart: function` - метод срабатывает после инициализации слайдера.  
  Принимает в себя параметром обьект с текущими настройками слайдера. `(data: SliderOptions) => {...}`.
  - `onChange: function` - метод срабатывает после любого изменения в слайдере.  
  Принимает в себя параметром обьект с текущими настройками слайдера. `(data: SliderOptions) => {...}`.
  
  #### Методы
  
  - `.update()` - позволяет обновлять параметры слайдера.  
  Принимает параметром обьект с любыми настройками описанными выше:
  ```
  slider.gobySlider({ min: 5, })
  
  slider.data('plugin_gobySlider').update({ 
    min: 0,
    max: 15,
  })
  
  ```

## Описание Архитектуры

- **Model** - хранит значения слайдера, отвечает за вычисления всех возможных изменений в этих значениях  
и проводит их валидацию.

- **Presenter** - Передаёт запросы от **View** к **Model** и наоборот. Отправляет изменения внесённые  
пользователем во **View** к **Model**, а затем уведомляет **View** о необходимости обновиться при успешном изменении модели. 

- **View** - хранит позиции ползунков в DOM, отвечает за отслеживание действий пользователя, а также  
хранит в себе все компоненты вида.

### UML Диаграмма

- [UML](https://madgoby.github.io/Task-4/uml/uml.html)