<template>
  <header class="shadow-md">
    <Navigation />
  </header>
  <router-view></router-view>
</template>
<script setup>
// components import
import Navigation from "@/components/Navigation.vue";

// plugin import
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
