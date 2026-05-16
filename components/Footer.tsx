import { prisma } from '@/lib/prisma';

export default async function Footer() {
  const profile = await prisma.profile.findFirst().catch(() => null);

  return (
    <footer className="border-t border-white/5 bg-surface-container-lowest pt-12 pb-8 mt-20">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-space-grotesk font-bold text-text-main">
            {profile?.name ?? 'Portfolio'}
          </p>
          <p className="text-text-variant text-sm mt-1">{profile?.title}</p>
        </div>

        <div className="flex items-center space-x-6">
          {profile?.githubUrl && (
            <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer"
              className="text-text-variant hover:text-electric-cyan transition-colors text-sm">
              GitHub
            </a>
          )}
          {profile?.linkedinUrl && (
            <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer"
              className="text-text-variant hover:text-electric-cyan transition-colors text-sm">
              LinkedIn
            </a>
          )}
          {profile?.blogUrl && (
            <a href={profile.blogUrl} target="_blank" rel="noopener noreferrer"
              className="text-text-variant hover:text-electric-cyan transition-colors text-sm">
              Blog
            </a>
          )}
          {profile?.email && (
            <a href={`mailto:${profile.email}`}
              className="text-text-variant hover:text-neon-purple transition-colors text-sm">
              {profile.email}
            </a>
          )}
        </div>

        <p className="text-text-variant text-xs">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
