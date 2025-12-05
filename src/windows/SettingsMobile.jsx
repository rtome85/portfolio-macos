import { useState, useRef, useEffect } from "react";
import MobileWindowWrapper from "#hoc/MobileWindowWrapper";
import { MobileControls } from "#components";
import {
	ChevronRight,
	Sun,
	Image,
	Wifi,
	Bluetooth,
	Globe,
	Info,
	Lock,
	CreditCard,
	MapPin,
	Battery,
	Clock,
	Type,
	ChevronLeft,
} from "lucide-react";
import { Switch } from "@headlessui/react";
import gsap from "gsap";
import {
	WallpaperSettings,
	TextSettings,
	LanguageSettings,
	AboutSettings,
	BatterySettings,
	ScreenTime,
	WifiSettings,
	BluetoothSettings,
	PearPaySettings,
	PearIdSettings,
	FindMySettings,
} from "./settings";

// Language names mapping
const languageNames = {
	en: "English",
	es: "Spanish",
	fr: "French",
	de: "German",
	it: "Italian",
	pt: "Portuguese",
	zh: "Chinese",
	ja: "Japanese",
	ko: "Korean",
	ar: "Arabic",
};

// Map of page keys to components and titles
const PAGES = {
	wallpaper: { component: WallpaperSettings, title: "Wallpaper" },
	textSize: { component: TextSettings, title: "Text Size" },
	language: { component: LanguageSettings, title: "Language" },
	about: { component: AboutSettings, title: "About" },
	battery: { component: BatterySettings, title: "Battery" },
	screenTime: { component: ScreenTime, title: "Screen Time" },
	wifi: { component: WifiSettings, title: "Wi-Fi" },
	bluetooth: { component: BluetoothSettings, title: "Bluetooth" },
	pearPay: { component: PearPaySettings, title: "PearPay & Wallet" },
	pearId: { component: PearIdSettings, title: "Pear ID & Password" },
	findMy: { component: FindMySettings, title: "Find My (Projects)" },
};

const SettingsMobile = () => {
	const [darkMode, setDarkMode] = useState(false);
	const [activePage, setActivePage] = useState(null);
	const [currentLanguage, setCurrentLanguage] = useState(() => {
		const saved = localStorage.getItem("language");
		return saved ? languageNames[saved] || "English" : "English";
	});
	const mainRef = useRef("#settingsMobile");
	const detailRef = useRef("detail");

	// Listen for language changes
	useEffect(() => {
		const updateLanguage = () => {
			const saved = localStorage.getItem("language");
			setCurrentLanguage(saved ? languageNames[saved] || "English" : "English");
		};

		// Check on mount
		updateLanguage();

		// Update when coming back from language page
		if (activePage === null) {
			updateLanguage();
		}
	}, [activePage]);

	const navigateTo = (page) => {
		console.log("navigateTo", page);
		setActivePage(page);
		// Animate main page out to left, detail page in from right
		gsap.to(mainRef.current, { x: "-100%", duration: 0.3, ease: "power2.out" });
		gsap.fromTo(
			detailRef.current,
			{ x: "100%", display: "block" },
			{ x: "0%", duration: 0.3, ease: "power2.out" }
		);
	};

	const goBack = () => {
		// Animate detail out to right, main in from left
		gsap.to(detailRef.current, {
			x: "100%",
			duration: 0.3,
			ease: "power2.out",
			onComplete: () => setActivePage(null),
		});
		gsap.to(mainRef.current, { x: "0%", duration: 0.3, ease: "power2.out" });
	};

	// Get the active page component
	const ActivePageComponent = activePage ? PAGES[activePage]?.component : null;
	const activePageTitle = activePage ? PAGES[activePage]?.title : null;

	return (
		<>
			{/* Header - changes based on active page */}
			<div id="mobile-header">
				{activePage ? (
					<div className="flex cursor-pointer" role="button" onClick={goBack}>
						<ChevronLeft className="text-[#0278FA]" />
						<p className="text-[#0278FA]">Settings</p>
					</div>
				) : (
					<MobileControls target="settingsMobile" />
				)}
			</div>

			<div className="relative overflow-hidden flex-1">
				<div className="content" ref={mainRef}>
					<h1>Settings</h1>

					{/* Profile Card */}
					<div className="flex items-center gap-2 p-4 rounded-3xl bg-gray-50 justify-between mb-6">
						<img
							src="/images/headshot.webp"
							alt="Settings"
							className="w-18 rounded-full"
						/>
						<div>
							<h3>Roberto Tomé</h3>
							<p className="text-sm text-gray-500">
								Pear Account, oNube+, and more
							</p>
						</div>
						<ChevronRight className="w-6 h-6 text-gray-400" />
					</div>

					{/* Wi-Fi / Bluetooth / Cellular Group */}
					<div className="p-4 rounded-3xl bg-gray-50 mb-6">
						<div
							className="flex items-center gap-2 justify-between w-full border-b border-gray-200 pb-3 mb-3 cursor-pointer"
							onClick={() => navigateTo("wifi")}
						>
							<p className="flex gap-3 items-center">
								<Wifi className="w-6 h-6 text-gray-400 inline-block" />
								Wi-Fi
							</p>
							<div className="flex items-center gap-2">
								<p className="text-sm text-gray-500">Connected</p>
								<ChevronRight className="w-6 h-6 text-gray-400" />
							</div>
						</div>
						<div
							className="flex items-center gap-2 justify-between w-full cursor-pointer"
							onClick={() => navigateTo("bluetooth")}
						>
							<p className="flex gap-3 items-center">
								<Bluetooth className="w-6 h-6 text-gray-400 inline-block" />
								Bluetooth
							</p>
							<div className="flex items-center gap-2">
								<p className="text-sm text-gray-500">On</p>
								<ChevronRight className="w-6 h-6 text-gray-400" />
							</div>
						</div>
					</div>

					{/* Display & Brightness Group */}
					<div className="p-4 rounded-3xl bg-gray-50 mb-6">
						<div className="flex items-center gap-2 justify-between w-full border-b border-gray-200 pb-3 mb-3">
							<p className="flex gap-3 items-center">
								<Sun className="w-6 h-6 text-gray-400 inline-block" />
								Dark Mode
							</p>
							<Switch
								checked={darkMode}
								onChange={setDarkMode}
								className="group relative flex h-7 w-16 cursor-pointer rounded-full bg-white p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-[#0278FA]/10 data-focus:outline data-focus:outline-white"
							>
								<span
									aria-hidden="true"
									className="pointer-events-none inline-block h-5 w-7 translate-x-0 rounded-full bg-[#0278FA] shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-7"
								/>
							</Switch>
						</div>
						<div
							className="flex items-center gap-2 justify-between w-full border-b border-gray-200 pb-3 mb-3"
							onClick={() => navigateTo("wallpaper")}
						>
							<p className="flex gap-3 items-center">
								<Image className="w-6 h-6 text-gray-400 inline-block" />
								Wallpaper
							</p>
							<ChevronRight className="w-6 h-6 text-gray-400" />
						</div>
						<div
							className="flex items-center gap-2 justify-between w-full cursor-pointer"
							onClick={() => navigateTo("textSize")}
						>
							<p className="flex gap-3 items-center">
								<Type className="w-6 h-6 text-gray-400 inline-block" />
								Text Size
							</p>
							<ChevronRight className="w-6 h-6 text-gray-400" />
						</div>
					</div>

					{/* General Group */}
					<div className="p-4 rounded-3xl bg-gray-50 mb-6">
						<div
							className="flex items-center gap-2 justify-between w-full border-b border-gray-200 pb-3 mb-3 cursor-pointer"
							onClick={() => navigateTo("language")}
						>
							<p className="flex gap-3 items-center">
								<Globe className="w-6 h-6 text-gray-400 inline-block" />
								Language
							</p>
							<div className="flex items-center gap-2">
								<p className="text-sm text-gray-500">{currentLanguage}</p>
								<ChevronRight className="w-6 h-6 text-gray-400" />
							</div>
						</div>
						<div
							className="flex items-center gap-2 justify-between w-full cursor-pointer"
							onClick={() => navigateTo("about")}
						>
							<p className="flex gap-3 items-center">
								<Info className="w-6 h-6 text-gray-400 inline-block" />
								About
							</p>
							<ChevronRight className="w-6 h-6 text-gray-400" />
						</div>
					</div>

					{/* Pear Services Group */}
					<div className="p-4 rounded-3xl bg-gray-50 mb-6">
						<div
							className="flex items-center gap-2 justify-between w-full border-b border-gray-200 pb-3 mb-3 cursor-pointer"
							onClick={() => navigateTo("pearId")}
						>
							<p className="flex gap-3 items-center">
								<Lock className="w-6 h-6 text-gray-400 inline-block" />
								Pear ID & Password
							</p>
							<ChevronRight className="w-6 h-6 text-gray-400" />
						</div>
						<div
							className="flex items-center gap-2 justify-between w-full border-b border-gray-200 pb-3 mb-3 cursor-pointer"
							onClick={() => navigateTo("pearPay")}
						>
							<p className="flex gap-3 items-center">
								<CreditCard className="w-6 h-6 text-gray-400 inline-block" />
								PearPay & Wallet
							</p>
							<ChevronRight className="w-6 h-6 text-gray-400" />
						</div>
						<div
							className="flex items-center gap-2 justify-between w-full cursor-pointer"
							onClick={() => navigateTo("findMy")}
						>
							<p className="flex gap-3 items-center">
								<MapPin className="w-6 h-6 text-gray-400 inline-block" />
								Find My (Projects)
							</p>
							<ChevronRight className="w-6 h-6 text-gray-400" />
						</div>
					</div>

					{/* System Info Group */}
					<div className="p-4 rounded-3xl bg-gray-50 mb-6">
						<div
							className="flex items-center gap-2 justify-between w-full border-b border-gray-200 pb-3 mb-3 cursor-pointer"
							onClick={() => navigateTo("battery")}
						>
							<p className="flex gap-3 items-center">
								<Battery className="w-6 h-6 text-gray-400 inline-block" />
								Battery
							</p>
							<div className="flex items-center gap-2">
								<p className="text-sm text-gray-500">100%</p>
								<ChevronRight className="w-6 h-6 text-gray-400" />
							</div>
						</div>
						<div
							className="flex items-center gap-2 justify-between w-full cursor-pointer"
							onClick={() => navigateTo("screenTime")}
						>
							<p className="flex gap-3 items-center">
								<Clock className="w-6 h-6 text-gray-400 inline-block" />
								Screen Time
							</p>
							<ChevronRight className="w-6 h-6 text-gray-400" />
						</div>
					</div>
				</div>
				{/* Detail Page Container */}
				<div
					ref={detailRef}
					className="content absolute inset-0 overflow-y-auto"
					style={{ transform: "translateX(100%)", display: "none" }}
				>
					{ActivePageComponent && <ActivePageComponent goBack={goBack} />}
				</div>
			</div>
		</>
	);
};

const SettingsMobileWindow = MobileWindowWrapper(
	SettingsMobile,
	"settingsMobile"
);

export default SettingsMobileWindow;
