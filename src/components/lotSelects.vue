<template>
  <div class="w-[90%] lg:w-4/5 flex flex-col lg:flex-row m-auto mt-10 h-auto lg:h-[320px] gap-4 lg:gap-10">

    <!-- Переключатель вкладок — только мобильные/планшеты -->
    <div class="flex lg:hidden w-full rounded-lg overflow-hidden border">
      <button
        @click="activeFilter = 'tires'"
        class="flex-1 py-3 font-bold text-sm flex items-center justify-center gap-2"
        :class="activeFilter === 'tires' ? 'bg-yellow-300' : 'bg-white text-slate-400'"
      >
        <img class="w-5 h-5 pointer-events-none" src="/headerImg/car-wheel_1.svg" alt="" />
        Шины
      </button>
      <button
        @click="activeFilter = 'discs'"
        class="flex-1 py-3 font-bold text-sm flex items-center justify-center gap-2"
        :class="activeFilter === 'discs' ? 'bg-yellow-300' : 'bg-white text-slate-400'"
      >
        <img class="w-5 h-5 pointer-events-none" src="/headerImg/car-wheel_2.svg" alt="" />
        Диски
      </button>
    </div>

    <!-- Блок фильтра шин -->
    <div
      class="filter-block w-full lg:w-2/4 colr flex-col rounded-b-lg"
      :class="{ 'mobile-hidden': activeFilter !== 'tires' }"
    >
      <div class="hidden lg:flex">
        <!--top part (только десктоп)-->
        <div
          class="rounded-tl-lg font-bold flex w-3/5 bg-yellow-300 h-12 items-center justify-center gap-2"
        >
          <img class="pointer-events-none" src="/headerImg/car-wheel_1.svg" alt="" />
          <p>Подбор шин по типоразмеру</p>
        </div>
        <div
          class="w-2/5 border rounded-tr-lg flex justify-center items-center text-slate-400"
        >
          По авто
        </div>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5 mr-auto ml-auto mt-5 px-3 lg:px-0">
        <select name="width" v-model="filters.width" id="width" class="all_mini">
          <option value="">Ширина</option>
          <option value="205">205</option>
          <option value="215">215</option>
          <option value="225">225</option>
          <option value="235">235</option>
        </select>

        <select name="height" v-model="filters.height" id="height" class="all_mini">
          <option value="">Высота</option>
          <option value="45">45</option>
          <option value="50">50</option>
          <option value="55">55</option>
        </select>

        <select name="diameter" v-model="filters.diameter" id="diameter" class="all_mini">
          <option value="">Диаметр</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
        </select>

        <select name="manufacturer" v-model="filters.manufacturer" id="manufacturer" class="all_mini">
          <option value="">Производитель</option>
          <option value="Yokohama">Yokohama</option>
          <option value="Michelin">Michelin</option>
          <option value="Bridgestone">Bridgestone</option>
          <option value="Continental">Continental</option>
        </select>

        <select name="season" v-model="filters.season" id="season" class="all_mini">
          <option value="">Сезон</option>
          <option value="Winter">Зимние</option>
          <option value="Summer">Летние</option>
        </select>

        <select name="run_flat" v-model="filters.run_flat" id="run_flat" class="all_mini">
          <option value="">Run Flat</option>
          <option value="true">Да</option>
          <option value="false">Нет</option>
        </select>
      </div>
      <div class="flex items-center justify-center lg:justify-end mt-5 lg:mt-auto mb-5 lg:mr-10 gap-4 lg:gap-8">
        <button
          style="height: 2rem; width: 8rem"
          class="shadow-xl rounded-xl bg-slate-300 all_mini"
          @click="resetFilters"
        >
          Сбросить
        </button>
        <button
          style="height: 3rem"
          class="shadow-xl rounded-xl bg-yellow-300 w-40 all_mini"
          @click="frSorts"
        >
          Подобрать
        </button>
      </div>
    </div>

    <!-- Блок фильтра дисков -->
    <div
      class="filter-block w-full lg:w-2/4 colr flex-col rounded-b-lg"
      :class="{ 'mobile-hidden': activeFilter !== 'discs' }"
    >
      <div class="hidden lg:flex">
        <!--top part (только десктоп)-->
        <div
          class="rounded-tl-lg font-bold flex w-3/5 bg-yellow-300 h-12 items-center justify-center gap-2"
        >
          <img class="pointer-events-none" src="/headerImg/car-wheel_2.svg" alt="" />
          <p>Подбор дисков по типоразмеру</p>
        </div>
        <div
          class="w-2/5 border rounded-tr-lg flex justify-center items-center text-slate-400"
        >
          По авто
        </div>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 mr-auto ml-auto mt-5 px-3 lg:px-0">

        <select class="all_mini" v-model="secondFilter.manufacturer">
          <option value="">Производитель</option>
          <option value="Ronal">Ronal</option>
          <option value="OZ Racing">OZ Racing</option>
          <option value="Enkei">Enkei</option>
          <option value="BBS">BBS</option>
        </select>

        <select class="all_mini" v-model="secondFilter.width">
          <option value="">Ширина</option>
          <option value="7.5">7.5</option>
          <option value="8">8</option>
          <option value="8.5">8.5</option>
          <option value="9">9</option>
        </select>

        <select class="all_mini" v-model="secondFilter.diameter">
          <option value="">Диаметр</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
        </select>

        <select class="all_mini" v-model="secondFilter.mounting">
          <option value="">Крепёж</option>
          <option value="5x100">5x100</option>
          <option value="5x112">5x112</option>
          <option value="5x114.3">5x114.3</option>
          <option value="5x120">5x120</option>
        </select>

        <select class="all_mini" v-model="secondFilter.pcd">
          <option value="">PCD</option>
          <option value="100">100</option>
          <option value="112">112</option>
          <option value="114.3">114.3</option>
          <option value="120">120</option>
        </select>

        <select class="all_mini" v-model="secondFilter.dia">
          <option value="">DIA</option>
          <option value="66.6">66.6</option>
          <option value="72.6">72.6</option>
          <option value="73.1">73.1</option>
        </select>

        <select class="all_mini" v-model="secondFilter.et">
          <option value="">ET</option>
          <option value="35">35</option>
          <option value="40">40</option>
        </select>

        <select class="all_mini" v-model="secondFilter.type">
          <option value="">Тип диска</option>
          <option value="Литой">Литой</option>
          <option value="Кованый">Кованый</option>
        </select>

      </div>
      <div class="flex items-center justify-center lg:justify-end mt-5 lg:mt-auto mb-5 lg:mr-10 gap-4 lg:gap-8">
        <button
          style="height: 2rem; width: 8rem"
          class="shadow-xl rounded-xl bg-slate-300 all_mini"
          @click="resetFilters"
        >
          Сбросить
        </button>
        <button
          style="height: 3rem"
          class="shadow-xl rounded-xl bg-yellow-300 w-40 all_mini"
          @click="scSorts"
        >
          Подобрать
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    filters: Object,
    secondFilter: Object,
  },
  methods: {
    resetFilters() {
      this.$emit("resetFilters");
    },
    scSorts() {
      this.$emit("scSorts");
    },
    frSorts() {
      this.$emit("frSorts");
    },
  },
  setup(props) {
    const activeFilter = ref("tires");

    return {
      filters: props.filters,
      secondFilter: props.secondFilter,
      activeFilter,
    };
  },
};
</script>

<style scoped>
select {
  display: flex;
  align-items: center;
  padding: 8px;
  color: grey;
  width: 100%;
  max-width: 10rem;
  border: solid 1px #eae9e9;
  border-radius: 10px;
  outline: none;
}
.colr {
  background-color: #f8f8f8;
}
.all_mini {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.all_mini:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.filter-block {
  display: flex;
}
.filter-block.mobile-hidden {
  display: none;
}
@media (min-width: 1024px) {
  .filter-block.mobile-hidden {
    display: flex;
  }
}
</style>