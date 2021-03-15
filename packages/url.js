// ------------------------------------------------------------------------------
// name: url
// author: mudas( mschool.tech )
// created: 2020/4/7 14:22
// ------------------------------------------------------------------------------

import Query from 'query-string';

export function hasQuery(value, flag = '?') {
  return value.indexOf(flag) !== -1;
}

/**
 * 检测收集 url 参数集合
 * @return {Object}
 */
export function parsingURLParams() {
  const { search = '', hash = '' } = window.location;

  // url 参数紧跟 pathname
  if (hasQuery(search)) {
    return Query.parse(search.slice(search.indexOf('?') + 1));
  }

  // url 参数紧跟 #hash 之后
  else if (hasQuery(hash)) {
    return Query.parse(hash.slice(hash.indexOf('?') + 1));
  }

  return Object.create(null);
}
