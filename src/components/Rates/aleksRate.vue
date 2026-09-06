<template>
  <div class="w-full border-2 bg-[#F8F8F8] h-auto lg:h-[25rem] flex flex-col mb-10 rounded-xl">
    <div class="flex items-center pt-5 pl-5">
      <img src="/aleksander.svg" alt="" class="pointer-events-none"/>
      <p class="ml-3 lg:ml-5 italic font-bold text-base sm:text-lg lg:text-xl">
        Александр о {{ product?.category }} {{ product?.name }}
      </p>
    </div>
    <p class="p-5 text-sm sm:text-base">
      Отличное место! Уютный офис, приветливый персонал, все сертификаты в
      наличии. По телефону помогли сориентироваться как добраться. Грамотно
      подобрали шины, быстро привезли, шиномонтаж провели бесплатно, хранение
      недорого. В общем все супер! Рекомендую.
    </p>
    <div class="flex flex-col sm:flex-row w-full h-auto sm:h-12 border-t-2 border-b-2">
      <div class="flex w-full sm:w-2/6 items-center border-r-2 py-2 sm:py-0">
        <p class="mr-2 ml-5 font-medium">Оценка:</p>
        <img src="/5rates.svg" alt="" class="pointer-events-none"/>
        <p class="ml-2">5.0</p>
      </div>
      <div class="flex w-full sm:w-2/6 items-center border-r-2 py-2 sm:py-0">
        <p class="mr-2 ml-5 font-medium">Автомобиль:</p>
        <p>Audi Q6</p>
      </div>
      <div class="flex w-full sm:w-2/6 items-center border-r-2 py-2 sm:py-0">
        <p class="mr-2 ml-5 font-medium">Купите опять?:</p>
        <p>Определенно да!</p>
      </div>
    </div>
    <div class="w-full h-auto flex flex-col lg:flex-row">
      <div class="flex flex-col w-full lg:w-1/3 h-auto mt-5 px-5 lg:px-0 lg:pl-5">
        <div class="flex items-center w-full">
          <div class="w-1/4 h-2 bg-yellow-300 mr-3 rounded-full"></div>
          <p class="w-2/4 whitespace-nowrap text-sm lg:text-base">Управление на сухой дороге</p>
        </div>
        <div class="flex items-center w-full mt-5">
          <div class="w-1/4 h-2 bg-yellow-300 mr-3 rounded-full"></div>
          <p class="w-2/4 text-sm lg:text-base">Курсовая устойчивость</p>
        </div>
        <div class="flex items-center w-full mt-5">
          <div class="w-1/4 h-2 mr-3 rounded-full flex">
            <div class="bg-yellow-300 h-full w-5/6 rounded-l-lg"></div>
            <div
              class="border-b-2 border-t-2 w-1/6 border-r-2 rounded-r-xl"
            ></div>
          </div>
          <p class="w-2/4 whitespace-nowrap text-sm lg:text-base">Стойкость к аквапланированию</p>
        </div>
        <div class="flex items-center w-full mt-5">
          <div class="w-1/4 h-2 mr-3 rounded-full flex">
            <div class="bg-yellow-300 h-full w-4/6 rounded-l-lg"></div>
            <div
              class="border-b-2 border-t-2 w-2/6 border-r-2 rounded-r-xl"
            ></div>
          </div>
          <p class="w-2/4 whitespace-nowrap text-sm lg:text-base">Качество изготовления</p>
        </div>
      </div>

      <div class="flex flex-col w-full lg:w-1/3 h-auto mt-5 px-5 lg:px-0">
        <div class="flex items-center w-full">
          <div class="w-1/4 h-2 bg-yellow-300 mr-3 rounded-full"></div>
          <p class="w-2/4 whitespace-nowrap text-sm lg:text-base">Управление на мокрой дороге</p>
        </div>
        <div class="flex items-center w-full mt-5">
          <div class="w-1/4 h-2 bg-yellow-300 mr-3 rounded-full"></div>
          <p class="w-2/4 text-sm lg:text-base">Бесшумность в движении</p>
        </div>
        <div class="flex items-center w-full mt-5">
          <div class="w-1/4 h-2 bg-yellow-300 mr-3 rounded-full"></div>
          <p class="w-2/4 whitespace-nowrap text-sm lg:text-base">Скоростные характеристики</p>
        </div>
      </div>

      <div class="flex flex-col w-full lg:w-1/3 h-auto mt-5 px-5 lg:px-0 mb-5 lg:mb-0">
        <div class="flex items-center w-full">
          <div class="w-1/4 h-2 bg-yellow-300 mr-3 rounded-full"></div>
          <p class="w-2/4 whitespace-nowrap text-sm lg:text-base">Комфорт при движении</p>
        </div>
        <div class="flex items-center w-full mt-5">
          <div class="w-1/4 h-2 bg-yellow-300 mr-3 rounded-full"></div>
          <p class="w-2/4 whitespace-nowrap text-sm lg:text-base">Эффективность торможения</p>
        </div>
        <div class="flex items-center w-full mt-5">
          <div class="w-1/4 h-2 bg-yellow-300 mr-3 rounded-full"></div>
          <p class="w-2/4 text-sm lg:text-base">Износоустойчивость</p>
        </div>
        <div class="flex items-center w-full mt-5">
          <div class="w-1/4 h-2 bg-yellow-300 mr-3 rounded-full"></div>
          <p class="w-2/4 whitespace-nowrap text-sm lg:text-base">Оправданность цены</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
