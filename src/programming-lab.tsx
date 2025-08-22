import confetti from 'canvas-confetti';
import { ConfettiButton } from './components/magicui/confetti';
import { Button } from './components/ui/button';

const ProgrammingLab = () => {
  function triggerCanonConfetti() {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ['#a786ff', '#fd8bbc', '#eca184', '#f8deb1'];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 45,
        origin: { x: 0, y: 0.7 },
        colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 45,
        origin: { x: 1, y: 0.7 },
        colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  }

  const showerConfetti = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ['#a786ff', '#fd8bbc', '#eca184', '#f8deb1'];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 0,
        spread: 55,
        startVelocity: 45,
        origin: { x: 0.2, y: 0 },
        colors,
      });
      confetti({
        particleCount: 2,
        angle: 180,
        spread: 55,
        startVelocity: 45,
        origin: { x: 0.8, y: 0 },
        colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  const fireworkConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  return (
    <section className="bg-background flex h-screen w-full flex-col items-center justify-center">
      <div className="shadow-muted bg-background border-muted flex h-52 w-fit flex-col items-center justify-center gap-4 rounded-2xl border p-8 shadow-md">
        <h1 className="text-primary text-6xl font-medium">
          Javascript Programming Lab
        </h1>
        <p className="text-muted-foreground font-medium">
          KJ Bobier | Full Stack Web Developer
        </p>
        <div className="flex justify-center">
          <div className="flex items-center justify-center gap-2">
            <ConfettiButton>Confetti 🎊</ConfettiButton>
            <ConfettiButton onClick={triggerCanonConfetti}>
              Trigger Canons 🎊
            </ConfettiButton>
            <Button>Button 2</Button>
            <ConfettiButton onClick={showerConfetti}>
              Shower Confetti 🎊
            </ConfettiButton>
            <ConfettiButton onClick={fireworkConfetti}>
              Firework Confetti 🎆🎊
            </ConfettiButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammingLab;
