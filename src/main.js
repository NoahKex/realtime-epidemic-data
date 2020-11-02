import Vue from 'vue'
import '@/theme/index.css'
import App from './App.vue'
import router from './router'
import echarts from 'echarts'
import china from 'echarts/map/json/china.json'
echarts.registerMap('china', china)

import dataService from '@/service/dataService/dataService'

import {
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Message,
  Loading,
  Button,
  Select,
  Option,
  Table,
  TableColumn
} from 'element-ui';

Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Loading.directive);
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(Table);
Vue.use(TableColumn);


Vue.config.productionTip = false

Vue.prototype.$echarts = echarts


Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.prototype.$dataService = dataService;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
