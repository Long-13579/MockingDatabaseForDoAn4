class Set {
  constructor(id, sessionId, exerciseId, weight, reps, restTime, isFinish) {
    this.id = id;
    this.sessionId = sessionId;
    this.exerciseId = exerciseId;
    this.weight = weight;
    this.reps = reps;
    this.restTime = restTime;
    this.isFinish = isFinish;
  }
}

module.exports = Set;