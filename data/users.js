const { faker } = require("@faker-js/faker");

let users = [
{
    id: faker.company.buzzVerb(),
    name:faker.person.fullName()

},
{
    id: 'envisioneer',
    name: 'Arlene Jenkins'

}
];



const findAll = () => {
    return users
};

const findById = (id) => {
    return users.find((user) => user.id === id);
};


const add = (user) => {
    const newId = faker.company.buzzVerb();
    const newName = faker.person.fullName();
 

    const newUser = {
      id: newId,
      name: newName
    };
  
    users.push(newUser);
    console.log('New user has been added')
  
    return newUser;


};


const updateById = (id, updateInfo) => {
    const found = users.some((user) => user.id === id);
    if (found) {
      users.name = updateInfo.name;
      console.log("user has been updated");
      return users;
    } else {
      console.log("user not found");
      return users;
    }

};

// const updateInfo = {
//     name: "Salvador Dali!",
//   };



const deleteById = (id) => {

    const found = users.some((user) => user.id === id);

    if (found) {
        users.filter((user) => user.id === id)
        console.log("user has been deleted");
        return users;
      } else {
        console.log("user not found. No action taken");
        return users;
      }
};

console.log(deleteById('envisioneer'))

module.exports = { findAll, findById, add, updateById, deleteById, users };
