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
    update: {
      title: 'AI 소비 예측 기반 개인 금융 관리 웹앱',
      description: '국민카드 실제 결제내역 데이터를 수집하고 scikit-learn ML 모델로 오늘의 예상 소비를 예측해 절약 목표에 연동하는 금융 웹앱입니다.',
      longDescription: '졸업작품으로 개발한 AI 기반 개인 금융 관리 서비스입니다.\n\n국민카드에서 발급한 실제 결제내역 엑셀 파일을 수집하고, Python scikit-learn으로 개인 소비 패턴 예측 모델을 구현했습니다. 학습된 모델이 오늘 지출 가능성이 높은 항목을 미리 예측해 화면에 표시하고, 사용자가 실제로 절약했을 때 저축 목표에 즉시 반영되는 흐름을 설계했습니다.\n\n프론트엔드 전체(5개 화면)를 바닐라 JavaScript ES Modules로 구현했으며, 상태 관리, API 연동, Skeleton UI, Toast 알림, 슬라이드 화면 전환 등을 직접 설계했습니다. Chart.js를 활용한 카테고리별 소비 통계 시각화와 D-day 기반 하루 절약 목표 안내 기능도 포함합니다.',
      techStack: ['JavaScript', 'Python', 'scikit-learn', 'Chart.js', 'NestJS', 'PostgreSQL', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/whygocolleg/financeappFRONT',
      liveUrl: 'https://whygocolleg.github.io/financeappFRONT/',
    },
    create: {
      slug: 'finance-app',
      title: 'AI 소비 예측 기반 개인 금융 관리 웹앱',
      description: '국민카드 실제 결제내역 데이터를 수집하고 scikit-learn ML 모델로 오늘의 예상 소비를 예측해 절약 목표에 연동하는 금융 웹앱입니다.',
      longDescription: '졸업작품으로 개발한 AI 기반 개인 금융 관리 서비스입니다.\n\n국민카드에서 발급한 실제 결제내역 엑셀 파일을 수집하고, Python scikit-learn으로 개인 소비 패턴 예측 모델을 구현했습니다. 학습된 모델이 오늘 지출 가능성이 높은 항목을 미리 예측해 화면에 표시하고, 사용자가 실제로 절약했을 때 저축 목표에 즉시 반영되는 흐름을 설계했습니다.\n\n프론트엔드 전체(5개 화면)를 바닐라 JavaScript ES Modules로 구현했으며, 상태 관리, API 연동, Skeleton UI, Toast 알림, 슬라이드 화면 전환 등을 직접 설계했습니다. Chart.js를 활용한 카테고리별 소비 통계 시각화와 D-day 기반 하루 절약 목표 안내 기능도 포함합니다.',
      thumbnail: '/images/projects/finance.jpg',
      category: ProjectCategory.WEB,
      techStack: ['JavaScript', 'Python', 'scikit-learn', 'Chart.js', 'NestJS', 'PostgreSQL', 'HTML', 'CSS'],
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
