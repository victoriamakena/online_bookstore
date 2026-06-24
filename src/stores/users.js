import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users',  {
   state: () => {
        const users= {
            0: {
                id: 1,
                firstname: "Becky",
                lastname: "Kamau",
                email: "bk@gmail.com",
                phone: "0712345678",
                location: "Nairobi",
                address: "16, Madaraka Avenue"
            },
            1: {
                id: 2,
                firstname: "Prince",
                lastname: "Omollo",
                email: "po@gmail.com",
                phone: "0712345679",
                location: "Meru",
                address: "Githeri Estate"
            },
            2: {
                id: 3,
                firstname: "Janice",
                lastname: "Miller",
                email: "jm@gmail.com",
                phone: "0712345687",
                location: "Embu",
                address: "55, Githunguri Lane"
            },
            3: {
                id: 4,
                firstname: "Bill",
                lastname: "Mungai",
                email: "bm@gmail.com",
                phone: "0712435678",
                location: "Tana River",
                address: "Lang'ata"
            },
            4: {
                id: 5,
                firstname: "John",
                lastname: "Macharia",
                email: "jm@gmail.com",
                phone: "0721345678",
                location: "Mombasa",
                address: "Shimo la Tewa"
            },
            5: {
                id: 6,
                firstname: "Ancy",
                lastname: "Atema",
                email: "aa@gmail.com",
                phone: "0787654321",
                location: "Nakuru",
                address: "Bahati"
            }
        }

        return{
            users
        }
   },
   actions:{
      
   },
   persist: true,
})