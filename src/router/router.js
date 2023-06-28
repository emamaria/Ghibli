import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [
    {
      path: '/',
      redirect: 'ghibli'  
    },
    {
     path: '/ghibli',
     name: 'ghibli-about',
     component: () => import(/* webpackChunkName: "GhibliAbout" */ '../modules/ghibli/layouts/GhibliAbout.vue')
    }

]


const router = createRouter({
   
    history: createWebHashHistory(),
    routes, 
  })
  

  export default router