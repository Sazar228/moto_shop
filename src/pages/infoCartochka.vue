<template>
  <div class="mt-5 w-11/12 lg:w-4/5 m-auto h-auto flex">
    <h1 class="text-sm">
      <span class="text-slate-400">Главная / Шины /</span> {{ product?.name }}
    </h1>
  </div>

  <div class="w-11/12 lg:w-4/5 h-full m-auto mt-6 lg:mt-10 flex flex-col lg:flex-row gap-6 lg:gap-0">
    <TopLeftPhotos :product="product" />
    <TopRightInfos :product="product" />
  </div>

  <h1 class="w-11/12 lg:w-4/5 m-auto text-xl sm:text-2xl font-medium mt-5 mb-5">
    Отзывы
  </h1>

  <div class="w-11/12 lg:w-4/5 m-auto flex flex-col gap-4 lg:gap-0">
    <AleksRate :product="product" />
    <NikitaRate :product="product" />
  </div>

  <Certificates />
  <TheEnd />
</template>

<script>
import Certificates from '@/components/infoCartParts/certificates.vue';
import TopLeftPhotos from '@/components/infoCartParts/topLeftPhotos.vue';
import TopRightInfos from '@/components/infoCartParts/topRightInfos.vue';
import AleksRate from '@/components/Rates/aleksRate.vue';
import NikitaRate from '@/components/Rates/nikitaRate.vue';
import TheEnd from '@/components/theEnd.vue';
import { useProductStore } from '@/store/product';
import { computed, onMounted } from 'vue';
export default {
  components: {
    TopLeftPhotos,
    TopRightInfos,
    AleksRate,
    NikitaRate,
    Certificates,
    TheEnd,
  },
  setup() {
    const productStore = useProductStore();

    onMounted(() => {
      if (!productStore.selectedProduct) {
        productStore.loadFromStorage();
      }
    });

    const product = computed(() => productStore.selectedProduct);

    return { product };
  },
};
</script>

<style lang="scss" scoped>
</style>