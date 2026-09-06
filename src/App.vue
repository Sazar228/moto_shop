<template>
  <HeaderMain :search="search" />
  <RouterView :carts="carts"></RouterView>
</template>

<script>
import { onMounted, provide } from "vue";
import HeaderMain from "./components/headerMain.vue";
import { datas } from "@/hooks/getDatas.js";
import { sort } from "./hooks/getSorted.js";
import { getPrice } from "./hooks/getTotalPrice.js";
import { useCartOrders } from "./hooks/getOrder.js";
import { fav } from "./hooks/getFavorite.js";
export default {
  components: {
    HeaderMain,
  },
  setup() {
    const { isAdded, isFavorite, colesoMas, dataColeso, motoColesoMas, dataMotoColeso, dataDisci, disciMas, allData, loadData } = datas();
    const { filters, filterData, frSorts, scSorts, resetFilters, search, searching, secondFilter } = sort(allData, colesoMas, disciMas);
    const { carts, orderId, isCreatingOrder, addToCart, removeFromCart, createOrder, clearCart } = useCartOrders();
    const { totalPrice } = getPrice(carts);
    const { makeFav,syncFav,loadFavorites,favorites } = fav()
    onMounted(async () => {
      (
        await loadFavorites(),
        await dataColeso(),
        await dataMotoColeso(),
        await dataDisci(),
        await loadData());


        syncFav(colesoMas),
        syncFav(motoColesoMas),
        syncFav(disciMas)
    });

    provide('fav',makeFav)
    provide('favor',favorites)
    provide('loadFav',loadFavorites)
    
    provide('total',totalPrice)

    provide('carts',{
      carts,
      orderId,
      isCreatingOrder,
    })

    provide("datas", {
      isAdded,
      isFavorite,
      colesoMas,
      dataColeso,
      motoColesoMas,
      dataMotoColeso,
      dataDisci,
      disciMas,
      allData,
      loadData,
    });

    provide("sorts", {
      filters,
      filterData,
      frSorts,
      scSorts,
      resetFilters,
      search,
      searching,
      secondFilter,
    });
    provide("addCart", {
      addToCart,
      removeFromCart,
      clearCart,
      createOrder
    });

    return {
      isAdded,
      isFavorite,
      colesoMas,
      dataColeso,
      motoColesoMas,
      dataMotoColeso,
      dataDisci,
      disciMas,
      allData,
      loadData,
      filters,
      filterData,
      resetFilters,
      secondFilter,
      scSorts,
      frSorts,
      search,
      searching,
      carts,
      orderId,
      isCreatingOrder,
      addToCart,
      removeFromCart,
      createOrder,
      totalPrice,
      makeFav,
      syncFav,
      loadFavorites,
      favorites
    };
  },
};
</script>

<style scoped></style>
