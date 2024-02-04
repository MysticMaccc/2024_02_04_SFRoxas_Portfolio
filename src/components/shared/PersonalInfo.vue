<script setup>
import { profile,profile2, personalData } from '@/data/personal'
import {contactData} from '@/data/contact'
import { socialLinks } from '@/data/socialLinks';
import Social from './Social.vue'
</script>
<template>
  <section class="card p-lg-2 pt-2 pt-lg-0 rounded-0 border-0">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8 col-md-8 col-12">
          <div class="d-flex align-items-center">
            <div class="position-relative mt-n9">
              <img
                :src="profile2"
                alt="avatar"
                class="rounded-circle avatar-xxl border-white border border-4 position-relative"
              />
            </div>
            <div class="ms-3">
              <div class="d-flex align-items-center">
                <h3 class="mb-0 fw-bold me-2">{{ personalData[0].name }}</h3>
              </div>
              <span class="fs-6">{{ personalData[0].work }}</span><br/>
              <span class="fs-6" v-html="contactData[0].email"></span><br/>
              <span class="fs-6" v-html="personalData[0].phone"></span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-12">
          
                <Social :social="socialLinks" />
              
        </div>
      </div>
    </div>
  </section>
</template>
