<template>
  <div class="flex-grow">
    <div class="bg-white" v-for="project in projects" :key="project.slug">
      <router-link :to="{ name: 'project-detail', params: { slug: project.slug }}">
        <h1>{{ project.title }}</h1>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectList',
  data() {
    return {
      projects: [
        {
          slug: 'trinity',
          title: 'Trinity',
          subTitle: 'Customer and inventory management system',
          liveLink: null,
          sourceLink: null,
          pictures: [],
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nostrum dolores, nemo accusantium laboriosam tenetur ipsa nam esse, hic minus nobis? Ab a eaque aspernatur obcaecati dicta, itaque quaerat distinctio.',
          techList: [
            'Python',
            'Django',
            'Javascript',
            'Jquery',
            'HTMX',
            'PostgreSQL',
          ],
        },
        {
          slug: 'voltask',
          title: 'VolTask',
          subTitle: 'Customer and inventory management system',
          liveLink: null,
          sourceLink: null,
          pictures: [],
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nostrum dolores, nemo accusantium laboriosam tenetur ipsa nam esse, hic minus nobis? Ab a eaque aspernatur obcaecati dicta, itaque quaerat distinctio.',
          techList: [
            'Python',
            'Django',
            'Javascript',
            'Jquery',
            'HTMX',
            'PostgreSQL',
          ],
        },
      ],
    };
  },
};
</script>
