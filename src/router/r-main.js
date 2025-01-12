import {createRouter, createWebHistory} from 'vue-router'
import LogIn from '../components/LogIn.vue'
import SignUp from '../components/SignUp.vue'
import HomPage from '../components/HomPage.vue'


const router=createRouter({
    history:createWebHistory(),
    routes: [
        {
            path:'/login', name:'login', component:LogIn
        },
        {
            path:'/signup', name:'signup', component:SignUp
        },
        {
            path:'/home', name:'home', component:HomPage
        }

    ]
})
export default router