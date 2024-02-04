<script setup>
const props = defineProps({
    title:String,
    img:String
});
</script>
<template>
  <div class="mb-10">
    <div class="row">
      <div class="col-md-10 col-12">
        <!-- text -->
        <div class="mb-8">
          <h1 class="display-3 fw-bold mb-4">{{ title }}</h1>
        </div>
      </div>

      <div class="col-12">
        <!-- img -->
        <img :src="img" alt="portfolio" class="img-fluid w-100 rounded-3" />
      </div>
    </div>
  </div>
</template>
