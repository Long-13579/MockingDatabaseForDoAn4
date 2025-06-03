// models/index.js
const User = require('./user');
const Exercise = require('./exercise');
const Plan = require('./plan');
const Session = require('./session');
const Set = require('./set');
const BodyTrack = require('./bodyTrack');

module.exports = {
  User,
  Exercise,
  Plan,
  Session,
  Set,
  BodyTrack
};
