import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category')?.toUpperCase();

  const projects = await prisma.project.findMany({
    where: category ? { category: category as never } : undefined,
    include: { images: true },
    orderBy: { displayOrder: 'asc' },
  });

  return NextResponse.json(projects);
}
