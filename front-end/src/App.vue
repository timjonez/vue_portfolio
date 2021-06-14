<template>
  <app-header />
  <router-view></router-view>
</template>

<script>
import AppHeader from './components/Header.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
};
</script>

<style>

</style>
