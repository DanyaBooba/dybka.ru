const icon = (name) => `/img/illustrations/tech/${name}.svg`

export const technologyGroups = [
    {
        title: 'Фреймворки и платформы',
        columns: {
            xs: '1fr',
            sm: 'repeat(2, minmax(0, 1fr))',
            md: 'repeat(3, minmax(0, 1fr))',
        },
        items: [
            { name: 'NestJS', icon: icon('nestjs') },
            { name: 'Next.js', light: icon('nextjs'), dark: icon('nextjs-dark') },
            { name: 'Expo', icon: icon('expo') },
            { name: 'React Native', icon: icon('react') },
            { name: 'Node.js', icon: icon('nodejs') },
            { name: 'React', icon: icon('react') },
            { name: 'Laravel', icon: icon('laravel') },
            { name: 'Gulp', icon: icon('gulp') },
        ],
    },
    {
        title: 'Языки программирования',
        columns: {
            xs: '1fr',
            sm: 'repeat(2, minmax(0, 1fr))',
            md: 'repeat(3, minmax(0, 1fr))',
        },
        items: [
            { name: 'JavaScript', icon: icon('javascript') },
            { name: 'TypeScript', icon: icon('typescript') },
            { name: 'Python', icon: icon('python') },
            { name: 'PHP', icon: icon('php') },
            { name: 'Java', icon: icon('java') },
            { name: 'C++', icon: icon('cpp') },
        ],
    },
]
