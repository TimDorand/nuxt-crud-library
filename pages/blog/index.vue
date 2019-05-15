<template>
<div>
 <Header />
 <div class="container">
  <h2>{{title}}</h2>
  <ul>
   <li v-for="article in articles" :key="article.id">
    <nuxt-link :to="{name: 'blog-id', params: {id: article.id}}">
     {{article.name}}
    </nuxt-link>
   </li>
   </ul>
 </div>
 </div>
</template>

<script>
 import axios from "~/plugins/axios"
 import Header from "~/components/header.vue"

 export default{
    components: {
    Header
  },
  async asyncData(){
   const { data } = await axios.get('/servers')
   return {
    articles: data
   }
  },
  data() {
   return {
    title: "Mes articles",
    articles: []
   }
  }
 }
</script>