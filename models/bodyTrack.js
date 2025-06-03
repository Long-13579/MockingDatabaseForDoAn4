class BodyTrack {
  constructor(id, height, weight, date, userId) {
    this.id = id;
    this.height = height;
    this.weight = weight;
    this.date = date; // Should be a JavaScript Date object
    this.userId = userId;
  }
}

module.exports = BodyTrack;