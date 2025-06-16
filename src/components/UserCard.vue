<template>
  <div class="border border-gray-200 rounded-lg p-6">
    <div>
      <h1 class="text-lg font-semibold">{{ user.name }}</h1>
      <p class="text-sm">{{ user.email }}</p>
    </div>
    <div class="mt-4">
      <p class="flex items-center gap-2">
        <span class="material-symbols-outlined"> location_on </span>
        <span class="font-semibold">Address</span>
      </p>
      <p class="text-sm"> St {{user.address.street}}, {{user.address.suite}} , {{user.address.city}}</p>
    </div>
  </div>
</template>

<script setup>
defineProps(["user"]);
</script>
