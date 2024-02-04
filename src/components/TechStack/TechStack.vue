<script setup>
import TechStackListVue from "../TechStack/TechStackList.vue";

const props = defineProps({
    style1:String,
    title:String,
    devstack:Object
});
</script>
<template>
  <div :class="style1">
    <!-- Card -->
    <div class="card border-0">
      <!-- Card header -->
      <div class="card-header">
        <h4 class="mb-0">{{ title }}</h4>
      </div>
      <!-- Card body -->
      <div class="card-body">
        <!-- List group -->
        <ul class="list-group list-group-flush" v-for="tech in devstack" :key="tech.id">
          <!-- List group item -->
            <TechStackListVue :tech="tech"/>
        </ul>
      </div>
    </div>
  </div>
</template>
