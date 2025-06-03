class Set {
  constructor(id, sessionId, exerciseId, weight, reps, restTime) {
    this.id = id;
    this.sessionId = sessionId;
    this.exerciseId = exerciseId;
    this.weight = weight;
    this.reps = reps;
    this.restTime = restTime;
  }
}

module.exports = Set;