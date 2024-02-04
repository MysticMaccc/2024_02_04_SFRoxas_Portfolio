<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const item = ref();
const selectedLink = (selected) => {
            item.value = selected;
};

</script>
<template>
  <li class="nav-item">
    <RouterLink :to="{ name: 'home' }" class="nav-link" :class="item == 'Home' ? 'active' : '' " @click="selectedLink('Home')">Home</RouterLink>
  </li>
  <li class="nav-item">
    <RouterLink :to="{ name: 'about' }" class="nav-link" :class="item == 'About' ? 'active' : '' " @click="selectedLink('About')">About Me</RouterLink>
  </li>
  <li class="nav-item">
    <RouterLink :to="{ name: 'techstack' }" class="nav-link" :class="item == 'TechStack' ? 'active' : '' " @click="selectedLink('TechStack')">Tech Stack</RouterLink>
  </li>
  <li class="nav-item">
    <RouterLink :to="{ name: 'portfolio' }" class="nav-link" :class="item == 'Portfolio' ? 'active' : '' " @click="selectedLink('Portfolio')">Portfolio</RouterLink>
  </li>
</template>
