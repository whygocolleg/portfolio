import { prisma } from '@/lib/prisma';
import ProjectCard from '@/components/ProjectCard';

export const dynamic = 'force-dynamic';

const CATEGORIES = ['ALL', 'WEB', 'MOBILE', 'DESIGN', 'OTHER'] as const;

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const activeCategory = category?.toUpperCase() ?? 'ALL';

  const projects = await prisma.project.findMany({
    where: activeCategory !== 'ALL' ? { category: activeCategory as never } : undefined,
    orderBy: { displayOrder: 'asc' },
  }).catch(() => []);

  return (
    <div className="pt-32 pb-20 max-w-[1440px] mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-[64px] font-bold mb-4">
          <span className="text-glow text-neon-purple">Projects</span>
        </h1>
        <p className="text-text-variant text-lg">진행한 프로젝트 목록입니다.</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {CATEGORIES.map((cat) => {
          const isActive = cat === activeCategory;
          return (
            <a
              key={cat}
              href={cat === 'ALL' ? '/projects' : `/projects?category=${cat.toLowerCase()}`}
              className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 border ${
                isActive
                  ? 'bg-neon-purple text-white border-neon-purple shadow-[0_0_15px_rgba(188,19,254,0.4)]'
                  : 'glass-surface text-text-variant border-white/10 hover:border-neon-purple/30'
              }`}
            >
              {cat}
            </a>
          );
        })}
      </div>

      {projects.length === 0 ? (
        <p className="text-center text-text-variant py-20">프로젝트가 없습니다.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
