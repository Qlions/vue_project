<template>
    <div>
      <h2>统计总数：{{ $store.getters.totals }}</h2>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
            changeCount (){
               this.$store.commit("updateCount", {
                   add: 10
               });
            }
        }
    }
</script>