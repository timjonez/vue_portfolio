<template>
  <div>
      <h1 class="text-white text-8xl text-center pt-14">
          <router-link :to="{ name: 'home' }">Tim Jones</router-link>
      </h1>
      <ul class="m-auto justify-around mt-6 text-3xl">
          <li><router-link to="/projects">Projects</router-link></li>
          <li><router-link to="/resume">Résumé</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
      </ul>
  </div>
</template>

<style scoped>
ul {
    color: #DBFF00;
    display: flex;
    width: 50%;
}
li {
    padding: 10px 20px;
    border-bottom: transparent 2px solid;
}
li:hover {
    border-bottom: #DBFF00 2px solid;

}
</style>
