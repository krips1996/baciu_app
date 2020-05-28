<template>
  <div class="page-sidebar">
    <v-sidebar-design-blog />
    <v-sidebar-recieve-updates />
  </div>
</template>

<script>
import VSidebarDesignBlog from './VSidebarDesignBlog.vue';
import VSidebarRecieveUpdates from './VSidebarRecieveUpdates.vue';

export default {
  name: 'PageSidebar',
  components: {
    VSidebarDesignBlog,
    VSidebarRecieveUpdates
  }
};
</script>

<style lang="scss" scoped>
.page-sidebar {
  position: relative;
  display: block;
  padding: 45px 30px 50px;
  margin: 0;
  border: 1px solid $border-primary-color;
  background-color: $white;
}
</style>
