import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const doctor = await prisma.doctor.findUnique({
      where: {
        username: body.username,
      },
    });

    if (!doctor) {
      return new Response(JSON.stringify({ error: 'Doctor not found' }), {
        status: 404,
      });
    }

    return Response.json(doctor);
  } catch (err: any) {
    console.error('LOGIN API ERROR:', err);

    return new Response(
      JSON.stringify({ error: 'Internal Server Error', detail: err.message }),
      {
        status: 500,
      }
    );
  }
}

