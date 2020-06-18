import Vue from 'vue';

const paramsTemplate = {
  data: [],
  stripe: true,
  edit: { row: 'all' }
};

// eslint-disable-next-line import/prefer-default-export
export const Store = new Vue({
  data: {
    user: {
      userName: '',
      password: ''
    },
    users: [
      {
        userName: 'admin',
        password: 'admin',
        type: 'admin',
        users: [
          {
            city: 'Chisinau',
            birthDate: '12/06/1994',
            department: 'Department',
            function: 'Function',
            email: 'email@mail.com',
            phoneNumber: '068123123',
            username: 'admin',
            password: 'password'
          },
          {
            city: 'Chisinau',
            birthDate: '12/06/1994',
            department: 'Department',
            function: 'Function',
            email: 'email@mail.com',
            phoneNumber: '068123123',
            username: 'depozitor',
            password: 'password'
          },
          {
            city: 'Chisinau',
            birthDate: '12/06/1994',
            department: 'Department',
            function: 'Function',
            email: 'email@mail.com',
            phoneNumber: '068123123',
            username: 'manager',
            password: 'password'
          },
          {
            city: 'Chisinau',
            birthDate: '12/06/1994',
            department: 'Department',
            function: 'Function',
            email: 'email@mail.com',
            phoneNumber: '068123123',
            username: 'vinzator',
            password: 'password'
          }
        ],
        todos: [{ item: 'I need to check the new updates 1' }],
        params: {
          data: [
            ['Index', 'Data1', 'Data2', 'Data3'],
            [1, 'b3ba90', '7c95f7', '9a3853'],
            [2, 'ec0b78', 'ba045d', 'ecf03c'],
            [3, '63788d', 'a8c325', 'aab418']
          ],
          stripe: true,
          edit: { row: 'all' }
        }
      },
      {
        userName: 'depozitor',
        password: 'password',
        type: 'depozitor',
        users: [
          {
            city: 'Chisinau',
            birthDate: '12/06/1994',
            department: 'Department',
            function: 'Function',
            email: 'email@mail.com',
            phoneNumber: '068123123',
            username: 'depozitor',
            password: 'password'
          }
        ],
        todos: [{ item: 'I need to check the new updates 2' }],
        params: {
          data: [
            ['Index', 'Data1', 'Data2', 'Data3'],
            [1, 'b3ba90', '7c95f7', '9a3853'],
            [2, 'ec0b78', 'ba045d', 'ecf03c'],
            [3, '63788d', 'a8c325', 'aab418']
          ],
          stripe: true,
          edit: { row: 'all' }
        },
        updates: {
          params: {
            data: [],
            stripe: true,
            edit: { row: 'all' }
          },
          rights: ['manager']
        },
        notification: ''
      },
      {
        userName: 'manager',
        password: 'password',
        type: 'manager',
        users: [
          {
            city: 'Chisinau',
            birthDate: '12/06/1994',
            department: 'Department',
            function: 'Function',
            email: 'email@mail.com',
            phoneNumber: '068123123',
            username: 'manager',
            password: 'password'
          }
        ],
        todos: [{ item: 'I need to check the new updates 3' }],
        params: {
          data: [
            ['Index', 'Data1', 'Data2', 'Data3'],
            [1, 'b3ba90', '7c95f7', '9a3853'],
            [2, 'ec0b78', 'ba045d', 'ecf03c'],
            [3, '63788d', 'a8c325', 'aab418']
          ],
          stripe: true,
          edit: { row: 'all' }
        }
      },
      {
        userName: 'vinzator',
        password: 'password',
        type: 'vinzator',
        users: [
          {
            city: 'Chisinau',
            birthDate: '12/06/1994',
            department: 'Department',
            function: 'Function',
            email: 'email@mail.com',
            phoneNumber: '068123123',
            username: 'vinzator',
            password: 'password'
          }
        ],
        todos: [{ item: 'I need to check the new updates 4' }],
        params: {
          data: [
            ['Index', 'Data1', 'Data2', 'Data3'],
            [1, 'b3ba90', '7c95f7', '9a3853'],
            [2, 'ec0b78', 'ba045d', 'ecf03c'],
            [3, '63788d', 'a8c325', 'aab418']
          ],
          stripe: true,
          edit: { row: 'all' }
        },
        updates: {
          params: {
            data: [],
            stripe: true,
            edit: { row: 'all' }
          },
          rights: ['depozitor']
        },
        notification: ''
      }
    ]
  },
  methods: {
    login({ userName }) {
      this.user = this.users.find(user => user.userName === userName);
    },
    logout() {
      this.user = { userName: '' };
    },
    addUser(user) {
      this.user.users = [user, ...this.user.users];
      this.updateUsers();
    },
    addTodo(todoMessage) {
      this.user.todos = [...this.user.todos, { item: todoMessage }];
      this.updateUsers();
    },
    removeTodo(index) {
      this.user.todos = this.user.todos.splice(index, 1);
      this.updateUsers();
    },
    addTableChanges(tableMatrix) {
      this.user.updates.params.data = tableMatrix;
      this.updateUsers();
    },
    handleTableChanges(userType, type) {
      this.users = this.users.map(user =>
        user.type === userType
          ? {
              ...user,
              params: type === 'approve' ? user.updates.params : user.params,
              updates: { ...user.updates, params: paramsTemplate },
              notification: type
            }
          : user
      );
    },
    toggleNotification() {
      this.user.notification = '';
      this.updateUsers();
    },
    updateUsers() {
      this.users = this.users.map(user => (user.type === this.user.type ? this.user : user));
    }
  },
  computed: {
    usersTables() {
      const filteredUsers = this.users.filter(user => {
        if (
          (user.type === 'manager' || user.type === 'vinzator') &&
          this.user.type === 'depozitor'
        ) {
          return true;
        }
        if (
          (user.type === 'depozitor' || user.type === 'vinzator') &&
          this.user.type === 'manager'
        ) {
          return true;
        }
        if (user.type === 'depozitor' && this.user.type === 'vinzator') {
          return true;
        }
        if (this.user.type === 'admin' && user.type !== 'admin') {
          return true;
        }

        return false;
      });

      return filteredUsers.map(filteredUser => ({
        ...filteredUser,
        params: { ...filteredUser.params, edit: false }
      }));
    }
  }
});
