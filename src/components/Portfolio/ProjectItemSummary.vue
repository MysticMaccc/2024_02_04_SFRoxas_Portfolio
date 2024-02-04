<script setup>
const props = defineProps({
    description:String
});
</script>
<template>
  <div class="col-md-8 col-12">
    <!-- text -->
    <div class="mb-6 mb-lg-0">
      <h2 class="mb-4">Project Summary</h2>
      <p class="fs-4 mb-4">
        {{ description }}
      </p>
    </div>
  </div>
</template>
