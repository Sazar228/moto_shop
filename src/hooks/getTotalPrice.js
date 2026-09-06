import { computed } from "vue"


export function getPrice (carts) {
    const totalPrice = computed(() => {
            return carts.value.reduce((acc,item) => acc + item.price,0)
        })

        return{
            totalPrice
        }
}