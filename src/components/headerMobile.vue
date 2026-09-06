<template>
  <div class="w-full flex flex-col gap-3 pb-4">
    <div class="w-full  flex items-center justify-between px-3 py-3">
      <button @click="menuOpen = !menuOpen" class="p-1">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="black" stroke-width="2" stroke-linecap="round" />
        </svg>
      </button>

      <img src="/mobile/logomob.png" alt="logo" class="h-8 pointer-events-none" />

      <div class="flex items-center gap-2">
        <router-link to="/favorites" class="w-8 h-8 rounded-full bg-white flex items-center justify-center">
          <img src="/mobile/Heartmob.png" alt="favorite" class="w-6 h-6 pointer-events-none" />
        </router-link>
        <router-link to="/cart" class="relative w-8 h-8 rounded-full bg-white flex items-center justify-center">
          <img src="/mobile/Shopping-cartmob.png" alt="cart" class="w-6 h-6 pointer-events-none" />
          <div class="absolute -top-1 -right-1 bg-slate-900 text-white w-4 h-4 rounded-full flex items-center justify-center">
            <p class="text-[9px] font-bold">{{ carts.length }}</p>
          </div>
        </router-link>
      </div>
    </div>

    <Transition name="menu-slide">
    <div
      v-if="menuOpen"
      class="flex flex-col gap-1 bg-neutral-800 text-white rounded-lg p-3 mx-3 -mt-1"
    >
      <RouterLink to="/" class="menu-item">ГЛАВНАЯ</RouterLink>
      <RouterLink to="/shini" class="menu-item">ШИНЫ</RouterLink>
      <p @click="inProgress" class="menu-item">ГРУЗОВЫЕ ШИНЫ</p>
      <RouterLink to="/motoshini" class="menu-item">МОТОШИНЫ</RouterLink>
      <RouterLink to="/disci" class="menu-item">ДИСКИ</RouterLink>
      <p @click="inProgress" class="menu-item">АКЦИИ</p>
      <p @click="scrollD" class="menu-item">КОНТАКТЫ</p>
    </div>
  </Transition>

    <div class="relative mx-3">
      <input
        v-model="search.searchQuery"
        type="text"
        placeholder="Поиск по каталогу"
        class="w-full bg-slate-100 rounded-xl py-3 pl-4 pr-10 text-sm outline-none"
      />
      <svg class="absolute right-3 top-1/2 -translate-y-1/2" width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="#94a3b8" stroke-width="2" />
        <path d="M21 21l-4.3-4.3" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" />
      </svg>
    </div>

  </div>
</template>

<script>
import { inject, ref, reactive } from 'vue'

export default {
  props: {
    search: Object,
  },
  setup(props) {
    const { carts } = inject('carts')
    const menuOpen = ref(false)
    const filters = reactive({
      mark: '',
      model: '',
      year: '',
      modification: '',
    })

    const inProgress = () => alert('В разработке')
    const scrollD = () => {
      window.scrollBy({ top: document.body.scrollHeight, behavior: 'smooth' })
      menuOpen.value = false
    }

    return {
      carts,
      search: props.search,
      menuOpen,
      filters,
      inProgress,
      scrollD,
    }
  },
}
</script>

<style>
.menu-item {
  display: block;
  padding: 10px 8px;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.03em;
  color: rgba(255, 255, 255, 0.85);
  transition:
    background-color 0.25s ease,
    color 0.25s ease,
    padding-left 0.25s ease;
}
.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  padding-left: 14px;
}
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}
.menu-slide-enter-from,
.menu-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
.menu-slide-enter-to,
.menu-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>