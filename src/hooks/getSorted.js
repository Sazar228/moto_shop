import debounce from "lodash.debounce";
import { reactive, ref, watch } from "vue";

export function sort(allData, colesoMas, disciMas) {
  const search = reactive({
    searchQuery: "",
  });

  const filters = reactive({
    width: "",
    height: "",
    diameter: "",
    manufacturer: "",
    season: "",
    run_flat: "",
  });

  const secondFilter = reactive({
    manufacturer: "",
    width: "",
    diameter: "",
    mounting: "",
    pcd: "",
    dia: "",
    et: "",
    type: "",
  });

  const filterData = ref([]);

  const searching = debounce(async () => {
    try {
      let result = [];

      if (search.searchQuery) {
        result = allData.value.filter((item) =>
          item.name.toLowerCase().includes(search.searchQuery.toLowerCase()),
        );
      } else {
        result = [];
      }

      filterData.value = result;
    } catch (err) {
      console.log("error in searching " + err);
    }
  }, 300);

  const frSorts = debounce((async) => {
    try {
      let result = colesoMas.value;

      if (filters.width) {
        result = colesoMas.value.filter((item) => item.width == filters.width);
      }
      if (filters.height) {
        result = colesoMas.value.filter(
          (item) => item.height == filters.height,
        );
      }
      if (filters.diameter) {
        result = colesoMas.value.filter(
          (item) => item.diameter == filters.diameter,
        );
      }
      if (filters.manufacturer) {
        result = colesoMas.value.filter(
          (item) => item.manufacturer === filters.manufacturer,
        );
      }
      if (filters.season) {
        result = colesoMas.value.filter(
          (item) => item.season === filters.season,
        );
      }
      if (filters.run_flat) {
        result = colesoMas.value.filter(
          (item) => String(item.run_flat) === filters.run_flat,
        );
      }

      filterData.value = result;
    } catch (err) {
      console.log("error in first sort" + err);
    }
  }, 300);

  const scSorts = debounce((async) => {
    try {
      let result = disciMas.value;

      if (secondFilter.manufacturer) {
        result = disciMas.value.filter(
          (item) => item.manufacturer == secondFilter.manufacturer,
        );
      }
      if (secondFilter.diameter) {
        result = disciMas.value.filter(
          (item) => item.diameter == secondFilter.diameter,
        );
      }
      if (secondFilter.mounting) {
        result = disciMas.value.filter(
          (item) => item.mounting == secondFilter.mounting,
        );
      }
      if (secondFilter.width) {
        result = disciMas.value.filter(
          (item) => item.width == secondFilter.width,
        );
      }
      if (secondFilter.pcd) {
        result = disciMas.value.filter(
          (item) => item.pcd == secondFilter.pcd,
        );
      }
      if (secondFilter.dia) {
        result = disciMas.value.filter(
          (item) => item.dia == secondFilter.dia,
        );
      }
      if (secondFilter.et) {
        result = disciMas.value.filter(
          (item) => item.et == secondFilter.et,
        );
      }
      if (secondFilter.type) {
        result = disciMas.value.filter(
          (item) => item.type == secondFilter.type,
        );
      }

      filterData.value = result;
    } catch (err) {
      console.log("error in second sort" + err);
    }
  }, 300);

  watch(
    () => [search.searchQuery],
    () => {
      searching();
    },
  );

  // watch(
  //   () => [
  //     filters.width,
  //     filters.height,
  //     filters.diameter,
  //     filters.manufacturer,
  //     filters.season,
  //     filters.run_flat,
  //   ],
  //   () => {
  //     frSorts();
  //   },
  // );

  // watch(
  //   () => [
  //     secondFilter.diameter,
  //     secondFilter.height,
  //     secondFilter.manufacturer,
  //     secondFilter.width,
  //   ],
  //   () => {
  //     scSorts();
  //   },
  // );

  const resetFilters = () => {
    search.searchQuery = "";

    filters.width = "";
    filters.height = "";
    filters.diameter = "";
    filters.manufacturer = "";
    filters.season = "";
    filters.run_flat = "";

    secondFilter.manufacturer = "";
    secondFilter.width = "";
    secondFilter.mounting = "";
    secondFilter.diameter = "";
    secondFilter.et = "";
    secondFilter.pcd = "";
    secondFilter.dia = "";
    secondFilter.type = "";


    filterData.value = [];
  };

  return {
    filters,
    secondFilter,
    search,
    searching,
    filterData,
    resetFilters,
    scSorts,
    frSorts,
  };
}
