<template>
  <div>
    <Header/>
    <div class="container">
      <h2>{{title}}</h2>
      <Form :release="release"/>
    </div>
  </div>
</template>

<script>
import axios from "~/plugins/axios";
import Header from "~/components/header.vue";
import Form from "./form.vue";

export default {
  components: {
    Header,
    Form
  },
  async asyncData({ params }) {
    if (params.id && !isNaN(params.id)) {
      const { data } = await axios.get(
        `http://localhost:3000/releases/${params.id}`
      );
      return {
        release: data
      };
    }else{
      this.$router.push({
        name: "index",
        params: { notification: { success: false, msg: "Release not found"} }
      });
    }
  },
  data() {
    return {
      release: {
        artist: null,
        title: null,
        label: null,
        catalog: null,
        year: null,
        format: null
      },
      title: null,
      editView: false
    };
  },
  head() {
    return {
      titleTemplate: this.release
        ? `${this.release.artist} - ${this.release.title} | Library`
        : `New release | Library`,
      meta: [{}]
    };
  },
  mounted() {
    this.title =
      this.release.thumbnail || this.release.artist
        ? `${this.release.artist} - ${this.release.title}`
        : `New release`;
  }
};
</script>

<style>
input:read-only {
  border: none;
  outline: none;
}
td input {
  width: 100%;
}
.heading {
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}
</style>
