<script setup>
import { personalData,profile } from '@/data/personal';
</script>
<template>
    <a :href="personalData[0].cv" class="btn btn-dark" target="_blank">Download CV</a>
</template>