<script setup>
import { projects } from "@/data/projects";
import router from "@/router";
</script>
<template>
    <div class="col-md-6" v-for="project in projects" :key="project.id">
        <div class="mb-6" >
            
                <div class="img-overlay ">
                <div class="img-color ">
                    <router-link :to="{name:'projectdetail', params: {'id':project.id}}"><img :src="project.img"
                        alt="portfolio" class="img-fluid w-100"></router-link>
                        
                    <div class="caption">
                    <router-link :to="{name:'projectdetail', params: {'id':project.id}}" class="btn btn-white  ">View Details</router-link>
                    </div>
                </div>
                </div>
                <div class="mt-4">
                    
                <div class="d-flex justify-content-between align-items-center">
                    <h3 class="fw-semibold mb-1"> 
                        <router-link :to="{name:'projectdetail', params: {'id':project.id}}" class="text-inherit">{{ project.title }}</router-link>
                    </h3>
                    <router-link :to="{name:'projectdetail', params: {'id':project.id}}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
                    </svg></router-link>
                </div>
                <span>{{ project.category }}</span>
                </div>
        </div>
    </div>
</template>
