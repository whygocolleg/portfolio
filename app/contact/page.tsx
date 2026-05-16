import { prisma } from '@/lib/prisma';
import ContactForm from '@/components/ContactForm';

export const dynamic = 'force-dynamic';

export default async function ContactPage() {
  const profile = await prisma.profile.findFirst().catch(() => null);

  return (
    <div className="pt-32 pb-20 max-w-[1440px] mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-[64px] font-bold mb-4">
          <span className="text-glow text-neon-purple">Contact</span>
        </h1>
        <p className="text-text-variant text-lg">문의 사항이 있으시면 편하게 연락해주세요.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-text-main mb-4">연락처 정보</h2>
            <p className="text-text-variant leading-relaxed">
              프로젝트 협업, 채용 문의, 또는 기타 궁금한 점이 있으시면 아래 연락처로 문의해주세요.
            </p>
          </div>

          <div className="space-y-4">
            {profile?.email && (
              <div className="glass-surface rounded-xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-neon-purple/10 flex items-center justify-center text-neon-purple font-bold text-sm">@</div>
                <div>
                  <p className="text-xs text-text-variant uppercase tracking-widest mb-1">Email</p>
                  <a href={`mailto:${profile.email}`} className="text-text-main hover:text-electric-cyan transition-colors text-sm">
                    {profile.email}
                  </a>
                </div>
              </div>
            )}
            {profile?.githubUrl && (
              <div className="glass-surface rounded-xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-electric-cyan/10 flex items-center justify-center text-electric-cyan font-bold text-sm">GH</div>
                <div>
                  <p className="text-xs text-text-variant uppercase tracking-widest mb-1">GitHub</p>
                  <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="text-text-main hover:text-electric-cyan transition-colors text-sm">
                    {profile.githubUrl.replace('https://', '')}
                  </a>
                </div>
              </div>
            )}
            {profile?.linkedinUrl && (
              <div className="glass-surface rounded-xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-neon-purple-dim/10 flex items-center justify-center text-neon-purple-dim font-bold text-sm">in</div>
                <div>
                  <p className="text-xs text-text-variant uppercase tracking-widest mb-1">LinkedIn</p>
                  <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer"
                    className="text-text-main hover:text-neon-purple transition-colors text-sm">
                    {profile.linkedinUrl.replace('https://', '')}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Form */}
        <ContactForm />
      </div>
    </div>
  );
}
