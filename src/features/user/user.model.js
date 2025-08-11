export default class UserModel {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static userSignUp(name, email, password) {
    const newUser = new UserModel(users.length + 1, name, email, password);

    users.push(newUser);

    return newUser;
  }

  static userLogin(email, password) {
    const user = users.find(
      (user) => user.email == email && user.password == password
    );

    return user;
  }

  static getAllUsers() {
    return users;
  }
}

const users = [
  new UserModel(1, "Alice Johnson", "alice@example.com", "password123"),
  new UserModel(2, "Bob Smith", "bob@example.com", "secret456"),
  new UserModel(3, "Charlie Brown", "charlie@example.com", "pass789"),
  new UserModel(4, "Diana Prince", "diana@example.com", "wonderwoman"),
  new UserModel(5, "Ethan Hunt", "ethan@example.com", "impossible"),
];
