'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type { Project } from '@prisma/client';

const CATEGORY_LABEL: Record<string, string> = {
  WEB: 'Web',
  MOBILE: 'Mobile',
  DESIGN: 'Design',
  OTHER: 'Other',
};

export default function ProjectCard({ project }: { project: Project }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/projects/${project.slug}`)}
      className="glass-surface rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full flex flex-col"
    >
      {/* 썸네일 */}
      <div className="relative h-48 bg-surface-container-low overflow-hidden">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-neon-purple/20 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-neon-purple/40" />
            </div>
          </div>
        )}
        <span className="absolute top-3 right-3 text-xs font-bold uppercase tracking-widest bg-surface-container/80 text-electric-cyan px-3 py-1 rounded-full border border-electric-cyan/20">
          {CATEGORY_LABEL[project.category]}
        </span>
      </div>

      {/* 내용 */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-text-main mb-2 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-text-variant text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* 기술 스택 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="text-xs bg-surface-container-high text-text-variant px-2 py-1 rounded-md border border-white/5">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-xs text-text-variant px-2 py-1">+{project.techStack.length - 4}</span>
          )}
        </div>

        {/* 링크 */}
        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-xs text-text-variant hover:text-electric-cyan transition-colors"
            >
              GitHub →
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-xs text-text-variant hover:text-neon-purple transition-colors"
            >
              Live →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
