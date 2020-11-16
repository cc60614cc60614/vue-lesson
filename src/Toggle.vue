<template>
  <div>
        <div>
            <h1>you are suspended</h1>
        </div>
        <div v-if="show">
            <button @click="show=!show">Hide</button>
            test123
        </div>
        <div v-else>
            <button @click="show=!show">More</button>
        </div>

  </div>
</template>

<script>
export default {
    data:() =>({
        show: false,
        
    })
}
</script>

<style>

</style>