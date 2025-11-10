const crypto = require("crypto");
const sendEmail = require("../common/resetPasswordMail");
const MockingDatabase = require("../mock/mockingDatabase");
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

    // Check if username already exists
    const existingUser = db.users.find(user => user.username === newUser.username);
    if (existingUser) {
      return res.status(409).send({ message: 'Username already exists' });
    }

    newUser.id = (db.users.length + 1).toString(); // Ensure id is a string
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
    const index = db.users.findIndex(u => u.id == Number(newUser.id));
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
        res.status(200).send({userId: user.id, fullName: user.fullName});
        return;
      }
    } 
    res.status(401).send('Wrong Username or Password');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}


// Helper to generate random password
const generateRandomPassword = (length = 10) => {
  return crypto.randomBytes(length)
    .toString("base64")  // gives random characters
    .slice(0, length)    // trim to exact length
    .replace(/\//g, "A") // remove any `/` from base64
    .replace(/\+/g, "B"); // remove any `+`
};

exports.resetPassword = async (req, res) => {
  try {
    const { username } = req.body;

    // 1️⃣ Find user
    const user = db.users.find(u => u.username == username);
    if (!user) return res.status(404).send("User not found");

    // 2️⃣ Generate random password
    const newPassword = generateRandomPassword(12);

    user.password = newPassword;

    // 4️⃣ Send email
    await sendEmail(user.email, user.fullName, newPassword)

    // 5️⃣ Respond to client
    res.status(200).send("Password reset and email sent successfully.");
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).send("Failed to reset password.");
  }
};
