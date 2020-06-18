<template>
  <div class="login-page">
    <form>
      <input
        name="username"
        title="username"
        type="text"
        v-model="userName"
        placeholder="Username"
      />
      <input
        name="password"
        title="password"
        type="password"
        v-model="password"
        placeholder="Password"
      />
      <button type="submit" title="submit" @click="onSubmit">Submit</button>
    </form>
  </div>
</template>

<script>
// eslint-disable-next-line import/named
import { Store } from '../utils/store/store';

export default {
  name: 'LoginPage',
  data() {
    return {
      userName: '',
      password: ''
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const { userName, password } = this;
      Store.login({ userName, password });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-page {
  padding-top: 150px;

  & input {
    position: relative;
    display: block;
    width: 250px;
    height: 50px;
    padding: 5px;
    margin: 10px auto;
    border: 2px solid $grey-dark;
    border-radius: 5px;
    transition: border-color 0.3s ease-in-out;

    &:focus {
      border-color: $orange;
    }
  }

  & button {
    position: relative;
    display: table;
    padding: 7px 10px;
    margin: 0 auto;
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
}
</style>
