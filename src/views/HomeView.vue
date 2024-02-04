<script setup>
import { personalData,profile } from '@/data/personal';
import CV from '@/components/shared/CV.vue';
</script>

<template>
  <main>
    <section class="home-bg-color">
      <div class="container">
        <!-- Hero Section -->
        <div class="row align-items-center g-0">
          <div class="col-xl-5 col-lg-6 col-md-12">
            <div class="py-7 py-lg-0">
              <h1 class="text-dark display-4 fw-bold">{{ personalData[0].name }}</h1>
              <p class="text-primary-50 mb-4 lead">
                {{ personalData[0].work }}
              </p>
              <CV/>
            </div>
          </div>
          <div class="col-xl-7 col-lg-6 col-md-12 text-lg-end text-center">
            <img :src="profile" alt="heroimg" class="img-fluid home-image" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
