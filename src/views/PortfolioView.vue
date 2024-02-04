<script setup>
import PersonalInfo from '@/components/shared/PersonalInfo.vue';
import PortfolioListItem from '@/components/Portfolio/PortfolioListItem.vue';
import { portfolioData } from '@/data/projects';
</script>
<template>
  <main>
    <!-- Bg -->
    <div class="home-bg-color" style="height: 100px;"></div>
    <!-- User info -->
    <PersonalInfo />
    <!-- Content -->
    
    <section class="py-lg-12 py-7">
    <div class="container">
      <div class="row ">
        <div class="offset-md-2 col-md-8 col-12">
          <!-- text -->
          <div class="mb-5">
            <h1 class="display-3 fw-semibold mb-4">
                Portfolio
            </h1>
            <!-- lead -->
            <p class="lead mb-0">
                {{ portfolioData[0].description }}
            </p>
          </div>
        </div>
      </div>
      <!-- row -->
      <div class="row mt-lg-6 g-6">
        <!-- col -->
                <PortfolioListItem />
                
      </div>
    </div>

  </section>

  </main>
</template>
