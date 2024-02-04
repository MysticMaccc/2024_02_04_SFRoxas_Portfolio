<script setup>
import AboutMe from '@/components/About/AboutMe.vue';
import PersonalInfo from '@/components/shared/PersonalInfo.vue';
import {personalData} from '@/data/personal.js';
</script>
<template>
  <main>
    <!-- Bg -->
    <div class="home-bg-color" style="height: 100px;"></div>
    <!-- User info -->
    <PersonalInfo />
    <!-- Content -->
    <section class="py-5 py-md-5">
      <div class="container">
        <div class="row">

          <AboutMe :personalData="personalData" />
          
        </div>
      </div>
    </section>
  </main>
</template>
