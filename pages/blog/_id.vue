<template>
  <div class="container" v-if="currentArticle">
    <h2>{{currentArticle.name}}</h2>
    <p>{{currentArticle.description}}</p>

    <nuxt-link :to="{name: 'blog'}">
      <button>Retour</button>
    </nuxt-link>
  </div>
</template>

<script>
import axios from "~/plugins/axios";

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(`/servers/${params.id}`);
    return {
      currentArticle: data
    };
  },
  data() {
    return {
      currentArticle: null
    };
  },
  head() {
    return {
      title: `${this.currentArticle.name} | Mon site `,
      meta: [{}]
    };
  }
  // mounted() {
  //   this.currentArticle = this.articles.find(item => item.id === parseInt(this.$route.params.id))
  // }
};
</script>