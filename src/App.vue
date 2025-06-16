<template>
  <Navigation />
  <p v-for="user in users" :key="user.id">
    {{user.name}}
  </p>
</template>
<script setup>
import Navigation from "@/components/Navigation.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

const users = ref([]);

onMounted(async () => {
  try {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        users.value = res.data;
      });
  } catch (e) {
    console.log("Axios fetching data error...");
  }
});
</script>
