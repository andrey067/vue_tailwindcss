<template>
    <div class="bg-gray-50 text-gray-600">
        <!-- header -->
        <div>
            <div class="container max-w-5xl mx-auto px-4 h-24 flex items-center justify-between">
                <div class="font-black flex items-center">
                    <img src="../assets/logo.png" class="logo mr-3">
                    Logo
                </div>
                <div>
                    <ul class="flex items-center space-x-4">
                        <li>
                            <a href="" class="text-sm text-gray-600 hover:text-gray-800 hover:underline">Como
                                reservar</a>
                        </li>
                        <li>
                            <a href="" class="text-sm text-gray-600 hover:text-gray-800 hover:underline">Sobre nós</a>
                        </li>
                        <li>
                            <a href="" class="text-sm text-gray-600 hover:text-gray-800 hover:underline">Informações</a>
                        </li>
                        <li>
                            <router-link class="text-sm text-gray-600 hover:text-gray-800 hover:underline" to="/login">
                                Tela de Login</router-link>
                        </li>
                        <li>
                            <router-link class="text-sm text-gray-600 hover:text-gray-800 hover:underline"
                                to="/fundamentos">Fundamentos Tailwind Css</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- header -->

        <!-- Banner -->
        <div class="banner">
            <div class="container mx-auto px-4 h-full flex items-center justify-center">
                <div>
                    <div class="text-center">
                        <h1 class="text-gray-200 text-3xl mb-1">Onde você quer ir?</h1>
                        <p class="text-green-100">Escolha o estado e cidade para achar os melhores resorts.</p>
                    </div>

                    <div class="mt-7">
                        <form class="space-x-4">
                            <select class="bg-grey-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
                                <option value="">Escolha estado</option>
                            </select>

                            <select class="bg-grey-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
                                <option value="">Escolha cidade</option>
                            </select>

                            <button
                                class="inline-flex items-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                                Pesquisar resorts
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Banner -->


        <!-- Area de destaque -->
        <div>
            <div class="container mx-auto px-4 py-10">
                <div class="flex">
                    <div class="pr-10">
                        <div class="text-sm text-gray-400 font-medium">RESORT EM DESTAQUE</div>
                        <div class="text-2xl text-gray-600">Ecoresort Praia do Forte Bahia</div>
                        <div class="text-sm text-gray-400 font-medium">Hotel Qualidade 5 estrelas</div>
                        <div class="text-sm text-gray-400 font-medium mt-4">
                            <p class="mb-4"> Deserunt commodo quis ipsum sunt laborum mollit officia consequat minim
                                magna pariatur
                                esse
                                do laborum. Ullamco elit magna eiusmod enim non duis aliqua et magna. Do pariatur elit
                                reprehenderit veniam mollit laborum anim aute velit labore cupidatat labore. In ut
                                cupidatat
                                cupidatat exercitation Lorem laboris officia quis labore quis ullamco. Duis nostrud
                                reprehenderit excepteur pariatur nulla adipisicing proident ullamco tempor aute. Elit
                                nostrud ad consequat non.
                            </p>
                            <p>
                                Aliqua elit occaecat in exercitation mollit officia id deserunt. Occaecat ipsum id
                                veniam
                                incididunt ad sunt sint excepteur esse Lorem proident in deserunt aute. Sint elit nisi
                                ullamco labore qui. Anim officia officia nulla deserunt non Lorem minim commodo qui ut.
                                Magna est fugiat sit occaecat et in amet sit.
                            </p>
                            <div class="mt-4">
                                <a href=""
                                    class="inline-flex items-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded">
                                    Solicitar reserva
                                    <svg class="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="flex-shrink-0  ml-auto">
                        <img src="../assets/img/featured-img.png" width="450px">
                    </div>
                </div>
            </div>
        </div>
        <!-- Area de destaque -->

        <!-- Grid Resort -->
        <div>
            <div class="container mx-auto px-4">
                <h3 class="text-2xl text-gray-500 font-semibold text-center mb-8">Conheça mais resorts</h3>

                <div class="grid grid-cols-4 grid-rows-2 gap-6">
                    <div class="relative col-span-2 row-span-2 rounded-lg overflow-hidden">
                        <div class="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">
                            Beach Park Resort
                        </div>
                        <img src="../assets/img/image-shadow.png" class="absolute bottom-0 left-0 right-0 h-20 z-10">
                        <img src="../assets/img/hotel-1.jpeg" class="w-full h-full object-cover">
                    </div>
                    <div class="relative col-span-2 h-40  rounded-lg overflow-hidden">
                        <div class="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">
                            Salinas do Maragogi Resort
                        </div>
                        <img src="../assets/img/image-shadow.png" class="absolute bottom-0 left-0 right-0 h-20 z-10">
                        <img src="../assets/img/hotel-2.jpeg" class="w-full h-full object-cover">
                    </div>
                    <div class="relative rounded-lg overflow-hidden">
                        <div class="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">
                            Grand Palladium
                        </div>
                        <img src="../assets/img/image-shadow.png" class="absolute bottom-0 left-0 right-0 h-20 z-10">
                        <img src="../assets/img/hotel-3.jpeg" class="w-full h-full object-cover">
                    </div>
                    <div class="relative rounded-lg overflow-hidden">
                        <div class="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">
                            Arraial d'Ajuda Eco Resort
                        </div>
                        <img src="../assets/img/image-shadow.png" class="absolute bottom-0 left-0 right-0 h-20 z-10">
                        <img src="../assets/img/hotel-4.jpeg" class="w-full h-full object-cover">
                    </div>
                </div>
            </div>
        </div>
        <!-- Grid Resort -->

        <!-- form search -->
        <div class="py-20">
            <div class="container mx-auto px-4 flex justify-center">
                <form class="space-x-4">
                    <select class="bg-grey-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
                        <option value="">Escolha estado</option>
                    </select>

                    <select class="bg-grey-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
                        <option value="">Escolha cidade</option>
                    </select>

                    <button
                        class="inline-flex items-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        Pesquisar resorts
                    </button>
                </form>
            </div>
        </div>
        <!-- /form search -->

        <!-- footer -->
        <div class="border-t border-gray-200">
            <div class="container mx-auto p-4 flex items-center justify-between">
                <div class="text-gray-400 font-black">
                    LOGO
                </div>

                <div class="flex items-center space-x-3">
                    <a href=""><img src="../assets/img/icon-facebook.png"></a>
                    <a href=""><img src="../assets/img/icon-instagram.png"></a>
                </div>
            </div>
        </div>
        <!-- /footer -->
    </div>
    <div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: "HomePage",
    data: () => ({
        image: {
            backgroundImage: "url('')"
            // height: '400px'
        }
    }),
    components: {}
})
</script>

<style scoped>
.banner {
    height: 450px;
    background-image: url('../assets/img/hero-image-1.png');
}

.logo {
    height: 25px;
}
</style>