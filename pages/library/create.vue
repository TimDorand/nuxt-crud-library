<template>
  <div>
    <Header/>
    <div class="container">
      <h2>New release</h2>
      <Form :release="release"/>
    </div>
  </div>
</template>

<script>
import axios from "~/plugins/axios";
import Header from "~/components/header.vue";
import Form from "./form";

export default {
  components: {
    Header,
    Form
  },
  data() {
    return {
      title: null,
      release: {
        id: null,
        artist: null,
        title: null,
        label: null,
        catalog: null,
        year: null,
        format: null
      },
      editView: true
    };
  },
  head() {
    return {
      titleTemplate: this.release
        ? `New release | Library`
        : `${this.release.artist} - ${this.release.title} | Library`,
      meta: [{}]
    };
  }
};
</script>

<style>
.heading {
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}
</style>
