<template>
  <div class="page-posts">
    <v-page-posts-item v-for="(post, i) in posts" :key="i" :post="post" />
  </div>
</template>

<script>
import VPagePostsItem from './VPagePostsItem.vue';

export default {
  name: 'ProjectPosts',
  components: {
    VPagePostsItem
  },
  data() {
    return {
      posts: []
    };
  },
  created() {
    fetch('json/posts.json')
      .then(res => res.json())
      .then(data => {
        this.posts = data;
      })
      .catch(err => console.log(err));
  }
};
</script>
