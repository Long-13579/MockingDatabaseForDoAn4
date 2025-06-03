const { User, Exercise, Plan, Session, Set, BodyTrack } = require('../models');
const MuscleEnum = require('../common/muscleEnum');

class MockingDatabase {
  constructor() {
    this.users = this.generateUsers();
    this.exercises = this.generateExercises();
    this.bodyTracks = this.generateBodyTracks();
    this.plans = this.generatePlans();
    this.sessions = this.generateSessions();
    this.sets = this.generateSets();
  }

  static getInstance() {
    if (!this.instance) this.instance = new MockingDatabase();
    return this.instance;
  }

  generateUsers() {
    return [
      new User("1", "nam", "Pass1234", "Le Nguyen Nhat Nam", "namle@gmail.com", "099912345", "1999-01-01", "Male"),
      new User("2", "long", "Pass1234", "Nguyen Hoang Long", "longnguyen@gmail.com", "099912345", "1999-01-11", "Male")
    ];
  }

  generateExercises() {
    return [
      new Exercise(1, "Seated Dumbbell Shoulder Press", "A strength exercise...", "https://...", MuscleEnum.SHOULDERS, MuscleEnum.TRICEPS, null),
      new Exercise(2, "Band Chest Fly", "An isolation chest movement...", "https://...", MuscleEnum.CHEST, MuscleEnum.SHOULDERS, null),
      new Exercise(3, "Yoga Warrior I", "A yoga pose...", "https://...", MuscleEnum.QUADS, MuscleEnum.GLUTES, MuscleEnum.CALVES),
    ];
  }

  generateBodyTracks() {
    const list = [];
    for (let i = 1; i <= 10; i++) {
      list.push(new BodyTrack(i, 170 + (i % 3), 60 + i, new Date(Date.now() - i * 86400000), 1));
    }
    return list;
  }

  generatePlans() {
    return [new Plan(1, 1, "Loss weight"), new Plan(2, 1, "Build muscle"), new Plan(3, 2, "Yoga")];
  }

  generateSessions() {
    const today = new Date();
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 1);

    return [new Session(1, 1, today), new Session(2, 2, today), new Session(3, 1, nextDay), new Session(4, 3, today)];
  }

  generateSets() {
    return [
      new Set(1, 1, 1, 10, 12, 3),
      new Set(2, 1, 1, 15, 12, 3),
      new Set(3, 1, 1, 20, 12, 3),
      new Set(4, 1, 2, 10, 12, 3),
      new Set(5, 1, 2, 15, 12, 3),
      new Set(6, 1, 2, 20, 12, 3),
      new Set(7, 2, 3, 0, 12, 3),
      new Set(8, 2, 3, 0, 12, 3),
      new Set(9, 2, 3, 0, 12, 3),
      new Set(10, 3, 1, 10, 12, 3),
      new Set(11, 3, 1, 15, 12, 3),
      new Set(12, 3, 1, 20, 12, 3),
      new Set(13, 4, 3, 0, 12, 3),
      new Set(14, 4, 3, 0, 12, 3),
      new Set(15, 4, 3, 0, 12, 3)
    ];
  }
}

module.exports = MockingDatabase;
