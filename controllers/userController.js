// controllers/userController.js
const MockingDatabase = require('../mock/mockingDatabase');
const db = MockingDatabase.getInstance();

exports.get = async (req, res) => {
  try {
    let userData;

    if ('id' in req.query) {
      userData = db.users.find(u => u.id === req.query.id);
    }
    else if ('username' in req.query) {
      userData = db.users.find(u => u.username === req.query.username);
    }
    else {
      userData = db.users;
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
    newUser.id = db.users.length + 1;
    db.users.push(newUser);
    res.status(201).send(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.update = async (req, res) => {
  try {
    const newUser = req.body;
    const index = db.users.findIndex(u => u.id === Number(newUser.id));
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

exports.login = async (req, res) => {
  try {
    const index = db.users.findIndex(u => u.username == req.body.username);
    if (index !== -1) {
      const user = db.users[index];
      if (user.password == req.body.password) {
        res.status(200).send({userId: user.id});
        return;
      }
    } 
    res.status(401).send('Wrong Username or Password');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}