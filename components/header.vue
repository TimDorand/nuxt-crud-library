<template>
  <!--Navbar-->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Navbar brand -->
    <nuxt-link to="/"><h1 class="navbar-brand" href="#">Vinyl Library</h1></nuxt-link>

  </nav>
  <!--/.Navbar-->
</template>

<script>
import axios from "~/plugins/axios";

export default {
  async asyncData() {
    const { data } = await axios.get("/servers");
    return {
      articles: data
    };
  },
  data() {
    return {
      title: "Mes articles",
      articles: []
    };
  }
};
</script>