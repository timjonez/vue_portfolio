<template>
  <div id="content" class="flex-grow pb-10">
    <div class="flex pb-1">
      <div class="flex-grow">
        <h1 class="text-white title">{{ project.title }}</h1>
        <h2 class="text-white text-xl">{{ project.subTitle }}</h2>
      </div>
      <div class="flex-1 flex pb-1 justify-end">
        <a :href="project.liveLink"
          target="_blank"
          v-show="project.liveLink !== null"
          class="rounded-full flex-initial text-center py-1.5 px-3 main-color">
          View Live
        </a>
        <a :href="project.sourceLink"
          target="_blank"
          v-show="project.sourceLink !== null"
          class="rounded-full flex-initial text-center ml-2 py-1.5 px-3 main-color">
          Source Code
        </a>
      </div>
    </div>
    <Carousel :autoplay="5000" :wrap-around="true" :transition="800">
      <Slide v-for="slide in project.pictures" :key="slide">
        <div class="carousel__item">
          <img :src="slide" height="200" class="carousel__item" alt="">
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
    <div class="flex gap-10 my-10">
      <div class="flex-1">
        <h2 class="text-white text-3xl pb-3">About</h2>
        <p class="text-white">{{ project.desc }}</p>
      </div>
      <div class="flex-1">
        <h2 class="text-white text-3xl pb-3">Technologies</h2>
        <ul class="text-white">
          <li v-for="item in project.techList" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import axios from 'axios';

const apiUrl = 'http://127.0.0.1:3000';

export default {
  name: 'ProjectDetail',
  props: ['slug'],
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      project: {
        title: '',
        subTitle: '',
        liveLink: null,
        sourceLink: null,
        desc: '',
        techList: [],
        pictures: [],
      },
    };
  },
  mounted() {
    axios.get(`${apiUrl}/projects/${this.$route.params.slug}`)
      .then((res) => {
        [this.project] = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
#content {
  width: 60%;
  margin: auto;
  margin-top: 5rem;
}
.title {
  font-size: 2.5rem;
}

a {
  height: fit-content;
  margin-top: auto;
}

ul {
  padding-left: 40px;
  list-style: disc;
}

</style>
