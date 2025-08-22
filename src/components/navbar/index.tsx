import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
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
	return (
		<header className="px-8">
			<div className="h-16 flex items-center justify-between font-extrabold">
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
				<AnimatedThemeToggler className="cursor-pointer" />
			</div>
		</header>
	);
};
