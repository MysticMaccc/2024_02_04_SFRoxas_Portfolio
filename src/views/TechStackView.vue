<script setup>
import PersonalInfo from '@/components/shared/PersonalInfo.vue'
import TechStack from '@/components/TechStack/TechStack.vue';
import { devStack } from '@/data/developmentStack'
const divStyle="col-4 col-md-4 mt-2";
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
                <TechStack :style1="divStyle" title="Front-End Stack" :devstack="devStack[0].frontend" />
                <TechStack :style1="divStyle" title="Back-End Stack" :devstack="devStack[0].backend" />
                <TechStack :style1="divStyle" title="Database" :devstack="devStack[0].database" />
                <TechStack :style1="divStyle" title="Serverside" :devstack="devStack[0].serverside" />
                <TechStack :style1="divStyle" title="REST APIs" :devstack="devStack[0].api" />
                <TechStack :style1="divStyle" title="Version Control" :devstack="devStack[0].version" />
                <TechStack :style1="divStyle" title="Package Installers" :devstack="devStack[0].package" />
                <TechStack :style1="divStyle" title="Web Development Tools" :devstack="devStack[0].tools" />
                <TechStack :style1="divStyle" title="Style Sheets" :devstack="devStack[0].css" />
                <TechStack style1="col-4 offset-4 mt-2" title="Hosting Platforms" :devstack="devStack[0].hosting" />
        </div>
      </div>
    </section>
  </main>
</template>
