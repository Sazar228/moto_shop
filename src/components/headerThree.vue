<template>
  <div
    class="mt-5 w-full bg-neutral-800 text-white flex flex-wrap lg:flex-nowrap gap-3 sm:gap-6 lg:gap-20 justify-center items-center h-auto lg:h-12 py-2 lg:py-0"
  >
    <RouterLink to="/">
      <p class="all_mini text-xs sm:text-sm lg:text-base">ГЛАВНАЯ</p>
    </RouterLink>
    <RouterLink to="/shini">
      <p class="all_mini text-xs sm:text-sm lg:text-base">ШИНЫ</p>
    </RouterLink>
    <p @click="inProgress" class="all_mini text-xs sm:text-sm lg:text-base">ГРУЗОВЫЕ ШИНЫ</p>
    <RouterLink to="/motoshini">
      <p class="all_mini text-xs sm:text-sm lg:text-base">МОТОШИНЫ</p>
    </RouterLink>
    <RouterLink to="/disci">
      <p class="all_mini text-xs sm:text-sm lg:text-base">ДИСКИ</p>
    </RouterLink>

    <p @click="inProgress" class="all_mini text-xs sm:text-sm lg:text-base">АКЦИИ</p>
    <p @click="scrollD" class="all_mini text-xs sm:text-sm lg:text-base">КОНТАКТЫ</p>
  </div>
</template>

<script>
export default {
  methods: {
    inProgress() {
      alert("в разработке");
    },
    scrollD(){
      window.scrollBy({
        top:document.body.scrollHeight,
        behavior:'smooth'
      })
    }
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.all_mini {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: auto;
  height: auto;
  padding: 5px;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.all_mini:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 15px 30px rgba(255, 255, 255, 0.15);
  border: solid 1px white;
}
</style>