<template>
  <div class="flex flex-wrap lg:flex-nowrap gap-3 sm:gap-5 w-full justify-center items-center mt-5 px-2">
    <img class="pointer-events-none w-24 sm:w-auto" src="/headerImg/reclamaBanner.png" alt="" />
    <img class="pointer-events-none w-24 sm:w-auto" src="/headerImg/yandexRate.png" alt="" />
    <div class="ml-0 lg:ml-12">
      <p class="text-slate-500 text-xs sm:text-sm lg:text-base">Режим работы :</p>
      <h1 class="font-bold text-sm sm:text-base">Пн-Вс : с 09:00-20:00</h1>
    </div>
    <div class="ml-0 lg:ml-5">
      <h1 id="text" class="font-bold text-sm sm:text-base">8 (800) 555-13-26</h1>
      <p @click="copyText" class="border-b-2 border-yellow-300 all_mini h-10 text-sm sm:text-base">Заказать звонок</p>
    </div>

    <div class="ml-0 lg:ml-[80px] flex gap-3 items-center">
      <router-link to="/favorites">
        <img src="/headerImg/heart.svg" alt="" class="p-1 w-8 h-8 lg:w-10 lg:h-10 all_mini"/>
      </router-link>
      <img src="/headerImg/properties.svg" alt="" class="p-1 w-8 h-8 lg:w-10 lg:h-10 all_mini pointer-events-none"/>
      <!--Korzina icon-->
      <router-link to="/cart">
        <div class="w-10 h-10 lg:w-12 lg:h-12 relative">
        <div
          class="flex items-center justify-center bg-slate-800 w-8 h-8 lg:w-10 lg:h-10 rounded-full all_mini "
        >
          <img class="pointer-events-none w-4 h-4 lg:w-auto lg:h-auto" src="/headerImg/Shopping-cart.svg" alt="" />
          <div
            class="bg-yellow-400 w-3 h-3 rounded-full right-1 text-center absolute"
          >
            <p class="font-bold text-[9px]">{{ carts.length }}</p>
          </div>
        </div>
      </div>
      </router-link>
      <!--end Korzina-->
      <div>
        <h1 class="text-slate-400 text-xs sm:text-sm lg:text-base">Корзина</h1>
        <p class="font-bold text-xs sm:text-sm lg:text-base">{{ carts.length }} товаров</p>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {

    const { carts } = inject('carts')

    const copyText = async () =>{
      try{

        const text = document.getElementById('text').innerText
        await navigator.clipboard.writeText(text)

        alert('Номер скопирован !')


      }catch(err){
        console.log('error in copy text' + err);
        
      }
    }


    return {
      carts,
      copyText
      
    };
  },
};
</script>

<style scoped>
.all_mini {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 90px;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.all_mini:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}
</style>