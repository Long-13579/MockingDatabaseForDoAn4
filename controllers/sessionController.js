const MockingDatabase = require('../mock/mockingDatabase');
const db = MockingDatabase.getInstance();

exports.get = async (req, res) => {
  try {
    let sessionData;

    switch (req.query.type) {
      case 'id':
        sessionData = db.sessions.find(s => s.id === Number(req.query.id));
        break;
      case 'planId':
        sessionData = db.sessions.filter(s => s.planId === Number(req.query.planId));
        break;
      case 'date':
        sessionData = db.sessions.filter(s => new Date(s.date).toDateString() === new Date(req.query.date).toDateString());
        break;
      default:
        sessionData = db.sessions;
        break;
    }

    res.status(200).send(sessionData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.create = async (req, res) => {
  try {
    const newSession = req.body;
    newSession.id = db.sessions.length + 1;
    db.sessions.push(newSession);
    res.status(201).send(newSession);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.update = async (req, res) => {
  try {
    const index = db.sessions.findIndex(s => s.id === Number(req.params.id));
    if (index !== -1) {
      db.sessions[index] = { ...db.sessions[index], ...req.body };
      res.status(200).send(db.sessions[index]);
    } else {
      res.status(404).send('Session not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.delete = async (req, res) => {
  try {
    const index = db.sessions.findIndex(s => s.id === Number(req.params.id));
    if (index !== -1) {
      const deleted = db.sessions.splice(index, 1);
      res.status(200).send(deleted[0]);
    } else {
      res.status(404).send('Session not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
