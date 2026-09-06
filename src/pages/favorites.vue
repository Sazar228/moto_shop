<template>
  <h1 class="text-xl sm:text-2xl italic w-11/12 lg:w-4/5 m-auto mt-6 lg:mt-10 mb-5 font-medium">
    Список избранного :
  </h1>
  <div
    v-auto-animate
    class="grid grid-cols-2 sm:grid-cols-3 lg:flex gap-4 lg:gap-5 w-11/12 lg:w-4/5 mb-10 m-auto"
  >
    <CartochkaContain
      v-for="item in favItem"
      :key="item.id"
      :image="item.images"
      :name="item.name"
      :price="item.price"
      :old_price="item.old_price"
      :isFavorite="item.isFavorite"
      :item="item"
      :hideBtn="false"
      :hideFav="false"
      :hideSrc="false"
    />
  </div>
</template>

<script>
import CartochkaContain from "@/components/cartochkaContain.vue";
import { computed, inject, onMounted, provide } from "vue";

export default {
  components: {
    CartochkaContain,
  },
  setup() {
    const favorites = inject("favor");
    const favItem = computed(() =>
      favorites.value.map((f) => f.item),
    );
    const loadFavorites = inject('loadFav')

    onMounted(async () =>{
        await loadFavorites()
    })

    return {
      favItem,
      loadFavorites
    };
  },
};
</script>

<style lang="scss" scoped></style>