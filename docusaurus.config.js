// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FCP',
  tagline: 'FluxMQ Control Plane - 授权与运维控制平面',
  url: 'https://quickmsg.github.io',
  baseUrl: '/fcp-doc/',
  organizationName: 'quickmsg',
  projectName: 'fcp-doc',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          includeCurrentVersion: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          src: 'logo.svg',
          srcDark: 'logo.svg',
          width: 36,
          height: 36,
          alt: 'FCP',
        },
        title: 'FCP',
        items: [],
      },
      favicon: 'favicon.ico',
      footer: {
        style: 'dark',
        copyright: `Copyright © 2021-${new Date().getFullYear()} 非迅科技 版权所有`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
