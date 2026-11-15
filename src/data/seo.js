export const SITE_URL = 'https://dybka.ru'
export const SITE_NAME = 'dybka.ru'
export const PERSON_NAME = 'Даниил Дыбка'
export const PERSON_ROLE = 'разработчик цифровых сервисов'
export const PERSON_ID = `${SITE_URL}/#person`
export const WEBSITE_ID = `${SITE_URL}/#website`
export const DEFAULT_IMAGE = '/img/og/og-default.jpg'
export const DEFAULT_TITLE = 'Даниил Дыбка — разработчик цифровых сервисов'
export const DEFAULT_DESCRIPTION = 'Портфолио Даниила Дыбка: веб-платформы, сайты, приложения, боты и игры. React, TypeScript, дизайн интерфейсов и запуск цифровых продуктов.'
export const DEFAULT_KEYWORDS = 'Даниил Дыбка, dybka.ru, портфолио, разработчик цифровых сервисов, frontend, React, TypeScript, JavaScript, веб-разработка, сайты, приложения'

export const SOCIAL_LINKS = [
    'https://ddybka.t.me/',
    'https://aquarium.org.ru/show/ddybka',
    'https://github.com/DanyaBooba',
]

export const PERSON = {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: PERSON_NAME,
    url: SITE_URL,
    email: 'daniil@dybka.ru',
    jobTitle: PERSON_ROLE,
    sameAs: SOCIAL_LINKS,
    knowsAbout: ['React', 'TypeScript', 'JavaScript', 'Laravel', 'Unity', 'веб-разработка', 'дизайн интерфейсов'],
}

export const WEBSITE = {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    alternateName: PERSON_NAME,
    description: DEFAULT_DESCRIPTION,
    inLanguage: 'ru-RU',
    publisher: { '@id': PERSON_ID },
}
