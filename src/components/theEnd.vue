<template>
  <div class="w-full mt-[100px] bg-[#323232] h-auto text-[#9E9E9E]">
    <div
      class="flex flex-col lg:flex-row w-full h-auto lg:h-2/4 border-b justify-around border-[#474747] gap-6 lg:gap-0 py-6 lg:py-0 px-4 lg:px-0 text-center lg:text-left items-center lg:items-start"
    >
      <div class="h-auto lg:h-2/4 mt-2 lg:ml-5">
        <h1 class="font-bold text-white text-xl mb-3">Каталог</h1>
        <RouterLink to="/shini">
          <p>Шины</p>
        </RouterLink>
        <RouterLink to="/disci">
          <p>Диски</p>
        </RouterLink>
        <p @click="soon">Пункты выдачи</p>
      </div>
      <div class="h-auto lg:h-2/4 mt-2">
        <h1 class="font-bold text-white text-xl mb-3">О магазине</h1>
        <p>Оплата и доставка</p>
        <p>Гарантия</p>
        <p>Акции</p>
        <p>Блог</p>
      </div>
      <div class="h-auto lg:h-2/4 mt-2">
        <h1 class="font-bold text-white text-xl mb-3">Контакты</h1>
        <div class="flex p-1 justify-center lg:justify-start">
          <img src="/endImg/Phone.svg" alt="" class="mr-2 pointer-events-none" />
          <p>8 (800) 555-13-26</p>
        </div>
        <div class="flex p-1 justify-center lg:justify-start">
          <img src="/endImg/Envelope.svg" alt="" class="mr-2 pointer-events-none" />
          <p>info@shiny-migom.ru</p>
        </div>
        <div class="flex p-1 justify-center lg:justify-start">
          <img src="/endImg/insta.svg" alt="" class="mr-2 pointer-events-none" />
          <p>Мы в инстаграм</p>
        </div>
      </div>
      <div class="h-auto lg:h-2/4 mt-2 flex flex-col items-center lg:items-start">
        <p>Политика конфидециальности</p>
        <p>Договор оферты</p>
        <p>Карта сайта</p>
        <p>DATSKY - создание и продвижение сайтов</p>
        <img class="pointer-events-none" src="/endImg/payments.svg" alt="" />
      </div>
    </div>

    <div class="w-full pt-5 pb-5 m-auto justify-center flex h-auto px-4 lg:px-0">
      <p class="text-center lg:text-left">
        Обращаем ваше внимание на то, что данный сайт носит исключительно
        информационный характер и ни при каких условиях не является публичной
        офертой, <br class="hidden lg:inline" />
        определяемой положениями Статьи 437 (2) Гражданского кодекса Российской
        Федерации. Наличие товара и его стоимость может отличаться от заявленной
        на <br class="hidden lg:inline" />
        данном сайте. Указанное выше наличие в нашем интернет-магазине является
        ориентировочным и не учитывает бронирование товара при оплате по <br class="hidden lg:inline" />
        безналичному расчету, а также продажи, которые произошли с момента
        последнего обновления данных. Вы можете оставить заявку на резерв товара
        оформив <br class="hidden lg:inline" />
        заказ на сайте. Бронирование товара осуществляется после подтверждения
        заказа менеджером.
      </p>
    </div>

    <div class="w-full flex items-center justify-center lg:justify-start bg-black h-auto py-2 lg:h-[30px] lg:py-0">
      <p class="w-4/5 lg:ml-[6rem] text-center lg:text-left">2016-2021 © "Шины мигом"</p>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const soon = () => {
      alert("В разработке");
    };
    return {
      soon,
    };
  },
};
</script>

<style lang="scss" scoped></style>