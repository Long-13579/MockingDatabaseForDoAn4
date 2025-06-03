const MockingDatabase = require('../mock/mockingDatabase');
const db = MockingDatabase.getInstance();

exports.get = async (req, res) => {
  try {
    let exerciseData;

    switch (req.query.type) {
      case 'id':
        exerciseData = db.exercises.find(e => e.id === Number(req.query.id));
        break;
      default:
        exerciseData = db.exercises;
        break;
    }

    res.status(200).send(exerciseData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.create = async (req, res) => {
  try {
    const newExercise = req.body;
    db.exercises.push(newExercise);
    res.status(201).send(newExercise);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.update = async (req, res) => {
  try {
    const index = db.exercises.findIndex(e => e.id === Number(req.params.id));
    if (index !== -1) {
      db.exercises[index] = { ...db.exercises[index], ...req.body };
      res.status(200).send(db.exercises[index]);
    } else {
      res.status(404).send('Exercise not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.delete = async (req, res) => {
  try {
    const index = db.exercises.findIndex(e => e.id === Number(req.params.id));
    if (index !== -1) {
      const deleted = db.exercises.splice(index, 1);
      res.status(200).send(deleted[0]);
    } else {
      res.status(404).send('Exercise not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
