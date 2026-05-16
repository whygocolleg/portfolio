import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export default async function Navbar() {
  const profile = await prisma.profile.findFirst().catch(() => null);

  return (
    <nav className="fixed w-full top-0 z-50 glass-surface">
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-neon-purple shadow-[0_0_15px_rgba(188,19,254,0.6)]" />
          <span className="font-space-grotesk font-bold text-xl tracking-wider text-text-main">
            {profile?.name ?? 'Portfolio'}
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-text-variant hover:text-text-main transition-colors text-sm font-medium">Home</Link>
          <Link href="/projects" className="text-text-variant hover:text-text-main transition-colors text-sm font-medium">Projects</Link>
          <Link href="/experience" className="text-text-variant hover:text-text-main transition-colors text-sm font-medium">Experience</Link>
          <Link href="/contact" className="text-text-variant hover:text-text-main transition-colors text-sm font-medium">Contact</Link>
        </div>

        {profile?.githubUrl && (
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neon-purple hover:bg-neon-purple-dim text-white text-sm font-bold py-2 px-5 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(188,19,254,0.4)] hover:shadow-[0_0_25px_rgba(188,19,254,0.7)]"
          >
            GitHub
          </a>
        )}
      </div>
    </nav>
  );
}
