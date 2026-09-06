import axios from "axios";
import { ref, watch } from "vue";

export function useCartOrders() {
  const savedCart = localStorage.getItem('cartItems')
  const carts = ref(savedCart ? JSON.parse(savedCart) : []);
  const isCreatingOrder = ref(false);
  const orderId = ref(null);


  watch(
    carts,
    ()=>{
      localStorage.setItem('cartItems',JSON.stringify(carts.value))
    },
    { deep: true }
  )

  const addToCart = (item) => {
    carts.value.push(item);
    console.log("Добавлено в корзину:", carts.value);
    item.isAdded = true;
  };

  const removeFromCart = (item) => {
    const index = carts.value.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      carts.value.splice(index, 1);
      console.log("Удалено из корзины:", item);
    }
  };

  const clearCart = () => {
    carts.value = [];
    console.log("clicked");
  };

  const createOrder = async (totalPrice) => {
    try {
      isCreatingOrder.value = true;

      const obj = carts.value.map(cart =>({
        name: cart.name,
        price: cart.price,
        manufacturer: cart.manufacturer,
        season: cart.season,
      }))

      const { data } = await axios.post(
        "https://4df6f1483acd3ddc.mokky.dev/orders",
        {
          items : obj,
          totalPrice: totalPrice,
        },
      );

      console.log("Заказ создан :" + data);
      
      orderId.value = data.id;
      carts.value = [];
    } catch (err) {
      console.log("order error: " + err);
    } finally {
      isCreatingOrder.value = false;
    }
  };

  return {
    carts,
    orderId,
    isCreatingOrder,
    addToCart,
    removeFromCart,
    createOrder,
    clearCart,
  };
}
