<template>
    <div
    class="flex flex-col items-center text-center p-6 sm:p-12 lg:p-20 empty-cart"
  >
    <h1 class="font-bold text-xl sm:text-2xl mb-2">Корзина пустая 😕</h1>
    <p class="text-slate-400 mb-8 sm:mb-12 text-sm sm:text-base">
      Вероятней всего, вы не заказывали ещё пиццу. <br class="hidden sm:inline" />
      Для того, чтобы заказать пиццу, перейди на главную страницу.
    </p>
    <img src="/shopping-cart-colour.png" alt="" class="w-40 h-32 sm:w-70 sm:h-50 pointer-events-none" />
    <RouterLink to="/">
      <div class="w-28 sm:w-35 bg-black text-white p-2 mt-8 sm:mt-10 rounded-2xl all_mini back-btn text-sm sm:text-base">
        Вернуться назад
      </div>
    </RouterLink>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.all_mini {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.all_mini:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}
.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 16px;
}

.empty-cart h1 {
  font-size: 1.25rem;
  margin-bottom: 10px;
}

.empty-cart p {
  font-size: 0.9rem;
  color: #64748b;
  margin-bottom: 20px;
}

.empty-cart img {
  max-width: 180px;
  height: auto;
}

.empty-cart .back-btn {
  width: 160px;
  background: #000;
  color: #fff;
  padding: 10px;
  margin-top: 20px;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.empty-cart .back-btn:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

@media (min-width: 1024px) {
  .empty-cart {
    padding: 80px 20px;
  }

  .empty-cart h1 {
    font-size: 1.5rem;
  }

  .empty-cart p {
    font-size: 1rem;
    margin-bottom: 30px;
  }

  .empty-cart img {
    max-width: 300px;
  }

  .empty-cart .back-btn {
    width: 200px;
  }
}
</style>