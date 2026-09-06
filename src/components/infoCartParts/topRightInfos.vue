<template>
    <div class="flex flex-col w-full lg:w-3/5 mt-6 lg:mt-0 lg:ml-5"> <!--right part-->
            <h1 class="font-bold text-xl lg:text-2xl">{{ product?.category }} {{ product?.name }}</h1>
            
            <div class="flex flex-col sm:flex-row"> <!--info prices etc-->
                <div class="flex flex-col w-full sm:w-2/6 mt-5"> 
                <p class="flex italic justify-between font-medium">Производитель: <span class="font-light text-slate-400 mr-2 ">{{ product?.manufacturer }}</span></p>
                <div class="flex italic justify-between mt-1">
                    <p class="font-medium">Сезон:</p>
                    <div class="flex items-center justify-center ml-1">
                        <span class="text-slate-400 font-light">{{ product?.season }}</span>
                        <!-- <img class="w-5 h-5 ml-2 pointer-events-none" src="/snowflake.svg" alt=""> -->
                    </div>
                </div>
                <!-- <p class="flex italic justify-between mt-1 font-medium">Тип: <span class="font-light text-slate-400">Легковая</span></p> -->
            </div>

            <div class="flex flex-col w-full sm:w-3/6 sm:ml-10 mt-5">
                <p class="italic flex justify-between font-medium">Размеры: <span class="font-light text-slate-400">от 32/0 R10 до 305/55 R20</span></p>
                <p class="italic flex justify-between font-medium mt-1">Цены: <span class="font-light text-slate-400 sm:mr-[3.2rem]">от 2 000 до 10 000</span></p>
            </div>
            </div>


            <div class="w-full">
            
            <div class="flex w-full sm:w-3/4 lg:w-2/4 mt-5 border-1">
                <div
                v-for="(variant,index) in variants"
                :key="index"
                class="italic font-medium flex items-center justify-center flex-1 lg:w-14 h-10 lg:h-12 text-sm lg:text-base"
                :class="[
                    changer === index ? 'bg-black text-yellow-300' : 'bg-yellow-300 text-black',
                    index === 0 ? 'rounded-tl-xl' : '',
                    index === 5 ? 'rounded-tr-xl' : ''
                ]"
                @click="changeColor(index)"
                >
                {{ variant }}
                </div>
            </div>

            <div class="w-full border-2 h-auto lg:h-[20rem] bg-[#F8F8F8]">
                <div class="flex flex-wrap lg:flex-nowrap border-b-2 w-full h-auto lg:h-12 items-center gap-x-6 gap-y-1 sm:gap-x-10 lg:gap-x-12 py-2 lg:py-0 font-medium text-xs sm:text-sm lg:text-base">
                    <p class="ml-2">Типоразмер</p>
                    <p>Срок</p>
                    <p>Цена</p>
                    <p>Наличие</p>
                </div>
                <TableZagotovka :product="product" :size="selectedSize"/>
                <TableZagotovka :product="product" :size="selectedSize"/>
                <TableZagotovka :product="product" :size="selectedSize"/>
                <TableZagotovka :product="product" :size="selectedSize"/>
                <TableZagotovka :product="product" :size="selectedSize" class="border-none mt-1"/>
            </div>
            <div>
    <h1 class="font-medium mt-5 text-xl lg:text-2xl">Описание</h1>
    <p class="text-sm sm:text-base lg:text-lg">В интернет-магазине шин Шины Мигом вы можете купить шины известных брендов. Подбор осуществляется как по типоразмеру, так и по марке авто. Предоставляем услуги по шиномонтажу и сезонному хранению шин. В интернет-магазине шин Шины Мигом вы можете купить шины известных брендов. Подбор осуществляется как по типоразмеру, так и по марке авто.</p>
</div>

        </div>

        </div>
</template>

<script>
import { computed, inject, ref } from 'vue';
import TableZagotovka from './tableZagotovka.vue';

export default {
    props:{
        product:Object
    },
    components:{
        TableZagotovka
    },
    setup (props) {

        const variants = ["R14", "R15", "R16", "R17", "R18", "R19"]
        const changer = ref(0)



        const changeColor = (index) =>{
            changer.value = index
        }


        const selectedSize = computed(() => {
      return `${props.product?.width}/${props.product?.height} ${variants[changer.value]}`;
    });
    
        

        return {
            variants,
            changer,
            changeColor,
            selectedSize

        }
    }
}
</script>

<style scoped>
.radl{
    border-top-left-radius: 10px;
}
.radr{
    border-top-right-radius: 10px;
}
</style>