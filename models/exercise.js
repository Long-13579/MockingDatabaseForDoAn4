class Exercise {
  constructor(id, name, description, videoUrl, targetMuscle1, targetMuscle2, targetMuscle3) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.videoUrl = videoUrl;
    this.targetMuscle1 = targetMuscle1;
    this.targetMuscle2 = targetMuscle2;
    this.targetMuscle3 = targetMuscle3;
  }
}

module.exports = Exercise;