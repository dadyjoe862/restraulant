import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/r-main"
// import '/components/axios'
import {ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'


//HTTP that connect to API
const httplink =createHttpLink({
    uri : 'http://localhost:8080/graphql',
})

//create appolo app
const cache = new InMemoryCache()

const apolloClient= new ApolloClient({
    link:httplink,
    cache
})


const app= createApp({
    setup(){
        provide(DefaultApolloClient, apolloClient)
    }
})
createApp(App)
.use(router)
.mount('#app')
