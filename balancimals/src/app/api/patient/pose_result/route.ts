export async function POST(req: Request) {
  try {
    const { patientId, poseId, score, data } = await req.json();

    const result = await prisma.poseResult.create({
      data: {
        patientId,
        poseId,
        score,
        data,  // 💾 stores full dictionary in JSON column
        timestamp: new Date()
      }
    });

    return NextResponse.json({ message: "Stored", result });
  } catch (err) {
    console.error("Pose result store error:", err);
    return NextResponse.json({ message: "Failed to store pose result" }, { status: 500 });
  }
}
