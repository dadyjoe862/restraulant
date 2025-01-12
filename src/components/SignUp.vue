<template>
    <div class="bg">
        <div class="flex flex-col items-center justify-center px-8 py-8 mx-auto md:h-screen max-md:h-screen">
            <img class="w-40 h-40 mb-10  rounded-full" src="../assets/Logo.png" alt="">

            <div class="w-full rounded-xl md:mt-0 sm:max-w-md xl:p-0">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-6 ">
                    <h1 class="text-xl text-center font-bold text-gray-100 leading-tight tracking-normal md:text-2xl ">
                        SignUp</h1>

                    <form class="space-y-4 md:space-y-6 " action="" @submit.prevent="register">


                        <input type="text"
                            class="bg-gray-200 hover:bg-gray-300 text-gray-800 text-center block w-full h-10 rounded-full"
                            v-model="firstname" placeholder="Enter your firstname">
                        <input type="text"
                            class="bg-gray-200 hover:bg-gray-300 text-gray-800 text-center block w-full h-10 rounded-full "
                            v-model="lastname" placeholder="Enter your last name">
                        <input type="password"
                            class="bg-gray-200 hover:bg-gray-300 text-gray-800 text-center block w-full h-10 rounded-full "
                            v-model="passwd" placeholder="Enter your Password">
                        <button
                            class="w-full h-10 text-gray-800 bg-lime-500 hover:bg-lime-600  hover:text-gray-200 rounded-full">SignUp</button>
                        <p class="txt-xl font-semibold  text-gray-100">
                            Arleady have an account?
                            <router-link to="/login"
                                class="text-green-900  text-center hover:underline font-bold px-5 py-1.5 ">Login</router-link>

                        </p>
                    </form>
                </div>

            </div>



        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "SignUp",
    data() {
        return {
            firstname: '',
            lastname: '',
            passwd: ''
        }
    },
    methods: {
        async register() {
            const data = {
                firstname: this.firstname,
                lastname: this.lastname,
                password: this.passwd
            }

            const responce = await axios.post('http://localhost:3000/user', data)

            if (responce.status == 201) {
                alert('registerd sucess')
                this.$router.push('/login')
            } else {
                alert('registration failed')
            }
        }
    }
}
</script>

<style>
.bg {
    background-image: url(../assets/food4.jpg);

}
</style>