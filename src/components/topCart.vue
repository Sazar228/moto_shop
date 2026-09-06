<template>
  <div class="flex flex-col sm:flex-row w-11/12 lg:w-3/5 m-auto cart-header gap-3 sm:gap-0">
    <div class="bg-black w-full sm:w-[9rem] rounded-xl p-2 flex items-center justify-center sm:justify-start gap-2">
      <img src="/headerImg/Shopping-cart.svg" alt="" />
      <h1 class="text-white font-bold text-xl sm:text-2xl">Корзина</h1>
    </div>

    <div
      @click="clearCart"
      class="flex items-center justify-center sm:justify-start cursor-pointer clear-cart"
    >
      <img
        class="w-5 h-5 pointer-events-none"
        src="/headerImg/clearCart.svg"
        alt=""
      />
      <p class="text-slate-500 ml-1">Очистить корзину</p>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  setup() {
    const { clearCart } = inject("addCart");
    return {
      clearCart,
    };
  },
};
</script>

<style scoped>
.cart-header {
  align-items: center;
  justify-content: space-between;
  margin-top: 5rem;
}
.clear-cart {
  transition:
    color 0.25s ease,
    transform 0.25s ease;
}
.clear-cart:hover {
  color: #ef4444;
  transform: translateY(-2px);
}
.clear-cart:hover p {
  color: #ef4444;
}
</style>