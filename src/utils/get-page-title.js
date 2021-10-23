import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vue Admin Template'

/**
 * 动态设置页面title的名称
 * @param {*} pageTitle 路由名称
 * @returns 路由名称 - name
 */
export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
