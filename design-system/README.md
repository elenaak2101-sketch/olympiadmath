# MathFinder — Design System v0.1

Локальный инструмент поиска олимпиадных задач по темам в неструктурированных PDF-сборниках.
Пользователь: тренер/преподаватель математики техвуза. Платформы: веб → позже мобайл.

## Референсы и что из них взято

| Референс | Взято |
|---|---|
| [math-olymp.rudn.ru](https://math-olymp.rudn.ru/) | Brand-фиолетовый `#7C64DD`, акцентный оранжевый `#FFAF60`, шрифт TildaSans (аналог — Inter), мягкие градиентные hero-блоки, скруглённые карточки |
| [do.bmstu.ru](https://do.bmstu.ru/) | Академический синий `#065BAB` («синяя линия» Бауманки) для ссылок/статусов, шрифт Gilroy (аналог — Inter), шкала скруглений 5/10/40 (pill-кнопки), фон `#FAFAFA`, пастельные статусные плашки (`#CAF4E3`, `#FFEFCD`, `#FFCDCD`) |

## Структура

```
design-system/
├── tokens.css       # все дизайн-токены: цвета, типографика, отступы, радиусы, тени, motion + тёмная тема
├── components.css   # компоненты: buttons, inputs, searchbar, chips, badges, cards, problem-card,
│                    # dropzone, progress, table, segmented, alerts, skeleton, navbar, footer
├── index.html       # живой гайд: откройте в браузере — все компоненты + переключатель тёмной темы
└── tokens.json      # те же токены в JSON (для Figma-плагинов / Style Dictionary / iOS / Android)
```

## Ключевые решения

- **Шрифт — Inter** вместо платных TildaSans/Gilroy: бесплатен, отличная кириллица, один файл на веб и мобилу.
- **Иерархия цвета:** фиолетовый = действия; оранжевый = один главный CTA и подсветка совпадений `<mark>`; синий = ссылки и «академические» статусы.
- **Mono для данных:** ID задач и `стр. 137–138` набираются JetBrains Mono — их копируют в конспекты.
- **Скругления как у BMSTU:** поля 6px, карточки 10px, панели 16px, кнопки/чипы — pill.
- **Тёмная тема через алиасы** (`--bg-page`, `--text-primary`, …) — компоненты цветов не знают.
- **Touch-target ≥ 44px** заложен сразу — мобильная версия унаследует компоненты без правок.

## Как использовать сейчас

Открыть гайд:

```bash
cd design-system && python3 -m http.server 8080
# → http://localhost:8080
```

Подключить к приложению:

```html
<link rel="stylesheet" href="/design-system/tokens.css">
<link rel="stylesheet" href="/design-system/components.css">
```

или через Tailwind — перенести значения из `tokens.json` в `theme.extend`.

## Дальше (v0.2)

- [ ] Перевести токены в Tailwind config / CSS-in-JS тему
- [ ] Компоненты как React-код (Button, SearchBar, ProblemCard, PdfDropzone)
- [ ] Иконки единым набором (lucide) и логотип/фавиконка
- [ ] Мобильная навигация (bottom tab bar) из тех же токенов
