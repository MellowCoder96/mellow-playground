import * as React from "react";

import { ConfettiButton } from "./magicui/confetti";
import { Button } from "./ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "./ui/dialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import confetti from "canvas-confetti";
import { PaintBucketIcon, User2Icon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod/v3";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "./ui/alert-dialog";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

const profileSchema = z.object({
	firstName: z.string().min(1, { message: "First name is required" }),
	lastName: z.string().min(1, { message: "Last name is required" }),
	favHobby: z.string().min(1, { message: "Favorite hobby is required" }),
	favFood: z.string().min(1, { message: "Favorite food is required" }),
	birthDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
		message: "Birth date must be in YYYY-MM-DD format",
	}),
});

type ProfileSchema = z.infer<typeof profileSchema>;

const ProgrammingLab = () => {
	const [profileDialogOpened, setProfileDialogOpened] = React.useState(false);
	const [changeThemeOpened, setChangeThemeOpened] = React.useState(false);
	const form = useForm<ProfileSchema>({
		resolver: zodResolver(profileSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			favHobby: "",
			favFood: "",
			birthDate: "",
		},
	});

	function triggerCanonConfetti() {
		const end = Date.now() + 3 * 1000; // 3 seconds
		const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

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
		const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

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

	const getAge = (birthDate: string) => {
		const today = Date.now();

		return Math.floor(
			(today - new Date(birthDate).getTime()) / (1000 * 60 * 60 * 24 * 365.25),
		);
	};

	const onSaveProfile = () => {
		toast.success("Profile saved successfully!", {
			duration: 5000,
		});

		setProfileDialogOpened(false);

		fireworkConfetti();
	};

	return (
		<section className="bg-background flex h-screen w-full flex-col items-center justify-center">
			<div className="shadow-muted bg-background border-muted flex min-h-52 w-fit flex-col items-center justify-center gap-4 rounded-2xl border p-8 shadow-md">
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
						<Button onClick={() => setProfileDialogOpened(true)}>
							<User2Icon className="size-4" /> Show Profile
						</Button>
						<Button onClick={() => setChangeThemeOpened(true)}>
							<PaintBucketIcon className="size-4" /> Change Theme
						</Button>
						<ConfettiButton onClick={showerConfetti}>
							Shower Confetti 🎊
						</ConfettiButton>
						<ConfettiButton onClick={fireworkConfetti}>
							Firework Confetti 🎆🎊
						</ConfettiButton>
					</div>
				</div>

				{/* Profile Info */}
				<h4 className="text-muted-foreground self-start text-lg font-medium">
					Your Profile Information
				</h4>
				<div className="text-muted-foreground mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
					<p>First Name: {form.getValues("firstName")}</p>
					<p>Last Name: {form.getValues("lastName")}</p>
					<p>Birth Date: {form.getValues("birthDate")}</p>
					<p>
						Age:{" "}
						{form.watch("birthDate").length < 1
							? "YYYY-MM-DD"
							: getAge(form.getValues("birthDate"))}
					</p>
					<p>Favorite Hobby: {form.getValues("favHobby")}</p>
					<p>Favorite Food: {form.getValues("favFood")}</p>
				</div>
			</div>

			<Dialog open={profileDialogOpened} onOpenChange={setProfileDialogOpened}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Your Profile</DialogTitle>
					</DialogHeader>
					<DialogDescription></DialogDescription>

					<Form {...form}>
						<form
							className="flex flex-col gap-4"
							onSubmit={form.handleSubmit(onSaveProfile)}
						>
							<FormField
								control={form.control}
								name="firstName"
								render={({ field }) => (
									<FormItem>
										<FormLabel>First Name</FormLabel>
										<FormControl>
											<Input {...field} placeholder="Enter first name" />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="lastName"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Last Name</FormLabel>
										<FormControl>
											<Input {...field} placeholder="Enter last name" />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="birthDate"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Birth Date</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder="Enter birthdate (YYYY-MM-DD)"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="favHobby"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Favorite Hobby</FormLabel>
										<FormControl>
											<Input {...field} placeholder="Enter favorite hobby" />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="favFood"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Favorite Food</FormLabel>
										<FormControl>
											<Input {...field} placeholder="Enter favorite food" />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button type="submit">Save profile</Button>
						</form>
					</Form>
				</DialogContent>
			</Dialog>

			<AlertDialog open={changeThemeOpened} onOpenChange={setChangeThemeOpened}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>
							Do you want to change the theme?
						</AlertDialogTitle>
						<AlertDialogDescription>
							This will change the theme of the entire application. Are you
							sure?
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogAction asChild>
							<AnimatedThemeToggler>Change Theme</AnimatedThemeToggler>
						</AlertDialogAction>
						<AlertDialogCancel>Close</AlertDialogCancel>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</section>
	);
};

export default ProgrammingLab;
