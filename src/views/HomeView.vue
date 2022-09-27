<template>
  <v-btn @click="fetchData">Click ME</v-btn>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import api from "@/util/api.vue";

export default {
  name: "HomeView",
  mounted() {},
  components: {
    // HelloWorld,
  },
  methods: {
    fetchData() {
      api.fetchData;
    },
  },
};
</script>
