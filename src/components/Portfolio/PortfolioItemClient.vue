<script setup>
const props = defineProps({
    client:Object
});
</script>
<template>
  <p class="fs-4 mb-0">
    <strong>Name: </strong>{{ client.name }}
  </p>
  <p class="fs-4 mb-0">
    <strong>Services: </strong>{{ client.services }}
  </p>
  <p class="fs-4 mb-0">
    <strong>Website: </strong><a :href="client.website">{{ client.website }}</a>
  </p>
  <p class="fs-4 mb-0">
    <strong>Phone: </strong><a :href="client.phone">{{ client.phone }}</a>
  </p>
</template>
