<script setup>
const props = defineProps({
    tools:String,
});
</script>
<template>
  <div class="mb-6">
    <h3 class="mb-4">Framework</h3>
    <hr>
    <small v-html="tools"></small>
  </div>
</template>
