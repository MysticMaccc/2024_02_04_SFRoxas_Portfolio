<script setup>
import PersonalInfo from '@/components/shared/PersonalInfo.vue'
import { projects } from '@/data/projects'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import PortfolioItemTitle from '@/components/Portfolio/PortfolioItemTitle.vue'
import ProjectItemSummary from './ProjectItemSummary.vue'
import ProjectItemWebsite from './ProjectItemWebsite.vue'
import PortfolioItemTools from './PortfolioItemTools.vue'
import PortfolioItemGallery from './PortfolioItemGallery.vue'
import PortfolioItemClient from './PortfolioItemClient.vue'

const param = ref(null)
const route = useRoute()
const project_data = projects

param.value = route.params.id - 1
project_data.value = projects[param.value]
</script>
<template>
  <main>
    <!-- Bg -->
    <div class="home-bg-color" style="height: 100px"></div>
    <!-- User info -->
    <PersonalInfo />
    <!-- Content -->
    <section class="py-5 py-md-5">
      <div class="container">
        <div class="row">
          <!-- DETAIL -->
          <div class="offset-md-1 col-md-10 col-12">
            <PortfolioItemTitle
              :title="project_data.value.title"
              :img="project_data.value.img"
            />
            <div class="mb-10">
              <!-- row -->
              <div class="row">
                <ProjectItemSummary :description="project_data.value.description" />
                <div class="offset-md-1 col-md-3 col-12">
                  <!-- list -->
                  <PortfolioItemTools :tools="project_data.value.tools" />
                  <ProjectItemWebsite :url="project_data.value.url"/>
                </div>
              </div>
            </div>
            
            <div class="mb-10">
              <div class="row" >
                <h2>Gallery</h2>
                <PortfolioItemGallery  :gallery="project_data.value.gallery"/>
              </div>
            </div>
            
            <div class="mb-10">
              <div class="row">
                <div class="col-md-7 col-12">
                  <div class="mb-6 mb-md-0">
                    <!-- text -->
                    <h2 class="mb-4">The Client</h2>
                    <PortfolioItemClient :client="project_data.value.client" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- DETAIL -->
        </div>
      </div>
    </section>
  </main>
</template>
