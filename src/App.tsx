import { BoxReveal } from './components/magicui/box-reveal';
import { Ripple } from './components/magicui/ripple';
import { TypingAnimation } from './components/magicui/typing-animation';
import { Navabar } from './components/navbar';
import { IconCloud } from './components/ui/icon-cloud';
import './index.css';
import ProgrammingLab from './components/programming-lab';

const slugs = [
  'typescript',
  'javascript',
  'dart',
  'java',
  'react',
  'flutter',
  'android',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  'amazonaws',
  'postgresql',
  'firebase',
  'nginx',
  'vercel',
  'testinglibrary',
  'jest',
  'cypress',
  'docker',
  'git',
  'jira',
  'github',
  'gitlab',
  'visualstudiocode',
  'androidstudio',
  'sonarqube',
  'figma',
];

function App() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="bg-background flex min-h-screen flex-col">
      <Ripple />
      <Navabar />
      <section className="flex min-h-full w-full grow flex-col items-center justify-center">
        <img
          className="outline-primary mb-4 size-28 overflow-hidden rounded-full object-cover outline-2"
          src="/profile.jpg"
          alt="profile"
        />
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-muted-foreground text-lg font-semibold">
            Hey, I'm KJ!👋
          </p>
          <div>
            <p className="text-8xl font-extrabold">
              <BoxReveal boxColor="var(--primary)" duration={0.5}>
                <span className="text-primary">Font</span>end
              </BoxReveal>
            </p>
            <BoxReveal boxColor="var(--primary)" duration={0.8}>
              <p className="text-8xl font-extrabold">Developer</p>
            </BoxReveal>
          </div>
          <TypingAnimation className="text-md w-full max-w-lg" duration={50}>
            I'm a full-stack developer based in Philippines, I'll help you build
            beautiful websites your users will love
          </TypingAnimation>
        </div>
        <div>
          <IconCloud images={images} />
        </div>
      </section>

      <ProgrammingLab />
    </div>
  );
}

export default App;
