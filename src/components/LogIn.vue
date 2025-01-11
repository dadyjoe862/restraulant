<template>
    <div class="bg" >
        
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen max-md:h-screen lg:py-0">
            <img class="w-40 h-40  mb-10 rounded-full " src="../assets/Logo.png" alt="">


            <div
                class="w-full bg-no-repeat rounded-xl   md:mt-0 sm:max-w-md xl:p-0  ">
                    
                <div class="p-6 space-y-4 md:space-y-6 sm:p-6 ">
                    
                    <h1
                        class="text-xl text-center font-bold leading-tight tracking-normal text-gray-100 md:text-2xl  ">
                        Login
                    </h1>
                    <form class="space-y-4 md:space-y-6 " action="#" >

                        
                        <input class="bg-gray-200 border border-gray-300 text-center text-gray-800 block w-full h-10 hover:bg-gray-300 rounded" type="email" v-model="email" placeholder="Enter your Email" required>
                        <input class="bg-gray-200 border border-gray-300 text-center text-gray-800 block w-full h-10 hover:bg-gray-300 rounded " type="password" v-model="passwd" placeholder="Enter password" required>

                        <button class="w-full text-gray-800 bg-lime-500  hover:bg-lime-600 rounded h-10" type="submit">Login</button>

                    </form>
                </div>


            </div>


        </div>


    </div>

</template>

<script>
export default {
    name: 'Login',
    data(){

        return{
        email:'',
        passwd:''

        }

    },

    methods:{

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