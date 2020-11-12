<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click= "count += 1"> +1 </button>
    <button @click= "count = 0"> reset </button>
    <h2 v-if="count % 2 === 0 && count !=0"> Warn! </h2>
    <ol>
      <li v-for="text in list" :key="text">
        {{text}}
      </li>
    </ol>
    <input v-model="username"/>
    <h3>{{username}}</h3>
  </div>
</template>

<script>
export default {
  data(){
    return { 
      count: 0,
      list: [
        'Learn JS',
        'Learn Vue',
        '$ Profit $'
      ],
      username:''
    };
  }
}
</script>

<style>
  div{ 
    color: black;
  }
</style>