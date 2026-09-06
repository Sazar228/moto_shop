<template>
  <h1 class="font-bold italic text-xl sm:text-2xl text-center lg:text-left ml-0 lg:ml-[190px] mt-6 lg:mt-10">
    Все Диски :
  </h1>

  <div
    v-auto-animate
    class="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:gap-12 justify-center h-auto mt-6 lg:mt-10 gap-4 lg:gap-12 w-11/12 lg:w-4/5 m-auto"
  >
    <CartochkaContain
      v-for="shini in disciMas"
      :key="shini.id"
      :image="shini.images"
      :name="shini.name"
      :price="shini.price"
      :old_price="shini.old_price"
      :item="shini"
    />
  </div>
</template>

<script>
import { inject } from "vue";
import CartochkaContain from "@/components/cartochkaContain.vue";

export default {
  components: {
    CartochkaContain,
  },
  setup() {
    const { disciMas } = inject("datas");

    return {
      disciMas,
    };
  },
};
</script>

<style scoped></style>