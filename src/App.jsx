import React, { useEffect } from "react";
import { Dock, Home, HomeMobile, Navbar, Welcome } from "#components";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import {
	Resume,
	Safari,
	Terminal,
	Finder,
	Text,
	Image,
	Contact,
	TerminalMobile,
	FilesMobile,
	SafariMobile,
	ContactMobile,
	AboutMobile,
	ResumeMobile,
	SettingsMobile,
} from "#windows";
import useWallpaperStore, { getSelectedWallpaper } from "#store/wallpaper";

gsap.registerPlugin(Draggable);

const App = () => {
	const { selectedWallpaperId } = useWallpaperStore();

	useEffect(() => {
		// Apply saved wallpaper on mount
		const wallpaper = getSelectedWallpaper();
		if (wallpaper) {
			document.body.style.backgroundImage = `url(${wallpaper.src})`;
			document.body.style.backgroundSize = "cover";
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundPosition = "center";
		}
	}, []); // Empty dependency array - only run on mount

	// Update when selectedWallpaperId changes
	useEffect(() => {
		const wallpaper = getSelectedWallpaper();
		if (wallpaper) {
			document.body.style.backgroundImage = `url(${wallpaper.src})`;
			document.body.style.backgroundSize = "cover";
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundPosition = "center";
		}
	}, [selectedWallpaperId]);

	return (
		<main>
			<Navbar />
			<Welcome />
			<Dock />

			<Terminal />
			<TerminalMobile />
			<Safari />
			<FilesMobile />
			<Resume />
			<Finder />
			<Text />
			<Image />
			<Contact />
			<AboutMobile />
			<SettingsMobile />
			<SafariMobile />
			<ContactMobile />
			<ResumeMobile />
			<Home />
			<HomeMobile />
		</main>
	);
};

export default App;
