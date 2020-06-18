<template>
  <div class="continer-fluid">
    <div class="row header">
      <div class="col-3 logo">
        <a href="#" class="logo-text" title="Creative+"> SCICS<sup class="logo-symbol">+</sup> </a>
      </div>
      <div class="col-9 navigation">
        <template v-if="user.type"><button @click="logout">logout</button></template>
      </div>
    </div>
  </div>
</template>

<script>
import { Store } from '../utils/store/store';

export default {
  name: 'TheHeader',
  methods: {
    logout() {
      Store.logout();
    }
  },
  computed: {
    user() {
      return Store.$data.user;
    }
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
    padding-right: 45px;
    color: $text-color-light;

    & > button {
      float: right;
      outline: none;
      margin-top: 8px;
      border: none;
      background-color: transparent;
      color: $white;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: $orange;
      }
    }
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
