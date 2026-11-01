(() => {
  const config = window.NOISELOG_SITE || {};
  const links = [
    ['xiaohongshu-offer', config.xiaohongshuLicense, ['xiaohongshu.com', 'xhslink.com'], '前往小红书查看授权 ↗'],
    ['month-offer', config.taobao30Days, ['taobao.com', 'tmall.com', 'tb.cn'], '前往淘宝购买 30 天授权 ↗'],
    ['year-offer', config.taobaoYear, ['taobao.com', 'tmall.com', 'tb.cn'], '前往淘宝购买一年授权 ↗']
  ];
  for (const [id, value, domains, label] of links) {
    const node = document.getElementById(id);
    if (!node || !config.commercialReady || !value) continue;
    try {
      const url = new URL(value);
      if (url.protocol !== 'https:' || url.username || url.password || !domains.some(host => url.hostname === host || url.hostname.endsWith('.' + host))) continue;
      const anchor = document.createElement('a');
      anchor.className = 'button'; anchor.href = url.href;
      anchor.target = '_blank'; anchor.rel = 'noopener noreferrer'; anchor.textContent = label;
      node.replaceWith(anchor);
    } catch { /* Unconfigured or invalid links stay disabled. */ }
  }
})();
