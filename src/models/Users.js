class Users {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  getUser(id) {
    return this.users.find((user) => user.id === id);
  }

  removeUser(id) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      return this.users.splice(userIndex, 1)[0];
    }
  }

  getAllUsers() {
    return this.users;
  }
}

export default Users;
