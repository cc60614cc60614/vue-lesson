<template>
  <div :class="{list: true, red: active}">
      <h1>{{name}}</h1>
      <button @click="active = !active">Change Color</button>
      <h1 :style="{ background: active?'darkolivegreen':'salmon' }">{{name}}</h1>
  </div>
</template>

<script>
export default {
    data: () =>({
        name:"Benny",
        active: true
    })
}
</script>

<style>
    .list  {
        color: darkolivegreen;
    }
    .list.red{
        color: salmon;
    }
</style>