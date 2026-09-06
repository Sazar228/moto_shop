<template>


    <div class="flex justify-center flex-col mt-10">


      <div class="flex w-[90%] lg:w-4/5 flex-col h-auto m-auto">
        <div class="flex justify-between items-center w-full">
          <h1 class="p-2 text-lg sm:text-xl lg:text-[25px] font-bold">Популярные шины</h1>
          <RouterLink to="/shini">
            <p class="text-slate-500 text-sm sm:text-base">Смотреть все ></p>
          </RouterLink>
        </div>

        <div v-auto-animate class="flex flex-wrap lg:flex-nowrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-10 h-auto">
          <CartochkaContain
            :isFavorite="isFavorite"
            :isAdded="isAdded"
            v-for="colesos in colesoMas"
            :key="colesos.id"
            :image="colesos.images"
            :name="colesos.name"
            :price="colesos.price"
            :old_price="colesos.old_price"
            :item="colesos"
          />
        </div>
      </div>


      <div class="flex w-[90%] lg:w-4/5 flex-col h-auto m-auto">
        <div class="flex justify-between items-center w-full">
          <h1 class="p-2 text-lg sm:text-xl lg:text-[25px] font-bold">Популярные шины</h1>
          <RouterLink to="/motoshini">
            <p class="text-slate-500 text-sm sm:text-base">Смотреть все ></p>
          </RouterLink>
        </div>

        <div v-auto-animate class="flex flex-wrap lg:flex-nowrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-10 h-auto">
          <CartochkaContain
            :isFavorite="isFavorite"
            :isAdded="isAdded"
            v-for="colesos in motoColesoMas"
            :key="colesos.id"
            :image="colesos.images"
            :name="colesos.name"
            :price="colesos.price"
            :old_price="colesos.old_price"
            :item="colesos"
          />
        </div>
      </div>

      <div class="flex w-[90%] lg:w-4/5 flex-col h-auto m-auto">
        <div class="flex justify-between items-center w-full">
          <h1 class="p-2 text-lg sm:text-xl lg:text-[25px] font-bold">Популярные шины</h1>
          <RouterLink to="/disci">
            <p class="text-slate-500 text-sm sm:text-base">Смотреть все ></p>
          </RouterLink>
        </div>

        <div v-auto-animate class="flex flex-wrap lg:flex-nowrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-10 h-auto">
          <CartochkaContain
            :isFavorite="isFavorite"
            :isAdded="isAdded"
            v-for="colesos in disciMas"
            :key="colesos.id"
            :image="colesos.images"
            :name="colesos.name"
            :price="colesos.price"
            :old_price="colesos.old_price"
            :item="colesos"
          />
        </div>
      </div>


    </div>


  </template>

  <script>
  import CartochkaContain from "./cartochkaContain.vue";

  export default {
    props: {
      colesoMas: Array,
      isAdded: Boolean,
      isFavorite: Boolean,
      motoColesoMas: Array,
      disciMas: Array,
    },
    components: {
      CartochkaContain,
    },
    setup() {
      return {};
    },
  };
  </script>

  <style scoped></style>
