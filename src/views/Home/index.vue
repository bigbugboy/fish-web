<template>
  <div class="home">
   <p> 占位</p>
   <p>占位占位占位占位占位占位占位占位占位占位占位占位</p>
   <p> 占位11111</p>
   <button @click="gotoFish">开始吧</button>
  </div>
</template>

<script>
export default {
    name: 'Home',
    methods: {
      gotoFish(){
        this.$router.push('/fish')
      },
    },

}
</script>

<style scoped>

.home {
  text-align: center;
  line-height: 50px;
}
p {
  height: 50px;
  padding-top: 50px;
}

</style>