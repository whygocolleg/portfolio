import { PrismaClient, ProjectCategory, SkillCategory, ExperienceType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Profile
  await prisma.profile.upsert({
    where: { email: 'ghdcksdnd11@gmail.com' },
    update: {
      name: '홍찬웅',
      greeting: '안녕하세요!',
      title: 'Full Stack Developer',
      bio: [
        'Next.js와 TypeScript를 주로 사용하는 풀스택 개발자입니다.',
        '사용자 경험을 중시하며, 클린하고 유지보수 가능한 코드를 지향합니다.',
        '새로운 기술을 배우고 실제 문제를 해결하는 것을 즐깁니다.',
        '꾸준한 운동을 통해 체력도 챙기는 개발자입니다.'
      ],
      location: 'Seoul, South Korea',
      resumeUrl: '/resume.pdf',
      profileImage: '/images/profile.jpg',
      githubUrl: 'https://github.com/whygocolleg',
      linkedinUrl: null,
    },
    create: {
      name: '홍찬웅',
      greeting: '안녕하세요!',
      title: 'Full Stack Developer',
      bio: [
        'Next.js와 TypeScript를 주로 사용하는 풀스택 개발자입니다.',
        '사용자 경험을 중시하며, 클린하고 유지보수 가능한 코드를 지향합니다.',
        '새로운 기술을 배우고 실제 문제를 해결하는 것을 즐깁니다.',
        '꾸준한 운동을 통해 체력도 챙기는 개발자입니다.'
      ],
      email: 'ghdcksdnd11@gmail.com',
      location: 'Seoul, South Korea',
      resumeUrl: '/resume.pdf',
      profileImage: '/images/profile.jpg',
      githubUrl: 'https://github.com/whygocolleg',
      linkedinUrl: null,
    },
  });

  // Skills
  await prisma.skill.deleteMany();
  await prisma.skill.createMany({
    data: [
      // Frontend
      { name: 'Next.js', icon: 'nextjs', category: SkillCategory.FRONTEND, proficiency: 75, displayOrder: 1 },
      { name: 'React', icon: 'react', category: SkillCategory.FRONTEND, proficiency: 75, displayOrder: 2 },
      { name: 'TypeScript', icon: 'typescript', category: SkillCategory.FRONTEND, proficiency: 70, displayOrder: 3 },
      { name: 'JavaScript', icon: 'javascript', category: SkillCategory.FRONTEND, proficiency: 75, displayOrder: 4 },
      { name: 'Tailwind CSS', icon: 'tailwind', category: SkillCategory.FRONTEND, proficiency: 75, displayOrder: 5 },
      { name: 'HTML / CSS', icon: 'html', category: SkillCategory.FRONTEND, proficiency: 80, displayOrder: 6 },
      // Backend
      { name: 'Node.js', icon: 'nodejs', category: SkillCategory.BACKEND, proficiency: 60, displayOrder: 7 },
      { name: 'Firebase', icon: 'firebase', category: SkillCategory.BACKEND, proficiency: 70, displayOrder: 8 },
      { name: 'PostgreSQL', icon: 'postgresql', category: SkillCategory.BACKEND, proficiency: 60, displayOrder: 9 },
      { name: 'Prisma', icon: 'prisma', category: SkillCategory.BACKEND, proficiency: 60, displayOrder: 10 },
      // Tools
      { name: 'Git', icon: 'git', category: SkillCategory.TOOLS, proficiency: 75, displayOrder: 11 },
      // Languages (academic)
      { name: 'C', icon: 'c', category: SkillCategory.OTHER, proficiency: 60, displayOrder: 12 },
      { name: 'Python', icon: 'python', category: SkillCategory.OTHER, proficiency: 55, displayOrder: 13 },
      { name: 'Java', icon: 'java', category: SkillCategory.OTHER, proficiency: 50, displayOrder: 14 },
    ],
  });

  // Projects
  const portfolio = await prisma.project.upsert({
    where: { slug: 'portfolio-website' },
    update: {},
    create: {
      slug: 'portfolio-website',
      title: '개인 포트폴리오 웹사이트',
      description: 'Next.js + Prisma + PostgreSQL로 구축한 풀스택 개인 포트폴리오 사이트입니다.',
      longDescription: 'Next.js App Router, Prisma ORM, PostgreSQL을 활용하여 구축한 풀스택 포트폴리오 웹사이트입니다. 글래스모피즘 디자인 시스템과 다크 모드를 적용했습니다.',
      thumbnail: '/images/projects/portfolio.jpg',
      category: ProjectCategory.WEB,
      techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
      githubUrl: 'https://github.com/',
      startDate: new Date('2026-05-01'),
      featured: true,
      displayOrder: 1,
    },
  });

  // 금융 앱 프로젝트
  await prisma.project.upsert({
    where: { slug: 'finance-app' },
    update: {},
    create: {
      slug: 'finance-app',
      title: '금융 소비 패턴 분석 앱',
      description: '사용자의 소비내역을 기반으로 소비패턴을 분석하여 당일 소비를 예측하고 절약을 도와주는 금융 웹앱입니다.',
      longDescription: '졸업작품으로 개발한 금융 웹 애플리케이션입니다. 사용자의 소비내역 데이터를 분석하여 소비 패턴을 파악하고, 하루 단위로 소비를 예측함으로써 절약 목표 달성을 도와줍니다. Firebase를 활용한 실시간 데이터 관리와 인증 기능을 구현했습니다.',
      thumbnail: '/images/projects/finance.jpg',
      category: ProjectCategory.WEB,
      techStack: ['JavaScript', 'TypeScript', 'Firebase', 'CSS', 'HTML'],
      githubUrl: 'https://github.com/whygocolleg/financeappFRONT',
      liveUrl: 'https://whygocolleg.github.io/financeappFRONT/',
      startDate: new Date('2025-09-01'),
      featured: true,
      displayOrder: 2,
    },
  });

  // Experience — 기존 데이터 전부 삭제 후 다시 입력
  await prisma.experience.deleteMany();
  await prisma.experience.createMany({
    data: [
      {
        type: ExperienceType.EDUCATION,
        organization: '홍익대학교 세종캠퍼스',
        role: '소프트웨어융합학과 4학년',
        startDate: new Date('2022-03-01'),
        endDate: null,
        description: ['소프트웨어융합학과 재학 중', '웹 개발 및 풀스택 프로젝트 실습'],
        location: 'Sejong, South Korea',
        displayOrder: 1,
      },
    ],
  });

  console.log('✅ 시드 데이터 삽입 완료');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
