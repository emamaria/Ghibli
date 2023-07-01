import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [
    {
      path: '/',
      redirect: 'ghibli-films'  
    },
    {
     path: '/ghibli',
     name: 'ghibli-about',
     redirect: {name: 'about'},
     component: () => import(/* webpackChunkName: "GhibliAbout" */ '../modules/ghibli/layouts/GhibliAbout.vue'),
     children: [
        //pongo path vacío en este primer children para que sea el primer children que aparezca por defecto
        {
         path: '',
         name: 'about',
         component: () => import( /* webpackChunkName: "Director" */ '../modules/ghibli/pages/About.vue')
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
     redirect: {name: 'films'},
     component: () => import(/* webpackChunkName: "GhibliFilms" */ '../modules/ghibliFilms/layouts/GhibliFilms.vue'),
     children:[
      {
        path: '',
        name: 'films',
        component: () => import( /* webpackChunkName: "Films" */ '../modules/ghibliFilms/pages/Films.vue')
       },
       {
        path: ':id',
        name: 'film',
        component: () => import( /* webpackChunkName: "Film" */ '../modules/ghibliFilms/pages/Film.vue'),
        props:(route)=> {
          const {id} = route.params
          return {id}
        }
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