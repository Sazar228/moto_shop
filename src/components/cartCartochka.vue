<template>
    <div class="w-full sm:w-4/5 lg:w-3/5 mt-5 m-auto shadow border-slate-200 h-full rounded order-card">
    <div class="flex flex-wrap sm:flex-nowrap items-center p-2 gap-3 sm:gap-0 card-inner">
      <img :src="item.images" alt="" class="w-16 h-16 sm:w-25 sm:h-25 mr-0 sm:mr-5 ml-0 sm:ml-5 pointer-events-none" />
      <div class="w-full sm:w-70 info">
        <h1 class="font-bold text-lg sm:text-xl">{{ item.name }}</h1>
        <p class="text-slate-500 text-sm sm:text-base">hi</p>
      </div>

      <div class="flex flex-wrap sm:flex-nowrap w-full sm:w-4/6 justify-between sm:justify-around items-center gap-3 actions">
        <div class="flex items-center gap-3">
        <div @click="removeFromCart(item)" class="w-6 h-6 border-2 rounded-full flex items-center justify-center border-black text-black">
          <span class="text-xl font-bold leading-none mb-1">−</span>
        </div>
        <div @click="addToCart(item)" class="w-6 h-6 border-2 rounded-full flex items-center justify-center border-yellow-500 text-yellow-500">
          <span class="text-xl font-bold leading-none mb-1">+</span>
        </div>
      </div>

      <p class="ml-0 sm:ml-10 font-bold text-lg">{{ item.price }} ₽</p>

      <div @click="removeFromCart(item)" class="ml-0 sm:ml-10 w-8 h-8 border-2 border-slate-300 rounded-full flex items-center justify-center">
        <span class="text-slate-500 font-bold mb-1">x</span>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';

    export default {
        props:{
            item:Object
        },
        setup(){
            const { addToCart, removeFromCart } = inject('addCart')


            return{
                addToCart,
                removeFromCart
            }
        }
    }
</script>

<style scoped>
.order-card {
  margin-top: 20px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.order-card .card-inner {
  display: flex;
  align-items: center;
  padding: 12px;
}

.order-card img {
  width: 100px;
  height: auto;
  margin-right: 15px;
  border-radius: 8px;
}

.order-card .info {
  flex: 1;
}

.order-card .actions {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
}
</style>