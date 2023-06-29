import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [
    {
      path: '/',
      redirect: 'ghibli'  
    },
    {
     path: '/ghibli',
     name: 'ghibli-about',
     component: () => import(/* webpackChunkName: "GhibliAbout" */ '../modules/ghibli/layouts/GhibliAbout.vue'),
     children: [
        //pongo path vacío en este primer children para que sea el primer children que aparezca por defecto
        {
         path: '',
         name: 'director',
         component: () => import( /* webpackChunkName: "Director" */ '../modules/ghibli/pages/Director.vue')
        },
        {
         path: 'awards',
         name: 'awards',
         component: () => import( /* webpackChunkName: "Awards" */ '../modules/ghibli/pages/Awards.vue')
        }
        
     ]
    },
    {
     path: '/ghibli-films',
     name: 'ghibli-films',
     component: () => import(/* webpackChunkName: "GhibliFilms" */ '../modules/ghibliFilms/layouts/GhibliFilms.vue'),
     children:[
      {
        path: '',
        name: 'films',
        component: () => import( /* webpackChunkName: "Films" */ '../modules/ghibliFilms/pages/Films.vue')
       },
       {
        path: 'film',
        name: 'film',
        component: () => import( /* webpackChunkName: "Film" */ '../modules/ghibliFilms/pages/Film.vue')
       }
     ]
    },
    
    { path: '/:pathMatch(.*)*',
         component: ()=> import(/* webpackChunkName: "ghibli-about" */ '../modules/ghibli/layouts/GhibliAbout.vue') 
    }

]


const router = createRouter({
   
    history: createWebHashHistory(),
    routes, 
  })
  

  export default router