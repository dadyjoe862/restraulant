<template>
    <div>
        <nav
            class=" bg-gray-600 fixed w-full z-auto top-0 start-0 border-b-8 border-gray-300">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="../assets/Logo.png" class="h-8 rounded-full" alt="restraulant">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">FastFood</span>
                </a>
                <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button"
                        class="text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center bg-blue-600 hover:bg-blue-700">Get
                        started</button>
                    <button data-collapse-toggle="navbar-sticky" type="button"
                        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul
                        class="flex flex-col p-4 md:p-0 mt-4 font-medium border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
                        <li>
                            <router-link to ="#"
                                class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 hover:text-blue-500 hover:underline"
                                aria-current="page">Home</router-link>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 px-3 text-gray-100 rounded hover:text-blue-500 md:hover:bg-transparent md:p-0 ">About</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 px-3 text-gray-100 rounded hover:text-blue-500 md:hover:bg-transparent md:p-0">Services</a>
                        </li>
                        <li>
                            <a href="#"
                            class="block py-2 px-3 text-gray-100 rounded hover:text-blue-500 md:hover:bg-transparent md:p-0">Contacts</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style >






</style>
