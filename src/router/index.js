import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import Homepage from '../components/Homepage'
import Durability from '../components/Durability.vue'
import Project from '../components/Project';
import Mission from '../components/Mission.vue';
import Pourquoi from '../components/Pourquoi';
import Orphane from '../components/Orphane.vue';
import Pouvez from '../components/Pouvez.vue';
import Contact from '../components/Contact.vue';
import SocialMedia from '../components/SocialMedia';
import Annual from '../components/Annual';
import Enterprise from '../components/Enterprise';
import Membership from '../components/Membership.vue';
import Rejoin from '../components/Rejoin';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'homepage',
    component: Homepage
  },
  {
  path:'/rejoin',
  name:'rejoin',
  component:Rejoin
  },
  {
    path:'/durable',
    name:'durable',
    component:Durability
  },
  {
  path:'/membership',
  name:'membership',
  component:Membership
  },
  {
 path:'/enterprise',
 name:'enterprise',
 component:Enterprise
  },
  {
  path:'/annual',
  name:'annual',
  component:Annual
  },
  {
   path:'/social',
   name:'social',
   component:SocialMedia
  },
  {
   path:'/contact',
   name:'contact',
   component:Contact
  },
  {
    path:'/project',
    name:'project',
    component:Project
},
{
path:'/pouvez',
name:'pouvez',
component:Pouvez
},
{
 path:'/orphane',
 name:'orphange',
 component:Orphane

},
{
  path:'/mission',
  name:'mission',
  component:Mission
},
{
path:'/pourquoi',
name:'pourquoi',
component:Pourquoi
},
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
