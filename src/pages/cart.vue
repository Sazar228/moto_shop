<template>
  <div class="w-11/12 lg:w-5/6 h-vh m-auto bg-red" v-auto-animate>
    <TopCart />

    <massCart v-if="carts.length > 0" :carts="carts" />

    <EndCart v-if="carts.length > 0" :carts="carts" />

    <EmptyCart v-else />
  </div>
</template>

<script>
import EmptyCart from "@/components/emptyCart.vue";
import EndCart from "@/components/endCart.vue";
import massCart from "@/components/massiveCart.vue";
import TopCart from "@/components/topCart.vue";

export default {
  components: {
    massCart,
    TopCart,
    EmptyCart,
    EndCart,
  },
  props: {
    carts: Array,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
</style>