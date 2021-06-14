<template>
  <app-header />
  <router-view></router-view>
  <app-footer />
</template>

<script>
import AppHeader from './components/Header.vue';
import AppFooter from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>

</style>
