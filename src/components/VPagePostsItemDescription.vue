<template>
  <div class="page-posts-item-description">
    <span class="page-posts-item-description-triangle" />
    <h1 class="page-posts-item-description-title" :class="{ 'less-size-title': !subtitle }">
      {{ title }}
    </h1>
    <span class="page-posts-item-description-date">{{ date }}</span>
    <h3 v-if="subtitle" class="page-posts-item-description-subtitle">{{ subtitle }}</h3>
    <p class="page-posts-item-description-description">{{ description }}</p>
    <span class="page-posts-item-description-decoration" />
  </div>
</template>

<script>
export default {
  name: 'VPagePostsItemDescription',
  props: {
    title: String,
    date: String,
    subtitle: {
      type: String,
      required: false
    },
    description: String
  }
};
</script>

<style lang="scss" scoped>
.page-posts-item-description {
  position: relative;
  display: block;
  padding: 30px 30px 38px;
  margin: 10px 0 0;
  width: 100%;
  height: auto;
  border: 1px solid $border-primary-color;
  background-color: $white;

  &-triangle {
    position: absolute;
    display: block;
    width: 29px;
    height: 29px;
    top: -16px;
    left: 80px;
    background-color: $white;
    border-top: 1px solid $border-primary-color;
    border-left: 1px solid $border-primary-color;
    transform: rotate(45deg);
  }

  &-title,
  &-date,
  &-subtitle,
  &-description {
    position: relative;
    display: block;
    padding: 0;
    margin: 0;
    font-family: 'Roboto';
  }

  &-title {
    margin-bottom: 14px;
    color: $text-color-dark;
    font-size: 40px;
    font-weight: 700;

    &.less-size-title {
      font-size: 26px;
    }
  }

  &-date {
    margin-bottom: 20px;
    color: $post-date-color;
    font-size: 13px;
    font-style: italic;
  }

  &-subtitle {
    margin-bottom: 17px;
    color: $primary-color;
    font-size: 18px;
    font-weight: 700;
  }

  &-description {
    color: $post-description-color;
    font-size: 14px;
  }

  &-decoration {
    @extend %bottom-decoration;
  }
}
</style>
