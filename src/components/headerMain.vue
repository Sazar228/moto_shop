<template>
  <header class="flex flex-col items-center w-full justify-center">
    <!-- Мобильная версия -->
    <HeaderMobile class="lg:hidden w-full" :search="search" />

    <!-- Десктопная версия -->
    <div class="hidden lg:flex lg:flex-col lg:items-center lg:w-full lg:justify-center">
      <HeaderOne :search="search" />
      <HeaderTwo />
      <HeaderThree />
    </div>
  </header>
</template>

<script>
import HeaderOne from "@/components/headerOne.vue";
import HeaderThree from "@/components/headerThree.vue";
import HeaderTwo from "@/components/headerTwo.vue";
import HeaderMobile from "./headerMobile.vue";
export default {
  components: {
    HeaderOne,
    HeaderTwo,
    HeaderThree,
    HeaderMobile
  },
  props:{
    search: Object,
  },  
  setup() {
    return {};
  },
};
</script>

<style scoped>

</style>
