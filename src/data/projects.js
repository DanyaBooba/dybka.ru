export default [
    {
        title: 'Память новомучеников',
        slug: 'pamyat-app',
        categories: ['web', 'app'],
        desc: 'Мобильное и веб-приложение «Память Новомучеников» собственной разработки для iOS и Android',
        stack: ['iOS', 'Android', 'React Native'],
        img: 'pamyat',
        link: 'https://map.dybka.ru',
        customPage: 'pamyat-app',
    },
    {
        title: 'Сайт с авторскими курсами',
        slug: 'courses',
        categories: ['web'],
        desc: 'Сайт с авторскими курсами по программированию',
        stack: ['React', 'JoyUI', 'Framer Motion',],
        img: 'courses',
        link: 'https://courses.dybka.ru',
        github: 'courses.dybka.ru',
        page: {
            title: 'Авторские курсы',
            desc: 'Учитесь программировать быстро просто и со вкусом',
            content: [
                { block: 'p', content: 'Сайт на котором я бесплатно размещаю свои курсы на разные темы программирования. Каждый курс представляет собой набор уроков с разметкой. В конце курса предусмотрена страница завершения, на которой можно пройти тестирование и выполнить чек-лист для самопроверки.' },
                { block: 'p', content: 'Данный проект представляет собой продолжение сайта открытого банка заданий «Around», который я начал в 2023 году. Обновленная версия получила современный дизайн, анимации, улучшение удобства и новые курсы.' },
                { block: 'p', content: 'Для добавления курсов на сайте предусмотрена панель администратора, к которой можно получить доступ по почте. После открытия доступа, у вас появится возможность разработать и реализовать собственный курс для дальнейшего размещения на сайте.' },
                { block: 'p', content: 'Все курсы хранятся на сервере и доступны пользователям в любой момент. Проект направлен на развитие качественного и бесплатного образования среди людей.' },
            ]
        }
    },
    {
        title: 'Приложение мессенджера «Аквариум»',
        slug: 'aquarium-app',
        categories: ['app'],
        desc: 'Переписывайтесь, звоните и делитесь мыслями в ленте. Всё в одном пространстве.',
        img: 'aquarium-app',
        stack: ['iOS', 'Android', 'Веб'],
        link: 'https://aquarium.org.ru',
        customPage: 'aquarium-app',
    },
    {
        title: 'Мессенджер «Аквариум»',
        slug: 'aquarium',
        categories: ['web'],
        desc: 'Переписывайтесь, звоните и делитесь мыслями в ленте. Всё в одном пространстве.',
        img: 'aquarium',
        stack: ['iOS', 'Android', 'Веб'],
        link: 'https://aquarium.org.ru',
        customPage: 'aquarium',
    },
    {
        title: 'Сайт команды Creagoo',
        slug: 'creagoo',
        categories: ['web'],
        desc: 'Обновленный сайт для моей команды разработчиков игр.',
        img: 'creagoo',
        stack: ['React', 'JoyUI', 'Lucide Icons', 'Framer Motion'],
        link: 'https://creagoo.ru',
        github: 'creagoo-2026',
    },
    {
        title: 'Веб-виджет: система объявлений',
        slug: 'pstgu-widget',
        categories: ['web'],
        desc: 'Реализация системы объявлений для встраивания на сайты организаций.',
        img: 'pstgu-widget',
        stack: ['PHP', 'MySQL', 'WebSocket', '1С:Университет'],
        page: {
            content: [
                { block: 'p', content: 'Реализован веб-виджет, который отображает сведения о записях из платформы 1С:Университет.' },
                { block: 'p', content: 'Веб-виджет интегрируется на сайт организации при помощи тега <script>.' },
                { block: 'p', content: 'Разработано серверное приложение, на котором запущен планировщик задач для регулярной проверки на наличие новых выгрузок из платформы 1С:Университет.' },
                { block: 'p', content: 'Серверное приложение поддерживает обмен данными по API и подключение по WebSocket.' },
            ]
        }
    },
    {
        title: 'Лендинг виджетов',
        slug: 'widgets-landing',
        categories: ['web'],
        desc: 'Страница с демонстрацией работы виджетов и инструкцией их подключения на сайты.',
        img: 'zhp',
        stack: ['ReactTS', 'Tailwind CSS', 'Shadcn UI'],
        link: 'https://widget-demo.dybka.ru',
    },
    {
        title: 'Телеграм-бот',
        slug: 'telegram-bot',
        categories: ['bot'],
        img: 'telegram-bot',
        desc: 'Телеграм-бот с рассылкой проекта «За Христа Пострадавшие»',
        stack: ['Node.js'],
        link: 'https://zahrista_bot.t.me',
        page: {
            title: 'Телеграм-бот проекта «За Христа пострадавшие»',
            desc: 'Список новомучеников на каждый день с настраиваемой рассылкой.',
            content: [
                { block: 'p', content: 'Данный проект разработан как миссионерская работа по распространению проекта базы данных «За Христа пострадавшие».' },
                { block: 'p', content: 'Бот позволяет подписаться на рассылку, настроить её время и каждый день в указанное время Телеграм-бот будет присылать список новомучеников, память которых совершается в этот день.' }
            ]
        }
    },
    {
        title: 'Мини-приложение ВК',
        slug: 'vk-mini-app',
        categories: ['other'],
        img: 'vk-mini-app',
        desc: 'Мини-приложение ВК, которое отображает виджет базы данных «За Христа Пострадавшие»',
        stack: ['React'],
        link: 'https://vk.com/app53883726',
        page: {
            title: 'Мини-приложение ВКонтакте',
            desc: 'Отображение виджета базы данных «За Христа пострадавшие».',
            content: [
                { block: 'p', content: 'Данный проект разработан как миссионерская работа по распространению проекта базы данных «За Христа пострадавшие».' },
                { block: 'p', content: 'Отображает веб-виджет новомучеников в рамках мини-приложения ВКонтакте для дальнейшей интеграции с экосистемой VK.' },
            ]
        }
    },
    {
        title: 'Редизайн сайта Изобретариум',
        slug: 'izobretarium',
        categories: ['web'],
        desc: 'Обновил сайт детского технопарка Изобретариум. Улучшил UI/UX',
        img: 'izobretarium',
        stack: ['React'],
        link: 'https://izobretarium.ru',
        button: {
            name: 'Читать подробнее',
            link: 'https://t.me/aquariumsocial/357'
        },
        customPage: 'izobretarium',
        page: {
            title: 'Редизайн сайта Изобретариум',
            desc: 'Кейс редизайна сайта детского технопарка «Изобретариум»: новая архитектура, визуальный язык, рост PageSpeed и панель администраторов.',
        },
    },
    {
        title: 'Виджет «За Христа пострадавшие»',
        slug: 'zhp-widget',
        categories: ['web'],
        img: 'zhp-widget',
        desc: 'Самостоятельный веб-виджет с отображением новомучеников, чья память приходится на текущий день.',
        stack: ['React'],
        link: 'https://widget.dybka.ru/?embed=true',
        page: {
            title: 'Виджет «За Христа пострадавшие»',
            desc: 'Самостоятельный веб-виджет с отображением новомучеников, чья память приходится на текущий день.',
            content: [
                { block: 'p', content: 'Первая моя разработка проекта, направленного на распространение информации о проекте базы данных «За Христа пострадавшие».' },
                { block: 'p', content: 'Виджет представляет собой самостоятельное веб-приложение для отображения сведений о новомучениках, чья память приходится на текущий день.' },
            ]
        }
    },
    {
        title: 'Страница новомученников',
        slug: 'zhp-page',
        categories: ['web'],
        img: 'zhp-page',
        desc: 'Реализация страницы, которая отображает подробную информацию о каждом новомученнике на текущую дату',
        stack: ['PHP'],
        link: 'https://widget-info.dybka.ru',
        page: {
            title: 'Список новомучеников на текущий день',
            desc: 'Страница с подробной информацией о каждом новомученике.',
        }
    },
    {
        title: 'Сайт-визитка',
        slug: 'dybka',
        categories: ['web'],
        desc: 'Мой лендинг.',
        img: 'dybka',
        stack: ['React', 'TS'],
        link: 'https://dybka.ru',
        github: 'dybka-ru',
        page: {
            title: 'Сайт-визитка',
            desc: 'Сайт с подробным описанием моей деятельности.',
        }
    },
]

export const games = [
    {
        title: '2048',
        img: '2048',
        link: 'https://creagoo.ru/games/2048/',
    },
    {
        title: 'Русские Карты 2',
        img: 'russian-cards-2',
        link: 'https://creagoo.ru/games/russiancards2/',
    },
    {
        title: 'Sweetness',
        img: 'sweetness',
        link: 'https://creagoo.ru/games/sweetness/',
    },
    {
        title: 'Babka On The Hunt: 2D Классика',
        img: 'babka-on-the-hunt-2d-classic',
        link: 'https://creagoo.ru/games/babkaonthehunt2dclassic/',
    },
    {
        title: 'Запомни эти карты',
        img: 'remember-these-cards',
        link: 'https://creagoo.ru/games/rememberthesecards/',
    },
    {
        title: 'Guess',
        img: 'guess',
        link: 'https://creagoo.ru/games/guess/',
    },
    {
        title: 'Камень ножницы бумага',
        img: 'rock-paper-scissors',
        link: 'https://creagoo.ru/games/rockpaperscissors/',
    },
    {
        title: 'Babka On The Hunt Light',
        img: 'babka-on-the-hunt-light',
        link: 'https://creagoo.ru/games/babkaonthehuntlight/',
    },
    {
        title: 'Button Pusher',
        img: 'button-pusher',
        link: 'https://creagoo.ru/games/buttonpusher/',
    },
    {
        title: 'Крестики Нолики',
        img: 'tic-tac-toe',
        link: 'https://creagoo.ru/games/tictactoe/',
    },
    {
        title: 'Babka On The Hunt',
        img: 'babka-on-the-hunt',
        link: 'https://creagoo.ru/games/babkaonthehunt/',
    },
]

export const archived = [
    {
        title: 'Социальная сеть «Аквариум»',
        stack: ['Laravel'],
    },
    {
        title: 'Разработка мобильных игр Creagoo',
        stack: ['Gulp'],
        link: 'https://old.creagoo.ru/',
    },
    {
        title: 'Медиасообщество на тему программирования «Special»',
        stack: ['Gulp'],
        link: 'https://news.dybka.ru',
    },
    {
        title: 'Открытый банк заданий «Around»',
        stack: ['Gulp', '11ty'],
        link: 'https://dev.dybka.ru',
    },
    {
        title: 'Цифровой двойник умного города',
        stack: ['WebGL'],
        link: 'https://vr.creagoo.ru',
    },
    {
        title: 'Мини-игра кликер',
        stack: ['Чистый JS'],
        link: '/web-games/clicker/index.html',
        github: 'js-get-money-game'
    },
    {
        title: 'Мини-игра «Крестики нолики»',
        stack: ['Чистый JS'],
        link: '/web-games/tictactoe/index.html',
        github: 'js-tictactoe-super'
    },
]
