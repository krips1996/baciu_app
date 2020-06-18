<template>
  <div class="container content">
    <div class="row">
      <div class="col-12"><admin-page /></div>
    </div>
  </div>
</template>

<script>
import AdminPage from './AdminPage.vue';

export default {
  name: 'TheContent',
  components: {
    AdminPage
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding-top: 22px;
}
</style>
