<script setup>
import CV from '../shared/CV.vue';
const props = defineProps({
    personalData:Object
});
</script>
<template>
  <div class="col-12">
    <!-- Card -->
    <div class="card border-0 mb-4">
      <!-- Card body -->
      <div class="card-body">
        <h4>About me</h4>
        <p v-html="personalData[0].about">
        </p>
        <CV/>
      </div>
    </div>
  </div>
</template>
