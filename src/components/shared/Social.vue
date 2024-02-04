<script setup>
const props = defineProps({
  social: Object
})
</script>
<template>
  <div class="fs-4 mt-4 mt-lg-0 pb-2 pb-lg-0 d-lg-flex justify-content-end">
    <a
      v-for="data in social"
      :key="data.id"
      :href="data.url"
      class="text-muted me-2"
      :class="data.icon"
      target="_blank"
    ></a>
  </div>
</template>
