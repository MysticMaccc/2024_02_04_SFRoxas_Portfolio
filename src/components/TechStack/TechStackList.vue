<script setup>
const props = defineProps({
  tech:Object
});

</script>
<template>
  <li class="list-group-item px-0 pb-3 pt-0">
    <div class="d-flex align-items-center justify-content-between">
      <a href="#">
        <div class="d-lg-flex align-items-center">
          <div>
            <img
              :src="tech.img"
              :alt="tech.img"
              class="rounded img-4by3-lg"
            />
          </div>
          <div class="ms-lg-3 mt-2 mt-lg-0">
            <h4 class="text-primary-hover">{{ tech.tech }}</h4>
            <ul class="list-inline fs-6 mb-0 text-inherit">
              <li class="list-inline-item">{{ tech.level }}</li>
            </ul>
          </div>
        </div>
      </a>
    </div>
  </li>
</template>
