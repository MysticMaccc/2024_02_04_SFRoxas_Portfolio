<script setup>
import Navlinks from '@/components/shared/Navlinks.vue'
</script>
<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid px-0">
      <a class="navbar-brand" href="./index.html"
        ><img src="./assets/images/brand/logo/logo.svg" alt="" class=""
      /></a>
      <!-- Mobile view nav wrap -->
      <div>
        <!-- Button -->
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-default"
          aria-controls="navbar-default"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="icon-bar top-bar mt-0"></span>
          <span class="icon-bar middle-bar"></span>
          <span class="icon-bar bottom-bar"></span>
        </button>
      </div>
      <!-- Collapse -->
      <div class="collapse navbar-collapse" id="navbar-default">
        <ul class="navbar-nav">
            <Navlinks/>
        </ul>
      </div>
    </div>
  </nav>
</template>
