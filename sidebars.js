// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    { type: 'doc', id: 'product/introduction', label: '产品介绍' },
    {
      type: 'category',
      label: '安装部署',
      link: { type: 'generated-index' },
      items: [
        'install/overview',
        'install/linux',
        'install/docker',
        'install/config',
      ],
    },
    {
      type: 'category',
      label: '配置说明',
      link: { type: 'generated-index' },
      items: ['config/read'],
    },
    {
      type: 'category',
      label: '功能指南',
      link: { type: 'generated-index' },
      items: [
        'guide/applications',
        'guide/licenses',
        'guide/projects',
        'guide/organizations',
        'guide/users',
        'guide/proxy',
        'guide/monitoring',
        'guide/alerts',
        'guide/audit',
      ],
    },
    { type: 'doc', id: 'api/overview', label: 'API 概览' },
    'FAQ',
  ],
};

export default sidebars;
