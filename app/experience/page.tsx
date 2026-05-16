import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

function formatDate(date: Date) {
  return date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long' });
}

export default async function ExperiencePage() {
  const experiences = await prisma.experience.findMany({
    orderBy: { displayOrder: 'asc' },
  }).catch(() => []);

  const work = experiences.filter((e) => e.type === 'WORK');
  const education = experiences.filter((e) => e.type === 'EDUCATION');

  return (
    <div className="pt-32 pb-20 max-w-[1440px] mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-[64px] font-bold mb-4">
          <span className="text-glow text-neon-purple">Experience</span>
        </h1>
        <p className="text-text-variant text-lg">경력 및 학력 사항입니다.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Work */}
        <div>
          <h2 className="text-2xl font-bold text-electric-cyan cyan-glow mb-8 flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-electric-cyan shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
            Work Experience
          </h2>
          {work.length === 0 ? (
            <p className="text-text-variant">경력 사항이 없습니다.</p>
          ) : (
            <div className="space-y-6">
              {work.map((exp) => (
                <div key={exp.id} className="glass-surface rounded-xl p-6 border-l-2 border-electric-cyan/40">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-text-main">{exp.role}</h3>
                      <p className="text-electric-cyan text-sm">{exp.organization}</p>
                    </div>
                    <span className="text-xs text-text-variant bg-surface-container-high px-3 py-1 rounded-full">
                      {formatDate(exp.startDate)} — {exp.endDate ? formatDate(exp.endDate) : '현재'}
                    </span>
                  </div>
                  {exp.location && <p className="text-text-variant text-xs mb-3">{exp.location}</p>}
                  <ul className="space-y-1">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-text-variant text-sm flex gap-2">
                        <span className="text-neon-purple mt-1">·</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-bold text-neon-purple-dim text-glow mb-8 flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-neon-purple shadow-[0_0_10px_rgba(188,19,254,0.8)]" />
            Education
          </h2>
          {education.length === 0 ? (
            <p className="text-text-variant">학력 사항이 없습니다.</p>
          ) : (
            <div className="space-y-6">
              {education.map((exp) => (
                <div key={exp.id} className="glass-surface rounded-xl p-6 border-l-2 border-neon-purple/40">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-text-main">{exp.role}</h3>
                      <p className="text-neon-purple-dim text-sm">{exp.organization}</p>
                    </div>
                    <span className="text-xs text-text-variant bg-surface-container-high px-3 py-1 rounded-full">
                      {formatDate(exp.startDate)} — {exp.endDate ? formatDate(exp.endDate) : '재학중'}
                    </span>
                  </div>
                  {exp.location && <p className="text-text-variant text-xs mb-3">{exp.location}</p>}
                  <ul className="space-y-1">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-text-variant text-sm flex gap-2">
                        <span className="text-neon-purple mt-1">·</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
