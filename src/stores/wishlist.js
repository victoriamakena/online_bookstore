import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useWishlistStore = defineStore('wishlist',  {
   state: () => {
        const wishlist= []

        return{
            wishlist
        }
   },
   actions:{
       updateWishlist(payload) {
           this.wishlist.push(payload)
       },
   },
   persist: true,
})