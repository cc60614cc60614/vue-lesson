<template>
  <div>
    <h4>Type</h4>
    <label v-if="gender === 'm'">
      <input type="radio" value="A" v-model="type" />
      A
    </label>
    <label v-if="gender === 'f'">
      <input type="radio" value="B" v-model="type" />
      B
    </label>
    <label v-if="gender === 'f'">
      <input type="radio" value="C" v-model="type" />
      C
    </label>

    <h4>Year</h4>
    <select v-model="years">
      <option v-for="year in maxYears" :key="year" :value="year">
        {{ year }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  computed: {
    type: {
      get() {
        return this.$store.getters.form.type;
      },
      set(val) {
        this.$store.dispatch("setForm", { type: val });
      },
    },
    gender() {
      return this.$store.getters.form.gender;
    },
    years:{
        get(){
            return this.$store.getters.form.years;
        },
        set(val) {
            this.$store.dispatch("setForm", {years: val});
        }
    },
    maxYears() {
      const age = this.$store.getters.form.age;
      return age > 50 ? 5 : 10;
    },
  },
};
</script>>