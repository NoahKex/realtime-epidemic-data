import Vue from 'vue'
import VueRouter from 'vue-router'

const Global = ()=>import('@/views/GlobalData');
const Domestic = ()=>import('@/views/DomesticData');
const Foreign = ()=>import('@/views/ForeignData');
const DomesticDetails = ()=>import('@/views/DomesticDetails');
const ForeignDetails = ()=>import('@/views/ForeignDetails');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Global',
    component: Global
  },
  {
    path: '/domestic',
    name: 'Domestic',
    component: Domestic
  },
  {
    path: '/foreign',
    name: 'Foreign',
    component: Foreign
  },
  {
    path: '/domestic-details/:city',
    name: 'DomesticDetails',
    component: DomesticDetails,
    props:true
  },
  {
    path: '/foreign-details/:country',
    name: 'ForeignDetails',
    component: ForeignDetails,
    props:true
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
