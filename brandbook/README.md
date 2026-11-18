# MathFinder Brandbook v1.0

Брендбук для всех проектов продукта (веб → мобилка → лендинги). Построен на дизайн-системе v0.1, извлечённой из референсов **math-olymp.rudn.ru** и **do.bmstu.ru**.

## Файлы

| Файл | Для чего |
|---|---|
| `index.html` | Визуальный брендбук: 10 разделов — позиционирование, логотип, цвет, типографика, UI-примитивы, голос, сетка, motion, доступность, правила для кода. Открыть в браузере. |
| `ai-context.md` | ⭐ Сжатая версия для подключения в код: `CLAUDE.md`, `.cursorrules`, системный промпт LLM, документация команды. Содержит все правила в виде, готовом к использованию при генерации кода. |
| `tailwind.preset.js` | Готовый Tailwind-конфиг из токенов брендбука (`presets: [require('./brandbook/tailwind.preset.js')]`). |
| `assets/logo.svg`, `assets/favicon.svg` | Фирменный знак «√» (градиент violet→blue 135°). |

## Как использовать при написании кода

1. **Новый проект на React/Tailwind** → подключить `tailwind.preset.js` + скопировать `design-system/tokens.css`. Классы: `bg-brand text-on-brand rounded-pill shadow-focus` и т.д.
2. **Проект без Tailwind** → подключить `tokens.css`, писать компоненты только через `var(--brand)`, `var(--sp-4)`…
3. **Генерация через LLM** → положить `ai-context.md` в контекст проекта — модель будет держать палитру, шрифты, радиусы и тон текстов.
4. **Мобильная версия (iOS/Android)** → значения брать из `design-system/tokens.json` (W3C Design Tokens, конвертируется Style Dictionary).

## Иерархия источников истины

```
design-system/tokens.{css,json}   ← значения (меняются здесь)
        │
brandbook/*                       ← правила применения (этот каталог)
        │
приложения                        ← только алиасы, никакой хардкода HEX
```

При изменении токена — обновить `tokens.*`, затем `tailwind.preset.js` и таблицы в `ai-context.md` / `index.html`.

## Быстрый просмотр
```bash
cd /workspace && python3 -m http.server 8080
# брендбук:      http://localhost:8080/brandbook/
# дизайн-система: http://localhost:8080/design-system/
```
