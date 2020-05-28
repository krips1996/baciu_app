<template>
  <div class="container content">
    <div class="row">
      <div class="col-8"><page-posts /></div>
      <div class="col-4"><page-sidebar /></div>
    </div>
  </div>
</template>

<script>
import PagePosts from './PagePosts.vue';
import PageSidebar from './PageSidebar.vue';

export default {
  name: 'TheContent',
  components: {
    PagePosts,
    PageSidebar
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding-top: 22px;
}
</style>
