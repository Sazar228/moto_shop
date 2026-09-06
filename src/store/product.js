import { defineStore } from "pinia";

export const useProductStore = defineStore('product',{
    state:()=>({
        selectedProduct : null
    }),

    actions:{
        setSelectedProduct(product) {
      this.selectedProduct = product;
      sessionStorage.setItem('selectedProduct', JSON.stringify(product));
    },
    loadFromStorage() {
      const saved = sessionStorage.getItem('selectedProduct');
      if (saved) {
        this.selectedProduct = JSON.parse(saved);
      }
    },
    clearSelectedProduct() {
      this.selectedProduct = null;
      sessionStorage.removeItem('selectedProduct');
    },
    }
})