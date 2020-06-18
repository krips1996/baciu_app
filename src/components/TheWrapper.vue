<template>
  <div class="wrapper">
    <the-header />
    <template v-if="Boolean(isLoged)">
      <the-content />
    </template>
    <template v-else>
      <login-page />
    </template>
  </div>
</template>

<script>
import TheHeader from './TheHeader.vue';
import TheContent from './TheContent.vue';
import LoginPage from './LoginPage.vue';
// eslint-disable-next-line import/named
import { Store } from '../utils/store/store';

export default {
  name: 'TheWrapper',
  components: {
    TheHeader,
    TheContent,
    LoginPage
  },
  computed: {
    isLoged() {
      return Store.$data.user.userName;
    }
  }
};
</script>

<style lang="scss" scoped></style>
