// ------------------------------------------------------------------------------
// name: url
// author: mudas( mschool.tech )
// created: 2020/4/7 14:22
// ------------------------------------------------------------------------------

import Query from 'query-string';

/**
 * 检测收集 url 参数集合
 * @return {Object}
 */
export function parsingURLParams() {
  const { href, search } = window.location;
  const query_str = search || href;

  if (query_str.indexOf('?') !== -1) {
    return Query.parse(query_str.slice(query_str.indexOf('?') + 1));
  }

  return Object.create(null);
}
