import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import "./assets/font-awesome-4.7.0/css/font-awesome.min.css";
import "./assets/font-awesome-4.7.0/fonts/iconfont.css";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);


//设置网站标题
Vue.directive('title', {
  inserted: function (el) {
    document.title = el.dataset.title
  }
})


import VueRouter from "vue-router";
Vue.use(VueRouter);

import mega from "./components/mega.vue";
import index from "./components/index.vue";
import itTool from "./components/itTool.vue";

import imgshow from "./components/example/imgshow.vue";
import lessVariable from "./components/example/lessVariable.vue";
import bgShow from "./components/example/bgShow.vue";

import horrorMovie from "./components/live/horrorMovie.vue";
import websites from "./components/live/websites.vue";

import es6 from "./components/skills/es6.vue";



const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    component: index,
  },
  {
    path: "/mega",
    component: mega,
  },
  {
    path: "/ittool",
    component: itTool,
  },
  {
    path: "/imgshow",
    component: imgshow,
  },
  {
    path: "/varless",
    component: lessVariable,
  },
  {
    path: "/bgshow",
    component: bgShow,
  },
  {
    path: "/horrormovie",
    component: horrorMovie,
  },
  {
    path: "/es6",
    component: es6,
  },
  {
    path: "/websites",
    component: websites,
  },
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
