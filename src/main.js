import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './assets/font-awesome-4.7.0/css/font-awesome.min.css'
import './assets/font-awesome-4.7.0/fonts/iconfont.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import mega from './components/mega.vue'
import index from './components/index.vue'
import itTool from './components/itTool.vue'
//例题
import imgshow from './components/example/imgshow.vue'

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', component: index },
  { path: '/mega', component: mega },
  { path: '/ittool', component: itTool },
  { path: '/imgshow', component: imgshow }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
