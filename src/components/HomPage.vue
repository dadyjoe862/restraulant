<template>

<div>
        <NavBar />
</div>
</template>

<script>
import axios from 'axios'
import NavBar from './NavBar.vue';
    export default {
        name:'HomPage',
        components:{
                NavBar
        },
        data(){
            return{
                user:null
            }
        },
        async created(){
            const response=await axios.get('http://localhost:3000/user',{
                headers:{
                    Authorization:'Bearer' + localStorage.getItem('token')
                }

            })
n
            this.user =response.data;
        }
    }
</script>

<style>
.bg{background-image: url('../assets/food4.jpg');


}
</style>