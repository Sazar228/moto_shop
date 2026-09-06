<template>
  <div v-if="!search.searchQuery">
    <LotSelects
      :secondFilter="secondFilter"
      :filters="filters"
      @frSorts="frSorts"
      @scSorts="scSorts"
      @resetFilters="resetFilters"
    />
  </div>

  <TransitionGroup name="fade">
    <!-- если есть поисковый запрос -->
    <div
      v-if="search.searchQuery"
      v-auto-animate
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-10 w-11/12 lg:w-4/5 m-auto mt-10"
    >
      <CartochkaContain
        v-for="info in filterData"
        :key="info.id"
        :image="info.images"
        :name="info.name"
        :price="info.price"
        :old_price="info.old_price"
        :item="info"
      />
    </div>

    <!-- если выбраны селекты -->
    <div
      v-else-if="
        filters.width ||
        filters.height ||
        filters.diameter ||
        filters.manufacturer ||
        filters.season ||
        filters.run_flat
      "
      v-auto-animate
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-10 w-11/12 lg:w-4/5 m-auto mt-10"
    >
      <CartochkaContain
        v-for="info in filterData"
        :key="info.id"
        :image="info.images"
        :name="info.name"
        :price="info.price"
        :old_price="info.old_price"
        :item="info"
      />
    </div>

    <!-- если выбраны селекты второй сортировки -->
    <div
      v-else-if="
        secondFilter.width ||
        secondFilter.mounting ||
        secondFilter.diameter ||
        secondFilter.manufacturer ||
        secondFilter.dia ||
        secondFilter.et ||
        secondFilter.pcd ||
        secondFilter.type
      "
      v-auto-animate
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-10 w-11/12 lg:w-4/5 m-auto mt-10"
    >
      <CartochkaContain
        v-for="info in filterData"
        :key="info.id"
        :image="info.images"
        :name="info.name"
        :price="info.price"
        :old_price="info.old_price"
        :item="info"
      />
    </div>

    <!-- если пусто -->
    <div v-else>
      <BlockKrest />
      <ShinsInfo />
      <CartochkaMain
        :colesoMas="colesoMas"
        :isAdded="isAdded"
        :isFavorite="isFavorite"
        :motoColesoMas="motoColesoMas"
        :disciMas="disciMas"
      />
      <CompanyShins />
      <TheEnd />
    </div>
  </TransitionGroup>
</template>

<script>
import BlockKrest from "@/components/blockKrest.vue";
import CartochkaMain from "@/components/CartochkaMain.vue";
import LotSelects from "@/components/lotSelects.vue";
import ShinsInfo from "@/components/shinsInfo.vue";
import CompanyShins from "@/components/companyShins.vue";
import TheEnd from "@/components/theEnd.vue";
import CartochkaContain from "@/components/cartochkaContain.vue";
import { inject } from "vue";
export default {
  components: {
    LotSelects,
    BlockKrest,
    ShinsInfo,
    CartochkaMain,
    CompanyShins,
    TheEnd,
    CartochkaContain,
  },
  props: {
    carts: Array,
  },
  setup() {
    const datas = inject("datas");
    const sorts = inject("sorts");

    return {
      ...datas,
      ...sorts,
    };
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>