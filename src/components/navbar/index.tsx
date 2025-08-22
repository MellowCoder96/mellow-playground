import { MoonIcon, SunIcon, type Sun } from 'lucide-react';
import { useTheme } from '../theme-provider';
import { AnimatedThemeToggler } from '../ui/animated-theme-toggler';
// import { Button } from "../ui/button";

// const NAV_MENU_ITEMS = [
// 	{
// 		label: "Home",
// 		href: "/",
// 	},
// 	{
// 		label: "Projects",
// 		href: "/",
// 	},
// 	{
// 		label: "About",
// 		href: "/",
// 	},
// ];

export const Navabar = () => {
  const { theme } = useTheme();

  return (
    <header className="px-8">
      <div className="flex h-16 items-center justify-between font-extrabold">
        <p>MELLOWCODER</p>
        {/* <nav className="flex gap-4">
					{NAV_MENU_ITEMS.map((item) => (
						<Button asChild variant="ghost" size="sm">
							<a key={item.label} href={item.href}>
								{item.label}
							</a>
						</Button>
					))}
				</nav> */}
        <AnimatedThemeToggler className="cursor-pointer">
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </AnimatedThemeToggler>
      </div>
    </header>
  );
};
