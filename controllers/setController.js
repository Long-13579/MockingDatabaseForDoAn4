const MockingDatabase = require('../mock/mockingDatabase');
const db = MockingDatabase.getInstance();

exports.get = async (req, res) => {
  try {
    let setData;

    if ('id' in req.query) {
      setData = db.sets.find(s => s.id === Number(req.query.id));
    } 
    else if ('sessionId' in req.query) {
      setData = db.sets.filter(s => s.sessionId === Number(req.query.sessionId));
    }
    else {
      setData = db.sets;
    }

    res.status(200).send(setData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.create = async (req, res) => {
  try {
    const newSet = req.body;
    newSet.id = db.sets.length + 1;
    db.sets.push(newSet);
    res.status(201).send(newSet);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.update = async (req, res) => {
  try {
    const newSet = req.body;
    const index = db.sets.findIndex(s => s.id === Number(newSet.id));
    if (index !== -1) {
      db.sets[index] = { ...db.sets[index], ...req.body };
      res.status(200).send(db.sets[index]);
    } else {
      res.status(404).send('Set not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.delete = async (req, res) => {
  try {
    const index = db.sets.findIndex(s => s.id === Number(req.params.id));
    if (index !== -1) {
      const deleted = db.sets.splice(index, 1);
      res.status(200).send(deleted[0]);
    } else {
      res.status(404).send('Set not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
