import { defineConfigWithTheme } from "vitepress";
import type { ThemeConfig } from '@hempworks/pilgrim'
import config from '@hempworks/pilgrim/config'

export default defineConfigWithTheme<ThemeConfig>({
    extends: config,
    title: 'Laravel Myanmar Tools',
    description: 'A package for Myanmar tools which extend Laravel\'s core.',
    base: '/',
    cleanUrls: false,
    srcDir: 'src',

    head: [
        ['link', {
            rel: 'shortcut icon',
            href: 'https://laravel-myanmar-tools.com/logo.ico',
            type: 'image/x-icon',
        }],
        ['link', {
            rel: 'icon',
            href: 'https://laravel-myanmar-tools.com/logo.ico',
            type: 'image/x-icon',
        }],
        ['meta', {
            name: 'description',
            content: 'A package for Myanmar tools which extend Laravel\'s core.',
        }],
        ['meta', {
            name: 'keywords',
            content: 'laravel-myanmar-tools,myanmar-phone-number,myanmar-zawgyi-to-unicode-converter,myanmar-tools,myanmar-unicode,laravel-validation-rules',
        }],
        ['meta', {
            property: 'og:title',
            content: 'Laravel Myanmar Tools',
        }],
        ['meta', {
            property: 'og:description',
            content: 'A package for Myanmar tools which extend Laravel\'s core.',
        }],
        ['meta', {
            property: 'og:image',
            content: 'https://laravel-myanmar-tools.com/logo.png',
        }],
        ['meta', {
            property: 'og:url',
            content: 'https://laravel-myanmar-tools.com/',
        }],
        ['meta', {
            property: 'twitter:title',
            content: 'Laravel Myanmar Tools',
        }],
        ['meta', {
            property: 'twitter:description',
            content: 'A package for Myanmar tools which extend Laravel\'s core.',
        }],
        ['meta', {
            property: 'twitter:image',
            content: 'https://laravel-myanmar-tools.com/logo.png',
        }],
        ['meta', {
            property: 'twitter:card',
            content: 'https://laravel-myanmar-tools.com/',
        }],
        ['script', { 
            async: '', 
            src: 'https://www.googletagmanager.com/gtag/js?id=G-0ZKYPYV0HG' 
        }],
        ['script', {}, "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-0ZKYPYV0HG');"]
    ],

    themeConfig: {
        logo: {
            light: '/logo.png',
            dark: '/logo-dark.png',
        },
        sidebar: [
            {
                text: 'Getting started',
                items: [
                    { text: 'Introduction', link: '/' },
                    { text: 'Installation', link: '/installation' },
                ],
            },
            {
                text: 'Usage',
                items: [
                    { text: 'Str', link: '/str' },
                    { text: 'Request', link: '/request' },
                    { text: 'Eloquent Builder', link: '/eloquent-builder' },
                    { text: 'Query Builder', link: '/query-builder' },
                    { text: 'Validator', link: '/validator' },
                    { text: 'Carbon', link: '/carbon' },
                    { text: 'Collection', link: '/collection' },
                ],
            },
            {
                text: 'Advanced Usage',
                items: [
                    { text: 'Create Custom Macro', link: '/create-custom-macro' },
                ],
            },
            {
                text: 'More',
                items: [
                    { text: 'Version History', link: '/version-history' },
                ],
            }
        ],
        search: {
            provider: 'local',
            options: {
                placeholder: 'Search...',
            },
        },
        githubUrl: 'https://github.com/PyaeSoneAungRgn/laravel-myanmar-tools'
    }
})