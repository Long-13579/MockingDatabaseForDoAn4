const MockingDatabase = require('../mock/mockingDatabase');
const db = MockingDatabase.getInstance();

exports.get = async (req, res) => {
  try {
    let planData;

    if ('id' in req.query) {
      planData = db.plans.find(p => p.id === Number(req.query.id));
    } 
    else if ('userId' in req.query) {
      planData = db.plans.filter(p => p.userId === Number(req.query.userId));
    }
    else {
      planData = db.plans;
    }

    res.status(200).send(planData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.create = async (req, res) => {
  try {
    const newPlan = req.body;
    newPlan.id = db.plans.length + 1;
    db.plans.push(newPlan);
    res.status(201).send(newPlan);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.update = async (req, res) => {
  try {
    const newPlan = req.body;
    const index = db.plans.findIndex(p => p.id === Number(newPlan.id));
    if (index !== -1) {
      db.plans[index] = { ...db.plans[index], ...req.body };
      res.status(200).send(db.plans[index]);
    } else {
      res.status(404).send('Plan not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.delete = async (req, res) => {
  try {
    const index = db.plans.findIndex(p => p.id === Number(req.params.id));
    if (index !== -1) {
      const deleted = db.plans.splice(index, 1);
      res.status(200).send(deleted[0]);
    } else {
      res.status(404).send('Plan not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
