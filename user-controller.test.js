const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

test('new user is not in the list already', () =>{
  let user = new User(1234,"Santiago", "santiago@generation.org");
  expect(userController.users).not.toContain(user);
})

test('find user by email', () =>{
  let user = new User(1234,"Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.findByEmail( "santiago@generation.org")).toEqual(user);
})

test('find user by id', () =>{
  let user = new User(1234,"Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.findById(1234)).toEqual(user);
})