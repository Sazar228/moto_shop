<template>
  <div
    class="flex flex-wrap lg:flex-nowrap w-full h-auto lg:hcust border-b-2 border-slate-100 justify-center items-center gap-3 sm:gap-5 lg:gap-10 py-2 lg:py-0"
  >
    <select name="" id="" class="outline-none appearance-none all_mini text-sm lg:text-base">
      <option value="">Санкт-Петербург</option>
      <option value="">Москва</option>
      <option value="">Питер</option>
    </select>
    <div class="flex gap-4 sm:gap-6 lg:gap-8">
      <p @click="soon" class="all_mini text-sm lg:text-base">Доставка</p>
      <p class="all_mini text-sm lg:text-base">Отзывы</p>
      <p class="all_mini text-sm lg:text-base">Покупателям</p>
    </div>
    <div class="flex h-full border-l-0 lg:border-l-2 border-slate-100 items-center">
      <input
        v-model="search.searchQuery"
        type="text"
        placeholder="Поиск по сайту"
        class="ml-0 lg:ml-5 outline-none italic text-sm lg:text-base"
      />
      <!-- <img src="/headerImg/Search.svg" alt="" class="w-7 h-7 " /> -->
    </div>
    <div class="hidden lg:flex wcust h-full bg-yellow-300 items-center">
      <div class="box ml-3">
        <div class="corners"></div>
        <img class="pointer-events-none" src="/headerImg/Vector.svg" alt="" />
      </div>
      <p class="flex items-center flex-col font-bold text-[10px] ml-3">
        ЧЕСТНЫЙ<span class="text-[17px]">ЗНАК</span>
      </p>
      <p class="ml-2 h-4/5 text-[7px] font-bold">
        НАЦИОНАЛЬНАЯ <br />
        СИСТЕМА ЦИФРОВОЙ <br />
        МАРКИРОВКИ
      </p>
    </div>
    <!-- <div class="w-20 h-full flex items-center">
      <img class="pointer-events-none" src="/headerImg/enterSite.png" alt="" />
    </div> -->
  </div>
</template>

<script>
export default {
  props:{
    search:Object
  },
  setup(props) {

    const soon = ()=>{
      alert('В разработке')
    }
    
    return {
      search: props.search,
      soon
    };
  },
};
</script>

<style scoped>
.wcust {
  width: 13rem;
}
.hcust {
  height: 3rem;
}
.box {
  position: relative;
  display: inline-block;
  padding: 8px;
}
.box::before,
.box::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  border: 4px solid black;
  border-radius: 3px;
}

.box::before {
  top: 0;
  left: 0;
  border-right: none;
  border-bottom: none;
}

.box::after {
  bottom: 0;
  right: 0;
  border-left: none;
  border-top: none;
}
.corners::before,
.corners::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  border: 4px solid black;
  border-radius: 3px;
}

.corners::before {
  top: 0;
  right: 0;
  border-left: none;
  border-bottom: none;
}

.corners::after {
  bottom: 0;
  left: 0;
  border-right: none;
  border-top: none;
}
.all_mini {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: auto;
  padding: 5px;
  height: 40px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.all_mini:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}
</style>