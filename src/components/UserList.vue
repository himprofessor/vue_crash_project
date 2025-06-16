<template>
    <section class="w-10/12 m-auto">
        <h1 class="text-2xl font-semibold">All user</h1>
        <p>All the user that already reigster in our system.</p>
        <div class="grid grid-col-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <UserCard v-for="user in users" :key="user.id" :user="user" />
        </div>
    </section>
</template>

<script setup>
// import components
import UserCard from "./UserCard.vue";

defineProps(["users"])

</script>
