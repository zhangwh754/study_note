/**
 * 配置CDN相关  setting CDN
 */
//获取package-lock.json的属性内容
import pack from '../../package-lock.json'
//获取package-lock.json的依赖属性
const version = pack.dependencies

export const cdnModules = [
  {
    name: 'vue',
    var: 'Vue',
    path: `https://unpkg.com/vue@${version['vue'].version}/dist/vue.global.prod.js`
  },
  {
    name: 'vue-demi',
    var: 'VueDemi',
    path: `https://www.unpkg.com/vue-demi@${version['pinia'].dependencies['vue-demi'].version}/lib/index.iife.js`
  },
  {
    name: 'pinia',
    var: 'Pinia',
    path: `https://unpkg.com/pinia@${version['pinia'].version}/dist/pinia.iife.prod.js`
  },
  {
    name: 'vue-router',
    var: 'VueRouter',
    path: `https://unpkg.com/vue-router@${version['vue-router'].version}/dist/vue-router.global.prod.js`
  },
  {
    name: 'dayjs',
    var: 'Dayjs',
    path: `https://unpkg.com/dayjs@${version['dayjs'].version}/dayjs.min.js`
  },
  {
    name: 'customParseFormat',
    var: 'CustomParseFormat',
    path: `https://unpkg.com/dayjs@${version['dayjs'].version}/plugin/customParseFormat.js`
  },
  {
    name: 'weekday',
    var: 'Weekday',
    path: `https://unpkg.com/dayjs@${version['dayjs'].version}/plugin/weekday.js`
  },
  {
    name: 'localeData',
    var: 'LocaleData',
    path: `https://unpkg.com/dayjs@${version['dayjs'].version}/plugin/localeData.js`
  },
  {
    name: 'weekOfYear',
    var: 'WeekOfYear',
    path: `https://unpkg.com/dayjs@${version['dayjs'].version}/plugin/weekOfYear.js`
  },
  {
    name: 'weekYear',
    var: 'WeekYear',
    path: `https://unpkg.com/dayjs@${version['dayjs'].version}/plugin/weekYear.js`
  },
  {
    name: 'advancedFormat',
    var: 'AdvancedFormat',
    path: `https://unpkg.com/dayjs@${version['dayjs'].version}/plugin/advancedFormat.js`
  },
  {
    name: 'ant-design-vue',
    var: 'antd',
    path: `https://cdn.jsdelivr.net/npm/ant-design-vue@${version['ant-design-vue'].version}/dist/antd.min.js`,
    css: `https://cdn.jsdelivr.net/npm/ant-design-vue@${version['ant-design-vue'].version}/dist/antd.min.css`
  }
]
