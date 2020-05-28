<template>
  <div class="page-posts-item-image" :class="{ 'halth-height': isSubtitle }">
    <img :src="require(`../assets/images/${link}`)" :alt="link" />
    <div v-if="isSubtitle" class="page-posts-item-image-icons">
      <v-page-posts-item-image-icon :type="iconTypes.FACEBOOK" />
      <v-page-posts-item-image-icon :type="iconTypes.TWITTER" />
    </div>
  </div>
</template>

<script>
import VPagePostsItemImageIcon from './VPagePostsItemImageIcon.vue';
import ICON_TYPES from '../utils/constants/iconTypes';

export default {
  name: 'VPagePostsItemImage',
  props: {
    link: String,
    isSubtitle: String
  },
  components: {
    VPagePostsItemImageIcon
  },
  data() {
    return {
      iconTypes: null
    };
  },
  created() {
    this.iconTypes = ICON_TYPES;
  }
};
</script>

<style lang="scss">
.page-posts-item-image {
  position: relative;
  display: block;
  height: 312px;
  padding: 10px;
  background-color: $white;
  border: 1px solid $border-primary-color;

  &.halth-height {
    height: 227;
  }

  & > img {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &-icons {
    position: absolute;
    display: block;
    top: auto;
    left: 60px;
    bottom: 30px;

    & > .page-posts-item-icon {
      & > .social-media-icon {
        top: calc(50% - 3px);
      }

      svg {
        fill: $white;
      }

      &:first-child {
        margin-bottom: 6px;
      }
    }
  }
}
</style>
