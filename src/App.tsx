import { BoxReveal } from "./components/magicui/box-reveal";
import { Ripple } from "./components/magicui/ripple";
import { TypingAnimation } from "./components/magicui/typing-animation";
import { Navabar } from "./components/navbar";
import { IconCloud } from "./components/ui/icon-cloud";
import "./index.css";
import ProgrammingLab from "./programming-lab";

const slugs = [
	"typescript",
	"javascript",
	"dart",
	"java",
	"react",
	"flutter",
	"android",
	"html5",
	"css3",
	"nodedotjs",
	"express",
	"nextdotjs",
	"prisma",
	"amazonaws",
	"postgresql",
	"firebase",
	"nginx",
	"vercel",
	"testinglibrary",
	"jest",
	"cypress",
	"docker",
	"git",
	"jira",
	"github",
	"gitlab",
	"visualstudiocode",
	"androidstudio",
	"sonarqube",
	"figma",
];

function App() {
	const images = slugs.map(
		(slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
	);

	return (
		<div className="flex flex-col min-h-screen bg-background">
			<Ripple />
			<Navabar />
			<section className="min-h-full flex flex-col justify-center items-center w-full grow">
				<img
					className="object-cover rounded-full overflow-hidden mb-4 size-28 outline-2 outline-primary"
					src="/profile.jpg"
					alt="profile"
				/>
				<div className="gap-4 text-center flex flex-col items-center">
					<p className="text-muted-foreground font-semibold text-lg">
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
					<TypingAnimation
						className="w-full max-w-lg text-md"
						duration={50}
					>
						I'm a full-stack developer based in Philippines, I'll
						help you build beautiful websites your users will love
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
