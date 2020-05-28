<template>
  <div class="design-blog">
    <h3 class="design-blog-title">Creative+ Design Blog</h3>
    <a href="#" class="design-blog-citate">Your Bi-Line to go her</a>
    <p class="design-blog-description">
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      Vestibulum scelerisque dignissim massa, sed gravida nisi sollicitudin vel. Sed nec erat
      feugiat orci hendrerit ultricies et sit amet lectus. Sed eget tellus sapien. Proin vel mi
      nibh, id ultrices metus. Donec bibendum dolor at ante lacinia blandit. Vivamus rhoncus mattis
      sem ut hendrerit.
    </p>
  </div>
</template>

<script>
export default {
  name: 'VSidebarDesignBlog'
};
</script>

<style lang="scss" scoped>
.design-blog {
  &-title {
    @extend %sidebar-title;
    margin-bottom: 13px;
  }

  &-citate {
    position: relative;
    display: block;
    padding: 0;
    margin: 0 0 19px;
    @include font-details(13px, 400);
    font-style: italic;
    color: $post-date-color;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &-description {
    position: relative;
    display: block;
    padding: 0;
    margin: 0 0 40px;
    @include font-details(14px, 500);
    font-style: italic;
    color: $post-description-color;
    line-height: 2em;
  }
}
</style>
