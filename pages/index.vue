<template>
  <div>
    <Header/>
    <div class="container">
      <div class="heading">
        <h2>{{title}}</h2>
        <nuxt-link :to="{name: 'library-create'}">
          <button class="btn btn-success">New release</button>
        </nuxt-link>
      </div>
      <div
        v-if="notification"
        :class="notification.success ? 'alert alert-success':'alert alert-danger'"
        role="alert"
      >{{notification.msg}}</div>
      <table class="table table-responsive">
        <thead>
          <tr>
            <th></th>
            <th>Artist</th>
            <th>Title</th>
            <th>Label</th>
            <th>Catalog #</th>
            <th>Year</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="release in releases" :key="release.id">
            <td>
              <nuxt-link
                v-if="release.thumbnail"
                :to="{name: 'library-id', params: {id: release.id}}"
              >
                <img :src="checkURL(release.thumbnail)" alt="album_pic" height="100">
              </nuxt-link>
            </td>
            <td>
              <nuxt-link :to="{name: 'library-id', params: {id: release.id}}">{{release.artist}}</nuxt-link>
            </td>
            <td>
              <nuxt-link
                :to="{name: 'library-id', params: {id: release.id}}"
              >{{release.title ? release.title : 'link'}}</nuxt-link>
            </td>
            <td>{{release.label}}</td>
            <td>{{release.catalog}}</td>
            <td>{{release.year}}</td>
            <td>{{release.format}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "~/plugins/axios";
import Header from "~/components/header.vue";

export default {
  components: {
    Header
  },
  async asyncData() {
    const { data } = await axios.get("http://localhost:3000/releases");
    return {
      releases: data
    };
  },
  data() {
    return {
      title: "Last releases",
      releases: [],
      notification: this.$route.params.notification
    };
  },
  head() {
    return {
      titleTemplate: `Releases | Library`
    };
  },
  methods: {
    checkURL(url) {
      if (url) {
        if (url.match(/.(jpg|jpeg|png|gif)$/i) !== null) return url;
        return false;
      }
      return false;
    }
  }
};
</script>
<style>
.heading {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
</style>
