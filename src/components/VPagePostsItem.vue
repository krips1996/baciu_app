<template>
  <div class="page-posts-item" :class="{ 'halth-width': !post.subtitle }">
    <v-page-posts-item-image :link="post.image" :isSubtitle="post.subtitle" />
    <v-page-posts-item-description
      :title="post.title"
      :date="post.date"
      :subtitle="post.subtitle"
      :description="post.description"
    />
  </div>
</template>

<script>
import VPagePostsItemImage from './VPagePostsItemImage.vue';
import VPagePostsItemDescription from './VPagePostsItemDescription.vue';

export default {
  name: 'VPagePostsItem',
  components: {
    VPagePostsItemImage,
    VPagePostsItemDescription
  },
  props: {
    post: {
      image: String,
      title: String,
      date: String,
      subtitle: String,
      description: String
    }
  }
};
</script>

<style lang="scss">
.page-posts-item {
  position: relative;
  display: inline-block;
  margin-bottom: 30px;

  &.halth-width {
    width: calc(50% - 12px);

    &:nth-child(even) {
      float: right;
    }
  }
}
</style>
