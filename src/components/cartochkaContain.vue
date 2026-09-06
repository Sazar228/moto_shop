<template>
  <div
    class="cartochka"
    :class="{ hovered: hover }"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    
      <div
      v-if="hideFav"
      @click="toggleFav"
      class="w-10 flex items-center justify-center self-end p-1 mr-2 h-10 rounded-full "
    >
    <Transition name="bounce" mode="out-in">
      <img :src="!isFavorite ? '/heartOff.svg' : '/heart.svg'"
       alt="favorite" 
       class="pointer-events-none" 
       :key="isFavorite"
       />
    </Transition>
    </div>
    <RouterLink v-if="hideSrc" :to="`/cart/info/${item.id}`" @click="goToProduct">
      <img :src="image" alt="" class="motoColeso m-auto pointer-events-none" />
    </RouterLink>
    <img v-else :src="image" alt="" class="motoColeso m-auto pointer-events-none" />
    <div class="bottom">
      <img src="/rating.svg" alt="" class="rating pointer-events-none" />
      <p class="mobile-price" style="font-weight: bold; margin: 0; margin-top: 5px">
        {{ price }} ₽
        <span
          class="mobile-old-price"
          style="
            color: gray;
            opacity: 0.7;
            margin-left: 10px;
            text-decoration: line-through;
            text-decoration-color: red;
            text-decoration-thickness: 2px;
          "
          >{{ old_price }} ₽</span
        >
      </p>
      <p class="mobile-name" style="font-style: italic; font-weight: 700;">
        {{ name }}
      </p>
    </div>
    <Transition name="fade" mode="out-in">
      <button
      
        @click="changeBtn()"
        v-if="(hover) && !added && hideBtn"
        key="yellow"
        class="bg-yellow-300 shadow-xl border-b-2 border-[#C8B03E] w-3/4 sm:w-2/4 self-end rounded-xl font-bold text-center h-10 mr-2 sm:mr-5 text-sm sm:text-base"
      >
        В корзину
      </button>
      <button
        v-else-if="(hover) && added && hideBtn"
        key="purple"
        class="bg-purple-300 shadow-xl border-b-2 border-[purple] w-3/4 sm:w-2/4 self-end rounded-xl font-bold text-center h-10 mr-2 sm:mr-5 text-sm sm:text-base"
      >
        Добавлено ✔️
      </button>
    </Transition>
  </div>
</template>

<style scoped>
.mobile-price {
  font-size: 18px;
}

.mobile-old-price {
  font-size: 14px;
}

.mobile-name {
  width: 100%;
  max-width: 240px;
}

@media (min-width: 1024px) {
  .mobile-price {
    font-size: 22px;
  }

  .mobile-old-price {
    font-size: 17px;
  }

  .mobile-name {
    width: 240px;
  }
}
</style>

<script>
import { useProductStore } from "@/store/product";
import { computed, inject, reactive, ref } from "vue";

export default {
  props: {
    name: String,
    image: String,
    price: Number,
    old_price: Number,
    item: Object,
    isAdded: Boolean,
    isFavorite:Boolean,
    hideFav: {
      type:Boolean,
      default:true
    },
    hideBtn: {
      type:Boolean,
      default:true
    },
    hideSrc: {
      type:Boolean,
      default:true
    }
  },
  setup(props) {
    const hover = ref(false);
    const { addToCart } = inject("addCart");
    const makeFav = inject('fav')
    const isFavoriteLoc = computed(()=>props.item?.isFavorite)
    const added = ref(false);

    const productStore = useProductStore()

    const changeBtn = () => {
      addToCart(props.item);
      added.value = true;

      setTimeout(() => {
        added.value = false;
      }, 2000);
    };

    const toggleFav = ()=>{
      makeFav(props.item,isFavoriteLoc)
    }

    const goToProduct = () => {
      productStore.setSelectedProduct(props.item)
    }

    return {
      hover,
      addToCart,
      added,
      changeBtn,
      makeFav,
      toggleFav,
      isFavorite:isFavoriteLoc,
      goToProduct,
    };
  },
};
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.cartochka {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  height: 280px;
  overflow: hidden;
  border: 1px solid rgba(128, 128, 128, 0.219);
  border-radius: 10px;
  justify-content: center;
  transition: all 0.3s ease;
}
.cartochka.hovered {
  /* transform: scale(1.2); */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  height: 310px;
}
.motoColeso {
  width: 90px;
  height: 114px;
  align-self: center;
}
.rating {
  width: 90px;
  height: 17px;
  margin-top: 10px;
}
.bottom {
  display: flex;
  flex-direction: column;
  margin-left: 15px;
}

@media (min-width: 1024px) {
  .cartochka {
    width: 350px;
    height: 330px;
  }
  .cartochka.hovered {
    height: 370px;
  }
  .motoColeso {
    width: 123px;
    height: 155px;
  }
  .rating {
    width: 121px;
    height: 23px;
  }
}
</style>
