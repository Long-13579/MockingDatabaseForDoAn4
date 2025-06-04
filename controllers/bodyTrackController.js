const MockingDatabase = require('../mock/mockingDatabase');
const db = MockingDatabase.getInstance();

exports.get = async (req, res) => {
  try {
    let bodyTrackData;

    switch (req.query.type) {
      case 'id':
        bodyTrackData = db.bodyTracks.find(t => t.id === Number(req.query.id));
        break;
      case 'userId':
        bodyTrackData = db.bodyTracks.filter(t => t.userId === Number(req.query.userId));
        break;
      default:
        bodyTrackData = db.bodyTracks;
        break;
    }

    res.status(200).send(bodyTrackData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.create = async (req, res) => {
  try {
    const newTrack = req.body;
    newTrack.id = db.bodyTracks.length;
    db.bodyTracks.push(newTrack);
    res.status(201).send(newTrack);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.update = async (req, res) => {
  try {
    const newTrack = req.body;
    const index = db.bodyTracks.findIndex(t => t.id === Number(newTrack.id));
    if (index !== -1) {
      db.bodyTracks[index] = { ...db.bodyTracks[index], ...req.body };
      res.status(200).send(db.bodyTracks[index]);
    } else {
      res.status(404).send('BodyTrack not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.delete = async (req, res) => {
  try {
    const index = db.bodyTracks.findIndex(t => t.id === Number(req.params.id));
    if (index !== -1) {
      const deleted = db.bodyTracks.splice(index, 1);
      res.status(200).send(deleted[0]);
    } else {
      res.status(404).send('BodyTrack not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
