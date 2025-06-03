// controllers/userController.js
const MockingDatabase = require('../mock/mockingDatabase');
const db = MockingDatabase.getInstance();

exports.get = async (req, res) => {
  console.log('get user');
  try {
    let userData;

    switch (req.query.type) {
      case 'id':
        userData = db.users.find(u => u.id === req.query.id);
        break;
      default:
        userData = db.users;
        break;
    }

    res.status(200).send(userData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.create = async (req, res) => {
  try {
    const newUser = req.body;
    db.users.push(newUser);
    res.status(201).send(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.update = async (req, res) => {
  try {
    const index = db.users.findIndex(u => u.id === req.params.id);
    if (index !== -1) {
      db.users[index] = { ...db.users[index], ...req.body };
      res.status(200).send(db.users[index]);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.delete = async (req, res) => {
  try {
    const index = db.users.findIndex(u => u.id === req.params.id);
    if (index !== -1) {
      const deleted = db.users.splice(index, 1);
      res.status(200).send(deleted[0]);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
