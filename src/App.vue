<template>
  <div>
    <router-link to='/todo-list'>Todo List</router-link>
    <router-link to='/counter'>Counter</router-link>
    <router-link to ='/area-select'>area-select</router-link>
    <router-link to ='/currency'>currency</router-link>
    <router-link to ='/form'>form</router-link>
    <router-link to ='/style'>style</router-link>
    <router-link to ='/toggle'>toggle</router-link>
    <router-link to ='/users'>users</router-link>
    <router-link to ='/policy'>policy</router-link>
    {{ count }}
    <hr/>
     <router-view/>
  </div>
</template>
<script>
  export default {

  };
</script>
<style>
  a {
    margin-right: 1em;
  }
</style>