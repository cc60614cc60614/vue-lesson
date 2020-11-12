<template>
  <div>
      <input v-model="num" />
      <ul>
          <li>TWD: {{ twd }}</li>
          <li>JPY: {{ jpy }}</li>
          <li>USD: {{ usd }}</li>
      </ul>
  </div>
</template>

<script>
export default {
    data: () =>({
        num: "0"
    }),
    computed: {
        twd() {
            return parseInt(this.num,10);
        },
        jpy() {
            return this.twd * 3.69;
        },
        usd(){
            return this.twd * 0.035;
        }
    }
}
</script>

<style>

</style>