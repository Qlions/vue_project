<template>
    <div>
        <p @click="a">{{ fistName }}</p>
        <p>{{ resverfistName }}</p>
        <input type="text" v-model="qustion">
        <p>{{ a }}</p>
        <p v-for='n in event' @click.prevent.right="alert">{{ n }}</p>
    </div>
    
</template>
<script>
   export default {
       data(){
           return {
                 fistName:'zhang',  
                 lastName:'sanfeng',
                 message: 'cba',
                 qustion: '',
                 a: 1,
                 obj:{
                     a: 1
                 },
                 arr:[1,2,3,4,5,6,7]
           }
       },
       methods:{
        a(){
            this.fistName = "bbbb";
            this.resverfistName = "ddd"
        },
        alert(){
            console.log("bbbbb")
        }
       },
       computed:{
        resverfistName:{
            get(){
                return this.fistName  = 'aaa';
            },
            set(newa){
                return this.fistName = "ccc"
            }
        },
        event(){
            return this.arr.filter(function (arr){
                return arr %2 === 0
            })
        }
       },
       mounted(){
           this.obj = Object.assign({}, {
               a: 2,
               b: 3,
               c: 4
           })
           console.log(this.obj)
       }
       
      
    }

   
</script>