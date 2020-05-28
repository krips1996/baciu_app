<template>
  <div class="continer-fluid">
    <div class="row header">
      <div class="col-3 logo">
        <a href="#" class="logo-text" title="Creative+">Creative<sup class="logo-symbol">+</sup></a>
      </div>
      <div class="col-9 navigation"><the-navigation /></div>
    </div>
  </div>
</template>

<script>
import TheNavigation from './TheNavigation.vue';

export default {
  name: 'TheHeader',
  components: {
    TheNavigation
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  height: 96px;
  background-image: url('../assets/images/image_1.jpeg');
  background-position: center center;
  background-size: cover;

  .logo,
  .navigation {
    position: relative;
    height: 45px;
    color: $text-color-light;
  }

  .logo {
    padding-top: 5px;
    background-color: $primary-color;

    &-text {
      cursor: pointer;
      position: relative;
      display: table;
      padding: 0;
      margin: 0;
      margin-left: 160px;
      color: $text-color-light;
      @include font-details(23px, 400, 'Helvetica');
      text-decoration: none;
    }

    &-symbol {
      position: relative;
      color: #f5937e;
      font-size: 23px;
    }
  }

  .navigation {
    background-color: $grey-dark;
  }
}
</style>
