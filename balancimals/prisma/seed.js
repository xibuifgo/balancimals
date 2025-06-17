const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  //Seed Doctors
  const doctor = await prisma.doctor.create({
    data: {
      fname: "Daniel",
      lname: "Peters",
      username: "drpeters",
      password: "secure123",
      email: "peters@clinic.com",
      sharecode: "6ztEFj09"
    }
  });

  // Seed Patients
  const patient = await prisma.patient.create({
    data: {
      fname: "John",
      lname: "Doe",
      height: 160,
      weight: 55,
      birthday: new Date("2000-01-01"),
      difficulty: "medium",
      email: "johndoe@example.com",
      password: "mypassword",
      sharecode: doctor.sharecode,
      gender: "male",
      phone: "+44 6372757193"
    }
  });

  // Seed Poses
  const pose = await prisma.pose.create({
    data: {
      link: "pose_1",
      name: "Tree Pose",
      desc: "Stand on one leg with arms up",
      wake_th: 0.6,
      anger_th: 6
    }
  });

  // Seed GameData
  const game = await prisma.gameData.create({
    data: {
      patient_id: patient.id,
      date: new Date("20-01-2025"),  
      poses: {
        examplePose: "Tree Pose"
      }
    }
  });

  // Seed PoseScore
  await prisma.poseScore.create({
    data: {
      game_id: game.id,
      img_link: pose.link,
      score: BigInt(85),
      DATA: {
        "AcX": [1023, 1024, 1020],
        "AcY": [512, 500, 520],
        "AcZ": [980, 970, 990]
      }
    }
  });
}

main()
  .then(() => {
    console.log("✅ Seeding complete");
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    return prisma.$disconnect();
  });
