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
      new User("1", "nam", "Pass1234", "Le Nguyen Nhat Nam", "namle@gmail.com", "099912345", "01/01/1999", "Male"),
      new User("2", "long", "Pass1234", "Nguyen Hoang Long", "longnguyen@gmail.com", "099912345", "12/06/2003", "Male")
    ];
  }

  generateExercises() {
    return [
      new Exercise(1, "Seated Dumbbell Shoulder Press", 
        "A strength exercise for shoulder and triceps development.", 
        "https://www.youtube.com/watch?v=f9fZ9J9GCT8", 
        MuscleEnum.SHOULDERS, MuscleEnum.TRICEPS, null),
      new Exercise(2, "Band Chest Fly", 
        "An isolation chest movement targeting the pectorals and shoulders.", 
        "https://www.youtube.com/watch?v=gdZVKOvWI7I",
        MuscleEnum.CHEST, MuscleEnum.SHOULDERS, null),
      new Exercise(3, "Yoga Warrior I", 
        "A yoga pose that strengthens the legs and glutes.", 
        "https://www.youtube.com/watch?v=5rT--p_cLOc", 
        MuscleEnum.QUADS, MuscleEnum.GLUTES, MuscleEnum.CALVES),
      new Exercise(4, "Barbell Squat", 
        "A compound movement targeting quads, glutes, and hamstrings.", 
        "https://www.youtube.com/watch?v=jKegG3Nmgeg", 
        MuscleEnum.QUADS, MuscleEnum.GLUTES, MuscleEnum.HAMSTRING),
      new Exercise(5, "Deadlift", 
        "Targets back, glutes, hamstrings with classic hinge movement.", 
        "https://www.youtube.com/watch?v=WP0IFHkkRZ0", 
        MuscleEnum.BACK, MuscleEnum.GLUTES, MuscleEnum.HAMSTRING),
      new Exercise(6, "Bench Press", 
        "Targets chest, triceps, and shoulders.", 
        "https://www.youtube.com/watch?v=gRVjAtPip0Y", 
        MuscleEnum.CHEST, MuscleEnum.TRICEPS, MuscleEnum.SHOULDERS),
      new Exercise(7, "Pull Up", 
        "Bodyweight exercise strengthening back and biceps.", 
        "https://www.youtube.com/watch?v=yHuiTeCG4AM", 
        MuscleEnum.BACK, MuscleEnum.BICEPS, MuscleEnum.TRAPS),
      new Exercise(8, "Bicep Curl", 
        "Isolation movement for biceps.", 
        "https://www.youtube.com/watch?v=XE_pHwbst04", 
        MuscleEnum.BICEPS, null, null),
      new Exercise(9, "Tricep Dip", 
        "Targets triceps and chest.", 
        "https://www.youtube.com/watch?v=2z8JmcrW-As", 
        MuscleEnum.TRICEPS, MuscleEnum.CHEST, null),
      new Exercise(10, "Lateral Raise", 
        "Isolation shoulder movement.", 
        "https://www.youtube.com/watch?v=geenhiHju-o", 
        MuscleEnum.SHOULDERS, null, null),
      new Exercise(11, "Plank Row", 
        "Works core and back muscles.", 
        "https://www.youtube.com/watch?v=Gtc_Ns3qYYo", 
        MuscleEnum.BACK, MuscleEnum.SHOULDERS, MuscleEnum.TRICEPS),
      new Exercise(12, "Leg Curl Machine", 
        "Targets the hamstrings.", 
        "https://www.youtube.com/watch?v=t9sTSr-JYSs", 
        MuscleEnum.HAMSTRING, null, null),
      new Exercise(13, "Calf Raise", 
        "Isolation for calves.", 
        "https://www.youtube.com/watch?v=eMTy3qylqnE", 
        MuscleEnum.CALVES, null, null),
      new Exercise(14, "Hip Thrust", 
        "Primarily targets the glutes.", 
        "https://www.youtube.com/watch?v=Zp26q4BY5HE", 
        MuscleEnum.GLUTES, MuscleEnum.HAMSTRING, null),
      new Exercise(15, "Incline Dumbbell Press", 
        "Upper chest and shoulders focus.", 
        "https://www.youtube.com/watch?v=IP4oeKh1Sd4", 
        MuscleEnum.CHEST, MuscleEnum.SHOULDERS, MuscleEnum.TRICEPS),
      new Exercise(16, "Bent‑Over Row", 
        "Strengthens back and biceps.", 
        "https://www.youtube.com/watch?v=FWJR5Ve8bnQ", 
        MuscleEnum.BACK, MuscleEnum.BICEPS, null),
      new Exercise(17, "Face Pull", 
        "Works rear delts and traps.", 
        "https://www.youtube.com/watch?v=0Po47vvj9g4", 
        MuscleEnum.SHOULDERS, MuscleEnum.TRAPS, null),
      new Exercise(18, "Mountain Climbers", 
        "Cardio plus core and legs.", 
        "https://www.youtube.com/watch?v=kLh-uczlPLg", 
        MuscleEnum.QUADS, MuscleEnum.CALVES, MuscleEnum.SHOULDERS),
      new Exercise(19, "Romanian Deadlift", 
        "Hamstring- and glute-focused hinge lift.", 
        "https://www.youtube.com/watch?v=plb5jEO4Unw", 
        MuscleEnum.HAMSTRING, MuscleEnum.GLUTES, MuscleEnum.BACK),
      new Exercise(20, "Overhead Triceps Extension", 
        "Triceps isolation exercise.", 
        "https://www.youtube.com/watch?v=IJ6J7EKprsc", 
        MuscleEnum.TRICEPS, null, null),
      new Exercise(21, "Dumbbell Shrugs", 
        "Focus on trapezius muscles.", 
        "https://www.youtube.com/watch?v=xDt6qbKgLkY", 
        MuscleEnum.TRAPS, null, null),
      new Exercise(22, "Chest Dips", 
        "Targets chest and triceps.", 
        "https://www.youtube.com/watch?v=P9CkuhCc0TE", 
        MuscleEnum.CHEST, MuscleEnum.TRICEPS, null),
      new Exercise(23, "Arnold Press", 
        "All heads of deltoids activation.", 
        "https://www.youtube.com/watch?v=mXRhpXwW-gs", 
        MuscleEnum.SHOULDERS, MuscleEnum.TRICEPS, null),
      new Exercise(24, "Push‑Up", 
        "Bodyweight for chest, shoulders, triceps.", 
        "https://www.youtube.com/watch?v=IODxDxX7oi4", 
        MuscleEnum.CHEST, MuscleEnum.SHOULDERS, MuscleEnum.TRICEPS),
      new Exercise(25, "Goblet Squat", 
        "Targets quads and glutes.", 
        "https://www.youtube.com/watch?v=wzx1t-0RA0k", 
        MuscleEnum.QUADS, MuscleEnum.GLUTES, null),
      new Exercise(26, "Reverse Lunge", 
        "Works quads, glutes, hamstrings.", 
        "https://www.youtube.com/watch?v=xrPteyQLGAo", 
        MuscleEnum.QUADS, MuscleEnum.GLUTES, MuscleEnum.HAMSTRING),
      new Exercise(27, "Cable Crossover", 
        "Chest isolation using cables.", 
        "https://www.youtube.com/watch?v=taI4XduLpTk", 
        MuscleEnum.CHEST, MuscleEnum.SHOULDERS, null),
      new Exercise(28, "Russian Twist", 
        "Core‑focused rotational movement.", 
        "https://www.youtube.com/watch?v=nhFynCkYtD4", 
        MuscleEnum.BACK, null, null),
      new Exercise(29, "Front Raise", 
        "Targets anterior deltoids.", 
        "https://www.youtube.com/watch?v=gzDawZwDC6Y", 
        MuscleEnum.SHOULDERS, null, null),
      new Exercise(30, "Zottman Curl", 
        "Biceps and forearms curl variation.", 
        "https://www.youtube.com/watch?v=hUA-fIpM7nA", 
        MuscleEnum.BICEPS, null, null),
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
    return [new Plan(1, 1, "Build muscle"), new Plan(2, 1, "Loss weight"), new Plan(3, 2, "Yoga")];
  }

  generateSessions() {
    const today = new Date();
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 1);

    return [new Session(1, 1, today), new Session(2, 2, today), new Session(3, 1, nextDay), new Session(4, 3, today)];
  }

  generateSets() {
    return [
      new Set(1, 1, 1, 10, 12, 3, false),
      new Set(2, 1, 1, 15, 12, 3, false),
      new Set(3, 1, 1, 20, 12, 3, false),
      new Set(4, 1, 2, 10, 12, 3, false),
      new Set(5, 1, 2, 15, 12, 3, false),
      new Set(6, 1, 2, 20, 12, 3, false),
      new Set(7, 2, 3, 0, 12, 3, false),
      new Set(8, 2, 3, 0, 12, 3, false),
      new Set(9, 2, 3, 0, 12, 3, false),
      new Set(10, 3, 1, 10, 12, 3, false),
      new Set(11, 3, 1, 15, 12, 3, false),
      new Set(12, 3, 1, 20, 12, 3, false),
      new Set(13, 4, 3, 0, 12, 3, false),
      new Set(14, 4, 3, 0, 12, 3, false),
      new Set(15, 4, 3, 0, 12, 3, false)
    ];
  }
}

module.exports = MockingDatabase;
