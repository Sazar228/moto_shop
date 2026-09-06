import axios from "axios";
import { ref } from "vue";

export function fav() {
  const favorites = ref([]);

  const loadFavorites = async () => {
    try {
      const { data } = await axios.get(
        "https://4df6f1483acd3ddc.mokky.dev/favorite",
      );
      favorites.value = data;
    } catch (err) {
      console.log("error in loadFav" + err);
    }
  };

  const syncFav = (items) => {
    items.value = items.value.map((item) => {
      const favEntry = favorites.value.find((f) => f.item.id === item.id);
      return {
        ...item,
        isFavorite: !!favEntry,
        favoriteId: favEntry ? favEntry.id : null,
      };
    });
  };

  const makeFav = async (item) => {
    try {
      if (!item.isFavorite) {
        const obj = { favoriteId: item.id, item };
        const { data } = await axios.post(
          "https://4df6f1483acd3ddc.mokky.dev/favorite",
          obj,
        );
        item.isFavorite = true;
        item.favoriteId = data.id;
      } else {
        await axios.delete(
          `https://4df6f1483acd3ddc.mokky.dev/favorite/${item.favoriteId}`,
        );
        item.isFavorite = false;
        item.favoriteId = null;
      }
    } catch (err) {
      console.log("error in makeFav" + err);
    }
  };
  return {
    favorites,
    loadFavorites,
    syncFav,
    makeFav,
  };
}
