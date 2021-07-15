<template>
  <div class="flex-grow p-20">
    <div class="grid grid-cols-2 gap-4 place-content-around w-2/3 m-auto">
      <div class="bg-white w-50 project-card" v-for="project in projects" :key="project.slug">
          <img class="w-100" :src="project.pictures[0]" alt="">
          <div class="project-overlay px-10 flex flex-row flex-wrap
            gap-4 content-center w-full">
            <div v-for="item in project.techList" :key="item"
              class="rounded-full flex-auto text-center py-1.5 px-3 main-color">
                {{ item }}
            </div>
            <hr>
            <div class="m-auto pt-3">
              <router-link
                :to="{ name: 'project-detail', params: { slug: project.slug }}"
                class="flex-auto main-color rounded-full py-1.5 font-bold text-xl px-3 w-1/3">
                  See Details
              </router-link>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const apiUrl = 'https://api.tim-jones.dev';

export default {
  name: 'ProjectList',
  data() {
    return {
      projects: [],
    };
  },
  created() {
    axios.get(`${apiUrl}/projects`)
      .then((res) => {
        this.projects = res.data;
      });
  },
};
</script>

<style scoped>
.project-card {
  position: relative;
}

img {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.project-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: rgba(36, 3, 241, 0.75);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

hr {
  width: 100%;
  border: none;
}
</style>
