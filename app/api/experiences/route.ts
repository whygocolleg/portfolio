import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const experiences = await prisma.experience.findMany({ orderBy: { displayOrder: 'asc' } });
  return NextResponse.json(experiences);
}
