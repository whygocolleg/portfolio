import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = await prisma.project.findUnique({
    where: { slug },
    include: { images: { orderBy: { displayOrder: 'asc' } } },
  });

  if (!project) notFound();

  const startYear = project.startDate.getFullYear();
  const endYear = project.endDate?.getFullYear() ?? '현재';

  return (
    <div className="pt-32 pb-20 max-w-[1440px] mx-auto px-6">
      <Link href="/projects" className="inline-flex items-center text-text-variant hover:text-electric-cyan transition-colors text-sm mb-8">
        ← 프로젝트 목록으로
      </Link>

      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-electric-cyan">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-text-main mt-2 mb-4">{project.title}</h1>
          <p className="text-text-variant text-lg leading-relaxed mb-6">{project.description}</p>
          <p className="text-text-variant text-sm mb-8">{startYear} — {endYear}</p>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.techStack.map((tech) => (
              <span key={tech} className="text-sm bg-surface-container-high text-text-main px-3 py-1.5 rounded-lg border border-white/5">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neon-purple hover:bg-neon-purple-dim text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(188,19,254,0.4)] hover:shadow-[0_0_25px_rgba(188,19,254,0.7)]"
              >
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-surface hover:bg-surface-container text-text-main font-medium py-3 px-6 rounded-lg transition-all duration-300 border border-outline/20 hover:border-electric-cyan/30"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>

        {project.thumbnail && (
          <div className="relative h-72 rounded-xl overflow-hidden glass-floating">
            <Image src={project.thumbnail} alt={project.title} fill className="object-cover" />
          </div>
        )}
      </div>

      {/* Long Description */}
      {project.longDescription && (
        <div className="glass-surface rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-text-main mb-4">프로젝트 상세</h2>
          <p className="text-text-variant leading-relaxed whitespace-pre-line">{project.longDescription}</p>
        </div>
      )}

      {/* Image Gallery */}
      {project.images.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-text-main mb-6">스크린샷</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((img) => (
              <div key={img.id} className="relative h-56 rounded-xl overflow-hidden glass-floating">
                <Image src={img.imageUrl} alt={img.caption ?? project.title} fill className="object-cover" />
                {img.caption && (
                  <p className="absolute bottom-0 left-0 right-0 bg-surface-container/80 text-text-variant text-xs px-4 py-2">
                    {img.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
