<template>
  <div>
    <h4>Name</h4>
    <input v-model="name" />
    <br />

    <h4>gender</h4>
    <label>
      <input type="radio" value="m" v-model="gender" />
      Male
    </label>
    <label>
      <input type="radio" value="f" v-model="gender" />
      Female
    </label>
    <br />

    <h4>Age</h4>
    <input v-model.number="age" />
    <br />
  </div>
</template>
<script>
export default {
  computed: {
    name: {
      get() {
        return this.$store.getters.form.name;
      },
      set(val) {
        this.$store.dispatch("setForm", { name: val });
      },
    },
    gender: {
      get() {
        return this.$store.getters.form.gender;
      },
      set(val) {
        this.$store.dispatch("setForm", { gender: val });
      },
    },
    age: {
      get() {
        return this.$store.getters.form.age;
      },
      set(val) {
        this.$store.dispatch("setForm", { age: val });
      },
    },
  },
};
</script>>