// ------------------------------------------------------------------------------
// name: url
// author: mudas( mschool.tech )
// created: 2020/4/7 14:22
// ------------------------------------------------------------------------------

import Query from 'query-string';

function _hasQuery(value, flag = '?') {
  return value.indexOf(flag) !== -1;
}

/**
 * 检测收集 url 参数集合
 * - 此方法会同时收集 hash 和 search 中的 query 参数并合并返回。
 * @param {URL|object} [target=window.location] 目标URL对象（window.location 或者 URL 对象、包含 search、hash 的对象）
 * @return {Object}
 */
export function parsingURLParams(target = window.location) {
  const { search = '', hash = '' } = target;

  let searchParams = null;
  let hashParams = null;

  // url 参数紧跟 pathname
  if (_hasQuery(search)) {
    searchParams = Query.parse(search.slice(search.indexOf('?') + 1));
  }

  // url 参数紧跟 #hash 之后
  if (_hasQuery(hash)) {
    hashParams = Query.parse(hash.slice(hash.indexOf('?') + 1));
  }

  return { ...searchParams, ...hashParams };
}
