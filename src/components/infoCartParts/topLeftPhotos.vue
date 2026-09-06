<template>
    <div class="w-full lg:w-2/5 lg:h-full flex flex-col pointer-events-none"> <!--left part-->
            <div class="mb-5 w-full h-64 sm:h-80 lg:h-auto lg:flex-1 p-3 sm:p-5 border-2 border-slate-200 rounded-xl flex justify-center items-center relative">
                <img src="/headerImg/reclamaBanner.png" alt="" class="absolute opacity-50 right-2 sm:right-5 top-2 sm:top-5 w-16 sm:w-20 lg:w-24">
                <img src="/smile.jpg" alt="" class="w-10 sm:w-14 lg:w-16 h-auto absolute opacity-50 left-2 sm:left-5 bottom-2 sm:bottom-5 rounded-xl">
                <img class="h-32 sm:h-48 lg:h-56 w-auto lg:w-auto" :src="product?.images" alt="">
            </div>
                <img class="mb-5 w-full" src="/strahovka.png" alt="">
                <img class="w-full" src="/strahovka.png" alt="">
        </div>
</template>

<script>
import { ref } from 'vue';

export default {
    props:{
        product:Object
    },
    setup () {

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>