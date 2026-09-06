import Cart from "@/pages/cart.vue";
import Disci from "@/pages/disci.vue";
import MotoShini from "@/pages/motoShini.vue";
import Shini from "@/pages/shini.vue";
import Main from "@/pages/main.vue";
import { createRouter, createWebHistory } from "vue-router";
import InfoCartochka from "@/pages/infoCartochka.vue";
import Favorites from "@/pages/favorites.vue";


const routes = [
    {
        path:'/',
        component:Main
    },
    {
        path:'/shini',
        component:Shini
    },
    {
        path:'/motoshini',
        component:MotoShini
    },
    {
        path:'/disci',
        component:Disci
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/cart/info/:id',
        component:InfoCartochka
    },
    {
        path:'/favorites',
        component:Favorites
    }
]








const router = createRouter({
    routes,
    history : createWebHistory()
})

export default router