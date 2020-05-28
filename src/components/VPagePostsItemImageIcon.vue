<template>
  <div class="page-posts-item-icon">
    <s-v-g-icon :type="type" />
  </div>
</template>

<script>
import SVGIcon from './SVGIcon.vue';

export default {
  name: 'VPagePostsItemImageIcon',
  components: {
    SVGIcon
  },
  props: {
    type: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.page-posts-item-icon {
  position: relative;
  display: table;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: $primary-color;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  & > .social-media-icon {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    background-color: $orange-dark;
  }
}
</style>
