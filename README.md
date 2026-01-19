Что сделано
1. Настройка проекта и базовая структура

Инициализирован проект на Vite + TypeScript
Создана архитектура приложения по Feature-Sliced Design:

src/app/ — точка входа и провайдеры
src/pages/ — страницы приложения
src/widgets/ — крупные блоки (Header, Footer, списки)
src/features/ — функциональность (фильтры, переключатели)
src/entities/ — бизнес-сущности (Post, User, Comment и т.д.)
src/shared/ — переиспользуемые компоненты и утилиты



2. UI компоненты и функциональность

Отображение постов: создан список постов с карточками (PostList, PostCard)
Модальное окно: реализовано через React Portal с паттерном Compound Components (Modal.Header, Modal.Body, Modal.Footer)
Темная/светлая тема: добавлен ThemeContext и переключатель тем (ThemeSwitcher)
Фильтрация постов: реализован фильтр по длине заголовка (PostLengthFilter)
Комментарии: добавлена возможность сворачивания/разворачивания списка комментариев

3. Оптимизации производительности

Применен HOC withLoading для отображения состояния загрузки
Использованы хуки useMemo и useCallback для оптимизации рендеринга
Реализован дженерик-компонент ItemList<T> для универсальных списков

4. Роутинг
Настроена навигация с помощью React Router:

/posts — список всех постов
/posts/:id — детальная страница поста
/users/:id/albums — альбомы пользователя
/albums/:id/photos — фотографии альбома
/users/:id/todos — задачи пользователя
/users/:id/posts — посты пользователя

Добавлена навигация через UserTabs с NavLink
5. Управление состоянием (Redux Toolkit)

Настроен Redux Store с использованием configureStore
Созданы слайсы с createEntityAdapter для нормализации данных:

postSlice — управление постами
userSlice — управление пользователями


Подключен RTK Query для работы с API:

postsApi — получение постов
commentsApi — получение комментариев
albumsApi — получение альбомов
todosApi — получение задач


Настроены автоматическое кэширование и инвалидация данных
Реализована загрузка данных по userId и postId

6. TypeScript типизация

Созданы типы для всех сущностей: Post, User, Comment, Album, Photo, Todo
Типизированы все компоненты и их пропсы
Использованы utility types: PropsWithChildren, MouseEventHandler, FC
Применены дженерики для универсальных компонентов
Настроен строгий режим TypeScript (strictNullChecks, strict mode)
Созданы конфигурации: tsconfig.base.json, tsconfig.app.json

7. Кастомные хуки

usePosts — хук для получения и работы с постами
useTheme — хук для работы с темой приложения

Технологии

React 18
TypeScript (strict mode)
Redux Toolkit + RTK Query
React Router v6
Vite
Feature-Sliced Design
