<template>
  <div>
     <h1> {{ count }} </h1>
     <button @click="add">add {{num}}</button>
     <button @click="count = 0, num = 1">reset</button>
     <button @click="addGlobal">add Global</button>
  </div>
</template>

<script>
export default {
    data: () => ({
        count:0,
        num:1,
        }),
    methods:{
        add() {
            this.count = this.count + this.num;
            this.num +=1;
        },
        addGlobal() {
            this.$store.dispatch("add");
        }
    }
};
</script>

<style>
    div{
        color: darkolivegreen;
    }
</style>