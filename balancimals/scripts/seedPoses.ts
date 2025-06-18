// scripts/seedPoses.ts
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const poses = [
    {
      link: "heel_raise.png",
      name: "Heel Raise",
      desc: "Stand on one leg with arms overhead.",
      wake_th: 0.6,
      anger_th: 6.0,
    },
    {
      link: "normal_standing_stance.png",
      name: "Normal Stand",
      desc: "Lunge with arms stretched forward.",
      wake_th: 0.3,
      anger_th: 3,
    },
    {
      link: "tandem_stance.png",
      name: "Tandem Stance",
      desc: "Arms and legs spread wide, balance steady.",
      wake_th: 0.5,
      anger_th: 6.5,
    },
    {
      link: "star.png",
      name: "Star Stance",
      desc: "Arms and legs spread wide, balance steady.",
      wake_th: 0.5,
      anger_th: 6.5,
    },
    {
      link: "left_flamingo.png",
      name: "Flamingo Left",
      desc: "Stand on left leg with arms overhead.",
      wake_th: 0.6,
      anger_th: 6.0,
    },
    {
      link: "right_flamingo.png",
      name: "Flamingo Right",
      desc: "Stand on right leg with arms overhead.",
      wake_th: 0.6,
      anger_th: 6.0,
    },
  ]

  for (const pose of poses) {
    await prisma.pose.upsert({
      where: { link: pose.link },
      update: {},
      create: pose,
    })
  }

  console.log("✅ Seeded poses.")
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
