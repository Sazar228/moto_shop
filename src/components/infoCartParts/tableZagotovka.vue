<template>
  <div class="flex flex-col lg:flex-row lg:flex-nowrap w-full border-b-2 lg:items-center gap-2 lg:gap-12 py-3 lg:py-0 lg:h-1/6">
    <div class="flex flex-wrap items-center gap-3 sm:gap-6 lg:contents">
      <p class="border-b-2 border-black ml-2">{{ size }}</p>
      <p>Завтра</p>
      <p class="font-bold">{{ product?.price }} ₽</p>
      <div class="flex items-center">
        <div class="mr-2 w-2 h-2 bg-green-500 rounded-full"></div>
        <p>3 шт</p>
      </div>
    </div>

    <div class="flex items-center gap-3 lg:contents">
      <Transition name="fade" mode="out-in">
        <button
          @click="changeBtn()"
          v-if="!added"
          key="yellow"
          class="bg-yellow-300 w-auto px-4 lg:w-1/6 shadow-xl border-b-2 border-[#C8B03E] rounded-xl font-bold text-center h-10 lg:mr-5"
        >
          В корзину
        </button>
        <button
          v-else-if="added"
          key="purple"
          class="bg-purple-300 w-auto px-4 lg:w-1/6 shadow-xl border-b-2 border-[purple] rounded-xl font-bold text-center h-10 lg:mr-5"
        >
          Добавлено
        </button>
      </Transition>
      <p class="line-through font-medium text-lg">В кредит</p>
    </div>
  </div>
</template>

<script>
import { inject, ref } from 'vue';

export default {
    props:{
        product:Object,
        size:String
    },
  setup(props) {
    const { addToCart } = inject("addCart");
    const added = ref(false);

    const changeBtn = () => {
        addToCart(props.product);
      added.value = true;

      setTimeout(() => {
        added.value = false;
      }, 2000);
    };

    return {
      changeBtn,
      added,
    };
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>