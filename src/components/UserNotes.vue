<template>
  <div class="todo">
    <div class="add">
      <input placeholder="Add note" v-model="message" />
      <button v-on:click="addTodo" />
    </div>
    <div class="show">
      <ul v-if="todos.length > 0">
        <li v-for="(todo, index) in todos" class="active" :key="index">
          <span class="todo-index">{{ index + 1 }}.</span> {{ todo.item }}
          <i class="remove-icon" @click="remove(index)" />
        </li>
      </ul>
      <p v-else>There are no notes</p>
    </div>
  </div>
</template>

<script>
import { Store } from '../utils/store/store';

export default {
  name: 'Todo',
  data() {
    return {
      message: ''
    };
  },
  methods: {
    addTodo() {
      if (this.message.length > 0) {
        Store.addTodo(this.message);
        this.message = '';
      }
      return null;
    },
    remove(index) {
      return Store.removeTodo(index);
    }
  },
  computed: {
    todos() {
      return Store.$data.user.todos;
    }
  }
};
</script>

<style lang="scss" scoped>
.todo {
  padding-top: 30px;
}
.add {
  display: table;
  position: relative;
  width: 350px;
  margin: 0 auto;
  padding-right: 35px;

  & input {
    position: relative;
    display: block;
    width: 100%;
    height: 28px;
    padding-left: 5px;
    margin-top: 1px;
    border: 1px solid $text-color-dark;
    border-radius: 5px;
    transition: border-color 0.3s ease-in-out;

    &:focus {
      border-color: $orange;
    }
  }

  & button {
    display: block;
    position: absolute;
    top: 0;
    right: 24px;
    width: 30px;
    height: 30px;
    background-color: #0076ff;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      display: block;
      width: 11px;
      height: 3px;
      top: 15px;
      right: 10px;
      background: #fff;
    }

    &::after {
      width: 10px;
      height: 2px;
      right: 11px;
      transform: rotate(90deg);
    }

    &:hover {
      background-color: #3cb2ff;
    }
  }
}

.show {
  p {
    text-align: center;
  }
  ul {
    padding: 10px 25px;
    list-style: none;

    li {
      position: relative;
      opacity: 0;
      padding: 10px;
      margin-bottom: 10px;
      color: $grey-dark;
      background: $grey-light;
      border: 1px solid $grey-dark;
      border-radius: 10px;
      transition: opacity 0.3s ease-in-out, border-color 0.3s ease-in-out, color 0.3s ease-in-out;
      cursor: pointer;

      & .todo-index {
        color: #0076ff;
      }

      &.active {
        opacity: 1;
      }

      &:hover {
        border-color: $orange;
      }

      & .remove-icon {
        display: block;
        position: absolute;
        width: 20px;
        height: 20px;
        top: 13px;
        right: 10px;
        border: 1px solid $orange;
        border-radius: 50%;
        transition: background-color 0.3s ease-in-out;
        cursor: pointer;

        &::before {
          content: '';
          position: absolute;
          display: block;
          width: 14px;
          height: 2px;
          top: 8px;
          left: 2px;
          background: $grey-dark;
        }

        &:hover {
          background: $orange;
        }
      }
    }
  }
}
</style>
