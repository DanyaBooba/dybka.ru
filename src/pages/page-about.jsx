import { useEffect } from 'react'
import Box from '@mui/joy/Box'
import { useColorScheme, useTheme } from '@mui/joy/styles'
import Header from '../components/header'

const chapters = [
    {
        title: 'Начало разработки',
        paragraphs: [
            'Мой путь начался в 2019 году с разработки мобильных игр на Unity. Первым моим проектом стала игра «Babka On The Hunt», где вы управляли бабушкой, которая путешествует по России.',
            'Порядка 4 лет я занимался разработкой игр, успел выпустить несколько проектов в Google Play. С игрой «Babka On The Hunt» я выступал на конференциях и представлял проект. Параллельно я начал изучать веб-разработку.',
        ],
    },
    {
        title: 'Первый сайт',
        paragraphs: [
            'Свой первый сайт я разработал в 2019 году для той самой игры «Babka On The Hunt». В основу лег серверный язык программирования PHP и хранение страниц в базе данных.',
            'Сайт был неудачным с точки зрения дизайна, типографики, текстов и содержимого страниц. Но он помог мне начать изучать веб-разработку, которая сильно меня интересовала.'
        ],
    },
    {
        title: 'Сборщик пакетов Gulp',
        icon: '/img/illustrations/tech/gulp.svg',
        iconHeight: 'clamp(32px, 3vw, 54px)',
        paragraphs: [
            'Первая проблема, с которой я столкнулся – повторяющиеся блоки, такие как шапка, подвал и элементы навигации. Мне приходилось изменять их на каждой странице, что было явно неудобно.',
            'Поэтому я решил попробовать технологию Gulp — сборщика проектов, которая позволила автоматизировать рутинные задачи и использовать шаблоны на страницах. При помощи Gulp я мог задать правила сжатия файлов, конвертации изображений и прочего.'
        ],
    },
    {
        title: 'Генератор статики 11ty',
        paragraphs: [
            'Меня случайно привело к ещё одной технологии, схожей с Gulp. Это движок генерации статичный файлов 11ty. С его помощью сайт создается файлами Markdown, настраивается общий вид страниц и происходит преобразование Markdown в HTML.',
            'Для закрепления опыта я решил разработать сайт со своими курсами. В этот период мне пришлось переключиться на другие проекты, поэтому сайт я переделал в новой форме лишь через несколько лет.'
        ],
    },
    {
        title: 'Фреймворк Laravel и Bootstrap',
        icon: '/img/illustrations/tech/laravel.svg',
        iconHeight: 'clamp(32px, 3vw, 50px)',
        paragraphs: [
            'В 2019 году я начал разрабатывать свой первый большой проект — социальную сеть «Аквариум». У меня не было конкретной идеи проекта, мне просто хотелось приобрести опыт. Как не удивительно, проект я не забросил и поддерживаю его уже 7 лет.',
            'Разработку я начал на языке программирования PHP, но быстро понял, что с масштабированием проекта разработка будет занимать все больше времени. Поэтому я начал искать какой-нибудь фреймворк языка программирования PHP. И мой выбор упал в сторону Laravel.',
            'Laravel — это мощный PHP-фреймворк, который позволяет управлять архитектурой проекта, систематизировать код, использовать множество встроенных решений и много чего ещё.',
            'Дополнительно с Laravel я использовал дизайн-систему Bootstrap, чтобы ускорить работу над интерфейсом. Этот период стал важным шагом в понимании архитектуры серверных веб-приложений.',
            'Мне так и не понравилось применять Laravel: мне было сложно исправлять возникающие ошибки, я видел более современные решения и архитектура проекта оказалась мне не близка.'
        ],
    },
    {
        title: 'Фреймворк React',
        icon: '/img/illustrations/tech/react.svg',
        iconHeight: 'clamp(34px, 3.2vw, 48px)',
        paragraphs: [
            'Более года я программировал с использованием Laravel. Мне захотелось повысить свои навыки frontend, поэтому я решил заняться изучением фреймворка React.',
            'Мне хотелось, чтобы мои интерфейсы выглядели современно, поддерживали анимации и запросы к серверу.',
            'Я начал создавать свои первые проекты на React, через время изучил TypeScript, познакомился с дизайн-системой JoyUI и ещё много чего ещё.',

        ],
    },
    {
        title: 'Node.js и Express',
        icon: '/img/illustrations/tech/nodejs.svg',
        iconHeight: 'clamp(32px, 3vw, 48px)',
        paragraphs: [
            'Прошло несколько месяцев активного использования React. Я успел разработать несколько сайтов, познакомиться с разными дизайн-системами. И настал момент, когда я захотел обрабатывать пользовательские запросы.',
            'По прошлому опыту, возвращаться к Laravel мне не хотелось. Поэтому я решил попробовать изучить платформу Node.js и фреймворк Express.',
            'Я изучил, что такое API, зачем нужен nginx, как строится маршрутизация в проекте и много чего ещё. Опыт работы с Laravel помог мне быстрее разобраться с новыми технологиями.',
            'Первым проектом, для которого я применил связку React + Node.js стал мой мессенджер «Аквариум». Это стало 3 версией проекта в период с 2023 по 2026 год.',
        ],
    },
    {
        title: 'React Native и Expo',
        icon: '/img/illustrations/tech/react.svg',
        iconHeight: 'clamp(34px, 3.2vw, 48px)',
        paragraphs: [
            'Изучение веб-разработке заняло у меня несколько лет. Всё время я занимался только ею. Мне захотелось небольшого разнообразия. К тому же, у меня всё чаще стали появляться задачи, связанные с разработкой мобильного приложения.',
            'Поэтому я стал анализировать существующие технологии. Мне важно было иметь возможность применить свой опыт в веб-разработке и не потратить много времени на изучение новой технологии. Поэтому я не стал рассматривать Android Studio, Xcode и Flutter. Я выбрал фреймворк React Native и платформу Expo.',
            'Ровно 6 месяцев у меня ушло на то, чтобы разработать мобильное приложение для моего мессенджера «Аквариум». Я столкнулся с различными трудностями, но это было интересное приключение. Мобильный формат открыл новые возможности: уведомления, кэширование, системный интерфейс и много чего ещё.'
        ],
    },
    {
        title: 'Next.js',
        icon: '/img/illustrations/tech/nextjs.svg',
        iconHeight: 'clamp(12px, 2.2vw, 18px)',
        invertOnDark: true,
        paragraphs: [
            'Со временем я понял, что React не всегда закрывает все задачи, которые возникают при разработке современных сайтов. Мне хотелось лучше работать с поисковой оптимизацией.',
            'Поэтому я решил познакомиться с Next.js — фреймворком на базе React, который расширяет его возможности. При обычном использовании React веб-приложение получается формата SPA, где 1 файл index.html. Из-за чего некоторые поисковые роботы не видят остальные страницы сайта. Next.js решает эту проблему серверным рендерингом страниц по заданным правилам.'
        ],
    },
    {
        title: 'NestJS',
        icon: '/img/illustrations/tech/nestjs.svg',
        iconHeight: 'clamp(22px, 2.6vw, 34px)',
        paragraphs: [
            'По мере развития проектов серверная часть становилась всё сложнее. Express отлично подходил для небольших приложений, но мне хотелось лучше структурировать код, разделять ответственность между модулями и использовать более строгую архитектуру.',
            'Так я познакомился с NestJS — серверным фреймворком для Node.js, построенным на TypeScript. Он предлагает готовую архитектуру приложения, систему модулей, контроллеров и сервисов, а также множество инструментов для разработки API.',
            'Мне понравился подход NestJS к организации кода. Он помог мне иначе взглянуть на серверную разработку и создавать более масштабируемые приложения, которые проще поддерживать и развивать.'
        ],
    },
]

export default function PageAbout() {
    const theme = useTheme()
    const palette = theme.vars.palette
    const { mode, systemMode } = useColorScheme()
    const dark = mode === 'dark' || (mode === 'system' && systemMode === 'dark')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Header />
            <Box
                component="main"
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
                }}
            >
                <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
                    <Box
                        component="section"
                        aria-labelledby="about-title"
                        sx={{
                            pt: 'clamp(120px, 16vw, 200px)',
                            pb: 'clamp(56px, 8vw, 112px)',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                justifyContent: 'space-between',
                                gap: 'clamp(16px, 4vw, 64px)',
                            }}
                        >
                            <Box
                                component="h1"
                                id="about-title"
                                sx={{
                                    m: 0,
                                    fontFamily: 'var(--joy-fontFamily-display)',
                                    fontSize: 'clamp(2.1rem, 4vw, 3.6rem)',
                                    fontWeight: 400,
                                    lineHeight: 0.95,
                                    letterSpacing: '-0.04em',
                                    color: palette.about.titleColor,
                                }}
                            >
                                Обо мне
                            </Box>
                        </Box>
                        <Box
                            component="p"
                            sx={{
                                m: 0,
                                mt: 'clamp(24px, 3vw, 48px)',
                                maxWidth: '58ch',
                                fontFamily: 'var(--joy-fontFamily-body)',
                                fontSize: 'clamp(18px, 1.7vw, 26px)',
                                lineHeight: 1.5,
                                color: palette.text.secondary,
                            }}
                        >
                            Меня зовут Даниил Дыбка. Я программист, который пришел в эту сферу через игровую индустрию. Мне всегда было интересно не просто пользоваться технологиями, а создавать свои проекты, которые работают и помогают людям. Сейчас я веду разработку в разных областях и помогаю молодому поколению открыть мир бескрайних возможностей.
                        </Box>
                    </Box>

                    <Box component="section" aria-label="История">
                        {chapters.map((chapter) => (
                            <Box
                                component="article"
                                key={chapter.title}
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: {
                                        xs: '1fr',
                                        md: 'minmax(0, 0.44fr) minmax(0, 1fr)',
                                    },
                                    gap: {
                                        xs: '20px',
                                        md: 'clamp(32px, 5vw, 72px)',
                                    },
                                    py: 'clamp(36px, 5vw, 72px)',
                                    borderTop: '1px solid',
                                    borderColor: palette.divider,
                                }}
                            >
                                <Box>
                                    {chapter.icon && (
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                gap: '16px',
                                                mb: 'clamp(16px, 2vw, 24px)',
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={chapter.icon}
                                                alt=""
                                                sx={{
                                                    height: chapter.iconHeight ?? 'clamp(32px, 3vw, 44px)',
                                                    width: 'auto',
                                                    maxWidth: '100%',
                                                    objectFit: 'contain',
                                                    filter: chapter.invertOnDark && dark ? 'invert(1)' : 'none',
                                                }}
                                            />
                                        </Box>
                                    )}
                                    <Box
                                        component="h2"
                                        sx={{
                                            m: 0,
                                            maxWidth: '18ch',
                                            fontFamily: 'var(--joy-fontFamily-display)',
                                            fontSize: 'clamp(26px, 3vw, 40px)',
                                            fontWeight: 400,
                                            lineHeight: 1.05,
                                            letterSpacing: '-0.02em',
                                            color: palette.about.titleColor,
                                        }}
                                    >
                                        {chapter.title}
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 'clamp(12px, 1.5vw, 20px)',
                                        maxWidth: '64ch',
                                    }}
                                >
                                    {chapter.paragraphs.map((paragraph, paragraphIndex) => (
                                        <Box
                                            component="p"
                                            key={paragraphIndex}
                                            sx={{
                                                m: 0,
                                                fontFamily: 'var(--joy-fontFamily-body)',
                                                fontSize: 'clamp(15px, 1.25vw, 18px)',
                                                lineHeight: 1.65,
                                                color: palette.text.secondary,
                                            }}
                                        >
                                            {paragraph}
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </>
    )
}
