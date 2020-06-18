<template>
  <div class="admin-page">
    <vue-tabs active-tab-color="#F26C4F" active-text-color="#FFFFFF">
      <v-tab title="Users">
        <user-management-user />
      </v-tab>

      <v-tab title="Calendar">
        <user-calendar />
      </v-tab>

      <v-tab title="Notes">
        <user-notes />
      </v-tab>
      <v-tab title="Departments">
        <user-table />
      </v-tab>
    </vue-tabs>
  </div>
</template>

<script>
import { VueTabs, VTab } from 'vue-nav-tabs';
import UserNotes from './UserNotes.vue';
import UserTable from './UserTable.vue';
import UserManagementUser from './UserManagementUser.vue';
import UserCalendar from './UserCalendar.vue';
import 'vue-nav-tabs/themes/vue-tabs.css';

export default {
  name: 'AdminPage',
  components: {
    VueTabs,
    VTab,
    UserNotes,
    UserTable,
    UserManagementUser,
    UserCalendar
  }
};
</script>

<style lang="scss">
.admin-page {
  & .vue-tabs {
    & .nav-tabs {
      border-color: rgba($text-color-dark, 0.2);
    }

    & .tabs__link {
      transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;

      & .title {
        transition: color 0.3s ease-in-out;
      }

      &:hover {
        border-color: $orange;
      }
    }
  }
}
</style>
