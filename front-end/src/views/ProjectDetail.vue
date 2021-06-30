<template>
  <div id="content" class="flex-grow">
    <div class="flex">
      <div class="flex-grow">
        <h1 class="text-white title">{{ title }}</h1>
        <h2 class="text-white text-xl">{{ subTitle }}</h2>
      </div>
      <div class="flex-1 flex pb-1 justify-end">
        <a :href="liveLink"
          target="_blank"
          v-show="liveLink !== null"
          class="rounded-full flex-initial text-center py-1.5 px-3 main-color">
          View Live
        </a>
        <a :href="sourceLink"
          target="_blank"
          v-show="sourceLink !== null"
          class="rounded-full flex-initial text-center py-1.5 px-3 main-color">
          Source Code
        </a>
      </div>
    </div>
    <Carousel :autoplay="5000" :wrap-around="true" :transition="800">
      <Slide v-for="slide in pictures" :key="slide">
        <div class="carousel__item">
          <img :src="slide" height="200" class="carousel__item" alt="">
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Pagination, Slide } from 'vue3-carousel';

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
      key: 'trinity',
      title: 'Trinity',
      subTitle: 'Customer and inventory management system',
      liveLink: null,
      sourceLink: 'https://github.com/timjonez/volunteer_platform',
      pictures: ['https://tim-jones.dev/media/findinghope.png', 'https://tim-jones.dev/media/findinghope.png'],
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nostrum dolores, nemo accusantium laboriosam tenetur ipsa nam esse, hic minus nobis? Ab a eaque aspernatur obcaecati dicta, itaque quaerat distinctio.',
      techList: [
        'Python',
        'Django',
        'Javascript',
        'Jquery',
        'HTMX',
        'PostgreSQL',
      ],
    };
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
</style>
