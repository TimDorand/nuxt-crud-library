<template>
  <form @submit="saveRelease()" class="form">
    <div class="heading">
      <span>
        <nuxt-link to="/">
          <button class="btn btn-primary">Back</button>
        </nuxt-link>
      </span>
      <span>
        <button
          :class="!editView ? 'btn btn-success':'btn btn-danger'"
          v-on:click="editView = !editView"
          type="button"
        >
          <span v-if="!editView">Edit</span>
          <span v-if="editView">Cancel</span>
        </button>
        <button
          type="submit"
          class="btn btn-success"
          v-if="editView"
          @click.stop.prevent="saveRelease()"
        >
        <span v-if="release.id">Update</span>
        <span v-else>Create</span>
        </button>
        <button type="button" class="btn btn-danger" v-if="release.id" v-on:click="deleteRelease()">Delete</button>
      </span>
    </div>
    <table class="table">
      <tbody>
        <tr>
          <td>
            thumbnail
            <br>
            <small>Valid image URL required</small>
          </td>
          <td>
            <nuxt-link v-if="release.id" :to="{name: 'library-id', params: {id: release.id}}">
              <input v-if="editView" v-model="release.thumbnail" :readonly="!editView">
              <img v-if="release.thumbnail" :src="release.thumbnail" alt="album_pic">
            </nuxt-link>
            <p v-else-if="release.thumbnail">
              <input v-model="release.thumbnail" :readonly="!editView">
              <img v-if="release.thumbnail" :src="release.thumbnail" alt="album_pic">
            </p>
          </td>
        </tr>
        <tr>
          <td>artist</td>
          <td>
            <input v-model="release.artist" :readonly="!editView">
          </td>
        </tr>
        <tr>
          <td>title</td>
          <td>
            <nuxt-link v-if="release.id" :to="{name: 'library-id', params: {id: release.id}}">
              <input v-model="release.title" :readonly="!editView">
            </nuxt-link>
            <p v-else-if="release.title">
              <input v-model="release.title" :readonly="!editView">
            </p>
          </td>
        </tr>
        <tr>
          <td>label</td>
          <td>
            <input v-model="release.label" :readonly="!editView">
          </td>
        </tr>
        <tr>
          <td>catalog</td>
          <td>
            <input v-model="release.catalog" :readonly="!editView">
          </td>
        </tr>
        <tr>
          <td>year</td>
          <td>
            <input v-model="release.year" :readonly="!editView">
          </td>
        </tr>
        <tr>
          <td>format</td>
          <td>
            <input v-model="release.format" :readonly="!editView">
          </td>
        </tr>
      </tbody>
    </table>

  </form>
</template>

<script>
import axios from "~/plugins/axios";
import Header from "~/components/header.vue";

export default {
  components: {
    Header
  },
  props: {
    release: Object
  },
  data() {
    return {
      notification: false,
      editView: this.release && this.release.id ? false : true
    };
  },
  head() {
    return {
      title: this.release
        ? `New release`
        : `${this.release.artist} - ${this.release.title}`,
      titleTemplate: this.release
        ? `New release | Library`
        : `${this.release.artist} - ${this.release.title} | Library`,
      meta: [{}]
    };
  },
  methods: {
    async saveRelease() {
      this.release.thumbnail = this.release.thumbnail.match(
        /.(jpg|jpeg|png|gif)$/i
      )
        ? this.release.thumbnail
        : "";
      const resp = this.release && this.release.id
        ? await axios.put(
            `http://localhost:3000/releases/${this.release.id}`,
            this.release
          )
        : await axios.post(`http://localhost:3000/releases/`, this.release);

      this.$router.push({
        name: "index",
        params: { notification: this.notification }
      });
    },
    async deleteRelease() {
      const resp = await axios.delete(
        `http://localhost:3000/releases/${this.release.id}`
      );
      this.notification = {
        success: resp.status === 200 ? true : false,
        msg:
          resp.status === 200
            ? "Release has been deleted! "
            : "Error"
      };
      this.$router.push({
        name: "index",
        params: { notification: this.notification }
      });
    }
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
</style>
