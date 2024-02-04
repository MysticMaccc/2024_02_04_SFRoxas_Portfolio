<script setup>
const props = defineProps({
    gallery:Object,
});
</script>
<template>
  <div class="col-md-4" v-for="data in gallery" :key="data.id">
    <!-- img -->
    <img
      :src="data.img"
      alt="portfolio"
      class="img-fluid w-100 rounded-3"
    />
  </div>
</template>
