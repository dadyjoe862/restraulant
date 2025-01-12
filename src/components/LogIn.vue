<template>
    <div class="bg" >
        
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen max-md:h-screen lg:py-0">
            <img class="w-40 h-40  mb-10 rounded-full " src="../assets/Logo.png" alt="">


            <div
                class="w-full  rounded-xl   md:mt-0 sm:max-w-md xl:p-0  ">
                    
                <div class="p-6 space-y-4 md:space-y-6 sm:p-6 ">
                    
                    <h1
                        class="text-xl text-center font-bold leading-tight tracking-normal text-gray-100 md:text-2xl  ">
                        LogIn
                    </h1>
                    <form class="space-y-4 md:space-y-6 " action="#" @submit.prevent="handleSubmit" >

                        
                        <input class="bg-gray-200 border border-gray-300 text-center text-gray-800 block w-full h-10 hover:bg-gray-300 rounded-full" type="text" v-model="firstname" placeholder="Enter your Email" required>
                        <input class="bg-gray-200 border border-gray-300 text-center text-gray-800 block w-full h-10 hover:bg-gray-300 rounded-full " type="password" v-model="passwd" placeholder="Enter password" required>

                        <button class="w-full text-gray-800 hover:text-gray-300 bg-lime-500  hover:bg-lime-600 rounded-full h-10" type="submit">Login</button>

                        <p class="txt-xl font-semibold  text-gray-100">
                            Don't have an account yet?
                            <router-link to="/signup" class="text-green-900  text-center hover:underline font-bold px-5 py-1.5 ">signup</router-link>

                        </p>

                    </form>
                </div>


            </div>


        </div>


    </div>

</template>

<script>
import  axios  from 'axios';
export default {
    name: 'Login',
    data(){

        return{
        firstname:'',
        passwd:''

        }

    },

    methods:{

       async handleSubmit(){
            const data={
                firstnme:this.firstname,
                passwd:this.passwd
            }
            let response=await axios.post('http://localhost:3000/user',data)
            if(response.status==201){
                localStorage.setItem('token', response.data.token);
                alert('login sucess')
            }
            else{
                alert('Invalid Login Informations')
            }
        }

    }

}
</script>

<style >

.bg{
    background-image: url(../assets/food4.jpg);
   background-size: cover ;
   background-repeat: no-repeat;

}



</style>