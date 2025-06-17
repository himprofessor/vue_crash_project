<template>
  <div>
    <UserList :users="users" />
  </div>
</template>

<script setup>
import UserList from "../components/UserList.vue";

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

<style lang="scss" scoped></style>
