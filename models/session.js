class Session {
  constructor(id, planId, date) {
    this.id = id;
    this.planId = planId;
    this.date = date; // Should be a JavaScript Date object
  }
}

module.exports = Session;