import {createRouter, createWebHistory} from 'vue-router'
import LogIn from '../components/LogIn.vue'


const router=createRouter({
    history:createWebHistory(),
    routes: [
        {
            path:'/login', name:'login', component:LogIn
        },

    ]
})
export default router