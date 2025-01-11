import {createRouter, createWebHistory} from 'vue-router'
import LogIn from '../components/LogIn.vue'
import SignUp from '../components/SignUp.vue'


const router=createRouter({
    history:createWebHistory(),
    routes: [
        {
            path:'/login', name:'login', component:LogIn
        },
        {
            path:'/signup', name:'signup', component:SignUp
        }

    ]
})
export default router