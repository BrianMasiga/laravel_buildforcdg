import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import myExample from './components/Example'


const routes = [
    { path: '/example', component: myExample, name: 'example' },
]


export default new VueRouter({routes})
