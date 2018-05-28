import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

//mock 数组
const shopList = [
    {
        id: 123,
        count: 1
    },
    {
        id: 113,
        count: 2
    },
]


//定义store 
//vuex 中的状态是响应的
let store = new Vuex.Store({
    state: {
        shopList
    },
    getters:{
        totals(state){
            return state.shopList.reduce( (n, item) => n+item.count, 0)
        }
    },
    mutations :{
        updateCountById (state, payload){  //改变state状态
        //   setTimeout( () =>{
           
        //   }, 3000)
          let item =  state.shopList.find( item => item.id == payload.id);
          item.count += 1;

        }
    },
    actions :{
        updateCountAction (store, parmas){
            setTimeout ( () => {
                store.commit("updateCountById", parmas)
            }, 3000)
        }
    }
    
})

export default store;