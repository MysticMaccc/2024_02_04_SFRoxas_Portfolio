<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/application/Navbar.vue'
import Footer from '@/components/application/Footer.vue';
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>