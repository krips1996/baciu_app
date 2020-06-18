<template>
  <div class="user-page">
    <template v-if="user.type === 'admin'">
      <form>
        <input type="text" name="city" v-model="currentUser.city" placeholder="City" />
        <input
          type="text"
          name="birthDate"
          v-model="currentUser.birthDate"
          placeholder="Birth Date"
        />
        <input
          type="text"
          name="department"
          v-model="currentUser.department"
          placeholder="Department"
        />
        <input type="text" name="function" v-model="currentUser.function" placeholder="Function" />
        <input type="text" name="email" v-model="currentUser.email" placeholder="Email" />
        <input
          type="text"
          name="phoneNumber"
          v-model="currentUser.phoneNumber"
          placeholder="Phone Number"
        />
        <input type="text" name="username" v-model="currentUser.username" placeholder="Username" />
        <input
          type="password"
          name="password"
          v-model="currentUser.password"
          placeholder="Password"
        />
      </form>
      <button @click="addUser">Add User</button>
    </template>

    <div class="users-list">
      <div class="users-list-header">
        <span>City</span>
        <span>Birth Date</span>
        <span>Department</span>
        <span>Function</span>
        <span>Email</span>
        <span>Phone Number</span>
        <span>Username</span>
        <span>Password</span>
      </div>
      <template v-if="users && users.length">
        <div class="users-list-item" v-for="(user, index) in users" :key="index">
          <span>{{ user.city }}</span>
          <span>{{ user.birthDate }}</span>
          <span>{{ user.department }}</span>
          <span>{{ user.function }}</span>
          <span>{{ user.email }}</span>
          <span>{{ user.phoneNumber }}</span>
          <span>{{ user.username }}</span>
          <span>{{ user.password }}</span>
        </div>
      </template>
      <template v-else><span class="empty-list-text">There is no items</span></template>
    </div>
  </div>
</template>

<script>
import { Store } from '../utils/store/store';

const userTemplate = {
  city: '',
  birthDate: '',
  department: '',
  function: '',
  email: '',
  phoneNumber: '',
  username: '',
  password: ''
};
export default {
  name: 'UserManagementUser',
  data() {
    return {
      currentUser: { ...userTemplate }
    };
  },
  methods: {
    addUser() {
      Store.addUser(this.currentUser);
      this.currentUser = { ...userTemplate };
    }
    // editUser(user) {
    //   this.currentUser = { ...user };
    // }
  },
  computed: {
    user() {
      return Store.$data.user;
    },
    users() {
      return Store.$data.user.users;
    }
  }
};
</script>

<style lang="scss" scoped>
.user-page {
  padding-top: 30px;

  & form {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  & input {
    position: relative;
    display: inline-block;
    width: 250px;
    height: 50px;
    padding: 5px;
    margin: 0 10px 10px 0;
    border: 2px solid $grey-dark;
    border-radius: 5px;
    transition: border-color 0.3s ease-in-out;

    &:focus {
      border-color: $orange;
    }
  }

  button {
    position: relative;
    display: table;
    padding: 5px 10px 7px;
    margin: 20px auto 0;
    color: $buton-primary-color;
    background: $grey-dark;
    border: none;
    border-radius: 7px;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

    &:hover {
      color: $white;
      background-color: $orange;
    }
  }

  .users-list {
    margin-top: 30px;

    &-header,
    &-item {
      border-bottom: 1px solid $text-color-dark;

      & span {
        position: relative;
        display: inline-block;
        width: 12%;
        text-align: center;
        font-size: 17px;
        color: $post-description-color;
      }
    }

    &-item {
      position: relative;
      display: block;
      padding: 9px 0 11px;
      margin: 10px 0;
      background: $grey-light;
      border: 1px solid $post-description-color;
      border-radius: 7px;
      transition: border-color 0.3s ease-in-out;
      cursor: pointer;

      & span {
        font-size: 14px;
        color: $text-color-dark;
      }

      &:hover {
        border-color: $orange;
      }
    }
  }
}
</style>
