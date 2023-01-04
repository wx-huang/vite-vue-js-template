<template>
  <h1>{{store.msg}}----{{store.name}}--{{store.age}}</h1>
	<button @click="change1">修改store.name</button>
	<button @click="reset">重置</button>
  

</template>

<script setup>

  import {useCar} from "@/store"


  let store = useCar()
  console.log(store)


  let change1=()=>{
      store.name="小羊" //修改pinia里面的数据
      store.age++
      console.log(store.name)
  }

  let reset = ()=> {
    store.$reset()
  }

</script>

<style lang="less" scoped>
h1{
		width: 400px;
	  height:200px;
}

</style>
