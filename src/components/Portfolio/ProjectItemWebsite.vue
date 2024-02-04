<script setup>
import { computed } from "vue";

const props = defineProps({
    url:String
});

const project_url = computed(() => {
    return props.url == 'not available' ? '#' : props.url;
});

const project_url_label = computed(() => {
    return props.url == 'not available' ? 'Not Available' : props.url;
});

</script>
<template>
  <div>
    <!-- link -->
    <h3 class="mb-3">Website</h3>
    <a :href="project_url" class="fs-4 text-inherit" target="_blank">{{ project_url_label }}</a>
  </div>
</template>
