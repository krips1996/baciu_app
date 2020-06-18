<template>
  <div class="user-table">
    <template v-if="user.notification">
      <div :class="['notification', user.notification]">
        {{
          user.notification === 'approve'
            ? 'Yuor changes was approved!'
            : 'Yuor changes was rejected!'
        }}
        <span class="close-button" @click="handleNotification">x</span>
      </div>
    </template>
    <template v-if="user.type !== 'admin'">
      <vue-table-dynamic :params="params" @cell-change="onCellChange" ref="table">
      </vue-table-dynamic>
    </template>
    <template v-for="(userTable, index) in usersTables">
      <div :key="index">
        <hr />
        <h3>{{ userTable.userName }}</h3>
        <vue-table-dynamic :params="userTable.params" :ref="`table_${index}`"> </vue-table-dynamic>
        <template
          v-if="
            userTable.updates &&
              userTable.updates.params.data.length &&
              userTable.updates.rights.includes(user.type)
          "
        >
          <h3>{{ userTable.userName }}: changes</h3>
          <vue-table-dynamic :params="userTable.updates.params" :ref="`table_updates_${index}`">
          </vue-table-dynamic>
          <button class="approve" @click="handleChoice(userTable.type, 'approve')">Approve</button>
          <button class="reject" @click="handleChoice(userTable.type, 'reject')">Reject</button>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic';
import { Store } from '../utils/store/store';

export default {
  name: 'UserTable',
  components: { VueTableDynamic },
  data() {
    return {};
  },
  methods: {
    onCellChange() {
      // console.log('onCellChange: ', rowIndex, columnIndex, data);
      // console.log('table data: ', this.$refs.table.getData());
      Store.addTableChanges(this.$refs.table.getData());
    },
    handleChoice(userType, type) {
      Store.handleTableChanges(userType, type);
    },
    handleNotification() {
      Store.toggleNotification();
    }
  },
  computed: {
    user() {
      return Store.$data.user;
    },
    params() {
      return Store.$data.user.params;
    },
    usersTables() {
      return Store.usersTables;
    }
  },
  beforeDestroy() {
    if (this.user.notification) {
      this.handleNotification();
    }
  }
};
</script>

<style lang="scss" scoped>
.user-table {
  padding: 30px 0;

  & .notification {
    overflow: hidden;
    position: fixed;
    display: block;
    top: 17vh;
    left: auto;
    right: 50px;
    padding: 5px 40px 7px 13px;
    background: $white;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(153, 182, 208, 0.1), 0 10px 30px 0 rgba(100, 121, 141, 0.1);

    & .close-button {
      position: absolute;
      display: block;
      top: 2px;
      left: auto;
      right: 7px;
      font-size: 18px;
      color: $post-date-color;
      transition: color 0.3s ease-in-out;
      cursor: pointer;

      &:hover {
        color: $orange;
      }
    }

    &::before {
      content: '';
      position: absolute;
      display: block;
      width: 3px;
      height: 100%;
      top: 0;
      left: 0;
    }

    &.approve::before {
      background-color: #0076ff;
    }

    &.reject::before {
      background-color: $orange-dark;
    }
  }

  & button {
    position: relative;
    display: inline-block;
    padding: 4px 10px 8px;
    margin: 0 15px 0 0;
    color: $white;
    background: $grey-dark;
    border: none;
    border-radius: 7px;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

    &.approve {
      background-color: #0076ff;

      &:hover {
        background-color: #3cb2ff;
      }
    }
    &.reject {
      background-color: $orange-dark;

      &:hover {
        background-color: $orange;
      }
    }
  }
}
</style>
