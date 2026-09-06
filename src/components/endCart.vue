<template>
  <div class="w-[90%] sm:w-4/5 lg:w-3/5 flex flex-col m-auto">
    <div class="flex flex-col sm:flex-row justify-between mt-5 gap-2 sm:gap-0 order-summary">
    <p class="text-base sm:text-lg lg:text-xl">
      Количество шин : <span class="font-bold text-base sm:text-lg">{{ carts.length }} шт</span>
    </p>
    <p class="text-base sm:text-lg lg:text-xl">
      Сумма заказа :
      <span class="text-orange-500 font-bold text-base sm:text-lg"
        >{{ totalPrice }} ₽</span
      >
    </p>
  </div>

  <div class="flex flex-col sm:flex-row justify-between mt-5 gap-3 sm:gap-0 order-summary">
    <RouterLink to="/"
      ><div class="border border-slate-200 text-slate-500 p-3 rounded-full text-center text-sm sm:text-base">< Вернуться назад</div></RouterLink>
    <div
    @click="createOrder(totalPrice)"
      class="border border-orange-500 text-white bg-orange-500 p-3 rounded-full text-center text-sm sm:text-base cursor-pointer"
    >
      Оплатить сейчас
    </div>
  </div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
    props:{
        carts:Array
    },
  setup() {
    const totalPrice = inject('total')
    const { createOrder } = inject("addCart");

    return {
        totalPrice,
        createOrder
    };
  },
};
</script>

<style scoped>
.order-summary {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
  gap: 10px;
}

@media (min-width: 640px) {
  .order-summary {
    flex-direction: row;
    gap: 20px;
  }
}
</style>