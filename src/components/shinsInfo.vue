<template>
  <div
    class="w-full sm:w-11/12 lg:w-4/5 flex flex-col lg:flex-row mx-auto mt-6 lg:mt-10 gap-4 lg:gap-5 lg:h-[17rem] px-3 lg:px-0"
  >
    <div class="w-full lg:w-2/5 flex flex-col gap-4 lg:gap-0 lg:h-[16rem]">
      <div
        class="bg-yellow-300 flex items-center h-24 sm:h-28 lg:h-2/4 rounded-xl lg:mb-4 group"
      >
        <img
          src="/shini/shini.png"
          alt=""
          class="p-2 all_mini group-hover:animate-all_mini pointer-events-none w-20 h-20 sm:w-24 sm:h-24 lg:w-[150px] lg:h-[150px]"
        />
        <RouterLink to="/shini">
          <h1
            class="text-lg sm:text-xl lg:text-[25px] font-bold ml-4 sm:ml-6 lg:ml-10 ez_mini group-hover:animate-ez_mini"
          >
            Шины >
          </h1>
        </RouterLink>
      </div>
      <div class="bg-yellow-300 flex items-center h-24 sm:h-28 lg:h-2/4 rounded-xl group">
        <img
          src="/shini/disci.png"
          alt=""
          class="p-2 all_mini group-hover:animate-all_mini pointer-events-none w-20 h-20 sm:w-24 sm:h-24 lg:w-[150px] lg:h-[150px]"
        />
        <RouterLink to="/disci">
          <h1
            class="text-lg sm:text-xl lg:text-[25px] font-bold ml-4 sm:ml-6 lg:ml-10 ez_mini group-hover:animate-ez_mini"
          >
            Диски >
          </h1>
        </RouterLink>
      </div>
    </div>

    <div
      class="w-full lg:w-2/4 bg-yellow-300 flex flex-col justify-center items-center rounded-xl group h-40 sm:h-48 lg:h-full"
    >
      <RouterLink to="/motoshini">
        <h1
          class="text-lg sm:text-xl lg:text-[25px] font-bold mb-3 lg:mb-8 ez_mini group-hover:animate-ez_mini"
        >
          Мотошины >
        </h1>
      </RouterLink>
      <img
        src="/shini/moto_shini.png"
        alt=""
        class="all_mini group-hover:animate-all_mini pointer-events-none w-24 h-24 sm:w-28 sm:h-28 lg:w-[150px] lg:h-[150px]"
      />
    </div>

    <div
      class="w-full lg:w-2/4 bg-yellow-300 flex flex-col justify-center items-center rounded-xl group h-40 sm:h-48 lg:h-full"
    >
      <h1
        @click="alerts"
        class="text-lg sm:text-xl lg:text-[25px] font-bold mb-3 lg:mb-8 ez_mini group-hover:animate-ez_mini cursor-pointer"
      >
        Грузовые >
      </h1>
      <img
        src="/shini/bigTruck.png"
        alt=""
        class="mirror all_mini group-hover:animate-all_mini pointer-events-none w-36 h-20 sm:w-44 sm:h-24 lg:w-[17rem] lg:h-[10rem]"
      />
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  methods: {
    alerts() {
      alert("в разработке");
    },
  },
};
</script>

<style scoped>
.mirror {
  transform: scaleX(-1);
}
.all_mini {
  transition: transform 0.3s ease;
}
.group:hover .all_mini {
  transform: translateY(-5px) scale(1.03);
}
.ez_mini {
  transition: transform 0.3s ease;
}
.group:hover .ez_mini {
  transform: translateX(-10px) scale(1.03);
}
</style>