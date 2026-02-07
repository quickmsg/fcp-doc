/**
 * 注入 favicon 绝对路径，解决 baseUrl 子路径部署时浏览器标签页图标不显示
 */
export default function faviconPlugin(context) {
  const { siteConfig } = context;
  const baseUrl = siteConfig.baseUrl || '/';
  const url = (siteConfig.url || '').replace(/\/$/, '');
  const faviconHref = `${url}${baseUrl}favicon.ico`;

  return {
    name: 'favicon-plugin',
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'link',
            attributes: {
              rel: 'icon',
              type: 'image/x-icon',
              href: faviconHref,
            },
          },
        ],
      };
    },
  };
}
