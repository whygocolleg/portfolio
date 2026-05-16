import Image from 'next/image';
import Link from 'next/link';
import type { Skill, Project } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import ProjectCard from '@/components/ProjectCard';

export const dynamic = 'force-dynamic';

const SKILL_CATEGORY_LABEL: Record<string, string> = {
  FRONTEND: 'Frontend',
  BACKEND: 'Backend',
  DEVOPS: 'DevOps',
  TOOLS: 'Tools',
  OTHER: 'Other',
};

export default async function HomePage() {
  const [profile, skills, featuredProjects] = await Promise.all([
    prisma.profile.findFirst().catch(() => null),
    prisma.skill.findMany({ orderBy: { displayOrder: 'asc' } }).catch((): Skill[] => []),
    prisma.project.findMany({
      where: { featured: true },
      orderBy: { displayOrder: 'asc' },
      take: 3,
    }).catch((): Project[] => []),
  ]);

  const skillsByCategory = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-neon-purple/5 blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-electric-cyan/5 blur-[100px] -z-10 pointer-events-none" />

        <div className="max-w-[1440px] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8 z-10">
            <div className="inline-flex items-center space-x-2 bg-surface-container-low border border-outline/30 rounded-full px-4 py-1.5 w-fit">
              <span className="w-2 h-2 rounded-full bg-electric-cyan shadow-[0_0_8px_rgba(0,240,255,0.8)] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-text-variant">
                {profile?.location ?? 'Open to Work'}
              </span>
            </div>

            <div>
              <p className="text-text-variant text-lg mb-2">{profile?.greeting ?? '안녕하세요!'}</p>
              <h1 className="text-5xl md:text-[64px] font-bold leading-[1.1] tracking-[-0.02em]">
                <span className="text-glow text-neon-purple">{profile?.name ?? '홍길동'}</span>
              </h1>
              <p className="text-2xl text-electric-cyan cyan-glow mt-3">{profile?.title ?? 'Full Stack Developer'}</p>
            </div>

            <div className="space-y-2">
              {profile?.bio.map((line, i) => (
                <p key={i} className="text-text-variant leading-relaxed">{line}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/projects"
                className="bg-neon-purple hover:bg-neon-purple-dim text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(188,19,254,0.4)] hover:shadow-[0_0_30px_rgba(188,19,254,0.7)] hover:-translate-y-0.5"
              >
                프로젝트 보기
              </Link>
              <Link
                href="/contact"
                className="glass-surface hover:bg-surface-container text-text-main font-medium py-3 px-8 rounded-lg transition-all duration-300 border border-outline/20 hover:border-outline/50"
              >
                연락하기
              </Link>
            </div>
          </div>

          {profile?.profileImage && (
            <div className="relative z-10 flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 rounded-full glass-floating overflow-hidden animate-[float_6s_ease-in-out_infinite]">
                <Image src={profile.profileImage} alt={profile.name} fill className="object-cover" />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Skills */}
      {skills.length > 0 && (
        <section className="py-24 max-w-[1440px] mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-electric-cyan">Stack</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category} className="glass-surface rounded-xl p-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-electric-cyan mb-4">
                  {SKILL_CATEGORY_LABEL[category] ?? category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <span key={skill.id} className="bg-surface-container-high text-text-main text-sm px-3 py-1.5 rounded-lg border border-white/5 hover:border-neon-purple/30 transition-colors">
                      {skill.name}
                      {skill.proficiency && (
                        <span className="ml-1 text-text-variant text-xs">{skill.proficiency}%</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-24 max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-electric-cyan">Projects</span>
            </h2>
            <p className="text-text-variant">대표 프로젝트 모음</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="glass-surface hover:bg-surface-container text-text-main font-medium py-3 px-8 rounded-lg transition-all duration-300 border border-outline/20 hover:border-neon-purple/30"
            >
              전체 프로젝트 보기 →
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
