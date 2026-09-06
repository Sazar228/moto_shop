<template>
  <div
    v-auto-animate

  >
    <CartCartochka
      v-for="cart in carts"
      :item="cart"
      :key="cart.id"
    />
  </div>
</template>

<script>
import CartCartochka from './cartCartochka.vue';


export default {
    components:{
        CartCartochka
    },
    props:{
        carts:Array
    },
    setup () {
    return {};

    }
}
</script>

<style scoped>

</style>