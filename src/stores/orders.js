import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useOrdersStore = defineStore('order',  {
   state: () => {
        const orders= {
            0:{
                id: 1,
                customer_id: 2,
                book_id: 4,
                quantity: 2,
                total_paid: 1600,
                status: "processing"
            },
            1:{
                id: 2,
                customer_id: 1,
                book_id: 10,
                quantity: 1,
                total_paid: 1650,
                status: "fulfilled"
            },
            2:{
                id: 3,
                customer_id: 4,
                book_id: 9,
                quantity: 1,
                total_paid: 2550,
                status: "processing"
            },
            3:{
                id: 4,
                customer_id: 3,
                book_id: 5,
                quantity: 2,
                total_paid: 4000,
                status: "fulfilled"
            },
            4:{
                id: 5,
                customer_id: 5,
                book_id: 14,
                quantity: 2,
                total_paid: 3600,
                status: "processing"
            },
            5:{
                id: 6,
                customer_id: 6,
                book_id: 7,
                quantity: 3,
                total_paid: 7500,
                status: "fulfilled"
            }
        }

        return{
            orders
        }
   },
   actions:{
       
   },
   persist: true,
})