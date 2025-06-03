class User {
  constructor(id, username, password, fullName, email, phoneNumber, dateOfBirth, gender) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.fullName = fullName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
  }
}

module.exports = User;