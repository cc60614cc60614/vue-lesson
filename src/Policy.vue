<template>
  <div>
    <button @click="tab = 1">1</button>
    <button @click="tab = 2">2</button>
    <button @click="tab = 3">3</button>
    <hr />
    <policyBasic v-if="tab ===1 "/>
    <policyType v-if="tab ===2 "/>
    <PolicyPayment v-if="tab ===3 "/>
  </div>
</template>
<script>
import PolicyBasic from "./PolicyBasic";
import PolicyType from "./PolicyType";
import PolicyPayment from "./PolicyPayment";
export default {
  components: {
    PolicyBasic,
    PolicyType,
    PolicyPayment,
  },
  data: () => ({
    tab: 1,
  }),
  computed: {
    paytime() {
      return this.$store.getters.form.paytime;
    },
  },
};
</script>