import { defineStore } from "pinia";
import { ref, computed } from "vue";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { dataStore } from "./data";

export const alertStore = defineStore('alertStore', () => {

    const keys = ref([])

    //add(each data type) to array

    const alert_buy =(id, price, day,  keys_code) => {
        const data = {
            id,
            price,
            day,
            keys_code,
        }
        const findId = keys.value.find(e => e.id === data.id)

        if(findId){
            keyAlert_haveAlready()
        }else{
            //keysAlert_add()
            Swal.fire({
                title: 'Are you Sure?',
                showDenyButton: true,
                confirmButtonText: 'Confirm',
                denyButtonText: `Cancel`,
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Generate Keys Complete',
                        text: 'see your keys on KEYS Menu...',
                        footer: ''
                      })
                      keys.value.push(data)
                      saveLocalStorage()
                } else if (result.isDenied) {
                    ''
                  }
              })
        }
        console.log(keys.value)
    }



    // pull data 

    const keys_pages = computed(() => {
        const data_store = dataStore()

        return keys.value.map((ky, i)=>{
            const findIndexKeys = data_store.packageList.findIndex(e => e.id === ky.id)

        return {
                name : data_store.packageList[findIndexKeys],
                price : keys.value[i].price,
                day : keys.value[i].day,
                keys: keys.value[i].keys_code,
                }
        })
    })

// fn alert

    const  keyAlert_haveAlready = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops... :(',
            text: 'Your Keys still not Expire',
          })
    }

    const submit_alert = () => {
        Swal.fire({
            icon: 'success',
            title: 'Verify Complete :)',
            text: 'Hope you Enjoin With Us',
          })
    }



    const saveLocalStorage = () => {
        localStorage.setItem('keysList', JSON.stringify(keys.value))
    }

    const loadlocalStorage = () => {
        if(localStorage.getitem('keysList')){
            keys.value = JSON.parse(localStorage.getItem('keysList'))
        }
    }

    return { alert_buy, loadlocalStorage, keys, keys_pages, submit_alert }
}) 